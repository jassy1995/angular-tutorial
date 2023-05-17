import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  incoming_id: any = 0;

  ngOnInit() {
    this.incoming_id = this.route.snapshot.paramMap.get('id')
  }

}
