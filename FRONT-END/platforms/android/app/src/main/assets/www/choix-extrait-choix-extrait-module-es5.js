(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["choix-extrait-choix-extrait-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/choix-extrait/choix-extrait.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/choix-extrait/choix-extrait.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChoixExtraitChoixExtraitPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/menu\"></ion-back-button>\n    </ion-buttons>\n    <ion-title size=\"large\">\n      <div class=\"ion-text-end\">\n        إستخلاص معاليم كشف الملخص           <ion-icon name=\"card-outline\"></ion-icon>\n              </div>\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        <div class=\"ion-text-center\">\n          سعر هذه العملية حدد ب2 دنانير \n        </div>\n      </ion-card-title>\n    </ion-card-header>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        <div class=\"ion-text-center\">\nالرجاء إختيار طريقة الدفع المستعملة في هذه العملية\n      </div>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-img src=\"{{imge.choix}}\">      \n    </ion-img>\n    </ion-card>\n  \n  <ion-list>\n    <ion-radio-group>\n\n      <ion-list-header>\n        <ion-label>\n          <div class=\"ion-text-center\">\n              : طريقة الدفع\n            </div>\n        </ion-label>\n      </ion-list-header>\n  \n      <ion-item>\n        <ion-label>\n          <div class=\"ion-text-end\"> بواسطة البطاقة البريدية  </div>\n        </ion-label>\n        <ion-radio slot=\"start\" checked=\"true\" ></ion-radio>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label>\n          <div class=\"ion-text-end\">  بواسطة البطاقة البنكية </div>\n        </ion-label>\n        <ion-radio slot=\"start\"></ion-radio>\n      </ion-item>\n  \n      </ion-radio-group>\n  </ion-list>\n  <ion-button expand=\"block\" [routerLink]=\"['/paiement-extrait']\">تأكيد\n    <ion-icon name=\"log-in-outline\"></ion-icon>\n  </ion-button> \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/choix-extrait/choix-extrait-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/choix-extrait/choix-extrait-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: ChoixExtraitPageRoutingModule */

  /***/
  function srcAppChoixExtraitChoixExtraitRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChoixExtraitPageRoutingModule", function () {
      return ChoixExtraitPageRoutingModule;
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


    var _choix_extrait_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./choix-extrait.page */
    "./src/app/choix-extrait/choix-extrait.page.ts");

    const routes = [{
      path: '',
      component: _choix_extrait_page__WEBPACK_IMPORTED_MODULE_3__["ChoixExtraitPage"]
    }];
    let ChoixExtraitPageRoutingModule = class ChoixExtraitPageRoutingModule {};
    ChoixExtraitPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChoixExtraitPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/choix-extrait/choix-extrait.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/choix-extrait/choix-extrait.module.ts ***!
    \*******************************************************/

  /*! exports provided: ChoixExtraitPageModule */

  /***/
  function srcAppChoixExtraitChoixExtraitModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChoixExtraitPageModule", function () {
      return ChoixExtraitPageModule;
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


    var _choix_extrait_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./choix-extrait-routing.module */
    "./src/app/choix-extrait/choix-extrait-routing.module.ts");
    /* harmony import */


    var _choix_extrait_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./choix-extrait.page */
    "./src/app/choix-extrait/choix-extrait.page.ts");

    let ChoixExtraitPageModule = class ChoixExtraitPageModule {};
    ChoixExtraitPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _choix_extrait_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChoixExtraitPageRoutingModule"]],
      declarations: [_choix_extrait_page__WEBPACK_IMPORTED_MODULE_6__["ChoixExtraitPage"]]
    })], ChoixExtraitPageModule);
    /***/
  },

  /***/
  "./src/app/choix-extrait/choix-extrait.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/choix-extrait/choix-extrait.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChoixExtraitChoixExtraitPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nob2l4LWV4dHJhaXQvY2hvaXgtZXh0cmFpdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/choix-extrait/choix-extrait.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/choix-extrait/choix-extrait.page.ts ***!
    \*****************************************************/

  /*! exports provided: ChoixExtraitPage */

  /***/
  function srcAppChoixExtraitChoixExtraitPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChoixExtraitPage", function () {
      return ChoixExtraitPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ChoixExtraitPage = class ChoixExtraitPage {
      constructor() {
        this.imge = {
          choix: "assets/images/choix.png"
        };
      }

      ngOnInit() {}

    };
    ChoixExtraitPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-choix-extrait',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./choix-extrait.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/choix-extrait/choix-extrait.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./choix-extrait.page.scss */
      "./src/app/choix-extrait/choix-extrait.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ChoixExtraitPage);
    /***/
  }
}]);
//# sourceMappingURL=choix-extrait-choix-extrait-module-es5.js.map