(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-productos-locales-productos-locales-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/productos-locales/productos-locales.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/productos-locales/productos-locales.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header nombre=\"locales\"></app-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-segment color=\"tertiary\" value=\"cartilla\">\r\n\r\n    <ion-segment-button value=\"anuncios\" [routerLink]=\"['/detalle-local',idLocal,idPropietario]\" routerDirection=\"root\">\r\n      <ion-icon name=\"information-circle-outline\" size=\"large\"></ion-icon>\r\n      <ion-label style=\"font-size: 11px;\">Datos</ion-label>\r\n    </ion-segment-button>\r\n\r\n    <ion-segment-button value=\"cartilla\" [routerLink]=\"['/productos-locales',idLocal,idPropietario]\"\r\n      routerDirection=\"root\">\r\n      <ion-icon name=\"book-outline\" size=\"large\"></ion-icon>\r\n      <ion-label style=\"font-size: 11px;\">Cartilla</ion-label>\r\n    </ion-segment-button>\r\n\r\n    <ion-segment-button value=\"grupos\" [routerLink]=\"['/comentarios-local',idLocal,idPropietario]\"\r\n      routerDirection=\"root\">\r\n      <ion-icon name=\"chatbubbles-outline\" size=\"large\"></ion-icon>\r\n      <ion-label style=\"font-size: 11px;\">Comentarios</ion-label>\r\n    </ion-segment-button>\r\n\r\n  </ion-segment>\r\n\r\n  <ion-searchbar color=\"light\" placeholder=\"Buscar producto...\" animated (ionChange)=\"buscar($event)\">\r\n  </ion-searchbar>\r\n\r\n  <ng-container *ngIf=\"!condicion\">\r\n    <ion-list>\r\n      <ng-container *ngFor=\"let producto of productos | filtroProductoLocal: textoBuscar\">\r\n\r\n        <ion-card *ngIf=\"producto.Local == idLocal\">\r\n\r\n          <ion-item>\r\n\r\n            <ion-button style=\"height: 50px;width: 62px;margin-right: 5px;margin-top: 7.5px;\" expand=\"full\"\r\n              href=\"{{producto.Foto}}\" color=\"light\" fill=\"clear\">\r\n              <ion-avatar style=\"height: 100%;width: 100%;\">\r\n                <img src=\"{{producto.Foto}}\">\r\n              </ion-avatar>\r\n            </ion-button>\r\n\r\n\r\n            <ion-label style=\"font-size: 15.5px;\">{{producto.Titulo}}</ion-label>\r\n\r\n          </ion-item>\r\n\r\n\r\n\r\n          <ion-item>\r\n\r\n\r\n\r\n            <ion-icon *ngIf=\"idPropietario == idUser\" name=\"create-outline\" slot='end'\r\n              [routerLink]=\"['/producto-local-editar',producto.id,idLocal,idPropietario]\"></ion-icon>\r\n            <ion-icon *ngIf=\"idPropietario == idUser\" name=\"trash-outline\" slot='end' color='danger'\r\n              (click)=\"alert(producto.id)\"></ion-icon>\r\n\r\n            <ion-button fill=\"outline\" slot='end' color=\"success\">\r\n              <ion-icon name=\"cash-outline\" color=\"success\"></ion-icon><label\r\n                style=\"font-size: 14;margin-left: 7.5px;\">${{producto.Precio}}</label>\r\n            </ion-button>\r\n\r\n          </ion-item>\r\n        </ion-card>\r\n\r\n      </ng-container>\r\n\r\n    </ion-list>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"condicion\">\r\n\r\n    <div style=\"margin-top: 50px;\" align='center'>\r\n      <ion-text color=\"medium\">\r\n\r\n        <img\r\n          src=\"https://firebasestorage.googleapis.com/v0/b/ventasml2.appspot.com/o/iconos%2Ffile_search.png?alt=media&token=79e21b5c-d8e4-4124-abd8-be52f0bce666\"\r\n          style=\"width: 55%; height:58%;margin:auto;\" alet=\"foto\">\r\n\r\n        <p style=\"font-size: 21px;margin:auto;margin-top:7.5px\">No hay productos registrados.</p>\r\n      </ion-text>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ion-fab *ngIf='idPropietario == idUser' vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"validarVendedor()\">\r\n      <ion-icon name=\"add-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/folder/productos-locales/productos-locales-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/folder/productos-locales/productos-locales-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ProductosLocalesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosLocalesPageRoutingModule", function() { return ProductosLocalesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _productos_locales_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productos-locales.page */ "./src/app/folder/productos-locales/productos-locales.page.ts");




const routes = [
    {
        path: '',
        component: _productos_locales_page__WEBPACK_IMPORTED_MODULE_3__["ProductosLocalesPage"]
    }
];
let ProductosLocalesPageRoutingModule = class ProductosLocalesPageRoutingModule {
};
ProductosLocalesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductosLocalesPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/productos-locales/productos-locales.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/folder/productos-locales/productos-locales.module.ts ***!
  \**********************************************************************/
/*! exports provided: ProductosLocalesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosLocalesPageModule", function() { return ProductosLocalesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _productos_locales_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productos-locales-routing.module */ "./src/app/folder/productos-locales/productos-locales-routing.module.ts");
/* harmony import */ var _productos_locales_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productos-locales.page */ "./src/app/folder/productos-locales/productos-locales.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/folder/components/components.module */ "./src/app/folder/components/components.module.ts");









let ProductosLocalesPageModule = class ProductosLocalesPageModule {
};
ProductosLocalesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _productos_locales_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductosLocalesPageRoutingModule"]
        ],
        declarations: [_productos_locales_page__WEBPACK_IMPORTED_MODULE_6__["ProductosLocalesPage"]]
    })
], ProductosLocalesPageModule);



/***/ }),

/***/ "./src/app/folder/productos-locales/productos-locales.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/folder/productos-locales/productos-locales.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3Byb2R1Y3Rvcy1sb2NhbGVzL3Byb2R1Y3Rvcy1sb2NhbGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9wcm9kdWN0b3MtbG9jYWxlcy9wcm9kdWN0b3MtbG9jYWxlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/folder/productos-locales/productos-locales.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/folder/productos-locales/productos-locales.page.ts ***!
  \********************************************************************/
/*! exports provided: ProductosLocalesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosLocalesPage", function() { return ProductosLocalesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_productos_locales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/productos-locales.service */ "./src/app/services/productos-locales.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_models_usuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_models_variables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/variables */ "./src/app/models/variables.ts");
/* harmony import */ var src_app_services_variables_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/variables.service */ "./src/app/services/variables.service.ts");










let ProductosLocalesPage = class ProductosLocalesPage {
    constructor(productosService, router, variablesService, activateRoute, usuarioService, alertCtrt) {
        this.productosService = productosService;
        this.router = router;
        this.variablesService = variablesService;
        this.activateRoute = activateRoute;
        this.usuarioService = usuarioService;
        this.alertCtrt = alertCtrt;
        this.productos = [];
        this.textoBuscar = '';
        this.user = new src_app_models_usuario__WEBPACK_IMPORTED_MODULE_5__["Usuarios"]();
        this.variables = new src_app_models_variables__WEBPACK_IMPORTED_MODULE_7__["Variables"]();
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            this.idLocal = paramMap.get('idLocal');
            this.idPropietario = paramMap.get('idPropietario');
            this.variablesService.getVariable('wCIVneApMUwcOvDwIneJ').subscribe(res => { this.variables = res; });
            if (localStorage.getItem('userId') != null) {
                this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => { this.user = res; });
            }
            this.productosService.getProductos().subscribe(res => { this.productos = res; this.condicion = this.getDatos(); });
            this.idUser = localStorage.getItem('userId');
        });
    }
    buscar(event) {
        const texto = event.target.value;
        this.textoBuscar = texto;
    }
    getDatos() {
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].Local == this.idLocal) {
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
    }
    validarVendedor() {
        if (this.user.Productos > this.variables.NumeroProductos) {
            if (this.user.Premium) {
                this.router.navigate(['/crear-producto-local', this.idLocal, this.idPropietario]);
            }
            else {
                this.serPremium();
            }
        }
        else {
            this.router.navigate(['/crear-producto-local', this.idLocal, this.idPropietario]);
        }
    }
    serPremium() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: 'Ya excedió el número de productos gratis (' + this.variables.NumeroProductos.toString() + ')',
                message: 'Para poder subir más productos, diríjase a su perfil y solicite ser premium.',
                buttons: [
                    {
                        text: 'Ok',
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
};
ProductosLocalesPage.ctorParameters = () => [
    { type: src_app_services_productos_locales_service__WEBPACK_IMPORTED_MODULE_3__["ProductosLocalesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_variables_service__WEBPACK_IMPORTED_MODULE_8__["VariablesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ProductosLocalesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-productos-locales',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./productos-locales.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/productos-locales/productos-locales.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./productos-locales.page.scss */ "./src/app/folder/productos-locales/productos-locales.page.scss")).default]
    })
], ProductosLocalesPage);



/***/ })

}]);
//# sourceMappingURL=folder-productos-locales-productos-locales-module.js.map