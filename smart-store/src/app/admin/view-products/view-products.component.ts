import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  range: any;
  list: any;

  constructor(private service:AdminService) { }

  ngOnInit(): void {
    var b = document.querySelector("#vprod") as HTMLAnchorElement
    b.className = "nav-link  active"
   /* $("#dataTable").DataTable();*/
   this.service.viewProductList().subscribe((resp: any) => {
    this.range = resp.length;
    this.list = resp;
    console.log(resp)

  })
  }
  deleteProduct(id:any) {
    if (confirm('Are you sure you want to delete this?')) {
      // TODO:  Do something here if the answer is "Ok".
      this.service.deleteProduct(id).subscribe((resp: any) => {
           window.location.reload();
          
         // console.log(resp);
        
      })

    }
  }

}
