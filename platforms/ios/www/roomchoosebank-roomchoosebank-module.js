(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roomchoosebank-roomchoosebank-module"],{

/***/ "./src/app/roomchoosebank/roomchoosebank.html":
/*!****************************************************!*\
  !*** ./src/app/roomchoosebank/roomchoosebank.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the RoomchoosebankPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -7px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thanh toán</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <img src=\"./assets/step/step_3.svg\">\n  <!-- Thanh toán bằng thẻ đã lưu -->\n  <div *ngIf=\"arrbankrmb.length>0\" class=\"mt16\">\n    <ion-label class=\"text-option\">Thanh toán bằng thẻ đã lưu</ion-label>\n    <div *ngFor=\"let item of arrbankrmb\" class=\"div-border\">\n      <div class=\"div-flex\">\n        <!-- <ion-radio  [checked]=\"item.checked\" (click)=\"checkacc(item)\"></ion-radio> -->\n        <div class=\"mt28\">\n          <ion-checkbox class=\"ml18\" [checked]=\"item.checked\" (ionChange)=\"checkacc(item,$event)\"></ion-checkbox>\n        </div>\n        <div>\n          <img class=\"ml12\" class=\"img1\" src={{item.imgbank}}>\n        </div>\n      </div>\n        <div class=\"div-2\">\n          <ion-label class=\"text-infobank\"><span style=\"vertical-align: middle;\"> •••• •••• ••••</span>\n            {{item.vpc_CardNum}}</ion-label>\n          <ion-label class=\"text-infobank\">{{item.name_Bank}}</ion-label>\n        </div>\n      </div>\n\n    </div>\n    <!-- Hoặc chọn ngân hàng khác -->\n    <div class=\"mt24\">\n      <ion-label *ngIf=\"arrbankrmb.length>0\" class=\"text-option\">Hoặc chọn ngân hàng khác</ion-label>\n      <ion-grid>\n        <ion-row style=\"margin-left: -10px\">\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970407')\" [class.active]=\"id=='970407' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970407.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970423')\" [class.active]=\"id=='970423' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970423.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970415')\" [class.active]=\"id=='970415' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970415.png\">\n\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970441')\" [class.active]=\"id=='970441' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970441.png\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid>\n        <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970427')\" [class.active]=\"id=='970427' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970427.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970426')\" [class.active]=\"id=='970426' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970426.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970431')\" [class.active]=\"id=='970431' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970431.png\">\n\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970443')\" [class.active]=\"id=='970443' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970443.png\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid>\n        <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970437')\" [class.active]=\"id=='970437' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970437.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970436')\" [class.active]=\"id=='970436' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970436.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970406')\" [class.active]=\"id=='970406' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970406.png\">\n\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970422')\" [class.active]=\"id=='970422' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970422.png\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid>\n        <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970428')\" [class.active]=\"id=='970428' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970428.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970440')\" [class.active]=\"id=='970440' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970440.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970414')\" [class.active]=\"id=='970414' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970414.png\">\n\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970418')\" [class.active]=\"id=='970418' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970418.png\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid>\n        <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970409')\" [class.active]=\"id=='970409' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970409.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970432')\" [class.active]=\"id=='970432' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970432.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970419')\" [class.active]=\"id=='970419' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970419.png\">\n\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970405')\" [class.active]=\"id=='970405' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970405.png\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid>\n        <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970429')\" [class.active]=\"id=='970429' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970429.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970403')\" [class.active]=\"id=='970403' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970403.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970425')\" [class.active]=\"id=='970425' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970425.png\">\n\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970412')\" [class.active]=\"id=='970412' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970412.png\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid>\n        <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970454')\" [class.active]=\"id=='970454' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970454.png\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div *ngIf=\"isshowRemember\" style=\"margin-top: 22px\">\n      <ion-checkbox (ionChange)=\"rememberCard()\" [disabled]=\"isdisable\" class=\"ion-checkbox\" checked=\"isremember\" color=\"secondary\"></ion-checkbox>\n      <ion-label class=\"label-input\" >Lưu và bảo mật thẻ để đặt dịch vụ nhanh hơn lần sau</ion-label>\n    </div>\n  <!-- <ion-row>\n      <ion-col size=\"1\">\n          <ion-checkbox color=\"secondary\" (ionChange)=\"edit()\" [(ngModel)]=\"ischeck\"></ion-checkbox>\n        </ion-col>\n        <ion-col size=\"11\" *ngIf=\"ischecktext\">\n          <ion-label text-wrap>Tôi đồng ý các\n            <a style=\"color: #26bed6\"\n              href=\"https://www.ivivu.com/dieu-kien-dieu-khoan#_ga=2.57476458.1764320674.1515981153-1221826856.1508314634&amp;_gac=1.220489260.1514193346.EAIaIQobChMIt66T4Omk2AIV0UQrCh1dIwosEAEYASAAEgI48PD_BwE\"\n              target=\"_blank\">điều khoản</a> đặt phòng và hủy phòng của khách sạn và iVIVU.com</ion-label>\n        </ion-col>\n        <ion-col size=\"11\" *ngIf=\"!ischecktext\">\n          <ion-label style=\"color: red\" text-wrap>Tôi đồng ý các\n            <a style=\"color: #26bed6\"\n              href=\"https://www.ivivu.com/dieu-kien-dieu-khoan#_ga=2.57476458.1764320674.1515981153-1221826856.1508314634&amp;_gac=1.220489260.1514193346.EAIaIQobChMIt66T4Omk2AIV0UQrCh1dIwosEAEYASAAEgI48PD_BwE\"\n              target=\"_blank\">điều khoản</a> đặt phòng và hủy phòng của khách sạn và iVIVU.com</ion-label>\n        </ion-col>\n  </ion-row> -->\n</ion-content>\n<ion-footer>\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline class=\"button button2\">Thanh toán và đặt phòng\n      ngay</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/roomchoosebank/roomchoosebank.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/roomchoosebank/roomchoosebank.module.ts ***!
  \*********************************************************/
/*! exports provided: RoomchoosebankPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomchoosebankPageModule", function() { return RoomchoosebankPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _roomchoosebank__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roomchoosebank */ "./src/app/roomchoosebank/roomchoosebank.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let RoomchoosebankPageModule = class RoomchoosebankPageModule {
};
RoomchoosebankPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _roomchoosebank__WEBPACK_IMPORTED_MODULE_5__["RoomchoosebankPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _roomchoosebank__WEBPACK_IMPORTED_MODULE_5__["RoomchoosebankPage"]
                }
            ])
        ],
    })
], RoomchoosebankPageModule);



/***/ }),

/***/ "./src/app/roomchoosebank/roomchoosebank.scss":
/*!****************************************************!*\
  !*** ./src/app/roomchoosebank/roomchoosebank.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n}\n\n.img.active {\n  border: 3px solid #23BFD8;\n}\n\n.img {\n  border: 1px solid #CCCCCC;\n  height: 100%;\n  width: 100%;\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\n\n.grid {\n  padding: 0px;\n}\n\n.ion-item {\n  --padding-start: 0px;\n  --inner-border-width: 0 0 0px 0;\n  width: 108%;\n}\n\n.text-option {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #4f4f4f;\n}\n\n.chkbox {\n  margin-left: 18px;\n}\n\n.div-border {\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);\n  border: solid 0.5px #26bed6;\n  display: flex;\n  height: 74px;\n  border-radius: 4px;\n  margin-top: 8px;\n}\n\n.img1 {\n  width: 77px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-left: 12px;\n  margin-top: 16px;\n}\n\n.div-flex {\n  display: flex;\n}\n\n.ml18 {\n  margin-left: 18px;\n  width: 18px;\n  height: 18px;\n  --border-radius: 24px;\n  --border-width: 0.5px;\n}\n\n.ml12 {\n  margin-left: 12px;\n}\n\n.div-2 {\n  display: grid;\n  margin-top: 16px;\n  margin-left: 13px;\n  margin-bottom: 16px;\n}\n\n.mt29 {\n  margin-top: 29px;\n}\n\n.mt16 {\n  margin-top: 16px;\n}\n\n.text-infobank {\n  font-size: 16px;\n  font-weight: 300;\n  letter-spacing: -0.46px;\n  color: #000000;\n}\n\n.mt28 {\n  margin-top: 28px;\n}\n\n.mt10 {\n  margin-top: 10px;\n}\n\n.top5 {\n  top: 5px;\n}\n\n.mt24 {\n  margin-top: 24px;\n}\n\n.label-input {\n  font-size: 13px;\n  font-weight: 300;\n  color: #000000;\n  margin-left: 5px;\n}\n\n.ion-checkbox {\n  width: 16px;\n  height: 16px;\n  margin: -2px;\n}\n\n.text-center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfbmV3IDA5MTEyMDIxL3NyYy9hcHAvcm9vbWNob29zZWJhbmsvcm9vbWNob29zZWJhbmsuc2NzcyIsInNyYy9hcHAvcm9vbWNob29zZWJhbmsvcm9vbWNob29zZWJhbmsuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNBUjs7QURFSTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQ0FSOztBREVJO0VBRUkseUJBQUE7QUNBUjs7QURFSTtFQUVJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO0FDQVI7O0FERUk7RUFDSSxZQUFBO0FDQ1I7O0FEQ0k7RUFFRSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtBQ0NOOztBRENJO0VBRUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNDUjs7QURDSTtFQUVJLGlCQUFBO0FDQ1I7O0FEQ0k7RUFFSSwyQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDUjs7QURDSTtFQUVJLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NSOztBRENJO0VBRUksYUFBQTtBQ0NSOztBRENJO0VBRUksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUNDUjs7QURDSTtFQUVJLGlCQUFBO0FDQ1I7O0FEQ0k7RUFFSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQ1I7O0FEQ0k7RUFFSSxnQkFBQTtBQ0NSOztBRENJO0VBRUksZ0JBQUE7QUNDUjs7QURDSTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0NSOztBRENJO0VBRUksZ0JBQUE7QUNDUjs7QURDSTtFQUVJLGdCQUFBO0FDQ1I7O0FEQ0k7RUFFSSxRQUFBO0FDQ1I7O0FEQ0k7RUFFSSxnQkFBQTtBQ0NSOztBRENJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRVI7O0FEQU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNHUjs7QURETTtFQUVJLGtCQUFBO0FDR1YiLCJmaWxlIjoic3JjL2FwcC9yb29tY2hvb3NlYmFuay9yb29tY2hvb3NlYmFuay5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLnRvb2xiYXItdGl0bGUtbWQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNzBweDtcbiAgICB9IFxuICAgIC5idXR0b24yXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgIH0gXG4gICAgLmltZy5hY3RpdmVcbiAgICB7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICMyM0JGRDg7XG4gICAgfVxuICAgIC5pbWdcbiAgICB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG4gICAgfVxuICAgIC5ncmlkIHtcbiAgICAgICAgcGFkZGluZzogMHB4XG4gICAgfVxuICAgIC5pb24taXRlbVxuICAgIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgICAgIHdpZHRoOiAxMDglO1xuICAgIH1cbiAgICAudGV4dC1vcHRpb25cbiAgICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XG4gICAgICAgIGNvbG9yOiAjNGY0ZjRmO1xuICAgIH1cbiAgICAuY2hrYm94XG4gICAge1xuICAgICAgICBtYXJnaW4tbGVmdDogMThweDtcbiAgICB9XG4gICAgLmRpdi1ib3JkZXJcbiAgICB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgICAgIGJvcmRlcjogc29saWQgMC41cHggIzI2YmVkNjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiA3NHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICB9XG4gICAgLmltZzFcbiAgICB7XG4gICAgICAgIHdpZHRoOiA3N3B4O1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuICAgIC5kaXYtZmxleFxuICAgIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgLm1sMThcbiAgICB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICAgICAgICB3aWR0aDogMThweDsgXG4gICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgICAgICAtLWJvcmRlci13aWR0aDogMC41cHg7XG4gICAgfVxuICAgIC5tbDEyXG4gICAge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICB9XG4gICAgLmRpdi0yXG4gICAge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTNweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG4gICAgLm10MjlcbiAgICB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI5cHg7XG4gICAgfVxuICAgIC5tdDE2XG4gICAge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cbiAgICAudGV4dC1pbmZvYmFua1xuICAgIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNDZweDtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgfVxuICAgIC5tdDI4XG4gICAge1xuICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xuICAgIH1cbiAgICAubXQxMFxuICAgIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG4gICAgLnRvcDVcbiAgICB7XG4gICAgICAgIHRvcDo1cHhcbiAgICB9XG4gICAgLm10MjRcbiAgICB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuICAgIC5sYWJlbC1pbnB1dHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgIH1cbiAgICAgIC5pb24tY2hlY2tib3h7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIG1hcmdpbjogLTJweDtcbiAgICAgIH1cbiAgICAgIC50ZXh0LWNlbnRlclxuICAgICAge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuXG5cbiIsIi50b29sYmFyLXRpdGxlLW1kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG59XG5cbi5idXR0b24yIHtcbiAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmltZy5hY3RpdmUge1xuICBib3JkZXI6IDNweCBzb2xpZCAjMjNCRkQ4O1xufVxuXG4uaW1nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbn1cblxuLmdyaWQge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICB3aWR0aDogMTA4JTtcbn1cblxuLnRleHQtb3B0aW9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG59XG5cbi5jaGtib3gge1xuICBtYXJnaW4tbGVmdDogMThweDtcbn1cblxuLmRpdi1ib3JkZXIge1xuICBib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBib3JkZXI6IHNvbGlkIDAuNXB4ICMyNmJlZDY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNzRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5pbWcxIHtcbiAgd2lkdGg6IDc3cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmRpdi1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm1sMTgge1xuICBtYXJnaW4tbGVmdDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAyNHB4O1xuICAtLWJvcmRlci13aWR0aDogMC41cHg7XG59XG5cbi5tbDEyIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG5cbi5kaXYtMiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ubXQyOSB7XG4gIG1hcmdpbi10b3A6IDI5cHg7XG59XG5cbi5tdDE2IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLnRleHQtaW5mb2Jhbmsge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40NnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLm10Mjgge1xuICBtYXJnaW4tdG9wOiAyOHB4O1xufVxuXG4ubXQxMCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50b3A1IHtcbiAgdG9wOiA1cHg7XG59XG5cbi5tdDI0IHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cblxuLmxhYmVsLWlucHV0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmlvbi1jaGVja2JveCB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbjogLTJweDtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/roomchoosebank/roomchoosebank.ts":
/*!**************************************************!*\
  !*** ./src/app/roomchoosebank/roomchoosebank.ts ***!
  \**************************************************/
/*! exports provided: RoomchoosebankPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomchoosebankPage", function() { return RoomchoosebankPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");













let RoomchoosebankPage = class RoomchoosebankPage {
    constructor(navCtrl, toastCtrl, booking, iab, alertCtrl, Roomif, storage, zone, searchhotel, loadingCtrl, platform, gf, bookCombo, safariViewController, activatedRoute, activityService) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.booking = booking;
        this.iab = iab;
        this.alertCtrl = alertCtrl;
        this.Roomif = Roomif;
        this.storage = storage;
        this.zone = zone;
        this.searchhotel = searchhotel;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.gf = gf;
        this.bookCombo = bookCombo;
        this.safariViewController = safariViewController;
        this.activatedRoute = activatedRoute;
        this.activityService = activityService;
        this.ischecktext = true;
        this.auth_token = '';
        this.arrbankrmb = [];
        this.totalPrice = 0;
        this.isckb = false;
        this.bankid = "";
        this.isremember = true;
        this.isdisable = false;
        this.isshowRemember = false;
        gf.googleAnalytion('roomchoosebank', 'load', '');
    }
    ngOnInit() {
        this.stt = this.activatedRoute.snapshot.paramMap.get('stt');
        if (this.stt == 0) {
            this.indexme = this.booking.indexmealtype;
            this.indexroom = this.booking.indexroom;
            this.jsonroom = this.Roomif.jsonroom;
            this.room = this.Roomif.arrroom;
            this.searchhotel.rootPage = "roomchoosebank";
            this.roomtype = this.Roomif.roomtype;
            this.PriceAvgPlusTAStr = this.roomtype.PriceAvgPlusTAStr;
            if (this.Roomif.priceshow) {
                this.priceshow = this.Roomif.priceshow;
            }
            else {
                this.priceshow = this.PriceAvgPlusTAStr;
            }
        }
        else {
            this.Roomif.phone = this.activityService.objPaymentMytrip.trip.cus_phone;
            this.bookingCode = this.activityService.objPaymentMytrip.trip.booking_id;
            this.priceshow = this.activityService.objPaymentMytrip.trip.priceShow;
        }
        this.totalPrice = this.priceshow.toString().replace(/\./g, '').replace(/\,/g, '');
    }
    ionViewWillEnter() {
        this.storage.get('auth_token').then(auth_token => {
            this.auth_token = auth_token;
        });
        this.storage.get('jti').then(jti => {
            if (jti) {
                this.jti = jti;
                this.isshowRemember = true;
                this.isremember = false;
                this.GeTokensOfMember();
            }
        });
    }
    next() {
        this.TokenId = "";
        this.bankid = "";
        this.arrbankrmb.forEach(element => {
            if (element.checked) {
                this.TokenId = element.id;
                this.bankid = element.vpc_Card;
            }
        });
        this.checkBank();
    }
    checkBank() {
        if (this.TokenId) {
            this.presentLoading();
            if (this.bookingCode) {
                this.CreateUrlOnePay(this.bankid);
            }
            else {
                this.CreateBookingRoom(this.bankid);
            }
        }
        else {
            if (this.id) {
                this.presentLoading();
                if (this.bookingCode) {
                    this.CreateUrlOnePay(this.id);
                }
                else {
                    this.CreateBookingRoom(this.id);
                }
            }
            else {
                this.presentToast();
            }
        }
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: "Xin chọn 1 ngân hàng",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    openWebpage(url) {
        var se = this;
        this.safariViewController.isAvailable()
            .then((available) => {
            if (available) {
                this.safariViewController.show({
                    url: url,
                    hidden: false,
                    animated: false,
                    transition: 'curl',
                    enterReaderModeIfAvailable: true,
                    tintColor: '#23BFD8'
                })
                    .subscribe((result) => {
                    if (result.event === 'opened')
                        console.log('Opened');
                    else if (result.event === 'loaded')
                        console.log('Loaded');
                    else if (result.event === 'closed') {
                        if (se.loader) {
                            se.loader.dismiss();
                        }
                        if (se.Roomif.point && se.bookingCode) {
                            se.Roomif.bookingCode = se.bookingCode;
                            se.showInfo("Điểm tích luỹ " + se.Roomif.point + " đã được dùng cho booking " + se.bookingCode + ".Xin vui lòng thao tác lại booking!");
                        }
                        if (se.Roomif.promocode && se.bookingCode) {
                            se.Roomif.bookingCode = se.bookingCode;
                            se.showInfo("Mã giảm giá " + se.Roomif.promocode + " đã được dùng cho booking " + se.bookingCode + ".Xin vui lòng thao tác lại booking!");
                        }
                    }
                    clearInterval(se.intervalID);
                    this.intervalID = setInterval(() => {
                        this.checkPayment();
                    }, 1000 * 1);
                    setTimeout(() => {
                        clearInterval(this.intervalID);
                    }, 60000 * 15);
                }, (error) => console.error(error));
            }
            else {
            }
        });
    }
    clearClonePage(pagename) {
        let elements = [];
        elements = Array.from(document.querySelectorAll(pagename));
        if (elements != null && elements.length > 0) {
            elements.forEach(el => {
                if (el != null && el.length > 0) {
                    el.remove();
                }
            });
        }
    }
    clickitem(id) {
        this.zone.run(() => {
            this.id = id;
            this.TokenId = "";
            this.isdisable = false;
            this.arrbankrmb.forEach(element => {
                element.checked = false;
            });
        });
    }
    ionViewDidLoad() {
    }
    edit() {
        this.zone.run(() => {
            if (this.ischeck) {
                this.ischecktext = true;
            }
            else {
                this.ischecktext = false;
            }
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({});
            this.loader.present();
        });
    }
    goback() {
        if ((this.Roomif.point && this.bookingCode) || (this.Roomif.promocode && this.bookingCode)) {
            this.Roomif.promocode = "";
            this.navCtrl.navigateBack('/roomdetailreview');
        }
        else {
            this.navCtrl.back();
        }
    }
    presentToastr(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: msg,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    checkacc(item, ev) {
        var se = this;
        if (ev.target.checked) {
            se.arrbankrmb.forEach(element => {
                element.checked = false;
            });
            item.checked = true;
            this.isdisable = true;
            this.isremember = true;
            this.id = "";
        }
        else {
            item.checked = false;
            ev.target.checked = false;
            ev.target.classList.remove("radio-checked");
        }
    }
    CreateUrlOnePay(bankid) {
        var se = this;
        se.gf.CheckPaymentDate(this.bookingCode).then(data => {
            data = JSON.parse(data);
            var timestamp = new Date();
            var temptime = timestamp.setTime(timestamp.getTime() + 15 * 60 * 1000);
            var paymentTime = moment__WEBPACK_IMPORTED_MODULE_9__(temptime).format('YYYYMMDDHHmmss');
            var paymentDate = moment__WEBPACK_IMPORTED_MODULE_9__(data.booking.DeliveryPaymentDate).format('YYYYMMDDHHmmss');
            if (paymentTime < paymentDate) {
                var url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=atm&source=app&amount=' + this.totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' + this.Roomif.phone + '&memberId=' + se.jti + '&BankId=' + bankid + '&TokenId=' + this.TokenId + '&rememberToken=' + se.isremember + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
                this.gf.CreateUrl(url).then(datapayoo => {
                    if (datapayoo) {
                        datapayoo = JSON.parse(datapayoo);
                        if (se.loader) {
                            se.loader.dismiss();
                        }
                        se.openWebpage(datapayoo.returnUrl);
                    }
                    else {
                        if (se.loader) {
                            se.loader.dismiss();
                        }
                    }
                });
            }
            else {
                if (se.loader) {
                    se.loader.dismiss();
                }
                alert('Đã hết phòng, vui lòng chọn phòng khác');
                se.navCtrl.navigateBack('/hoteldetail/' + se.booking.HotelId);
            }
        });
    }
    CreateBookingRoom(bankid) {
        var Invoice = 0;
        var se = this;
        this.timestamp = Date.now();
        this.jsonroom.RoomClasses = this.room;
        if (this.Roomif.order) {
            Invoice = 1;
        }
        return new Promise((resolve, reject) => {
            var options = {
                method: 'POST',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlPost + '/mInsertBooking',
                timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                headers: {
                    'content-type': 'application/json'
                },
                body: {
                    RoomClassObj: this.jsonroom.RoomClasses[0].ListObjRoomClass,
                    CName: this.Roomif.hoten,
                    CEmail: this.booking.CEmail,
                    CPhone: this.Roomif.phone,
                    timestamp: this.timestamp,
                    HotelID: this.booking.HotelId,
                    paymentMethod: "0",
                    note: this.Roomif.notetotal,
                    source: '6',
                    MemberToken: this.auth_token,
                    Customers: this.Roomif.arrcustomer,
                    UsePointPrice: this.Roomif.pricepoint,
                    NoteCorp: this.Roomif.order,
                    Invoice: Invoice,
                    UserPoints: this.Roomif.point,
                    CheckInDate: this.jsonroom.CheckInDate,
                    CheckOutDate: this.jsonroom.CheckOutDate,
                    TotalNight: this.jsonroom.TotalNight,
                    MealTypeIndex: this.booking.indexmealtype,
                    CompanyName: this.Roomif.companyname,
                    CompanyAddress: this.Roomif.address,
                    CompanyTaxCode: this.Roomif.tax,
                    BillingAddress: this.Roomif.addressorder,
                    promotionCode: this.Roomif.promocode,
                    comboid: this.bookCombo.ComboId,
                    PenaltyDescription: this.Roomif.textcancel,
                    companycontactname: this.Roomif.nameOrder
                },
                json: true
            };
            requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                if (response.statusCode != 200) {
                    var objError = {
                        page: "roompaymentselect",
                        func: "roompaymentvisa",
                        message: response.statusMessage,
                        content: response.body,
                        type: "warning",
                        param: JSON.stringify(options)
                    };
                    _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(objError, response);
                }
                if (error) {
                    error.page = "roompaymentselect";
                    error.func = "roompaymentvisa";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(error, response);
                }
                ;
                if (body.error == 0) {
                    se.bookingCode = body.code;
                    se.Roomif.bookingCode = body.code;
                    if (se.roomtype.Supplier == 'EAN') {
                        se.gf.checkroomEAN(se.bookingCode).then(data => {
                            if (data == '0') {
                                se.CreateUrlOnePay(bankid);
                            }
                            else {
                                if (se.loader) {
                                    se.loader.dismiss();
                                }
                                alert('Đã hết phòng, vui lòng chọn phòng khác');
                                se.navCtrl.navigateBack('/hoteldetail/' + se.booking.HotelId);
                            }
                        });
                    }
                    else {
                        se.CreateUrlOnePay(bankid);
                    }
                }
                else {
                    if (se.loader) {
                        se.loader.dismiss();
                    }
                    alert(body.Msg);
                    if (se.Roomif.point && se.Roomif.bookingCode) {
                        se.navCtrl.navigateBack('/roomdetailreview');
                    }
                    if (se.Roomif.promocode && se.Roomif.bookingCode) {
                        se.navCtrl.navigateBack('/roomdetailreview');
                    }
                }
            });
        });
    }
    checkPayment() {
        var se = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlPost + '/mCheckBooking',
            qs: { code: se.bookingCode },
            headers: {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "roompaymentselect",
                    func: "openWebpage",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    para: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "roompaymentselect";
                error.func = "openWebpage";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(error, response);
            }
            ;
            if (body) {
                var rs = JSON.parse(body);
                if (rs.StatusBooking == 3) {
                    var id = rs.BookingCode;
                    var total = se.priceshow;
                    se.Roomif.priceshowtt = se.priceshow;
                    var ischeck = '0';
                    se.clearClonePage('page-roompaymentdone');
                    se.safariViewController.hide();
                    clearInterval(se.intervalID);
                    se.navCtrl.navigateForward('/roompaymentdoneean/' + id + '/' + total + '/' + ischeck);
                }
                else if (rs.StatusBooking == 9 || rs.StatusBooking == 2) {
                    clearInterval(se.intervalID);
                    se.safariViewController.hide();
                    if (se.Roomif.point && se.bookingCode) {
                        se.showInfo("Điểm tích luỹ " + se.Roomif.point + " đã được dùng cho booking " + se.bookingCode + ".Xin vui lòng thao tác lại booking!");
                    }
                    if (se.Roomif.promocode && se.bookingCode) {
                        se.showInfo("Mã giảm giá " + se.Roomif.promocode + " đã được dùng cho booking " + se.bookingCode + ".Xin vui lòng thao tác lại booking!");
                    }
                }
            }
            else {
                error.page = "roompaymentselect";
                error.func = "openWebpage";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(error, response);
                se.loader.dismiss();
                alert("Đã có sự cố xảy ra, vui lòng thử lại!");
            }
        });
    }
    GeTokensOfMember() {
        var se = this;
        se.gf.GeTokensOfMember(se.jti).then(dataTokens => {
            if (dataTokens) {
                dataTokens = JSON.parse(dataTokens);
                if (dataTokens.tokens.length > 0) {
                    for (let i = 0; i < dataTokens.tokens.length; i++) {
                        if (dataTokens.tokens[i].vpc_Card != 'VC' && dataTokens.tokens[i].vpc_Card != 'MC' && dataTokens.tokens[i].vpc_Card != 'JC' && dataTokens.tokens[i].vpc_Card != 'AE') {
                            var vpc_CardNum = dataTokens.tokens[i].vpc_CardNum.split('xxx');
                            vpc_CardNum = vpc_CardNum[1];
                            var name_Bank = this.getnameBank(dataTokens.tokens[i].vpc_Card);
                            var item = { id: dataTokens.tokens[i].id, imgbank: 'https://res.ivivu.com/payment/img/onepay/' + dataTokens.tokens[i].vpc_Card + '.png', vpc_CardNum: vpc_CardNum, name_Bank: name_Bank, checked: false, vpc_Card: dataTokens.tokens[i].vpc_Card };
                            this.arrbankrmb.push(item);
                        }
                    }
                    if (this.arrbankrmb.length > 0) {
                        this.arrbankrmb[0].checked = true;
                        this.isdisable = true;
                        this.TokenId = this.arrbankrmb[0].id;
                    }
                }
            }
        });
    }
    getnameBank(text) {
        var cardStr = "";
        switch (text) {
            case "970436":
                cardStr = "VietcomBank";
                break;
            case "970412":
                cardStr = "VRBank";
                break;
            case "970407":
                cardStr = "TechcomBank";
                break;
            case "970423":
                cardStr = "TienPhongBank";
                break;
            case "970415":
                cardStr = "ViettinBank";
                break;
            case "970441":
                cardStr = "VIB";
                break;
            case "970406":
                cardStr = "DongABank";
                break;
            case "970437":
                cardStr = "HDBank";
                break;
            case "970422":
                cardStr = "MB";
                break;
            case "970427":
                cardStr = "VietABank";
                break;
            case "970426":
                cardStr = "MaritimeBank";
                break;
            case "970431":
                cardStr = "EximBank";
                break;
            case "970443":
                cardStr = "SHB";
                break;
            case "970432":
                cardStr = "VPBank";
                break;
            case "970425":
                cardStr = "AnBinhBank";
                break;
            case "970403":
                cardStr = "SacomBank";
                break;
            case "970428":
                cardStr = "NamABank";
                break;
            case "970414":
                cardStr = "OceanBank";
                break;
            case "970418":
                cardStr = "BIDV";
                break;
            case "970440":
                cardStr = "SeaBank";
                break;
            case "970409":
                cardStr = "BacABank";
                break;
            case "970419":
                cardStr = "NaviBank";
                break;
            case "970405":
                cardStr = "AgriBank";
                break;
            case "970429":
                cardStr = "SaigonBank";
                break;
            case "970454":
                cardStr = "VietCapital";
                break;
            default:
                break;
        }
        return cardStr;
    }
    rememberCard() {
        this.isremember = !this.isremember;
    }
    showInfo(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: "Thông báo",
                message: msg,
                buttons: [{
                        text: 'OK',
                        role: 'OK',
                        handler: () => {
                            alert.dismiss();
                            this.Roomif.promocode = "";
                            this.navCtrl.navigateForward('/roomdetailreview');
                        }
                    }
                ]
            });
            alert.present();
        });
    }
};
RoomchoosebankPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-roomchoosebank',
        template: __webpack_require__(/*! ./roomchoosebank.html */ "./src/app/roomchoosebank/roomchoosebank.html"),
        styles: [__webpack_require__(/*! ./roomchoosebank.scss */ "./src/app/roomchoosebank/roomchoosebank.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Booking"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["RoomInfo"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["SearchHotel"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_8__["GlobalFunction"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Bookcombo"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_10__["SafariViewController"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_8__["ActivityService"]])
], RoomchoosebankPage);



/***/ })

}]);
//# sourceMappingURL=roomchoosebank-roomchoosebank-module.js.map