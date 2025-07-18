(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menuadmin-menuadmin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menuadmin/menuadmin.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menuadmin/menuadmin.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title size=\"large\">\n      <div class=\"ion-text-end\">           \n         الصفحة الشخصية لفضاء الإداري\n        <ion-icon name=\"person-outline\"></ion-icon>  \n      </div>\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        <div class=\"ion-text-center\">\n          مرحبا بك في الفضاء الإداري\n        </div>\n      </ion-card-title>\n    </ion-card-header>\n  </ion-card>\n  <ion-card>\n    <ion-img src=\"{{tof.logo}}\">      \n    </ion-img>\n  </ion-card>\n    </ion-content>\n<ion-menu side=\"end\" contentId=\"content\">\n<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>\n      <div class=\"ion-text-end\">\n      القائمة\n      <ion-icon name=\"list-circle-outline\"></ion-icon>\n    </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-menu-toggle *ngFor=\"let m of menus\">\n    <ion-item (click)=\"onMenuItem(m)\">\n    <ion-icon [name]=\"m.icon\" slot=\"end\"></ion-icon>\n    <ion-title>\n      <div class=\"ion-text-end\">\n      {{m.title}}\n    </div>\n    </ion-title>\n  </ion-item>\n  </ion-menu-toggle>\n</ion-content>\n</ion-menu>\n<ion-router-outlet id=\"content\" ></ion-router-outlet>\n");

/***/ }),

/***/ "./src/app/menuadmin/menuadmin-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/menuadmin/menuadmin-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MenuadminPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuadminPageRoutingModule", function() { return MenuadminPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menuadmin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuadmin.page */ "./src/app/menuadmin/menuadmin.page.ts");




const routes = [
    {
        path: '',
        component: _menuadmin_page__WEBPACK_IMPORTED_MODULE_3__["MenuadminPage"]
    }
];
let MenuadminPageRoutingModule = class MenuadminPageRoutingModule {
};
MenuadminPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuadminPageRoutingModule);



/***/ }),

/***/ "./src/app/menuadmin/menuadmin.module.ts":
/*!***********************************************!*\
  !*** ./src/app/menuadmin/menuadmin.module.ts ***!
  \***********************************************/
/*! exports provided: MenuadminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuadminPageModule", function() { return MenuadminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _menuadmin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menuadmin-routing.module */ "./src/app/menuadmin/menuadmin-routing.module.ts");
/* harmony import */ var _menuadmin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menuadmin.page */ "./src/app/menuadmin/menuadmin.page.ts");







const routes = [
    {
        path: '',
        component: _menuadmin_page__WEBPACK_IMPORTED_MODULE_6__["MenuadminPage"],
        children: [
            { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
            { path: 'login', loadChildren: '../login/login.module#LoginPageModule' },
        ]
    }
];
let MenuadminPageModule = class MenuadminPageModule {
};
MenuadminPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menuadmin_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuadminPageRoutingModule"]
        ],
        declarations: [_menuadmin_page__WEBPACK_IMPORTED_MODULE_6__["MenuadminPage"]]
    })
], MenuadminPageModule);



/***/ }),

/***/ "./src/app/menuadmin/menuadmin.page.scss":
/*!***********************************************!*\
  !*** ./src/app/menuadmin/menuadmin.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnVhZG1pbi9tZW51YWRtaW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/menuadmin/menuadmin.page.ts":
/*!*********************************************!*\
  !*** ./src/app/menuadmin/menuadmin.page.ts ***!
  \*********************************************/
/*! exports provided: MenuadminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuadminPage", function() { return MenuadminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MenuadminPage = class MenuadminPage {
    constructor(router) {
        this.router = router;
        this.tof = {
            logo: "assets/images/admin.jpg"
        };
        this.menus = [
            { title: " الإطلاع على رسم عقاري ", url: "/consulter-titre-foncier-admin", icon: 'document-text-outline' },
            { title: " كشف العمليات العقارية ", url: "/consulter-op-fonc-admin", icon: 'document-text-outline' },
            { title: " تحديث الحسابات ", url: "/update-compte", icon: 'refresh-circle-outline' },
            { title: "قائمة الأشخاص المسجلين", url: "/liste-clients", icon: 'list-circle' },
            { title: " قائمة الأخطاء ", url: "/liste-reclamation", icon: 'build-outline' },
            { title: " الصفحة الرئيسية ", url: "/home", icon: 'home-outline' },
            { title: " تسجيل الخروج ", url: "/loginadmin", icon: 'log-out-outline' }
        ];
    }
    ngOnInit() {
    }
    onMenuItem(m) {
        this.router.navigateByUrl(m.url);
    }
};
MenuadminPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MenuadminPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menuadmin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menuadmin/menuadmin.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menuadmin.page.scss */ "./src/app/menuadmin/menuadmin.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MenuadminPage);



/***/ })

}]);
//# sourceMappingURL=menuadmin-menuadmin-module-es2015.js.map