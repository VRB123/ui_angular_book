import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class dataService {
  constructor(private http: HttpClient) {


   }


   getBooks() {
    return this.http.get('http://localhost:8080/getAllBooks');
    // return this.http.get('./payload.json');
  }
}