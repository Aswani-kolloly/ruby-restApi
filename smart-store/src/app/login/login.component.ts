import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  response: any;
  invalid = false
  error_message:any
  submitted= false 
  
  constructor(private formBuilder: FormBuilder,private router: Router,private service: AdminService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      
      phone:['',[Validators.required,Validators.pattern("^[0-9]{10}$")]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]     
    });
  }

  login(){
    this.submitted=true      
    if (this.loginForm.valid) {
      
      const phone = this.loginForm.value.phone; 
        const password = this.loginForm.value.password;
        const formdata = {
          "phone": phone,         
          "password":password,        
          
        }
        
          console.log(formdata)
        this.service.userlogin(formdata).subscribe((data:any)=>{
         
            this.response=data;
            console.log(this.response)
             console.log(this.response.accessToken.value);
            localStorage.setItem("user_token","Smartstore "+this.response.accessToken.value);
             localStorage.setItem("user",this.response.name);
            this.router.navigateByUrl("");
          
        },
        (error:HttpErrorResponse)=>{
          if(error.status==400)
            this.error_message="Invalid username or password";
            console.log(error);
            //console.log(error.error[Object.keys(error.error)[0]]);
          })
  
       
    }
    else
    this.invalid=true;
  }

}
