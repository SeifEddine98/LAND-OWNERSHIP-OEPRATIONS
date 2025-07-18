(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-compte-update-compte-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-compte/update-compte.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-compte/update-compte.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/menuadmin\"></ion-back-button>\n    </ion-buttons>\n    <ion-title size=\"large\">\n      <div class=\"ion-text-end\">\n        تحديث الحساب\n        <ion-icon name=\"refresh-circle-outline\"></ion-icon>\n      </div>\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #clientForm=\"ngForm\" (ngSubmit)=\"clientById()\">\n    <ion-grid>\n      <ion-row class=\"ion-float-end\">\n        <ion-col class=\"ion-float-end\">\n        <div>  \n    <ion-item>\n      <ion-card>\n      <div class=\"ion-text-end\">    \n    <ion-input type=\"text\" [(ngModel)]=\"client.code\" name=\"code\" placeholder=\"الرقم السري\" ></ion-input>\n  </div>\n</ion-card>\n  </ion-item>\n</div>\n</ion-col>\n</ion-row>\n</ion-grid>\n<ion-card>\n  \n<ion-button type=\"submit\" [disabled]=\"!clientForm.form.valid\" expand=\"block\" >  بحث\n<ion-icon name=\"search\"></ion-icon>\n </ion-button>\n\n</ion-card>\n  </form>\n  <form #clientFormUpdate=\"ngForm\" (ngSubmit)=\"this.update(clientFormUpdate.value)\">\n    <ion-grid>\n      <ion-row class=\"ion-float-end\">\n        <ion-col class=\"ion-float-end\">\n          <div>  \n    <ion-item>\n      <ion-card>\n      <div class=\"ion-text-end\">    \n        <ion-input type=\"number\" onKeyUp=\"if(this.value>99999999){this.value='';}else if(this.value<00000000){this.value='';}\"\n          id=\"yourid\" name=\"cin\" placeholder=\"رقم بطاقة التعريف الوطنية\" [(ngModel)]=\"client.cin\" required value={{client1.cin}} #cin></ion-input>\n      </div>\n</ion-card>\n  </ion-item>\n</div>\n</ion-col>\n</ion-row>\n<ion-row class=\"ion-float-end\">\n  <ion-col class=\"ion-float-end\">\n    <div>  \n<ion-item>\n<ion-card>\n<div class=\"ion-text-end\">    \n  <ion-input type=\"text\" maxlength=\"20\" name=\"prenom\" placeholder=\"الإسم \" [(ngModel)]=\"client.prenom\" required value={{client1.prenom}} #prenom></ion-input>\n</div>\n</ion-card>\n</ion-item>\n</div>\n</ion-col>\n</ion-row>\n<ion-row class=\"ion-float-end\">\n  <ion-col class=\"ion-float-end\">\n    <div>  \n<ion-item>\n<ion-card>\n<div class=\"ion-text-end\">    \n  <ion-input type=\"text\" maxlength=\"20\" name=\"nom\" placeholder=\"اللقب\" [(ngModel)]=\"client.nom\" required value={{client1.nom}} #nom></ion-input>\n</div>\n</ion-card>\n</ion-item>\n</div>\n</ion-col>\n</ion-row>\n<ion-row class=\"ion-float-end\">\n  <ion-col class=\"ion-float-end\">\n    <div>  \n<ion-item>\n<ion-card>\n<div class=\"ion-text-end\">    \n  <ion-input type=\"email\" maxlength=\"50\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" name=\"email\" placeholder=\"البريد الإلكتروني\" [(ngModel)]=\"client.email\" required value={{client1.email}} #email></ion-input>\n</div>\n</ion-card>\n</ion-item>\n</div>\n</ion-col>\n</ion-row>\n<ion-row class=\"ion-float-end\">\n  <ion-col class=\"ion-float-end\">\n    <div>  \n<ion-item>\n<ion-card>\n<div class=\"ion-text-end\">    \n  <ion-input type=\"number\" onKeyUp=\"if(this.value>99){this.value='';}else if(this.value<0){this.value='';}\"\n    id=\"yourid\" name=\"age\" placeholder=\"العمر\" [(ngModel)]=\"client.age\" required value={{client1.age}} #age></ion-input>\n</div>\n</ion-card>\n</ion-item>\n</div>\n</ion-col>\n</ion-row>\n<ion-row class=\"ion-float-end\">\n  <ion-col class=\"ion-float-end\">\n    <div>  \n<ion-item>\n<ion-card>\n<div class=\"ion-text-end\">    \n  <ion-input type=\"number\" onKeyUp=\"if(this.value>99999999){this.value='';}else if(this.value<0){this.value='';}\"\n    id=\"yourid\" name=\"numTel\" placeholder=\"رقم الهاتف المحمول\" [(ngModel)]=\"client.numTel\" required value={{client1.numTel}} #numTel></ion-input>\n</div>\n</ion-card>\n</ion-item>\n</div>\n</ion-col>\n</ion-row>\n      <ion-row class=\"ion-float-end\">\n        <ion-col class=\"ion-float-end\">\n          <div>  \n    <ion-item>\n      <ion-card>\n      <div class=\"ion-text-end\">    \n        <ion-input type=\"text\" maxlength=\"20\" name=\"login\" placeholder=\"اسم المستخدم\" [(ngModel)]=\"client.login\" required value={{client1.login}} #login></ion-input>\n      </div>\n</ion-card>\n  </ion-item>\n</div>\n</ion-col>\n</ion-row>\n<ion-row class=\"ion-float-end\">\n  <ion-col class=\"ion-float-end\">\n  <div>\n  <ion-item>\n    <ion-card>\n    <div class=\"ion-text-end\">   \n      <ion-input type=\"password\" maxlength=\"20\" name=\"password\" placeholder=\"كلمة السر\" [(ngModel)]=\"client.password\" required value={{client1.password}} #password></ion-input>\n    </div>\n</ion-card>\n  </ion-item>\n</div>\n</ion-col>\n</ion-row>\n</ion-grid>\n<ion-button type=\"submit\" [disabled]=\"!clientFormUpdate.form.valid\" expand=\"block\">\n تأكيد التحديث \n <ion-icon name=\"refresh-circle-outline\"></ion-icon>\n</ion-button>\n\n</form>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/update-compte/update-compte-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/update-compte/update-compte-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: UpdateComptePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComptePageRoutingModule", function() { return UpdateComptePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _update_compte_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-compte.page */ "./src/app/update-compte/update-compte.page.ts");




const routes = [
    {
        path: '',
        component: _update_compte_page__WEBPACK_IMPORTED_MODULE_3__["UpdateComptePage"]
    }
];
let UpdateComptePageRoutingModule = class UpdateComptePageRoutingModule {
};
UpdateComptePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UpdateComptePageRoutingModule);



/***/ }),

/***/ "./src/app/update-compte/update-compte.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/update-compte/update-compte.module.ts ***!
  \*******************************************************/
/*! exports provided: UpdateComptePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComptePageModule", function() { return UpdateComptePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _update_compte_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-compte-routing.module */ "./src/app/update-compte/update-compte-routing.module.ts");
/* harmony import */ var _update_compte_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-compte.page */ "./src/app/update-compte/update-compte.page.ts");







let UpdateComptePageModule = class UpdateComptePageModule {
};
UpdateComptePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _update_compte_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdateComptePageRoutingModule"]
        ],
        declarations: [_update_compte_page__WEBPACK_IMPORTED_MODULE_6__["UpdateComptePage"]]
    })
], UpdateComptePageModule);



/***/ }),

/***/ "./src/app/update-compte/update-compte.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/update-compte/update-compte.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1jb21wdGUvdXBkYXRlLWNvbXB0ZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/update-compte/update-compte.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/update-compte/update-compte.page.ts ***!
  \*****************************************************/
/*! exports provided: UpdateComptePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComptePage", function() { return UpdateComptePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_clientservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/clientservice.service */ "./src/app/shared/clientservice.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let UpdateComptePage = class UpdateComptePage {
    constructor(route, router, clientService, alertController) {
        this.route = route;
        this.router = router;
        this.clientService = clientService;
        this.alertController = alertController;
        this.clientRes = null;
        this.client = {};
        this.client1 = {};
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            const id = params['code'];
            this.clientid = id;
            if (this.clientid) {
                this.clientService.get(this.clientid).subscribe((client) => {
                    if (client) {
                        this.client = client;
                    }
                    else {
                        console.log('toy that have ${id} as id is not find, returning to Clients list');
                        this.gotoList();
                    }
                });
            }
        });
    }
    presentAlert1() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'خطأ',
                message: 'الرجاء التثبت من الرقم السري : الحساب المذكور غير موجود ',
                buttons: ['إعادة المحاولة']
            });
            yield alert.present();
        });
    }
    presentAlert2() {
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
    clientById() {
        this.clientService.get(this.client.code).subscribe(data => {
            if (data) {
                this.client1 = data;
            }
        }, error => this.presentAlert1());
    }
    gotoList() {
        this.router.navigate(['/menuadmin']);
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: '!لقد نجحت العملية',
                message: 'تم تحديث الحساب بنجاح',
                buttons: ['حسنا']
            });
            yield alert.present();
        });
    }
    update(form) {
        this.clientService.updateById(form, this.client.code).subscribe(result => {
            this.gotoList();
            this.presentAlert();
        }, error => this.presentAlert2());
    }
};
UpdateComptePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_clientservice_service__WEBPACK_IMPORTED_MODULE_3__["ClientserviceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
UpdateComptePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-compte',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-compte.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-compte/update-compte.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-compte.page.scss */ "./src/app/update-compte/update-compte.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _shared_clientservice_service__WEBPACK_IMPORTED_MODULE_3__["ClientserviceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], UpdateComptePage);



/***/ })

}]);
//# sourceMappingURL=update-compte-update-compte-module-es2015.js.map