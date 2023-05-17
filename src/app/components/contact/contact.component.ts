import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(
    private route: ActivatedRoute
  ) { }

  user_phone: any = 0;
  ngOnInit() {
    this.user_phone = this.route.snapshot.paramMap.get('phone')
  }

}
