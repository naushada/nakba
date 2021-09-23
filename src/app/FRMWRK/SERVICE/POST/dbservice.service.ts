import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ParcelDetails } from 'src/app/SHIPPING/parcelInfo';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 
  private _url:string ="http://localhost:8080";
  constructor(private http:HttpClient) { }

  get_parcelInfo() : Observable<ParcelDetails> {
    return this.http.get<ParcelDetails>(this._url);
  }

  put_parcelInfo(shipping:FormGroup): Observable<ParcelDetails> {
    return this.http.put<ParcelDetails>(this._url +'/newShipping', shipping, this.httpHeader)
  }

  post_parcelInfo(shipping:FormGroup): Observable<ParcelDetails> {
    return this.http.post<ParcelDetails>(this._url +'/newShipping', shipping, this.httpHeader)
  }

  authenticateUser(credentials:FormGroup) {
    let qparam: string = "username=" + credentials.get('username') + "&password=" + credentials.get('password');

    return this.http.get(this._url + '/login?' + qparam);

  }
}
