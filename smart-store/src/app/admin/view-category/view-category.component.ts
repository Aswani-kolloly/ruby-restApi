import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';



@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  range:any
  list:any
  constructor(private service:AdminService,private router:Router) { }

  ngOnInit(): void {
    var b = document.querySelector("#vcat") as HTMLAnchorElement
    b.className = "nav-link  active"
  
    this.service.viewCategoryList().subscribe((resp: any) => {
      this.range = resp.length;
      this.list = resp;

    })

  }
  deleteCategory(id:any) {
    if (confirm('Are you sure you want to delete this?')) {
      // TODO:  Do something here if the answer is "Ok".
      this.service.deleteCategory(id).subscribe((resp: any) => {
           window.location.reload();
          
         // console.log(resp);
        
      })

    }
  }
}
