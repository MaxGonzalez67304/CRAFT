import { Injectable } from '@angular/core';
import { Bebida } from '../bebida';
import { BEBIDAS } from '../misBebidas';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {

  private bebida: Bebida[] = BEBIDAS;

  constructor() { }

  getBebidas(): Bebida[] {
    return this.bebida;
  }

  getUnaBebida(posicion: number): Bebida {
    return this.bebida[posicion];
  }

}
