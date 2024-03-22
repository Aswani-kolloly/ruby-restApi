import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var b = document.querySelector("#users") as HTMLAnchorElement
    b.className = "nav-link  active"
    $("#dataTable").DataTable();
  }

}
