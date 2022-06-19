import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item { name: string; }
export interface User { email: string, password: string, nivel: string, passwordconfirm: string }

@Injectable({
  providedIn: 'root'
})

export class ConService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  private itemDoc!: AngularFirestoreDocument<Item>;
  items: Observable<Item[]>;

  private usersCollection: AngularFirestoreCollection<User>;
  private userDoc!: AngularFirestoreDocument<User>;
  users: Observable<User[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

    this.usersCollection = afs.collection<User>('users');
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getItems() {
    return this.items;
  }

  addItem(item: Item) {
    this.itemsCollection.add(item);
  }

  eliminarItem(id: any) {
    this.itemDoc = this.afs.doc<Item>(`items/${id}`);
    this.itemDoc.delete();
  }

  editarItem(item: Item) {
    this.itemDoc = this.afs.doc<Item>(`items/${item}`);
    this.itemDoc.update(item);
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

}
