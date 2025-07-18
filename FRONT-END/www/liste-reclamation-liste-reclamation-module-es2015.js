(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["liste-reclamation-liste-reclamation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/liste-reclamation/liste-reclamation.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/liste-reclamation/liste-reclamation.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/menuadmin\"></ion-back-button>\n    </ion-buttons>\n    <ion-title size=\"large\">\n      <div class=\"ion-text-end\">\n        قائمة الأخطاء \n                <ion-icon name=\"build-outline\"></ion-icon>    \n      </div>            \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        <h1>\n        <div class=\"ion-text-center\">\n       قائمة الأخطاء المسجلة \n        </div>\n      </h1>\n      </ion-card-title>\n    </ion-card-header>\n    </ion-card>\n  \n<hr>\n<table id=\"users\">\n  \n    <tr>\n      <th scope=\"col\">\n        <div class=\"ion-text-end\">\n          الوصف \n        </div>\n        </th>\n        <th scope=\"col\">\n          <div class=\"ion-text-end\">\n            نوع الخلل \n          </div>\n          </th>\n        <th scope=\"col\">\n          <div class=\"ion-text-end\">\n           رقم الهاتف\n          </div>\n          </th>\n    </tr>\n\n\n<tr *ngFor=\"let reclamation of reclamations\">\n  <td>\n    <div class=\"ion-text-end\">\n    {{reclamation.description}}\n    </div>\n  </td>\n  <td>\n    <div class=\"ion-text-end\">\n    {{reclamation.type}}\n    </div>\n  </td>\n  <td>\n    <div class=\"ion-text-end\">\n    {{reclamation.numtel}}\n  </div>\n  </td>\n  \n</tr>\n</table>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/liste-reclamation/liste-reclamation-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/liste-reclamation/liste-reclamation-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ListeReclamationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeReclamationPageRoutingModule", function() { return ListeReclamationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _liste_reclamation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./liste-reclamation.page */ "./src/app/liste-reclamation/liste-reclamation.page.ts");




const routes = [
    {
        path: '',
        component: _liste_reclamation_page__WEBPACK_IMPORTED_MODULE_3__["ListeReclamationPage"]
    }
];
let ListeReclamationPageRoutingModule = class ListeReclamationPageRoutingModule {
};
ListeReclamationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListeReclamationPageRoutingModule);



/***/ }),

/***/ "./src/app/liste-reclamation/liste-reclamation.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/liste-reclamation/liste-reclamation.module.ts ***!
  \***************************************************************/
/*! exports provided: ListeReclamationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeReclamationPageModule", function() { return ListeReclamationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _liste_reclamation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./liste-reclamation-routing.module */ "./src/app/liste-reclamation/liste-reclamation-routing.module.ts");
/* harmony import */ var _liste_reclamation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./liste-reclamation.page */ "./src/app/liste-reclamation/liste-reclamation.page.ts");







let ListeReclamationPageModule = class ListeReclamationPageModule {
};
ListeReclamationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _liste_reclamation_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListeReclamationPageRoutingModule"]
        ],
        declarations: [_liste_reclamation_page__WEBPACK_IMPORTED_MODULE_6__["ListeReclamationPage"]]
    })
], ListeReclamationPageModule);



/***/ }),

/***/ "./src/app/liste-reclamation/liste-reclamation.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/liste-reclamation/liste-reclamation.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  text-align: center;\n  color: #42393b;\n}\n\n#users {\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#users td, #users th {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n\n#users tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n#users tr:hover {\n  background-color: #ddd;\n}\n\n#users th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #9b979e;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGUtcmVjbGFtYXRpb24vQzpcXFVzZXJzXFxIUFxcRnJvbnRPTlBGL3NyY1xcYXBwXFxsaXN0ZS1yZWNsYW1hdGlvblxcbGlzdGUtcmVjbGFtYXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9saXN0ZS1yZWNsYW1hdGlvbi9saXN0ZS1yZWNsYW1hdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNJLHlEQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0U7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHRTtFQUEwQix5QkFBQTtBQ0M1Qjs7QURDRTtFQUFpQixzQkFBQTtBQ0duQjs7QURERTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvbGlzdGUtcmVjbGFtYXRpb24vbGlzdGUtcmVjbGFtYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDFcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYig2NiwgNTcsIDU5KTtcclxufVxyXG5cclxuI3VzZXJzIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAjdXNlcnMgdGQsICN1c2VycyB0aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gIH1cclxuICBcclxuICAjdXNlcnMgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxyXG4gIFxyXG4gICN1c2VycyB0cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XHJcbiAgXHJcbiAgI3VzZXJzIHRoIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NSwgMTUxLCAxNTgpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH0iLCJoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM0MjM5M2I7XG59XG5cbiN1c2VycyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3VzZXJzIHRkLCAjdXNlcnMgdGgge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbiN1c2VycyB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuXG4jdXNlcnMgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4jdXNlcnMgdGgge1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5Yjk3OWU7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/liste-reclamation/liste-reclamation.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/liste-reclamation/liste-reclamation.page.ts ***!
  \*************************************************************/
/*! exports provided: ListeReclamationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeReclamationPage", function() { return ListeReclamationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_reclamationservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/reclamationservice.service */ "./src/app/shared/reclamationservice.service.ts");




let ListeReclamationPage = class ListeReclamationPage {
    constructor(reclamationService, router) {
        this.reclamationService = reclamationService;
        this.router = router;
        this.reclamation = {};
    }
    all() {
        this.reclamationService.getAll().subscribe(data => {
            this.reclamations = data;
        });
    }
    ngOnInit() {
        this.all();
    }
};
ListeReclamationPage.ctorParameters = () => [
    { type: _shared_reclamationservice_service__WEBPACK_IMPORTED_MODULE_3__["ReclamationserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ListeReclamationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-liste-reclamation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./liste-reclamation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/liste-reclamation/liste-reclamation.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./liste-reclamation.page.scss */ "./src/app/liste-reclamation/liste-reclamation.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_reclamationservice_service__WEBPACK_IMPORTED_MODULE_3__["ReclamationserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ListeReclamationPage);



/***/ })

}]);
//# sourceMappingURL=liste-reclamation-liste-reclamation-module-es2015.js.map