(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-productos-productos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/productos/productos.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/productos/productos.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header nombre=\"categorias\"></app-header>\r\n\r\n<ion-content>\r\n\r\n\r\n\r\n  <ion-searchbar color=\"light\" placeholder=\"Buscar producto...\" animated (ionChange)=\"buscar($event)\">\r\n  </ion-searchbar>\r\n\r\n  <ng-container *ngIf=\"!condicion\">\r\n    <ng-container *ngFor=\"let producto of productos | filtroProductos: textoBuscar\">\r\n\r\n      <ion-item *ngIf=\"producto.Categoria == categoria && producto.Visibilidad\"\r\n        (click)='aumentarVisita(producto.id,producto)'>\r\n\r\n        <ion-avatar slot=\"start\" style=\"height: 50px;width: 50px;margin-right: 7.5px;\">\r\n          <img src=\"{{producto.Foto1}}\">\r\n        </ion-avatar>\r\n\r\n        <ion-label style=\"font-size: 17.2px; margin-left: 8.5px;\">{{producto.Titulo}}</ion-label>\r\n        <!-- <ion-button fill=\"outline\" slot='end' color=\"success\"><ion-icon name=\"cash-outline\" color=\"success\"></ion-icon><label style=\"font-size: 14;margin-left: 7.5px;\" >${{producto.Precio}}</label></ion-button> -->\r\n        <!-- <ion-button fill=\"outline\" slot='end'><ion-icon name=\"eye-outline\"></ion-icon><label style=\"font-size: 12;margin-left: 7.5px;\" >{{producto.Visitas}}</label></ion-button> -->\r\n\r\n      </ion-item>\r\n    </ng-container>\r\n\r\n    <!--<ion-grid>\r\n      <ion-row style=\"height: 500px;width: 100%;\">\r\n        <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\" *ngFor=\"let producto of productos | filtroProductos: textoBuscar\">\r\n\r\n          <ion-item *ngIf=\"producto.Categoria == categoria && producto.Visibilidad\">\r\n            <ion-card (click)='aumentarVisita(producto.id,producto)'>\r\n              <ion-card-header id=\"headerCard\">\r\n\r\n                <ion-img src=\"{{producto.Foto1}}\" style=\"height: 100%; padding: 0;\"></ion-img>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n                <p>{{producto.Precio}}</p>\r\n                <h2>{{producto.Titulo}}</h2>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>-->\r\n\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"condicion\">\r\n\r\n    <div style=\"margin-top: 50px;\" align='center'>\r\n      <ion-text color=\"medium\">\r\n\r\n        <img\r\n          src=\"https://firebasestorage.googleapis.com/v0/b/taskyapp01.appspot.com/o/iconos%2Fgrupos.png?alt=media&token=8aa84d63-18b5-424d-9b6a-dfd1075eeb77\"\r\n          style=\"width: 250px; height:250px;margin:auto;\" alet=\"foto\">\r\n\r\n        <p style=\"font-size: 21px;margin:auto;margin-top:7.5px\">No hay productos registrados.</p>\r\n      </ion-text>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"validarSesion()\">\r\n      <ion-icon name=\"add-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/folder/productos/productos-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/folder/productos/productos-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ProductosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosPageRoutingModule", function() { return ProductosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _productos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productos.page */ "./src/app/folder/productos/productos.page.ts");




const routes = [
    {
        path: '',
        component: _productos_page__WEBPACK_IMPORTED_MODULE_3__["ProductosPage"]
    }
];
let ProductosPageRoutingModule = class ProductosPageRoutingModule {
};
ProductosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductosPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/productos/productos.module.ts":
/*!******************************************************!*\
  !*** ./src/app/folder/productos/productos.module.ts ***!
  \******************************************************/
/*! exports provided: ProductosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosPageModule", function() { return ProductosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _productos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productos-routing.module */ "./src/app/folder/productos/productos-routing.module.ts");
/* harmony import */ var _productos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productos.page */ "./src/app/folder/productos/productos.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/folder/components/components.module */ "./src/app/folder/components/components.module.ts");









let ProductosPageModule = class ProductosPageModule {
};
ProductosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _productos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductosPageRoutingModule"]
        ],
        declarations: [_productos_page__WEBPACK_IMPORTED_MODULE_6__["ProductosPage"]]
    })
], ProductosPageModule);



/***/ }),

/***/ "./src/app/folder/productos/productos.page.scss":
/*!******************************************************!*\
  !*** ./src/app/folder/productos/productos.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n\nion-card-header {\n  background-color: #E0E0E0;\n  /*width: 180px;*/\n  height: 180px;\n}\n\nion-card {\n  display: flex;\n  flex-direction: column;\n  /*width: 180px;*/\n  margin: 0 !important;\n  height: 260px;\n}\n\n#headerCard {\n  padding: 0;\n}\n\nh2 {\n  padding-top: 2px;\n  font-size: 12px;\n}\n\np {\n  padding-top: 10px;\n  font-size: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3Byb2R1Y3Rvcy9wcm9kdWN0b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQXVCO0FBQzNCOztBQUVBO0VBQ0kseUJBQXlCO0VBQ3pCLGdCQUFBO0VBQ0EsYUFBYTtBQUNqQjs7QUFFQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQUE7RUFDQSxvQkFBb0I7RUFDcEIsYUFBYTtBQUNqQjs7QUFFRTtFQUNFLFVBQVU7QUFDZDs7QUFDRTtFQUNJLGdCQUFnQjtFQUNoQixlQUFlO0FBRXJCOztBQUFFO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWU7QUFHckIiLCJmaWxlIjoic3JjL2FwcC9mb2xkZXIvcHJvZHVjdG9zL3Byb2R1Y3Rvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxufVxyXG5cclxuaW9uLWNhcmQtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTBFMDtcclxuICAgIC8qd2lkdGg6IDE4MHB4OyovXHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLyp3aWR0aDogMTgwcHg7Ki9cclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyNjBweDtcclxuICB9XHJcblxyXG4gICNoZWFkZXJDYXJke1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgaDJ7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgcHtcclxuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/folder/productos/productos.page.ts":
/*!****************************************************!*\
  !*** ./src/app/folder/productos/productos.page.ts ***!
  \****************************************************/
/*! exports provided: ProductosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosPage", function() { return ProductosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/productos.service */ "./src/app/services/productos.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_models_usuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_models_variables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/variables */ "./src/app/models/variables.ts");
/* harmony import */ var src_app_services_variables_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/variables.service */ "./src/app/services/variables.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);




// import { Productos } from 'src/app/models/productos';







let ProductosPage = class ProductosPage {
    constructor(productosService, router, usuarioService, variablesService, alertCtrt, activateRoute) {
        this.productosService = productosService;
        this.router = router;
        this.usuarioService = usuarioService;
        this.variablesService = variablesService;
        this.alertCtrt = alertCtrt;
        this.activateRoute = activateRoute;
        this.productos = [];
        this.textoBuscar = '';
        this.user = new src_app_models_usuario__WEBPACK_IMPORTED_MODULE_5__["Usuarios"]();
        this.condicion = false;
        this.variables = new src_app_models_variables__WEBPACK_IMPORTED_MODULE_7__["Variables"]();
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            this.categoria = paramMap.get('categoria');
            this.idUser = localStorage.getItem('userId');
            if (localStorage.getItem('userId') != null) {
                this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => { this.user = res; });
            }
            this.variablesService.getVariable('wCIVneApMUwcOvDwIneJ').subscribe(res => { this.variables = res; });
            //this.productosService.getProductos().subscribe(res=> {this.productos = res;this.condicion = this.getDatos();this.shuffle(this.productos)});
            firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"]().collection('Productos').where('Categoria', '==', paramMap.get('categoria')).where('Visibilidad', '==', true).onSnapshot(snap => {
                this.productos = [];
                snap.forEach(element => {
                    this.productos.push(element.data());
                });
                if (this.productos.length == 0) {
                    this.condicion = true;
                }
                this.shuffle(this.productos);
                //this.nativeAudio.play('audioWo')
            });
        });
    }
    buscar(event) {
        const texto = event.target.value;
        this.textoBuscar = texto;
    }
    getDatos() {
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].Categoria == this.categoria) {
                return false;
            }
        }
        return true;
    }
    aumentarVisita(id, productos) {
        productos.Visitas = productos.Visitas + 1;
        this.productosService.updateProducto(id, productos);
        this.router.navigate(['/producto-detalle', productos.id, productos.Vendedor]);
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
    validarSesion() {
        if (this.idUser != null) {
            this.router.navigate(['/crear-producto', this.categoria]);
        }
        else {
            this.iniciarSesion();
        }
    }
    // validarVendedor(){
    //   if(this.user.Vendedor){
    //     if(this.user.Productos >= this.variables.NumeroProductos){
    //       if(this.user.Premium){
    //         this.router.navigate(['/crear-producto',this.categoria]);
    //       }else{
    //         this.serPremium();
    //       }
    //     }else{
    //       this.router.navigate(['/crear-producto',this.categoria]);
    //     }
    //   }else{
    //     this.serVendedor()
    //   }
    // }
    iniciarSesion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: 'No ha iniciado sesión',
                message: 'Para agregar un producto primero debe iniciar sesión.',
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
    serVendedor() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: 'Su cuenta no es de vendedor',
                message: 'Para poder subir un producto, diríjase a su perfil y solicite ser vendedor.',
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
ProductosPage.ctorParameters = () => [
    { type: src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_3__["ProductosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"] },
    { type: src_app_services_variables_service__WEBPACK_IMPORTED_MODULE_8__["VariablesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ProductosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-productos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./productos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/productos/productos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./productos.page.scss */ "./src/app/folder/productos/productos.page.scss")).default]
    })
], ProductosPage);



/***/ })

}]);
//# sourceMappingURL=folder-productos-productos-module.js.map