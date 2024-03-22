import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  otpsuccess=false;
  response: any;
  invalid = false
  error_message:any
  constructor(private formBuilder: FormBuilder,private router: Router,private service: AdminService) { }

 
  ngOnInit(): void {this.registerForm = this.formBuilder.group({
      
    name: ['', [Validators.required,Validators.minLength(4), Validators.maxLength(20)]],
    phone:['',[Validators.required,Validators.pattern("^[0-9]{10}$")]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
    cPassword: ['',[Validators.required,Validators.minLength(6), Validators.maxLength(15)]],
    accType:[''],
   
    
  });
}

register(){
  this.submitted = true;
    
  if (this.registerForm.valid) {
     
      const username = this.registerForm.value.name;
      const phone = this.registerForm.value.phone;
      const email = this.registerForm.value.email;
      const password = this.registerForm.value.password;
      const formdata = {
        "name": username,
        "email":email,
        "phone":phone,
        "password":password,
        "accType":1
        
      }
      
        console.log(formdata)
      this.service.signup(formdata).subscribe((data:any)=>{
       
          this.response=data;
          console.log(this.response)
          // console.log(this.response.accessToken.value);
           localStorage.setItem("user_token","Smartstore "+this.response.accessToken.value);
           localStorage.setItem("user",this.response.name);
          this.router.navigateByUrl("login");
        
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


