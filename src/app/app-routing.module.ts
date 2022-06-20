import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BebidasComponent } from './components/bebidas/bebidas.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ForoComponent } from './components/foro/foro.component';
import { HomeComponent } from './components/home/home.component';
import { ListaComponent } from './components/lista/lista.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TelefonoComponent } from './components/telefono/telefono.component';
import { VideoComponent } from './components/video/video.component';
import { GraficaComponent } from './components/grafica/grafica.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'telefono',
    component: TelefonoComponent
  },
  {
    path: 'catalogo',
    component: CatalogoComponent
  },
  {
    path: 'bebidas',
    component: BebidasComponent
  },
  {
    path: 'heroe/:id',
    component: BebidasComponent
  },
  {
    path: 'foro',
    component: ForoComponent
  },
  {
    path: 'video',
    component: VideoComponent
  },
  {
    path: 'lista',
    component: ListaComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'grafica',
    component: GraficaComponent

  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }