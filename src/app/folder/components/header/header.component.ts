import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  text: string;
  @Input('nombre') nombre : string;

  constructor() { 
  }

  ngOnInit(){
    this.text = this.nombre;
  }

}
