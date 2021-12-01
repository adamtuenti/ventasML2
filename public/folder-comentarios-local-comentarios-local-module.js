(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-comentarios-local-comentarios-local-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/comentarios-local/comentarios-local.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/comentarios-local/comentarios-local.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header nombre=\"locales\"></app-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-segment color=\"tertiary\" value=\"comentarios\">\r\n\r\n    <ion-segment-button value=\"anuncios\" [routerLink]=\"['/detalle-local',idLocal,idPropietario]\" routerDirection=\"root\">\r\n      <ion-icon name=\"information-circle-outline\" size=\"large\"></ion-icon>\r\n      <ion-label style=\"font-size: 11px;\">Datos</ion-label>\r\n    </ion-segment-button>\r\n\r\n    <ion-segment-button value=\"cartilla\" [routerLink]=\"['/productos-locales',idLocal,idPropietario]\"\r\n      routerDirection=\"root\">\r\n      <ion-icon name=\"book-outline\" size=\"large\"></ion-icon>\r\n      <ion-label style=\"font-size: 11px;\">Cartilla</ion-label>\r\n    </ion-segment-button>\r\n\r\n    <ion-segment-button value=\"comentarios\" [routerLink]=\"['/comentarios-local',idLocal,idPropietario]\"\r\n      routerDirection=\"root\">\r\n      <ion-icon name=\"chatbubbles-outline\" size=\"large\"></ion-icon>\r\n      <ion-label style=\"font-size: 11px;\">Comentarios</ion-label>\r\n    </ion-segment-button>\r\n\r\n  </ion-segment>\r\n\r\n  <ng-container *ngIf=\"!condicion\">\r\n    <ion-list>\r\n      <ng-container *ngFor=\"let comentario of comentarios\">\r\n        <ng-container *ngFor=\"let usuario of usuarios\">\r\n          <ng-container *ngIf=\"comentario.Empresa == idLocal\">\r\n\r\n\r\n            <ion-card *ngIf=\"usuario.id == comentario.Usuario\">\r\n\r\n              <ion-card-header>\r\n                <ion-item>\r\n                  <ion-avatar>\r\n                    <img src=\"{{usuario.Foto}}\">\r\n                  </ion-avatar>\r\n\r\n                  <ion-label style=\"margin-left: 7.5px;font-weight:bold\">{{usuario.Nombre}} {{usuario.Apellido}}\r\n                  </ion-label>\r\n\r\n\r\n                  <ion-icon *ngIf='idUser == comentario.Usuario' name=\"trash-outline\" slot=\"end\" color='danger'\r\n                    (click)=\"alert(comentario.id)\"></ion-icon>\r\n                </ion-item>\r\n\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-item>\r\n\r\n                  <label\r\n                    style=\"font-size: 15.5px;color:black;align-items: center;margin-bottom: 5.5px;\">{{comentario.Descripcion}}</label>\r\n                </ion-item>\r\n\r\n\r\n\r\n                <ion-item>\r\n                  <label slot='end'>{{comentario.Fecha | date:'yyyy/MM/dd'}}</label>\r\n                </ion-item>\r\n\r\n              </ion-card-content>\r\n\r\n            </ion-card>\r\n          </ng-container>\r\n        </ng-container>\r\n\r\n\r\n      </ng-container>\r\n\r\n\r\n    </ion-list>\r\n\r\n\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"condicion\">\r\n\r\n    <div style=\"margin-top: 50px;\" align='center'>\r\n      <ion-text color=\"medium\">\r\n\r\n        <img\r\n          src=\"https://firebasestorage.googleapis.com/v0/b/ventasml2.appspot.com/o/iconos%2Ffile_search.png?alt=media&token=79e21b5c-d8e4-4124-abd8-be52f0bce666\"\r\n          style=\"width: 250px; height:250px;margin:auto;\" alet=\"foto\">\r\n\r\n        <p style=\"font-size: 21px;margin:auto;margin-top:7.5px\">No hay comentarios realizados.</p>\r\n      </ion-text>\r\n    </div>\r\n  </ng-container>\r\n\r\n\r\n\r\n  <ion-fab *ngIf='idPropietario != idUser' vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"validarSesion()\">\r\n      <ion-icon name=\"add-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/components/header/header.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/components/header/header.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color = 'header'>  \r\n  <ion-toolbar>\r\n    <ion-segment color=\"tertiary\" value=\"{{text}}\" >\r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"megaphone-outline\" size=\"large\"></ion-icon>\r\n        <ion-label style=\"font-size: 11.5px;\">Anuncios</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button value=\"categorias\" [routerLink]=\"['/productos-todos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"grid-outline\" size=\"large\"></ion-icon>\r\n        <ion-label style=\"font-size: 11.5px;\">Productos</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button value=\"locales\" [routerLink]=\"['/locales-todos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"storefront-outline\" size=\"large\"></ion-icon>\r\n        <ion-label style=\"font-size: 11.5px;\">Locales</ion-label>\r\n      </ion-segment-button>\r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle\" size=\"large\"></ion-icon>\r\n        <ion-label style=\"font-size: 11.5px;\">Perfil</ion-label>\r\n        <!-- <ion-avatar style=\"height: 48px;width: 48px;margin: auto;\">\r\n          <img src=\"{{FotoPerfil}}\">\r\n        </ion-avatar> -->\r\n      </ion-segment-button>\r\n\r\n    </ion-segment>\r\n\r\n  </ion-toolbar>\r\n</ion-header>");

/***/ }),

/***/ "./src/app/folder/comentarios-local/comentarios-local-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/folder/comentarios-local/comentarios-local-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ComentariosLocalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentariosLocalPageRoutingModule", function() { return ComentariosLocalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _comentarios_local_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comentarios-local.page */ "./src/app/folder/comentarios-local/comentarios-local.page.ts");




const routes = [
    {
        path: '',
        component: _comentarios_local_page__WEBPACK_IMPORTED_MODULE_3__["ComentariosLocalPage"]
    }
];
let ComentariosLocalPageRoutingModule = class ComentariosLocalPageRoutingModule {
};
ComentariosLocalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComentariosLocalPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/comentarios-local/comentarios-local.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/folder/comentarios-local/comentarios-local.module.ts ***!
  \**********************************************************************/
/*! exports provided: ComentariosLocalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentariosLocalPageModule", function() { return ComentariosLocalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _comentarios_local_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comentarios-local-routing.module */ "./src/app/folder/comentarios-local/comentarios-local-routing.module.ts");
/* harmony import */ var _comentarios_local_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comentarios-local.page */ "./src/app/folder/comentarios-local/comentarios-local.page.ts");
/* harmony import */ var src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/folder/components/components.module */ "./src/app/folder/components/components.module.ts");








let ComentariosLocalPageModule = class ComentariosLocalPageModule {
};
ComentariosLocalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _comentarios_local_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComentariosLocalPageRoutingModule"]
        ],
        declarations: [_comentarios_local_page__WEBPACK_IMPORTED_MODULE_6__["ComentariosLocalPage"]]
    })
], ComentariosLocalPageModule);



/***/ }),

/***/ "./src/app/folder/comentarios-local/comentarios-local.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/folder/comentarios-local/comentarios-local.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2NvbWVudGFyaW9zLWxvY2FsL2NvbWVudGFyaW9zLWxvY2FsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9jb21lbnRhcmlvcy1sb2NhbC9jb21lbnRhcmlvcy1sb2NhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/folder/comentarios-local/comentarios-local.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/folder/comentarios-local/comentarios-local.page.ts ***!
  \********************************************************************/
/*! exports provided: ComentariosLocalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentariosLocalPage", function() { return ComentariosLocalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_comentarios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/comentarios */ "./src/app/models/comentarios.ts");
/* harmony import */ var src_app_services_comentarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/comentarios.service */ "./src/app/services/comentarios.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_models_usuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








let ComentariosLocalPage = class ComentariosLocalPage {
    constructor(comentariosService, activateRoute, usuarioService, router, alertCtrt) {
        this.comentariosService = comentariosService;
        this.activateRoute = activateRoute;
        this.usuarioService = usuarioService;
        this.router = router;
        this.alertCtrt = alertCtrt;
        this.comentarios = [];
        this.comentario = new src_app_models_comentarios__WEBPACK_IMPORTED_MODULE_2__["Comentarios"]();
        this.user = new src_app_models_usuario__WEBPACK_IMPORTED_MODULE_5__["Usuarios"]();
        this.usuarios = [];
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            this.idLocal = paramMap.get('idLocal');
            this.idPropietario = paramMap.get('idPropietario');
            this.comentariosService.getComentarios().subscribe(res => { this.comentarios = res; this.condicion = this.getDatos(); });
            if (localStorage.getItem('userId') != null) {
                this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => { this.user = res; });
            }
            this.idUser = localStorage.getItem('userId');
            this.usuarioService.getUsuarios().subscribe(res => this.usuarios = res);
        });
    }
    getDatos() {
        for (let i = 0; i < this.comentarios.length; i++) {
            if (this.comentarios[i].Empresa == this.idLocal) {
                return false;
            }
        }
        return true;
    }
    alert(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: "¿Desea eliminar este comentario?",
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            //console.log('Confirm Cancel: blah');
                        }
                    },
                    {
                        text: 'Elminar',
                        handler: (data) => {
                            this.remove(id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    remove(id) {
        this.comentariosService.removeComentario(id);
    }
    crearComentario() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                //header: 'Agregar comentario:',
                message: 'Agregar un comentario',
                inputs: [
                    {
                        name: 'comentario',
                        placeholder: 'Comentario...',
                        type: 'text'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            // console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                            if (data.curso != "") {
                                this.agregarComentario(data.comentario);
                            }
                            else if (data.curso == "") {
                                //this.failedAlert("El campo email es requerido");
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    agregarComentario(comentario) {
        var fechaActual = new Date();
        this.comentario.Empresa = this.idLocal;
        this.comentario.Usuario = this.idUser;
        this.comentario.Descripcion = comentario;
        this.comentario.Fecha = fechaActual.toString();
        this.comentario.Time = Date.now();
        this.comentariosService.addComentario(this.comentario);
    }
    validarSesion() {
        if (this.idUser != null) {
            this.crearComentario();
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
                message: 'Para promocionar un servicio primero debe iniciar sesión.',
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
                            // console.log('Confirm Cancel: blah');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ComentariosLocalPage.ctorParameters = () => [
    { type: src_app_services_comentarios_service__WEBPACK_IMPORTED_MODULE_3__["ComentariosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ComentariosLocalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comentarios-local',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comentarios-local.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/comentarios-local/comentarios-local.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comentarios-local.page.scss */ "./src/app/folder/comentarios-local/comentarios-local.page.scss")).default]
    })
], ComentariosLocalPage);



/***/ }),

/***/ "./src/app/folder/components/components.module.ts":
/*!********************************************************!*\
  !*** ./src/app/folder/components/components.module.ts ***!
  \********************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_folder_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/folder/components/header/header.component */ "./src/app/folder/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            src_app_folder_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_folder_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/folder/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/folder/components/header/header.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/folder/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/folder/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() {
    }
    ngOnInit() {
        // var foto = localStorage.getItem('FotoPerfil');
        // if(localStorage.getItem('FotoPerfil') != null){
        //   this.FotoPerfil = localStorage.getItem('FotoPerfil');
        // }
        // else{
        //   this.FotoPerfil = 'https://firebasestorage.googleapis.com/v0/b/ventasml2.appspot.com/o/iconos%2FiconMl2.png?alt=media&token=e6ee4d9e-33a0-4ab2-851f-d50930465e47';
        // }
        this.text = this.nombre;
    }
};
HeaderComponent.ctorParameters = () => [];
HeaderComponent.propDecorators = {
    nombre: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['nombre',] }]
};
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/components/header/header.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./header.component.scss */ "./src/app/folder/components/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ })

}]);
//# sourceMappingURL=folder-comentarios-local-comentarios-local-module.js.map