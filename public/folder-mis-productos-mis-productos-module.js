(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-mis-productos-mis-productos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/mis-productos/mis-productos.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/mis-productos/mis-productos.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header nombre=\"perfil\"></app-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-searchbar color=\"light\" placeholder=\"Buscar producto...\" animated (ionChange)=\"buscar($event)\">\r\n  </ion-searchbar>\r\n\r\n  <ng-container *ngIf=\"!condicion\">\r\n    <ng-container *ngFor=\"let producto of productos | filtroProductos: textoBuscar\">\r\n\r\n      <ion-card *ngIf=\"producto.Vendedor == idUser\">\r\n\r\n        <ion-item [routerLink]=\"['/producto-detalle',producto.id,idUser]\">\r\n\r\n\r\n          <ion-avatar slot=\"start\" style=\"height: 50px;width: 50px;margin-right: 7.5px;\">\r\n            <img src=\"{{producto.Foto1}}\">\r\n          </ion-avatar>\r\n\r\n          <ion-label style=\"font-size: 17.2px; margin-left: 7.5px;\">{{producto.Titulo}}</ion-label>\r\n\r\n\r\n          <ion-button fill=\"outline\" slot='end' color=\"success\">\r\n            <ion-icon name=\"cash-outline\" color=\"success\"></ion-icon><label\r\n              style=\"font-size: 14;margin-left: 7.5px;\">${{producto.Precio}}</label>\r\n          </ion-button>\r\n\r\n\r\n\r\n\r\n\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-button fill=\"outline\" slot='end'>\r\n            <ion-icon name=\"eye-outline\"></ion-icon><label\r\n              style=\"font-size: 12;margin-left: 7.5px;\">{{producto.Visitas}}</label>\r\n          </ion-button>\r\n          <ion-icon name=\"create-outline\" slot='end' [routerLink]=\"['/editar-producto',producto.id]\"></ion-icon>\r\n          <ion-icon name=\"trash-outline\" slot='end' color='danger' (click)=\"alert(producto.id)\"></ion-icon>\r\n\r\n        </ion-item>\r\n\r\n\r\n      </ion-card>\r\n\r\n\r\n    </ng-container>\r\n\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"condicion\">\r\n\r\n    <div style=\"margin-top: 50px;\" align='center'>\r\n      <ion-text color=\"medium\">\r\n\r\n        <img\r\n          src=\"https://firebasestorage.googleapis.com/v0/b/ventasml2.appspot.com/o/iconos%2Ffile_search.png?alt=media&token=79e21b5c-d8e4-4124-abd8-be52f0bce666\"\r\n          style=\"width: 55%; height:58%;margin:auto;\" alet=\"foto\">\r\n\r\n        <p style=\"font-size: 21px;margin:auto;margin-top:7.5px\">No hay productos registrados.</p>\r\n      </ion-text>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button [routerLink]=\"['/crear-producto-perfil']\">\r\n      <ion-icon name=\"add-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/folder/mis-productos/mis-productos-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/folder/mis-productos/mis-productos-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: MisProductosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisProductosPageRoutingModule", function() { return MisProductosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mis_productos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mis-productos.page */ "./src/app/folder/mis-productos/mis-productos.page.ts");




const routes = [
    {
        path: '',
        component: _mis_productos_page__WEBPACK_IMPORTED_MODULE_3__["MisProductosPage"]
    }
];
let MisProductosPageRoutingModule = class MisProductosPageRoutingModule {
};
MisProductosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MisProductosPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/mis-productos/mis-productos.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/folder/mis-productos/mis-productos.module.ts ***!
  \**************************************************************/
/*! exports provided: MisProductosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisProductosPageModule", function() { return MisProductosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mis_productos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mis-productos-routing.module */ "./src/app/folder/mis-productos/mis-productos-routing.module.ts");
/* harmony import */ var _mis_productos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mis-productos.page */ "./src/app/folder/mis-productos/mis-productos.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/folder/components/components.module */ "./src/app/folder/components/components.module.ts");









let MisProductosPageModule = class MisProductosPageModule {
};
MisProductosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mis_productos_routing_module__WEBPACK_IMPORTED_MODULE_5__["MisProductosPageRoutingModule"]
        ],
        declarations: [_mis_productos_page__WEBPACK_IMPORTED_MODULE_6__["MisProductosPage"]]
    })
], MisProductosPageModule);



/***/ }),

/***/ "./src/app/folder/mis-productos/mis-productos.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/folder/mis-productos/mis-productos.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL21pcy1wcm9kdWN0b3MvbWlzLXByb2R1Y3Rvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9mb2xkZXIvbWlzLXByb2R1Y3Rvcy9taXMtcHJvZHVjdG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/folder/mis-productos/mis-productos.page.ts":
/*!************************************************************!*\
  !*** ./src/app/folder/mis-productos/mis-productos.page.ts ***!
  \************************************************************/
/*! exports provided: MisProductosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisProductosPage", function() { return MisProductosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/productos.service */ "./src/app/services/productos.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_models_usuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");








let MisProductosPage = class MisProductosPage {
    constructor(productosService, router, usuarioService, activateRoute, alertCtrt) {
        this.productosService = productosService;
        this.router = router;
        this.usuarioService = usuarioService;
        this.activateRoute = activateRoute;
        this.alertCtrt = alertCtrt;
        this.productos = [];
        this.textoBuscar = '';
        this.user = new src_app_models_usuario__WEBPACK_IMPORTED_MODULE_5__["Usuarios"]();
    }
    ngOnInit() {
        this.idUser = localStorage.getItem('userId');
        this.productosService.getProductos().subscribe(res => { this.productos = res; this.condicion = this.getDatos(); });
        this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => { this.user = res; });
    }
    buscar(event) {
        const texto = event.target.value;
        this.textoBuscar = texto;
    }
    getDatos() {
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].Vendedor == this.idUser) {
                return false;
            }
        }
        return true;
    }
    alert(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: "¿Desea eliminar este producto?",
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
        this.productosService.removerProducto(id);
        this.user.Productos = this.user.Productos - 1;
        this.usuarioService.updateUsuario(this.idUser, this.user);
    }
};
MisProductosPage.ctorParameters = () => [
    { type: src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_3__["ProductosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
MisProductosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mis-productos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mis-productos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/mis-productos/mis-productos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mis-productos.page.scss */ "./src/app/folder/mis-productos/mis-productos.page.scss")).default]
    })
], MisProductosPage);



/***/ })

}]);
//# sourceMappingURL=folder-mis-productos-mis-productos-module.js.map