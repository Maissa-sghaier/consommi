import { Observable } from 'rxjs';
import {  CoupleCP } from './Models';
import { CartitemsService } from './../cartitems.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-management',
  templateUrl: './cart-management.component.html',
  styleUrls: ['./cart-management.component.css']
})
export class CartManagementComponent implements OnInit {
  cartId:number=0;
  constructor(private cartservice: CartitemsService) {
    }
  
  cartitems: CoupleCP[]=[];
  avalaibility :number=0;
  ngOnInit(): void {
    this.cartservice.cartIdMessage$.subscribe(
      message=>{
        this.cartId=message;
        console.log('hello'+this.cartId);
      }
    )
    this.showProducts();
  }
  
  showProducts(){
    this.cartservice.displayCart(1).subscribe(data=>{
      this.cartitems=data;
      this.cartservice.sendMessage(this.cartitems);
    })
  }
 deletingProduct(val){
   if (confirm("are you sure?")){
    this.cartservice.deleteProduct(val).subscribe(
      data=>{
        this.showProducts();
      }
    );
  }
 }
 updateProductQuantity(itemID:any, productName: any, quantity:any){
   this.cartservice.updateProduct(itemID,productName,quantity).subscribe(data=>{
    this.avalaibility= data;
    if (this.avalaibility>0){
    this.showProducts();
  }
  else{
    alert('We are sorry , it is out of stock');
  }
  });
 }
 
}