import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from 'rxjs';
import "firebase/firestore";
import { NgxQrcodeVersionType, NgxQrcodeErrorCorrectionLevels, NgxQrcodeElementTypes } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faCoffee = faCoffee;
  items: Observable<any[]>;

  url = "https://drive.google.com/file/d/1hxtnRnIf5KWJX7x3xlfWeOr4CRsSRdP-/view?usp=sharing";
  profile =  'routeToMyProfile';
  elementType = NgxQrcodeElementTypes.URL;
  errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = this.url + this.profile;

  
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('items').valueChanges();
  }
  
}
