(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consulter-titre-foncier-consulter-titre-foncier-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/consulter-titre-foncier/consulter-titre-foncier.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/consulter-titre-foncier/consulter-titre-foncier.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/menu\"></ion-back-button>\n    </ion-buttons>\n    <ion-title size=\"large\">\n      <div class=\"ion-text-end\">\nالإطلاع على رسم عقاري\n<ion-icon name=\"document-text-outline\"></ion-icon>\n      </div>\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        <h3>\n        <div class=\"ion-text-center\">\n        تنبيه : كل خطأ في إدخال رقم الرسم العقاري ينجر عنه إعادة دفع المعاليم. فالرجاء التثبت من صحة رقم الرسم العقاري المذكور  \n      </div>\n    </h3>\n      </ion-card-title>\n    </ion-card-header>\n    </ion-card>\n    <form #titreForm=\"ngForm\" >\n      <ion-input type=\"hidden\" name=\"href\" [(ngModel)]=\"titre.href\">\n      </ion-input>\n      <ion-grid>\n  <ion-row class=\"ion-float-end\">\n    <ion-col class=\"ion-float-end\">\n      <div>  \n<ion-item>\n  <ion-card>\n  <div class=\"ion-text-end\">    \n<ion-input type=\"number\" name=\"numtitre\" placeholder=\"رقم الرسم العقاري\" [(ngModel)]=\"titre.numtitre\" required #numtitre></ion-input>\n</div>\n</ion-card>\n</ion-item>\n</div>\n</ion-col>\n</ion-row>\n</ion-grid>\n<ion-button type=\"submit\" [disabled]=\"clicked\" (click)=\"actionMethod(); clicked = true;\" class=\"btn btn-primary\" (click)=\"save(titreForm.value)\">بحث\n  <ion-icon name=\"search-outline\"></ion-icon>\n</ion-button>\n</form>\n<br/>\n<h1>  الرسم العقاري بعنوان </h1>\n<div *ngFor=\"let titre of titres\">\n  <h2>{{titre.numtitre}}</h2> <h2>{{titre.gouv}}</h2>\n</div>\n<hr>\n<table id=\"users\">\n  \n    <tr>\n      <th scope=\"col\">\n        <div class=\"ion-text-end\">\n          التفاصيل \n        </div>\n        </th>\n        <th scope=\"col\">\n          <div class=\"ion-text-end\">\n            النوع \n          </div>\n          </th>\n        <th scope=\"col\">\n          <div class=\"ion-text-end\">\n           الإدارة الماسكة للعقار \n          </div>\n          </th>\n\n<tr *ngFor=\"let titre of titres\">\n  <td>\n    <div class=\"ion-text-end\">\n    {{titre.description}}\n    </div>\n  </td>\n  <td>\n    <div class=\"ion-text-end\">\n    {{titre.type}}\n    </div>\n  </td>\n  <td>\n    <div class=\"ion-text-end\">\n    {{titre.gouv}}\n  </div>\n  </td>\n</tr>\n</table>\n<ion-card>\n  <ion-button expand=\"block\" [routerLink]=\"['/menu']\">رجوع\n    <ion-icon name=\"arrow-back-outline\"></ion-icon>\n  </ion-button> \n</ion-card>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/consulter-titre-foncier/consulter-titre-foncier-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/consulter-titre-foncier/consulter-titre-foncier-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ConsulterTitreFoncierPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsulterTitreFoncierPageRoutingModule", function() { return ConsulterTitreFoncierPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _consulter_titre_foncier_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consulter-titre-foncier.page */ "./src/app/consulter-titre-foncier/consulter-titre-foncier.page.ts");




const routes = [
    {
        path: '',
        component: _consulter_titre_foncier_page__WEBPACK_IMPORTED_MODULE_3__["ConsulterTitreFoncierPage"]
    }
];
let ConsulterTitreFoncierPageRoutingModule = class ConsulterTitreFoncierPageRoutingModule {
};
ConsulterTitreFoncierPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConsulterTitreFoncierPageRoutingModule);



/***/ }),

/***/ "./src/app/consulter-titre-foncier/consulter-titre-foncier.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/consulter-titre-foncier/consulter-titre-foncier.module.ts ***!
  \***************************************************************************/
/*! exports provided: ConsulterTitreFoncierPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsulterTitreFoncierPageModule", function() { return ConsulterTitreFoncierPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _consulter_titre_foncier_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consulter-titre-foncier-routing.module */ "./src/app/consulter-titre-foncier/consulter-titre-foncier-routing.module.ts");
/* harmony import */ var _consulter_titre_foncier_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consulter-titre-foncier.page */ "./src/app/consulter-titre-foncier/consulter-titre-foncier.page.ts");







let ConsulterTitreFoncierPageModule = class ConsulterTitreFoncierPageModule {
};
ConsulterTitreFoncierPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _consulter_titre_foncier_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConsulterTitreFoncierPageRoutingModule"]
        ],
        declarations: [_consulter_titre_foncier_page__WEBPACK_IMPORTED_MODULE_6__["ConsulterTitreFoncierPage"]]
    })
], ConsulterTitreFoncierPageModule);



/***/ }),

/***/ "./src/app/consulter-titre-foncier/consulter-titre-foncier.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/consulter-titre-foncier/consulter-titre-foncier.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  text-align: center;\n  color: blueviolet;\n}\n\nh2 {\n  text-align: center;\n  color: rebeccapurple;\n}\n\nh3 {\n  text-align: center;\n  color: red;\n}\n\n#users {\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#users td, #users th {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n\n#users tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n#users tr:hover {\n  background-color: #ddd;\n}\n\n#users th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: blueviolet;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uc3VsdGVyLXRpdHJlLWZvbmNpZXIvQzpcXFVzZXJzXFxIUFxcRnJvbnRPTlBGL3NyY1xcYXBwXFxjb25zdWx0ZXItdGl0cmUtZm9uY2llclxcY29uc3VsdGVyLXRpdHJlLWZvbmNpZXIucGFnZS5zY3NzIiwic3JjL2FwcC9jb25zdWx0ZXItdGl0cmUtZm9uY2llci9jb25zdWx0ZXItdGl0cmUtZm9uY2llci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FERUE7RUFFSSxrQkFBQTtFQUNBLG9CQUFBO0FDQUo7O0FERUE7RUFFRSxrQkFBQTtFQUNFLFVBQUE7QUNBSjs7QURFQTtFQUNJLHlEQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUEwQix5QkFBQTtBQ0U1Qjs7QURBRTtFQUFpQixzQkFBQTtBQ0luQjs7QURGRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvY29uc3VsdGVyLXRpdHJlLWZvbmNpZXIvY29uc3VsdGVyLXRpdHJlLWZvbmNpZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDFcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGJsdWV2aW9sZXQ7XHJcbn1cclxuaDJcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XHJcbn1cclxuaDNcclxue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuI3VzZXJzIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAjdXNlcnMgdGQsICN1c2VycyB0aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gIH1cclxuICBcclxuICAjdXNlcnMgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxyXG4gIFxyXG4gICN1c2VycyB0cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XHJcbiAgXHJcbiAgI3VzZXJzIHRoIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9IiwiaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibHVldmlvbGV0O1xufVxuXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XG59XG5cbmgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmVkO1xufVxuXG4jdXNlcnMge1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiN1c2VycyB0ZCwgI3VzZXJzIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4jdXNlcnMgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxuI3VzZXJzIHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuI3VzZXJzIHRoIHtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/consulter-titre-foncier/consulter-titre-foncier.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/consulter-titre-foncier/consulter-titre-foncier.page.ts ***!
  \*************************************************************************/
/*! exports provided: ConsulterTitreFoncierPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsulterTitreFoncierPage", function() { return ConsulterTitreFoncierPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_titreservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/titreservice.service */ "./src/app/shared/titreservice.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let ConsulterTitreFoncierPage = class ConsulterTitreFoncierPage {
    constructor(route, router, titreService, alertController) {
        this.route = route;
        this.router = router;
        this.titreService = titreService;
        this.alertController = alertController;
        this.clicked = false;
        this.titre = {};
    }
    ngOnInit() {
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'خطأ',
                message: 'رقم الرسم العقاري المذكور غير موجود ! لإعادة المحاولة الرجاء العودة و إعادة دفع المعاليم',
                buttons: ['حسنا']
            });
            yield alert.present();
        });
    }
    actionMethod() {
        console.log("actionMethod was called!");
    }
    save(form) {
        console.log(form);
        this.titreService.getTitre(form).subscribe(result => {
            console.log(result);
            if (result) {
                this.titres = result;
                if (this.titres.length == 0) {
                    this.presentAlert();
                }
            }
        });
    }
};
ConsulterTitreFoncierPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_titreservice_service__WEBPACK_IMPORTED_MODULE_3__["TitreserviceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ConsulterTitreFoncierPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-consulter-titre-foncier',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./consulter-titre-foncier.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/consulter-titre-foncier/consulter-titre-foncier.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./consulter-titre-foncier.page.scss */ "./src/app/consulter-titre-foncier/consulter-titre-foncier.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _shared_titreservice_service__WEBPACK_IMPORTED_MODULE_3__["TitreserviceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], ConsulterTitreFoncierPage);



/***/ })

}]);
//# sourceMappingURL=consulter-titre-foncier-consulter-titre-foncier-module-es2015.js.map