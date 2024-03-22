import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from './services/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'products',component:ProductsComponent},
  {path:'viewproduct',component:ProductViewComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'cart',component:CartComponent},
  {path:'login',component:LoginComponent},
  {path:'adminlogin',component:AdminLoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'checkout',component:CheckOutComponent},
  {path:'admin',loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule),canActivate:[AuthGuard]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
