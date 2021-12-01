(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-categoria-crear-categoria-crear-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/categoria-crear/categoria-crear.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/categoria-crear/categoria-crear.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>categoria-crear</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/folder/categoria-crear/categoria-crear-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/folder/categoria-crear/categoria-crear-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: CategoriaCrearPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaCrearPageRoutingModule", function() { return CategoriaCrearPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _categoria_crear_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categoria-crear.page */ "./src/app/folder/categoria-crear/categoria-crear.page.ts");




const routes = [
    {
        path: '',
        component: _categoria_crear_page__WEBPACK_IMPORTED_MODULE_3__["CategoriaCrearPage"]
    }
];
let CategoriaCrearPageRoutingModule = class CategoriaCrearPageRoutingModule {
};
CategoriaCrearPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoriaCrearPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/categoria-crear/categoria-crear.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/folder/categoria-crear/categoria-crear.module.ts ***!
  \******************************************************************/
/*! exports provided: CategoriaCrearPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaCrearPageModule", function() { return CategoriaCrearPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _categoria_crear_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categoria-crear-routing.module */ "./src/app/folder/categoria-crear/categoria-crear-routing.module.ts");
/* harmony import */ var _categoria_crear_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categoria-crear.page */ "./src/app/folder/categoria-crear/categoria-crear.page.ts");







let CategoriaCrearPageModule = class CategoriaCrearPageModule {
};
CategoriaCrearPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _categoria_crear_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriaCrearPageRoutingModule"]
        ],
        declarations: [_categoria_crear_page__WEBPACK_IMPORTED_MODULE_6__["CategoriaCrearPage"]]
    })
], CategoriaCrearPageModule);



/***/ }),

/***/ "./src/app/folder/categoria-crear/categoria-crear.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/folder/categoria-crear/categoria-crear.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9jYXRlZ29yaWEtY3JlYXIvY2F0ZWdvcmlhLWNyZWFyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/folder/categoria-crear/categoria-crear.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/folder/categoria-crear/categoria-crear.page.ts ***!
  \****************************************************************/
/*! exports provided: CategoriaCrearPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaCrearPage", function() { return CategoriaCrearPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CategoriaCrearPage = class CategoriaCrearPage {
    constructor() { }
    ngOnInit() {
    }
};
CategoriaCrearPage.ctorParameters = () => [];
CategoriaCrearPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categoria-crear',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categoria-crear.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/categoria-crear/categoria-crear.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./categoria-crear.page.scss */ "./src/app/folder/categoria-crear/categoria-crear.page.scss")).default]
    })
], CategoriaCrearPage);



/***/ })

}]);
//# sourceMappingURL=folder-categoria-crear-categoria-crear-module.js.map