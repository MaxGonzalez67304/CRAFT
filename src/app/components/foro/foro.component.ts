import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {
  validarSpeak: GlobalService; 
  mensaje: any;
  oracion: any;

  constructor(global: GlobalService) { 
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

}
