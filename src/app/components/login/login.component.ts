import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataBaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
    email: '',
    password: ''
  }

  ngOnInit() {

  }

  constructor(private authService: AuthService, private router: Router) { }

  Ingresar() {
    const { email, password } = this.usuario;
    this.authService.login(email, password).then(user => {
      console.log("Bienvenido ", user);
      if (!user) {
        alert("Datos incorrectos, si no tenes cuenta registrate!");
        return;
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
