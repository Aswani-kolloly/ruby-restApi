import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var b = document.querySelector("#stock") as HTMLAnchorElement
    b.className = "nav-link  active"
    $("#dataTable").DataTable();
  }

}
