(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inscription-inscription-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inscription/inscription.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inscription/inscription.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title size=\"large\">\n      <div class=\"ion-text-end\">\n        إنشاء حساب جديد\n        <ion-icon name=\"person-add-outline\"></ion-icon>\n            </div>\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #clientForm=\"ngForm\" (ngSubmit)=\"save(clientForm.value)\">\n    <ion-input type=\"hidden\" name=\"href\" [(ngModel)]=\"client.href\">\n    </ion-input>\n    <ion-grid>\n      <ion-row class=\"ion-float-end\">\n        <ion-col class=\"ion-float-end\">\n          <div>  \n    <ion-item>\n      <ion-card>\n      <div class=\"ion-text-end\">    \n    <ion-input type=\"number\" onKeyUp=\"if(this.value>99999999){this.value='';}else if(this.value<00000000){this.value='';}\"\n id=\"yourid\" name=\"cin\" placeholder=\"رقم بطاقة التعريف الوطنية\" [(ngModel)]=\"client.cin\" required #cin></ion-input>\n  </div>\n</ion-card>\n  </ion-item>\n</div>\n</ion-col>\n</ion-row>\n<ion-row class=\"ion-float-end\">\n  <ion-col class=\"ion-float-end\">\n    <div>  \n<ion-item>\n<ion-card>\n<div class=\"ion-text-end\">    \n<ion-input type=\"text\" maxlength=\"20\" name=\"prenom\" placeholder=\"الإسم \" [(ngModel)]=\"client.prenom\" required #prenom></ion-input>\n</div>\n</ion-card>\n</ion-item>\n</div>\n</ion-col>\n</ion-row>\n<ion-row class=\"ion-float-end\">\n  <ion-col class=\"ion-float-end\">\n    <div>  \n<ion-item>\n<ion-card>\n<div class=\"ion-text-end\">    \n<ion-input type=\"text\" name=\"nom\" maxlength=\"20\"  placeholder=\"اللقب\" [(ngModel)]=\"client.nom\" required #nom></ion-input>\n</div>\n</ion-card>\n</ion-item>\n</div>\n</ion-col>\n</ion-row>\n<ion-row class=\"ion-float-end\">\n  <ion-col class=\"ion-float-end\">\n    <div>  \n<ion-item>\n<ion-card>\n<div class=\"ion-text-end\">    \n<ion-input type=\"email\" maxlength=\"50\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" name=\"email\" placeholder=\"البريد الإلكتروني\" [(ngModel)]=\"client.email\" required #email></ion-input>\n</div>\n</ion-card>\n</ion-item>\n</div>\n</ion-col>\n</ion-row>\n<br/>\n<ion-row class=\"ion-float-end\">\n  <ion-col class=\"ion-float-end\">\n    <div>  \n<ion-item>\n<ion-card>\n<div class=\"ion-text-end\">    \n<ion-input type=\"number\"  \nonKeyUp=\"if(this.value>99){this.value='';}else if(this.value<0){this.value='';}\"\nid=\"yourid\"  name=\"age\"  placeholder=\"العمر\" [(ngModel)]=\"client.age\" required #age></ion-input>\n</div>\n</ion-card>\n</ion-item>\n</div>\n</ion-col>\n</ion-row>\n<br/>\n<ion-row class=\"ion-float-end\">\n  <ion-col class=\"ion-float-end\">\n    <div>  \n<ion-item>\n<ion-card>\n<div class=\"ion-text-end\">    \n<ion-input type=\"number\" \nonKeyUp=\"if(this.value>99999999){this.value='';}else if(this.value<0){this.value='';}\"\nid=\"yourid\" name=\"numTel\" placeholder=\"رقم الهاتف المحمول\" [(ngModel)]=\"client.numTel\" required #numTel></ion-input>\n</div>\n</ion-card>\n</ion-item>\n</div>\n</ion-col>\n</ion-row>\n      <ion-row class=\"ion-float-end\">\n        <ion-col class=\"ion-float-end\">\n          <div>  \n    <ion-item>\n      <ion-card>\n      <div class=\"ion-text-end\">    \n    <ion-input type=\"text\" maxlength=\"20\" name=\"login\" placeholder=\"اسم المستخدم\" [(ngModel)]=\"client.login\" required #login></ion-input>\n  </div>\n</ion-card>\n  </ion-item>\n</div>\n</ion-col>\n</ion-row>\n<ion-row class=\"ion-float-end\">\n  <ion-col class=\"ion-float-end\">\n  <div>\n  <ion-item>\n    <ion-card>\n    <div class=\"ion-text-end\">   \n  <ion-input type=\"password\" maxlength=\"20\" name=\"password\" placeholder=\"كلمة السر\" [(ngModel)]=\"client.password\" required #password></ion-input>\n</div>\n</ion-card>\n  </ion-item>\n</div>\n</ion-col>\n</ion-row>\n</ion-grid>\n<ion-button type=\"submit\" [disabled]=\"!clientForm.form.valid\" expand=\"block\">تأكيد\n  <ion-icon name=\"add-circle-outline\"></ion-icon>\n</ion-button>\n\n</form>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/inscription/inscription-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/inscription/inscription-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: InscriptionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscriptionPageRoutingModule", function() { return InscriptionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inscription_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inscription.page */ "./src/app/inscription/inscription.page.ts");




const routes = [
    {
        path: '',
        component: _inscription_page__WEBPACK_IMPORTED_MODULE_3__["InscriptionPage"]
    }
];
let InscriptionPageRoutingModule = class InscriptionPageRoutingModule {
};
InscriptionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InscriptionPageRoutingModule);



/***/ }),

/***/ "./src/app/inscription/inscription.module.ts":
/*!***************************************************!*\
  !*** ./src/app/inscription/inscription.module.ts ***!
  \***************************************************/
/*! exports provided: InscriptionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscriptionPageModule", function() { return InscriptionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _inscription_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inscription-routing.module */ "./src/app/inscription/inscription-routing.module.ts");
/* harmony import */ var _inscription_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inscription.page */ "./src/app/inscription/inscription.page.ts");







let InscriptionPageModule = class InscriptionPageModule {
};
InscriptionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inscription_routing_module__WEBPACK_IMPORTED_MODULE_5__["InscriptionPageRoutingModule"]
        ],
        declarations: [_inscription_page__WEBPACK_IMPORTED_MODULE_6__["InscriptionPage"]]
    })
], InscriptionPageModule);



/***/ }),

/***/ "./src/app/inscription/inscription.page.scss":
/*!***************************************************!*\
  !*** ./src/app/inscription/inscription.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc2NyaXB0aW9uL2luc2NyaXB0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/inscription/inscription.page.ts":
/*!*************************************************!*\
  !*** ./src/app/inscription/inscription.page.ts ***!
  \*************************************************/
/*! exports provided: InscriptionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscriptionPage", function() { return InscriptionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_clientservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/clientservice.service */ "./src/app/shared/clientservice.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let InscriptionPage = class InscriptionPage {
    constructor(route, router, clientService, alertController) {
        this.route = route;
        this.router = router;
        this.clientService = clientService;
        this.alertController = alertController;
        this.client = {};
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            const id = params['id'];
            if (id) {
                this.clientService.get(id).subscribe((client) => {
                    if (client) {
                        this.client = client;
                        this.client.href = client._links.self.href;
                    }
                    else {
                        console.log('client that have ${id} as id is not find, returning to clients list');
                        this.gotoList();
                    }
                });
            }
        });
    }
    gotoList() {
        this.router.navigate(['/menu']);
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'خطأ',
                message: 'رقم بطاقة التعريف الوطنية أو إسم المستخدم مسجلين بإسم حساب آخر الرجاء التثبت من المعطيات المذكورة',
                buttons: [{
                        text: 'إعادة المحاولة',
                        role: 'cancel',
                        handler: () => { location.reload(); }
                    }]
            });
            yield alert.present();
        });
    }
    presentAlert1() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: '!لقد نجحت العملية',
                message: 'تم تسجيل حسابكم بنجاح',
                buttons: ['حسنا']
            });
            yield alert.present();
        });
    }
    save(form) {
        this.clientService.save(form).subscribe(result => {
            this.gotoList();
            this.presentAlert1();
        }, error => { this.presentAlert(); });
    }
};
InscriptionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_clientservice_service__WEBPACK_IMPORTED_MODULE_3__["ClientserviceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
InscriptionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inscription',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inscription.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inscription/inscription.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inscription.page.scss */ "./src/app/inscription/inscription.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _shared_clientservice_service__WEBPACK_IMPORTED_MODULE_3__["ClientserviceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], InscriptionPage);



/***/ })

}]);
//# sourceMappingURL=inscription-inscription-module-es2015.js.map