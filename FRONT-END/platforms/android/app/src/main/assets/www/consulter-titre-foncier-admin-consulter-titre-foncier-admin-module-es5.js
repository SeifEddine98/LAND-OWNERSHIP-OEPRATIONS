(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consulter-titre-foncier-admin-consulter-titre-foncier-admin-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/consulter-titre-foncier-admin/consulter-titre-foncier-admin.page.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/consulter-titre-foncier-admin/consulter-titre-foncier-admin.page.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConsulterTitreFoncierAdminConsulterTitreFoncierAdminPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/menuadmin\"></ion-back-button>\n    </ion-buttons>\n    <ion-title size=\"large\">\n      <div class=\"ion-text-end\">\nالإطلاع على رسم عقاري\n<ion-icon name=\"document-text-outline\"></ion-icon>\n      </div>\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <form #titreForm=\"ngForm\" >\n      <ion-input type=\"hidden\" name=\"href\" [(ngModel)]=\"titre.href\">\n      </ion-input>\n      <ion-grid>\n  <ion-row class=\"ion-float-end\">\n    <ion-col class=\"ion-float-end\">\n      <div>  \n<ion-item>\n  <ion-card>\n  <div class=\"ion-text-end\">    \n<ion-input type=\"number\" name=\"numtitre\" placeholder=\"رقم الرسم العقاري\" [(ngModel)]=\"titre.numtitre\" required #numtitre></ion-input>\n</div>\n</ion-card>\n</ion-item>\n</div>\n</ion-col>\n</ion-row>\n</ion-grid>\n<ion-button type=\"submit\" [disabled]=\"!titreForm.form.valid\"  (click)=\"save(titreForm.value)\">بحث\n  <ion-icon name=\"search-outline\"></ion-icon>\n</ion-button>\n</form>\n<br/>\n<h1>  الرسم العقاري بعنوان </h1>\n<div *ngFor=\"let titre of titres\">\n  <h2>{{titre.numtitre}}</h2> <h2>{{titre.gouv}}</h2>\n</div>\n<hr>\n<table id=\"users\">\n  \n    <tr>\n      <th scope=\"col\">\n        <div class=\"ion-text-end\">\n          التفاصيل \n        </div>\n        </th>\n        <th scope=\"col\">\n          <div class=\"ion-text-end\">\n            النوع \n          </div>\n          </th>\n        <th scope=\"col\">\n          <div class=\"ion-text-end\">\n           الإدارة الماسكة للعقار \n          </div>\n          </th>\n\n<tr *ngFor=\"let titre of titres\">\n  <td>\n    <div class=\"ion-text-end\">\n    {{titre.description}}\n    </div>\n  </td>\n  <td>\n    <div class=\"ion-text-end\">\n    {{titre.type}}\n    </div>\n  </td>\n  <td>\n    <div class=\"ion-text-end\">\n    {{titre.gouv}}\n  </div>\n  </td>\n</tr>\n</table>\n<ion-card>\n  <ion-button expand=\"block\" [routerLink]=\"['/menuadmin']\">رجوع\n    <ion-icon name=\"arrow-back-outline\"></ion-icon>\n  </ion-button> \n</ion-card>\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/consulter-titre-foncier-admin/consulter-titre-foncier-admin-routing.module.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/consulter-titre-foncier-admin/consulter-titre-foncier-admin-routing.module.ts ***!
    \***********************************************************************************************/

  /*! exports provided: ConsulterTitreFoncierAdminPageRoutingModule */

  /***/
  function srcAppConsulterTitreFoncierAdminConsulterTitreFoncierAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsulterTitreFoncierAdminPageRoutingModule", function () {
      return ConsulterTitreFoncierAdminPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _consulter_titre_foncier_admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./consulter-titre-foncier-admin.page */
    "./src/app/consulter-titre-foncier-admin/consulter-titre-foncier-admin.page.ts");

    const routes = [{
      path: '',
      component: _consulter_titre_foncier_admin_page__WEBPACK_IMPORTED_MODULE_3__["ConsulterTitreFoncierAdminPage"]
    }];
    let ConsulterTitreFoncierAdminPageRoutingModule = class ConsulterTitreFoncierAdminPageRoutingModule {};
    ConsulterTitreFoncierAdminPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ConsulterTitreFoncierAdminPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/consulter-titre-foncier-admin/consulter-titre-foncier-admin.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/consulter-titre-foncier-admin/consulter-titre-foncier-admin.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: ConsulterTitreFoncierAdminPageModule */

  /***/
  function srcAppConsulterTitreFoncierAdminConsulterTitreFoncierAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsulterTitreFoncierAdminPageModule", function () {
      return ConsulterTitreFoncierAdminPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _consulter_titre_foncier_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./consulter-titre-foncier-admin-routing.module */
    "./src/app/consulter-titre-foncier-admin/consulter-titre-foncier-admin-routing.module.ts");
    /* harmony import */


    var _consulter_titre_foncier_admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./consulter-titre-foncier-admin.page */
    "./src/app/consulter-titre-foncier-admin/consulter-titre-foncier-admin.page.ts");

    let ConsulterTitreFoncierAdminPageModule = class ConsulterTitreFoncierAdminPageModule {};
    ConsulterTitreFoncierAdminPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _consulter_titre_foncier_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConsulterTitreFoncierAdminPageRoutingModule"]],
      declarations: [_consulter_titre_foncier_admin_page__WEBPACK_IMPORTED_MODULE_6__["ConsulterTitreFoncierAdminPage"]]
    })], ConsulterTitreFoncierAdminPageModule);
    /***/
  },

  /***/
  "./src/app/consulter-titre-foncier-admin/consulter-titre-foncier-admin.page.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/consulter-titre-foncier-admin/consulter-titre-foncier-admin.page.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConsulterTitreFoncierAdminConsulterTitreFoncierAdminPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  text-align: center;\n  color: blueviolet;\n}\n\nh2 {\n  text-align: center;\n  color: rebeccapurple;\n}\n\n#users {\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#users td, #users th {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n\n#users tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n#users tr:hover {\n  background-color: #ddd;\n}\n\n#users th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: blueviolet;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uc3VsdGVyLXRpdHJlLWZvbmNpZXItYWRtaW4vQzpcXFVzZXJzXFxIUFxcRnJvbnRPTlBGL3NyY1xcYXBwXFxjb25zdWx0ZXItdGl0cmUtZm9uY2llci1hZG1pblxcY29uc3VsdGVyLXRpdHJlLWZvbmNpZXItYWRtaW4ucGFnZS5zY3NzIiwic3JjL2FwcC9jb25zdWx0ZXItdGl0cmUtZm9uY2llci1hZG1pbi9jb25zdWx0ZXItdGl0cmUtZm9uY2llci1hZG1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FERUE7RUFFSSxrQkFBQTtFQUNBLG9CQUFBO0FDQUo7O0FER0E7RUFDSSx5REFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdFO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0U7RUFBMEIseUJBQUE7QUNDNUI7O0FEQ0U7RUFBaUIsc0JBQUE7QUNHbkI7O0FEREU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2NvbnN1bHRlci10aXRyZS1mb25jaWVyLWFkbWluL2NvbnN1bHRlci10aXRyZS1mb25jaWVyLWFkbWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibHVldmlvbGV0O1xyXG59XHJcbmgyXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZWJlY2NhcHVycGxlO1xyXG59XHJcblxyXG4jdXNlcnMge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gICN1c2VycyB0ZCwgI3VzZXJzIHRoIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gICN1c2VycyB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XHJcbiAgXHJcbiAgI3VzZXJzIHRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cclxuICBcclxuICAjdXNlcnMgdGgge1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH0iLCJoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsdWV2aW9sZXQ7XG59XG5cbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmViZWNjYXB1cnBsZTtcbn1cblxuI3VzZXJzIHtcbiAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jdXNlcnMgdGQsICN1c2VycyB0aCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuI3VzZXJzIHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG5cbiN1c2VycyB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbiN1c2VycyB0aCB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/consulter-titre-foncier-admin/consulter-titre-foncier-admin.page.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/consulter-titre-foncier-admin/consulter-titre-foncier-admin.page.ts ***!
    \*************************************************************************************/

  /*! exports provided: ConsulterTitreFoncierAdminPage */

  /***/
  function srcAppConsulterTitreFoncierAdminConsulterTitreFoncierAdminPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsulterTitreFoncierAdminPage", function () {
      return ConsulterTitreFoncierAdminPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_titreservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/titreservice.service */
    "./src/app/shared/titreservice.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    let ConsulterTitreFoncierAdminPage = class ConsulterTitreFoncierAdminPage {
      constructor(route, router, titreService, alertController) {
        this.route = route;
        this.router = router;
        this.titreService = titreService;
        this.alertController = alertController;
        this.titre = {};
      }

      ngOnInit() {}

      presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const alert = yield this.alertController.create({
            header: 'خطأ',
            message: '!رقم الرسم العقاري المذكور غير موجود',
            buttons: ['حسنا']
          });
          yield alert.present();
        });
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

    ConsulterTitreFoncierAdminPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _shared_titreservice_service__WEBPACK_IMPORTED_MODULE_3__["TitreserviceService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
    }];

    ConsulterTitreFoncierAdminPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-consulter-titre-foncier-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./consulter-titre-foncier-admin.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/consulter-titre-foncier-admin/consulter-titre-foncier-admin.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./consulter-titre-foncier-admin.page.scss */
      "./src/app/consulter-titre-foncier-admin/consulter-titre-foncier-admin.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_titreservice_service__WEBPACK_IMPORTED_MODULE_3__["TitreserviceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], ConsulterTitreFoncierAdminPage);
    /***/
  }
}]);
//# sourceMappingURL=consulter-titre-foncier-admin-consulter-titre-foncier-admin-module-es5.js.map