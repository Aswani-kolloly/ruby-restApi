import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  param: any;
  product: any;

  constructor(private Activatedroute:ActivatedRoute,private service:AdminService) { }

  ngOnInit(): void {
    this.param = this.Activatedroute.snapshot.queryParamMap.get('id') || 0;
    console.log("query parameter:" + this.param);
    this.service.viewProduct(this.param).subscribe((resp: any) => {
      console.log(resp)
      this.product=resp
    })
    } 

}
