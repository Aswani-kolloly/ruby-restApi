import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit { 
 
  products: any;
  range: any;
  wishlist: any=[];
  prod: any;
 

  constructor(private service: AdminService,private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("user_token"))
    {
      this.service.getWishlist().subscribe((resp: any) => {
        console.log("wishlist",resp)
        this.wishlist=resp
       
      })
           
   
    }
    else
    this.router.navigateByUrl("login")    
  }
  removeFromWishlist(id:any){

    this.service.removeFromWishlist(id).subscribe((resp: any) => {
      console.log(resp)
      })
      window.location.reload()
  }

}
