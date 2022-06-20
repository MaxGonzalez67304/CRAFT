import { Component, OnInit } from '@angular/core';
import { ConService } from '../../services/conection.service'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

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

  item: any = { name: "" };
  user: any = { email: "", password: "", passwordconfirm: "", nivel: "" };

  constructor(private con: ConService) {
    this.con.getItems().subscribe(items => {
      this.items = items;
      console.log(this.items);
    });

    this.con.getUsers().subscribe(users => {
      this.users = users;
      console.log(this.users);
    });
  }

  ngOnInit(): void {
  }

  agregarElemento() {
    this.con.addItem(this.item);
  }

  alertaEXITO() {
    Swal.fire({
      icon: 'success',
      title: 'EXITO',
      text: 'INGRESO EXITOSO',
    })
  }

  agregarUsuario() { 
    this.con.addUser(this.user);
    this.alertaEXITO();
  }

  eliminarElemento(id: any) {
    console.log(id);
    this.con.eliminarItem(id);
  }

  editarElemento(item: any) {
    console.log(item);
    this.itemEditar = item;
  }

  editarFormElemento() {
    this.con.editarItem(this.itemEditar);
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

}
