(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-carousel-carousel-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/carousel/carousel.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/carousel/carousel.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content class=\"vertical-center\">\n  \n\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" style=\"height: 92%;margin-top: 45px;\">\n    <ion-slide style=\"height: 100%;width: 85%;margin: auto;\" *ngFor = 'let dato of carousel'>\n\n      <ion-content>\n\n        \n\n        <div align = 'center' style = 'margin-bottom: 45px;margin-top:35.2px;'>\n          <ion-img src= \"{{dato.Foto}}\" style=\"height: 235px;width: 235px;margin:auto\"></ion-img>\n        </div>\n     \n          \n   \n        <div align = 'center' style = 'text-align: center;margin:auto;width: 85%;'>\n          <ion-label style = 'color:black;font-size: 22.5px;text-align: center;margin:auto;'>{{dato.Descripcion}}</ion-label>\n\n        </div>\n          \n\n\n         \n\n      </ion-content>\n      \n    </ion-slide>\n\n  \n\n\n  </ion-slides>\n\n  <ion-fab vertical=\"start\" horizontal=\"end\" slot=\"fixed\" style = 'margin-top: 7.5px;margin-right: 7.5px;'>\n\n     <ion-icon (click) = 'cambiar()' name=\"close-circle-outline\" size=\"large\"></ion-icon>\n\n  </ion-fab>\n\n\n</ion-content>\n\n<ion-footer class=\"myColor\">\n  <div align = 'center'>\n    <img src = 'https://firebasestorage.googleapis.com/v0/b/ventasml2.appspot.com/o/iconos%2FML2%20gratis%20(2).png?alt=media&token=1ffed55e-3c07-46c0-8674-6a03c20663a1' style = 'height: 75px;width: 250px;margin: auto;'/>\n  </div>\n\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/folder/carousel/carousel-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/folder/carousel/carousel-routing.module.ts ***!
  \************************************************************/
/*! exports provided: CarouselPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselPageRoutingModule", function() { return CarouselPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _carousel_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel.page */ "./src/app/folder/carousel/carousel.page.ts");




const routes = [
    {
        path: '',
        component: _carousel_page__WEBPACK_IMPORTED_MODULE_3__["CarouselPage"]
    }
];
let CarouselPageRoutingModule = class CarouselPageRoutingModule {
};
CarouselPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CarouselPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/carousel/carousel.module.ts":
/*!****************************************************!*\
  !*** ./src/app/folder/carousel/carousel.module.ts ***!
  \****************************************************/
/*! exports provided: CarouselPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselPageModule", function() { return CarouselPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _carousel_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carousel-routing.module */ "./src/app/folder/carousel/carousel-routing.module.ts");
/* harmony import */ var _carousel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carousel.page */ "./src/app/folder/carousel/carousel.page.ts");







let CarouselPageModule = class CarouselPageModule {
};
CarouselPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _carousel_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarouselPageRoutingModule"]
        ],
        declarations: [_carousel_page__WEBPACK_IMPORTED_MODULE_6__["CarouselPage"]]
    })
], CarouselPageModule);



/***/ }),

/***/ "./src/app/folder/carousel/carousel.page.scss":
/*!****************************************************!*\
  !*** ./src/app/folder/carousel/carousel.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n\n.vertical-center .fixed-content,\n.vertical-center .scroll-content {\n  display: flex;\n  align-items: center;\n}\n\n.vertical-center .fixed-content ion-list,\n.vertical-center .scroll-content ion-list {\n  max-width: 300px;\n  width: 100%;\n  margin: auto;\n  text-align: center;\n}\n\n.myColor {\n  background-color: #3880FF;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  padding: 7.5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2Nhcm91c2VsL2Nhcm91c2VsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUF1QjtBQUMzQjs7QUFFQTs7RUFHUSxhQUFhO0VBQ2IsbUJBQW1CO0FBQTNCOztBQUpBOztFQU9ZLGdCQUFnQjtFQUNoQixXQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtBQUU5Qjs7QUFHQTtFQUNJLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osY0FBYztBQUFsQiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9jYXJvdXNlbC9jYXJvdXNlbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxufVxyXG5cclxuLnZlcnRpY2FsLWNlbnRlciB7XHJcbiAgICAuZml4ZWQtY29udGVudCxcclxuICAgIC5zY3JvbGwtY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7IFxyXG4gICAgICAgICAgICB3aWR0aDoxMDAlOyBcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvOyBcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm15Q29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4ODBGRjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDcuNXB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/folder/carousel/carousel.page.ts":
/*!**************************************************!*\
  !*** ./src/app/folder/carousel/carousel.page.ts ***!
  \**************************************************/
/*! exports provided: CarouselPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselPage", function() { return CarouselPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/variables.service */ "./src/app/services/variables.service.ts");





// import { Locales } from 'src/app/models/locales';
// import { LocalesService } from 'src/app/services/locales.service';
let CarouselPage = class CarouselPage {
    constructor(router, 
    //private usuarioService: UsuarioService,
    //private localesService: LocalesService,
    variablesService) {
        this.router = router;
        this.variablesService = variablesService;
        //usuarios:Usuarios[] = [];
        //locales : Locales[] = [];
        this.carousel = [];
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
    }
    ionViewWillEnter() {
        // this.nativeAudio.preloadSimple('audioWo','assets/audio/mario-bros-mamma-mia.mp3')
    }
    ngOnInit() {
        this.variablesService.getVariable('wCIVneApMUwcOvDwIneJ').subscribe(res => { this.promocion = res.Promocion; this.registrarPromo = res.registrarPromo; });
        //this.localesService.getLocales().subscribe(res=> {this.locales = res;this.cambiarLocales()})
        firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('Carousel').orderBy('Orden').onSnapshot(snap => {
            this.carousel = [];
            snap.forEach(element => {
                this.carousel.push(element.data());
            });
            //this.nativeAudio.play('audioWo')
        });
        //this.usuarioService.getUsuarios().subscribe(res => {this.usuarios = res;this.funcion()});
    }
    // cambiarLocales(){
    //   for(let i = 0; i< this.locales.length; i++){
    //     this.locales[i].Premium = true
    //     this.localesService.updateLocal(this.locales[i].id,this.locales[i]);
    //   }
    // }
    IonViewWillLeave() {
        //this.nativeAudio.unload('audioWo')
    }
    // funcion(){
    //   for(let i = 0; i < this.usuarios.length; i++){
    //     this.usuarios[i].NumeroReferidos = 0;
    //     this.usuarios[i].Referido = '';
    //     this.usuarioService.updateUsuario(this.usuarios[i].id, this.usuarios[i])
    //   }
    // }
    cambiar() {
        if (this.promocion) {
            if (this.registrarPromo) {
                this.router.navigateByUrl('/anuncio-primero');
            }
            else {
                this.router.navigateByUrl('/promocion-locales');
            }
        }
        else {
            this.router.navigateByUrl('/publicaciones');
        }
    }
};
CarouselPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"] }
];
CarouselPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carousel',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carousel.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/carousel/carousel.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./carousel.page.scss */ "./src/app/folder/carousel/carousel.page.scss")).default]
    })
], CarouselPage);



/***/ })

}]);
//# sourceMappingURL=folder-carousel-carousel-module.js.map