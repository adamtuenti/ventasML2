import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-productos',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderLocalesComponent implements OnInit {

  text: string;
  @Input('nombre') nombre : string;
  
  FotoPerfil;

  constructor() { 
  }

  ngOnInit(){
    // var foto = localStorage.getItem('FotoPerfil');
    // if(localStorage.getItem('FotoPerfil') != null){
    //   this.FotoPerfil = localStorage.getItem('FotoPerfil');
    // }
    // else{
    //   this.FotoPerfil = 'https://firebasestorage.googleapis.com/v0/b/ventasml2.appspot.com/o/iconos%2FiconMl2.png?alt=media&token=e6ee4d9e-33a0-4ab2-851f-d50930465e47';
      
    // }
    
    this.text = this.nombre;
  }

}
