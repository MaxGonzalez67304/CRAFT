import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataBaseService } from 'src/app/services/database.service';
import { GlobalService } from 'src/app/global.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validarSpeak: GlobalService;
  mensaje: any;
  oracion: any;

  usuario = {
    email: '',
    password: ''
  }

  ngOnInit() {

  }

  constructor(private authService: AuthService, private router: Router, global: GlobalService) {
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

  alertaEXITO() {
    Swal.fire({
      icon: 'success',
      title: 'EXITO',
      text: 'INGRESO EXITOSO',
    })
  }

  alertaFAIL() {
    Swal.fire({
      icon: 'error',
      title: 'ERROR',
      text: 'DATOS INCORRECTOS',
    })
  }

  Ingresar() {
    const { email, password } = this.usuario;
    this.authService.login(email, password).then(user => {
      console.log("Bienvenido ", user);
      if (!user) {
        this.alertaFAIL();
        return;
      } else {
        this.alertaEXITO();
      };
      
      this.router.navigate(['/home']);
    }).catch(err => {
      console.log(err)
    })
  }

  IngresarGoogle() {
    const { email, password } = this.usuario;
    this.authService.loginWithGoogle(email, password).then(user => {
      console.log("Ingreso con Google de:  ", user);
    })
  }

  logOut() {
    this.authService.logout();
  }
}
