import { Component } from '@angular/core';
import {Juego} from '../../model/juego';
import {Juegos} from '../../service/juegos';
import {ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-detalle-juego',
  imports: [RouterLink],
  templateUrl: './detalle-juego.html',
  styleUrl: './detalle-juego.scss',
})
export class DetalleJuego {
  juego: Juego | undefined;

  constructor(
    private route: ActivatedRoute,
    private juegosService: Juegos) {
    const nombre = this.route.snapshot.paramMap.get('nombre');
    if (nombre) {
      this.juego = this.juegosService.obtenerJuegoPorNombre(nombre);
    }
  }
}
