import { Component, OnInit } from '@angular/core';
import { Bebida } from '../../bebida';
import { BebidaService } from '../../services/bebida.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  misBebidas: Bebida[] = [];

  constructor(public miservicio: BebidaService) { 
    console.log('constructor de heroes');
  }

  ngOnInit(): void {
    console.log('ngOnInit de Heroes');
    this.misBebidas = this.miservicio.getBebidas();
    console.log(this.misBebidas);
  }

}
