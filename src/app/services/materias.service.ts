import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { cursosPendientes } from '../models/cursosPendientes';

import { Cursos } from '../models/cursos';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  private cursosPendientesCollection: AngularFirestoreCollection <cursosPendientes>;
  private cursosPendientes: Observable<cursosPendientes[]>;

  private cursosCollection: AngularFirestoreCollection <Cursos>;
    private cursos: Observable<Cursos[]>;

  constructor(firestore: AngularFirestore) {
    this.cursosPendientesCollection = firestore.collection('MateriasSolicitud');
    this.cursosPendientes = this.cursosPendientesCollection.snapshotChanges().pipe(map(
      actions =>{
        return actions.map( a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })
      }
    ))

    this.cursosCollection = firestore.collection('Materias');
    this.cursos = this.cursosCollection.snapshotChanges().pipe(map(
      actions =>{
        return actions.map( a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })
      }
    ))
  }
  getcursosPendientes(){
    return this.cursosPendientes;
  }
  
  getcursoPendiente(id:string){
    return this.cursosPendientesCollection.doc<cursosPendientes>(id).valueChanges();
  }

  addcursosPendientes(id:string, Cursos:cursosPendientes){
    return this.cursosPendientesCollection.doc(id).set({...Cursos});
  }

  updatecursosPendientes(id:string, Cursos:cursosPendientes){
    return this.cursosPendientesCollection.doc(id).update({...Cursos});
  }

  removecursosPendientes(id:string){
    return this.cursosPendientesCollection.doc(id).delete();
 }

 getCursos(){
  return this.cursos;
}

getCurso(id:string){
  return this.cursosCollection.doc<Cursos>(id).valueChanges();
}

}