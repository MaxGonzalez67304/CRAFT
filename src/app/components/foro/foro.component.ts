import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { ConService } from '../../services/conection.service'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {
  faTrash = faTrash;
  faPenToSquare = faPenToSquare;
  validarSpeak: GlobalService;
  mensaje: any;
  oracion: any;
  users: any[] = [];
  userEditar: any = { email: "" };
  user: any = { email: "", password: "", passwordconfirm: "", nivel: "" };
  foros: any[] = [];
  foroEditar: any = { comentario: "" };

  foro: any = { comentario: "" };

  constructor(global: GlobalService, private con: ConService) {
    if ('speechSynthesis' in window) {
      this.mensaje = new SpeechSynthesisUtterance();
    } else {
      alert("Lo siento, tu navegador no soporta esta tecnología");
    }
    this.validarSpeak = global;
    console.log(this.validarSpeak);

    this.con.getUsers().subscribe(users => {
      this.users = users;
      console.log(this.users);
    });

    this.con.getForos().subscribe(foros => {
      this.foros = foros;
      console.log(this.foros);
    });
  }

  ngOnInit(): void {
  }

  alertaEXITO() {
    Swal.fire({
      icon: 'success',
      title: 'EXITO',
      text: 'COMENTARIO AGREGADO',
    })
  }

  agregarForo() {
    this.con.addForo(this.foro);
    this.alertaEXITO();
  }

  eliminarForo(id: any) {
    console.log(this.foro);
    this.con.eliminarForo(id);
  }

  editarForo(foro: any) {
    console.log(foro);
    this.foroEditar = foro;
  }

  eliminarUsuario(id: any) {
    console.log(this.user);
    this.con.eliminarUser(id);
  }

  editarUsuario(user: any) {
    console.log(user);
    this.userEditar = user;
  }

  editarFormUsuario() {
    this.con.editarUser(this.userEditar);
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

}
