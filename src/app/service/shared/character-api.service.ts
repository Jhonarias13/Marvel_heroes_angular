import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// import model
import { character } from '../../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterApiService {
  PUBLIC_KEY = 'a44fc5a6112936f71a7f3194e36ac803';
  HASH = 'c07fe16ac03df3fbeb0c79dd27b17216';
  URL_API = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) {
    console.log('Marvel Service is Initialized');
  }

  getAllCharacters(): Observable<any> {
    return this.http.get<character[]>(this.URL_API)
      .pipe(map((data: any) => data.data.results))
  }
}
