import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './components/order-list/orders.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';


@NgModule({
  declarations: [
    OrdersComponent,
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
