(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-productos-todos-productos-todos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/productos-todos/productos-todos.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/productos-todos/productos-todos.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header nombre=\"categorias\"></app-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-segment color=\"tertiary\" value=\"productos\">\r\n\r\n\r\n\r\n    <ion-segment-button value=\"productos\" [routerLink]=\"['/productos-todos']\">\r\n      <ion-icon name=\"gift-outline\" size=\"large\"></ion-icon>\r\n      <ion-label style=\"font-size: 11px;\">Productos</ion-label>\r\n    </ion-segment-button>\r\n\r\n    <ion-segment-button value=\"categorias\" [routerLink]=\"['/categorias']\">\r\n      <ion-icon name=\"list-outline\" size=\"large\"></ion-icon>\r\n      <ion-label style=\"font-size: 11px;\">Categorias</ion-label>\r\n    </ion-segment-button>\r\n\r\n    <ion-segment-button value=\"servicios\" [routerLink]=\"['/servicios']\">\r\n      <ion-icon name=\"rocket-outline\" size=\"large\"></ion-icon>\r\n      <ion-label style=\"font-size: 11px;\">Servicios</ion-label>\r\n    </ion-segment-button>\r\n\r\n  </ion-segment>\r\n\r\n  <ion-searchbar\r\n    color=\"light\" \r\n    placeholder = \"Buscar producto...\"\r\n    animated\r\n    (ionChange)=\"buscar($event)\">\r\n  </ion-searchbar>\r\n  <!--\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" style=\"margin-top: 15px;\">\r\n    <ion-slide style=\"height: 500px;width: 90%;\" *ngFor=\"let producto of productos\">\r\n\r\n          <ion-img *ngIf='producto.Visibilidad' src=\"{{producto.Foto1}}\" style=\"height: 475px;width: 100%;\" (click)='aumentarVisita(producto.id,producto)'></ion-img>\r\n\r\n    </ion-slide>\r\n  </ion-slides> -->\r\n\r\n  <ion-grid>\r\n    <ion-row style=\"height: 500px;width: 100%;\">\r\n      <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\" *ngFor=\"let producto of productos | filtroProductosGeneral: textoBuscar\">\r\n\r\n        <ion-card (click)='aumentarVisita(producto.id,producto)'>\r\n          <ion-card-header id=\"headerCard\">\r\n\r\n            <ion-img *ngIf='producto.Visibilidad' src=\"{{producto.Foto1}}\" style=\"height: 100%; padding: 0;\"></ion-img>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ng-container>\r\n              <h1 style='color:black;font-size: 17.5px;text-align: left;margin:auto;font-weight: bold;margin-top: 5px'>$\r\n                {{producto.Precio}}</h1>\r\n              <h2\r\n                style='color:black;font-size: 15px;text-align: left;margin-top: 5px; margin-bottom: 2.5px;color: gray;'>\r\n                {{producto.Titulo}}</h2>\r\n\r\n\r\n\r\n            </ng-container>\r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"validarSesion()\">\r\n      <ion-icon name=\"add-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab> -->\r\n\r\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"validarVendedor()\">\r\n     <ion-icon name=\"add-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/folder/productos-todos/productos-todos-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/folder/productos-todos/productos-todos-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ProductosTodosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosTodosPageRoutingModule", function() { return ProductosTodosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _productos_todos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productos-todos.page */ "./src/app/folder/productos-todos/productos-todos.page.ts");




const routes = [
    {
        path: '',
        component: _productos_todos_page__WEBPACK_IMPORTED_MODULE_3__["ProductosTodosPage"]
    }
];
let ProductosTodosPageRoutingModule = class ProductosTodosPageRoutingModule {
};
ProductosTodosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductosTodosPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/productos-todos/productos-todos.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/folder/productos-todos/productos-todos.module.ts ***!
  \******************************************************************/
/*! exports provided: ProductosTodosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosTodosPageModule", function() { return ProductosTodosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _productos_todos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productos-todos-routing.module */ "./src/app/folder/productos-todos/productos-todos-routing.module.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _productos_todos_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./productos-todos.page */ "./src/app/folder/productos-todos/productos-todos.page.ts");
/* harmony import */ var src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/folder/components/components.module */ "./src/app/folder/components/components.module.ts");









let ProductosTodosPageModule = class ProductosTodosPageModule {
};
ProductosTodosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _productos_todos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductosTodosPageRoutingModule"]
        ],
        declarations: [_productos_todos_page__WEBPACK_IMPORTED_MODULE_7__["ProductosTodosPage"]]
    })
], ProductosTodosPageModule);



/***/ }),

/***/ "./src/app/folder/productos-todos/productos-todos.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/folder/productos-todos/productos-todos.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-header {\n  background-color: white;\n  /*width: 180px;*/\n  height: 180px;\n  border-bottom-style: solid;\n  border-width: 2px;\n  border-color: #E0E0E0;\n}\n\nion-card {\n  display: flex;\n  flex-direction: column;\n  /*width: 180px;*/\n  margin: 0 !important;\n  height: 260px;\n}\n\n#headerCard {\n  padding: 0;\n}\n\nh2 {\n  padding-top: 2px;\n  font-size: 12px;\n}\n\np {\n  padding-top: 10px;\n  font-size: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3Byb2R1Y3Rvcy10b2Rvcy9wcm9kdWN0b3MtdG9kb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCO0VBQ3ZCLGdCQUFBO0VBQ0EsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3pCOztBQUdBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBQTtFQUNBLG9CQUFvQjtFQUNwQixhQUFhO0FBQWpCOztBQUdFO0VBQ0UsVUFBVTtBQUFkOztBQUVFO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDckI7O0FBQ0U7RUFDSSxpQkFBaUI7RUFDakIsZUFBZTtBQUVyQiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9wcm9kdWN0b3MtdG9kb3MvcHJvZHVjdG9zLXRvZG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgLyp3aWR0aDogMTgwcHg7Ki9cclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjRTBFMEUwO1xyXG5cclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC8qd2lkdGg6IDE4MHB4OyovXHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMjYwcHg7XHJcbiAgfVxyXG5cclxuICAjaGVhZGVyQ2FyZHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIGgye1xyXG4gICAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIHB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/folder/productos-todos/productos-todos.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/folder/productos-todos/productos-todos.page.ts ***!
  \****************************************************************/
/*! exports provided: ProductosTodosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosTodosPage", function() { return ProductosTodosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/productos.service */ "./src/app/services/productos.service.ts");
/* harmony import */ var src_app_models_usuario__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");







let ProductosTodosPage = class ProductosTodosPage {
    constructor(productosService, router, usuarioService, activateRoute) {
        this.productosService = productosService;
        this.router = router;
        this.usuarioService = usuarioService;
        this.activateRoute = activateRoute;
        this.productos = [];
        this.productosTemp = [];
        this.user = new src_app_models_usuario__WEBPACK_IMPORTED_MODULE_4__["Usuarios"]();
        this.textoBuscar = '';
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
    }
    ngOnInit() {
        this.productosService.getProductos().subscribe(res => { this.productos = res; this.shuffle(this.productos); });
        // this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => {this.user =res;});
    }
    recortar() {
        //if(this.textoBuscar == ''){
        this.productosTemp = this.productos.slice(0, 2);
        // }else{
        //   this.productosTemp = this.productos
        // }
        // for(let i = 0; i < this.productos.length; i ++){
        //   //if(this.productos[i].Precio[0] == '$'){
        //    //console.log(this.productos[i].Precio)
        //     //console.log('Mal: ',this.productos[i].Precio.slice(1,))
        //   //   this.productos[i].Precio = this.productos[i].Precio.slice(1,)
        //   //  this.productosService.updateProducto(this.productos[i].id, this.productos[i])
        //    this.productos[i].Precio = this.productos[i].Precio.replace(' ', "")
        //    this.productos[i].Precio = this.productos[i].Precio.replace('encebollado', "")
        //    //this.productos[i].Precio = this.productos[i].Precio.replace('lb', "")
        //    this.productosService.updateProducto(this.productos[i].id, this.productos[i])
        //    //console.log(this.productos[i].Precio)
        //   //}
        // }
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
    aumentarVisita(id, productos) {
        productos.Visitas = productos.Visitas + 1;
        this.productosService.updateProducto(id, productos);
        this.router.navigate(['/producto-detalle', productos.id, productos.Vendedor]);
    }
};
ProductosTodosPage.ctorParameters = () => [
    { type: src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_3__["ProductosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ProductosTodosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-productos-todos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./productos-todos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/productos-todos/productos-todos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./productos-todos.page.scss */ "./src/app/folder/productos-todos/productos-todos.page.scss")).default]
    })
], ProductosTodosPage);



/***/ })

}]);
//# sourceMappingURL=folder-productos-todos-productos-todos-module.js.map