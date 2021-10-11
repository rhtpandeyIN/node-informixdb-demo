import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
   }

   postProduct(data:any){
     console.log(data);
     return this.http.post<any>(`${baseUrl}product`,data)
     .pipe(map((res:any)=>{
       return res;
     }))
   }

}
