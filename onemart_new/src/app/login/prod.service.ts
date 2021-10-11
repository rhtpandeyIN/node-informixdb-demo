import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProdService {

  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get<any>(`${baseUrl}products/`)
    .pipe(map((res:any)=>{
      console.log(res);
      console.log('log from prod service'+res);
      return res;
    }))
  }
}
