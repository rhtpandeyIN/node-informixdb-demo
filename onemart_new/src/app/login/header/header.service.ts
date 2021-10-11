import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
 
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
 
  constructor(private http: HttpClient) { }

  addProduct(data : Product): Observable<any>{
    return this.http.post(`${baseUrl}products/`, data)
      .pipe()
  }
}
