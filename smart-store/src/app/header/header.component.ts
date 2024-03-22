import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: string | null | undefined;

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("user_token"))
    {
      this.user=localStorage.getItem("user")
    }
  }
  search(qstring:String){
    
    if(qstring!='')
    {
    console.log(qstring)
    this.router.navigateByUrl("products?qstr="+qstring).then(() => {
      window.location.reload();
    });
    }
    
  }
  logout(){
    localStorage.removeItem("user_token")
    localStorage.removeItem("user")
    console.log("logout success")
    window.location.reload()
  }

}
