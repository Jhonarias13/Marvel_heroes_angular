import { Component, OnInit } from '@angular/core';

import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})

export class DogsComponent implements OnInit {
  title: string = "Raza";
  dogs: string[] = ["Bulldog", "Pug", "Pincher", "Labrador"];
  raza: string;
  Post = [];

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => { this.Post = data; });
  }

  ngOnInit(): void {
  }

  addRaza(nameRaza) {

    if (nameRaza.value === '') {
      alert("Debe escribir un nombre");
      nameRaza.focus();
    } else {
      this.dogs.push(nameRaza.value);
      nameRaza.value = '';
      nameRaza.focus();
    }

    return false;
  }
  editRaza() {
    return false;
  }

  deleteDog(dog) {
    for (let i = 0; i < this.dogs.length; i++) {
      if (dog === this.dogs[i]) { this.dogs.splice(i, 1); }
    }
  }

}
