import { Component, OnInit } from '@angular/core';
import { Bebida } from '../../bebida';
import { BebidaService } from '../../services/bebida.service';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  misBebidas: Bebida[] = [];
  validarSpeak: GlobalService;
  mensaje: any;
  oracion: any;

  constructor(public miservicio: BebidaService, global: GlobalService) { 
    console.log('constructor de heroes');
    if ('speechSynthesis' in window) {
      this.mensaje = new SpeechSynthesisUtterance();
    } else {
      alert("Lo siento, tu navegador no soporta esta tecnología");
    }
    this.validarSpeak = global;
    console.log(this.validarSpeak);
  }
  playSpeak(texto2: string) {
    this.oracion = document.getElementById(texto2)!.innerHTML;
    this.mensaje.text = this.oracion;
    if (speechSynthesis.paused) {
      speechSynthesis.resume();
    } else {
      speechSynthesis.cancel();
      speechSynthesis.speak(this.mensaje);
    }
  }

  stopSpeak() {
    speechSynthesis.pause();
  }
  

  ngOnInit(): void {
    console.log('ngOnInit de Heroes');
    this.misBebidas = this.miservicio.getBebidas();
    console.log(this.misBebidas);
  }

}
