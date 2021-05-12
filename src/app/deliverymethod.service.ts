import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliverymethodService {
  private baseUrlget = 'http://localhost:8081/springMVC/servlet/delivermethod';
  private baseUrlpost = 'http://localhost:8081/springMVC/servlet/addDeliveryMethod';
  private baseUrldelete = 'http://localhost:8081/springMVC/servlet/deleteDeliveryMethod';
  




  constructor(private http: HttpClient) { }
  getDeliveryMethod(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlget}/${id}`);
  }
  CreateDeliveyMethod(deliverymethod: Object): Observable<Object> {
    return this.http.post(`${this.baseUrlpost}`, deliverymethod);
  }
  updateDeliveryMethod(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrlget}/${id}`, value);
  }
  deleteDeliverym(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrldelete}/${id}`, { responseType: 'text' });
  }
  getDeliveryMethodList(): Observable<any> {
    return this.http.get(`${this.baseUrlget}`);
  }


}
