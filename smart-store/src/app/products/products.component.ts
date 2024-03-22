import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  category: any;
  qstring: any
  products: any
  wishlist: any
  logged_In: number | undefined;

  constructor(private Activatedroute: ActivatedRoute, private service: AdminService) { }

  ngOnInit(): void {

    this.category = this.Activatedroute.snapshot.queryParamMap.get('id') || 0;
    this.qstring = this.Activatedroute.snapshot.queryParamMap.get('qstr') || '';
    console.log("query parameter:" + this.category);
    if (this.category) {
      this.service.viewProducts(this.category).subscribe((resp: any) => {
        console.log(resp)
        this.products = resp
      })
    }
    else if (this.qstring) {
      const data = new FormData();
      data.append("keyword", this.qstring)
      this.service.searchProducts(data).subscribe((resp: any) => {
        console.log(resp)
        this.products = resp
      })
    }
    if (localStorage.getItem("user_token")) {
      this.logged_In = 1
      this.service.getWishlist().subscribe((resp: any) => {
        console.log("wishlist", resp)
        this.wishlist = resp
        for (let obj of this.wishlist) {
          if (document.getElementById(obj.productId)) {
            var b = document.getElementById(obj.productId) as HTMLAnchorElement
            b.style.color = "#D10024"
          }
        }
      })
    }
  }
  addToWishlist(productId: any) {
    if (this.logged_In == 1) {
      var b = document.getElementById(productId) as HTMLAnchorElement
      console.log(b.style.color)
      if (b.style.color == "rgb(209, 0, 36)") {
        console.log("red")
        this.service.removeFromWishlist(productId).subscribe((resp: any) => {
          console.log(resp)
          b.style.color = "#000"
        })
      }
      else {
        console.log(b.style.color)
        this.service.addToWishlist(productId).subscribe((resp: any) => {
          console.log(resp)

          b.style.color = "#D10024"

        })
      }

    }
    else
      alert("plz login")
  }
  addToCart(productId: any) {

    if (this.logged_In == 1) {
      var b = document.getElementById("cart" + productId) as HTMLAnchorElement
      console.log(b.style.color)
      if (b.style.color == "rgb(209, 0, 36)") {
        console.log("red")
        this.service.removeFromCart(productId).subscribe((resp: any) => {
          console.log(resp)
          b.style.color = "#000"
        })
      }
      else {
        console.log(b.style.color)
        this.service.addToCart(productId).subscribe((resp: any) => {
          console.log(resp)
          b.style.color = "#D10024"

        })
      }

    }
    else
      alert("plz login")
  }



}
