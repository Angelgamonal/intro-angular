import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html',
})
export class HeroComponent {
  heroName: string = 'Iro man';
  age: number = 45;

  get nameCapitalize(): string {
    return this.heroName.toLocaleUpperCase();
  }

  getName(): string {
    return `${this.heroName} - ${this.age}`;
  }

  changeName(): void {
    this.heroName = 'Spiderman';
  }

  changeAge(): void {
    this.age = 30;
  }
}
