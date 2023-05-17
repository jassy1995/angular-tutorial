import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopsComponent } from './components/shop-list/shops.component';
import { ShopDetailComponent } from './components/shop-detail/shop-detail.component';

const routes: Routes = [
  { path: '', component: ShopsComponent },
  { path: 'detail', component: ShopDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule { }
