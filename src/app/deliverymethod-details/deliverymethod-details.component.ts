import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { DeliverymethodService } from 'src/app/deliverymethod.service';
import { Deliverym } from '../deliverymethod/deliverymethod';



@Component({
  selector: 'app-deliverymethod-details',
  templateUrl: './deliverymethod-details.component.html',
  styleUrls: ['./deliverymethod-details.component.css']
})
export class DeliverymethodDetailsComponent implements OnInit {
  id: number;
  deliverymethod:Deliverym;

  constructor(private route: ActivatedRoute,private router: Router,
    private deliverymethodService: DeliverymethodService) { }

  ngOnInit() {
    this.deliverymethod = new Deliverym();

    this.id = this.route.snapshot.params['id'];
    this.deliverymethodService.getDeliveryMethod(this.id)
      .subscribe(data => {
        console.log(data)
        this.deliverymethod = data;
      }, error => console.log(error));
  }
  list(){
    this.router.navigate(['/deliverymethods']);
  }

}