import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  title = 'Contactanos';
  forma!: FormGroup;
  usuario:any={
    nombre:"",
    apellido:"",
    correo:""
    }

  constructor() { 
    this.forma = new FormGroup({
      'nombre': new FormControl('',[Validators.required, Validators.minLength(3)]),
      'apellido': new FormControl('',Validators.required),
      'correo': new FormControl('',[Validators.required,Validators.email]),
    });

    this.forma.setValue(this.usuario);
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
