(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-perfil-perfil-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/perfil/perfil.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/perfil/perfil.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header nombre=\"perfil\"></app-header>\r\n\r\n<ion-content>\r\n  \r\n  <ion-img class=\"circle-pic\" style=\"width: 275px;height: 275px;\" src=\"{{user.Foto}}\" ></ion-img>\r\n\r\n  <ion-card>\r\n    <ion-item>\r\n      <ion-icon name=\"person-outline\" size=\"large\" style=\"margin-right: 8px;\"></ion-icon>\r\n      <ion-label style=\"font-size: 17px;\">{{user.Nombre}} {{user.Apellido}}</ion-label>\r\n    </ion-item>\r\n  \r\n    <ion-item>\r\n      <ion-icon name=\"mail-outline\" size=\"large\" style=\"margin-right: 8px;\"></ion-icon>\r\n      <ion-label style=\"font-size: 17px;\">{{user.Correo}}</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-icon name=\"call-outline\" size=\"large\" style=\"margin-right: 8px;\"></ion-icon>\r\n      <ion-label style=\"font-size: 17px;\">{{user.Telefono}}</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-icon name=\"megaphone-outline\" size=\"large\" style=\"margin-right: 8px;\"></ion-icon>\r\n      <ion-label style=\"font-size: 17px;\">{{user.Publicaciones}}</ion-label>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item>\r\n      <ion-icon routerLink=\"/perfil-update\" name=\"create-outline\" size=\"large\" style=\"margin-right: 8px;\" layout=\"icon-end\" slot=\"end\"></ion-icon>\r\n\r\n    </ion-item>\r\n  \r\n  </ion-card>\r\n\r\n  <ion-item style=\"margin-top: 25px;margin-bottom: 25px;\">\r\n    <ion-button style=\"width: 225px;height: 45px;margin-top:12.5px;margin:auto;\" color=\"danger\" (click)=\"logOutUser()\">\r\n      <ion-icon name=\"log-out-outline\" size=\"large\" style=\"margin-right: 8px;\"></ion-icon>\r\n      <ion-label style=\"font-size: 17px;\">Cerrar Sesión</ion-label>\r\n    </ion-button>\r\n\r\n  </ion-item>\r\n\r\n  \r\n\r\n    \r\n\r\n\r\n  \r\n  \r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"crearSugerencia()\">\r\n     <ion-icon name=\"help-circle-outline\" size=\"large\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>\r\n<style>\r\n  .circle-pic {     \r\n    width: 55%;\r\n    height: 35%;\r\n    margin: auto;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n    margin-top: 10px;\r\n    /* -webkit-border-radius: 50%;\r\n    border-radius: 50%;\r\n    border-width: 50px; */\r\n\r\n  }\r\n</style>");

/***/ }),

/***/ "./src/app/folder/perfil/perfil-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/folder/perfil/perfil-routing.module.ts ***!
  \********************************************************/
/*! exports provided: PerfilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function() { return PerfilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil.page */ "./src/app/folder/perfil/perfil.page.ts");




const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/perfil/perfil.module.ts":
/*!************************************************!*\
  !*** ./src/app/folder/perfil/perfil.module.ts ***!
  \************************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil-routing.module */ "./src/app/folder/perfil/perfil-routing.module.ts");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil.page */ "./src/app/folder/perfil/perfil.page.ts");
/* harmony import */ var src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/folder/components/components.module */ "./src/app/folder/components/components.module.ts");








let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"]
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
    })
], PerfilPageModule);



/***/ }),

/***/ "./src/app/folder/perfil/perfil.page.scss":
/*!************************************************!*\
  !*** ./src/app/folder/perfil/perfil.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9wZXJmaWwvcGVyZmlsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/folder/perfil/perfil.page.ts":
/*!**********************************************!*\
  !*** ./src/app/folder/perfil/perfil.page.ts ***!
  \**********************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_sugerenciaCategoriaLocal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/sugerenciaCategoriaLocal */ "./src/app/models/sugerenciaCategoriaLocal.ts");
/* harmony import */ var src_app_services_sugerencia_locales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sugerencia-locales.service */ "./src/app/services/sugerencia-locales.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_models_usuario__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");








let PerfilPage = class PerfilPage {
    constructor(sugerenciaService, usuarioService, alertCtrt, authService) {
        this.sugerenciaService = sugerenciaService;
        this.usuarioService = usuarioService;
        this.alertCtrt = alertCtrt;
        this.authService = authService;
        this.sugerencia = new src_app_models_sugerenciaCategoriaLocal__WEBPACK_IMPORTED_MODULE_2__["sugerenciaCategoriaLocal"]();
        this.user = new src_app_models_usuario__WEBPACK_IMPORTED_MODULE_6__["Usuarios"]();
    }
    ngOnInit() {
        this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => { this.user = res; });
    }
    crearSugerencia() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: 'Dános tu sugerencia:',
                // message: 'Nombre del curso:',
                inputs: [
                    {
                        name: 'sugerencia',
                        placeholder: 'Escribe tu sugerencia',
                        type: 'text'
                    }
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
                            if (data.sugerencia != "") {
                                this.agregarSugerencia(data.sugerencia);
                            }
                            else if (data.sugerencia == "") {
                                //this.failedAlert("El campo email es requerido");
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    agregarSugerencia(sugerencia) {
        var fechaActual = new Date();
        this.sugerencia.Titulo = sugerencia;
        this.sugerencia.Visibilidad = true;
        this.sugerencia.Usuario = localStorage.getItem('userId');
        this.sugerencia.Tipo = 'sugerencia';
        this.sugerencia.Fecha = fechaActual.toString();
        ;
        this.sugerenciaService.addSugerencia(this.sugerencia);
    }
    logOutUser() {
        this.authService.logOutUser();
    }
};
PerfilPage.ctorParameters = () => [
    { type: src_app_services_sugerencia_locales_service__WEBPACK_IMPORTED_MODULE_3__["SugerenciaLocalesService"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_7__["UsuarioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
PerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./perfil.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/perfil/perfil.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./perfil.page.scss */ "./src/app/folder/perfil/perfil.page.scss")).default]
    })
], PerfilPage);



/***/ })

}]);
//# sourceMappingURL=folder-perfil-perfil-module.js.map