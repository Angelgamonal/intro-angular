import { Component } from '@angular/core';

interface Character {
  name: string;
  power: number;
}

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
    name: '',
    power: 0,
  };

  addCharacter() {
    if (this.newCharacter.name.trim().length === 0) {
      return alert('Escribe un personaje');
    }

    this.characters.push(this.newCharacter);

    this.newCharacter = {
      name: '',
      power: 0,
    };
  }
}
