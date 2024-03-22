import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any;
  gtotal = 0  
 
  constructor(private service: AdminService) { }

  ngOnInit(): void {
    if (localStorage.getItem("user_token")) {

      this.service.getCart().subscribe((resp: any) => {
        console.log("cart list", resp)
        this.cart = resp
      })
    }
  }
  place_order() {
    
    let a=document.getElementById("address") as HTMLTextAreaElement
    let address=a.value
  
    console.log("adrs:",address,this.gtotal)
    var i:number = 0
    var data:any=[]
    // data=[
    //   {"productId":6,"quantity":1},
    //   {"productId":7,"quantity":1},
     
    // ];
    // let data: Number[][] = [this.cart.length][2]
    // data=[[6,1],[7,2]]
    for (let obj of this.cart)
     {
      let qty = document.getElementById(obj.cartId)?.innerText    
      console.log("qty",qty)  
     data[i]={
    "productId":obj.productId,
     "quantity":Number(qty)
    }
     
      i++
    }
    
   // console.log(this.data)
    let total=this.gtotal
    let data1={"address":address,"total":total}
    const formdata = new FormData()   
    formdata.append("orderdata", JSON.stringify(data1))    
    formdata.append("childdata", JSON.stringify(data)) 
  
    this.service.placeorder(formdata).subscribe((resp: any) => {
      console.log(resp)
     
    })
  }
  add_price(price: any, cartId: any) {
    this.gtotal += price
    if (cartId != null) {
      var b = document.getElementById(cartId) as HTMLSpanElement
      let qty = Number(b.innerText)
      qty += 1
      b.innerText = qty.toString()
    }
  }
  minus_price(price: any, cartId: any) {
    this.gtotal -= price
    if (cartId != null) {
      var b = document.getElementById(cartId) as HTMLSpanElement
      let qty = Number(b.innerText)
      qty -= 1
      b.innerText = qty.toString()
    }
  }
  removeFromcart(cartId: any) {
    this.service.removeFromCart(cartId).subscribe((resp: any) => {
      console.log(resp)
      window.location.reload()
    })
  }
}
