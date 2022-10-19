import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Locales } from 'src/app/models/locales';
import { LocalesService } from 'src/app/services/locales.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { MensajeErrorService } from 'src/app/services/mensaje-error.service';

@Component({
  selector: 'app-editar-local',
  templateUrl: './editar-local.page.html',
  styleUrls: ['./editar-local.page.scss'],
})
export class EditarLocalPage implements OnInit {

  idLocal;
  public local: Locales = new Locales();
  idUser;
  idPropietario;
  image;
  file: File;
  loading: HTMLIonLoadingElement;

  loaded = false

  horario = false

  dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
  respuestas = [['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', '']]
  horarioErroneo = false

  horarioFinal = ''
  abrir = [false, false, false, false, false, false, false]

  constructor(private router: Router,
              private activateRoute: ActivatedRoute,
              private localesService: LocalesService,
              public loadingController: LoadingController,
              private mensajeErrorService: MensajeErrorService,
              private alertCtrt: AlertController) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
    this.idLocal = paramMap.get('idLocal');
    this.idPropietario = paramMap.get('idPropietario');
    this.localesService.getLocal(paramMap.get('idLocal')).subscribe(res=> {this.local = res;this.image = res.Foto; console.log(res); this.validarHorario(res.HorarioAtencion); this.loaded = true});
    this.idUser = localStorage.getItem('userId');
    });
  }

  async presentLoading(mensaje: string) {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: mensaje,
      //duration: 2000
    });
    return this.loading.present();
  }

  permitirAbrir(i){
    this.abrir[i] = true
    this.respuestas[i][0] = ''
    this.respuestas[i][1] = ''
  }

  validarHorario(info){
    console.log('holaa: ', info)
    let lista = info.split(',')
    if(lista.length == 7){
      this.horarioErroneo = false
      for(let i = 0; i < lista.length; i ++){
        if(lista[i] != 'cerrado'){
        let temp = lista[i].split(' - ')
        this.abrir[i] = true
        console.log(temp)
        this.respuestas[i][0] = temp[0]
        this.respuestas[i][1] = temp[1]
        }
        else{
          this.respuestas[i][0] = 'cerrado'
          this.respuestas[i][1] = 'cerrado'
        }
      }
    }else{
      this.horarioErroneo = true
    }
    console.log('info: ', info)
    console.log('lista: ', lista)
    console.log('respuestas: ', this.respuestas)
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

  





  // validarFechas(form){
  //   this.presentLoading("Espere por favor...");
  //   let texto = ''
  //   for(let i = 0; i < this.respuestas.length; i ++){
  //     let temp = this.respuestas[i]
  //     let temp1;

  //     if(temp[0] == '' || temp[1] == ''){
  //       //this.loading.dismiss()
  //       this.failedAlert("Complete el horario de atención: " + this.dias[i])
  //       return false
  //     }
  //     if(temp[0] == 'cerrado'){
  //       temp1 = 'cerrado'
  //     }
  //     else{
  //       temp1 = temp[0] + ' - ' + temp[1]
  //     }
  //     texto = texto + temp1 + ','
  //   }

  //   this.horarioFinal = texto
  //   console.log('texto: ', texto)
  //   this.crearLocal(form)
  // }

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
    let date = new Date(event.value).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    console.log('fecha: ', date.slice(0,-3))

    console.log('aquiiiii: ', event.value)
    console.log('date: ', date)

    this.respuestas[index][index1] = date//.slice(0, -3)
    console.log(this.respuestas)
  }



  readURL(event): void {
    if (event.target.files && event.target.files[0]) {
        this.file = event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.image = reader.result;

        reader.readAsDataURL(this.file);
    }
  }

  validarFechas(){
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
    console.log('final: ', texto)
    return true
  }



  async UpdateLocal(form):Promise<void>{
   // this.presentLoading("Espere por favor...");
    

    console.log(form.value)
    
    var nombre;
    var telefono;
    //var horario = '';
    var domicilio;
    var redSocial;
    var descripcion;
    var referencia;

    var horarioCorrecto = this.validarFechas()

    /*if(this.horarioErroneo === true){
      let respuesta = this.validarFechas()
      if(respuesta == true){
        horario = this.horarioFinal
        
      }else{
        //this.loading.dismiss()
        horario = ''
      }
    }else{
      horario = this.local.HorarioAtencion
    }*/

    if(form.value.nombre == ''){
      nombre = this.local.Nombre;
    }
    else{
      nombre = form.value.nombre;
    }
    

    // if(form.value.horario == ''){
    //   console.log('local: ', this.local)
    //   horario = this.local.HorarioAtencion;
    // }
    // else{
    //   horario = form.value.horario
    // }


    if(form.value.domicilio == ''){
      domicilio = this.local.Domicilio;
    }
    else{
      domicilio = form.value.domicilio
    }

    if(form.value.redSocial == ''){
      redSocial = this.local.RedSocial;
    }
    else{
      redSocial = form.value.redSocial
    }

    if(form.value.descripcion == ''){
      descripcion = this.local.Descripcion;
    }
    else{
      descripcion = form.value.descripcion
    }

    if(form.value.referencia == ''){
      referencia = this.local.Referencia;
    }
    else{
      referencia = form.value.referencia
    }


    var primeros;

    if(form.value.telefono!=''){
      telefono = form.value.telefono;
      primeros = telefono.slice(0,3);

    }else{
      telefono = this.local.Telefono;
      primeros = telefono.slice(0,3);
    }
    

    
    
    if(telefono.slice(0,1)==0){
      telefono = '+593' + telefono.slice(1,telefono.length);
    }
    else if(primeros == '+593'){
      telefono = telefono
    }

    if(horarioCorrecto){
      console.log('horario correcto')
      //this.presentLoading("Espere por favor...");

      //this.UpdateLocalCompleto(nombre,telefono,this.horarioFinal,domicilio,redSocial,descripcion,referencia,this.image)
    }


      

    // }else{
    //   this.UpdateLocalCompleto(form.value.nombre,telefono,form.value.horario,this.local.Domicilio,form.value.redSocial,form.value.descripcion,form.value.referencia,this.image)
    // }
    

    
  }

  async UpdateLocalCompleto(nombre: string, telefono: string, horario:string,domicilio:string,redSocial:string,descripcion:string,referencia:string,downloadURL:string){
    this.local.Nombre = nombre;
    this.local.Referencia = referencia;
    this.local.Telefono = telefono;
    this.local.Descripcion = descripcion;
    this.local.HorarioAtencion = horario;
    this.local.RedSocial = redSocial;
    this.local.Foto = downloadURL;
    this.local.Domicilio = domicilio;
    this.localesService.updateLocal(this.idLocal, this.local).
    then(
      auth=>{
        this.loading.dismiss();
        this.router.navigate(['/detalle-local',this.idLocal,this.idPropietario])
       
       
      }  
    ).catch(async error => {
      this.loading.dismiss();
      var mensaje=error.code.split('/')[1];
      const presentarMensaje = this.mensajeErrorService.AuthErrorCodeSpanish(mensaje);
      this.failedAlert(presentarMensaje)
    })
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
