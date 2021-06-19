import { CharacterApiService } from '../service/shared/character-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  constructor(private characterSvc: CharacterApiService) { }

  AllCharacters: Observable<any>;

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    console.log(
      this.AllCharacters = this.characterSvc.getAllCharacters());
  }

}
