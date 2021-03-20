(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-comentario-detalle-comentario-detalle-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/comentario-detalle/comentario-detalle.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/comentario-detalle/comentario-detalle.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons>\n      <ion-menu-button>\n      </ion-menu-button>\n      <ion-title>Comentario Detalle</ion-title>\n    </ion-buttons>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n    <div align=\"center\" style=\"margin-bottom: 25px;margin-top: 15px;\">\n      <ion-label style=\"font-size: 25px;font-weight: bold;margin-top:15px\">{{comentario.Titulo}}</ion-label>\n    </div>\n      \n  \n\n    \n\n\n      <ion-label style=\"font-size: 17px;margin-top: 25px;text-align: center;margin:auto;\">{{comentario.Detalle}}</ion-label>\n\n \n    <ion-item style=\"margin-top:35px\">\n      <ion-icon name=\"person-outline\" size=\"large\" style=\"margin-right: 8px;\"></ion-icon>\n      <ion-label style=\"font-size: 15px;\">{{comentario.Usuario}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <a href= 'https://api.whatsapp.com/send?phone={{comentario.Telefono}}'><ion-icon name=\"logo-whatsapp\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon></a>\n      <ion-label>{{comentario.Telefono}}</ion-label>\n    </ion-item>\n    <ion-button expand=\"block\" (click)=\"invisible()\" style=\"width: 150px;margin:auto;margin-top:7.5px;margin-bottom: 7.5px;\">Ocultar</ion-button>\n  </ion-card>\n \n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/folder/comentario-detalle/comentario-detalle-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/folder/comentario-detalle/comentario-detalle-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: ComentarioDetallePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentarioDetallePageRoutingModule", function() { return ComentarioDetallePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _comentario_detalle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comentario-detalle.page */ "./src/app/folder/comentario-detalle/comentario-detalle.page.ts");




const routes = [
    {
        path: '',
        component: _comentario_detalle_page__WEBPACK_IMPORTED_MODULE_3__["ComentarioDetallePage"]
    }
];
let ComentarioDetallePageRoutingModule = class ComentarioDetallePageRoutingModule {
};
ComentarioDetallePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComentarioDetallePageRoutingModule);



/***/ }),

/***/ "./src/app/folder/comentario-detalle/comentario-detalle.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/folder/comentario-detalle/comentario-detalle.module.ts ***!
  \************************************************************************/
/*! exports provided: ComentarioDetallePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentarioDetallePageModule", function() { return ComentarioDetallePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _comentario_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comentario-detalle-routing.module */ "./src/app/folder/comentario-detalle/comentario-detalle-routing.module.ts");
/* harmony import */ var _comentario_detalle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comentario-detalle.page */ "./src/app/folder/comentario-detalle/comentario-detalle.page.ts");







let ComentarioDetallePageModule = class ComentarioDetallePageModule {
};
ComentarioDetallePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _comentario_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComentarioDetallePageRoutingModule"]
        ],
        declarations: [_comentario_detalle_page__WEBPACK_IMPORTED_MODULE_6__["ComentarioDetallePage"]]
    })
], ComentarioDetallePageModule);



/***/ }),

/***/ "./src/app/folder/comentario-detalle/comentario-detalle.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/folder/comentario-detalle/comentario-detalle.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2NvbWVudGFyaW8tZGV0YWxsZS9jb21lbnRhcmlvLWRldGFsbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9jb21lbnRhcmlvLWRldGFsbGUvY29tZW50YXJpby1kZXRhbGxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/folder/comentario-detalle/comentario-detalle.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/folder/comentario-detalle/comentario-detalle.page.ts ***!
  \**********************************************************************/
/*! exports provided: ComentarioDetallePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentarioDetallePage", function() { return ComentarioDetallePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_models_comentarios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/comentarios */ "./src/app/models/comentarios.ts");
/* harmony import */ var src_app_services_comentarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/comentarios.service */ "./src/app/services/comentarios.service.ts");






let ComentarioDetallePage = class ComentarioDetallePage {
    constructor(comentarioService, activateRoute, router) {
        this.comentarioService = comentarioService;
        this.activateRoute = activateRoute;
        this.router = router;
        this.comentario = new src_app_models_comentarios__WEBPACK_IMPORTED_MODULE_3__["Comentarios"]();
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            const id = paramMap.get('id');
            this.id = id;
            this.comentarioService.getComentario(id).subscribe(res => { this.comentario = res; });
        });
        console.log(this.comentario);
    }
    invisible() {
        this.comentarioService.updateComentario(this.id, this.comentario).then(res => { this.router.navigate(['/comentarios']); });
    }
};
ComentarioDetallePage.ctorParameters = () => [
    { type: src_app_services_comentarios_service__WEBPACK_IMPORTED_MODULE_4__["ComentariosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ComentarioDetallePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comentario-detalle',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comentario-detalle.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/comentario-detalle/comentario-detalle.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comentario-detalle.page.scss */ "./src/app/folder/comentario-detalle/comentario-detalle.page.scss")).default]
    })
], ComentarioDetallePage);



/***/ })

}]);
//# sourceMappingURL=folder-comentario-detalle-comentario-detalle-module.js.map