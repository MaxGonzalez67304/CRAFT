import { Component, OnInit } from '@angular/core';
import { ConService } from 'src/app/services/conection.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  item: any = {name: ""};

  constructor(private ser: ConService) { }

  ngOnInit(): void {
  }

  agregar() {
    this.ser.addItem(this.item);
  }
}