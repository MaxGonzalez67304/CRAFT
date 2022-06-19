import { Component, OnInit } from '@angular/core';
import { ConService } from '../../services/conection.service'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {
  faTrash = faTrash;
  faPenToSquare = faPenToSquare;
  items: any[] = [];
  itemEditar: any = { name: "" };

  item: any = {name: ""};

  agregar() {
    this.con.addItem(this.item);
  }

  constructor(private con: ConService) {
    this.con.getItems().subscribe(items => {
      this.items = items;
      console.log(this.items);
    });
  }

  ngOnInit(): void {
  }

  eliminar(id: any) {
    console.log(id);
    this.con.eliminarItem(id);
  }

  editar(item: any) {
    console.log(item);
    this.itemEditar = item;
  }

  editarForm() {
    this.con.editarItem(this.itemEditar);

  }

}
