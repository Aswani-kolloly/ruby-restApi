import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-order-requests',
  templateUrl: './order-requests.component.html',
  styleUrls: ['./order-requests.component.css']
})
export class OrderRequestsComponent implements OnInit {

  constructor(private service:AdminService) { }

  ngOnInit(): void {
    var b = document.querySelector("#orderrequest") as HTMLAnchorElement
    b.className = "nav-link  active"
    this.service.viewOrderRequests().subscribe((resp: any) => {
      console.log(resp)
    
     })
  }

}
