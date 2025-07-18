(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reclamation-reclamation-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reclamation/reclamation.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reclamation/reclamation.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReclamationReclamationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/menu\"></ion-back-button>\n    </ion-buttons>\n    <ion-title size=\"large\">\n      <div class=\"ion-text-end\">\n        الإعلام بحدوث خلل\n        <ion-icon name=\"bug-outline\"></ion-icon>    \n      </div>            \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        <div class=\"ion-text-center\">\n          الإعلام بحدوث خلل    \n        </div>\n        <br/>\n      </ion-card-title>\n      <div class=\"ion-text-center\">\n      من أجل الإعلام بحدوث خلل الرجاء منكم  ملء هذه الإستمارة بكل دقة\n      (سيتم إرسال إرسالية قصيرة على الرقم المذكور في الإستمارة)\n    </div>\n    </ion-card-header>\n    <div class=\"ion-text-center\">\n     (يتراوح أجل الإستجابة لطلبكم من 1ساعة إلى 48 ساعة)\n    </div>\n    <br/>\n    </ion-card>\n\n    <form #reclamationForm=\"ngForm\" (ngSubmit)=\"save(reclamationForm.value)\">\n      <ion-input type=\"hidden\" name=\"href\" [(ngModel)]=\"reclamation.href\">\n      </ion-input>\n      <ion-list>\n\n        <ion-item>\n          <ion-grid>\n        <ion-row class=\"ion-float-end\">\n          <ion-col class=\"ion-float-end\">\n            <div>  \n        <ion-item>\n        <ion-card>\n        <div class=\"ion-text-end\">    \n        <ion-input type=\"number\" \n        onKeyUp=\"if(this.value>99999999){this.value='';}else if(this.value<0){this.value='';}\"\n        id=\"yourid\" name=\"numtel\" placeholder=\"رقم الهاتف المحمول\" [(ngModel)]=\"reclamation.numtel\" required #numtel></ion-input>\n        </div>\n        </ion-card>\n        </ion-item>\n        </div>\n        </ion-col>\n        </ion-row>\n      </ion-grid>\n      </ion-item>\n      \n\n      <ion-item>\n      <ion-grid>\n        <ion-row class=\"ion-float-center\">\n          <ion-col class=\"ion-float-center\">\n             \n       \n          \n            <div class=\"ion-text-end\">\n              <ion-label> : نوع الخلل</ion-label>\n          <ion-select interface=\"action-sheet\" cancel-text=\"رجوع\" name=\"type\" [(ngModel)]=\"reclamation.type\" required #type>\n            <ion-select-option value=\"خطأ في الولوج إلى منصة الإطلاع على رسم عقاري\">\n               <div class=\"ion-text-center\">خطأ في الولوج إلى منصة الإطلاع على رسم عقاري</div>\n              </ion-select-option>\n            <ion-select-option value=\"خطأ في الولوج إلى منصة الإطلاع على ملخص العمليات\">\n              <div class=\"ion-text-end\">خطأ في الولوج إلى منصة الإطلاع على ملخص العمليات</div>\n              </ion-select-option>\n              <ion-select-option value=\"إقتطاع سعر إضافي على سعر العملية\">\n                <div class=\"ion-text-end\">إقتطاع سعر إضافي على سعر العملية</div>\n                </ion-select-option>\n                <ion-select-option value=\"عدم القدرة على الولوج إلى فضاء المواطن رغم وجود حساب\">\n                  <div class=\"ion-text-end\">عدم القدرة على الولوج إلى فضاء المواطن رغم وجود حساب</div>\n                  </ion-select-option>\n                  <ion-select-option value=\"رسم عقاري مسجل لكن غير موجود\">\n                    <div class=\"ion-text-end\">رسم عقاري مسجل لكن غير موجود</div>\n                    </ion-select-option>\n                    <ion-select-option value=\"خلل آخر\">\n                    <div class=\"ion-text-end\">خلل آخر</div>\n                    </ion-select-option>\n          </ion-select>\n        </div>    \n      \n      \n    \n  </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-item>\n\n<ion-item>\n<ion-grid>\n  <ion-row class=\"ion-float-end\">\n    <ion-col class=\"ion-float-end\">\n      <div>  \n  <ion-item>\n  <ion-card>\n  <div class=\"ion-text-end\">\n    <ion-textarea type=\"textarea\" maxlength=\"40\" name=\"description\" placeholder=\"الرجاء ذكر المعطيات الشخصية الخاصة بالخلل باختصار\" [(ngModel)]=\"reclamation.description\" required #description>   \n</ion-textarea> \n</div>\n  </ion-card>\n  </ion-item>\n  </div>\n  </ion-col>\n  </ion-row>\n  <br/>\n</ion-grid>\n</ion-item>\n  \n</ion-list>\n  <ion-button type=\"submit\" [disabled]=\"!reclamationForm.form.valid\" expand=\"block\">تأكيد\n    <ion-icon name=\"add-circle-outline\"></ion-icon>\n  </ion-button>\n  \n  </form>\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/reclamation/reclamation-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/reclamation/reclamation-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ReclamationPageRoutingModule */

  /***/
  function srcAppReclamationReclamationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReclamationPageRoutingModule", function () {
      return ReclamationPageRoutingModule;
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


    var _reclamation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reclamation.page */
    "./src/app/reclamation/reclamation.page.ts");

    const routes = [{
      path: '',
      component: _reclamation_page__WEBPACK_IMPORTED_MODULE_3__["ReclamationPage"]
    }];
    let ReclamationPageRoutingModule = class ReclamationPageRoutingModule {};
    ReclamationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ReclamationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/reclamation/reclamation.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/reclamation/reclamation.module.ts ***!
    \***************************************************/

  /*! exports provided: ReclamationPageModule */

  /***/
  function srcAppReclamationReclamationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReclamationPageModule", function () {
      return ReclamationPageModule;
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


    var _reclamation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./reclamation-routing.module */
    "./src/app/reclamation/reclamation-routing.module.ts");
    /* harmony import */


    var _reclamation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reclamation.page */
    "./src/app/reclamation/reclamation.page.ts");

    let ReclamationPageModule = class ReclamationPageModule {};
    ReclamationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _reclamation_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReclamationPageRoutingModule"]],
      declarations: [_reclamation_page__WEBPACK_IMPORTED_MODULE_6__["ReclamationPage"]]
    })], ReclamationPageModule);
    /***/
  },

  /***/
  "./src/app/reclamation/reclamation.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/reclamation/reclamation.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppReclamationReclamationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2xhbWF0aW9uL3JlY2xhbWF0aW9uLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/reclamation/reclamation.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/reclamation/reclamation.page.ts ***!
    \*************************************************/

  /*! exports provided: ReclamationPage */

  /***/
  function srcAppReclamationReclamationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReclamationPage", function () {
      return ReclamationPage;
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


    var _shared_reclamationservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/reclamationservice.service */
    "./src/app/shared/reclamationservice.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    let ReclamationPage = class ReclamationPage {
      constructor(route, router, reclamationService, alertController) {
        this.route = route;
        this.router = router;
        this.reclamationService = reclamationService;
        this.alertController = alertController;
        this.reclamation = {};
      }

      ngOnInit() {}

      gotoList() {
        this.router.navigate(['/menu']);
      }

      presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const alert = yield this.alertController.create({
            header: '! شكرا لتفاعلكم',
            message: 'رسالتكم سجلت ونحن بصدد الإستجابة، بكم نتطور',
            buttons: ['حسنا']
          });
          yield alert.present();
        });
      }

      save(form) {
        this.reclamationService.save(form).subscribe(result => {
          this.presentAlert();
          this.gotoList();
        }, error => console.error(error));
      }

    };

    ReclamationPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _shared_reclamationservice_service__WEBPACK_IMPORTED_MODULE_3__["ReclamationserviceService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
    }];

    ReclamationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reclamation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reclamation.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reclamation/reclamation.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reclamation.page.scss */
      "./src/app/reclamation/reclamation.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_reclamationservice_service__WEBPACK_IMPORTED_MODULE_3__["ReclamationserviceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], ReclamationPage);
    /***/
  }
}]);
//# sourceMappingURL=reclamation-reclamation-module-es5.js.map