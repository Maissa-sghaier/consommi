import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliverymethodService } from 'src/app/deliverymethod.service';
import { Deliverym } from '../deliverymethod/deliverymethod';



@Component({
  selector: 'app-update-deliverymethod',
  templateUrl: './update-deliverymethod.component.html',
  styleUrls: ['./update-deliverymethod.component.css']
})
export class UpdateDeliverymethodComponent implements OnInit {
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
  updateDeliveryMethod() {
    this.deliverymethodService.updateDeliveryMethod(this.id, this.deliverymethod)
      .subscribe(data => {
        console.log(data);
        this.deliverymethod = new Deliverym();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateDeliveryMethod();    
  }

  gotoList() {
    this.router.navigate(['/deliverymethods']);
  }

}