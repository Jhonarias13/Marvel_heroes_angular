import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../models/Posts';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    console.log('Service is Initialized...');
  }

  getData() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/photos');
  }
}
