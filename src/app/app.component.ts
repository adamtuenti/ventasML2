import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor( private authService:AuthService) { this.checkDarkMode() }

  logOutUser(){
    this.authService.logOutUser();
  }

  checkDarkMode(){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    if(prefersDark.matches){
      document.body.classList.toggle('dark')
    }
  }
}
