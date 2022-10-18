import { Component } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

import { ActivatedRoute, Router, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  showFooter: boolean = false;



  constructor(private authService: AuthService, private router: Router) 
  { this.checkDarkMode();
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login' || event['url']=='/registrar' || event['url']=='/carousel' || event['url']=='/') {
          //this.showHead = false;
          this.showFooter = false;

        } else {
          //this.showHead = true;
          this.showFooter = true;

        }
      }
    });
  }

  logOutUser() {
    this.authService.logOutUser();
  }

  

  checkDarkMode() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    toggleDarkTheme(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addListener((mediaQuery) => toggleDarkTheme(mediaQuery.matches));

    // Add or remove the "dark" class based on if the media query matches
    function toggleDarkTheme(shouldAdd) {
      document.body.classList.toggle('dark', shouldAdd);
    }
  }
}
