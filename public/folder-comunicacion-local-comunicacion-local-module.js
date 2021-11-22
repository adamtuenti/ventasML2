(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-comunicacion-local-comunicacion-local-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/comunicacion-local/comunicacion-local.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/comunicacion-local/comunicacion-local.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content>\n\n  <div align = 'center' style = 'margin-top: 75px'>\n\n    <label style = 'color: black;font-size: 21.2px;text-align: center;width: 85%;font-weight: bold;'>Genial!! Tu local fue creado exitosamente!!</label>\n\n    \n  </div>\n\n  <div align = 'center' style = 'margin-top: 35px;'>\n    <img style = 'margin:auto;height: 250px;width: 250px;' src = 'https://firebasestorage.googleapis.com/v0/b/ventasml2.appspot.com/o/iconos%2Fbob.png?alt=media&token=95be61cd-54a2-4384-9f8b-16fbb862ccfb'/>\n\n  </div>\n\n  <div align = 'center' style = 'margin-top: 25px'>\n\n    <label style = 'color: black;font-size: 19.2px;text-align: center;width: 85%;font-weight: bold;'>Agrega productos que ofrece tu local!!</label>\n\n    \n  </div>\n  \n\n  \n\n  <ion-item style=\"margin-top: 35px;margin-bottom: 10px;\" lines = 'none'>\n    <ion-button style=\"width: 235px;height: 45px;margin-top:12.5px;margin:auto;\" color=\"warning\" (click)=\"subirProducto()\">\n      <ion-icon name=\"rocket-outline\" size=\"large\" style=\"margin-right: 8px;\"></ion-icon>\n      <ion-label style=\"font-size: 17.2px;color: black\">Subir Productos</ion-label>\n    </ion-button>\n  </ion-item>\n\n\n  <ion-fab (click) = 'cambiar()' vertical=\"start\" horizontal=\"end\" slot=\"fixed\" style = 'margin-top: 7.5px;margin-right: 7.5px;'>\n\n      <ion-icon name=\"close-circle-outline\" size=\"large\"></ion-icon>\n\n    \n  </ion-fab>\n\n</ion-content>\n\n<ion-footer class=\"myColor\">\n  <div align = 'center'>\n    <img src = 'https://firebasestorage.googleapis.com/v0/b/ventasml2.appspot.com/o/iconos%2FML2%20gratis%20(2).png?alt=media&token=1ffed55e-3c07-46c0-8674-6a03c20663a1' style = 'height: 75px;width: 250px;margin: auto;'/>\n  </div>\n\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/folder/comunicacion-local/comunicacion-local-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/folder/comunicacion-local/comunicacion-local-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: ComunicacionLocalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComunicacionLocalPageRoutingModule", function() { return ComunicacionLocalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _comunicacion_local_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comunicacion-local.page */ "./src/app/folder/comunicacion-local/comunicacion-local.page.ts");




const routes = [
    {
        path: '',
        component: _comunicacion_local_page__WEBPACK_IMPORTED_MODULE_3__["ComunicacionLocalPage"]
    }
];
let ComunicacionLocalPageRoutingModule = class ComunicacionLocalPageRoutingModule {
};
ComunicacionLocalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComunicacionLocalPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/comunicacion-local/comunicacion-local.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/folder/comunicacion-local/comunicacion-local.module.ts ***!
  \************************************************************************/
/*! exports provided: ComunicacionLocalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComunicacionLocalPageModule", function() { return ComunicacionLocalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _comunicacion_local_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comunicacion-local-routing.module */ "./src/app/folder/comunicacion-local/comunicacion-local-routing.module.ts");
/* harmony import */ var _comunicacion_local_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comunicacion-local.page */ "./src/app/folder/comunicacion-local/comunicacion-local.page.ts");







let ComunicacionLocalPageModule = class ComunicacionLocalPageModule {
};
ComunicacionLocalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _comunicacion_local_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComunicacionLocalPageRoutingModule"]
        ],
        declarations: [_comunicacion_local_page__WEBPACK_IMPORTED_MODULE_6__["ComunicacionLocalPage"]]
    })
], ComunicacionLocalPageModule);



/***/ }),

/***/ "./src/app/folder/comunicacion-local/comunicacion-local.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/folder/comunicacion-local/comunicacion-local.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".myColor {\n  background-color: #3880FF;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  padding: 7.5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2NvbXVuaWNhY2lvbi1sb2NhbC9jb211bmljYWNpb24tbG9jYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL2NvbXVuaWNhY2lvbi1sb2NhbC9jb211bmljYWNpb24tbG9jYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15Q29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4ODBGRjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDcuNXB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/folder/comunicacion-local/comunicacion-local.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/folder/comunicacion-local/comunicacion-local.page.ts ***!
  \**********************************************************************/
/*! exports provided: ComunicacionLocalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComunicacionLocalPage", function() { return ComunicacionLocalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let ComunicacionLocalPage = class ComunicacionLocalPage {
    constructor(router, activateRoute) {
        this.router = router;
        this.activateRoute = activateRoute;
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            this.idLocal = paramMap.get('idLocal');
            this.idPropietario = paramMap.get('idPropietario');
        });
    }
    cambiar() {
        this.router.navigate(["/detalle-local", this.idLocal, this.idPropietario]);
    }
    subirProducto() {
        this.router.navigate(["/crear-producto-local", this.idLocal, this.idPropietario]);
    }
};
ComunicacionLocalPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ComunicacionLocalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comunicacion-local',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comunicacion-local.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/comunicacion-local/comunicacion-local.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comunicacion-local.page.scss */ "./src/app/folder/comunicacion-local/comunicacion-local.page.scss")).default]
    })
], ComunicacionLocalPage);



/***/ })

}]);
//# sourceMappingURL=folder-comunicacion-local-comunicacion-local-module.js.map