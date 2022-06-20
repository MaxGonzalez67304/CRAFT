import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface User { email: string, password: string, nivel: string, passwordconfirm: string }
export interface Foro { email: string, comentario: string }

@Injectable({
  providedIn: 'root'
})

export class ConService {

  private usersCollection: AngularFirestoreCollection<User>;
  private userDoc!: AngularFirestoreDocument<User>;
  users: Observable<User[]>;

  private forosCollection: AngularFirestoreCollection<Foro>;
  private foroDoc!: AngularFirestoreDocument<Foro>;
  foros: Observable<Foro[]>;

  constructor(private afs: AngularFirestore) {

    this.usersCollection = afs.collection<User>('users');
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

    this.forosCollection = afs.collection<Foro>('foro');
    this.foros = this.forosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Foro;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getUsers() {
    return this.users;
  }

  addUser(user: User) {
    this.usersCollection.add(user);
  }

  eliminarUser(id: any) {
    this.userDoc = this.afs.doc<User>(`users/${id}`);
    this.userDoc.delete();
  }

  editarUser(user: User) {
    this.userDoc = this.afs.doc<User>(`users/${user}`);
    this.userDoc.update(user);
  }

  getForos() {
    return this.foros;
  }

  addForo(foro: Foro) {
    this.forosCollection.add(foro);
  }

  eliminarForo(id: any) {
    this.foroDoc = this.afs.doc<Foro>(`foro/${id}`);
    this.foroDoc.delete();
  }

  editarForo(comentario: Foro) {
    this.foroDoc = this.afs.doc<Foro>(`foro/${comentario}`);
    this.foroDoc.update(comentario);
  }



}
