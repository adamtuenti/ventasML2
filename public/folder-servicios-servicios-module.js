(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-servicios-servicios-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/servicios/servicios.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/servicios/servicios.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header nombre=\"categorias\"></app-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-segment color=\"tertiary\" value=\"servicios\">\r\n\r\n\r\n\r\n    <ion-segment-button value=\"productos\" [routerLink]=\"['/productos-todos']\">\r\n      <ion-icon name=\"gift-outline\" size=\"large\"></ion-icon>\r\n      <ion-label style=\"font-size: 11px;\">Productos</ion-label>\r\n    </ion-segment-button>\r\n\r\n    <ion-segment-button value=\"categorias\" [routerLink]=\"['/categorias']\">\r\n      <ion-icon name=\"list-outline\" size=\"large\"></ion-icon>\r\n      <ion-label style=\"font-size: 11px;\">Categorias</ion-label>\r\n    </ion-segment-button>\r\n\r\n    <ion-segment-button value=\"servicios\" [routerLink]=\"['/servicios']\">\r\n      <ion-icon name=\"rocket-outline\" size=\"large\"></ion-icon>\r\n      <ion-label style=\"font-size: 11px;\">Servicios</ion-label>\r\n    </ion-segment-button>\r\n\r\n  </ion-segment>\r\n\r\n  <ion-searchbar color=\"light\" placeholder=\"Buscar servicio...\" animated (ionChange)=\"buscar($event)\">\r\n  </ion-searchbar>\r\n  <!--\r\n  <ng-container *ngFor=\"let servicio of servicios | filtroServicios: textoBuscar\">\r\n    \r\n      <ion-card>\r\n        <ion-item (click)='aumentarVisita(servicio.id, servicio)'>\r\n          <ion-avatar slot=\"start\" style=\"height: 50px;width: 50px;margin-right: 8.5px;\" >\r\n            <img src=\"{{servicio.Foto}}\">\r\n          </ion-avatar> \r\n          <ion-label style=\"font-size: 17.2px;\">{{servicio.Titulo}}</ion-label>\r\n  \r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"servicio.Usuario == idUser\">\r\n          <ion-icon   name=\"trash-outline\" slot='end' color='danger'(click)=\"alert(servicio.id)\"></ion-icon>\r\n\r\n        </ion-item>\r\n      </ion-card>\r\n      \r\n  </ng-container> -->\r\n\r\n  <ion-grid>\r\n    <ion-row style=\"height: 500px;width: 100%;\">\r\n      <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\" *ngFor=\"let servicio of servicios | filtroServicios: textoBuscar\">\r\n\r\n        <ion-card>\r\n          <ion-card-header id=\"headerCard\">\r\n\r\n            <ion-img src=\"{{servicio.Foto}}\" style=\"height: 100%; padding: 0;\"\r\n              (click)='aumentarVisita(servicio.id, servicio)'></ion-img>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <h2>{{servicio.Titulo}}</h2>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"validarSesion()\">\r\n      <ion-icon name=\"add-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/folder/servicios/servicios-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/folder/servicios/servicios-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ServiciosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosPageRoutingModule", function() { return ServiciosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _servicios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servicios.page */ "./src/app/folder/servicios/servicios.page.ts");




const routes = [
    {
        path: '',
        component: _servicios_page__WEBPACK_IMPORTED_MODULE_3__["ServiciosPage"]
    }
];
let ServiciosPageRoutingModule = class ServiciosPageRoutingModule {
};
ServiciosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServiciosPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/servicios/servicios.module.ts":
/*!******************************************************!*\
  !*** ./src/app/folder/servicios/servicios.module.ts ***!
  \******************************************************/
/*! exports provided: ServiciosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosPageModule", function() { return ServiciosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _servicios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servicios-routing.module */ "./src/app/folder/servicios/servicios-routing.module.ts");
/* harmony import */ var _servicios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicios.page */ "./src/app/folder/servicios/servicios.page.ts");
/* harmony import */ var src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/folder/components/components.module */ "./src/app/folder/components/components.module.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









let ServiciosPageModule = class ServiciosPageModule {
};
ServiciosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            _servicios_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServiciosPageRoutingModule"]
        ],
        declarations: [_servicios_page__WEBPACK_IMPORTED_MODULE_6__["ServiciosPage"]]
    })
], ServiciosPageModule);



/***/ }),

/***/ "./src/app/folder/servicios/servicios.page.scss":
/*!******************************************************!*\
  !*** ./src/app/folder/servicios/servicios.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n\nion-card-header {\n  background-color: #E0E0E0;\n  /*width: 180px;*/\n  height: 180px;\n}\n\nion-card {\n  display: flex;\n  flex-direction: column;\n  /*width: 180px;*/\n  margin: 0 !important;\n  height: 260px;\n}\n\n#headerCard {\n  padding: 0;\n}\n\nh2 {\n  padding-top: 2px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3NlcnZpY2lvcy9zZXJ2aWNpb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQXVCO0FBQzNCOztBQUVBO0VBQ0kseUJBQXlCO0VBQ3pCLGdCQUFBO0VBQ0EsYUFBYTtBQUNqQjs7QUFFQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQUE7RUFDQSxvQkFBb0I7RUFDcEIsYUFBYTtBQUNqQjs7QUFFRTtFQUNFLFVBQVU7QUFDZDs7QUFDRTtFQUNJLGdCQUFnQjtBQUV0QiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9zZXJ2aWNpb3Mvc2VydmljaW9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG59XHJcblxyXG5pb24tY2FyZC1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFMEUwO1xyXG4gICAgLyp3aWR0aDogMTgwcHg7Ki9cclxuICAgIGhlaWdodDogMTgwcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAvKndpZHRoOiAxODBweDsqL1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDI2MHB4O1xyXG4gIH1cclxuXHJcbiAgI2hlYWRlckNhcmR7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBoMntcclxuICAgICAgcGFkZGluZy10b3A6IDJweDtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/folder/servicios/servicios.page.ts":
/*!****************************************************!*\
  !*** ./src/app/folder/servicios/servicios.page.ts ***!
  \****************************************************/
/*! exports provided: ServiciosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosPage", function() { return ServiciosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_servicios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/servicios.service */ "./src/app/services/servicios.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let ServiciosPage = class ServiciosPage {
    constructor(router, servicioService, activateRoute, alertCtrt) {
        this.router = router;
        this.servicioService = servicioService;
        this.activateRoute = activateRoute;
        this.alertCtrt = alertCtrt;
        this.servicios = [];
        this.textoBuscar = '';
    }
    ngOnInit() {
        this.servicioService.getServicios().subscribe(res => { this.servicios = res; this.shuffle(this.servicios); });
        this.idUser = localStorage.getItem('userId');
    }
    buscar(event) {
        const texto = event.target.value;
        this.textoBuscar = texto;
    }
    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    aumentarVisita(id, servicios) {
        servicios.Visitas = servicios.Visitas + 1;
        this.servicioService.updateServicio(id, servicios);
        this.router.navigate(['/servicio-detalle', servicios.id, servicios.Usuario]);
    }
    validarSesion() {
        if (this.idUser != null) {
            this.router.navigate(['/crear-servicio']);
        }
        else {
            this.iniciarSesion();
        }
    }
    iniciarSesion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: 'No ha iniciado sesión',
                message: 'Para promocionar un servicio primero debe iniciar sesión.',
                buttons: [
                    {
                        text: 'Iniciar sesión',
                        handler: (data) => {
                            this.router.navigate(['/login']);
                        }
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            // console.log('Confirm Cancel: blah');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    alert(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: "¿Seguro que desea eliminar?",
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            //console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Elminar',
                        handler: (data) => {
                            this.remove(id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    remove(id) {
        this.servicioService.removeServicio(id);
    }
};
ServiciosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_servicios_service__WEBPACK_IMPORTED_MODULE_2__["ServiciosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ServiciosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-servicios',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./servicios.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/servicios/servicios.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./servicios.page.scss */ "./src/app/folder/servicios/servicios.page.scss")).default]
    })
], ServiciosPage);



/***/ })

}]);
//# sourceMappingURL=folder-servicios-servicios-module.js.map