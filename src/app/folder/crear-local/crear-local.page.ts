import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Locales } from 'src/app/models/locales';
import { LocalesService } from 'src/app/services/locales.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { AngularFireStorage } from 'angularfire2/storage';

import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';


//import Moment from "moment";



import * as firebase from 'firebase';

@Component({
  selector: 'app-crear-local',
  templateUrl: './crear-local.page.html',
  styleUrls: ['./crear-local.page.scss'],
})
export class CrearLocalPage implements OnInit {
  categoria: string;
  public local = {Nombre:'',Descripcion:'',Ciudadela:'',Manzana:'',Villa:'',Telefono:'',RedSocial:'',HorarioAtencion:'',Referencia:'',Usuario:'',CategoriaLocal:'',Visibilidad:true,Domicilio:'',Calificacion:5,Foto:'',id:''}
  loading: HTMLIonLoadingElement;

  public user: Usuarios = new Usuarios();
  id;

  horario = false

  dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
  respuestas = [['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', '']]



  image: string | ArrayBuffer;
  file: File;
  horarioFinal = ''


  constructor(private router: Router,
              private angularFireStorage: AngularFireStorage,
              private usuarioService: UsuarioService,


              private alertCtrt: AlertController,
              public loadingController: LoadingController,
              private localesService: LocalesService,
              private activateRoute: ActivatedRoute) { }


  

  
  ngOnInit() {

    this.id = localStorage.getItem('userId');
    if (localStorage.getItem('userId') != null) {
      this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => { this.user = res; });
    }


    this.activateRoute.paramMap.subscribe(paramMap => {
      this.categoria = paramMap.get('id');
    });   
  }

  validarFechas(form){
    //this.presentLoading("Espere por favor...");
    let texto = ''
    for(let i = 0; i < this.respuestas.length; i ++){
      let temp = this.respuestas[i]
      let temp1;

      if(temp[0] == '' || temp[1] == ''){
        //this.loading.dismiss()
        this.failedAlert("Complete el horario de atención: " + this.dias[i])
        return false
      }
      if(temp[0] == 'cerrado'){
        temp1 = 'cerrado'
      }
      else{
        temp1 = temp[0] + ' - ' + temp[1]
      }
      texto = texto + temp1 + ','
    }

    this.horarioFinal = texto.slice(0, -1)
    console.log('texto: ', texto)
    this.crearLocal(form)
  }

  guardarHorario(index){
    this.respuestas[index][0] = 'cerrado'
    this.respuestas[index][1] = 'cerrado'
    console.log(this.respuestas)

  }

  guardarFecha(index, index1){
    this.respuestas[index][index1] = 'hola'
    console.log(this.respuestas)

  }

  changeDate(event, index, index1){
    let date = new Date(event.value).toLocaleTimeString('en-US', {
      hour12: false,
      //timeStyle: 'short',
      hour: '2-digit', minute: '2-digit'
    })

    console.log('hora: ', date)

    this.respuestas[index][index1] = date//.slice(0, -3)
    console.log(this.respuestas)
  }

  countChange(event) {
    event.target.value = event.target.value.replace(/[^0-9]*/g, '');
    event.target.value = event.target.value.replace(' ', '');
    //event.target.value = event.target.value.replace(",", '.');
  }

  countChangeNumeroLocal(event) {
    event.target.value = event.target.value.replace(/[^0-9 | - | +]*/g, '');
    event.target.value = event.target.value.replace(' ', '');
    //event.target.value = event.target.value.replace(",", '.');
  }



  


  readURL(event): void {
    if (event.target.files && event.target.files[0]) {
        this.file = event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.image = reader.result;

        reader.readAsDataURL(this.file);
    }
  }


  crearLocal(form){

    var telefono = form.value.telefono;
    var primeros = telefono.slice(0,3);
    if(telefono.slice(0,2)=='09'){
      telefono = '+593' + telefono.slice(1,telefono.length);
    }
    else if(primeros == '+593'){
      telefono = telefono
    }else{
      telefono = telefono;
    }

    var redSocial = ''
    if(form.value.redSocial != null){
      redSocial = form.value.redSocial
    }

    this.presentLoading("Espere por favor...");
    this.local.Nombre = form.value.nombre;
    this.local.Descripcion = form.value.descripcion;
    this.local.Ciudadela = form.value.ciudadela;
    this.local.Manzana = form.value.manzana;
    this.local.Villa = form.value.villa;
    this.local.Telefono = telefono;
    this.local.RedSocial = redSocial;
    this.local.HorarioAtencion = this.horarioFinal;
    this.local.Referencia = form.value.referencia;
    this.local.Usuario = localStorage.getItem('userId');
    this.local.CategoriaLocal = this.categoria;
    this.local.Visibilidad = true;
    this.local.Domicilio = form.value.domicilio;
    this.local.Calificacion = 5;
    this.guardarLocal();
  }

  guardarLocal(){

    this.user.Locales = this.user.Locales + 1
    this.usuarioService.updateUsuario(this.id, this.user)


    var storageRef = this.angularFireStorage.storage.ref()

    
    storageRef.child(this.file.name).put(this.file)
    .then(
            data=>{
                    data.ref.getDownloadURL().then(
                        downloadURL => {      
                               this.crearLocalFinal(downloadURL)  
                        }
                    ).catch(err=>{this.loading.dismiss(), this.failedAlert("Error al cargar la foto")});
                    

            }
    )     

    
  }

  async crearLocalFinal(downloadURL: string){
    this.local.Foto = downloadURL;
    this.loading.dismiss();
    const docRef = firebase.firestore().collection("Locales").doc();
    this.local.id = docRef.id
    
    
    await docRef.set(this.local)

    this.router.navigate(["/comunicacion-local",docRef.id,localStorage.getItem('userId')])

  }

  async presentLoading(mensaje: string) {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: mensaje,
      //duration: 2000
    });
    return this.loading.present();

  }

  async failedAlert(text: string) {
    const alert = await this.alertCtrt.create({
     cssClass: 'my-custom-class',
     header: text,
    buttons: [{
    text: 'OK',
      handler: () => {
        
      }
    }]   
    });
    await alert.present();
  }



  

  

}
