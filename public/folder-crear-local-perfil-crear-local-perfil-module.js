(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-crear-local-perfil-crear-local-perfil-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/crear-local-perfil/crear-local-perfil.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/crear-local-perfil/crear-local-perfil.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header nombre=\"perfil\"></app-header>\n\n<ion-content>\n\n  <form #form=\"ngForm\" (ngSubmit)=\"crearLocal(form)\">\n        <ion-list>  \n          \n        <ion-card style=\"margin-top:15px\">\n          <ion-item>\n            <ion-label>Nombre</ion-label>\n          </ion-item>\n          <ion-item>\n          \n            <ion-input required placeholder=\"Ingrese el nombre del local\" name=\"nombre\" type='text' ngModel required></ion-input>\n          </ion-item>\n\n        </ion-card>\n\n        <ion-card style=\"margin-top:15px\">\n            <ion-item>\n              <ion-icon name=\"image-outline\"></ion-icon> <ion-text color=\"\" style=\"margin-left: 7.5px;\" *ngIf='image==null'>Subir foto</ion-text> <ion-text color=\"\" style=\"margin-left: 7.5px;\" *ngIf='image!=null'>Cambiar foto</ion-text>\n          \n              <ion-input type='file' accept=\"image/*\" id=\"myFileInput\" name=\"foto1\" (change)=\"readURL($event);\" class=\"fileInput\" ngModel required></ion-input>\n    \n            </ion-item>\n\n        </ion-card>\n        \n        <ion-card style=\"margin-top:15px\" *ngIf='file!=null'>\n          <ion-item>\n\n            <ng-container>\n              <ion-img id=\"blah\" [src]=\"image\" alt=\"your image\" style=\"margin-top:5px;margin-bottom: 5px;height: 250px;width: 250px;margin:auto;\"></ion-img>\n\n            </ng-container>\n\n          </ion-item>\n    \n        </ion-card>\n\n        \n        <ion-card style=\"margin-top:15px\">\n          <ion-item>\n            <ion-label>Descripción</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-textarea required placeholder=\"Ingrese una descripción del local\" name=\"descripcion\" type='text' ngModel required></ion-textarea>\n          </ion-item>\n        </ion-card>\n\n        <ion-card style=\"margin-top:15px\">\n          <ion-item>\n            <ion-icon color=\"black\" name=\"bookmarks-outline\"></ion-icon>\n            <ion-label style = \"margin-left: 6.5px;\">Categoría: </ion-label>\n            <ion-select required  name='categoria' ngModel>\n            \n                    <ion-select-option *ngFor=\"let cat of categorias\" [value]=\"cat.id\">{{cat.Nombre}}</ion-select-option>\n                    \n            </ion-select>\n    \n          </ion-item>\n        </ion-card>\n\n        <ion-card style=\"margin-top:15px\">\n          <ion-item>\n            <ion-icon color=\"black\" name=\"storefront-outline\"></ion-icon>\n            <ion-label style = \"margin-left: 6.5px;\">Ciudadela: </ion-label>\n            <ion-select required  name='ciudadela' ngModel>\n             \n                    <ion-select-option value=\"Paraíso del Río 1\">Paraíso del Río 1</ion-select-option>\n                    <ion-select-option value=\"Paraíso del Río 2\">Paraíso del Río 2</ion-select-option> \n                    <ion-select-option value=\"Toledo\">Toledo</ion-select-option>\n                    <ion-select-option value=\"Marbella\">Marbella</ion-select-option> \n                    <ion-select-option value=\"Victoria del Río\">Victoria del Río</ion-select-option>\n                    <ion-select-option value=\"Salamanca\">Salamanca</ion-select-option>\n                    <ion-select-option value=\"Victoria Club\">Victoria Club</ion-select-option>\n                    <ion-select-option value=\"Plaza Victoria\">Plaza Victoria</ion-select-option>\n                    <ion-select-option value=\"Valle Victoria\">Valle Victoria</ion-select-option>\n                    <ion-select-option value=\"Alameda del Río\">Alameda del Río</ion-select-option>\n  \n            \n            </ion-select>\n    \n          </ion-item>\n        </ion-card>\n\n        <ion-card style=\"margin-top:15px\">\n          <ion-item>\n            <ion-label>Manzana </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-textarea required placeholder=\"Ingrese la manzana\" name=\"manzana\" type='text' ngModel required></ion-textarea>\n          </ion-item>\n        </ion-card>\n\n        <ion-card style=\"margin-top:15px\">\n          <ion-item>\n            <ion-label>Villa</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-textarea required placeholder=\"Ingrese la Villa\" name=\"villa\" type='text' ngModel required></ion-textarea>\n          </ion-item>\n        </ion-card>\n\n        <ion-card style=\"margin-top:15px\">\n          <ion-item>\n            <ion-label>Teléfono del local</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-textarea required placeholder=\"Ingrese el número de teléfono\" name=\"telefono\" type='number' ngModel required></ion-textarea>\n          </ion-item>\n        </ion-card>\n\n        <ion-card style=\"margin-top:15px\">\n          <ion-item>\n            \n            <ion-label>Red social</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-textarea placeholder=\"Ingrese el link de su página de Facebook (opcional)\" name=\"redSocial\" type='text' ngModel></ion-textarea>\n          </ion-item>\n        </ion-card>\n\n        <ion-card style=\"margin-top:15px\">\n          <ion-item>\n            <ion-icon color=\"black\" name=\"bicycle-outline\"></ion-icon>\n            <ion-label style = \"margin-left: 6.5px;\">Entregas a domicilio: </ion-label>\n            <ion-select required  name='domicilio' ngModel>\n             \n                    <ion-select-option value=\"Si\">Sí</ion-select-option>\n                    <ion-select-option value=\"No\">No</ion-select-option> \n\n            </ion-select>\n    \n          </ion-item>\n        </ion-card>\n\n        <ion-card style=\"margin-top:15px\">\n          <ion-item>\n            <ion-label>Horario de atención</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-textarea required placeholder=\"Ingrese el Horario de atención\" name=\"horarioAtencion\" type='text' ngModel required></ion-textarea>\n          </ion-item>\n        </ion-card>\n\n        <ion-card style=\"margin-top:15px\">\n          <ion-item>\n            <ion-label>Referencia</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-textarea placeholder=\"Referencia de la ubicación del local (opcional)\" name=\"referencia\" type='text' ngModel></ion-textarea>\n          </ion-item>\n        </ion-card>\n\n       \n               \n        </ion-list>\n  \n        <ion-button  style=\"width: 150px;margin:auto;margin-bottom: 8.5px;\" type=\"submit\"  [disabled]=\"form.invalid\" expand=\"block\">\n          Guardar\n        </ion-button>\n      </form>\n</ion-content>\n<style>\n  #myFileInput{\n    position: absolute;\n    opacity: 0;\n  }\n</style>\n");

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

/***/ "./src/app/folder/crear-local-perfil/crear-local-perfil-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/folder/crear-local-perfil/crear-local-perfil-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: CrearLocalPerfilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearLocalPerfilPageRoutingModule", function() { return CrearLocalPerfilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _crear_local_perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crear-local-perfil.page */ "./src/app/folder/crear-local-perfil/crear-local-perfil.page.ts");




const routes = [
    {
        path: '',
        component: _crear_local_perfil_page__WEBPACK_IMPORTED_MODULE_3__["CrearLocalPerfilPage"]
    }
];
let CrearLocalPerfilPageRoutingModule = class CrearLocalPerfilPageRoutingModule {
};
CrearLocalPerfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CrearLocalPerfilPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/crear-local-perfil/crear-local-perfil.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/folder/crear-local-perfil/crear-local-perfil.module.ts ***!
  \************************************************************************/
/*! exports provided: CrearLocalPerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearLocalPerfilPageModule", function() { return CrearLocalPerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _crear_local_perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crear-local-perfil-routing.module */ "./src/app/folder/crear-local-perfil/crear-local-perfil-routing.module.ts");
/* harmony import */ var _crear_local_perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crear-local-perfil.page */ "./src/app/folder/crear-local-perfil/crear-local-perfil.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/folder/components/components.module.ts");








let CrearLocalPerfilPageModule = class CrearLocalPerfilPageModule {
};
CrearLocalPerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _crear_local_perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrearLocalPerfilPageRoutingModule"]
        ],
        declarations: [_crear_local_perfil_page__WEBPACK_IMPORTED_MODULE_6__["CrearLocalPerfilPage"]]
    })
], CrearLocalPerfilPageModule);



/***/ }),

/***/ "./src/app/folder/crear-local-perfil/crear-local-perfil.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/folder/crear-local-perfil/crear-local-perfil.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9jcmVhci1sb2NhbC1wZXJmaWwvY3JlYXItbG9jYWwtcGVyZmlsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/folder/crear-local-perfil/crear-local-perfil.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/folder/crear-local-perfil/crear-local-perfil.page.ts ***!
  \**********************************************************************/
/*! exports provided: CrearLocalPerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearLocalPerfilPage", function() { return CrearLocalPerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_models_locales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/locales */ "./src/app/models/locales.ts");
/* harmony import */ var src_app_services_locales_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/locales.service */ "./src/app/services/locales.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_services_categorias_locales_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/categorias-locales.service */ "./src/app/services/categorias-locales.service.ts");









let CrearLocalPerfilPage = class CrearLocalPerfilPage {
    constructor(router, angularFireStorage, alertCtrt, loadingController, localesService, categoriasService, activateRoute) {
        this.router = router;
        this.angularFireStorage = angularFireStorage;
        this.alertCtrt = alertCtrt;
        this.loadingController = loadingController;
        this.localesService = localesService;
        this.categoriasService = categoriasService;
        this.activateRoute = activateRoute;
        this.local = new src_app_models_locales__WEBPACK_IMPORTED_MODULE_3__["Locales"]();
        this.categorias = [];
    }
    ngOnInit() {
        this.categoriasService.getCategorias().subscribe(res => { this.categorias = res; });
    }
    readURL(event) {
        if (event.target.files && event.target.files[0]) {
            this.file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = e => this.image = reader.result;
            reader.readAsDataURL(this.file);
        }
    }
    crearLocal(form) {
        var telefono = form.value.telefono;
        var primeros = telefono.slice(0, 3);
        if (telefono.slice(0, 2) == '09') {
            telefono = '+593' + telefono.slice(1, telefono.length);
        }
        else if (primeros == '+593') {
            telefono = telefono;
        }
        else {
            telefono = telefono;
        }
        this.presentLoading("Espere por favor...");
        this.local.Nombre = form.value.nombre;
        this.local.Descripcion = form.value.descripcion;
        this.local.Ciudadela = form.value.ciudadela;
        this.local.Manzana = form.value.manzana;
        this.local.Villa = form.value.villa;
        this.local.Telefono = telefono;
        if (form.value.redSocial != '') {
            this.local.RedSocial = form.value.redSocial;
        }
        else {
            this.local.RedSocial = '';
        }
        this.local.HorarioAtencion = form.value.horarioAtencion;
        if (form.value.referencia != '') {
            this.local.Referencia = '';
        }
        else {
            this.local.Referencia = form.value.referencia;
        }
        this.local.Usuario = localStorage.getItem('userId');
        this.local.CategoriaLocal = form.value.categoria;
        this.local.Visibilidad = true;
        this.local.Domicilio = form.value.domicilio;
        this.local.Calificacion = 5;
        this.guardarLocal();
    }
    guardarLocal() {
        var storageRef = this.angularFireStorage.storage.ref();
        storageRef.child(this.file.name).put(this.file)
            .then(data => {
            data.ref.getDownloadURL().then(downloadURL => {
                this.crearLocalFinal(downloadURL);
            }).catch(err => { this.loading.dismiss(), this.failedAlert("Error al cargar la foto"); });
        });
    }
    crearLocalFinal(downloadURL) {
        this.local.Foto = downloadURL;
        this.localesService.addLocal(this.local).then(auth => {
            this.loading.dismiss();
            this.router.navigate(["/perfil"]);
        }).catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading.dismiss();
            this.failedAlert("Algo salió mal, inténtelo de nuevo");
        }));
    }
    presentLoading(mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: mensaje,
            });
            return this.loading.present();
        });
    }
    failedAlert(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: text,
                buttons: [{
                        text: 'OK',
                        handler: () => {
                        }
                    }]
            });
            yield alert.present();
        });
    }
};
CrearLocalPerfilPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: src_app_services_locales_service__WEBPACK_IMPORTED_MODULE_4__["LocalesService"] },
    { type: src_app_services_categorias_locales_service__WEBPACK_IMPORTED_MODULE_7__["CategoriasLocalesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CrearLocalPerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crear-local-perfil',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./crear-local-perfil.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/crear-local-perfil/crear-local-perfil.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./crear-local-perfil.page.scss */ "./src/app/folder/crear-local-perfil/crear-local-perfil.page.scss")).default]
    })
], CrearLocalPerfilPage);



/***/ })

}]);
//# sourceMappingURL=folder-crear-local-perfil-crear-local-perfil-module.js.map