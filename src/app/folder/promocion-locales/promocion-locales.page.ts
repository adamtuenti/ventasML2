import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-promocion-locales',
  templateUrl: './promocion-locales.page.html',
  styleUrls: ['./promocion-locales.page.scss'],
})
export class PromocionLocalesPage implements OnInit {
  locales = [];
  vacio = false;

  constructor(private router: Router,) { }

  ionViewWillEnter(){
    

  }

  ngOnInit() {
    firebase.firestore().collection('Locales').where('Premium','==',true).onSnapshot(snap =>{
      this.locales = []
        snap.forEach(element => {
          this.locales.push(element.data())
        })
        
        this.shuffle(this.locales)
        this.vacio = true


      
        //this.nativeAudio.play('audioWo')
    })



  }

  cambiar(){
    this.router.navigate(['/detalle-local',this.locales[0].id,this.locales[0].Usuario]);
  }



  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    
    
    return array;
  }

}
