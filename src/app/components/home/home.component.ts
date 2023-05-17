import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private router: Router
  ) { }

  gotoProduct(product_id: number) {
    this.router.navigate(['/home/product', { id: product_id, name: 'Babatunde' }]);
  }
}
