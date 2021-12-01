(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-servicio-detalle-servicio-detalle-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/servicio-detalle/servicio-detalle.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/servicio-detalle/servicio-detalle.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header nombre=\"categorias\"></app-header>\r\n\r\n<ion-content>\r\n\r\n\r\n\r\n  <ion-button expand=\"full\" color=\"light\" style=\"height: 250px;width: 85%;margin:auto;margin-top:7.5px\" fill=\"clear\">\r\n    <ion-img src=\"{{servicio.Foto}}\" style=\"height: 275px;width: 100%;\"></ion-img>\r\n  </ion-button>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <ion-card>\r\n\r\n    <label\r\n      style=\"margin: auto;display: block;font-size: 21.5px;font-weight: bold;color:black; align-items: center;text-align: center;margin-top: 7.5px;margin-bottom: 7.5px;\">{{servicio.Titulo}}</label>\r\n\r\n\r\n    <ng-container style=\"margin-bottom: 7.5px;\">\r\n\r\n      <ion-label style=\"font-size: 17.5px;margin-left: 7.5px;margin-top: 7px;\">{{servicio.Descripcion}}</ion-label>\r\n    </ng-container>\r\n\r\n\r\n    <!-- <ion-item>\r\n          <a href=\"mailto:{{user.Correo}}\"><ion-icon name=\"mail-outline\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon></a>\r\n          <ion-label>{{user.Correo}}</ion-label>\r\n        </ion-item>    -->\r\n  </ion-card>\r\n\r\n\r\n  <ion-card style=\"margin-top:11.5px\">\r\n\r\n    <label\r\n      style=\"margin: auto;display: block;font-size: 17.5px;font-weight: bold;color:black; align-items: center;text-align: center;margin-top: 8.5px;\">Contacto:</label>\r\n\r\n\r\n    <ion-item>\r\n      <ion-icon name=\"person-outline\" size=\"large\" style=\"margin-right: 8px;\" color=\"success\"></ion-icon>\r\n      <ion-label style=\"font-size: 17px;\">{{user.Nombre}} {{user.Apellido}}</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <a href='https://api.whatsapp.com/send?phone={{user.Telefono}}'>\r\n        <ion-icon name=\"logo-whatsapp\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon>\r\n      </a>\r\n      <ion-label>{{user.Telefono}}</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <a href=\"mailto:{{user.Correo}}\">\r\n        <ion-icon name=\"mail-outline\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon>\r\n      </a>\r\n      <ion-label>{{user.Correo}}</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-icon name=\"golf-outline\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon>\r\n      <ion-label>{{user.Ciudadela}} - Mz: {{user.Manzana}} Villa: {{user.Villa}}</ion-label>\r\n    </ion-item>\r\n\r\n  </ion-card>\r\n\r\n\r\n</ion-content>");

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



/***/ }),

/***/ "./src/app/folder/servicio-detalle/servicio-detalle-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/folder/servicio-detalle/servicio-detalle-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ServicioDetallePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioDetallePageRoutingModule", function() { return ServicioDetallePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _servicio_detalle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servicio-detalle.page */ "./src/app/folder/servicio-detalle/servicio-detalle.page.ts");




const routes = [
    {
        path: '',
        component: _servicio_detalle_page__WEBPACK_IMPORTED_MODULE_3__["ServicioDetallePage"]
    }
];
let ServicioDetallePageRoutingModule = class ServicioDetallePageRoutingModule {
};
ServicioDetallePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServicioDetallePageRoutingModule);



/***/ }),

/***/ "./src/app/folder/servicio-detalle/servicio-detalle.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/folder/servicio-detalle/servicio-detalle.module.ts ***!
  \********************************************************************/
/*! exports provided: ServicioDetallePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioDetallePageModule", function() { return ServicioDetallePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _servicio_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servicio-detalle-routing.module */ "./src/app/folder/servicio-detalle/servicio-detalle-routing.module.ts");
/* harmony import */ var _servicio_detalle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicio-detalle.page */ "./src/app/folder/servicio-detalle/servicio-detalle.page.ts");
/* harmony import */ var src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/folder/components/components.module */ "./src/app/folder/components/components.module.ts");








let ServicioDetallePageModule = class ServicioDetallePageModule {
};
ServicioDetallePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _servicio_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServicioDetallePageRoutingModule"]
        ],
        declarations: [_servicio_detalle_page__WEBPACK_IMPORTED_MODULE_6__["ServicioDetallePage"]]
    })
], ServicioDetallePageModule);



/***/ }),

/***/ "./src/app/folder/servicio-detalle/servicio-detalle.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/folder/servicio-detalle/servicio-detalle.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3NlcnZpY2lvLWRldGFsbGUvc2VydmljaW8tZGV0YWxsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9mb2xkZXIvc2VydmljaW8tZGV0YWxsZS9zZXJ2aWNpby1kZXRhbGxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/folder/servicio-detalle/servicio-detalle.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/folder/servicio-detalle/servicio-detalle.page.ts ***!
  \******************************************************************/
/*! exports provided: ServicioDetallePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioDetallePage", function() { return ServicioDetallePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_servicios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/servicios */ "./src/app/models/servicios.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_servicios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/servicios.service */ "./src/app/services/servicios.service.ts");
/* harmony import */ var src_app_models_usuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");







let ServicioDetallePage = class ServicioDetallePage {
    constructor(router, usuarioService, activateRoute, servicioService) {
        this.router = router;
        this.usuarioService = usuarioService;
        this.activateRoute = activateRoute;
        this.servicioService = servicioService;
        this.servicio = new src_app_models_servicios__WEBPACK_IMPORTED_MODULE_2__["Servicios"]();
        this.user = new src_app_models_usuario__WEBPACK_IMPORTED_MODULE_5__["Usuarios"]();
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            this.usuarioService.getUsuario(paramMap.get('idUser')).subscribe(res => { this.user = res; });
            this.servicioService.getServicio(paramMap.get('idServicio')).subscribe(res => { this.servicio = res; });
        });
    }
};
ServicioDetallePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_servicios_service__WEBPACK_IMPORTED_MODULE_4__["ServiciosService"] }
];
ServicioDetallePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-servicio-detalle',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./servicio-detalle.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/servicio-detalle/servicio-detalle.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./servicio-detalle.page.scss */ "./src/app/folder/servicio-detalle/servicio-detalle.page.scss")).default]
    })
], ServicioDetallePage);



/***/ })

}]);
//# sourceMappingURL=folder-servicio-detalle-servicio-detalle-module.js.map