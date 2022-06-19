import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/global.service';
import { Router } from '@angular/router';
import { ConService } from '../../services/conection.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userLogged = this.authService.getUserLogged();
  
  users: any[] = [];
  user: any = { email: "", password: "", passwordconfirm: "", nivel: "" };

  validarSpeak: GlobalService;
  admin: boolean=false;

  constructor(private authService: AuthService, private router: Router, private global: GlobalService, private con: ConService) { 
    this.validarSpeak=global;

    this.con.getUsers().subscribe(users => {
      this.users = users;
      console.log(this.users);
    });
  }

  ngOnInit(): void {
  }
  
  habilitarSpeak(){
    this.global.band=!this.global.band; 
  }

  logOut() {
    this.authService.logout();
  }
}