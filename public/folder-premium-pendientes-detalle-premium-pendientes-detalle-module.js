(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-premium-pendientes-detalle-premium-pendientes-detalle-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/premium-pendientes-detalle/premium-pendientes-detalle.page.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/premium-pendientes-detalle/premium-pendientes-detalle.page.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons>\r\n      <ion-menu-button>\r\n      </ion-menu-button>\r\n      <ion-title>Premium</ion-title>\r\n    </ion-buttons>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content> \r\n\r\n  <ion-item style=\"margin-bottom: 3.5px\">\r\n  \r\n    <ion-button  expand=\"full\"  expand=\"full\" href=\"{{user.FotoPerfil}}\" style=\"margin-top: 3.5px;font-size: 15px;margin-right: 7.5px;\">Perfil</ion-button>\r\n\r\n    <ion-row>\r\n      <img src=\"{{user.FotoPerfil}}\" alet=\"foto\" style=\"width: 250px; height: 225px;margin-top: 3.5px;margin-bottom: 3.5px;\">\r\n    </ion-row>\r\n    \r\n \r\n    \r\n    \r\n\r\n  </ion-item>\r\n  \r\n\r\n\r\n\r\n  \r\n \r\n   \r\n  <ion-card>\r\n\r\n    <ion-item>\r\n      <ion-icon name=\"person-outline\" size=\"large\" style=\"margin-right: 8px;\"></ion-icon>\r\n      <ion-label style=\"font-size: 17px;\">{{user.Nombre}} {{user.Apellido}}</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-icon name=\"key-outline\" size=\"large\" style=\"margin-right: 8px;\"></ion-icon>\r\n      <ion-label style=\"font-size: 17px;\">{{id}}</ion-label>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item>\r\n      <a href= 'https://api.whatsapp.com/send?phone={{user.Telefono}}'><ion-icon name=\"logo-whatsapp\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon></a>\r\n      <ion-label style=\"font-size: 17px;\">{{user.Telefono}}</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-icon name=\"card-outline\" size=\"large\" style=\"margin-right: 8px;\"></ion-icon>\r\n      <ion-label style=\"font-size: 17px;\">{{user.Matricula}}</ion-label>\r\n    </ion-item>\r\n    \r\n    <ion-item>\r\n      <a href=\"mailto:{{user.Correo}}\"><ion-icon name=\"mail-outline\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon></a> \r\n      <ion-label style=\"font-size: 17px;\">{{user.Correo}}</ion-label>\r\n    </ion-item>\r\n    \r\n\r\n  </ion-card>\r\n  <ion-button expand=\"block\" (click)=\"aceptar()\">Aceptar</ion-button>\r\n</ion-content>\r\n\r\n\r\n\r\n<style>\r\n  .circle-pic {     \r\n    width: 55%;\r\n    height: 25%;\r\n    margin: auto;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n    margin-top: 10px;\r\n    /* -webkit-border-radius: 50%;\r\n    border-radius: 50%;\r\n    border-width: 50px; */\r\n\r\n  }\r\n</style>\r\n");

/***/ }),

/***/ "./src/app/folder/premium-pendientes-detalle/premium-pendientes-detalle-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/folder/premium-pendientes-detalle/premium-pendientes-detalle-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: PremiumPendientesDetallePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PremiumPendientesDetallePageRoutingModule", function() { return PremiumPendientesDetallePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _premium_pendientes_detalle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./premium-pendientes-detalle.page */ "./src/app/folder/premium-pendientes-detalle/premium-pendientes-detalle.page.ts");




const routes = [
    {
        path: '',
        component: _premium_pendientes_detalle_page__WEBPACK_IMPORTED_MODULE_3__["PremiumPendientesDetallePage"]
    }
];
let PremiumPendientesDetallePageRoutingModule = class PremiumPendientesDetallePageRoutingModule {
};
PremiumPendientesDetallePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PremiumPendientesDetallePageRoutingModule);



/***/ }),

/***/ "./src/app/folder/premium-pendientes-detalle/premium-pendientes-detalle.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/folder/premium-pendientes-detalle/premium-pendientes-detalle.module.ts ***!
  \****************************************************************************************/
/*! exports provided: PremiumPendientesDetallePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PremiumPendientesDetallePageModule", function() { return PremiumPendientesDetallePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _premium_pendientes_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./premium-pendientes-detalle-routing.module */ "./src/app/folder/premium-pendientes-detalle/premium-pendientes-detalle-routing.module.ts");
/* harmony import */ var _premium_pendientes_detalle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./premium-pendientes-detalle.page */ "./src/app/folder/premium-pendientes-detalle/premium-pendientes-detalle.page.ts");







let PremiumPendientesDetallePageModule = class PremiumPendientesDetallePageModule {
};
PremiumPendientesDetallePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _premium_pendientes_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__["PremiumPendientesDetallePageRoutingModule"]
        ],
        declarations: [_premium_pendientes_detalle_page__WEBPACK_IMPORTED_MODULE_6__["PremiumPendientesDetallePage"]]
    })
], PremiumPendientesDetallePageModule);



/***/ }),

/***/ "./src/app/folder/premium-pendientes-detalle/premium-pendientes-detalle.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/folder/premium-pendientes-detalle/premium-pendientes-detalle.page.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9wcmVtaXVtLXBlbmRpZW50ZXMtZGV0YWxsZS9wcmVtaXVtLXBlbmRpZW50ZXMtZGV0YWxsZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/folder/premium-pendientes-detalle/premium-pendientes-detalle.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/folder/premium-pendientes-detalle/premium-pendientes-detalle.page.ts ***!
  \**************************************************************************************/
/*! exports provided: PremiumPendientesDetallePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PremiumPendientesDetallePage", function() { return PremiumPendientesDetallePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_models_usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");






let PremiumPendientesDetallePage = class PremiumPendientesDetallePage {
    constructor(usuarioService, activateRoute, router) {
        this.usuarioService = usuarioService;
        this.activateRoute = activateRoute;
        this.router = router;
        this.user = new src_app_models_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuarios"]();
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            const id = paramMap.get('id');
            this.id = id;
            this.usuarioService.getUsuario(id).subscribe(res => { this.user = res; });
        });
    }
    aceptar() {
        this.user.EsperaPremium = false;
        this.user.Premium = true;
        this.usuarioService.updateUsuario(this.id, this.user).then(res => this.router.navigateByUrl("/premium-pendientes"))
            .catch(err => console.log("error"));
    }
};
PremiumPendientesDetallePage.ctorParameters = () => [
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PremiumPendientesDetallePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-premium-pendientes-detalle',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./premium-pendientes-detalle.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/premium-pendientes-detalle/premium-pendientes-detalle.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./premium-pendientes-detalle.page.scss */ "./src/app/folder/premium-pendientes-detalle/premium-pendientes-detalle.page.scss")).default]
    })
], PremiumPendientesDetallePage);



/***/ })

}]);
//# sourceMappingURL=folder-premium-pendientes-detalle-premium-pendientes-detalle-module.js.map