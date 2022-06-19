import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataBaseService } from 'src/app/services/database.service';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-telefono',
  templateUrl: './telefono.component.html',
  styleUrls: ['./telefono.component.css']
})
export class TelefonoComponent implements OnInit {

  usuarios: any;
  usuario = {
    email: '',
    password: '',
  }

  ngOnInit() {
    setTimeout(() => {
      this.captchaCreator();
    }, 200);

    this.database.obtenerTodos("users").subscribe((usuariosRef) => {
      console.log("usuariosRef: ", usuariosRef);
      this.usuarios = usuariosRef.map(userRef => {
        let usuario: any = userRef.payload.doc.data();
        usuario['id'] = userRef.payload.doc.id;
        return usuario;
      });
      console.log(this.usuarios)
    })
  }

  constructor(private authService: AuthService, private database: DataBaseService, private router: Router) { }

  captchaCreator() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    window.recaptchaVerifier.render();
  }

  mandarCodigo(numero: string) {
    this.authService.mandarCodigoTel(numero, window.recaptchaVerifier);
  }

  verificarCodigo(codigo: string) {
    this.authService.verificarCodigoTel(codigo);
  }
}