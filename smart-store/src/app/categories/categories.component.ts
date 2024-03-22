import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categorylist: any;

  constructor(private service:AdminService) { }

  ngOnInit(): void {

    this.service.viewCategoryList().subscribe((resp: any) => {
      console.log(resp)
     this.categorylist=resp
     })
  }

}
