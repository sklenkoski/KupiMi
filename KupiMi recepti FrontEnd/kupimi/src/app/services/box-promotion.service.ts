import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BoxPromotionsResponse, BoxPromotionResponse } from '../responses/app-responses';
import { Observable } from 'rxjs';
import { BoxPromotionRequset, BoxPromotionUpdateRequset } from '../requests/app-requests';

@Injectable({
  providedIn: 'root'
})
export class BoxPromotionService {
  public httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  public url: string = '//localhost:8080/api/boxes';

  constructor(private http: HttpClient) { }

  public getAllBoxPromotions(): Observable<BoxPromotionsResponse> {
    return this.http.get<BoxPromotionsResponse>(this.url);
  }

  public getBoxPromotion(id: String): Observable<BoxPromotionResponse> {
    return this.http.get<BoxPromotionResponse>(`${this.url}/${id}`);
  }

  public createBoxPromotion(boxPromotion: BoxPromotionRequset): Observable<{ }>{
    return this.http.post<{}>(`${this.url}/add`, boxPromotion);
  }

  public updateBoxPromotion(boxPromotion: BoxPromotionUpdateRequset, id: String): Observable<{ }>{
    return this.http.patch<{}>(`${this.url}/update-box-promotion/${id}`, boxPromotion);
  }

  public deleteBoxPromotion(id: String): Observable<{ }> {
    return this.http.delete<{}>(`${this.url}/delete/${id}`);
  }

}
