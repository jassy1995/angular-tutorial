import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopsRoutingModule } from './shops-routing.module';
import { ShopsComponent } from './components/shop-list/shops.component';
import { ShopDetailComponent } from './components/shop-detail/shop-detail.component';


@NgModule({
  declarations: [
    ShopsComponent,
    ShopDetailComponent
  ],
  imports: [
    CommonModule,
    ShopsRoutingModule
  ]
})
export class ShopsModule { }
