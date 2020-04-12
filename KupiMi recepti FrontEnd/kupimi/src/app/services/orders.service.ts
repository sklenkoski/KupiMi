import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrdersResponse, OrderResponse } from '../responses/app-responses';
import { OrderRequest } from '../requests/app-requests';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  public httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  public url: string = '//localhost:8080/api/orders';

  constructor(private http: HttpClient) { }

  public getAllOrders(): Observable<OrdersResponse> {
    return this.http.get<OrdersResponse>(this.url);
  }

  public getOrder(id: String): Observable<OrderResponse> {
    return this.http.get<OrderResponse>(`${this.url}/${id}`);
  }

  public createOrder(order: OrderRequest): Observable<{ }>{
    return this.http.post<{}>(`${this.url}/add`, order);
  }

  public deleteOrder(id: String): Observable<{ }> {
    return this.http.delete<{}>(`${this.url}/delete/${id}`);
  }
}
