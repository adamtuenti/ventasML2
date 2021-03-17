(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-publicaciones-publicaciones-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/publicaciones/publicaciones.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/publicaciones/publicaciones.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header nombre=\"publicaciones\"></app-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n    <ion-slide style=\"height: 350px;width: 95%;margin: auto\" *ngFor=\"let publicidadDetalle of publicidad\">\r\n      <ion-item>\r\n        <ion-item>\r\n          <ion-img src=\"{{publicidadDetalle.Imagen}}\" style=\"height: 275px;width: 100%;\"></ion-img>\r\n\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-button  expand=\"full\"  expand=\"full\" href=\"{{publicidadDetalle.Imagen}}\" style=\"width: 50px;height: 50px;\" color=\"light\"><ion-icon name=\"expand-outline\" size=\"large\" ></ion-icon> </ion-button>\r\n          <a href= 'https://api.whatsapp.com/send?phone={{publicidadDetalle.Telefono}}'><ion-icon name=\"logo-whatsapp\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon></a>\r\n        </ion-item>\r\n\r\n      </ion-item>\r\n      \r\n    </ion-slide>\r\n    <!-- <ion-slide *ngIf='publicidad.Imagen!=\"\"' style=\"height: 325px;width: 85%;margin: auto\">\r\n      <ion-button expand=\"full\" href=\"{{publicidad.Imagen}}\" color=\"light\" style=\"height: 100%;width: 100%;\" fill=\"clear\"><ion-img src=\"{{publicidad.Imagen}}\" style=\"height: 275px;width: 100%;\"></ion-img></ion-button>\r\n    </ion-slide> -->\r\n    \r\n  </ion-slides>\r\n\r\n\r\n  <ion-list *ngFor=\"let publicacion of publicaciones\">\r\n    <ion-card [routerLink]=\"['/categorias']\" *ngIf = 'publicacion.Usuario == idUser'>\r\n\r\n        <ion-card-header>\r\n          <ion-item>\r\n            <ion-card-title >{{publicacion.Titulo}}</ion-card-title>  \r\n          </ion-item> \r\n\r\n        </ion-card-header>\r\n\r\n        <ion-card-content>\r\n          {{publicacion.Descripcion}}\r\n        </ion-card-content>\r\n\r\n        <ion-item>\r\n          <ion-item slot='end'>\r\n            \r\n            {{publicacion.Fecha | date:'yyyy/MM/dd'}}\r\n          </ion-item>\r\n\r\n        </ion-item>\r\n        \r\n        \r\n\r\n      \r\n    </ion-card>\r\n\r\n  </ion-list>\r\n\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button [routerLink]=\"['/crear-publicaciones-generales']\">\r\n    <ion-icon name=\"add-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/folder/publicaciones/publicaciones-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/folder/publicaciones/publicaciones-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: PublicacionesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicacionesPageRoutingModule", function() { return PublicacionesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _publicaciones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publicaciones.page */ "./src/app/folder/publicaciones/publicaciones.page.ts");




const routes = [
    {
        path: '',
        component: _publicaciones_page__WEBPACK_IMPORTED_MODULE_3__["PublicacionesPage"]
    }
];
let PublicacionesPageRoutingModule = class PublicacionesPageRoutingModule {
};
PublicacionesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PublicacionesPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/publicaciones/publicaciones.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/folder/publicaciones/publicaciones.module.ts ***!
  \**************************************************************/
/*! exports provided: PublicacionesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicacionesPageModule", function() { return PublicacionesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _publicaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./publicaciones-routing.module */ "./src/app/folder/publicaciones/publicaciones-routing.module.ts");
/* harmony import */ var _publicaciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./publicaciones.page */ "./src/app/folder/publicaciones/publicaciones.page.ts");
/* harmony import */ var src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/folder/components/components.module */ "./src/app/folder/components/components.module.ts");








let PublicacionesPageModule = class PublicacionesPageModule {
};
PublicacionesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _publicaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__["PublicacionesPageRoutingModule"]
        ],
        declarations: [_publicaciones_page__WEBPACK_IMPORTED_MODULE_6__["PublicacionesPage"]]
    })
], PublicacionesPageModule);



/***/ }),

/***/ "./src/app/folder/publicaciones/publicaciones.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/folder/publicaciones/publicaciones.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9wdWJsaWNhY2lvbmVzL3B1YmxpY2FjaW9uZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/folder/publicaciones/publicaciones.page.ts":
/*!************************************************************!*\
  !*** ./src/app/folder/publicaciones/publicaciones.page.ts ***!
  \************************************************************/
/*! exports provided: PublicacionesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicacionesPage", function() { return PublicacionesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_publicaciones_generales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/publicaciones-generales.service */ "./src/app/services/publicaciones-generales.service.ts");
/* harmony import */ var src_app_services_publicidad_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/publicidad.service */ "./src/app/services/publicidad.service.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







let PublicacionesPage = class PublicacionesPage {
    constructor(angularFireStorage, router, alertCtrt, publicacionesService, publicidadService, activateRoute, loadingController) {
        this.angularFireStorage = angularFireStorage;
        this.router = router;
        this.alertCtrt = alertCtrt;
        this.publicacionesService = publicacionesService;
        this.publicidadService = publicidadService;
        this.activateRoute = activateRoute;
        this.loadingController = loadingController;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
        this.publicaciones = [];
        this.publicidad = [];
    }
    ngOnInit() {
        this.publicacionesService.getPublicaciones().subscribe(res => { this.publicaciones = res; });
        this.publicidadService.getPublicidad().subscribe(res => { this.publicidad = res; console.log(this.publicidad); });
        this.idUser = localStorage.getItem('userId');
    }
};
PublicacionesPage.ctorParameters = () => [
    { type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: src_app_services_publicaciones_generales_service__WEBPACK_IMPORTED_MODULE_3__["PublicacionesGeneralesService"] },
    { type: src_app_services_publicidad_service__WEBPACK_IMPORTED_MODULE_4__["PublicidadService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
];
PublicacionesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-publicaciones',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./publicaciones.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/publicaciones/publicaciones.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./publicaciones.page.scss */ "./src/app/folder/publicaciones/publicaciones.page.scss")).default]
    })
], PublicacionesPage);



/***/ }),

/***/ "./src/app/services/publicidad.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/publicidad.service.ts ***!
  \************************************************/
/*! exports provided: PublicidadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicidadService", function() { return PublicidadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let PublicidadService = class PublicidadService {
    constructor(firestore) {
        this.firestore = firestore;
        this.publicidadCollection = firestore.collection('Publicidad'); //, ref => ref.where("Nombre", "==", "Celulares")
        this.publicidad = this.publicidadCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getPublicidad() {
        return this.publicidad;
    }
};
PublicidadService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
PublicidadService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PublicidadService);



/***/ })

}]);
//# sourceMappingURL=folder-publicaciones-publicaciones-module.js.map