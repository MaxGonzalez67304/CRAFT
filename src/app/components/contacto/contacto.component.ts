import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  title = 'Contactanos';
  forma!: UntypedFormGroup;
  validarSpeak: GlobalService;
  mensaje: any;
  oracion: any;
  usuario:any={
    nombre:"",
    apellido:"",
    correo:""
    }

  constructor(global: GlobalService) { 
    
    this.forma = new UntypedFormGroup({
      'nombre': new UntypedFormControl('',[Validators.required, Validators.minLength(3)]),
      'apellido': new UntypedFormControl('',Validators.required),
      'correo': new UntypedFormControl('',[Validators.required,Validators.email]),
    });

    this.forma.setValue(this.usuario);

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
    speechSynthesis.resume();
    speechSynthesis.pause();
  }
  
  guardarCambios(): void {
    
    console.log("metodo guardarCambios");
    console.log(this.forma);
    console.log(this.forma.value);
    this.forma.reset(this.usuario);
  }

  ngOnInit(): void {
  }

}
