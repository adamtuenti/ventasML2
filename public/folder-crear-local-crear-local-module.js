(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-crear-local-crear-local-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/crear-local/crear-local.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/crear-local/crear-local.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header nombre=\"locales\"></app-header>\r\n\r\n<ion-content>\r\n\r\n  <form #form=\"ngForm\" (ngSubmit)=\"crearLocal(form)\">\r\n        <ion-list>  \r\n          \r\n        <ion-card style=\"margin-top:15px\">\r\n          <ion-item>\r\n            <ion-label>Nombre</ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n          \r\n            <ion-input required placeholder=\"Ingrese el nombre del local\" name=\"nombre\" type='text' ngModel required maxlength=\"25\"></ion-input>\r\n          </ion-item>\r\n\r\n        </ion-card>\r\n\r\n        <ion-card style=\"margin-top:15px\">\r\n            <ion-item>\r\n              <ion-icon name=\"image-outline\"></ion-icon> <ion-text color=\"\" style=\"margin-left: 7.5px;\" *ngIf='image==null'>Subir foto</ion-text> <ion-text color=\"\" style=\"margin-left: 7.5px;\" *ngIf='image!=null'>Cambiar foto</ion-text>\r\n          \r\n              <ion-input type='file' accept=\"image/*\" id=\"myFileInput\" name=\"foto1\" (change)=\"readURL($event);\" class=\"fileInput\" ngModel required></ion-input>\r\n    \r\n            </ion-item>\r\n\r\n        </ion-card>\r\n        \r\n        <ion-card style=\"margin-top:15px\" *ngIf='file!=null'>\r\n          <ion-item>\r\n\r\n            <ng-container>\r\n              <ion-img id=\"blah\" [src]=\"image\" alt=\"your image\" style=\"margin-top:5px;margin-bottom: 5px;height: 250px;width: 250px;margin:auto;\"></ion-img>\r\n\r\n            </ng-container>\r\n\r\n          </ion-item>\r\n    \r\n        </ion-card>\r\n\r\n        \r\n        <ion-card style=\"margin-top:15px\">\r\n          <ion-item>\r\n            <ion-label>Descripción</ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-textarea required placeholder=\"Ingrese una descripción del local\" name=\"descripcion\" type='text' ngModel required></ion-textarea>\r\n          </ion-item>\r\n        </ion-card>\r\n\r\n        <ion-card style=\"margin-top:15px\">\r\n          <ion-item>\r\n            <ion-icon color=\"black\" name=\"storefront-outline\"></ion-icon>\r\n            <ion-label style = \"margin-left: 6.5px;\">Ciudadela: </ion-label>\r\n            <ion-select required  name='ciudadela' ngModel>\r\n             \r\n                    <ion-select-option value=\"Paraíso del Río 1\">Paraíso del Río 1</ion-select-option>\r\n                    <ion-select-option value=\"Paraíso del Río 2\">Paraíso del Río 2</ion-select-option> \r\n                    <ion-select-option value=\"Toledo\">Toledo</ion-select-option>\r\n                    <ion-select-option value=\"Marbella\">Marbella</ion-select-option> \r\n                    <ion-select-option value=\"Victoria del Río\">Victoria del Río</ion-select-option>\r\n                    <ion-select-option value=\"Salamanca\">Salamanca</ion-select-option>\r\n                    <ion-select-option value=\"Victoria Club\">Victoria Club</ion-select-option>\r\n                    <ion-select-option value=\"Plaza Victoria\">Plaza Victoria</ion-select-option>\r\n                    <ion-select-option value=\"Valle Victoria\">Valle Victoria</ion-select-option>\r\n                    <ion-select-option value=\"Alameda del Río\">Alameda del Río</ion-select-option>\r\n  \r\n            \r\n            </ion-select>\r\n    \r\n          </ion-item>\r\n        </ion-card>\r\n\r\n        <ion-card style=\"margin-top:15px\">\r\n          <ion-item>\r\n            <ion-label>Manzana </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-textarea required placeholder=\"Ingrese la manzana\" name=\"manzana\" type='text' ngModel required></ion-textarea>\r\n          </ion-item>\r\n        </ion-card>\r\n\r\n        <ion-card style=\"margin-top:15px\">\r\n          <ion-item>\r\n            <ion-label>Villa</ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-textarea required placeholder=\"Ingrese la Villa\" name=\"villa\" type='text' ngModel required></ion-textarea>\r\n          </ion-item>\r\n        </ion-card>\r\n\r\n        <ion-card style=\"margin-top:15px\">\r\n          <ion-item>\r\n            <ion-label>Teléfono del local</ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-textarea required placeholder=\"Ingrese el número de teléfono\" name=\"telefono\" type='number' ngModel required></ion-textarea>\r\n          </ion-item>\r\n        </ion-card>\r\n\r\n        <ion-card style=\"margin-top:15px\">\r\n          <ion-item>\r\n            \r\n            <ion-label>Red social</ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-textarea placeholder=\"Ingrese el link de su página de Facebook\" name=\"redSocial\" type='text' ngModel></ion-textarea>\r\n          </ion-item>\r\n        </ion-card>\r\n\r\n        <ion-card style=\"margin-top:15px\">\r\n          <ion-item>\r\n            <ion-icon color=\"black\" name=\"bicycle-outline\"></ion-icon>\r\n            <ion-label style = \"margin-left: 6.5px;\">Entregas a domicilio: </ion-label>\r\n            <ion-select required  name='domicilio' ngModel>\r\n             \r\n                    <ion-select-option value=\"Si\">Sí</ion-select-option>\r\n                    <ion-select-option value=\"No\">No</ion-select-option> \r\n\r\n            </ion-select>\r\n    \r\n          </ion-item>\r\n        </ion-card>\r\n\r\n        <ion-card style=\"margin-top:15px\">\r\n          <ion-item>\r\n            <ion-label>Horario de atención</ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-textarea required placeholder=\"Ingrese el Horario de atención\" name=\"horarioAtencion\" type='text' ngModel required></ion-textarea>\r\n          </ion-item>\r\n        </ion-card>\r\n\r\n        <ion-card style=\"margin-top:15px\">\r\n          <ion-item>\r\n            <ion-label>Referencia</ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-textarea required placeholder=\"Referencia de la ubicación del local\" name=\"referencia\" type='text' ngModel required></ion-textarea>\r\n          </ion-item>\r\n        </ion-card>\r\n\r\n       \r\n               \r\n        </ion-list>\r\n  \r\n        <ion-button  style=\"width: 150px;margin:auto;margin-bottom: 8.5px;\" type=\"submit\"  [disabled]=\"form.invalid\" expand=\"block\">\r\n          Guardar\r\n        </ion-button>\r\n      </form>\r\n</ion-content>\r\n<style>\r\n  #myFileInput{\r\n    position: absolute;\r\n    opacity: 0;\r\n  }\r\n</style>\r\n");

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

/***/ "./src/app/folder/crear-local/crear-local-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/folder/crear-local/crear-local-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: CrearLocalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearLocalPageRoutingModule", function() { return CrearLocalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _crear_local_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crear-local.page */ "./src/app/folder/crear-local/crear-local.page.ts");




const routes = [
    {
        path: '',
        component: _crear_local_page__WEBPACK_IMPORTED_MODULE_3__["CrearLocalPage"]
    }
];
let CrearLocalPageRoutingModule = class CrearLocalPageRoutingModule {
};
CrearLocalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CrearLocalPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/crear-local/crear-local.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/folder/crear-local/crear-local.module.ts ***!
  \**********************************************************/
/*! exports provided: CrearLocalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearLocalPageModule", function() { return CrearLocalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _crear_local_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crear-local-routing.module */ "./src/app/folder/crear-local/crear-local-routing.module.ts");
/* harmony import */ var _crear_local_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crear-local.page */ "./src/app/folder/crear-local/crear-local.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/folder/components/components.module.ts");








let CrearLocalPageModule = class CrearLocalPageModule {
};
CrearLocalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _crear_local_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrearLocalPageRoutingModule"]
        ],
        declarations: [_crear_local_page__WEBPACK_IMPORTED_MODULE_6__["CrearLocalPage"]]
    })
], CrearLocalPageModule);



/***/ }),

/***/ "./src/app/folder/crear-local/crear-local.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/folder/crear-local/crear-local.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2NyZWFyLWxvY2FsL2NyZWFyLWxvY2FsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9jcmVhci1sb2NhbC9jcmVhci1sb2NhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/folder/crear-local/crear-local.page.ts":
/*!********************************************************!*\
  !*** ./src/app/folder/crear-local/crear-local.page.ts ***!
  \********************************************************/
/*! exports provided: CrearLocalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearLocalPage", function() { return CrearLocalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_locales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/locales.service */ "./src/app/services/locales.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);








let CrearLocalPage = class CrearLocalPage {
    constructor(router, angularFireStorage, alertCtrt, loadingController, localesService, activateRoute) {
        this.router = router;
        this.angularFireStorage = angularFireStorage;
        this.alertCtrt = alertCtrt;
        this.loadingController = loadingController;
        this.localesService = localesService;
        this.activateRoute = activateRoute;
        this.local = { Nombre: '', Descripcion: '', Ciudadela: '', Manzana: '', Villa: '', Telefono: '', RedSocial: '', HorarioAtencion: '', Referencia: '', Usuario: '', CategoriaLocal: '', Visibilidad: true, Domicilio: '', Calificacion: 5, Foto: '', id: '' };
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            this.categoria = paramMap.get('id');
        });
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
        var redSocial = '';
        if (form.value.redSocial != null) {
            redSocial = form.value.redSocial;
        }
        this.presentLoading("Espere por favor...");
        this.local.Nombre = form.value.nombre;
        this.local.Descripcion = form.value.descripcion;
        this.local.Ciudadela = form.value.ciudadela;
        this.local.Manzana = form.value.manzana;
        this.local.Villa = form.value.villa;
        this.local.Telefono = telefono;
        this.local.RedSocial = redSocial;
        this.local.HorarioAtencion = form.value.horarioAtencion;
        this.local.Referencia = form.value.referencia;
        this.local.Usuario = localStorage.getItem('userId');
        this.local.CategoriaLocal = this.categoria;
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.local.Foto = downloadURL;
            this.loading.dismiss();
            const docRef = firebase__WEBPACK_IMPORTED_MODULE_6__["firestore"]().collection("Locales").doc();
            this.local.id = docRef.id;
            yield docRef.set(this.local);
            this.router.navigate(["/comunicacion-local", docRef.id, localStorage.getItem('userId')]);
        });
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
CrearLocalPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: src_app_services_locales_service__WEBPACK_IMPORTED_MODULE_3__["LocalesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CrearLocalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crear-local',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./crear-local.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/crear-local/crear-local.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./crear-local.page.scss */ "./src/app/folder/crear-local/crear-local.page.scss")).default]
    })
], CrearLocalPage);



/***/ })

}]);
//# sourceMappingURL=folder-crear-local-crear-local-module.js.map