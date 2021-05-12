import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";

import { Router } from '@angular/router';
import { DeliverymethodService } from 'src/app/deliverymethod.service';
import { Deliverym } from '../deliverymethod/deliverymethod';


@Component({
  selector: 'app-deliverymethod-list',
  templateUrl: './deliverymethod-list.component.html',
  styleUrls: ['./deliverymethod-list.component.css']
})
export class DeliverymethodListComponent implements OnInit {
  deliverymethods: Observable<Deliverym[]>;

  constructor(private deliverymethodService: DeliverymethodService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.deliverymethods = this.deliverymethodService.getDeliveryMethodList()
  }

  deleteDeliverym(id: number) {
    this.deliverymethodService.deleteDeliverym(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  deliverymDetails(id: number){
    this.router.navigate(['details', id]);
  }

}
