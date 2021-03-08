import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PublicacionesGenerales } from '../models/publicacionesGenerales';
// import firebase from 'firebase/app';
// import 'firebase/firestore';



@Injectable({
  providedIn: 'root'
})
export class PublicacionesGeneralesService {

  private publicacionesCollection: AngularFirestoreCollection <PublicacionesGenerales>;
  private publicaciones: Observable<PublicacionesGenerales[]>;

  constructor(private firestore: AngularFirestore) {
    this.publicacionesCollection = firestore.collection('PublicacionesGenerales'); //, ref => ref.where("Nombre", "==", "Celulares")
    this.publicaciones = this.publicacionesCollection.snapshotChanges().pipe(map(
      actions =>{
        return actions.map( a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })
      }
    ))
   }
  getPublicaciones(){
    return this.publicaciones;
  }

  getPublicacion(id: string){
    
    return this.publicacionesCollection.doc<PublicacionesGenerales>(id).valueChanges();

  }


  addPublicacion(publicacion:PublicacionesGenerales){
    return this.publicacionesCollection.add({...publicacion});
  } 

  updateProducto(id:string, productos:Productos){
    return this.publicacionesCollection.doc(id).update({...productos});
  }

  removePublicacion(id:string){
    return this.publicacionesCollection.doc(id).delete();
  }

}