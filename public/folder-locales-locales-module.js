(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-locales-locales-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/locales/locales.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/locales/locales.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header nombre=\"locales\"></app-header>\r\n\r\n<ion-content>\r\n\r\n\r\n\r\n  <ion-searchbar color=\"light\" placeholder=\"Buscar local...\" animated (ionChange)=\"buscar($event)\">\r\n  </ion-searchbar>\r\n\r\n  <ng-container *ngIf=\"!condicion\">\r\n    <ng-container *ngFor=\"let local of locales | filtroLocal: textoBuscar\">\r\n      <ion-card *ngIf='local.CategoriaLocal == categoria'>\r\n        <ion-item [routerLink]=\"['/productos-locales',local.id, local.Usuario]\">\r\n          <ion-avatar slot=\"start\" style=\"height: 50px;width: 50px;margin-right: 7.5px;\">\r\n            <img src=\"{{local.Foto}}\">\r\n          </ion-avatar>\r\n          <ion-label style=\"font-size: 18.2px; margin-left: 8.5px;\">{{local.Nombre}}</ion-label>\r\n\r\n          <ion-icon name=\"bicycle-outline\" color='success' slot='end' size='large' *ngIf='local.Domicilio == \"Si\"'>\r\n          </ion-icon>\r\n\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n\r\n          <div slot='end' *ngFor='let indice of [].constructor(local.Calificacion); let i = index'\r\n            style='width: 1%;margin-right: 5px;'>\r\n            <ion-icon name=\"star\" color='warning'></ion-icon>\r\n          </div>\r\n          <ion-icon *ngIf=\"local.Usuario == idUser\" slot='start' name=\"create-outline\"\r\n            [routerLink]=\"['/editar-local',local.id,idUser]\"></ion-icon>\r\n        </ion-item>\r\n      </ion-card>\r\n    </ng-container>\r\n    <!--<ion-grid>\r\n      <ion-row style=\"height: 500px;width: 100%;\">\r\n        <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\" *ngFor=\"let local of locales | filtroLocal: textoBuscar\">\r\n\r\n          <ion-card (click)='aumentarVisita(local.id,local)'>\r\n            <ion-card-header id=\"headerCard\">\r\n\r\n              <ion-img src=\"{{local.Foto}}\" style=\"height: 100%; padding: 0;\">\r\n              </ion-img>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-icon name=\"bicycle-outline\" color='success' slot='end' size='large' *ngIf='local.Domicilio == \"Si\"'>\r\n              </ion-icon>\r\n              <h2>{{local.Nombre}}</h2>\r\n              <ion-item>\r\n                <div slot='end' *ngFor='let indice of [].constructor(local.Calificacion); let i = index'\r\n                  style='width: 1%;margin-right: 5px;'>\r\n                  <ion-icon name=\"star\" color='warning'></ion-icon>\r\n                </div>\r\n                <ion-icon *ngIf=\"local.Usuario == idUser\" slot='start' name=\"create-outline\"\r\n                  [routerLink]=\"['/editar-local',local.id,idUser]\"></ion-icon>\r\n              </ion-item>\r\n            </ion-card-content>\r\n          </ion-card>\r\n\r\n    </ion-col>\r\n    </ion-row>\r\n    </ion-grid>-->\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"condicion\">\r\n\r\n    <div style=\"margin-top: 50px;\" align='center'>\r\n      <ion-text color=\"medium\">\r\n\r\n        <img\r\n          src=\"https://firebasestorage.googleapis.com/v0/b/ventasml2.appspot.com/o/iconos%2Ffile_search.png?alt=media&token=79e21b5c-d8e4-4124-abd8-be52f0bce666\"\r\n          style=\"width: 250px; height:250px;margin:auto;\" alet=\"foto\">\r\n\r\n        <p style=\"font-size: 21px;margin:auto;margin-top:7.5px\">No hay locales en esta categoría.</p>\r\n      </ion-text>\r\n    </div>\r\n  </ng-container>\r\n\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"validarSesion()\">\r\n      <ion-icon name=\"add-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/folder/locales/locales-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/folder/locales/locales-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: LocalesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalesPageRoutingModule", function() { return LocalesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _locales_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locales.page */ "./src/app/folder/locales/locales.page.ts");




const routes = [
    {
        path: '',
        component: _locales_page__WEBPACK_IMPORTED_MODULE_3__["LocalesPage"]
    }
];
let LocalesPageRoutingModule = class LocalesPageRoutingModule {
};
LocalesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LocalesPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/locales/locales.module.ts":
/*!**************************************************!*\
  !*** ./src/app/folder/locales/locales.module.ts ***!
  \**************************************************/
/*! exports provided: LocalesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalesPageModule", function() { return LocalesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _locales_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locales-routing.module */ "./src/app/folder/locales/locales-routing.module.ts");
/* harmony import */ var _locales_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locales.page */ "./src/app/folder/locales/locales.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/components.module */ "./src/app/folder/components/components.module.ts");









let LocalesPageModule = class LocalesPageModule {
};
LocalesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _locales_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocalesPageRoutingModule"]
        ],
        declarations: [_locales_page__WEBPACK_IMPORTED_MODULE_6__["LocalesPage"]]
    })
], LocalesPageModule);



/***/ }),

/***/ "./src/app/folder/locales/locales.page.scss":
/*!**************************************************!*\
  !*** ./src/app/folder/locales/locales.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n\n/**\r\nion-card-header{\r\n    background-color: #E0E0E0;\r\n    \r\n    height: 180px;\r\n}\r\n\r\nion-card{\r\n    display: flex;\r\n    flex-direction: column;\r\n    \r\n    margin: 0 !important;\r\n    height: 260px;\r\n  }\r\n\r\n  #headerCard{\r\n    padding: 0;\r\n  }\r\n  h2{\r\n      padding-top: 2px;\r\n      font-size: 12px;\r\n  }\r\n  p{\r\n      padding-top: 10px;\r\n      font-size: 16px;\r\n  } */\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2xvY2FsZXMvbG9jYWxlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBdUI7QUFDM0I7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EwQksiLCJmaWxlIjoic3JjL2FwcC9mb2xkZXIvbG9jYWxlcy9sb2NhbGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG59XHJcbi8qKlxyXG5pb24tY2FyZC1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFMEUwO1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgXHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMjYwcHg7XHJcbiAgfVxyXG5cclxuICAjaGVhZGVyQ2FyZHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIGgye1xyXG4gICAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIHB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfSAqLyJdfQ== */");

/***/ }),

/***/ "./src/app/folder/locales/locales.page.ts":
/*!************************************************!*\
  !*** ./src/app/folder/locales/locales.page.ts ***!
  \************************************************/
/*! exports provided: LocalesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalesPage", function() { return LocalesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_models_usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);




// import { Locales } from 'src/app/models/locales';
// import { LocalesService } from 'src/app/services/locales.service';




let LocalesPage = class LocalesPage {
    constructor(router, 
    //private localesService: LocalesService,
    usuarioService, alertCtrt, activateRoute) {
        this.router = router;
        this.usuarioService = usuarioService;
        this.alertCtrt = alertCtrt;
        this.activateRoute = activateRoute;
        this.locales = [];
        this.textoBuscar = '';
        this.condicion = false;
        this.user = new src_app_models_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuarios"]();
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            this.categoria = paramMap.get('id');
            this.idUser = localStorage.getItem('userId');
            //this.localesService.getLocales().subscribe(res=> {this.locales = res;this.condicion = this.getDatos()});
            if (localStorage.getItem('userId') != null) {
                this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => { this.user = res; });
            }
            firebase__WEBPACK_IMPORTED_MODULE_6__["firestore"]().collection('Locales').where('CategoriaLocal', '==', paramMap.get('id')).onSnapshot(snap => {
                this.locales = [];
                snap.forEach(element => {
                    this.locales.push(element.data());
                });
                if (this.locales.length == 0) {
                    this.condicion = true;
                }
                //this.nativeAudio.play('audioWo')
            });
        });
    }
    validarSesion() {
        if (this.idUser != null) {
            this.router.navigate(['/crear-local', this.categoria]);
        }
        else {
            this.iniciarSesion();
        }
    }
    iniciarSesion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: 'No ha iniciado sesión',
                message: 'Para crear un local primero debe iniciar sesión.',
                buttons: [
                    {
                        text: 'Iniciar sesión',
                        handler: (data) => {
                            this.router.navigate(['/login']);
                        }
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    validarVendedor() {
        if (this.user.Vendedor) {
            this.router.navigate(['/crear-local', this.categoria]);
        }
        else {
            this.serVendedor();
        }
    }
    serVendedor() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: 'Su cuenta no es de vendedor',
                message: 'Para poder usar esta función, vaya a su perfil y solicite ser vendedor.',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            // console.log('Confirm Cancel: blah');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    getDatos() {
        for (let i = 0; i < this.locales.length; i++) {
            if (this.locales[i].CategoriaLocal == this.categoria) {
                return false;
            }
        }
        return true;
    }
    buscar(event) {
        const texto = event.target.value;
        this.textoBuscar = texto;
    }
};
LocalesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
LocalesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-locales',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./locales.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/locales/locales.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./locales.page.scss */ "./src/app/folder/locales/locales.page.scss")).default]
    })
], LocalesPage);

// babaco


/***/ })

}]);
//# sourceMappingURL=folder-locales-locales-module.js.map