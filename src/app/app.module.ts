import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";

import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ListaComponent } from './components/lista/lista.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TelefonoComponent } from './components/telefono/telefono.component';
import { HomeComponent } from './components/home/home.component';
import { UnheroeComponent } from './components/unheroe/unheroe.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ForoComponent } from './components/foro/foro.component';
import { VideoComponent } from './components/video/video.component';
import { DomseguroPipe } from './domseguro.pipe';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ListaComponent,
    AgregarComponent,
    TelefonoComponent,
    HomeComponent,
    CatalogoComponent,
    DomseguroPipe,
    UnheroeComponent,
    ForoComponent,
    VideoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
