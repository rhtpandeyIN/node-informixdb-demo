import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    console.log('I am product');
    console.log();
    return this.http.get(`${baseUrl}products/`);
  }
}
