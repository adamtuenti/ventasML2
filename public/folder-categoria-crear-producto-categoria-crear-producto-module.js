(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-categoria-crear-producto-categoria-crear-producto-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/categoria-crear-producto/categoria-crear-producto.page.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/categoria-crear-producto/categoria-crear-producto.page.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-header nombre=\"productos\"></app-header>\n\n<ion-content>\n\n  <ion-segment color=\"tertiary\" value=\"productos\">\n\n    \n\n    <ion-segment-button value=\"productos\" [routerLink]=\"['/productos-todos']\" >\n      <ion-icon name=\"gift-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 11px;\">Productos</ion-label>\n    </ion-segment-button>\n\n    <ion-segment-button value=\"categorias\" [routerLink]=\"['/categorias']\" >\n      <ion-icon name=\"list-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 11px;\">Categorias</ion-label>\n    </ion-segment-button>\n\n    <ion-segment-button value=\"servicios\" [routerLink]=\"['/servicios']\">\n      <ion-icon name=\"rocket-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 11px;\">Servicios</ion-label>\n    </ion-segment-button>\n\n  </ion-segment>\n\n  <ion-searchbar\n    color=\"light\" \n    placeholder = \"Buscar categoría...\"\n    animated\n    (ionChange)=\"buscar($event)\">\n  </ion-searchbar>\n\n  <!-- <ion-list *ngFor=\"let categoria of categorias | filtroCategoria: textoBuscar\">\n    <ion-item [routerLink]=\"['/productos',categoria.id]\">\n      <ion-icon name=\"{{categoria.Icono}}\" slot=\"start\" size='large'></ion-icon>\n      <ion-label style=\"font-size: 17.2px;\">{{categoria.Nombre}}</ion-label>\n    </ion-item>\n\n  </ion-list> -->\n\n  <ion-grid>\n    <ion-row style=\"height: 350px;width: 100%;\">\n      <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\" *ngFor=\"let categoria of categorias | filtroCategoria: textoBuscar\">\n\n        <ion-card [routerLink]=\"['/crear-producto',categoria.id]\">\n        <ion-card-content style = 'align-items: center;justify-content: center;'>\n          \n          <div align = 'center'>\n            <ion-icon name=\"{{categoria.Icono}}\" size='large' style = 'align-items: center;'></ion-icon>\n          </div>\n            \n          \n            \n          \n      \n              <h1 style='color:black;font-size: 15px;text-align: center;margin:auto;margin-top: 7.5px'>\n                {{categoria.Nombre}}</h1>\n\n\n\n\n\n          </ion-card-content>\n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  \n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/folder/categoria-crear-producto/categoria-crear-producto-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/folder/categoria-crear-producto/categoria-crear-producto-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: CategoriaCrearProductoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaCrearProductoPageRoutingModule", function() { return CategoriaCrearProductoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _categoria_crear_producto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categoria-crear-producto.page */ "./src/app/folder/categoria-crear-producto/categoria-crear-producto.page.ts");




const routes = [
    {
        path: '',
        component: _categoria_crear_producto_page__WEBPACK_IMPORTED_MODULE_3__["CategoriaCrearProductoPage"]
    }
];
let CategoriaCrearProductoPageRoutingModule = class CategoriaCrearProductoPageRoutingModule {
};
CategoriaCrearProductoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoriaCrearProductoPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/categoria-crear-producto/categoria-crear-producto.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/folder/categoria-crear-producto/categoria-crear-producto.module.ts ***!
  \************************************************************************************/
/*! exports provided: CategoriaCrearProductoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaCrearProductoPageModule", function() { return CategoriaCrearProductoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _categoria_crear_producto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categoria-crear-producto-routing.module */ "./src/app/folder/categoria-crear-producto/categoria-crear-producto-routing.module.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _categoria_crear_producto_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categoria-crear-producto.page */ "./src/app/folder/categoria-crear-producto/categoria-crear-producto.page.ts");
/* harmony import */ var src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/folder/components/components.module */ "./src/app/folder/components/components.module.ts");









let CategoriaCrearProductoPageModule = class CategoriaCrearProductoPageModule {
};
CategoriaCrearProductoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _categoria_crear_producto_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriaCrearProductoPageRoutingModule"],
        ],
        declarations: [_categoria_crear_producto_page__WEBPACK_IMPORTED_MODULE_7__["CategoriaCrearProductoPage"]]
    })
], CategoriaCrearProductoPageModule);



/***/ }),

/***/ "./src/app/folder/categoria-crear-producto/categoria-crear-producto.page.scss":
/*!************************************************************************************!*\
  !*** ./src/app/folder/categoria-crear-producto/categoria-crear-producto.page.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9jYXRlZ29yaWEtY3JlYXItcHJvZHVjdG8vY2F0ZWdvcmlhLWNyZWFyLXByb2R1Y3RvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/folder/categoria-crear-producto/categoria-crear-producto.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/folder/categoria-crear-producto/categoria-crear-producto.page.ts ***!
  \**********************************************************************************/
/*! exports provided: CategoriaCrearProductoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaCrearProductoPage", function() { return CategoriaCrearProductoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/categorias.service */ "./src/app/services/categorias.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let CategoriaCrearProductoPage = class CategoriaCrearProductoPage {
    constructor(categoriasService, router) {
        this.categoriasService = categoriasService;
        this.router = router;
        this.categorias = [];
        this.textoBuscar = '';
    }
    ngOnInit() {
        this.categoriasService.getCategorias().subscribe(res => { this.categorias = res; });
    }
    buscar(event) {
        const texto = event.target.value;
        this.textoBuscar = texto;
    }
};
CategoriaCrearProductoPage.ctorParameters = () => [
    { type: src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_2__["CategoriasService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CategoriaCrearProductoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categoria-crear-producto',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categoria-crear-producto.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/categoria-crear-producto/categoria-crear-producto.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./categoria-crear-producto.page.scss */ "./src/app/folder/categoria-crear-producto/categoria-crear-producto.page.scss")).default]
    })
], CategoriaCrearProductoPage);



/***/ })

}]);
//# sourceMappingURL=folder-categoria-crear-producto-categoria-crear-producto-module.js.map