import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  characters: Character[] = [
    {
      name: 'Goku',
      power: 15000,
    },
    {
      name: 'Vegeta',
      power: 14000,
    },
  ];

  newCharacter: Character = {
    name: 'Roshi',
    power: 1010,
  };

  addNewCharacter(argument: Character) {
    console.log('main-page->', argument);
    debugger;
    this.characters.push(argument);
  }
}
