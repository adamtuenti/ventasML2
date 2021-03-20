(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-premium-pendientes-premium-pendientes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/premium-pendientes/premium-pendientes.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/premium-pendientes/premium-pendientes.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons>\r\n      <ion-menu-button>\r\n      </ion-menu-button>\r\n      <ion-title>Premium Pendientes</ion-title>\r\n    </ion-buttons>    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n<ion-searchbar\r\n    color=\"light\" \r\n    placeholder = \"Buscar...\"\r\n    animated\r\n    (ionChange)=\"buscar($event)\">\r\n  </ion-searchbar>\r\n\r\n<ion-list> \r\n  <ng-container *ngFor=\"let usuario of usuarios | filtroUsuario: textoBuscar\">\r\n    <ion-item *ngIf=\"usuario.EsperaPremium\" [routerLink]=\"['/premium-pendientes-detalle', usuario.id]\">\r\n\r\n      <ion-thumbnail slot=\"start\" slot=\"start\">\r\n        <img src=\"{{usuario.FotoPerfil}}\" alet=\"foto\">\r\n      </ion-thumbnail>\r\n      <ion-label>{{usuario.Nombre}} {{usuario.Apellido}} </ion-label>\r\n\r\n      \r\n    </ion-item>\r\n\r\n\r\n  </ng-container>\r\n      \r\n      \r\n</ion-list>\r\n\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "./src/app/folder/premium-pendientes/premium-pendientes-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/folder/premium-pendientes/premium-pendientes-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: PremiumPendientesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PremiumPendientesPageRoutingModule", function() { return PremiumPendientesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _premium_pendientes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./premium-pendientes.page */ "./src/app/folder/premium-pendientes/premium-pendientes.page.ts");




const routes = [
    {
        path: '',
        component: _premium_pendientes_page__WEBPACK_IMPORTED_MODULE_3__["PremiumPendientesPage"]
    }
];
let PremiumPendientesPageRoutingModule = class PremiumPendientesPageRoutingModule {
};
PremiumPendientesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PremiumPendientesPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/premium-pendientes/premium-pendientes.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/folder/premium-pendientes/premium-pendientes.module.ts ***!
  \************************************************************************/
/*! exports provided: PremiumPendientesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PremiumPendientesPageModule", function() { return PremiumPendientesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _premium_pendientes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./premium-pendientes-routing.module */ "./src/app/folder/premium-pendientes/premium-pendientes-routing.module.ts");
/* harmony import */ var _premium_pendientes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./premium-pendientes.page */ "./src/app/folder/premium-pendientes/premium-pendientes.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








let PremiumPendientesPageModule = class PremiumPendientesPageModule {
};
PremiumPendientesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _premium_pendientes_routing_module__WEBPACK_IMPORTED_MODULE_5__["PremiumPendientesPageRoutingModule"]
        ],
        declarations: [_premium_pendientes_page__WEBPACK_IMPORTED_MODULE_6__["PremiumPendientesPage"]]
    })
], PremiumPendientesPageModule);



/***/ }),

/***/ "./src/app/folder/premium-pendientes/premium-pendientes.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/folder/premium-pendientes/premium-pendientes.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3ByZW1pdW0tcGVuZGllbnRlcy9wcmVtaXVtLXBlbmRpZW50ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9wcmVtaXVtLXBlbmRpZW50ZXMvcHJlbWl1bS1wZW5kaWVudGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/folder/premium-pendientes/premium-pendientes.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/folder/premium-pendientes/premium-pendientes.page.ts ***!
  \**********************************************************************/
/*! exports provided: PremiumPendientesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PremiumPendientesPage", function() { return PremiumPendientesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");



let PremiumPendientesPage = class PremiumPendientesPage {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
        this.textoBuscar = '';
        this.usuarios = [];
    }
    ngOnInit() {
        this.usuarioService.getUsuarios().subscribe(res => this.usuarios = res);
    }
    buscar(event) {
        const texto = event.target.value;
        this.textoBuscar = texto;
    }
};
PremiumPendientesPage.ctorParameters = () => [
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"] }
];
PremiumPendientesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-premium-pendientes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./premium-pendientes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/premium-pendientes/premium-pendientes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./premium-pendientes.page.scss */ "./src/app/folder/premium-pendientes/premium-pendientes.page.scss")).default]
    })
], PremiumPendientesPage);



/***/ })

}]);
//# sourceMappingURL=folder-premium-pendientes-premium-pendientes-module.js.map