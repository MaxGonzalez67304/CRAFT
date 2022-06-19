import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bebida } from 'src/app/bebida';
import { BebidaService } from 'src/app/services/bebida.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {

  @Input() bebida!: Bebida;

  constructor(public bebidaService: BebidaService, public activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe(params => {
      this.bebida = bebidaService.getUnaBebida(params['id']);
    })
  }

  ngOnInit(): void {
  }
}
