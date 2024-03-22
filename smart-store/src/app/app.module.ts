import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './services/auth.interceptor';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,   
    HeaderComponent,
    FooterComponent,
    NewProductsComponent,
    ProductViewComponent,
    CheckOutComponent,
    WishlistComponent,
    LoginComponent,
    SignupComponent,
    ProductsComponent,
    CartComponent,
    CategoriesComponent,
    AdminLoginComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [
    AuthGuard,
    {provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
