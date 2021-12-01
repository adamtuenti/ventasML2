(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-publicacion-detalle-publicacion-detalle-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/publicacion-detalle/publicacion-detalle.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/publicacion-detalle/publicacion-detalle.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header nombre=\"publicaciones\"></app-header>\r\n\r\n<ion-content>\r\n\r\n\r\n\r\n  <ion-card>\r\n\r\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" zoom>\r\n      <ion-slide style=\"height: 325px;width: 85%;margin: auto\">\r\n        <ion-button expand=\"full\" color=\"light\" style=\"height: 100%;width: 100%;\" fill=\"clear\">\r\n          <div class='swiper-zoom-container'>\r\n            <ion-img src=\"{{publicacion.Foto}}\" style=\"height: 275px;width: 100%;\"></ion-img>\r\n          </div>\r\n        </ion-button>\r\n      </ion-slide>\r\n      <!--<ion-slide *ngIf='publicacion.Foto1!=\"\"' style=\"height: 325px;width: 85%;margin: auto\">\r\n        <ion-button expand=\"full\" href=\"{{publicacion.Foto1}}\" color=\"light\" style=\"height: 100%;width: 100%;\"\r\n          fill=\"clear\">\r\n          <ion-img class='swiper-zoom-container' src=\"{{publicacion.Foto1}}\" style=\"height: 275px;width: 100%;\">\r\n          </ion-img>-->\r\n      <!--<div class='swiper-zoom-container'>\r\n          <ion-img src=\"{{publicacion.Foto1}}\" style=\"height: 275px;width: 100%;\">\r\n          </ion-img>\r\n        </div>-->\r\n      <!--</ion-button>\r\n      </ion-slide>-->\r\n\r\n    </ion-slides>\r\n\r\n    <ion-card style=\"padding: 10px;\">\r\n\r\n      <label\r\n        style=\"margin: auto;display: block;font-size: 21.5px;font-weight: bold;color:black; align-items: center;text-align: center;margin-top: 7.5px;margin-bottom: 7.5px;\">{{publicacion.Titulo}}</label>\r\n\r\n\r\n      <ng-container>\r\n\r\n        <ion-label style=\"font-size: 17.5px;margin-left: 7.5px;margin-top: 7px;margin-bottom: 7.5px;\">\r\n          {{publicacion.Descripcion}}</ion-label>\r\n      </ng-container>\r\n\r\n      <!--<ion-label style=\"margin-top: 7.5px;padding: 5px;\">\r\n\r\n        <ion-label style=\"font-size: 17.5px; text-align: center;\">{{publicacion.Descripcion}}</ion-label>\r\n      </ion-label>\r\n\r\n\r\n      <ion-item>\r\n\r\n        <ion-icon name=\"cash-outline\" color=\"success\"></ion-icon>\r\n        <ion-label style=\"font-size: 17.5px;margin-left: 7.5px;\">{{publicacion.Precio}}</ion-label>\r\n      </ion-item>-->\r\n\r\n\r\n    </ion-card>\r\n\r\n\r\n    <ion-card style=\"margin-top:11.5px\">\r\n\r\n      <label\r\n        style=\"margin: auto;display: block;font-size: 17.5px;font-weight: bold;color:black; align-items: center;text-align: center;margin-top: 8.5px;\">Contacto:</label>\r\n\r\n\r\n      <ion-item>\r\n        <ion-icon name=\"person-outline\" size=\"large\" style=\"margin-right: 8px;\" color=\"success\"></ion-icon>\r\n        <ion-label style=\"font-size: 17px;\">{{user.Nombre}} {{user.Apellido}}</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <a href='https://api.whatsapp.com/send?phone={{user.Telefono}}'>\r\n          <ion-icon name=\"logo-whatsapp\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon>\r\n        </a>\r\n        <ion-label>{{user.Telefono}}</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <a href=\"mailto:{{user.Correo}}\">\r\n          <ion-icon name=\"mail-outline\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon>\r\n        </a>\r\n        <ion-label>{{user.Correo}}</ion-label>\r\n      </ion-item>\r\n\r\n      <!-- <ion-item>\r\n        <ion-icon name=\"golf-outline\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon>\r\n        <ion-label>{{user.Ciudadela}} - Mz: {{user.Manzana}}   Villa: {{user.Villa}}</ion-label>\r\n      </ion-item>  -->\r\n\r\n    </ion-card>\r\n  </ion-card>\r\n\r\n</ion-content>");

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

/***/ "./src/app/folder/publicacion-detalle/publicacion-detalle-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/folder/publicacion-detalle/publicacion-detalle-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: PublicacionDetallePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicacionDetallePageRoutingModule", function() { return PublicacionDetallePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _publicacion_detalle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publicacion-detalle.page */ "./src/app/folder/publicacion-detalle/publicacion-detalle.page.ts");




const routes = [
    {
        path: '',
        component: _publicacion_detalle_page__WEBPACK_IMPORTED_MODULE_3__["PublicacionDetallePage"]
    }
];
let PublicacionDetallePageRoutingModule = class PublicacionDetallePageRoutingModule {
};
PublicacionDetallePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PublicacionDetallePageRoutingModule);



/***/ }),

/***/ "./src/app/folder/publicacion-detalle/publicacion-detalle.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/folder/publicacion-detalle/publicacion-detalle.module.ts ***!
  \**************************************************************************/
/*! exports provided: PublicacionDetallePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicacionDetallePageModule", function() { return PublicacionDetallePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _publicacion_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./publicacion-detalle-routing.module */ "./src/app/folder/publicacion-detalle/publicacion-detalle-routing.module.ts");
/* harmony import */ var _publicacion_detalle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./publicacion-detalle.page */ "./src/app/folder/publicacion-detalle/publicacion-detalle.page.ts");
/* harmony import */ var src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/folder/components/components.module */ "./src/app/folder/components/components.module.ts");








let PublicacionDetallePageModule = class PublicacionDetallePageModule {
};
PublicacionDetallePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _publicacion_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__["PublicacionDetallePageRoutingModule"]
        ],
        declarations: [_publicacion_detalle_page__WEBPACK_IMPORTED_MODULE_6__["PublicacionDetallePage"]]
    })
], PublicacionDetallePageModule);



/***/ }),

/***/ "./src/app/folder/publicacion-detalle/publicacion-detalle.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/folder/publicacion-detalle/publicacion-detalle.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n\nlabel {\n  color: grey;\n}\n\ninput[type=\"radio\"] {\n  display: none;\n}\n\n.clasificacion {\n  direction: rtl;\n  /* right to left */\n  unicode-bidi: bidi-override;\n  /* bidi de bidireccional */\n}\n\nlabel:hover {\n  color: orange;\n}\n\nlabel:hover ~ label {\n  color: orange;\n}\n\ninput[type=\"radio\"]:checked ~ label {\n  color: orange;\n}\n\n#form {\n  width: 250px;\n  margin: 0 auto;\n  height: 50px;\n}\n\n#form p {\n  text-align: center;\n}\n\n#form label {\n  font-size: 20px;\n}\n\ninput[type=\"radio\"] {\n  display: none;\n}\n\nlabel {\n  color: grey;\n}\n\n.clasificacion {\n  direction: rtl;\n  unicode-bidi: bidi-override;\n}\n\nlabel:hover,\nlabel:hover ~ label {\n  color: orange;\n}\n\ninput[type=\"radio\"]:checked ~ label {\n  color: orange;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3B1YmxpY2FjaW9uLWRldGFsbGUvcHVibGljYWNpb24tZGV0YWxsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBdUI7QUFDM0I7O0FBR0E7RUFBTyxXQUFVO0FBQ2pCOztBQUFBO0VBQXVCLGFBQVk7QUFJbkM7O0FBSEE7RUFDSSxjQUFjO0VBQUMsa0JBQUE7RUFDZiwyQkFBMkI7RUFBQywwQkFBQTtBQVFoQzs7QUFOQTtFQUFZLGFBQVk7QUFVeEI7O0FBVEE7RUFBb0IsYUFBWTtBQWFoQzs7QUFaQTtFQUFzQyxhQUFZO0FBZ0JsRDs7QUFkQTtFQUNJLFlBQVk7RUFDWixjQUFjO0VBQ2QsWUFBWTtBQWlCaEI7O0FBZEU7RUFDRSxrQkFBa0I7QUFpQnRCOztBQWRFO0VBQ0UsZUFBZTtBQWlCbkI7O0FBZEU7RUFDRSxhQUFhO0FBaUJqQjs7QUFkRTtFQUNFLFdBQVc7QUFpQmY7O0FBZEU7RUFDRSxjQUFjO0VBQ2QsMkJBQTJCO0FBaUIvQjs7QUFkRTs7RUFFRSxhQUFhO0FBaUJqQjs7QUFkRTtFQUNFLGFBQWE7QUFpQmpCIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL3B1YmxpY2FjaW9uLWRldGFsbGUvcHVibGljYWNpb24tZGV0YWxsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxufVxyXG5cclxuXHJcbmxhYmVseyBjb2xvcjpncmV5O31cclxuaW5wdXRbdHlwZSA9IFwicmFkaW9cIl17IGRpc3BsYXk6bm9uZTt9XHJcbi5jbGFzaWZpY2FjaW9ue1xyXG4gICAgZGlyZWN0aW9uOiBydGw7LyogcmlnaHQgdG8gbGVmdCAqL1xyXG4gICAgdW5pY29kZS1iaWRpOiBiaWRpLW92ZXJyaWRlOy8qIGJpZGkgZGUgYmlkaXJlY2Npb25hbCAqL1xyXG59XHJcbmxhYmVsOmhvdmVye2NvbG9yOm9yYW5nZTt9XHJcbmxhYmVsOmhvdmVyIH4gbGFiZWx7Y29sb3I6b3JhbmdlO31cclxuaW5wdXRbdHlwZSA9IFwicmFkaW9cIl06Y2hlY2tlZCB+IGxhYmVse2NvbG9yOm9yYW5nZTt9XHJcblxyXG4jZm9ybSB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgI2Zvcm0gcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gICNmb3JtIGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsIHtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gIH1cclxuICBcclxuICAuY2xhc2lmaWNhY2lvbiB7XHJcbiAgICBkaXJlY3Rpb246IHJ0bDtcclxuICAgIHVuaWNvZGUtYmlkaTogYmlkaS1vdmVycmlkZTtcclxuICB9XHJcbiAgXHJcbiAgbGFiZWw6aG92ZXIsXHJcbiAgbGFiZWw6aG92ZXIgfiBsYWJlbCB7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCB+IGxhYmVsIHtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/folder/publicacion-detalle/publicacion-detalle.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/folder/publicacion-detalle/publicacion-detalle.page.ts ***!
  \************************************************************************/
/*! exports provided: PublicacionDetallePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicacionDetallePage", function() { return PublicacionDetallePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_models_publicacionesGenerales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/publicacionesGenerales */ "./src/app/models/publicacionesGenerales.ts");
/* harmony import */ var src_app_services_publicaciones_generales_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/publicaciones-generales.service */ "./src/app/services/publicaciones-generales.service.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_models_usuario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");









let PublicacionDetallePage = class PublicacionDetallePage {
    constructor(angularFireStorage, router, alertCtrt, usuarioService, publicacionesService, activateRoute, loadingController) {
        this.angularFireStorage = angularFireStorage;
        this.router = router;
        this.alertCtrt = alertCtrt;
        this.usuarioService = usuarioService;
        this.publicacionesService = publicacionesService;
        this.activateRoute = activateRoute;
        this.loadingController = loadingController;
        this.publicacion = new src_app_models_publicacionesGenerales__WEBPACK_IMPORTED_MODULE_3__["PublicacionesGenerales"]();
        this.user = new src_app_models_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuarios"]();
        this.slideOpts = {
            //initialSlide: 0,
            //speed: 400,
            //zoom: true,
            zoom: {
                maxRatio: 2
            }
        };
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            this.usuarioService.getUsuario(paramMap.get('idUser')).subscribe(res => { this.user = res; });
            this.publicacionesService.getPublicacion(paramMap.get('idPublicacion')).subscribe(res => { this.publicacion = res; });
        });
    }
};
PublicacionDetallePage.ctorParameters = () => [
    { type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"] },
    { type: src_app_services_publicaciones_generales_service__WEBPACK_IMPORTED_MODULE_4__["PublicacionesGeneralesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
];
PublicacionDetallePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-publicacion-detalle',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./publicacion-detalle.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/publicacion-detalle/publicacion-detalle.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./publicacion-detalle.page.scss */ "./src/app/folder/publicacion-detalle/publicacion-detalle.page.scss")).default]
    })
], PublicacionDetallePage);



/***/ })

}]);
//# sourceMappingURL=folder-publicacion-detalle-publicacion-detalle-module.js.map