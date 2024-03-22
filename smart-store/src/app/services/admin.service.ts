import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  env = environment;

  constructor(private http: HttpClient) { }

  login(name: any, password: any): Observable<any> {
    const data = { name, password };
    const body = JSON.stringify(data);
    return this.http.post(`${this.env.apiUrl}/adminlogin`, body);

  }
  saveCategory(formdata: any): Observable<any> {
    return this.http.post(`${this.env.apiUrl}/category`, formdata)

  }
  viewCategory(id: any): Observable<any> {
    return this.http.get(`${this.env.apiUrl}/category/${id}`)

  }
  
  updateCategory(id: any, formdata: any): Observable<any> {
    return this.http.put(`${this.env.apiUrl}/category/${id}`, formdata)

  }
  viewCategoryList(): Observable<any>{
    return this.http.get(`${this.env.apiUrl}/category/categorylist`)
  }
  
  deleteCategory(id:any): Observable<any>{
    return this.http.delete(`${this.env.apiUrl}/category/${id}`)

  }
  saveProduct(formdata: any): Observable<any> {
    return this.http.post(`${this.env.apiUrl}/products`, formdata)

  }
  viewProduct(id: any): Observable<any> {
    return this.http.get(`${this.env.apiUrl}/products/${id}`)

  }
  viewProducts(categoryid: any): Observable<any> {
    return this.http.get(`${this.env.apiUrl}/products/category/${categoryid}`)

  }
  searchProducts(formdata: any): Observable<any> {
    return this.http.post(`${this.env.apiUrl}/products/search/`,formdata)

  }
  viewProductList(): Observable<any>{
    return this.http.get(`${this.env.apiUrl}/products/list`)
  }
  
  deleteProduct(id:any): Observable<any>{
    return this.http.delete(`${this.env.apiUrl}/products/${id}`)

  }
  updateProduct(id: any, formdata: any): Observable<any> {
    return this.http.put(`${this.env.apiUrl}/products/${id}`, formdata)

  }
  signup(formdata: any): Observable<any> {
    const body=JSON.stringify(formdata);
    return this.http.post(`${this.env.apiUrl}/users`, body)

  }
  userlogin(formdata: any): Observable<any> {
    const body=JSON.stringify(formdata);
    return this.http.post(`${this.env.apiUrl}/login`, body)

  }
  addToWishlist(id: any): Observable<any> {
    return this.http.post(`${this.env.apiUrl}/wishlist`,id)

  }
  getWishlist(): Observable<any> {
    return this.http.get(`${this.env.apiUrl}/wishlist`)

  }
  removeFromWishlist(id: any): Observable<any> {
    return this.http.delete(`${this.env.apiUrl}/wishlist/${id}`)

  }
  addToCart(id: any): Observable<any> {
    return this.http.post(`${this.env.apiUrl}/cart`,id)

  }
  getCart(): Observable<any> {
    return this.http.get(`${this.env.apiUrl}/cart`)

  }
  removeFromCart(id: any): Observable<any> {
    return this.http.delete(`${this.env.apiUrl}/cart/${id}`)

  }
  placeorder(formdata: any): Observable<any> {
    return this.http.post(`${this.env.apiUrl}/order`,formdata)

  }
  viewOrderRequests(): Observable<any> {
    return this.http.get(`${this.env.apiUrl}/order/list`)

  }
  loginCheck(){
    return !!localStorage.getItem("token");
  }
}
