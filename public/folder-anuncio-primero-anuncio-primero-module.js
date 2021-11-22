(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-anuncio-primero-anuncio-primero-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/anuncio-primero/anuncio-primero.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/anuncio-primero/anuncio-primero.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n\n  <ion-fab vertical=\"start\" horizontal=\"end\" slot=\"fixed\" style = 'margin-top: 7.5px;margin-right: 7.5px;'>\n    <ion-icon routerLink=\"/publicaciones\" name=\"close-circle-outline\" size=\"large\"></ion-icon>\n  </ion-fab>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/folder/anuncio-primero/anuncio-primero-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/folder/anuncio-primero/anuncio-primero-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: AnuncioPrimeroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnuncioPrimeroPageRoutingModule", function() { return AnuncioPrimeroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _anuncio_primero_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./anuncio-primero.page */ "./src/app/folder/anuncio-primero/anuncio-primero.page.ts");




const routes = [
    {
        path: '',
        component: _anuncio_primero_page__WEBPACK_IMPORTED_MODULE_3__["AnuncioPrimeroPage"]
    }
];
let AnuncioPrimeroPageRoutingModule = class AnuncioPrimeroPageRoutingModule {
};
AnuncioPrimeroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AnuncioPrimeroPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/anuncio-primero/anuncio-primero.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/folder/anuncio-primero/anuncio-primero.module.ts ***!
  \******************************************************************/
/*! exports provided: AnuncioPrimeroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnuncioPrimeroPageModule", function() { return AnuncioPrimeroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _anuncio_primero_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./anuncio-primero-routing.module */ "./src/app/folder/anuncio-primero/anuncio-primero-routing.module.ts");
/* harmony import */ var _anuncio_primero_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./anuncio-primero.page */ "./src/app/folder/anuncio-primero/anuncio-primero.page.ts");







let AnuncioPrimeroPageModule = class AnuncioPrimeroPageModule {
};
AnuncioPrimeroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _anuncio_primero_routing_module__WEBPACK_IMPORTED_MODULE_5__["AnuncioPrimeroPageRoutingModule"]
        ],
        declarations: [_anuncio_primero_page__WEBPACK_IMPORTED_MODULE_6__["AnuncioPrimeroPage"]]
    })
], AnuncioPrimeroPageModule);



/***/ }),

/***/ "./src/app/folder/anuncio-primero/anuncio-primero.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/folder/anuncio-primero/anuncio-primero.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9hbnVuY2lvLXByaW1lcm8vYW51bmNpby1wcmltZXJvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/folder/anuncio-primero/anuncio-primero.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/folder/anuncio-primero/anuncio-primero.page.ts ***!
  \****************************************************************/
/*! exports provided: AnuncioPrimeroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnuncioPrimeroPage", function() { return AnuncioPrimeroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AnuncioPrimeroPage = class AnuncioPrimeroPage {
    constructor() { }
    ngOnInit() {
    }
};
AnuncioPrimeroPage.ctorParameters = () => [];
AnuncioPrimeroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-anuncio-primero',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./anuncio-primero.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/anuncio-primero/anuncio-primero.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./anuncio-primero.page.scss */ "./src/app/folder/anuncio-primero/anuncio-primero.page.scss")).default]
    })
], AnuncioPrimeroPage);



/***/ })

}]);
//# sourceMappingURL=folder-anuncio-primero-anuncio-primero-module.js.map