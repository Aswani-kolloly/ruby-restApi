import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  toggle() {
   
    var b=document.querySelector("#body") as HTMLBodyElement
    if(b.className=="sb-sidenav-toggled")
    b.className="sb-nav-fixed"
    else
    b.className="sb-sidenav-toggled"

  }
  logout(){
    localStorage.removeItem("token");
    this.router.navigateByUrl("adminlogin");
  }
  
}
