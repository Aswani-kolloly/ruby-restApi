import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm!: FormGroup
  username: any
  password:any
  submitted = false
  invalid = false
  error_message:any
  response:any;
 
  constructor(private router: Router, private fb: FormBuilder, private service: AdminService) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*")]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  login() {
    this.submitted = true;
    
    if (this.loginForm.valid) {
       
        const username = this.loginForm.value.username;
        const password = this.loginForm.value.password;
        this.service.login(username, password).subscribe((data:any)=>{
         
            this.response=data;
            console.log(this.response)
            console.log(this.response.accessToken.value);
            localStorage.setItem("token","Smartstore "+this.response.accessToken.value);
            localStorage.setItem("currentUser",this.response.name);
            this.router.navigateByUrl("admin/dashboard");
          
        },
        (error:HttpErrorResponse)=>{
          if(error.status==400)
            this.error_message="Invalid username or password";
            //console.log(error);
            //console.log(error.error[Object.keys(error.error)[0]]);
          })
  
       
    }
    else
    this.invalid=true;
  }

}
