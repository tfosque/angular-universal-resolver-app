import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  /* BEHAVIORSUBJECT doesn't work like normall behavior subject in a angular resolved route */
  // routerSnapShotData = new BehaviorSubject<any>(this.route.snapshot.data.productModel);
  routerSnapShotData = this.route.snapshot.data.productModel;

  constructor(
    readonly route: ActivatedRoute,
    readonly router: Router,

  ) { }

  ngOnInit(): void {
    console.log('this:routerSnapShotData:resolved-route', this.routerSnapShotData)
    console.log('type:', typeof this.routerSnapShotData);
  }
}
