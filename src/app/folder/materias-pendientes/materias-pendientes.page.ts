import { Component, OnInit } from '@angular/core';
import { cursosPendientes } from 'src/app/models/cursosPendientes';
import { MateriasService } from 'src/app/services/materias.service';

@Component({
  selector: 'app-materias-pendientes',
  templateUrl: './materias-pendientes.page.html',
  styleUrls: ['./materias-pendientes.page.scss'],
})
export class MateriasPendientesPage implements OnInit {
  textoBuscar = '';
  materias:cursosPendientes[] = [];
  constructor(private materiasService: MateriasService) { }

  ngOnInit() {
    this.materiasService.getcursosPendientes().subscribe(res => this.materias = res);
  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }
}
