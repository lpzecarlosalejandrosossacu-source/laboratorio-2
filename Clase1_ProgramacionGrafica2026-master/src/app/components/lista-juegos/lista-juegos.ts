import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {Juego} from '../../model/juego';
import {Juegos} from '../../service/juegos';

@Component({
  selector: 'app-lista-juegos',
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-juegos.html',
  styleUrl: './lista-juegos.scss',
})
export class ListaJuegos {
  juegos: Juego[];

  constructor(private juegoService: Juegos) {
    this.juegos = this.juegoService.obtenerJuegos();
  }

}
