import { Component } from '@angular/core';

@Component({
  selector: 'app-count',
  template: `
    <h1>Hola :)</h1>

    <h3>La base es: {{ base }}</h3>

    <button (click)="operation(base)">+{{ base }}</button>

    <span> {{ number }} </span>

    <button (click)="operation(-base)">-{{ base }}</button>
  `,
})
export class CountComponent {
  number: number = 0;
  base: number = 5;

  operation(valor: number) {
    this.number += valor;
  }
}
