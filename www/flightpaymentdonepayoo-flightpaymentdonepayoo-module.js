(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightpaymentdonepayoo-flightpaymentdonepayoo-module"],{

/***/ "./src/app/flightpaymentdonepayoo/flightpaymentdonepayoo.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/flightpaymentdonepayoo/flightpaymentdonepayoo.module.ts ***!
  \*************************************************************************/
/*! exports provided: FlightpaymentdonepayooPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightpaymentdonepayooPageModule", function() { return FlightpaymentdonepayooPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightpaymentdonepayoo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightpaymentdonepayoo.page */ "./src/app/flightpaymentdonepayoo/flightpaymentdonepayoo.page.ts");







const routes = [
    {
        path: '',
        component: _flightpaymentdonepayoo_page__WEBPACK_IMPORTED_MODULE_6__["FlightpaymentdonepayooPage"]
    }
];
let FlightpaymentdonepayooPageModule = class FlightpaymentdonepayooPageModule {
};
FlightpaymentdonepayooPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_flightpaymentdonepayoo_page__WEBPACK_IMPORTED_MODULE_6__["FlightpaymentdonepayooPage"]]
    })
], FlightpaymentdonepayooPageModule);



/***/ }),

/***/ "./src/app/flightpaymentdonepayoo/flightpaymentdonepayoo.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/flightpaymentdonepayoo/flightpaymentdonepayoo.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n      <ion-row>\n        <ion-col style=\"text-align: center\">\n          <div style=\"align-self: center\" >\n              <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Hoàn thành</label></div>\n          </div>\n        </ion-col>\n      </ion-row>\n      </ion-toolbar>\n</ion-header>\n<ion-content padding>\n<div  style=\"text-align: center\">\n  <img  src=\"./assets/ic_flight/step_4.svg\">\n  </div>\n  <div class=\"img-trip-empty\">\n    <img class=\"img-empty\" src=\"./assets/empty/imgdone.svg\">\n</div>\n<div style=\"margin-top: 5px\">\n  <div>\n    <ion-label class=\"text\" style=\"font-weight: bold\">\n      Cảm ơn Quý khách đã sử dụng dịch vụ iVIVU.com\n    </ion-label>\n  </div>\n  \n  <div >\n    <ion-label class=\"text\">\n      Mã đặt vé máy bay của Quý khách là\n      <span style=\"font-weight: bold\">{{code}}</span>\n    </ion-label>\n  </div>\n  <div *ngIf=\"qrimg&&stt=='0'\">\n    <ion-label class=\"text\" text-wrap>\n      Quý khách vui lòng quét mã QR dưới đây để thanh toán\n    </ion-label>\n    <div>\n      <img style=\"width:170px\"  src={{qrimg}}>\n    </div>\n  </div>\n  <div *ngIf='stt==1'>\n    <ion-label class=\"text\">\n      Giao dịch thanh toán thành công. Tổng số tiền thanh toán là {{total}} VND\n    </ion-label>\n  </div>\n  <div *ngIf=\"stt=='0'\">\n    <ion-label class=\"text\" text-wrap>\n      Thông tin thanh toán đã được gửi đến email {{_email}}.\n    </ion-label>\n  </div>\n  <div *ngIf=\"stt=='1'\">\n    <ion-label class=\"text\" text-wrap>\n      Xác nhận đặt vé máy bay sẽ được gửi đến email của Quý khách.\n    </ion-label>\n  </div>\n  <div *ngIf=\"stt=='0'&&BillingCode\">\n    <ion-label class=\"text\" text-wrap>\n      Mã thanh toán Payoo: {{BillingCode}}. Quý khách vui lòng cung cấp Mã thanh toán Payoo bên trên cho nhân viên thu ngân. Để tìm cửa hàng gần nhất, hãy <a target=\"_blank\" (click)=\"openWebpage()\" href=\"https://payoo.vn/mapv2/public/index.php?verify=true\">xem tại đây</a>\n    </ion-label>\n  </div>\n  <div *ngIf=\"stt=='0'\">\n    <ion-label class=\"text\" text-wrap>\n      Mời quý khách thanh toán số tiền <span class=\"textpayment\">{{total}} VND trước {{PeriodPaymentHour}} ngày {{PeriodPaymentDate}}</span> để hoàn tất việc đặt vé máy bay.\n    </ion-label>\n  </div>\n  \n  <div>\n    <ion-label class=\"text\" text-wrap>\n      Nếu cần sự hỗ trợ vui lòng liên hệ tổng đài 1900 1870 hoặc email food@ivivu.com để được trợ giúp.\n    </ion-label>\n  </div>\n  <div>\n    <ion-label class=\"text\" text-wrap>\n      Hồ Chí Minh: 1900 1870\n    </ion-label>\n  </div>\n  <div>\n    <ion-label class=\"text\" text-wrap>\n      Hà Nội: 1900 2045\n    </ion-label>\n  </div>\n  <div>\n  <ion-label class=\"text\" text-wrap>\n    Cần Thơ: 1900 2087\n  </ion-label>\n  </div>\n</div>\n</ion-content>\n<ion-footer>\n<div class=\"div-button-payment-done\">\n  <button (click)=\"addToCalendar()\" ion-button round outline class=\"button button2\">Thêm thông tin chuyến bay vào lịch</button>\n  <button (click)=\"next()\" ion-button round outline class=\"button button2 m-top-0\">Về trang chủ</button>\n</div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/flightpaymentdonepayoo/flightpaymentdonepayoo.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/flightpaymentdonepayoo/flightpaymentdonepayoo.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkbox-md-secondary .checkbox-checked {\n  border-color: #26bed6;\n  background-color: #26bed6;\n}\n\n.button2 {\n  background: #fff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  margin: 8px 16px !important;\n  padding: 0;\n}\n\n.div-button-payment-done {\n  background-color: #ffffff;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.div-button-payment-done .m-top-0 {\n  margin-top: 0 !important;\n}\n\n.button1 {\n  color: #ff9500;\n  border-color: #ff9500;\n  width: 100%;\n  font-size: 12px;\n}\n\n.div-btn {\n  background-color: #ffffff;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.button4 {\n  background: #ffffff;\n  color: #26bed6;\n  border-color: #26bed6;\n  margin-top: -5px;\n}\n\n.image-card1 {\n  display: initial !important;\n  width: 4%;\n}\n\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.logocss {\n  background-image: url('icon.png');\n}\n\n.div-paymentmytrip {\n  margin-top: 15px;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 28px;\n  letter-spacing: -0.4px;\n}\n\n.div-paymentmytrip .div-split-color {\n  height: 7px;\n  background-color: #f2f2f2;\n  margin: 8px -16px;\n}\n\n.div-paymentmytrip .text-title {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  font-weight: 600;\n}\n\n.div-paymentmytrip .div-text-payment {\n  font-size: 14px;\n  line-height: 28px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n  padding-top: 4px;\n}\n\n.div-paymentmytrip .div-text-paymentlink {\n  font-size: 14px;\n  line-height: 28px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n  text-decoration: underline;\n}\n\n.div-paymentmytrip .text-payment-info {\n  white-space: normal !important;\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  line-height: 28px;\n  margin: 0;\n}\n\n.div-paymentmytrip .text-info {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  margin: 0;\n  margin-bottom: 16px;\n}\n\n.div-paymentmytrip .text-link {\n  text-decoration: underline;\n  margin-bottom: 23px;\n}\n\n.div-paymentmytrip .text-copy {\n  padding-left: 4px;\n}\n\n::ng-deep .totalPrice {\n  color: #26BED6;\n  font-weight: bold;\n}\n\n::ng-deep .cls-alert-showmore {\n  align-items: center !important;\n}\n\n::ng-deep .cls-alert-showmore .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 270px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 15px !important;\n  overflow: hidden !important;\n  width: auto;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: flex !important;\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  border-color: none;\n  background: none;\n  text-transform: none;\n  font-size: 15px !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-md {\n  text-transform: none;\n  font-size: 14px;\n  padding: 10px 0;\n}\n\n::ng-deep .alert-button-group.sc-ion-alert-md {\n  flex-wrap: nowrap;\n}\n\n::ng-deep .alert-button-inner.sc-ion-alert-md {\n  justify-content: center;\n}\n\n::ng-deep .alert-button.sc-ion-alert-md {\n  padding-right: 0;\n  width: 100%;\n  text-transform: none;\n}\n\n.img-trip-empty {\n  text-align: center;\n  margin-top: 42px;\n  margin-bottom: 25px;\n}\n\n.text {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 2;\n}\n\n.textpayment {\n  color: #003C71;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL2ZsaWdodHBheW1lbnRkb25lcGF5b28vZmxpZ2h0cGF5bWVudGRvbmVwYXlvby5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZsaWdodHBheW1lbnRkb25lcGF5b28vZmxpZ2h0cGF5bWVudGRvbmVwYXlvby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0FDQVI7O0FERUk7RUFFSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtBQ0FSOztBREdJO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtBQ0RSOztBREdRO0VBQ0ksd0JBQUE7QUNEWjs7QURJSTtFQUVJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRlI7O0FESUk7RUFFSSx5QkFBQTtFQUEyQixrQkFBQTtFQUFtQixnQkFBQTtBQ0F0RDs7QURFSTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNBUjs7QURFSTtFQUNJLDJCQUFBO0VBQ0EsU0FBQTtBQ0NSOztBREVJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0NSOztBRENJO0VBRUksaUNBQUE7QUNDUjs7QURDSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ0VSOztBREFRO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNFWjs7QURBUTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDRVo7O0FEQVE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNFWjs7QURBUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0VaOztBRENRO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQ0NaOztBRENRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNDWjs7QURDUTtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7QUNDWjs7QURDUTtFQUNJLGlCQUFBO0FDQ1o7O0FES0k7RUFFQSxjQUFBO0VBQ0EsaUJBQUE7QUNISjs7QURLSTtFQUNBLDhCQUFBO0FDSEo7O0FES0k7RUFDSSw4RkFBQTtFQUNBLDZCQUFBO0VBRUEsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsdURBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0tBQUEsaUNBQUE7TUFBQSxnQ0FBQTtVQUFBLDRCQUFBO0FDSlI7O0FET0k7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQ0xKOztBRE9JO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esd0NBQUE7RUFDQSx3Q0FBQTtFQUNBLHdDQUFBO0FDTEo7O0FET0k7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHVCQUFBO0FDTEo7O0FET0k7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUZBQUE7RUFDQSx3Q0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUNMSjs7QURPSTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtBQ0xKOztBRE9JO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7QUNMUjs7QURRSTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNOUjs7QURTQTtFQUNJLGlCQUFBO0FDUEo7O0FEU0E7RUFDSSx1QkFBQTtBQ1BKOztBRFNBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUNQSjs7QURVQTtFQUVJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1JKOztBRFVBO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ1BKOztBRFNBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9mbGlnaHRwYXltZW50ZG9uZXBheW9vL2ZsaWdodHBheW1lbnRkb25lcGF5b28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmNoZWNrYm94LW1kLXNlY29uZGFyeSAuY2hlY2tib3gtY2hlY2tlZCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzI2YmVkNjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNjtcbiAgICB9XG4gICAgLmJ1dHRvbjJcbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGNvbG9yOiAjZmY5NTAwO1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZmY5NTAwO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiA4cHggMTZweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgXG4gICAgLmRpdi1idXR0b24tcGF5bWVudC1kb25le1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyBcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgLm0tdG9wLTB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJ1dHRvbjFcbiAgICB7XG4gICAgICAgIGNvbG9yOiAjZmY5NTAwO1xuICAgICAgICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC5kaXYtYnRuXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyB0ZXh0LWFsaWduOiBjZW50ZXI7bWFyZ2luLXRvcDogMjBweFxuICAgIH1cbiAgICAuYnV0dG9uNFxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzI2YmVkNjtcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDsgXG4gICAgfVxuICAgIC5pbWFnZS1jYXJkMXtcbiAgICAgICAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogNCVcbiAgICB9XG4gICBcbiAgICAudG9vbGJhci10aXRsZS1tZCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xuICAgICAgfSAgXG4gICAgLmxvZ29jc3NcbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvaWNvbi5wbmcnKVxuICAgIH1cbiAgICAuZGl2LXBheW1lbnRteXRyaXB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG5cbiAgICAgICAgLmRpdi1zcGxpdC1jb2xvcntcbiAgICAgICAgICAgIGhlaWdodDogN3B4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgICAgICAgIG1hcmdpbjogOHB4IC0xNnB4O1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LXRpdGxle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgICAgLmRpdi10ZXh0LXBheW1lbnR7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDRweDtcbiAgICAgICAgfVxuICAgICAgICAuZGl2LXRleHQtcGF5bWVudGxpbmt7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dC1wYXltZW50LWluZm97XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWluZm97XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtbGlua3tcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjNweDtcbiAgICAgICAgfVxuICAgICAgICAudGV4dC1jb3B5e1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4vLy8vLy8vLy8vLy8vL1xuOjpuZy1kZWVwIHtcbiAgICAudG90YWxQcmljZVxue1xuICAgIGNvbG9yOiAjMjZCRUQ2O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuICAgIC5jbHMtYWxlcnQtc2hvd21vcmUge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBcbiAgICAuc2MtaW9uLWFsZXJ0LWlvcy1oIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjZjlmOWY5KSkgIWltcG9ydGFudDtcbiAgICAgICAgLS1tYXgtd2lkdGg6IDI3MHB4ICFpbXBvcnRhbnQ7XG4gICAgXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgICAtLW1pbi13aWR0aDogMjUwcHggIWltcG9ydGFudDtcbiAgICAgICAgLS13aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAtLW1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgLS1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgLS1tYXgtaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQgIWltcG9ydGFudDtcbiAgICAgICAgbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgICByaWdodDogMCAhaW1wb3J0YW50O1xuICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcbiAgICAgICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KSAhaW1wb3J0YW50O1xuICAgICAgICB0b3VjaC1hY3Rpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtaW9ze1xuICAgIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3N7XG4gICAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgICB3aWR0aDogdmFyKC0td2lkdGgpICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiB2YXIoLS1tYXgtaGVpZ2h0KSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwICFpbXBvcnRhbnQ7XG4gICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9ze1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci10b3A6IC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLDAsMCwwKSwuMikgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICB3aWR0aDogYXV0bztcbiAgICB9XG4gICAgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3Mge1xuICAgICAgICBib3JkZXItY29sb3I6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1tZHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgIH1cbn1cbi5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LW1ke1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xufVxuLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtbWQge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtbWQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG59XG4uaW1nLXRyaXAtZW1wdHlcbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNDJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLnRleHR7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG59XG4udGV4dHBheW1lbnR7XG4gICAgY29sb3I6IzAwM0M3MTsgXG4gICAgZm9udC13ZWlnaHQ6Ym9sZFxufVxuXG4iLCIuY2hlY2tib3gtbWQtc2Vjb25kYXJ5IC5jaGVja2JveC1jaGVja2VkIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xufVxuXG4uYnV0dG9uMiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjZmY5NTAwO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZmY5NTAwO1xuICB3aWR0aDogOTAlO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA4cHggMTZweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZGl2LWJ1dHRvbi1wYXltZW50LWRvbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZGl2LWJ1dHRvbi1wYXltZW50LWRvbmUgLm0tdG9wLTAge1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24xIHtcbiAgY29sb3I6ICNmZjk1MDA7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmRpdi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5idXR0b240IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGJvcmRlci1jb2xvcjogIzI2YmVkNjtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuLmltYWdlLWNhcmQxIHtcbiAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICB3aWR0aDogNCU7XG59XG5cbi50b29sYmFyLXRpdGxlLW1kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG59XG5cbi5sb2dvY3NzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvaWNvbi5wbmdcIik7XG59XG5cbi5kaXYtcGF5bWVudG15dHJpcCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG4uZGl2LXBheW1lbnRteXRyaXAgLmRpdi1zcGxpdC1jb2xvciB7XG4gIGhlaWdodDogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBtYXJnaW46IDhweCAtMTZweDtcbn1cbi5kaXYtcGF5bWVudG15dHJpcCAudGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5kaXYtcGF5bWVudG15dHJpcCAuZGl2LXRleHQtcGF5bWVudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG4uZGl2LXBheW1lbnRteXRyaXAgLmRpdi10ZXh0LXBheW1lbnRsaW5rIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uZGl2LXBheW1lbnRteXRyaXAgLnRleHQtcGF5bWVudC1pbmZvIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW46IDA7XG59XG4uZGl2LXBheW1lbnRteXRyaXAgLnRleHQtaW5mbyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmRpdi1wYXltZW50bXl0cmlwIC50ZXh0LWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgbWFyZ2luLWJvdHRvbTogMjNweDtcbn1cbi5kaXYtcGF5bWVudG15dHJpcCAudGV4dC1jb3B5IHtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbjo6bmctZGVlcCAudG90YWxQcmljZSB7XG4gIGNvbG9yOiAjMjZCRUQ2O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLnNjLWlvbi1hbGVydC1pb3MtaCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Y5ZjlmOSkpICFpbXBvcnRhbnQ7XG4gIC0tbWF4LXdpZHRoOiAyNzBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgLS1taW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpICFpbXBvcnRhbnQ7XG4gIHRvdWNoLWFjdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9zIHtcbiAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogdmFyKC0tbWF4LWhlaWdodCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xuICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAwLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZikgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG87XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcbiAgYm9yZGVyLWNvbG9yOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1tZCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbjo6bmctZGVlcCAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1tZCB7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuOjpuZy1kZWVwIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LW1kIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46Om5nLWRlZXAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtbWQge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5pbWctdHJpcC1lbXB0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufVxuXG4udGV4dHBheW1lbnQge1xuICBjb2xvcjogIzAwM0M3MTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/flightpaymentdonepayoo/flightpaymentdonepayoo.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/flightpaymentdonepayoo/flightpaymentdonepayoo.page.ts ***!
  \***********************************************************************/
/*! exports provided: FlightpaymentdonepayooPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightpaymentdonepayooPage", function() { return FlightpaymentdonepayooPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ "./node_modules/@ionic-native/calendar/ngx/index.js");
/* harmony import */ var _ionic_native_launch_review_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/launch-review/ngx */ "./node_modules/@ionic-native/launch-review/ngx/index.js");













let FlightpaymentdonepayooPage = class FlightpaymentdonepayooPage {
    constructor(activatedRoute, storage, _flightService, navCtrl, searchhotel, zone, safariViewController, valueGlobal, gf, fb, _platform, _calendar, alertCtrl, launchReview) {
        this.activatedRoute = activatedRoute;
        this.storage = storage;
        this._flightService = _flightService;
        this.navCtrl = navCtrl;
        this.searchhotel = searchhotel;
        this.zone = zone;
        this.safariViewController = safariViewController;
        this.valueGlobal = valueGlobal;
        this.gf = gf;
        this.fb = fb;
        this._platform = _platform;
        this._calendar = _calendar;
        this.alertCtrl = alertCtrl;
        this.launchReview = launchReview;
        this.isDinner = false;
        this.total = this._flightService.itemFlightCache.totalPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        this._email = this._flightService.itemFlightCache.email;
        this.storage.get('checkreview').then(checkreview => {
            if (checkreview == 0) {
                this.checkreview = 0;
            }
            else {
                this.checkreview = checkreview;
            }
        });
    }
    ngOnInit() {
        this.code = this._flightService.itemFlightCache.pnr.bookingCode ? this._flightService.itemFlightCache.pnr.bookingCode : this.activatedRoute.snapshot.paramMap.get('code');
        this.startdate = moment__WEBPACK_IMPORTED_MODULE_7__(this.activatedRoute.snapshot.paramMap.get('startdate')).format('DD/MM');
        this.enddate = moment__WEBPACK_IMPORTED_MODULE_7__(this.activatedRoute.snapshot.paramMap.get('enddate')).format('DD/MM');
        this.stt = this._flightService.itemFlightCache.ischeckpayment;
        if (this.stt == '0') {
            this.BillingCode = this._flightService.itemFlightCache.BillingCode;
            this.qrimg = this._flightService.itemFlightCache.qrimg;
        }
        if (this._flightService.itemFlightCache.pnr.periodPaymentDate) {
            this.PeriodPaymentDate = moment__WEBPACK_IMPORTED_MODULE_7__(this._flightService.itemFlightCache.pnr.periodPaymentDate).format('DD/MM/YYYY');
            this.PeriodPaymentHour = moment__WEBPACK_IMPORTED_MODULE_7__(this._flightService.itemFlightCache.pnr.periodPaymentDate).format('HH:mm');
        }
    }
    ionViewWillEnter() {
        let se = this;
        if (se._flightService.itemFlightCache.roundTrip) {
            se.gf.googleAnalytionCustom('purchase', { items: [
                    { item_category: 'flight', start_date: se._flightService.itemFlightCache.checkInDate, end_date: se._flightService.itemFlightCache.checkOutDate, origin: se._flightService.itemFlightCache.departCode, destination: se._flightService.itemFlightCache.returnCode, flight_number: se._flightService.itemFlightCache.departFlight.flightNumber },
                    { item_category: 'flight', start_date: se._flightService.itemFlightCache.checkInDate, end_date: se._flightService.itemFlightCache.checkOutDate, origin: se._flightService.itemFlightCache.returnCode, destination: se._flightService.itemFlightCache.departCode, flight_number: se._flightService.itemFlightCache.returnFlight.flightNumber }
                ], value: se.gf.convertNumberToDouble(se._flightService.itemFlightCache.totalPrice), currency: "VND" });
        }
        else {
            se.gf.googleAnalytionCustom('purchase', { items: [{ item_category: 'flight', start_date: se._flightService.itemFlightCache.checkInDate, end_date: se._flightService.itemFlightCache.checkOutDate, origin: se._flightService.itemFlightCache.departCode, destination: se._flightService.itemFlightCache.returnCode, flight_number: se._flightService.itemFlightCache.departFlight.flightNumber }], value: se.gf.convertNumberToDouble(se._flightService.itemFlightCache.totalPrice), currency: "VND" });
        }
        se.fb.logEvent(se.fb.EVENTS.EVENT_NAME_PURCHASED, { 'fb_content_type': 'flight', 'fb_content_id': 'flightpaymentdonepayoo', 'fb_num_items': 1, 'fb_value': (se._flightService.itemFlightCache.totalPrice ? se.gf.convertNumberToDouble(se._flightService.itemFlightCache.totalPrice) : 0), 'fb_currency': 'VND',
            'origin_airport': se._flightService.itemFlightCache.departFlight.fromPlaceCode,
            'destination_airport': se._flightService.itemFlightCache.departFlight.toPlaceCode,
            'departing_departure_date': se._flightService.itemFlightCache.checkInDate, 'returning_departure_date ': se._flightService.itemFlightCache.checkOutDate, 'num_adults': se._flightService.itemFlightCache.adult, 'num_children': se._flightService.itemFlightCache.child ? se._flightService.itemFlightCache.child : 0, 'num_infants': se._flightService.itemFlightCache.infant ? se._flightService.itemFlightCache.infant : 0,
            'value': (se._flightService.itemFlightCache.totalPrice ? se.gf.convertNumberToDouble(se._flightService.itemFlightCache.totalPrice) : 0), 'currency': 'VND' }, se._flightService.itemFlightCache.totalPrice ? se.gf.convertNumberToFloat(se._flightService.itemFlightCache.totalPrice) : 0);
        let flightItem = se._flightService.itemFlightCache;
    }
    addToCalendar() {
        let se = this;
        if (se._platform.is("cordova")) {
            let itemflight = this._flightService.itemFlightCache;
            se.checkExistCalendarName(itemflight, true);
            if (itemflight.roundTrip) {
                setTimeout(() => {
                    se.checkExistCalendarName(itemflight, false);
                }, 300);
            }
        }
    }
    createCalendar(itemflight, isdepart, createOrModify) {
        let se = this;
        let calOptions = se._calendar.getCalendarOptions();
        let strmess = `Mã đặt chỗ: ` + (isdepart ? (itemflight.dataSummaryBooking && itemflight.dataSummaryBooking.departFlight ? itemflight.dataSummaryBooking.departFlight.atBookingCode : '') : (itemflight.dataSummaryBooking && itemflight.dataSummaryBooking.returnFlight ? itemflight.dataSummaryBooking.returnFlight.atBookingCode : '')) + `
      
Giờ ra tàu bay: ` + (isdepart ? (moment__WEBPACK_IMPORTED_MODULE_7__(itemflight.departFlight.departTime).format("HH") + "h" + moment__WEBPACK_IMPORTED_MODULE_7__(itemflight.departFlight.departTime).format("mm")) : (moment__WEBPACK_IMPORTED_MODULE_7__(itemflight.returnFlight.departTime).format("HH") + "h" + moment__WEBPACK_IMPORTED_MODULE_7__(itemflight.returnFlight.departTime).format("mm"))) +
            `	
      
Hành khách:

`;
        itemflight.adults.forEach((elementA, index) => {
            if (index != 0) {
                strmess += `

`;
            }
            strmess += index + 1 + ". " + elementA.genderdisplay + " " + elementA.name;
            if (isdepart && elementA.ancillaryJson) {
                let objjson = JSON.parse(elementA.ancillaryJson);
                if (objjson && objjson.length > 0) {
                    strmess += " | ";
                    objjson.forEach((elementAncillary, indexanci) => {
                        strmess += (elementAncillary.Type == "Baggage" ? "Hành lý" : "Chỗ ngồi") + ": " + (elementAncillary.Type == "Baggage" ? elementAncillary.Value + 'kg' : elementAncillary.Value) + (indexanci != objjson.length - 1 ? " | " : '');
                    });
                }
            }
            if (!isdepart && elementA.ancillaryReturnJson) {
                let objjson = JSON.parse(elementA.ancillaryReturnJson);
                if (objjson && objjson.length > 0) {
                    strmess += " | ";
                    objjson.forEach((elementAncillary, indexanci) => {
                        strmess += (elementAncillary.Type == "Baggage" ? "Hành lý" : "Chỗ ngồi") + ": " + (elementAncillary.Type == "Baggage" ? elementAncillary.Value + 'kg' : elementAncillary.Value) + (indexanci != objjson.length - 1 ? " | " : '');
                    });
                }
            }
        });
        itemflight.childs.forEach((elementC, index) => {
            strmess += `

`;
            strmess += (index + 1 + itemflight.adults.length) + ". " + elementC.genderdisplay + " " + elementC.name;
            if (isdepart && elementC.ancillaryJson) {
                let objjson = JSON.parse(elementC.ancillaryJson);
                if (objjson && objjson.length > 0) {
                    strmess += " | ";
                    objjson.forEach((elementAncillary, indexanci) => {
                        strmess += (elementAncillary.Type == "Baggage" ? "Hành lý" : "Chỗ ngồi") + ": " + (elementAncillary.Type == "Baggage" ? elementAncillary.Value + 'kg' : elementAncillary.Value) + (indexanci != objjson.length - 1 ? " | " : '');
                    });
                }
            }
            if (!isdepart && elementC.ancillaryReturnJson) {
                let objjson = JSON.parse(elementC.ancillaryReturnJson);
                if (objjson && objjson.length > 0) {
                    strmess += " | ";
                    objjson.forEach((elementAncillary, indexanci) => {
                        strmess += (elementAncillary.Type == "Baggage" ? "Hành lý" : "Chỗ ngồi") + ": " + (elementAncillary.Type == "Baggage" ? elementAncillary.Value + 'kg' : elementAncillary.Value) + (indexanci != objjson.length - 1 ? " | " : '');
                    });
                }
            }
        });
        strmess += `

`;
        if (itemflight.objHotelCitySelected) {
            strmess += `
Khách sạn:` + itemflight.objHotelCitySelected.HotelName + `
  
Tên phòng: ` + itemflight.objHotelCitySelected.RoomName + `
    
Khách hàng: ` + itemflight.hoten;
            strmess += `
    
`;
        }
        if (itemflight.childs && itemflight.childs.length > 0) {
            strmess += "Quý khách nhớ mang theo giấy tờ tuỳ thân và giấy khai sinh của " + itemflight.childs.map((c) => { return c.name; }).join(', ') + ".";
        }
        else {
            strmess += "Quý khách nhớ mang theo giấy tờ tuỳ thân.";
        }
        calOptions.firstReminderMinutes = 120;
        calOptions.calendarName = "Chuyến đi " + (isdepart ? itemflight.departCity : itemflight.returnCity) + "  -  " + (isdepart ? itemflight.returnCity : itemflight.departCity) + ", " + (isdepart ? moment__WEBPACK_IMPORTED_MODULE_7__(itemflight.departFlight.departTime).format('DD/MM/YYYY') : moment__WEBPACK_IMPORTED_MODULE_7__(itemflight.returnFlight.departTime).format('DD/MM/YYYY'));
        calOptions.calendarId = 1;
        let event = {
            title: (isdepart ? itemflight.departCity : itemflight.returnCity) + "  ✈  " + (isdepart ? itemflight.returnCity : itemflight.departCity) + " (" + (isdepart ? itemflight.departFlight.flightNumber : itemflight.returnFlight.flightNumber) + ")",
            location: (isdepart ? itemflight.departAirport : itemflight.returnAirport),
            message: strmess,
            startDate: (isdepart ? itemflight.departFlight.departTime : itemflight.returnFlight.departTime),
            endDate: (isdepart ? itemflight.departFlight.landingTime : itemflight.returnFlight.landingTime),
            calOptions
        };
        se._calendar.hasReadWritePermission().then((allow) => {
            let sdate = new Date(event.startDate), edate = new Date(event.endDate);
            if (allow) {
                if (createOrModify) {
                    se.gf.showLoadingwithtimeout();
                    se._calendar.createEventWithOptions(event.title, event.location, event.message, sdate, edate, event.calOptions).then(() => {
                        if ((itemflight.roundTrip && !isdepart) || !itemflight.roundTrip) {
                            se.zone.run(() => {
                                se.gf.hideLoading();
                                se._flightService.itemFlightCache = {};
                                se._flightService.itemMenuFlightClick.emit(2);
                                se.next();
                            });
                            se._calendar.openCalendar(new Date(itemflight.departFlight.departTime)).then(() => {
                            });
                        }
                    });
                }
                else {
                    se._flightService.itemFlightCache = {};
                    se._flightService.itemMenuFlightClick.emit(2);
                    se.next();
                }
            }
            else {
                se._calendar.requestReadWritePermission().then(() => {
                    if (createOrModify) {
                        se.gf.showLoadingwithtimeout();
                        se._calendar.createEventWithOptions(event.title, event.location, event.message, sdate, edate, event.calOptions).then(() => {
                            if ((itemflight.roundTrip && !isdepart) || !itemflight.roundTrip) {
                                se.zone.run(() => {
                                    se.gf.hideLoading();
                                    se._flightService.itemFlightCache = {};
                                    se._flightService.itemMenuFlightClick.emit(2);
                                    se.next();
                                });
                                se._calendar.openCalendar(new Date(itemflight.departFlight.departTime)).then(() => {
                                });
                            }
                        });
                    }
                    else {
                        se._flightService.itemFlightCache = {};
                        se._flightService.itemMenuFlightClick.emit(2);
                        se.next();
                    }
                });
            }
        });
    }
    checkExistCalendarName(itemflight, isdepart) {
        let se = this;
        let calendarname = "Chuyến đi " + (isdepart ? itemflight.departCity : itemflight.returnCity) + "  -  " + (isdepart ? itemflight.returnCity : itemflight.departCity) + ", " + (isdepart ? moment__WEBPACK_IMPORTED_MODULE_7__(itemflight.departFlight.departTime).format('DD/MM/YYYY') : moment__WEBPACK_IMPORTED_MODULE_7__(itemflight.returnFlight.departTime).format('DD/MM/YYYY'));
        this.storage.get('objectflightpaymentbank').then((data) => {
            if (data) {
                let arrobject = JSON.parse(data);
                if (arrobject && arrobject.length > 0) {
                    let objexists = arrobject.filter((item) => {
                        return item.resNo == itemflight.pnr.resNo;
                    });
                    if (objexists && objexists.length > 0) {
                        se.createCalendar(itemflight, isdepart, false);
                    }
                    else {
                        se.createCalendar(itemflight, isdepart, true);
                    }
                }
            }
            else {
                se.createCalendar(itemflight, isdepart, true);
            }
        });
    }
    next() {
        this.gf.hideLoading();
        this._flightService.itemFlightCache = {};
        this._flightService.itemTabFlightActive.emit(true);
        this.valueGlobal.backValue = "homeflight";
        if (this.checkreview == 0) {
            this.showConfirm();
        }
        this.navCtrl.navigateBack('/tabs/tab1');
    }
    openWebpage() {
        var url = "https://payoo.vn/mapv2/public/index.php?verify=true";
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
                    }
                }, (error) => console.error(error));
            }
            else {
            }
        });
    }
    showConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.storage.set("checkreview", 1);
            let alert = yield this.alertCtrl.create({
                header: 'Bạn thích iVIVU.com?',
                message: 'Đánh giá ứng dụng trên App Store',
                mode: "ios",
                cssClass: 'cls-reivewapp',
                buttons: [
                    {
                        text: 'Hủy',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Đánh giá',
                        role: 'OK',
                        handler: () => {
                            this.launchReview.launch()
                                .then(() => console.log('Successfully launched store app'));
                        }
                    }
                ]
            });
            alert.present();
            alert.onDidDismiss().then((data) => {
            });
        });
    }
};
FlightpaymentdonepayooPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-flightpaymentdonepayoo',
        template: __webpack_require__(/*! ./flightpaymentdonepayoo.page.html */ "./src/app/flightpaymentdonepayoo/flightpaymentdonepayoo.page.html"),
        styles: [__webpack_require__(/*! ./flightpaymentdonepayoo.page.scss */ "./src/app/flightpaymentdonepayoo/flightpaymentdonepayoo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _providers_flightService__WEBPACK_IMPORTED_MODULE_4__["flightService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["SearchHotel"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_8__["SafariViewController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["ValueGlobal"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_9__["GlobalFunction"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_10__["Facebook"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"],
        _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_11__["Calendar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _ionic_native_launch_review_ngx__WEBPACK_IMPORTED_MODULE_12__["LaunchReview"]])
], FlightpaymentdonepayooPage);



/***/ })

}]);
//# sourceMappingURL=flightpaymentdonepayoo-flightpaymentdonepayoo-module.js.map