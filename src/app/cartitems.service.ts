import { CoupleCP } from './cart-management/Models';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartitemsService {
  readonly createCartUrl="http://localhost:8082/springMVC/servlet/createCart";
  readonly deleteCartUrl="http://localhost:8082/springMVC/servlet/deleteCart";
  readonly addProdoctUrl="http://localhost:8082/springMVC/servlet/addproduct";
  readonly updateProductUrl="http://localhost:8082/springMVC/servlet/updateproduct";
  readonly deleteProductUrl="http://localhost:8082/springMVC/servlet/delete_product_from_cart";
  readonly displayCartUrl="http://localhost:8082/springMVC/servlet/showCart";
  readonly displayFeesUrl="http://localhost:8082/springMVC/servlet/get_fees";

  constructor(private http:HttpClient) {}
  
  private _CartitemsMessageSource =new Subject<CoupleCP[]>();
  CartitemsMessage$ = this._CartitemsMessageSource.asObservable();
  sendMessage(message : CoupleCP[]){
    this._CartitemsMessageSource.next(message);
  }

  private _cartIdMessageSource = new Subject<number>();
  cartIdMessage$ =this._cartIdMessageSource.asObservable();
  sendID(IdMessage: number){
    this._cartIdMessageSource.next(IdMessage);
  }
  cartitems: CoupleCP[]=[];
  createCart():Observable<number>{
    return this.http.post<number>( `${this.createCartUrl}`,null);
  }
  
  deleteCart(cartId:any){
    return this.http.delete(`${this.deleteCartUrl}/${cartId}`);
  }

  addProdoct(cartId:any, productID: any, quantity:any){
    return this.http.post(`${this.addProdoctUrl}/${cartId}/${productID}/${quantity}`, null);
  } 

  updateProduct(itemID:any, productName: any, quantity:any):Observable<number>{
    return this.http.put<number>( `${this.updateProductUrl}/${itemID}/${productName}/${quantity}`, null);
  }

  deleteProduct( itemID:any){
    return this.http.delete(`${this.deleteProductUrl}/${itemID}`);
  }

  displayCart(cartId: any):Observable<CoupleCP[]>{
    return this.http.get<CoupleCP[]>(`${this.displayCartUrl}/${cartId}`);
  }

  displayFees(cartId:any, eventId:any, promoCode:any):Observable<any[]>{
    return this.http.get<any[]>(`${this.addProdoctUrl}/${cartId}/${eventId}/${promoCode}`);
  }

  CartitemCount(){
   return this.cartitems.length;
  }
}
