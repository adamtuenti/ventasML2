(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-comentarios-comentarios-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/comentarios/comentarios.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/comentarios/comentarios.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons>\r\n      <ion-menu-button>\r\n      </ion-menu-button>\r\n      <ion-title>Comentarios</ion-title>\r\n    </ion-buttons>    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-list>\r\n    <ng-container *ngFor=\"let comentario of comentarios\">\r\n      <ion-item>\r\n\r\n    \r\n\r\n        \r\n            <label style=\"font-size: 18.2px;font-weight: bold;color:black; align-items: center;text-align: center;\">{{comentario.Titulo}}</label>\r\n         \r\n\r\n      \r\n\r\n      \r\n\r\n       \r\n          \r\n    \r\n  \r\n        \r\n      </ion-item>\r\n  \r\n  \r\n    </ng-container>\r\n        \r\n        \r\n  </ion-list>\r\n  \r\n  </ion-content>\r\n");

/***/ }),

/***/ "./src/app/folder/comentarios/comentarios-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/folder/comentarios/comentarios-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ComentariosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentariosPageRoutingModule", function() { return ComentariosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _comentarios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comentarios.page */ "./src/app/folder/comentarios/comentarios.page.ts");




const routes = [
    {
        path: '',
        component: _comentarios_page__WEBPACK_IMPORTED_MODULE_3__["ComentariosPage"]
    }
];
let ComentariosPageRoutingModule = class ComentariosPageRoutingModule {
};
ComentariosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComentariosPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/comentarios/comentarios.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/folder/comentarios/comentarios.module.ts ***!
  \**********************************************************/
/*! exports provided: ComentariosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentariosPageModule", function() { return ComentariosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _comentarios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comentarios-routing.module */ "./src/app/folder/comentarios/comentarios-routing.module.ts");
/* harmony import */ var _comentarios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comentarios.page */ "./src/app/folder/comentarios/comentarios.page.ts");
/* harmony import */ var src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/folder/components/components.module */ "./src/app/folder/components/components.module.ts");








let ComentariosPageModule = class ComentariosPageModule {
};
ComentariosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _comentarios_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComentariosPageRoutingModule"]
        ],
        declarations: [_comentarios_page__WEBPACK_IMPORTED_MODULE_6__["ComentariosPage"]]
    })
], ComentariosPageModule);



/***/ }),

/***/ "./src/app/folder/comentarios/comentarios.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/folder/comentarios/comentarios.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2NvbWVudGFyaW9zL2NvbWVudGFyaW9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9mb2xkZXIvY29tZW50YXJpb3MvY29tZW50YXJpb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/folder/comentarios/comentarios.page.ts":
/*!********************************************************!*\
  !*** ./src/app/folder/comentarios/comentarios.page.ts ***!
  \********************************************************/
/*! exports provided: ComentariosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentariosPage", function() { return ComentariosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_comentarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/comentarios.service */ "./src/app/services/comentarios.service.ts");



let ComentariosPage = class ComentariosPage {
    constructor(comentariosService) {
        this.comentariosService = comentariosService;
        this.comentarios = [];
    }
    ngOnInit() {
        this.comentariosService.getComentarios().subscribe(res => { this.comentarios = res; console.log(this.comentarios); });
    }
};
ComentariosPage.ctorParameters = () => [
    { type: src_app_services_comentarios_service__WEBPACK_IMPORTED_MODULE_2__["ComentariosService"] }
];
ComentariosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'comentarios',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comentarios.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/comentarios/comentarios.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comentarios.page.scss */ "./src/app/folder/comentarios/comentarios.page.scss")).default]
    })
], ComentariosPage);



/***/ })

}]);
//# sourceMappingURL=folder-comentarios-comentarios-module.js.map