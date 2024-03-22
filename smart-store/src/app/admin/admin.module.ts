import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { OrderRequestsComponent } from './order-requests/order-requests.component';
import { StockComponent } from './stock/stock.component';
import { CancelledOrdersComponent } from './cancelled-orders/cancelled-orders.component';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminComponent,
    AdminHeaderComponent,   
    AddCategoryComponent,
    AdminFooterComponent,
    AddProductComponent,
    ViewCategoryComponent,
    ViewProductsComponent,
    OrderRequestsComponent,
    StockComponent,
    CancelledOrdersComponent,
    UsersComponent,
 
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule,
      
  ],
  
})
export class AdminModule { }
