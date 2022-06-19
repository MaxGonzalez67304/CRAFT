import { Component, OnInit } from '@angular/core';
import { ConService } from 'src/app/services/conection.service';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  item: any = {name: ""};
  validarSpeak: GlobalService; 
  mensaje: any;
  oracion: any;

  constructor(private con: ConService, global: GlobalService) { 
    if ('speechSynthesis' in window) {
      this.mensaje = new SpeechSynthesisUtterance();
    } else {
      alert("Lo siento, tu navegador no soporta esta tecnología");
    }
    this.validarSpeak = global;
    console.log(this.validarSpeak);
  }

  ngOnInit(): void {
  }
  
  playSpeak(texto2:string) {  
    this.oracion = document.getElementById(texto2)!.innerHTML;
    this.mensaje.text= this.oracion; 
    if(speechSynthesis.paused){
      speechSynthesis.resume();
    }else{
      speechSynthesis.cancel();
      speechSynthesis.speak(this.mensaje);
    }
  }

  stopSpeak(){
    speechSynthesis.pause();
  }
  agregar() {
    this.con.addItem(this.item);
  }
}