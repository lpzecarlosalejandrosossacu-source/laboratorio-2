import { Injectable } from '@angular/core';
import { Juego } from '../model/juego';

@Injectable({
  providedIn: 'root',
})
export class Juegos {
  private listaJuegos: Juego[] = [
    {
      nombre: 'Rayo McQueen',
      modelo: 'Corvette C6 personalizado',
      anio: 2006,
      descripcion: 'El auto de carreras protagonista, muy veloz pero arrogante que aprende el valor de la amistad.',
      imagen: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Lightning_McQueen.png'
    },
    {
      nombre: 'Mate',
      modelo: 'Camioneta grúa 1955',
      anio: 2006,
      descripcion: 'El mejor amigo de Rayo, una grúa oxidada con un gran corazón.',
      imagen: 'https://upload.wikimedia.org/wikipedia/en/2/21/Mater_%28Cars%29.png'
    },
    {
      nombre: 'Sally Carrera',
      modelo: 'Porsche 911 Carrera',
      anio: 2006,
      descripcion: 'La abogada de Radiador Springs y el interés amoroso de Rayo.',
      imagen: 'https://upload.wikimedia.org/wikipedia/en/b/b5/Sally_Carrera.png'
    },
    {
      nombre: 'Doc Hudson',
      modelo: 'Hudson Hornet 1951',
      anio: 2006,
      descripcion: 'El juez y médico del pueblo, y una leyenda de las carreras.',
      imagen: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Doc_Hudson.png'
    },
    {
      nombre: 'Luigi',
      modelo: 'Fiat 500 1959',
      anio: 2006,
      descripcion: 'Apasionado vendedor de neumáticos que ama a Ferrari.',
      imagen: 'https://upload.wikimedia.org/wikipedia/en/6/69/Luigi_%28Cars%29.png'
    },
    {
      nombre: 'Guido',
      modelo: 'Montacargas pequeño',
      anio: 2006,
      descripcion: 'Asistente de Luigi, experto en cambiar neumáticos rápidamente.',
      imagen: 'https://upload.wikimedia.org/wikipedia/en/8/87/Guido_%28Cars%29.png'
    }
  ];

  obtenerJuegos(): Juego[] {
    return this.listaJuegos;
  }
  obtenerJuegoPorNombre(nombre: string): Juego | undefined {
    return this.listaJuegos.find((juego) => juego.nombre === nombre);
  }
}
