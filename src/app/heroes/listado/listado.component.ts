import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  heros: string[] = ['iroman', 'batman', 'spiderman', 'hulk'];
  deleteHero: string[] = [];

  deleteHeros() {
    let heroRemove = this.heros.pop() || '';

    if (heroRemove == '') {
      return alert('ya no hay mas heroes para borrar');
    }

    this.deleteHero.push(heroRemove);

    // console.log(this.deleteHero);
  }
}
