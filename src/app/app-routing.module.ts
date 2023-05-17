import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UserComponent } from './components/user/user.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full" },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', component: UserComponent },
      { path: 'product', component: ProductComponent },
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact/:phone', component: ContactComponent },
  { path: 'customers', loadChildren: () => import('./shared/customers/customers.module').then(m => m.CustomersModule) },
  { path: 'orders', loadChildren: () => import('./shared/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'shops', loadChildren: () => import('./shared/shops/shops.module').then(m => m.ShopsModule) },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
