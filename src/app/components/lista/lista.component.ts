import { Component, OnInit } from '@angular/core';
import { ConService } from '../../services/conection.service'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {
  faTrash = faTrash;
  faPenToSquare = faPenToSquare;
  items: any[] = [];
  users: any[] = [];
  itemEditar: any = { name: "" };
  userEditar: any = { email: "" };
  validarSpeak: GlobalService;
  mensaje: any;
  oracion: any;

  item: any = { name: "" };
  user: any = { email: "", password: "", passwordconfirm: "", nivel: "" };

  constructor(private con: ConService, global: GlobalService) {
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
  }

  ngOnInit(): void {
  }

  alertaEXITO() {
    Swal.fire({
      icon: 'success',
      title: 'EXITO',
      text: 'USUARIO AGREGADO',
    })
  }

  agregarUsuario() { 
    this.con.addUser(this.user);
    this.alertaEXITO();
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

  limpiarForm() {

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
