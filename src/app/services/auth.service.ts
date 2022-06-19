import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/firestore'

declare global {
  interface Window {
    recaptchaVerifier: firebase.auth.RecaptchaVerifier;
    confirmationResult: any;
    grecaptcha: any;
  }
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private afauth: AngularFireAuth) { }

  async register(email: string, password: string) {
    try {
      return await this.afauth.createUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.log("error en login: ", err);
      return null;
    }
  }

  async login(email: string, password: string) {
    try {
      return await this.afauth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log("error en login: ", err);
      return null;
    }
  }

  async loginWithGoogle(email: string, password: string) {
    try {
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (err) {
      console.log("error en login con google: ", err);
      return null;
    }
  }

  getUserLogged() {
    return this.afauth.authState;
  }

  logout() {
    this.afauth.signOut();
  }

  mandarCodigoTel(numero: string, appVerified: any) {
    return this.afauth.signInWithPhoneNumber(numero, appVerified).then(confirmation => {
      window.confirmationResult = confirmation;
      alert("Se envió el codigo a su telefono");
    }).catch(err => {
      console.log("Error en mandar codigo: ", err);
    });
  }

  verificarCodigoTel(codigo: string) {
    return window.confirmationResult.confirm(codigo).then( (result: any) => {
      let credenciales = firebase.auth.PhoneAuthProvider.credential(window.confirmationResult.verificationId, codigo);
      this.afauth.signInWithCredential(credenciales);
    });
  }
}