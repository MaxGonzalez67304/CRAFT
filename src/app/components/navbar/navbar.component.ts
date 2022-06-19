import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userLogged = this.authService.getUserLogged();

  validarSpeak: GlobalService;

  constructor(private authService: AuthService, private router: Router, private global: GlobalService) { 
    this.validarSpeak=global;
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