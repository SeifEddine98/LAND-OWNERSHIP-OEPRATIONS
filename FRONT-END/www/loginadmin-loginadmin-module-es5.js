(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loginadmin-loginadmin-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/loginadmin/loginadmin.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loginadmin/loginadmin.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginadminLoginadminPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title size=\"large\">\n      <div class=\"ion-text-end\">\n           تسجيل الدخول الإداري\n        <ion-icon name=\"log-in-outline\"></ion-icon>\n      </div>\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-card>\n    <ion-img src=\"{{contact2.authent}}\">      \n    </ion-img>\n  </ion-card> \n  <form #clientForm=\"ngForm\" (ngSubmit)=\"save(clientForm.value)\">\n    <ion-input type=\"hidden\" name=\"href\" [(ngModel)]=\"admin.href\">\n    </ion-input>\n    <ion-grid>\n      <ion-row class=\"ion-float-end\">\n        <ion-col class=\"ion-float-end\">\n          <div>  \n    <ion-item>\n      <ion-card>\n      <div class=\"ion-text-end\">    \n        <ion-input type=\"text\" name=\"login\" placeholder=\"اسم المستخدم\" [(ngModel)]=\"admin.login\" required #login></ion-input>\n  </div>\n</ion-card>\n  </ion-item>\n</div>\n</ion-col>\n</ion-row>\n<ion-row class=\"ion-float-end\">\n  <ion-col class=\"ion-float-end\">\n  <div>\n  <ion-item>\n    <ion-card>\n    <div class=\"ion-text-end\">   \n      <ion-input type=\"password\" name=\"password\" placeholder=\"كلمة السر\" [(ngModel)]=\"admin.password\" required #password></ion-input>\n    </div>\n</ion-card>\n  </ion-item>\n</div>\n</ion-col>\n</ion-row>\n</ion-grid>\n<ion-button type=\"submit\" expand=\"block\" [disabled]=\"!clientForm.form.valid\">تسجيل الدخول\n  <ion-icon name=\"log-in-outline\"></ion-icon>\n</ion-button>\n</form>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n\n  <ion-button expand=\"block\" [routerLink]=\"['/home']\">رجوع\n    <ion-icon name=\"arrow-back-outline\"></ion-icon>\n  </ion-button> \n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/loginadmin/loginadmin-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/loginadmin/loginadmin-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: LoginadminPageRoutingModule */

  /***/
  function srcAppLoginadminLoginadminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginadminPageRoutingModule", function () {
      return LoginadminPageRoutingModule;
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


    var _loginadmin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./loginadmin.page */
    "./src/app/loginadmin/loginadmin.page.ts");

    const routes = [{
      path: '',
      component: _loginadmin_page__WEBPACK_IMPORTED_MODULE_3__["LoginadminPage"]
    }];
    let LoginadminPageRoutingModule = class LoginadminPageRoutingModule {};
    LoginadminPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginadminPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/loginadmin/loginadmin.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/loginadmin/loginadmin.module.ts ***!
    \*************************************************/

  /*! exports provided: LoginadminPageModule */

  /***/
  function srcAppLoginadminLoginadminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginadminPageModule", function () {
      return LoginadminPageModule;
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


    var _loginadmin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./loginadmin-routing.module */
    "./src/app/loginadmin/loginadmin-routing.module.ts");
    /* harmony import */


    var _loginadmin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./loginadmin.page */
    "./src/app/loginadmin/loginadmin.page.ts");

    let LoginadminPageModule = class LoginadminPageModule {};
    LoginadminPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _loginadmin_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginadminPageRoutingModule"]],
      declarations: [_loginadmin_page__WEBPACK_IMPORTED_MODULE_6__["LoginadminPage"]]
    })], LoginadminPageModule);
    /***/
  },

  /***/
  "./src/app/loginadmin/loginadmin.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/loginadmin/loginadmin.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginadminLoginadminPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luYWRtaW4vbG9naW5hZG1pbi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/loginadmin/loginadmin.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/loginadmin/loginadmin.page.ts ***!
    \***********************************************/

  /*! exports provided: LoginadminPage */

  /***/
  function srcAppLoginadminLoginadminPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginadminPage", function () {
      return LoginadminPage;
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


    var _shared_administrateurservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/administrateurservice.service */
    "./src/app/shared/administrateurservice.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    let LoginadminPage = class LoginadminPage {
      constructor(route, router, adminService, alertController) {
        this.route = route;
        this.router = router;
        this.adminService = adminService;
        this.alertController = alertController;
        this.admin = {};
        this.contact2 = {
          authent: "assets/images/authent.jpg",
          authent2: "assets/images/authent2.jpg",
          authent3: "assets/images/log.jpg"
        };
      }

      ngOnInit() {}

      gotoList() {
        this.router.navigate(['/menuadmin']);
      }

      gotoList2() {
        this.router.navigate(['/home']);
      }

      presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const alert = yield this.alertController.create({
            header: 'خطأ',
            message: 'الرجاء التثبت من المعطيات المذكورة',
            buttons: ['إعادة المحاولة']
          });
          yield alert.present();
        });
      }

      save(form) {
        console.log(form);
        this.adminService.authent(form).subscribe(result => {
          console.log(result);

          if (result == 1) {
            this.gotoList();
          } else this.presentAlert();
        });
      }

    };

    LoginadminPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _shared_administrateurservice_service__WEBPACK_IMPORTED_MODULE_3__["AdministrateurserviceService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
    }];

    LoginadminPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loginadmin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loginadmin.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/loginadmin/loginadmin.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loginadmin.page.scss */
      "./src/app/loginadmin/loginadmin.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_administrateurservice_service__WEBPACK_IMPORTED_MODULE_3__["AdministrateurserviceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], LoginadminPage);
    /***/
  }
}]);
//# sourceMappingURL=loginadmin-loginadmin-module-es5.js.map