import { CoupleCP } from './../cart-management/Models';
import { CartitemsService } from './../cartitems.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cartservice: CartitemsService) { }
  cartitems: CoupleCP[]=[];
  itemsCount: number
  cartID:number=0;
  ngOnInit(): void {
    this.cartservice.CartitemsMessage$.subscribe(
      message =>{
        this.cartitems=message;
        this.itemsCount=this.cartitems.length;
      }
    )
  }
  
  hovering(){
    if (this.cartID==0){
     this.cartservice.createCart().subscribe(
       data=>{
         this.cartID=data;
         this.cartservice.sendID(this.cartID);
         console.log('heyy'+ this.cartID);
       }
     );
    }
    else{
     this.cartservice.sendID(this.cartID);
     console.log('hey2222'+ this.cartID);
    }
    
    
  }

}
