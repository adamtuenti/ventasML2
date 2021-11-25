import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/models/categorias';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-crear-producto',
  templateUrl: './categoria-crear-producto.page.html',
  styleUrls: ['./categoria-crear-producto.page.scss'],
})
export class CategoriaCrearProductoPage implements OnInit {

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