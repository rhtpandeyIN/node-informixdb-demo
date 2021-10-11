import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get(`${baseUrl}products`)
      .pipe(map((data: any) => {
        console.log('  all product list'+data);
        return data;
      }))
  }

  editProduct(item:any){
    console.log('called edit')
    this.getProductById(item);
    console.log('log from service of edit componrnt'+item)
  }

  getProductById(item: any) {
    console.log('called get product by id')
    return this.http.get(`${baseUrl}product/` + item)
      .pipe(map((data: any) => {
        console.log(data)
        return data;
      }))
  }

  deleteProduct(item: any): Observable<any> {
    console.log('delete service')
    return this.http.delete(`${baseUrl}product/` + item, { headers: this.httpHeaders });
  }

  updateProduct(item: any): Observable<any> {
    console.log('from service ' + item);
    return this.http.get(`${baseUrl}product/` + item)
      .pipe(map((data: any) => {
        console.log('data from update from service ' + data)
        return data;
      }))
  }
}
