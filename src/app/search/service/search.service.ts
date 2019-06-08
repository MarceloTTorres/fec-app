import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url: string = "http://localhost:3000/search";
  
  constructor(private httpClient: HttpClient) { }

  findByFilter(filter: any): Observable<any> {
    return this.httpClient.post<any>(this.url, filter);
  }

  findAll(): Observable<any> {
    return this.httpClient.get<any>(this.url);
  }

}
