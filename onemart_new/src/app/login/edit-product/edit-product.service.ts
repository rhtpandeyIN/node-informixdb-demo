import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditProductService {


  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getProductById(item: any) {
    return this.http.get(`${baseUrl}products/` + item)
      .pipe(map((data: any) => {
        return data;
      }))
  }

  updateProduct(item: any): Observable<any> {
    console.log('from service ' + item);
    return this.http.get(`${baseUrl}products/` + item)
      .pipe(map((data: any) => {
        console.log('data from update from service ' + data)
        return data;
      }))
  }
}
