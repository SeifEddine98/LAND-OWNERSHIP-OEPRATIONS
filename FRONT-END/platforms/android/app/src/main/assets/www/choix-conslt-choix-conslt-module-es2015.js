(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["choix-conslt-choix-conslt-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/choix-conslt/choix-conslt.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/choix-conslt/choix-conslt.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/menu\"></ion-back-button>\n    </ion-buttons>\n    <ion-title size=\"large\">\n      <div class=\"ion-text-end\">\n         إستخلاص معاليم الإطلاع على رسم \n         <ion-icon name=\"card-outline\"></ion-icon>\n              </div>\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        <div class=\"ion-text-center\">\n          سعر هذه العملية حدد ب3 دنانير \n        </div>\n      </ion-card-title>\n    </ion-card-header>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        <div class=\"ion-text-center\">\nالرجاء إختيار طريقة الدفع المستعملة في هذه العملية\n     \n</div>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-img src=\"{{imge.choix}}\">      \n    </ion-img>\n    </ion-card>\n  \n  <ion-list>\n    <ion-radio-group value=\"biff\">\n      <ion-list-header>\n        <ion-label>\n          <div class=\"ion-text-center\">\n              : طريقة الدفع\n            </div>\n        </ion-label>\n      </ion-list-header>\n  \n      <ion-item>\n        <ion-label>\n          <div class=\"ion-text-end\"> بواسطة البطاقة البريدية  </div>\n        </ion-label>\n        <ion-radio slot=\"start\" ></ion-radio>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label>\n          <div class=\"ion-text-end\">  بواسطة البطاقة البنكية </div>\n        </ion-label>\n        <ion-radio slot=\"start\" ></ion-radio>\n      </ion-item>\n  \n    </ion-radio-group>\n  </ion-list>\n  <ion-button expand=\"block\" [routerLink]=\"['/paiement']\">تأكيد\n    <ion-icon name=\"log-in-outline\"></ion-icon>\n  </ion-button> \n</ion-content>\n");

/***/ }),

/***/ "./src/app/choix-conslt/choix-conslt-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/choix-conslt/choix-conslt-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ChoixConsltPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoixConsltPageRoutingModule", function() { return ChoixConsltPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _choix_conslt_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choix-conslt.page */ "./src/app/choix-conslt/choix-conslt.page.ts");




const routes = [
    {
        path: '',
        component: _choix_conslt_page__WEBPACK_IMPORTED_MODULE_3__["ChoixConsltPage"]
    }
];
let ChoixConsltPageRoutingModule = class ChoixConsltPageRoutingModule {
};
ChoixConsltPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChoixConsltPageRoutingModule);



/***/ }),

/***/ "./src/app/choix-conslt/choix-conslt.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/choix-conslt/choix-conslt.module.ts ***!
  \*****************************************************/
/*! exports provided: ChoixConsltPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoixConsltPageModule", function() { return ChoixConsltPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _choix_conslt_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./choix-conslt-routing.module */ "./src/app/choix-conslt/choix-conslt-routing.module.ts");
/* harmony import */ var _choix_conslt_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./choix-conslt.page */ "./src/app/choix-conslt/choix-conslt.page.ts");







let ChoixConsltPageModule = class ChoixConsltPageModule {
};
ChoixConsltPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _choix_conslt_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChoixConsltPageRoutingModule"]
        ],
        declarations: [_choix_conslt_page__WEBPACK_IMPORTED_MODULE_6__["ChoixConsltPage"]]
    })
], ChoixConsltPageModule);



/***/ }),

/***/ "./src/app/choix-conslt/choix-conslt.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/choix-conslt/choix-conslt.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nob2l4LWNvbnNsdC9jaG9peC1jb25zbHQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/choix-conslt/choix-conslt.page.ts":
/*!***************************************************!*\
  !*** ./src/app/choix-conslt/choix-conslt.page.ts ***!
  \***************************************************/
/*! exports provided: ChoixConsltPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoixConsltPage", function() { return ChoixConsltPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChoixConsltPage = class ChoixConsltPage {
    constructor() {
        this.imge = {
            choix: "assets/images/choix.png"
        };
    }
    ngOnInit() {
    }
};
ChoixConsltPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-choix-conslt',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./choix-conslt.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/choix-conslt/choix-conslt.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./choix-conslt.page.scss */ "./src/app/choix-conslt/choix-conslt.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ChoixConsltPage);



/***/ })

}]);
//# sourceMappingURL=choix-conslt-choix-conslt-module-es2015.js.map