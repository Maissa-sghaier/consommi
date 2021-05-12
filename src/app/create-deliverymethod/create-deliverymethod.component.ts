import { Component, OnInit } from '@angular/core';
//import { Deliverym } from '../deliverymethod';

import { Router } from '@angular/router';
import { DeliverymethodService } from 'src/app/deliverymethod.service';
import { Deliverym } from '../deliverymethod/deliverymethod';

@Component({
  selector: 'app-create-deliverymethod',
  templateUrl: './create-deliverymethod.component.html',
  styleUrls: ['./create-deliverymethod.component.css']
})
export class CreateDeliverymethodComponent implements OnInit {
  deliverymethod: Deliverym = new Deliverym();
  submitted = false;


  constructor(private deliverymethodService: DeliverymethodService,
    private router: Router) { }

  ngOnInit() {
    
  }
  newDeliverym():void{
    this.submitted = false;
    this.deliverymethod = new  Deliverym();
  }
  save() {
    this.deliverymethodService
    .CreateDeliveyMethod(this.deliverymethod).subscribe(data => {
      console.log(data)
      this.deliverymethod = new Deliverym();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();   
    this.router.navigate(['/']);
 
  }

  gotoList() {
    this.router.navigate(['/deliverymethods']);
  }


}
