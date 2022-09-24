import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/models/categorias';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-crear-local',
  templateUrl: './categoria-crear-local.page.html',
  styleUrls: ['./categoria-crear-local.page.scss'],
})
export class CategoriaCrearLocalPage implements OnInit {

  categorias: Categorias[] = [];
  textoBuscar = '';

  constructor(private categoriasService: CategoriasService,
              private router: Router) { }

  ngOnInit() {
    this.categoriasService.getCategorias().subscribe(res=> {this.categorias = res;});
  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }

  

}