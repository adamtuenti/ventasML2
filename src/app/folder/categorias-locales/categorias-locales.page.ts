import { Component, OnInit } from '@angular/core';
import { CategoriasLocales } from 'src/app/models/categoriasLocales';
import { CategoriasLocalesService } from 'src/app/services/categorias-locales.service';

@Component({
  selector: 'app-categorias-locales',
  templateUrl: './categorias-locales.page.html',
  styleUrls: ['./categorias-locales.page.scss'],
})
export class CategoriasLocalesPage implements OnInit {

  categorias: CategoriasLocales[] = [];
  textoBuscar = '';

  constructor(private categoriasService: CategoriasLocalesService) { }

  ngOnInit() {
    this.categoriasService.getCategorias().subscribe(res=> {this.categorias = res;console.log(res);});
  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }

}
