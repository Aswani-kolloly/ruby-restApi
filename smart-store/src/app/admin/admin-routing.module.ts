import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { AdminComponent } from './admin.component';
import { CancelledOrdersComponent } from './cancelled-orders/cancelled-orders.component';
import { OrderRequestsComponent } from './order-requests/order-requests.component';
import { StockComponent } from './stock/stock.component';
import { UsersComponent } from './users/users.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [
  {path:'',component:AdminComponent,children:[
    {path:'dashboard',component:AdminDashboardComponent},
    {path:'addcategory',component:AddCategoryComponent},
    {path:'addproduct',component:AddProductComponent},
    {path:'viewcategory',component:ViewCategoryComponent},
    {path:'viewproducts',component:ViewProductsComponent},
    {path:'viewusers',component:UsersComponent},
    {path:'orderrequests',component:OrderRequestsComponent},
    {path:'stock',component:StockComponent},
    {path:'cancelledorders',component:CancelledOrdersComponent}
   
    
  ]}]
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
