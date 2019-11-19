import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComboboxModel, ProdInfoTo, QueryCriteriaTo } from './model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) {}

  prodInfoToArray: ProdInfoTo[] = [];

  initProdList(): Observable<ProdInfoTo[]> {
    return this.http.get<ProdInfoTo[]>('http://localhost:3000/query');
  }

  addProduct(newProdInfo: ProdInfoTo): Observable<ProdInfoTo> {
    return this.http.post<ProdInfoTo>('http://localhost:3000/query', newProdInfo, httpOptions);
  }

  getBrand(): Observable<ComboboxModel[]> {
    return this.http.get<ComboboxModel[]>('http://localhost:3000/brand');
  }

  queryProduct(criteria: QueryCriteriaTo): Observable<ProdInfoTo[]> {
    const brandName = criteria.brand;
    let url = `http://localhost:3000/query?brand=${brandName}`;
    if (criteria.shippedFrom) {
      url = `${url}&shippedFrom=${criteria.shippedFrom}`;
    }
    return this.http.get<ProdInfoTo[]>(url);
  }
}
