import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataBaseService } from 'src/app/services/database.service';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  validarSpeak: GlobalService; 
  mensaje: any;
  oracion: any;
  usuarios: any;
  usuario = {
    email: '',
    password: '',
    passwordconfirm: ''
  }

  ngOnInit() {
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

  constructor(private authService: AuthService, private database: DataBaseService, private router: Router, global: GlobalService) {
    if ('speechSynthesis' in window) {
      this.mensaje = new SpeechSynthesisUtterance();
    } else {
      alert("Lo siento, tu navegador no soporta esta tecnología");
    }
    this.validarSpeak = global;
    console.log(this.validarSpeak);
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

  registrarse() {
    const { email, password } = this.usuario;
    this.authService.register(email, password).then(user => {
      console.log("se registro: ", user);
      let lista = [...this.usuarios];
      let existe = lista.find(user => user.email == email);

      if (!existe&&this.usuario.password==this.usuario.passwordconfirm) {
        console.log("USUARIO NUEVO CREADO")
        this.database.crear('users', this.usuario);
        this.router.navigate(['/home']);
      }else{
        console.log("El usuario o la contraseñas no son correctas.")
      };

    }).catch(err => {
      console.log(err)
    })
  }
}