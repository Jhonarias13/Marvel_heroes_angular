import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {CharacterComponent} from './character/character.component'; 

const routes: Routes = [
  { // si esta vacia la ruta devuelve a la ruta de abajo /characters
    path: '', redirectTo: '/characters', pathMatch: 'full'
  },
  {
    path: 'characters', 
    component: CharacterComponent
  }
];

@NgModule({

  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
}), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
