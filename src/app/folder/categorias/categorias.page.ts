import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/models/categorias';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  categorias: Categorias[] = [];
  textoBuscar = '';
  numeroOpcion = 1;
  idUser;

  constructor(private categoriasService: CategoriasService,
              private router: Router,) { }

  ngOnInit() {
    this.idUser = localStorage.getItem('userId');
    this.categoriasService.getCategorias().subscribe(res=> {this.categorias = res;});


  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }



}
