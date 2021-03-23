import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Locales } from 'src/app/models/locales';
import { LocalesService } from 'src/app/services/locales.service';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.page.html',
  styleUrls: ['./locales.page.scss'],
})
export class LocalesPage implements OnInit {
  locales : Locales[] = [];
  categoria: string;
  textoBuscar = '';
  condicion: boolean = false;
  idUser;
  
  constructor(private router: Router,
              private localesService: LocalesService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      this.categoria = paramMap.get('id');
      this.idUser = localStorage.getItem('userId');
      this.localesService.getLocales().subscribe(res=> {this.locales = res;this.condicion = this.getDatos()});
    });   
  }

  getDatos(){
    for(let i= 0; i < this.locales.length; i++){
      if(this.locales[i].CategoriaLocal == this.categoria){     
            return false;      
      }
    }
    return true;
  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }

}
// babaco