import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancelled-orders',
  templateUrl: './cancelled-orders.component.html',
  styleUrls: ['./cancelled-orders.component.css']
})
export class CancelledOrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var b = document.querySelector("#cancelledorders") as HTMLAnchorElement
    b.className = "nav-link  active"
    $("#dataTable").DataTable();
  }

}
