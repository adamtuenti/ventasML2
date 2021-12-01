(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~folder-categoria-crear-producto-categoria-crear-producto-module~folder-categorias-categorias~d29ed959"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/components/header/header.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/components/header/header.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color = 'header'>  \r\n  <ion-toolbar>\r\n    <ion-segment color=\"tertiary\" value=\"{{text}}\" >\r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"megaphone-outline\" size=\"large\"></ion-icon>\r\n        <ion-label style=\"font-size: 11.5px;\">Anuncios</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button value=\"categorias\" [routerLink]=\"['/productos-todos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"grid-outline\" size=\"large\"></ion-icon>\r\n        <ion-label style=\"font-size: 11.5px;\">Productos</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button value=\"locales\" [routerLink]=\"['/locales-todos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"storefront-outline\" size=\"large\"></ion-icon>\r\n        <ion-label style=\"font-size: 11.5px;\">Locales</ion-label>\r\n      </ion-segment-button>\r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle\" size=\"large\"></ion-icon>\r\n        <ion-label style=\"font-size: 11.5px;\">Perfil</ion-label>\r\n        <!-- <ion-avatar style=\"height: 48px;width: 48px;margin: auto;\">\r\n          <img src=\"{{FotoPerfil}}\">\r\n        </ion-avatar> -->\r\n      </ion-segment-button>\r\n\r\n    </ion-segment>\r\n\r\n  </ion-toolbar>\r\n</ion-header>");

/***/ }),

/***/ "./src/app/folder/components/components.module.ts":
/*!********************************************************!*\
  !*** ./src/app/folder/components/components.module.ts ***!
  \********************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_folder_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/folder/components/header/header.component */ "./src/app/folder/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            src_app_folder_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_folder_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/folder/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/folder/components/header/header.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/folder/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/folder/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() {
    }
    ngOnInit() {
        // var foto = localStorage.getItem('FotoPerfil');
        // if(localStorage.getItem('FotoPerfil') != null){
        //   this.FotoPerfil = localStorage.getItem('FotoPerfil');
        // }
        // else{
        //   this.FotoPerfil = 'https://firebasestorage.googleapis.com/v0/b/ventasml2.appspot.com/o/iconos%2FiconMl2.png?alt=media&token=e6ee4d9e-33a0-4ab2-851f-d50930465e47';
        // }
        this.text = this.nombre;
    }
};
HeaderComponent.ctorParameters = () => [];
HeaderComponent.propDecorators = {
    nombre: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['nombre',] }]
};
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/components/header/header.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./header.component.scss */ "./src/app/folder/components/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/pipes/filtro-categoria-local.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/pipes/filtro-categoria-local.pipe.ts ***!
  \******************************************************/
/*! exports provided: FiltroCategoriaLocalPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroCategoriaLocalPipe", function() { return FiltroCategoriaLocalPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FiltroCategoriaLocalPipe = class FiltroCategoriaLocalPipe {
    quitarAcentos(cadena) {
        const acentos = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U' };
        return cadena.split('').map(letra => acentos[letra] || letra).join('').toString();
    }
    transform(categoriasLocales, texto) {
        if (texto.length === 0) {
            return categoriasLocales;
        }
        texto = texto.toLocaleLowerCase();
        texto = this.quitarAcentos(texto);
        return categoriasLocales.filter(categoriaLocal => {
            var local = categoriaLocal.Nombre.toLocaleLowerCase();
            local = this.quitarAcentos(local);
            return local.includes(texto);
        });
    }
};
FiltroCategoriaLocalPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroCategoriaLocal'
    })
], FiltroCategoriaLocalPipe);



/***/ }),

/***/ "./src/app/pipes/filtro-categoria.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/pipes/filtro-categoria.pipe.ts ***!
  \************************************************/
/*! exports provided: FiltroCategoriaPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroCategoriaPipe", function() { return FiltroCategoriaPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FiltroCategoriaPipe = class FiltroCategoriaPipe {
    transform(categorias, texto) {
        if (texto.length === 0) {
            return categorias;
        }
        texto = texto.toLocaleLowerCase();
        return categorias.filter(categoria => {
            return categoria.Nombre.toLocaleLowerCase().includes(texto);
        });
    }
};
FiltroCategoriaPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroCategoria'
    })
], FiltroCategoriaPipe);



/***/ }),

/***/ "./src/app/pipes/filtro-local.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/filtro-local.pipe.ts ***!
  \********************************************/
/*! exports provided: FiltroLocalPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroLocalPipe", function() { return FiltroLocalPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FiltroLocalPipe = class FiltroLocalPipe {
    transform(locales, texto) {
        if (texto.length === 0) {
            return locales;
        }
        texto = texto.toLocaleLowerCase();
        return locales.filter(locales => {
            return locales.Nombre.toLocaleLowerCase().includes(texto) ||
                locales.Descripcion.toLocaleLowerCase().includes(texto);
        });
    }
};
FiltroLocalPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroLocal'
    })
], FiltroLocalPipe);



/***/ }),

/***/ "./src/app/pipes/filtro-locales-productos.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/pipes/filtro-locales-productos.pipe.ts ***!
  \********************************************************/
/*! exports provided: FiltroLocalProductosPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroLocalProductosPipe", function() { return FiltroLocalProductosPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FiltroLocalProductosPipe = class FiltroLocalProductosPipe {
    transform(locales, texto) {
        if (texto.length === 0) {
            return locales;
        }
        texto = texto.toLocaleLowerCase();
        return locales.filter(locales => {
            return locales.Nombre.toLocaleLowerCase().includes(texto) ||
                locales.Descripcion.toLocaleLowerCase().includes(texto);
        });
    }
};
FiltroLocalProductosPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroLocalProductos'
    })
], FiltroLocalProductosPipe);



/***/ }),

/***/ "./src/app/pipes/filtro-producto-local.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/pipes/filtro-producto-local.pipe.ts ***!
  \*****************************************************/
/*! exports provided: FiltroProductoLocalPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroProductoLocalPipe", function() { return FiltroProductoLocalPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FiltroProductoLocalPipe = class FiltroProductoLocalPipe {
    transform(productos, texto) {
        if (texto.length === 0) {
            return productos;
        }
        texto = texto.toLocaleLowerCase();
        return productos.filter(producto => {
            return producto.Titulo.toLocaleLowerCase().includes(texto);
        });
    }
};
FiltroProductoLocalPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroProductoLocal'
    })
], FiltroProductoLocalPipe);



/***/ }),

/***/ "./src/app/pipes/filtro-productos-general.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/pipes/filtro-productos-general.pipe.ts ***!
  \********************************************************/
/*! exports provided: FiltroProductoGeneralPie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroProductoGeneralPie", function() { return FiltroProductoGeneralPie; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FiltroProductoGeneralPie = class FiltroProductoGeneralPie {
    transform(productos, texto) {
        if (texto.length === 0) {
            return productos;
        }
        texto = texto.toLocaleLowerCase();
        return productos.filter(producto => {
            return producto.Descripcion.toLocaleLowerCase().includes(texto) ||
                producto.Titulo.toLocaleLowerCase().includes(texto);
        });
    }
};
FiltroProductoGeneralPie = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroProductosGeneral'
    })
], FiltroProductoGeneralPie);



/***/ }),

/***/ "./src/app/pipes/filtro-productos.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/pipes/filtro-productos.pipe.ts ***!
  \************************************************/
/*! exports provided: FiltroProductosPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroProductosPipe", function() { return FiltroProductosPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FiltroProductosPipe = class FiltroProductosPipe {
    transform(productos, texto) {
        if (texto.length === 0) {
            return productos;
        }
        texto = texto.toLocaleLowerCase();
        return productos.filter(producto => {
            return producto.Descripcion.toLocaleLowerCase().includes(texto) ||
                producto.Titulo.toLocaleLowerCase().includes(texto);
        });
    }
};
FiltroProductosPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroProductos'
    })
], FiltroProductosPipe);



/***/ }),

/***/ "./src/app/pipes/filtro-servicios.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/pipes/filtro-servicios.pipe.ts ***!
  \************************************************/
/*! exports provided: FiltroServiciosPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroServiciosPipe", function() { return FiltroServiciosPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FiltroServiciosPipe = class FiltroServiciosPipe {
    transform(servicios, texto) {
        if (texto.length === 0) {
            return servicios;
        }
        texto = texto.toLocaleLowerCase();
        return servicios.filter(servicio => {
            return servicio.Descripcion.toLocaleLowerCase().includes(texto) ||
                servicio.Titulo.toLocaleLowerCase().includes(texto);
        });
    }
};
FiltroServiciosPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroServicios'
    })
], FiltroServiciosPipe);



/***/ }),

/***/ "./src/app/pipes/filtro-usuario.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/filtro-usuario.pipe.ts ***!
  \**********************************************/
/*! exports provided: FiltroUsuarioPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroUsuarioPipe", function() { return FiltroUsuarioPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FiltroUsuarioPipe = class FiltroUsuarioPipe {
    transform(usuarios, texto) {
        if (texto.length === 0) {
            return usuarios;
        }
        texto = texto.toLocaleLowerCase();
        return usuarios.filter(usuarios => {
            let usuarioCompleto = usuarios.Nombre + " " + usuarios.Apellido;
            return usuarioCompleto.toLocaleLowerCase().includes(texto);
        });
    }
};
FiltroUsuarioPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroUsuario'
    })
], FiltroUsuarioPipe);



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _filtro_usuario_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filtro-usuario.pipe */ "./src/app/pipes/filtro-usuario.pipe.ts");
/* harmony import */ var _filtro_categoria_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filtro-categoria.pipe */ "./src/app/pipes/filtro-categoria.pipe.ts");
/* harmony import */ var _filtro_productos_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filtro-productos.pipe */ "./src/app/pipes/filtro-productos.pipe.ts");
/* harmony import */ var _filtro_categoria_local_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filtro-categoria-local.pipe */ "./src/app/pipes/filtro-categoria-local.pipe.ts");
/* harmony import */ var _filtro_producto_local_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filtro-producto-local.pipe */ "./src/app/pipes/filtro-producto-local.pipe.ts");
/* harmony import */ var _filtro_local_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filtro-local.pipe */ "./src/app/pipes/filtro-local.pipe.ts");
/* harmony import */ var _filtro_servicios_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filtro-servicios.pipe */ "./src/app/pipes/filtro-servicios.pipe.ts");
/* harmony import */ var _filtro_productos_general_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filtro-productos-general.pipe */ "./src/app/pipes/filtro-productos-general.pipe.ts");
/* harmony import */ var _filtro_locales_productos_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filtro-locales-productos.pipe */ "./src/app/pipes/filtro-locales-productos.pipe.ts");












let PipesModule = class PipesModule {
};
PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_filtro_usuario_pipe__WEBPACK_IMPORTED_MODULE_3__["FiltroUsuarioPipe"], _filtro_categoria_pipe__WEBPACK_IMPORTED_MODULE_4__["FiltroCategoriaPipe"], _filtro_locales_productos_pipe__WEBPACK_IMPORTED_MODULE_11__["FiltroLocalProductosPipe"], _filtro_productos_general_pipe__WEBPACK_IMPORTED_MODULE_10__["FiltroProductoGeneralPie"], _filtro_productos_pipe__WEBPACK_IMPORTED_MODULE_5__["FiltroProductosPipe"], _filtro_categoria_local_pipe__WEBPACK_IMPORTED_MODULE_6__["FiltroCategoriaLocalPipe"], _filtro_producto_local_pipe__WEBPACK_IMPORTED_MODULE_7__["FiltroProductoLocalPipe"], _filtro_local_pipe__WEBPACK_IMPORTED_MODULE_8__["FiltroLocalPipe"], _filtro_servicios_pipe__WEBPACK_IMPORTED_MODULE_9__["FiltroServiciosPipe"]],
        exports: [_filtro_usuario_pipe__WEBPACK_IMPORTED_MODULE_3__["FiltroUsuarioPipe"], _filtro_categoria_pipe__WEBPACK_IMPORTED_MODULE_4__["FiltroCategoriaPipe"], _filtro_locales_productos_pipe__WEBPACK_IMPORTED_MODULE_11__["FiltroLocalProductosPipe"], _filtro_productos_general_pipe__WEBPACK_IMPORTED_MODULE_10__["FiltroProductoGeneralPie"], _filtro_productos_pipe__WEBPACK_IMPORTED_MODULE_5__["FiltroProductosPipe"], _filtro_categoria_local_pipe__WEBPACK_IMPORTED_MODULE_6__["FiltroCategoriaLocalPipe"], _filtro_producto_local_pipe__WEBPACK_IMPORTED_MODULE_7__["FiltroProductoLocalPipe"], _filtro_local_pipe__WEBPACK_IMPORTED_MODULE_8__["FiltroLocalPipe"], _filtro_servicios_pipe__WEBPACK_IMPORTED_MODULE_9__["FiltroServiciosPipe"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], PipesModule);



/***/ })

}]);
//# sourceMappingURL=default~folder-categoria-crear-producto-categoria-crear-producto-module~folder-categorias-categorias~d29ed959.js.map