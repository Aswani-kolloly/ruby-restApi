import { Injectable } from '@angular/core';
import {  HttpRequest,HttpHandler, HttpEvent,HttpInterceptor,HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
user_token:any;
admin_token:any;
headers:any;
req:any;
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.user_token = localStorage.getItem("user_token") || '{}';
    this.admin_token = localStorage.getItem("token") || '{}';

    //API's from both admin and user side those need only content-type
        if(request.url.includes("/login")
          ||request.url.includes("/adminlogin")
          ||request.url.includes("/categories")
          ||request.url.includes("/products")
          ||request.url.includes("/users")
          ||request.url.includes("/signup"))
         {
            this.headers=new HttpHeaders({ 'Content-type': 'application/json'})
          }


    //API's from both admin and user side those need AUTHORIZATION-key
        if(request.url.includes("/category")
          ||request.url.includes("/product"))
         
          {
                this.headers=new HttpHeaders({'Authorization':this.admin_token })
          }


    //API's those need both Content-Type and AUTHORIZATION-key
        if(request.url.includes("category/categorylist")
        ||request.url.includes("products/list")
        ||request.url.includes("order/list"))
       
        {
          
          this.headers=new HttpHeaders({'Content-type': 'application/json' ,'Authorization':this.admin_token})
        }
        if(request.url.includes("/cart")&&request.method=="POST")
        {
          this.headers=new HttpHeaders({'Authorization':this.user_token })
        }  
        if((request.url.includes("/orders")
          ||request.url.includes("/wishlist")
          || request.url.includes("/cart"))
          &&request.method=="GET")
        {
          this.headers=new HttpHeaders({'Content-type': 'application/json', 'Authorization':this.user_token })
        }  
            
    this.req=request.clone({headers:this.headers});
      
        return next.handle(this.req).pipe(
          catchError(err=>{
            if(err.status==403)
            {
              console.log(err);           
              
                //alert("Session expired.Plz login")              
                
                //window.location.href="/";               
             
                
            }
           
            return throwError(err);
          }));    
   
  }
}



