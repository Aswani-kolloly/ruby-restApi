import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:AdminService,private router:Router){}
  canActivate():boolean{
    if(this.service.loginCheck())
    return true;
    else
    {
      this.router.navigate(['adminlogin']);
      return false;
    }
  }
}
