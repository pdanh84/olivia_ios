(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/flightaccount/flightaccount.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/flightaccount/flightaccount.module.ts ***!
  \*******************************************************/
/*! exports provided: FlightaccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightaccountPageModule", function() { return FlightaccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightaccount_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flightaccount.page */ "./src/app/flightaccount/flightaccount.page.ts");






let FlightaccountPageModule = class FlightaccountPageModule {
};
FlightaccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        declarations: [_flightaccount_page__WEBPACK_IMPORTED_MODULE_5__["FlightaccountPage"]],
        exports: [_flightaccount_page__WEBPACK_IMPORTED_MODULE_5__["FlightaccountPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FlightaccountPageModule);



/***/ }),

/***/ "./src/app/flightaccount/flightaccount.page.html":
/*!*******************************************************!*\
  !*** ./src/app/flightaccount/flightaccount.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"flightaccount-header\">\r\n    <ion-row style=\"height: 56px;\">\r\n        <ion-title *ngIf=\"!username\" class=\"title-header\">Thêm</ion-title>\r\n        <ion-title *ngIf=\"username\" class=\"title-header\">Chào {{username}}</ion-title>\r\n    </ion-row>\r\n</ion-header>\r\n    <div class=\"flightaccount-content no-margin-bottom\">\r\n        <div  *ngIf=\"loginuser\">\r\n                <ion-row>\r\n                        <ion-col class=\"text-center\" style=\"padding:0\">\r\n                            <div class=\"div-wrapimg\" (click)=\"changeAvatar()\">\r\n                                <ion-card style=\"height:110px !important; box-shadow:none !important;margin-top:14px\">\r\n                                        <img *ngIf=\"avatar && !croppedImagepath\" class=\"img-user-avatar\" src=\"{{avatar}}\">\r\n                                        <img *ngIf=\"croppedImagepath\" class=\"img-user-avatar\" [src]=\"croppedImagepath\">\r\n                                </ion-card>\r\n                            </div>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ion-row  (click)=\"changeAvatar()\">\r\n                        <ion-col class=\"text-center\"  style=\"padding:0\">\r\n                            <div class=\"text-color\">Khách hàng thân thiết</div>\r\n                        </ion-col>\r\n                    </ion-row>\r\n        </div>\r\n        <div class=\"div-item\" *ngIf=\"!loginuser\">\r\n            <ion-row>\r\n                <ion-col>\r\n                        <span class=\"label-header\">Tài khoản của tôi</span>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row >\r\n                <ion-col size=\"1\">\r\n                    <img src=\"./assets/imgs/ic_login.svg\">\r\n                </ion-col>\r\n                <ion-col>\r\n                    <span class=\"item-list\" (click)=\"goToLogin()\">Đăng nhập/Đăng ký</span>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n        <div class=\"div-item\" *ngIf=\"loginuser\" [ngClass]=\"loginuser ? 'p-top-20' : ''\" >\r\n            <ion-row>\r\n                <ion-col>\r\n                        <span class=\"label-header\">Tài khoản của tôi</span>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col size=\"1\">\r\n                    <img src=\"./assets/imgs/ic_i_p.svg\">\r\n                </ion-col>\r\n                <ion-col size=\"6\">\r\n                    <span (click)=\"Point()\" class=\"item-list\">iVIVUPoint</span>\r\n                </ion-col>\r\n                <ion-col size=\"5\" style=\"text-align: right\" *ngIf=\"point\">\r\n                    <label style=\"font-size:16px; color: #26bed6; font-weight: 500\">{{ point }} điểm</label>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n        <div class=\"div-item\" >\r\n            <ion-row (click)=\"showUserProfile()\">\r\n                <ion-col size=\"1\">\r\n                    <img src=\"./assets/imgs/ic_people.svg\">\r\n                </ion-col>\r\n                <ion-col>\r\n                    <span class=\"item-list\">Hồ sơ của tôi</span>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n        <div class=\"div-item\" *ngIf=\"loginuser && bizTravelService.isCompany\">\r\n            <ion-row (click)=\"showCompanyInfo()\">\r\n                <ion-col size=\"1\">\r\n                    <img class=\"img-suit\" src=\"./assets/ic_biztravel/suit.svg\">\r\n                </ion-col>\r\n                <ion-col>\r\n                    <span class=\"item-list\">Thông tin công ty</span>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n        \r\n        <div *ngIf=\"!loginuser\" class=\"item-support div-item\">\r\n        <div class=\"support\">\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <span class=\"label-header\">Nhân viên hỗ trợ</span>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row >\r\n                    <ion-col size=\"1\">\r\n                            <img class=\"img-callcenter\" src=\"./assets/imgs/ic_callcenter.svg\">\r\n                    </ion-col>\r\n                    <ion-col size=\"10\" class=\"support-text\"  (click)=\"makeCallSupport(1)\">\r\n                            <span class=\"item-list item-call\">iVIVU Hà Nội - 19002045</span>\r\n                    </ion-col>\r\n                    <ion-col size=\"1\" class=\"support-text s-text t-right\"  (click)=\"makeCallSupport(1)\"><img class=\"img-support\" src=\"./assets/imgs/ic_call.svg\"></ion-col>\r\n                    <!-- <ion-col size=\"1\" class=\"support-text t-right img-review\"> <img class=\"img-support\" src=\"./assets/imgs/ic_mail.svg\"></ion-col> -->\r\n                </ion-row>\r\n                <ion-row >\r\n                        <ion-col size=\"1\">\r\n                                <img class=\"img-callcenter\" src=\"./assets/imgs/ic_callcenter.svg\">\r\n                        </ion-col>\r\n                        <ion-col size=\"10\" class=\"support-text\" (click)=\"makeCallSupport(2)\">\r\n                                <span class=\"item-list item-call\">iVIVU Hồ Chí Minh - 19001870</span>\r\n                        </ion-col>\r\n                        <ion-col size=\"1\" class=\"support-text s-text t-right\" (click)=\"makeCallSupport(2)\"><img class=\"img-support\" src=\"./assets/imgs/ic_call.svg\"></ion-col>\r\n                    </ion-row>\r\n                    <ion-row >\r\n                            <ion-col size=\"1\">\r\n                                    <img class=\"img-callcenter\" src=\"./assets/imgs/ic_callcenter.svg\">\r\n                            </ion-col>\r\n                            <ion-col size=\"10\" class=\"support-text\">\r\n                                    <span class=\"item-list item-call\" (click)=\"makeCallSupport(3)\">iVIVU Cần Thơ - 19002087</span>\r\n                            </ion-col>\r\n                            <ion-col size=\"1\" class=\"support-text s-text t-right\"  (click)=\"makeCallSupport(3)\"><img class=\"img-support\" src=\"./assets/imgs/ic_call.svg\"></ion-col>\r\n                        </ion-row>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"loginuser\" class=\"item-support div-item\">\r\n                <div class=\"support\">\r\n                        <ion-row>\r\n                            <ion-col>\r\n                                    <span class=\"label-header\">Nhân viên hỗ trợ</span>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                        <ion-row *ngFor=\"let sp of listSupport\">\r\n                                <ion-col style=\"padding:0\" *ngIf=\"sp.name\">\r\n                                        <ion-row>\r\n\r\n                                                <ion-col size=\"1\" >\r\n                                                        <img class=\"img-callcenter\" src=\"./assets/imgs/ic_callcenter.svg\">\r\n                                                </ion-col>\r\n                                                <ion-col size=\"10\" class=\"support-text\" *ngIf=\"sp.phone && sp.isStaffOnline\">\r\n                                                        <span class=\"item-list item-call\">{{sp.name}}</span>\r\n                                                </ion-col>\r\n                                                <ion-col size=\"10\" class=\"support-text-offline\" *ngIf=\"!sp.phone || !sp.isStaffOnline\">\r\n                                                        <span class=\"item-list item-call\">{{sp.name}}</span>\r\n                                                </ion-col>\r\n                                                <ion-col size=\"1\" *ngIf=\"sp.isStaffOnline && sp.phone\" class=\"support-text s-text t-right\" (click)=\"makeCallSupport(sp.phone)\"><img class=\"img-support\" src=\"./assets/imgs/ic_call.svg\"></ion-col>\r\n                                                <ion-col size=\"1\" *ngIf=\"!sp.isStaffOnline && sp.phone\" class=\"support-text s-text t-right\"><img class=\"img-support\" src=\"./assets/imgs/ic_call_offline.svg\"></ion-col>\r\n                                        </ion-row>\r\n                                </ion-col>\r\n                        </ion-row>\r\n                        <ion-row >\r\n                                <ion-col size=\"1\">\r\n                                        <img class=\"img-callcenter\" src=\"./assets/imgs/ic_callcenter.svg\">\r\n                                </ion-col>\r\n                                <ion-col size=\"10\" class=\"support-text\" (click)=\"makeCallSupport(2)\">\r\n                                        <span class=\"item-list item-call\">19001870</span>\r\n                                </ion-col>\r\n                                <ion-col size=\"1\" class=\"support-text s-text t-right\"  (click)=\"makeCallSupport(2)\"><img class=\"img-support\" src=\"./assets/imgs/ic_call.svg\"></ion-col>\r\n                        </ion-row>\r\n                        \r\n                    </div>\r\n                </div>\r\n        <div>\r\n            <div class=\"setting div-item\">\r\n                <ion-row>\r\n                    <ion-col>\r\n                            <span class=\"label-header\">Cài đặt</span>\r\n                    </ion-col>\r\n                </ion-row>\r\n                \r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"loginuser\" class=\"div-item\">\r\n            <ion-row >\r\n                <ion-col size=\"1\">\r\n                    <img src=\"./assets/imgs/ic_logout.svg\">\r\n                </ion-col>\r\n                <ion-col>\r\n                    <span class=\"item-list\" (click)=\"goToLogout()\">Đăng xuất</span>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n       \r\n    </div>\r\n        "

/***/ }),

/***/ "./src/app/flightaccount/flightaccount.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/flightaccount/flightaccount.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  padding-top: 2px;\n}\n\n.label-md {\n  margin: 10px 0px 10px 0;\n}\n\n.no-margin-bottom {\n  padding: 16px 16px 16px 11px;\n  margin-bottom: 0px;\n}\n\n.div-item {\n  padding-bottom: 10px;\n}\n\n.title-header {\n  text-align: center;\n  padding: 0;\n  padding-top: env(safe-area-inset-top);\n}\n\n.label-header {\n  font-size: 12px;\n  font-weight: 300;\n  color: #4f4f4f;\n  letter-spacing: -0.34px;\n}\n\n.item-list {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n}\n\n.icon-list {\n  opacity: 0.7;\n}\n\n.support {\n  padding-top: 20px;\n}\n\n.support-text {\n  color: #26bed6;\n}\n\n.support-text-offline {\n  color: #bdbdbd;\n}\n\n.setting {\n  padding-top: 20px;\n}\n\n.item-support .item-inner {\n  border-bottom: none !important;\n}\n\n.item-call {\n  font-weight: 300;\n}\n\n.list-md .item-block .item-inner {\n  margin-right: 16px;\n}\n\n.img-review img {\n  fill: #26bed6;\n}\n\n.t-right {\n  text-align: right;\n  padding: 5px 0px 5px 0px;\n}\n\n.s-text {\n  padding: 5px 0px 5px 0px;\n}\n\n.img-support {\n  width: 16px;\n  height: 16px;\n}\n\n.item-md.item-block .item-inner {\n  padding-right: 0px;\n}\n\n.img-support-offline {\n  width: 16px;\n  height: 16px;\n  opacity: 0.4;\n}\n\n.p-top-20 {\n  padding-top: 20px;\n}\n\n@media (min-width: 351px) and (max-width: 400px) {\n  .support-text {\n    color: #26bed6;\n    padding-right: 0;\n  }\n\n  .support-text-offline {\n    color: #bdbdbd;\n    padding-right: 0;\n  }\n}\n\n@media (min-width: 287px) and (max-width: 350px) {\n  .support-text {\n    color: #26bed6;\n    padding: 5px 0;\n  }\n\n  .support-text-offline {\n    color: #bdbdbd;\n    padding: 5px 0;\n  }\n\n  .item-list {\n    font-size: 12px;\n  }\n}\n\n.flightaccount-header {\n  position: fixed;\n}\n\n.flightaccount-content {\n  padding: calc(env(safe-area-inset-bottom) + 80px) 16px 90px 11px;\n  position: -webkit-sticky;\n}\n\n::ng-deep cls-alert-showmore .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 290px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -moz-user-select: none !important;\n   -ms-user-select: none !important;\n       user-select: none !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 15px !important;\n  overflow: hidden !important;\n  width: auto;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: flex !important;\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n  border-color: #bdbdbd;\n}\n\n@media (max-height: 1024px) and (min-height: 812px) {\n  ::ng-deep .cls-alert-showmore .alert-button-group.sc-ion-alert-ios {\n    margin-bottom: 0px;\n  }\n}\n\n::ng-deep .sc-ion-alert-ios-h.cls-alert-showmore {\n  --background: var(--ion-overlay-background-color,#fff);\n  font-size: 14px;\n  align-items: center !important;\n}\n\n::ng-deep .cls-alert-showmore {\n  align-items: center !important;\n}\n\n::ng-deep .cls-alert-showmore .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 270px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -moz-user-select: none !important;\n   -ms-user-select: none !important;\n       user-select: none !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 15px !important;\n  overflow: hidden !important;\n  width: auto;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: flex !important;\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  border-color: none;\n  background: none;\n  padding: 0;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-group.sc-ion-alert-ios {\n  margin-bottom: 0px;\n}\n\n::ng-deep .alert-button-group.sc-ion-alert-ios {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  flex-wrap: nowrap;\n  font-size: 14px !important;\n  margin-bottom: 0px;\n}\n\n::ng-deep .alert-button.sc-ion-alert-ios {\n  font-size: 14px;\n}\n\n.div-wrapimg {\n  position: relative;\n  height: 140px;\n  overflow: hidden;\n}\n\n.img-user-avatar {\n  left: 0;\n  bottom: 0;\n  -o-object-fit: contain;\n     object-fit: contain;\n  max-width: initial;\n  background-color: #dedede;\n  border-radius: 60px;\n  height: 100%;\n  width: 110px;\n  margin: 0 auto;\n  padding: 2px;\n  border: none;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-color {\n  color: #26bed6;\n  font-size: 14px;\n}\n\n.item-md, .item-ios {\n  padding-left: 0 !important;\n}\n\n.img-callcenter {\n  width: 12px;\n  height: 12px;\n}\n\n.img-heart {\n  width: 13px;\n  height: 12px;\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2ZsaWdodGFjY291bnQvZmxpZ2h0YWNjb3VudC5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZsaWdodGFjY291bnQvZmxpZ2h0YWNjb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxnQkFBQTtBQ0FSOztBREVJO0VBQ0ksdUJBQUE7QUNDUjs7QURDSTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7QUNFUjs7QURBSTtFQUNJLG9CQUFBO0FDR1I7O0FEREk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtBQ0lSOztBRERJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FDSVI7O0FERkk7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0tSOztBREhJO0VBQ0ksWUFBQTtBQ01SOztBREpJO0VBQ0ksaUJBQUE7QUNPUjs7QURKSTtFQUNJLGNBQUE7QUNPUjs7QURMSTtFQUNJLGNBQUE7QUNRUjs7QUROSTtFQUNJLGlCQUFBO0FDU1I7O0FEUEk7RUFDSSw4QkFBQTtBQ1VSOztBRFJJO0VBQ0ksZ0JBQUE7QUNXUjs7QURUSTtFQUNJLGtCQUFBO0FDWVI7O0FEVGlCO0VBQ1QsYUFBQTtBQ1lSOztBRFZJO0VBQ0ksaUJBQUE7RUFDQSx3QkFBQTtBQ2FSOztBRFhJO0VBQ0ksd0JBQUE7QUNjUjs7QURaSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDZVI7O0FEYkk7RUFDSSxrQkFBQTtBQ2dCUjs7QURkSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ2lCUjs7QURmSTtFQUNJLGlCQUFBO0FDa0JSOztBRGhCSTtFQUNJO0lBQ0ksY0FBQTtJQUNBLGdCQUFBO0VDbUJWOztFRGpCTTtJQUNJLGNBQUE7SUFDQSxnQkFBQTtFQ29CVjtBQUNGOztBRGxCSTtFQUNJO0lBQ0ksY0FBQTtJQUNBLGNBQUE7RUNvQlY7O0VEbEJNO0lBQ0ksY0FBQTtJQUNBLGNBQUE7RUNxQlY7O0VEbkJNO0lBQ0ksZUFBQTtFQ3NCVjtBQUNGOztBRHBCSTtFQUNJLGVBQUE7QUNzQlI7O0FEcEJJO0VBQ0ksZ0VBQUE7RUFDQSx3QkFBQTtBQ3VCUjs7QURuQkk7RUFDSSw4RkFBQTtFQUNBLDZCQUFBO0VBRUEsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsdURBQUE7RUFDQSw2QkFBQTtFQUNBLGlDQUFBO0dBQUEsZ0NBQUE7T0FBQSw0QkFBQTtBQ3FCUjs7QURsQkk7RUFDRSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQ29CTjs7QURsQkk7RUFDRSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3Q0FBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7QUNvQk47O0FEbEJJO0VBQ0UsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtBQ29CTjs7QURsQkk7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUZBQUE7RUFDQSx3Q0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUNvQlI7O0FEbEJNO0VBQ0Usd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QUNvQlI7O0FEbEJJO0VBQ0k7SUFDQSxrQkFBQTtFQ29CTjtBQUNGOztBRGxCSTtFQUNJLHNEQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FDb0JSOztBRGxCSTtFQUNFLDhCQUFBO0FDb0JOOztBRGxCSTtFQUNJLDhGQUFBO0VBQ0EsNkJBQUE7RUFFQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1REFBQTtFQUNBLDZCQUFBO0VBQ0EsaUNBQUE7R0FBQSxnQ0FBQTtPQUFBLDRCQUFBO0FDbUJSOztBRGhCSTtFQUNFLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDa0JOOztBRGhCSTtFQUNFLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSw4QkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7RUFDQSx3Q0FBQTtBQ2tCTjs7QURoQkk7RUFDRSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHVCQUFBO0FDa0JOOztBRGhCSTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpRkFBQTtFQUNBLHdDQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ2tCTjs7QURoQkk7RUFDRSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7QUNrQk47O0FEaEJJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNrQlI7O0FEZlE7RUFDSSxrQkFBQTtBQ2lCWjs7QURiSTtFQUVJLGFBQUE7RUFFQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUNlUjs7QURiSTtFQUNJLGVBQUE7QUNlUjs7QURUQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDWUo7O0FEVkE7RUFDSSxPQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBRUEsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ1lKOztBRFZBO0VBQ0ksa0JBQUE7QUNhSjs7QURYQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDY0o7O0FEWkE7RUFDSSwwQkFBQTtBQ2VKOztBRFpBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNlSjs7QURiQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ2dCSiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodGFjY291bnQvZmxpZ2h0YWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5yb3d7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIH1cclxuICAgIC5sYWJlbC1tZCB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDA7XHJcbiAgICB9XHJcbiAgICAubm8tbWFyZ2luLWJvdHRvbXtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDE2cHggMTZweCAxMXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxuICAgIC5kaXYtaXRlbXtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIC50aXRsZS1oZWFkZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcclxuICAgIH1cclxuXHJcbiAgICAubGFiZWwtaGVhZGVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGNvbG9yOiM0ZjRmNGY7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgICB9XHJcbiAgICAuaXRlbS1saXN0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcbiAgICAuaWNvbi1saXN0e1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgIH1cclxuICAgIC5zdXBwb3J0e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjIwcHg7XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIC5zdXBwb3J0LXRleHR7XHJcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICB9XHJcbiAgICAuc3VwcG9ydC10ZXh0LW9mZmxpbmV7XHJcbiAgICAgICAgY29sb3I6ICNiZGJkYmQ7XHJcbiAgICB9XHJcbiAgICAuc2V0dGluZ3tcclxuICAgICAgICBwYWRkaW5nLXRvcDoyMHB4O1xyXG4gICAgfVxyXG4gICAgLml0ZW0tc3VwcG9ydCAuaXRlbS1pbm5lcntcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaXRlbS1jYWxse1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcbiAgICAubGlzdC1tZCAuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgfVxyXG4gICBcclxuICAgIC5pbWctcmV2aWV3IHtpbWd7XHJcbiAgICAgICAgZmlsbDogIzI2YmVkNjtcclxuICAgIH19XHJcbiAgICAudC1yaWdodHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMHB4IDVweCAwcHg7XHJcbiAgICB9XHJcbiAgICAucy10ZXh0e1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAwcHggNXB4IDBweDtcclxuICAgIH1cclxuICAgIC5pbWctc3VwcG9ydCB7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgfVxyXG4gICAgLmltZy1zdXBwb3J0LW9mZmxpbmV7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIH1cclxuICAgIC5wLXRvcC0yMHtcclxuICAgICAgICBwYWRkaW5nLXRvcDoyMHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6MzUxcHgpIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgICAgIC5zdXBwb3J0LXRleHR7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3VwcG9ydC10ZXh0LW9mZmxpbmV7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYmRiZGJkO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOjI4N3B4KSBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcclxuICAgICAgICAuc3VwcG9ydC10ZXh0e1xyXG4gICAgICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdXBwb3J0LXRleHQtb2ZmbGluZXtcclxuICAgICAgICAgICAgY29sb3I6ICNiZGJkYmQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaXRlbS1saXN0e1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZmxpZ2h0YWNjb3VudC1oZWFkZXJ7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgfVxyXG4gICAgLmZsaWdodGFjY291bnQtY29udGVudHtcclxuICAgICAgICBwYWRkaW5nOiBjYWxjKCBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkgKyA4MHB4KSAxNnB4IDkwcHggMTFweDtcclxuICAgICAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgICB9XHJcbi8vLy8vLy8vLy8vLy8vXHJcbjo6bmctZGVlcCB7XHJcbiAgICBjbHMtYWxlcnQtc2hvd21vcmUgLnNjLWlvbi1hbGVydC1pb3MtaCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjZjlmOWY5KSkgIWltcG9ydGFudDtcclxuICAgICAgICAtLW1heC13aWR0aDogMjkwcHggIWltcG9ydGFudDtcclxuICAgICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAtLW1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAtLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvdWNoLWFjdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEzcHggIWltcG9ydGFudDtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogdmFyKC0td2lkdGgpICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCkgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLW1pbi1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1heC1oZWlnaHQ6IHZhcigtLW1heC1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLC4yKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICAgIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2JkYmRiZDtcclxuICAgICAgfVxyXG4gICAgQG1lZGlhIChtYXgtaGVpZ2h0OiAxMDI0cHgpIGFuZCAobWluLWhlaWdodDogODEycHgpe1xyXG4gICAgICAgIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICAuc2MtaW9uLWFsZXJ0LWlvcy1oLmNscy1hbGVydC1zaG93bW9yZXtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsI2ZmZik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jbHMtYWxlcnQtc2hvd21vcmUge1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIFxyXG4gICAgLnNjLWlvbi1hbGVydC1pb3MtaCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjZjlmOWY5KSkgIWltcG9ydGFudDtcclxuICAgICAgICAtLW1heC13aWR0aDogMjcwcHggIWltcG9ydGFudDtcclxuICAgICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAtLW1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAtLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvdWNoLWFjdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtaW9ze1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcclxuICAgICAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgbWF4LWhlaWdodDogdmFyKC0tbWF4LWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9ze1xyXG4gICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgICAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci10b3A6IC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLDAsMCwwKSwuMikgIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZHtcclxuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcclxuICAgICAgICBib3JkZXItY29sb3I6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtaGVpZ2h0OiAxMDI0cHgpIGFuZCAobWluLWhlaWdodDogODEycHgpe31cclxuICAgICAgICAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gIH1cclxuXHJcbiAgICAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xyXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICBcclxuICB9XHJcblxyXG4vL2F2YXRhciBzdHlsZVxyXG4uZGl2LXdyYXBpbWcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmltZy11c2VyLWF2YXRhciB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIG1heC13aWR0aDogaW5pdGlhbDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgXHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRleHQtY29sb3J7XHJcbiAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uaXRlbS1tZCwuaXRlbS1pb3Mge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbWctY2FsbGNlbnRlcntcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG59XHJcbi5pbWctaGVhcnR7XHJcbiAgICB3aWR0aDoxM3B4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59IiwiLnJvdyB7XG4gIHBhZGRpbmctdG9wOiAycHg7XG59XG5cbi5sYWJlbC1tZCB7XG4gIG1hcmdpbjogMTBweCAwcHggMTBweCAwO1xufVxuXG4ubm8tbWFyZ2luLWJvdHRvbSB7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAxNnB4IDExcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmRpdi1pdGVtIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi50aXRsZS1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG59XG5cbi5sYWJlbC1oZWFkZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbn1cblxuLml0ZW0tbGlzdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmljb24tbGlzdCB7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLnN1cHBvcnQge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnN1cHBvcnQtdGV4dCB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuXG4uc3VwcG9ydC10ZXh0LW9mZmxpbmUge1xuICBjb2xvcjogI2JkYmRiZDtcbn1cblxuLnNldHRpbmcge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLml0ZW0tc3VwcG9ydCAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLml0ZW0tY2FsbCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5saXN0LW1kIC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuXG4uaW1nLXJldmlldyBpbWcge1xuICBmaWxsOiAjMjZiZWQ2O1xufVxuXG4udC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiA1cHggMHB4IDVweCAwcHg7XG59XG5cbi5zLXRleHQge1xuICBwYWRkaW5nOiA1cHggMHB4IDVweCAwcHg7XG59XG5cbi5pbWctc3VwcG9ydCB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG5cbi5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbi5pbWctc3VwcG9ydC1vZmZsaW5lIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4ucC10b3AtMjAge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDM1MXB4KSBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLnN1cHBvcnQtdGV4dCB7XG4gICAgY29sb3I6ICMyNmJlZDY7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuXG4gIC5zdXBwb3J0LXRleHQtb2ZmbGluZSB7XG4gICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDI4N3B4KSBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcbiAgLnN1cHBvcnQtdGV4dCB7XG4gICAgY29sb3I6ICMyNmJlZDY7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gIH1cblxuICAuc3VwcG9ydC10ZXh0LW9mZmxpbmUge1xuICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICB9XG5cbiAgLml0ZW0tbGlzdCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG4uZmxpZ2h0YWNjb3VudC1oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5mbGlnaHRhY2NvdW50LWNvbnRlbnQge1xuICBwYWRkaW5nOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSArIDgwcHgpIDE2cHggOTBweCAxMXB4O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG59XG5cbjo6bmctZGVlcCBjbHMtYWxlcnQtc2hvd21vcmUgLnNjLWlvbi1hbGVydC1pb3MtaCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Y5ZjlmOSkpICFpbXBvcnRhbnQ7XG4gIC0tbWF4LXdpZHRoOiAyOTBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgLS1taW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpICFpbXBvcnRhbnQ7XG4gIHRvdWNoLWFjdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9zIHtcbiAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogdmFyKC0tbWF4LWhlaWdodCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xuICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAwLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZikgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG87XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNiZGJkYmQ7XG59XG5AbWVkaWEgKG1heC1oZWlnaHQ6IDEwMjRweCkgYW5kIChtaW4taGVpZ2h0OiA4MTJweCkge1xuICA6Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxufVxuOjpuZy1kZWVwIC5zYy1pb24tYWxlcnQtaW9zLWguY2xzLWFsZXJ0LXNob3dtb3JlIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLnNjLWlvbi1hbGVydC1pb3MtaCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Y5ZjlmOSkpICFpbXBvcnRhbnQ7XG4gIC0tbWF4LXdpZHRoOiAyNzBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgLS1taW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpICFpbXBvcnRhbnQ7XG4gIHRvdWNoLWFjdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9zIHtcbiAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogdmFyKC0tbWF4LWhlaWdodCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xuICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAwLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZikgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG87XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcbiAgYm9yZGVyLWNvbG9yOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuOjpuZy1kZWVwIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuOjpuZy1kZWVwIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRpdi13cmFwaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDE0MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaW1nLXVzZXItYXZhdGFyIHtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBtYXgtd2lkdGg6IGluaXRpYWw7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDExMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQtY29sb3Ige1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaXRlbS1tZCwgLml0ZW0taW9zIHtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5pbWctY2FsbGNlbnRlciB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG59XG5cbi5pbWctaGVhcnQge1xuICB3aWR0aDogMTNweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBvcGFjaXR5OiAwLjc7XG59Il19 */"

/***/ }),

/***/ "./src/app/flightaccount/flightaccount.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/flightaccount/flightaccount.page.ts ***!
  \*****************************************************/
/*! exports provided: FlightaccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightaccountPage", function() { return FlightaccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _network_provider_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../network-provider.service */ "./src/app/network-provider.service.ts");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _cuspoints_cuspoints__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../cuspoints/cuspoints */ "./src/app/cuspoints/cuspoints.ts");
/* harmony import */ var _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../providers/bizTravelService */ "./src/app/providers/bizTravelService.ts");



















let FlightaccountPage = class FlightaccountPage {
    constructor(platform, navCtrl, storage, modalCtrl, router, callNumber, valueGlobal, zone, alertCtrl, gf, loadingCtrl, network, networkProvider, actionsheetCtrl, camera, crop, file, fcm, _flightService, bizTravelService) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.callNumber = callNumber;
        this.valueGlobal = valueGlobal;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.gf = gf;
        this.loadingCtrl = loadingCtrl;
        this.network = network;
        this.networkProvider = networkProvider;
        this.actionsheetCtrl = actionsheetCtrl;
        this.camera = camera;
        this.crop = crop;
        this.file = file;
        this.fcm = fcm;
        this._flightService = _flightService;
        this.bizTravelService = bizTravelService;
        this.loginuser = null;
        this.username = null;
        this.listSupport = [];
        this.isShowConfirm = false;
        this.point = 0;
        this.point = 0;
        storage.get('auth_token').then(auth_token => {
            this.loginuser = auth_token;
        });
        setInterval(() => {
            this.refreshUserName();
            this.refreshPoint();
        }, 20000);
        gf.googleAnalytion('show-more', 'Search', '');
        this.networkProvider.getNetworkStatus().subscribe((connected) => {
            this.isConnected = connected;
            if (this.isConnected) {
                setTimeout(() => {
                    this.loadEmployeeSupport();
                }, 100);
            }
            else {
                this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
            }
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            se.storage.get('auth_token').then(auth_token => {
                if (auth_token) {
                    se.zone.run(() => {
                        se.loginuser = auth_token;
                        se.refreshUserName();
                        se.point = 0;
                        se.storage.get('point').then(point => {
                            se.point = point;
                        });
                    });
                    se.onRefreshAvatar();
                }
                else {
                    se.loginuser = null;
                    se.username = "";
                    se.point = 0;
                }
            });
            se._flightService.itemMenuFlightClick.pipe().subscribe(data => {
                if (data == 4) {
                    se.isConnected = true;
                    setTimeout(() => {
                        se.storage.get('auth_token').then(auth_token => {
                            if (auth_token) {
                                se.zone.run(() => {
                                    se.loginuser = auth_token;
                                    se.refreshUserName();
                                    se.point = 0;
                                    se.storage.get('point').then(point => {
                                        se.zone.run(() => {
                                            se.point = point;
                                        });
                                    });
                                });
                                se.onRefreshAvatar();
                            }
                            else {
                                se.loginuser = null;
                                se.username = "";
                                se.point = 0;
                            }
                        });
                    }, 350);
                }
            });
        });
    }
    onRefreshAvatar() {
        var se = this;
        se.zone.run(() => {
            se.storage.get('userInfoData').then((data) => {
                if (data) {
                    se.avatar = data.avatar;
                    if (data.bizAccount) {
                        se.bizTravelService.bizAccount = data.bizAccount;
                        se.bizTravelService.isCompany = true;
                    }
                    else {
                        se.bizTravelService.bizAccount = null;
                        se.bizTravelService.isCompany = false;
                    }
                }
                else {
                    se.loadUserInfo();
                    se.bizTravelService.accountBizTravelChange.emit(1);
                }
            });
            if (se.gf.getParams('userAvatar')) {
                se.croppedImagepath = se.gf.getParams('userAvatar');
            }
        });
    }
    refreshUserName() {
        this.storage.get('username').then(username => {
            this.username = username;
        });
    }
    refreshPoint() {
        this.storage.get('point').then(point => {
            this.zone.run(() => {
                this.point = point;
            });
        });
    }
    loadEmployeeSupport() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/BookingMemberDetailByUser',
                    timeout: 100000, maxAttempts: 5, retryDelay: 20000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                    if (error) {
                        error.page = "show-more";
                        error.func = "loadEmployeeSupport";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                    }
                    else {
                        if (body) {
                            se.zone.run(() => {
                                var listemployee = JSON.parse(body);
                                listemployee.forEach(element => {
                                    if (se.listSupport.length == 0) {
                                        se.listSupport.push(element);
                                    }
                                    else if (!se.checkExistEmployee(se.listSupport, element)) {
                                        se.listSupport.push(element);
                                    }
                                });
                            });
                        }
                        else {
                        }
                    }
                });
            }
        });
    }
    checkExistEmployee(list, itemcheck) {
        var se = this, res = false;
        var obj = list.filter((item) => { return item.name == itemcheck.name; });
        if (obj && obj.length > 0) {
            res = true;
        }
        return res;
    }
    enabledTabbar() {
        let elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map((key) => {
                elements[key].style.display = 'flex';
            });
        }
    }
    ionViewDidLoad() {
        this.enabledTabbar();
        this.platform.ready().then(() => {
            this.platform.backButton.subscribe(() => {
                this.navCtrl.navigateRoot('/');
            });
        });
    }
    ionViewWillEnter() {
        var se = this;
        se.point = 0;
        this.loginuser = null;
        se.storage.get('auth_token').then(auth_token => {
            this.loginuser = auth_token;
        });
        if (this.networkProvider.isOnline()) {
            this.isConnected = true;
            setTimeout(() => {
                this.loadEmployeeSupport();
                this.GetUserInfo();
            }, 100);
            this.loadUserInfo();
            this.bizTravelService.accountBizTravelChange.emit(1);
        }
        else {
            this.isConnected = false;
            this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
        }
        setTimeout(() => {
            se.zone.run(() => {
                se.storage.get('auth_token').then(auth_token => {
                    se.loginuser = auth_token;
                    se.storage.get('username').then(username => {
                        se.username = username;
                    });
                    se.storage.get('point').then(point => {
                        se.zone.run(() => {
                            se.point = point;
                        });
                    });
                });
            });
        }, 100);
        if (document.querySelector(".tabbar")) {
            document.querySelector(".tabbar")['style'].display = 'flex';
        }
    }
    ionViewDidEnter() {
        var se = this;
        se.storage.get('username').then(username => {
            se.username = username;
        });
    }
    handleSplashScreen() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.platform.ready();
            }
            catch (error) {
                if (error) {
                    error.page = "show-more";
                    error.func = "handleSplashScreen";
                    _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, null);
                    throw new Error(error);
                }
                ;
            }
            const splash = document.getElementById('splash-screen');
            if (splash) {
                splash.style.opacity = '0';
                setTimeout(() => { splash.remove(); }, 300);
            }
        });
    }
    goToLogin() {
        this.valueGlobal.logingoback = "";
        this.valueGlobal.backValue = 'flightaccount';
        this.navCtrl.navigateForward('/login');
    }
    goToLogout() {
        this.storage.get('auth_token').then(id_token => {
            if (id_token !== null) {
                this.showConfirmLogout('Bạn có chắc chắn muốn đăng xuất?', id_token);
            }
        });
    }
    makeCallSupport(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                let tel = "19001870";
                if (value == 1) {
                    tel = "19002045";
                }
                else if (value == 2) {
                    tel = "19001870";
                }
                else if (value > 3) {
                    tel = value;
                }
                else {
                    tel = "19002087";
                }
                setTimeout(() => {
                    this.callNumber.callNumber(tel, true);
                }, 100);
            }
            catch (error) {
                if (error) {
                    error.page = "show-more";
                    error.func = "makeCallSupport";
                    _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, null);
                }
                ;
            }
            this.gf.googleAnalytion('show-more', 'callsupport', '');
        });
    }
    showConfirm(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: msg,
                cssClass: "cls-alert-showmore",
                buttons: [
                    {
                        text: 'Để sau',
                        handler: () => {
                            this.storage.remove('auth_token');
                            this.storage.remove('email');
                            this.storage.remove('username');
                            this.storage.remove('jti');
                            this.storage.remove('userInfoData');
                            this.storage.remove('userRewardData');
                            this.storage.remove('point');
                            this.storage.remove('infocus');
                            this.zone.run(() => {
                                this.point = 0;
                                this.loginuser = null;
                                this.username = "";
                                this.valueGlobal.countNotifi = 0;
                                this.isShowConfirm = false;
                            });
                            if (this.modalCtrl) {
                                this.modalCtrl.dismiss();
                            }
                            this.navCtrl.navigateBack('/');
                        }
                    },
                    {
                        text: 'Đăng nhập',
                        role: 'OK',
                        handler: () => {
                            this.storage.remove('auth_token');
                            this.storage.remove('email');
                            this.storage.remove('username');
                            this.storage.remove('jti');
                            this.storage.remove('userInfoData');
                            this.storage.remove('userRewardData');
                            this.storage.remove('point');
                            this.storage.remove('infocus');
                            this.zone.run(() => {
                                this.point = 0;
                                this.loginuser = null;
                                this.username = "";
                                this.valueGlobal.countNotifi = 0;
                                this.isShowConfirm = false;
                            });
                            if (this.modalCtrl) {
                                this.modalCtrl.dismiss();
                            }
                            this.navCtrl.navigateForward('/login');
                        }
                    }
                ]
            });
            alert.present();
            alert.onDidDismiss().then((data) => {
                this.storage.remove('auth_token');
                this.storage.remove('email');
                this.storage.remove('username');
                this.storage.remove('jti');
                this.storage.remove('userInfoData');
                this.storage.remove('userRewardData');
                this.storage.remove('point');
                this.storage.remove('infocus');
                this.zone.run(() => {
                    this.point = 0;
                    this.loginuser = null;
                    this.username = "";
                    this.valueGlobal.countNotifi = 0;
                    this.isShowConfirm = false;
                });
                this.navCtrl.navigateBack('/');
            });
        });
    }
    showConfirmLogin(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: msg,
                cssClass: "cls-alert-showmore",
                buttons: [
                    {
                        text: 'Để sau',
                        handler: () => {
                            this.storage.remove('auth_token');
                            this.storage.remove('email');
                            this.storage.remove('username');
                            this.storage.remove('jti');
                            this.storage.remove('userInfoData');
                            this.storage.remove('userRewardData');
                            this.storage.remove('point');
                            this.storage.remove('infocus');
                            this.zone.run(() => {
                                this.point = 0;
                                this.loginuser = null;
                                this.username = "";
                                this.valueGlobal.countNotifi = 0;
                                this.isShowConfirm = false;
                            });
                            if (this.modalCtrl) {
                                this.modalCtrl.dismiss();
                            }
                            this.valueGlobal.backValue = 'foodaccount';
                            this.navCtrl.navigateBack('/');
                        }
                    },
                    {
                        text: 'Đăng nhập',
                        role: 'OK',
                        handler: () => {
                            this.storage.remove('auth_token');
                            this.storage.remove('email');
                            this.storage.remove('username');
                            this.storage.remove('jti');
                            this.storage.remove('userInfoData');
                            this.storage.remove('userRewardData');
                            this.storage.remove('point');
                            this.storage.remove('infocus');
                            this.zone.run(() => {
                                this.point = 0;
                                this.loginuser = null;
                                this.username = "";
                                this.valueGlobal.countNotifi = 0;
                                this.isShowConfirm = false;
                            });
                            if (this.modalCtrl) {
                                this.modalCtrl.dismiss();
                            }
                            this.valueGlobal.backValue = 'foodaccount';
                            this.navCtrl.navigateForward('/login');
                        }
                    }
                ]
            });
            alert.present();
            alert.onDidDismiss().then((data) => {
                this.isShowConfirm = false;
            });
        });
    }
    showConfirmLogout(msg, id_token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: msg,
                cssClass: "cls-alert-showmore",
                buttons: [{
                        text: 'Có',
                        role: 'OK',
                        handler: () => {
                            this.storage.remove('auth_token');
                            this.storage.remove('email');
                            this.storage.remove('username');
                            this.storage.remove('jti');
                            this.storage.remove('userInfoData');
                            this.storage.remove('userRewardData');
                            this.storage.remove('weatherInfo');
                            this.storage.remove('point');
                            this.storage.remove('infocus');
                            this.gf.setParams(true, 'resetBlogTrips');
                            this.storage.remove('listblogtripdefault');
                            this.croppedImagepath = null;
                            this.avatar = null;
                            this.valueGlobal.backValue = 'tab5';
                            this.zone.run(() => {
                                this.point = 0;
                                this.loginuser = null;
                                this.username = "";
                                this.valueGlobal.countNotifi = 0;
                                this.isShowConfirm = false;
                                this.bizTravelService.bizAccount = null;
                                this.bizTravelService.actionHistory = null;
                                this.bizTravelService.isCompany = false;
                            });
                            this.bizTravelService.accountBizTravelChange.emit(2);
                            this.fcm.getToken().then(token => {
                                this.gf.DeleteTokenOfUser(token, id_token, this.gf.getAppVersion());
                            });
                            this.valueGlobal.backValue = 'flightaccount';
                            this.navCtrl.navigateForward('/login');
                        }
                    },
                    {
                        text: 'Không',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    showUserReward() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                this.navCtrl.navigateForward('/userreward');
            }
            else {
                if (se.isShowConfirm)
                    return;
                se.showConfirmLogin("Bạn cần đăng nhập để sử dụng chức năng này.");
                se.isShowConfirm = true;
            }
        });
        se.gf.googleAnalytion('show-more', 'Search', 'userreward');
    }
    showUserProfile() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                this.gf.setParams(se.croppedImagepath, 'userAvatar');
                this.navCtrl.navigateForward('/userprofile');
            }
            else {
                if (se.isShowConfirm)
                    return;
                se.showConfirmLogin("Bạn cần đăng nhập để sử dụng chức năng này.");
                se.isShowConfirm = true;
            }
        });
        se.gf.googleAnalytion('show-more', 'Search', 'userprofile');
    }
    Point() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                this.presentModal(_cuspoints_cuspoints__WEBPACK_IMPORTED_MODULE_17__["CuspointsPage"]);
            }
            else {
                if (se.isShowConfirm)
                    return;
                se.showConfirmLogin("Bạn cần đăng nhập để sử dụng chức năng này.");
                se.isShowConfirm = true;
            }
        });
        se.gf.googleAnalytion('show-more', 'Search', 'userpoint');
    }
    showUserReviews() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                this.navCtrl.navigateForward('/userreviews');
            }
            else {
                if (se.isShowConfirm)
                    return;
                se.showConfirmLogin("Bạn cần đăng nhập để sử dụng chức năng này.");
                se.isShowConfirm = true;
            }
        });
        se.gf.googleAnalytion('show-more', 'Search', 'userreviews');
    }
    presentModal(comp) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: comp,
                componentProps: {
                    aParameter: true,
                }
            });
            modal.present();
        });
    }
    sendSMSSupport() {
        this.presentLoadingnavi();
        var se = this;
        this.navCtrl.navigateForward('/sendsms');
    }
    presentLoadingnavi() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var loader = yield this.loadingCtrl.create({
                message: "",
                duration: 1000
            });
            loader.present();
        });
    }
    showUserTravelHobby() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                se.navCtrl.navigateForward('/usertravelhobby');
            }
            else {
                if (se.isShowConfirm)
                    return;
                se.showConfirmLogin("Bạn cần đăng nhập để sử dụng chức năng này.");
                se.isShowConfirm = true;
            }
        });
    }
    loadUserInfo() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "userprofile",
                            func: "loadUserInfo",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "userprofile";
                        error.func = "loadUserInfo";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                    }
                    else {
                        if (body) {
                            var data = JSON.parse(body);
                            se.zone.run(() => {
                                se.avatar = data.avatar;
                            });
                            se.storage.remove('userInfoData');
                            se.storage.set('userInfoData', data);
                            if (data.bizAccount) {
                                se.bizTravelService.bizAccount = data.bizAccount;
                                se.bizTravelService.isCompany = true;
                            }
                            else {
                                se.bizTravelService.bizAccount = null;
                                se.bizTravelService.isCompany = false;
                            }
                        }
                    }
                });
            }
        });
    }
    changeAvatar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let actionSheet = yield this.actionsheetCtrl.create({
                cssClass: 'action-sheets-basic-page',
                buttons: [
                    {
                        text: 'Chụp ảnh',
                        role: 'destructive',
                        icon: 'camera',
                        handler: () => {
                            this.captureImage();
                        }
                    },
                    {
                        text: 'Chọn ảnh từ bộ sưu tập',
                        icon: 'image',
                        handler: () => {
                            this.captureImageGallery();
                        }
                    },
                ]
            });
            actionSheet.present();
        });
    }
    captureImageGallery() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            const options = {
                quality: 76,
                sourceType: se.camera.PictureSourceType.SAVEDPHOTOALBUM,
                destinationType: se.camera.DestinationType.FILE_URI,
                encodingType: se.camera.EncodingType.JPEG,
                mediaType: se.camera.MediaType.PICTURE,
                saveToPhotoAlbum: true,
                correctOrientation: true,
            };
            se.camera.getPicture(options).then((imageData) => {
                let filename, path;
                se.base64Image = imageData;
                path = imageData.substring(0, imageData.lastIndexOf('/') + 1);
                filename = imageData.substring(imageData.lastIndexOf('/') + 1);
                let index = filename.indexOf('?');
                if (index > -1) {
                    filename = filename.substring(0, index);
                }
                se.croppedImagefilename = filename;
                se.cropImage(imageData);
            });
        });
    }
    captureImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            const options = {
                quality: 76,
                destinationType: this.camera.DestinationType.FILE_URI,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                sourceType: this.camera.PictureSourceType.CAMERA,
                correctOrientation: true,
            };
            this.zone.run(() => {
                this.camera.getPicture(options).then((imageData) => {
                    let filename, path;
                    se.base64Image = imageData;
                    path = imageData.substring(0, imageData.lastIndexOf('/') + 1);
                    filename = imageData.substring(imageData.lastIndexOf('/') + 1);
                    let index = filename.indexOf('?');
                    if (index > -1) {
                        filename = filename.substring(0, index);
                    }
                    se.croppedImagefilename = filename;
                    se.cropImage(imageData);
                });
            });
        });
    }
    uploadAvatar(image) {
        var se = this;
        se.getFullImage(se.base64Image.split('?')[0]).then((data) => {
            se.storage.get('auth_token').then(auth_token => {
                if (auth_token) {
                    var text = "Bearer " + auth_token;
                    var options = {
                        method: 'POST',
                        url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/dashboard/UploadAvatarBase64',
                        headers: {
                            Authorization: text,
                        },
                        body: {
                            "imgBase64Full": data,
                            "imgBase64Crop": image,
                            "fileExtension": se.fileType
                        },
                        json: true
                    };
                    requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                        if (error) {
                            error.page = "userprofile";
                            error.func = "captureImage";
                            error.param = JSON.stringify(options);
                            _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                        }
                        else {
                            se.storage.remove('userInfoData');
                        }
                    });
                }
            });
        });
    }
    cropImage(imgPath) {
        this.crop.crop(imgPath, { quality: 100 })
            .then(newPath => {
            this.showCroppedImage(newPath.split('?')[0]);
        }, error => {
            throw error;
        });
    }
    getFullImage(ImagePath) {
        return new Promise((resolve, reject) => {
            var copyPath = ImagePath;
            var splitPath = copyPath.split('/');
            var imageName = splitPath[splitPath.length - 1];
            var filePath = ImagePath.split(imageName)[0];
            var splitType = imageName.split('.');
            var imageType = splitType[splitType.length - 1];
            var se = this;
            se.file.readAsDataURL(filePath, imageName).then(base64 => {
                let b64 = base64.split(',')[1];
                resolve(b64);
            });
        });
    }
    showCroppedImage(ImagePath) {
        var copyPath = ImagePath;
        var splitPath = copyPath.split('/');
        var imageName = splitPath[splitPath.length - 1];
        var filePath = ImagePath.split(imageName)[0];
        var splitType = imageName.split('.');
        var imageType = splitType[splitType.length - 1];
        var se = this;
        se.fileType = imageType;
        se.file.readAsDataURL(filePath, imageName).then(base64 => {
            se.zone.run(() => {
                se.croppedImagepath = base64;
            });
            const contentType = 'image/' + imageType;
            let b64 = base64.split(',')[1];
            se.uploadAvatar(b64);
        });
    }
    doRefresh(event) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                se.loginuser = auth_token;
                se.zone.run(() => {
                    se.refreshUserName();
                    se.storage.get('point').then(point => {
                        se.point = point;
                    });
                });
            }
        });
        setTimeout(() => {
            event.target.complete();
        }, 500);
    }
    GetUserInfo() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "roomdetailreview",
                            func: "GetUserInfo",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "roomdetailreview";
                        error.func = "GetUserInfo";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                    }
                    else if (response.statusCode == 401) {
                        se.storage.get('jti').then((memberid) => {
                            se.storage.get('deviceToken').then((devicetoken) => {
                                se.gf.refreshToken(memberid, devicetoken).then((token) => {
                                    se.loginuser = token;
                                    se.storage.remove('auth_token').then(() => {
                                        se.storage.set('auth_token', token);
                                    });
                                    setTimeout(() => {
                                        se.GetUserInfoRefresh(token);
                                    }, 100);
                                });
                            });
                        });
                    }
                    else {
                        if (body) {
                            var data = JSON.parse(body);
                            var info;
                            var checkfullname = se.validateEmail(data.fullname);
                            if (!checkfullname) {
                                var textfullname = data.fullname.split(' ');
                                if (textfullname.length > 2) {
                                    let name = '';
                                    for (let i = 1; i < textfullname.length; i++) {
                                        if (i == 1) {
                                            name += textfullname[i];
                                        }
                                        else {
                                            name += ' ' + textfullname[i];
                                        }
                                    }
                                    info = { ho: textfullname[0], ten: name, phone: data.phone };
                                }
                                else {
                                    info = { ho: textfullname[0], ten: textfullname[1], phone: data.phone };
                                }
                                se.storage.set("infocus", info);
                            }
                            else {
                                info = { ho: "", ten: "", phone: data.phone };
                                se.storage.set("infocus", info);
                            }
                            se.storage.set("email", data.email);
                            se.storage.set("jti", data.memberId);
                            se.storage.set("username", data.fullname);
                            se.storage.set("phone", data.phone);
                            se.storage.set("point", data.point);
                            se.storage.get('auth_token').then(auth_token => {
                                se.loginuser = auth_token;
                            });
                            se.storage.get('username').then(username => {
                                se.username = username;
                            });
                            se.storage.get('point').then(point => {
                                se.point = point;
                            });
                            se.point = data.point;
                            if (data.bizAccount) {
                                se.bizTravelService.bizAccount = data.bizAccount;
                                se.bizTravelService.isCompany = true;
                            }
                        }
                    }
                });
            }
        });
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    GetUserInfoRefresh(token) {
        var se = this;
        if (token) {
            var text = "Bearer " + token;
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
                timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                headers: {
                    'cache-control': 'no-cache',
                    'content-type': 'application/json',
                    authorization: text
                }
            };
            requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                if (response.statusCode != 200) {
                    var objError = {
                        page: "roomdetailreview",
                        func: "GetUserInfo",
                        message: response.statusMessage,
                        content: response.body,
                        type: "warning",
                        param: JSON.stringify(options)
                    };
                    _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response);
                }
                if (error) {
                    error.page = "roomdetailreview";
                    error.func = "GetUserInfo";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                }
                else {
                    if (body) {
                        var data = JSON.parse(body);
                        var info;
                        se.point = data.point;
                        var checkfullname = se.validateEmail(data.fullname);
                        if (!checkfullname) {
                            var textfullname = data.fullname.split(' ');
                            if (textfullname.length > 2) {
                                let name = '';
                                for (let i = 1; i < textfullname.length; i++) {
                                    if (i == 1) {
                                        name += textfullname[i];
                                    }
                                    else {
                                        name += ' ' + textfullname[i];
                                    }
                                }
                                info = { ho: textfullname[0], ten: name, phone: data.phone };
                            }
                            else {
                                info = { ho: textfullname[0], ten: textfullname[1], phone: data.phone };
                            }
                            se.storage.set("infocus", info);
                        }
                        else {
                            info = { ho: "", ten: "", phone: data.phone };
                            se.storage.set("infocus", info);
                        }
                        se.storage.set("email", data.email);
                        se.storage.set("jti", data.memberId);
                        se.storage.set("username", data.fullname);
                        se.storage.set("phone", data.phone);
                        se.storage.set("point", data.point);
                        se.zone.run(() => {
                            se.username = data.fullname;
                        });
                        if (data.bizAccount) {
                            se.bizTravelService.bizAccount = data.bizAccount;
                            se.bizTravelService.isCompany = true;
                        }
                    }
                }
            });
        }
    }
    showCompanyInfo() {
        this.navCtrl.navigateForward('/companyinfo');
    }
};
FlightaccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-flightaccount',
        template: __webpack_require__(/*! ./flightaccount.page.html */ "./src/app/flightaccount/flightaccount.page.html"),
        styles: [__webpack_require__(/*! ./flightaccount.page.scss */ "./src/app/flightaccount/flightaccount.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_16__["CallNumber"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["ValueGlobal"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"],
        _network_provider_service__WEBPACK_IMPORTED_MODULE_10__["NetworkProvider"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__["Camera"],
        _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_11__["Crop"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"],
        _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_14__["FCM"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_15__["flightService"],
        _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_18__["BizTravelService"]])
], FlightaccountPage);



/***/ }),

/***/ "./src/app/flightmytrip/flightmytrip.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/flightmytrip/flightmytrip.module.ts ***!
  \*****************************************************/
/*! exports provided: FlightmytripPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightmytripPageModule", function() { return FlightmytripPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightmytrip_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flightmytrip.page */ "./src/app/flightmytrip/flightmytrip.page.ts");






let FlightmytripPageModule = class FlightmytripPageModule {
};
FlightmytripPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        declarations: [_flightmytrip_page__WEBPACK_IMPORTED_MODULE_5__["FlightmytripPage"]],
        exports: [_flightmytrip_page__WEBPACK_IMPORTED_MODULE_5__["FlightmytripPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FlightmytripPageModule);



/***/ }),

/***/ "./src/app/flightmytrip/flightmytrip.page.html":
/*!*****************************************************!*\
  !*** ./src/app/flightmytrip/flightmytrip.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"flight-mytrip-header\">\n    <ion-toolbar>\n        <ion-title class=\"text-title\">\n          Chuyến đi của tôi\n        </ion-title>\n        <ion-buttons slot=\"primary\" (click)=\"refreshData()\">\n          <button ion-button icon-only class=\"btn-header\">\n            <img class=\"img-refresh\" src=\"./assets/imgs/refresh.svg\" >\n            </button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-row>\n        <ion-segment [(ngModel)]=\"tabflight\" class=\"div-segment\"  mode=\"md\">\n          <ion-segment-button (click)=\"Selecttab(1)\" mode=\"md\" style=\"text-transform: inherit;\" value=\"1\">\n            Sắp đi {{ nextflightcounttext }}\n            </ion-segment-button>\n            <ion-segment-button (click)=\"Selecttab(2)\" mode=\"md\" style=\"text-transform: inherit;\" value=\"2\" >\n            Đã đi {{ historyflightcounttext }}\n            </ion-segment-button>\n          \n          </ion-segment>\n      </ion-row>\n</ion-header>\n\n    <div class=\"div-flight-mytrip-content\">\n    <div *ngIf=\"hasloaddata else loadsk\">\n        <div *ngIf=\"tabflight ==1 else historyTab\">\n            <div *ngIf=\"(listMyTrips && listMyTrips.length >0) else mytripEmpty\">\n                <ion-list *ngFor=\"let trip of listMyTrips; let i = index\" class=\"div-flight-mytrip\">\n                    <div [ngClass]=\"i == 0 ? 'div-mytrip m-top-24' : 'div-mytrip'\">\n                    <div [ngClass]=\"i == 0 ? 'first-content m-top-42' : 'first-content'\">\n                    <ion-item-group >\n                          <ion-row class=\"row-bkg-id\" >\n                            <ion-col size=\"8\" class=\"col-flight-mytrip\"><label>BookingID: <span class=\"bkg-id\">{{trip.booking_id}}</span></label></ion-col>\n                            <ion-col size=\"4\" class=\"col-flight-mytrip col-bkg-status\"\n                              *ngIf=\"trip.payment_status != 9 && (trip.payment_status != 3 && trip.payment_status != -2) && trip.bookingsComboData.length>1\">\n                              <label *ngIf=\"(trip.payment_status == 1 || trip.payment_status == 5) && trip.bookingsComboData[0].issueTicketDate && trip.bookingsComboData[1].issueTicketDate\"\n                                class=\"fly-bkg-code\">Đã xuất vé</label>\n                                <label *ngIf=\"(trip.payment_status == 1 || trip.payment_status == 5) && (!trip.bookingsComboData[0].issueTicketDate || !trip.bookingsComboData[1].issueTicketDate)\"\n                                class=\"fly-bkg-code\">Đã thanh toán</label>\n                              <label *ngIf=\"!(trip.payment_status == 1 || trip.payment_status == 5)\" class=\"fly-bkg-code\">Chưa thanh toán</label>\n                            </ion-col>\n                            <ion-col size=\"4\" class=\"col-flight-mytrip col-bkg-status\"\n                            *ngIf=\"trip.payment_status != 9 && (trip.payment_status != 3 && trip.payment_status != -2) && trip.bookingsComboData.length==1\">\n                            <label *ngIf=\"(trip.payment_status == 1 || trip.payment_status == 5) && trip.bookingsComboData[0].issueTicketDate\"\n                              class=\"fly-bkg-code\">Đã xuất vé</label>\n                              <label *ngIf=\"(trip.payment_status == 1 || trip.payment_status == 5) && !trip.bookingsComboData[0].issueTicketDate\"\n                              class=\"fly-bkg-code\">Đã thanh toán</label>\n                            <label *ngIf=\"!(trip.payment_status == 1 || trip.payment_status == 5)\" class=\"fly-bkg-code\">Chưa thanh toán</label>\n                          </ion-col>\n                            <ion-col size=\"4\" class=\"col-flight-mytrip col-bkg-status\"  *ngIf=\"trip.payment_status == 9\">\n                              <label class=\"fly-bkg-code\">\n                                Chờ hỏi phòng\n                              </label>\n                            </ion-col>\n                            <ion-col size=\"4\" class=\"col-flight-mytrip col-bkg-status\" style=\"text-align: right;font-size: 12px;color:#f79221;padding: 5px 5px 5px 0px;\" *ngIf=\"(trip.payment_status == 3 || trip.payment_status == -2)\">\n                              Đã hủy\n                            </ion-col>\n                          </ion-row>\n                          <ion-row *ngIf=\"trip.payment_status == 3 || trip.payment_status == -2\">\n                            <ion-col class=\"col-flight-mytrip\">\n                              {{ trip.cancellation_policy}}\n                            </ion-col>\n                          </ion-row>\n                          \n                          <div *ngIf=\"trip.combo_name\" >\n                            <ion-label class=\"label-comboname\">{{trip.combo_name}}</ion-label>\n                          </div>\n        \n                          <!-- Vùng booking fly -->\n                        <div *ngIf=\"hasloaddata && tabflight == 1\">\n                          <div class=\"div-delivery_payment\" *ngIf=\"trip.delivery_payment_date_display\">{{ trip.delivery_payment_date_display}}</div>\n                            <div class=\"div-flybooking\">\n                                <!-- Chiều đi -->\n                                <div class=\"padding-5\">\n                                    <div class=\"d-flex text-thin\">\n                                        <div class=\"div-width-100\">{{ trip.checkInDisplay }}</div>\n                                        <div class=\"text-departure div-width-100\" *ngIf=\"(trip.payment_status == 1 || trip.payment_status == 5)\">\n                                            <div class=\"t-right\">Mã đặt chỗ hãng</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"d-flex text-thin\">\n                                      <div class=\"div-width-200 d-flex\">\n                                        <div class=\"div-img-logo\">\n                                          <img class=\"img-logo\" *ngIf=\"trip.bookingsComboData[0].airlineName.indexOf('VIETJET') != -1 \" src=\"./assets/ic_airticket/ic_vietjet_b.png\">\n                                          <img class=\"img-logo logo-vna\" *ngIf=\"trip.bookingsComboData[0].airlineName.toLowerCase().indexOf('vietnam airlines') != -1 && !trip.bookingsComboData[0].operatedBy \"  src=\"./assets/ic_airticket/logo_vna.png\">\n                                          <img class=\"img-logo logo-vna\" *ngIf=\"trip.bookingsComboData[0].airlineName.toLowerCase().indexOf('vietnam airlines') != -1 && trip.bookingsComboData[0].operatedBy\" src=\"./assets/ic_airticket/ic_jetstar_b.png\">\n                                          <img class=\"img-logo\" *ngIf=\"trip.bookingsComboData[0].airlineName.indexOf('JETSTAR') != -1\"  src=\"./assets/ic_airticket/ic_jetstar_b.png\">\n                                          <img class=\"img-logo\" *ngIf=\"trip.bookingsComboData[0] && trip.bookingsComboData[0].airlineName.indexOf('BAMBOO') != -1 \"  src=\"./assets/ic_airticket/ic_bamboo_b.png\">\n                                          \n                                        </div>\n                                        <div class=\"div-ticket\">{{trip.bookingsComboData[0].flightNumner }} - {{trip.bookingsComboData[0].ticketClass }}</div>\n                                      </div>\n                                      <div class=\"text-departure div-width-100 \" *ngIf=\"trip.bookingsComboData[0] &&trip.bookingsComboData[0].ticketCode.indexOf('T__') == -1 && (trip.payment_status == 1 || trip.payment_status == 5)\">\n                                          <div class=\"t-right text-hold-ticket\">{{ trip.bookingsComboData[0].ticketCode }}</div>\n                                      </div>\n                                    </div>\n                                \n                                    <div class=\"div-departure m-top-8\">\n                                        <div class=\"div-time-departure f-bold\">{{trip.bookingsComboData[0].departureTime}}</div>\n                                        <div class=\"div-info-departure\">\n                                        <div class=\"f-bold\">{{trip.flightFrom}}</div>\n                                        <div class=\"text-thin\">{{ trip.departAirport}} | {{ trip.bookingsComboData[0].departCode }}</div>\n                                        </div>\n                                        <div class=\"placepoint\" style=\"top:33%\">\n                                        </div>\n                                        <div class=\"placeline\">\n                                        </div>\n                                    </div>\n                                    <div class=\"div-return m-top-28\"> \n                                        <div class=\"div-time-departure f-bold\">{{trip.bookingsComboData[0].arrivalTime}}</div>\n                                        <div class=\"div-info-return\">\n                                        <div class=\"f-bold\">{{ trip.flightTo }}</div>\n                                        <div class=\"text-thin\">{{ trip.returnAirport }} | {{ trip.bookingsComboData[0].arrivalCode }}</div>\n                                        </div>\n                                        <div class=\"placepoint-return\">\n                                        </div>\n                                    </div>\n                                </div >\n                                <!-- Chiều về -->\n                            <div *ngIf=\"textReturn && trip.bookingsComboData.length >1\" class=\"div-arrival\">\n                                <div class=\"div-split\"></div>\n                    \n                                <div class=\"d-flex text-thin\">\n                                  <div class=\"div-width-100\">{{ trip.checkOutDisplay }}</div>\n                                  <div class=\"text-departure div-width-100\" *ngIf=\"(trip.payment_status == 1 || trip.payment_status == 5)\">\n                                      <div class=\"t-right\">Mã đặt chỗ hãng</div>\n                                  </div>\n                              </div>\n                              <div class=\"d-flex text-thin\">\n                                <div class=\"div-width-200 d-flex\">\n                                  <div class=\"div-img-logo\">\n                                    <img class=\"img-logo\" *ngIf=\"trip.bookingsComboData[1].airlineName.indexOf('VIETJET') != -1 \" src=\"./assets/ic_airticket/ic_vietjet_b.png\">\n                                    <img class=\"img-logo logo-vna\" *ngIf=\"trip.bookingsComboData[1].airlineName.toLowerCase().indexOf('vietnam airlines') != -1 && !trip.bookingsComboData[1].operatedBy\"  src=\"./assets/ic_airticket/logo_vna.png\">\n                                    <img class=\"img-logo logo-vna\" *ngIf=\"trip.bookingsComboData[1].airlineName.toLowerCase().indexOf('vietnam airlines') != -1 && trip.bookingsComboData[1].operatedBy\" src=\"./assets/ic_airticket/ic_jetstar_b.png\">\n                                    <img class=\"img-logo\" *ngIf=\"trip.bookingsComboData[1].airlineName.indexOf('JETSTAR') != -1  \"  src=\"./assets/ic_airticket/ic_jetstar_b.png\">\n                                    <img class=\"img-logo\" *ngIf=\"trip.bookingsComboData[1] && trip.bookingsComboData[1].airlineName.indexOf('BAMBOO') != -1  \"  src=\"./assets/ic_airticket/ic_bamboo_b.png\">\n                                    \n                                  </div>\n                                  <div class=\"div-ticket\">{{trip.bookingsComboData[1].flightNumner }} - {{trip.bookingsComboData[1].ticketClass }}</div>\n                                </div>\n                                <div class=\"text-departure div-width-100 \" *ngIf=\"trip.bookingsComboData[1].ticketCode && trip.bookingsComboData[1].ticketCode.indexOf('T__') == -1 && (trip.payment_status == 1 || trip.payment_status == 5)\">\n                                    <div class=\"t-right text-hold-ticket\">{{ trip.bookingsComboData[1].ticketCode }}</div>\n                                </div>\n                              </div>\n                    \n                                <div class=\"div-departure m-top-8\">\n                                    <div class=\"div-time-departure f-bold\">{{trip.bookingsComboData[1].departureTime}}</div>\n                                    <div class=\"div-info-departure\">\n                                    <div class=\" f-bold\">{{ trip.flightTo }}</div>\n                                    <div class=\"text-thin\">{{ trip.returnAirport }} | {{ trip.bookingsComboData[1].departCode }}</div>\n                                    </div>\n                                    <div class=\"placepoint\" style=\"top:33%\">\n                                    </div>\n                                    <div class=\"placeline\">\n                                    </div>\n                                </div>\n                                <div class=\"div-return m-top-28\"> \n                                    <div class=\"div-time-departure f-bold\">{{trip.bookingsComboData[1].arrivalTime}}</div>\n                                    <div class=\"div-info-return\">\n                                    <div class=\" f-bold\">{{trip.flightFrom}}</div>\n                                    <div class=\"text-thin\">{{ trip.departAirport }} | {{ trip.bookingsComboData[1].arrivalCode }}</div>\n                                    </div>\n                                    <div class=\"placepoint-return\">\n                                    </div>\n                                </div>\n                    \n                            </div>\n\n                            <div *ngIf=\"isFlyBooking\" class=\"div-pax m-top-64\">\n                              <div class=\"p-top-8\" *ngFor=\"let pax of trip.bookingsComboData[0].passengers; let idx = index\">\n                                <div class=\"div-pax-lug\">\n                                  <div [ngClass]=\"idx==0 ? 'pax-name m-top-8' : (pax.arrlug && pax.arrlug.length >0) ? 'pax-name m-top-27' : 'pax-name m-top-8'\"><label>{{idx+1}}. <span class=\"f-bold\">{{pax.name}}</span> <span class=\"text-age\" *ngIf=\"!pax.isAdult\"> ({{pax.dob}})</span></label></div>\n                                  <div class=\"pax-type \">{{pax.gender}}</div>\n                                \n                                </div>\n              \n                                <div *ngFor=\"let lugg of pax.arrlug\">\n                                  <div class=\"div-luggest d-flex\" >\n                                    <div><img class=\"img-luggage\" src=\"./assets/ic_flight/vali.svg\"> </div>\n                                    <div class=\"p-top-1\">{{lugg.lugname}} <span *ngIf=\"lugg.lugweight\">| {{lugg.lugweight}} </span><span *ngIf=\"lugg.seatnumber\" class=\"p-left-4\">| {{lugg.seatnumber}}</span></div>\n                                  </div>\n                                </div>\n                              </div>\n                               \n                            </div>\n\n                              <div class=\"div-split-panel\"></div>\n                              <!-- <div class=\"d-flex m-8\">\n                                  <div class=\"div-width-100 v-align-center\">\n                                      <div class=\"text-pax\">{{ trip.adult }} người lớn</div>\n                                      <div class=\"text-pax\" *ngIf=\"trip.child && trip.child >0\">{{ trip.child }} trẻ em</div>\n                                      <div class=\"text-pax\" *ngIf=\"trip.infant && trip.infant >0\">{{ trip.infant }} em bé</div>\n                                  </div>\n                                  <div class=\"div-width-100 text-right v-align-center\">\n                                    <div class=\"text-total-price\">{{trip.totalpricedisplay}}đ\n                                    </div>\n                                    <div class=\"text-sub\">Giá đã bao gồm thuế & phí.</div>\n                                    \n                                  </div>\n                                </div>  -->\n                                <!-- <div class=\"div-delivery_payment\" *ngIf=\"trip.delivery_payment_date_display\">{{ trip.delivery_payment_date_display}}</div> -->\n                                <div *ngIf=\"trip.delivery_payment_date_display && (trip.pay_method==0||trip.pay_method==5||trip.pay_method==10)\" class=\"div-btn-payment\">\n                                  <button (click)=\"paymentselect(trip)\" ion-button round outline class=\"button btn-payment\">Thanh toán</button>\n                              </div>\n                                <div *ngIf=\"trip.delivery_payment_date_display&&!(trip.pay_method==0||trip.pay_method==5||trip.pay_method==10)\">\n                                  <div style=\"padding: 8px;\" *ngIf=\"trip.pay_method==51\">\n                                    <div class=\"div-payment-combo-flight\">\n                                      <div class=\"div-payment-left\">\n                                        <div><label class=\"text-name\" position=\"stacked\">{{ trip.paxDisplay}}</label></div>\n                                        <div class=\"div-text-fee\"><label class=\"text-fee\">Giá đã bao gồm thuế & phí</label></div>\n                                      </div>\n                                      <div class=\"div-price\">\n                                        <label  class=\"total-price\">\n                                          {{trip.priceShow}}đ\n                                        </label>\n                                      </div>\n                                  </div>\n                                  <div *ngIf=\"trip.booking_type == 'COMBO_FLIGHT' else notcomboflight\">\n                                      <label class=\"text-note\">Quý khách thanh toán trước hạn thanh toán để đảm bảo tình trạng phòng và vé máy bay</label>\n                                  </div>\n                                  <ng-template #notcomboflight>\n                                      <label class=\"text-note\">Quý khách thanh toán trước hạn thanh toán để đảm bảo tình trạng phòng</label>\n                                  </ng-template>\n                                  <div >\n                                      <label class=\"text-note\">Khi Quý khách nhấn nút “Thanh toán” cũng đồng nghĩa là Quý khách đã đồng ý với các <a class=\"text-policy\" (click)=\"showRules()\">điều khoản và chính sách</a> thay đổi hoặc hủy đặt phòng.</label>\n                                  </div>\n                                  <div class=\"div-btn-payment\">\n                                      <button (click)=\"paymentselect(trip)\" ion-button round outline class=\"button btn-payment\">Thanh toán</button>\n                                  </div>\n                                  </div>\n                                    <!-- Hình thức ck ngân hàng -->\n                                    <div *ngIf=\"!(trip.pay_method==3||trip.pay_method==51)\">\n                                      <div class=\"d-flex-later\">\n                                        <div class=\"d-img\">\n                                          <img src={{trip.urlimgbank}}>\n                                        </div>\n                                        <div>\n                                          <ion-label class=\"cls-text\">\n                                           {{trip.bankName}}\n                                          </ion-label>\n                                          <!-- <div class=\"mt6\">\n                                            <ion-label (click)=\"openWebpage()\" class=\"cls-textopen\">\n                                              Mở website/ứng dụng {{trip.textbank}}\n                                            </ion-label>\n                                          </div> -->\n                                        </div>\n                                      </div>\n                                      <div class=\"div-text-payment\">\n                                        <p class=\"text-payment-info\" text-wrap>\n                                          Số TK: <b>{{trip.accountNumber}}</b><a class='text-copy' (click)='copyClipboard(trip.accountNumber)'>Sao chép</a>\n                                        </p>\n                                        <p class=\"text-payment-info\" >\n                                          Người nhận: Công ty Cổ Phần IVIVU.COM<a class='text-copy' (click)='copyClipboard(\"Người nhận: Công ty Cổ Phần IVIVU.COM\")'>Sao chép</a>\n                                        </p>\n                                        <p class=\"text-payment-info\" text-wrap>\n                                          Nội dung chuyển tiền: <b class=\"text-booking text-red\">{{trip.booking_id}}</b><a class='text-copy' (click)='copyClipboard(trip.booking_id)'>Sao chép</a>\n                                        </p>\n                                        <p class=\"text-payment-info\" text-wrap>\n                                          Tổng tiền: <b class=\"text-bold\">{{trip.priceShow}} VND</b><a class='text-copy' (click)='copyClipboard(trip.priceShow)'>Sao chép</a>\n                                        </p>                    \n                                      </div>\n                                    \n                                    </div>\n                                    <!-- payoo tại của hàng -->\n                                    <div *ngIf=\"trip.pay_method==3\" class=\"d-flex-later\">\n                                      <p class=\"text-payment-info\" text-wrap>\n                                        Mã thanh toán Payoo: {{trip.PaymentCode}}, số tiền: <b class=\"text-bold\">{{trip.priceShow}} VND</b>\n                                      </p>\n                                    </div>\n                                    <div *ngIf=\"trip.pay_method!=51\" class=\"mt16\">\n                                      <label class=\"text-other\">Hoặc thanh toán bằng phương thức khác</label>\n                                    </div>\n                                    <div *ngIf=\"trip.pay_method!=51\" class=\"div-btn-payment mt16\">\n                                      <button (click)=\"paymentselect(trip)\" ion-button round outline class=\"button btn-payment\">Đổi phương thức thanh toán</button>\n                                  </div>\n                                </div>\n                               \n                            \n                        </div>\n                    </div>\n                    \n                    <!-- <div class=\"div-paymentbank\" *ngIf=\"trip.payment_status == 0 && trip.delivery_payment_date_display\">\n                     \n                        <div class=\"div-split-panel\"></div>\n                        <div class=\"div-delivery_payment\" *ngIf=\"trip.delivery_payment_date_display\">{{ trip.delivery_payment_date_display}}</div>\n                        <div class=\"div-text-payment\">\n                          <div class=\"text-payment-bank\">\n                            <div class=\"d-flex\">\n                              <div class=\"d-img\">\n                                <img src={{trip.urlimgbank}}>\n                              </div>\n                              <div class=\"div-width-200\">\n                                <ion-label class=\"cls-text\">\n                                 {{trip.bankName}}\n                                </ion-label>\n                              </div>\n                            </div>\n\n                            <p class=\"text-payment-info\" text-wrap>\n                              Số TK: <b>{{trip.accountNumber}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a>\n                            </p>\n                            <p class=\"text-payment-info\" >\n                              Người thụ hưởng: Công ty Cổ Phần IVIVU.COM<a class='text-copy' (click)='copyClipboard(2)'>Sao chép</a>\n                            </p>\n                            <p class=\"text-payment-info\" text-wrap>\n                              Nội dung chuyển tiền: <b class=\"text-booking\">{{trip.bookingCode}}</b><a class='text-copy' (click)='copyClipboard(3)'>Sao chép</a>\n                            </p>\n                            <p class=\"text-payment-info\" text-wrap>\n                              Tổng tiền: <b class=\"text-bold\">{{trip.total}} VND</b><a class='text-copy' (click)='copyClipboard(4)'>Sao chép</a>\n                            </p>\n                           \n                            \n                          </div>\n                         \n                        </div>\n\n                        <div class=\"div-text-otherpayment\">\n                          Hoặc thanh toán bằng phương thức khác\n                        </div>\n                        <div class=\"m-lr-8\">\n                          <button ion-button round outline class=\"button btn-paymentother\" (click)=\"gotoflightpaymentselect(trip.itemFlightCache)\">Đổi phương thức thanh toán</button>\n                        </div>\n                    </div> -->\n                    \n                        \n                        </ion-item-group>\n                        </div>\n                    </div>\n                </ion-list>\n\n            </div>\n            <ng-template #mytripEmpty>\n                    <div class=\"div-empty-trip\">\n                            <img src=\"./assets/empty/trip_empty.svg\">\n                    </div>\n                    <div *ngIf=\"loginuser else notloginyet\">\n                      <div class=\"text-trip-empty\">\n                        <label>Quý khách chưa có chuyến bay nào với iVIVU.</label>\n                      </div>\n                      <div class=\"button-trip-empty\">\n                          <button ion-button round outline class=\"button btn-trip-empty\" (click)=\"goback()\">Đặt vé ngay</button>\n                      </div>\n                    </div>\n                    <ng-template #notloginyet>\n                      <div class=\"text-trip-empty\">\n                        <label>Vui lòng đăng nhập để xem chuyến đi!</label>\n                      </div>\n                      <div class=\"button-trip-empty\">\n                          <button ion-button round outline class=\"button btn-trip-empty\" (click)=\"gotologin()\">Đăng nhập ngay</button>\n                      </div>\n                    </ng-template>\n                    \n            </ng-template>\n            \n        </div>\n        <ng-template #historyTab>\n                <div *ngIf=\"(listHistoryTrips && listHistoryTrips.length >0) else historyflightempty\" class=\"card-background-page-history-trips\">\n                  <ion-list *ngFor=\"let tripHistory of listHistoryTrips; let i = index\" >\n                    <div [ngClass]=\"i == 0 ? 'div-mytrip m-top-16' : 'div-mytrip'\" style=\"padding-bottom: 0\">\n                    <div [ngClass]=\"i == 0 ? 'first-content-history ' : 'first-content-history'\">\n                        <div class=\"div-bkg-history\"><span class=\"text-bkg-history\">{{tripHistory.booking_id}}</span></div>\n\n                        <div class=\"text-flight-title d-flex\">\n                          <div>\n                              <div>{{ tripHistory.flightFrom }} ({{tripHistory.bookingsComboData[0].departCode}})</div>\n                              <div class=\"text-bkg-history\">{{ tripHistory.checkInDisplay }} </div>\n                          </div>\n                          <div class=\"div-flight-inout\">\n                              <img class=\"img-flight-inout\" src=\"./assets/ic_flight/ic_flight_inout.svg\" *ngIf=\"tripHistory.roundTrip else oneway\">\n                              <ng-template #oneway><img class=\"img-flight-inout img-oneway\" src=\"../assets/imgs/ic_arrow.svg\"></ng-template>\n                          </div> \n                          <div>\n                              <div>{{ tripHistory.flightTo }} ({{tripHistory.bookingsComboData[0].arrivalCode}})</div>\n                              <div class=\"text-bkg-history\">{{ tripHistory.checkOutDisplay }} </div>\n                          </div>\n                        </div>\n                        \n                        <div class=\"div-split-history\"></div>\n                      </div>\n                    </div>\n                </ion-list>\n                </div>\n                <ng-template #historyflightempty>\n                    <div class=\"div-empty-trip\">\n                        <img src=\"./assets/empty/trip_empty.svg\">\n                </div>\n                <div *ngIf=\"loginuser else notloginyet\">\n                    <div class=\"text-trip-empty\">\n                      <label>Quý khách chưa có chuyến bay nào với iVIVU.</label>\n                    </div>\n                    <div class=\"button-trip-empty\">\n                        <button ion-button round outline class=\"button btn-trip-empty\" (click)=\"goback()\">Đặt vé ngay</button>\n                    </div>\n                </div>\n                <ng-template #notloginyet>\n                    <div class=\"text-trip-empty\">\n                      <label>Vui lòng đăng nhập để xem chuyến đi!</label>\n                    </div>\n                    <div class=\"button-trip-empty\">\n                        <button ion-button round outline class=\"button btn-trip-empty\" (click)=\"gotologin()\">Đăng nhập ngay</button>\n                    </div>\n                </ng-template>\n                \n                </ng-template>\n        </ng-template>\n        \n    </div>         \n\n    <ng-template #loadsk>\n        <div class=\"padding-16\">\n            <div>\n                <ion-skeleton-text  animated style=\"width:104px;margin: 0;height: 16px;\"></ion-skeleton-text>\n            </div>\n                    <div >\n                        <div class=\"div-sk-detail\" >\n                            <div class=\"row-item-hoteldetail-sk\">\n                                <ion-col size=\"4\" style=\"padding: 0\">\n                                    <ion-skeleton-text animated style=\"width:104px;height:104px;border-radius:6px;margin:0;margin-top:16px;\"></ion-skeleton-text>\n                                </ion-col>\n                                <ion-col size=\"8\" class=\"col-description-hoteldetail-sk\" style=\"line-height: 16px;padding-top: 0\">\n                                    <ion-skeleton-text animated style=\"width: 50%;margin: 0;height: 16px;\"></ion-skeleton-text>\n                                    <ion-skeleton-text animated style=\"width: 100%;margin: 0;margin-top:40px;height: 16px;\"></ion-skeleton-text>\n                                    <ion-skeleton-text animated style=\"width: 50%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text>\n                                </ion-col>\n                            </div>\n                            <div class=\"row-item-description-sk\">\n                                <ion-skeleton-text animated style=\"width: 104px;margin: 0;margin-top:32px;height: 16px;\"></ion-skeleton-text>\n                                <ion-skeleton-text animated style=\"width: 83%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text>\n                                <ion-skeleton-text animated style=\"width: 67%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text>\n                                <ion-skeleton-text animated style=\"width: 100%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text>\n                                <ion-skeleton-text animated style=\"width: 67%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text>\n                            </div>\n                            <div class=\"row-item-button-sk\">\n                                <ion-skeleton-text animated style=\"width: 100%;margin: 0;height: 48px;border-radius: 6px;margin-top:48px\"></ion-skeleton-text>\n                            </div>\n                        </div>\n                    </div>\n          </div>\n    </ng-template>\n     \n    </div>"

/***/ }),

/***/ "./src/app/flightmytrip/flightmytrip.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/flightmytrip/flightmytrip.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.flight-mytrip-header {\n  position: fixed;\n}\n.flight-mytrip-header .text-title {\n  font-size: 18px;\n  font-weight: 600;\n  text-align: center;\n  padding-left: 80px;\n  padding-top: 0;\n}\n.flight-mytrip-header .btn-header {\n  background: #fff;\n  width: 32px;\n  opacity: 0.8;\n  padding: 6px;\n}\n.flight-mytrip-header .sp-counttext {\n  position: absolute;\n  right: 18%;\n}\n.flight-mytrip-header .sp-counttext-his {\n  position: absolute;\n  right: 25%;\n}\n.d-flex {\n  display: flex;\n}\n.m-top-64 {\n  margin-top: 64px !important;\n}\n.m-top-24 {\n  margin-top: 24px !important;\n}\n.m-8 {\n  margin: 8px;\n}\n.text-pax {\n  font-size: 14px;\n  font-weight: 100;\n  color: #222222;\n}\n.text-total-price {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n}\n.div-width-100 {\n  width: 100%;\n}\n.div-width-200 {\n  width: 200%;\n}\n.text-right {\n  text-align: right;\n}\n.text-sub {\n  font-size: 12px;\n  font-weight: 100;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n.v-align-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.div-flight-mytrip-content, .card-background-page-history-trips {\n  height: auto;\n  padding: calc(env(safe-area-inset-bottom) + 94px) 0px;\n  position: -webkit-sticky;\n}\n.div-flight-mytrip-content .div-flight-mytrip, .card-background-page-history-trips .div-flight-mytrip {\n  background: #f2f2f2;\n}\n.div-flight-mytrip-content .div-delivery_payment, .card-background-page-history-trips .div-delivery_payment {\n  background: rgba(254, 237, 199, 0.4);\n  padding: 10px 8px;\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.34px;\n  text-align: center;\n  color: #333333;\n}\n.div-flight-mytrip-content .div-mytrip, .card-background-page-history-trips .div-mytrip {\n  padding-bottom: 24px;\n}\n.div-flight-mytrip-content .col-flight-mytrip, .card-background-page-history-trips .col-flight-mytrip {\n  padding: 5px 0 5px 8px;\n}\n.div-flight-mytrip-content .div-img-logo, .card-background-page-history-trips .div-img-logo {\n  height: 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.div-flight-mytrip-content .div-img-logo .img-logo, .card-background-page-history-trips .div-img-logo .img-logo {\n  width: 24px;\n  height: 24px;\n}\n.div-flight-mytrip-content .div-img-logo .logo-vna, .card-background-page-history-trips .div-img-logo .logo-vna {\n  height: 12px !important;\n}\n.div-flight-mytrip-content .text-thin, .card-background-page-history-trips .text-thin {\n  font-size: 14px;\n  font-weight: 100 !important;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #222222;\n}\n.div-flight-mytrip-content .text-hold-ticket, .card-background-page-history-trips .text-hold-ticket {\n  color: #26bed6;\n  font-weight: 600;\n}\n.div-flight-mytrip-content .row-bkg-id, .card-background-page-history-trips .row-bkg-id {\n  align-items: center;\n  background-color: rgba(242, 242, 242, 0.5);\n}\n.div-flight-mytrip-content .div-ticket, .card-background-page-history-trips .div-ticket {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 8px;\n  font-size: 14px;\n}\n.div-flight-mytrip-content .t-right, .card-background-page-history-trips .t-right {\n  text-align: right;\n}\n.div-empty-trip {\n  margin-top: 124px;\n  text-align: center;\n}\n.div-width-100 {\n  width: 100%;\n}\n.div-split-panel {\n  height: 6px;\n  background: #f2f2f2;\n  margin: 16px -16px;\n  margin-top: 16px;\n}\n.segment-button.activated, .segment-button.segment-activated, .segment-button-checked {\n  border-color: #26bed6 !important;\n  opacity: 1;\n  color: #26bed6 !important;\n  text-transform: none;\n  font-size: 17px;\n}\n.cls-strike {\n  text-decoration: line-through;\n}\n.segment-button {\n  text-transform: none !important;\n  font-size: 17px !important;\n}\n.card-background-page-mytrips .item-room {\n  position: relative;\n  min-height: 104px;\n  margin: 0 5px;\n  margin-top: 13px;\n}\n.card-background-page-mytrips .div-split-color {\n  height: 7px;\n  background-color: #f2f2f2;\n}\n.card-background-page-mytrips .div-wrapimg {\n  position: absolute;\n  height: 104px;\n  width: 104px;\n  overflow: hidden;\n  border-radius: 5px;\n}\n.card-background-page-mytrips .img-avatar {\n  left: 0;\n  bottom: 0;\n  -o-object-fit: cover;\n     object-fit: cover;\n  min-height: 104px;\n}\n.card-background-page-mytrips .col-mytrip-text-description {\n  padding-left: 112px;\n}\n.card-background-page-mytrips .div-cin-cout {\n  margin: 0 5px;\n  display: flex;\n}\n.card-background-page-mytrips .div-cin-cout .div-cin {\n  width: 34%;\n}\n.card-background-page-mytrips .div-cin-cout .div-cout {\n  width: 33%;\n  margin-left: 8px;\n}\n.card-background-page-mytrips .div-cin-cout .div-duration {\n  width: 22%;\n  margin-left: 8px;\n}\n.card-background-page-mytrips .div-cin-cout .div-label-date {\n  font-size: 12px;\n  color: #4f4f4f;\n  font-weight: 300;\n  letter-spacing: -0.34px;\n}\n.card-background-page-mytrips .div-cin-cout .div-date {\n  border-right: solid 1px #cdcdcd;\n  font-size: 14px;\n  color: #222222;\n  font-weight: bold;\n  margin-top: 8px;\n  padding-top: 0;\n  letter-spacing: -0.34px;\n}\n.card-background-page-mytrips .div-cin-cout .div-date-cout {\n  font-size: 14px;\n  color: #222222;\n  font-weight: bold;\n  margin-top: 8px;\n  padding-top: 0;\n  letter-spacing: -0.34px;\n}\n.card-background-page-mytrips .div-cin-cout .no-border {\n  border: none;\n}\n.card-background-page-mytrips .d-flex {\n  display: flex;\n  margin: 0 5px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n}\n.card-background-page-mytrips .d-flex .div-left {\n  width: 20px;\n}\n.card-background-page-mytrips .d-flex .div-center {\n  width: 338px;\n}\n.card-background-page-mytrips .d-flex .div-right {\n  text-align: right;\n}\n.card-background-page-mytrips .m-top-3 {\n  margin-top: 3px;\n}\n.card-background-page-mytrips .m-top-14 {\n  margin-top: 14px;\n}\n.card-background-page-mytrips .m-top-8 {\n  margin-top: 8px;\n}\n.card-background-page-mytrips .col-nopd-top {\n  padding: 0 5px;\n  align-self: center;\n}\n.card-background-page-mytrips .img-callcenter {\n  width: 12px;\n  height: 12px;\n}\n.card-background-page-mytrips .second-content {\n  padding: 9px 11px;\n  font-size: 14px;\n}\n.card-background-page-mytrips .second-content .p-lr-5 {\n  padding: 0 5px;\n}\n.card-background-page-mytrips .div-flight-label {\n  font-size: 12px;\n  color: #4f4f4f;\n  font-weight: 300;\n  letter-spacing: -0.34px;\n}\n.card-background-page-mytrips .text-ticket {\n  font-weight: bold;\n  font-size: 14px;\n}\n.m-lf-0 {\n  margin: 8px 0 !important;\n}\n.div-request-payment {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  color: #fff;\n  background: #003c71;\n  height: 32px;\n  top: 0;\n  left: 0;\n  margin-bottom: 15px;\n}\n.div-request-payment .lbl-request-payment {\n  top: 7px;\n  position: relative;\n}\n.m-top-27 {\n  margin-top: 27px;\n}\n.first-content {\n  margin: 0 8px;\n  font-size: 14px;\n  background: #fff;\n}\n.first-content .col-bookingid {\n  align-self: baseline;\n  padding-left: 0;\n}\n.first-content .p-r-0 {\n  padding-right: 0;\n}\n.first-content .col-bkg-status {\n  text-align: right;\n  font-size: 12px;\n  color: #26bed6;\n  padding: 5px 5px 5px 0px;\n}\n.first-content .fly-bkg-code {\n  font-size: 12px;\n  color: #ffffff;\n  letter-spacing: -0.4px;\n  font-weight: 600;\n  padding: 4px;\n  border-radius: 2px;\n  background: #26bed6;\n}\n.first-content .f-bold {\n  font-weight: 600;\n}\n.first-content-history {\n  margin: 0 16px;\n  font-size: 14px;\n  background: #fff;\n}\n.div-payment {\n  padding: 16px 16px 24px 16px;\n}\n.div-payment .div-split-payment {\n  border-bottom: solid 1px #dedede;\n  opacity: 0.6;\n  margin: 11px 0 16px 0;\n}\n.div-payment .div-payment-combo-flight {\n  display: flex;\n}\n.div-payment .div-payment-combo-flight .div-payment-left {\n  width: 100%;\n}\n.div-payment .div-payment-combo-flight .div-price {\n  text-align: right;\n  width: 100%;\n}\n.div-payment .div-payment-combo-flight .div-text-fee {\n  line-height: 12px;\n}\n.div-payment .text-policy {\n  text-decoration: underline;\n}\n.div-payment .text-name {\n  font-weight: 600;\n  font-size: 18px;\n  letter-spacing: -0.6px;\n  margin-bottom: 0;\n  margin-top: 12px;\n}\n.div-payment .text-name .text-green {\n  color: #26bed6;\n}\n.div-payment .text-fee {\n  margin: 2px 0px 5px 0px;\n  color: #828282;\n  letter-spacing: -0.34px;\n  font-size: 12px;\n}\n.div-payment .text-note {\n  font-size: 12px;\n  color: #828282;\n  font-style: italic;\n  letter-spacing: -0.34px;\n}\n.div-payment .text-date {\n  margin-top: 0px;\n  font-weight: bold;\n  font-size: 14px;\n}\n.div-payment .total-price {\n  color: #26bed6;\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n  margin-bottom: 0;\n  margin-top: 8px;\n  height: 50px;\n}\n.div-payment .div-btn-payment {\n  margin-top: 12px;\n}\n.div-payment .btn-payment {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 100%;\n  margin: 0;\n  font-size: 17px !important;\n}\n.div-payment .div-penalty, .div-payment .div-rules {\n  position: relative;\n  min-height: 22px;\n}\n.div-payment .div-penalty .div-label-left, .div-payment .div-rules .div-label-left {\n  float: left;\n  font-size: 14px;\n  font-weight: 300;\n}\n.div-payment .div-penalty .div-arrow-right, .div-payment .div-rules .div-arrow-right {\n  float: right;\n}\n.div-payment .div-penalty .div-arrow-right .cls-icon-arrow, .div-payment .div-rules .div-arrow-right .cls-icon-arrow {\n  font-size: 24px;\n  position: absolute;\n  right: -5px;\n  top: -2px;\n}\n.header-title {\n  padding: 10px;\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n}\n.header-title .div-refresh {\n  position: absolute;\n  right: 16px;\n  top: 8px;\n}\n.header-title .div-refresh .img-refresh {\n  width: 24px;\n}\n.header-arrow {\n  margin: 3px 11px;\n}\n.label-badge {\n  color: #222222;\n  font-size: 12px;\n  font-weight: 400;\n  margin-left: 3px;\n  padding-top: 3px;\n}\n.align-center {\n  text-align: center;\n}\n.badgescss {\n  position: absolute;\n  color: #ffffff;\n  z-index: 10;\n  margin-left: 84%;\n  margin-top: -10%;\n  background: rgba(0, 0, 0, 0.5);\n  border: 0.5px solid rgba(255, 255, 255, 0.5);\n  box-sizing: border-box;\n  font-weight: 100;\n  border-radius: 10px;\n  display: block;\n  padding: 4px 8px;\n}\n.badge-md {\n  border-radius: 9px;\n  color: #fff;\n  background-color: #26bed6;\n}\n.room-class-name {\n  font-size: 18px;\n}\n.bkg-id {\n  padding-left: 4px;\n  font-size: 14px;\n  font-weight: bold;\n}\nh2 {\n  margin: 0;\n}\n.cls-avg-point {\n  margin: 8px 0px;\n}\n.support-text {\n  text-align: right;\n}\n.div-split {\n  border-bottom: solid 1px #dedede;\n  opacity: 0.6;\n  margin: 11px 5px 16px 5px;\n}\n.col-icon {\n  padding: 3px 0px;\n}\n.col-text {\n  padding: 2px 0px;\n}\n.col-address {\n  padding: 0;\n}\n.hidden-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.div-date-cout {\n  font-size: 14px;\n  color: #222222;\n  font-weight: bold;\n  margin-top: 8px;\n  padding-top: 0;\n}\n.icon-arrow-right {\n  text-align: right;\n  font-size: 24px;\n  padding-right: 0 !important;\n}\n.col-normaltext-nopd-top {\n  padding: 0 5px;\n  align-self: center;\n  font-size: 14px;\n  font-weight: 200;\n}\n.room-name {\n  font-size: 18px;\n  font-weight: 500;\n}\n.btn-next {\n  border: solid 1px #f79221;\n  color: #f79221;\n  background: #ffffff;\n  width: 100%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px !important;\n  font-weight: bold;\n  border-radius: 6px;\n  margin: 8px;\n  letter-spacing: -0.6px;\n}\n.img-trip-empty {\n  height: 320px;\n  text-align: center;\n}\n.img-empty {\n  padding-top: 20%;\n}\n.text-trip-empty {\n  text-align: center;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #bdbdbd;\n}\n.button-trip-empty {\n  text-align: center;\n}\n.btn-trip-empty {\n  border-color: #f79221;\n  color: #ffffff;\n  background: #f79221;\n  width: 90%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px !important;\n  font-weight: normal;\n  margin-top: 16px;\n}\n.history-trip {\n  align-self: center;\n  margin-right: 11px;\n}\n.label-comboname {\n  white-space: normal;\n  padding-left: 5px;\n  font-size: 18px;\n  font-weight: 500;\n}\n.label-flight-start, .label-flight-return {\n  font-size: 12px;\n  color: #4f4f4f;\n}\n.flight-start-code {\n  text-align: center;\n  font-weight: 500;\n}\n.col-nopadding-left {\n  padding: 5px 5px 5px 0px;\n}\n.combo-info {\n  font-size: 12px;\n  letter-spacing: -0.34px;\n  color: #4f4f4f;\n}\n.combo-departure-date {\n  font-weight: normal;\n}\n.flight-from, .flight-numner {\n  color: #4f4f4f;\n}\n.img-luggage {\n  margin-right: 8px;\n}\n.card-background-page-history-trips {\n  padding: calc(env(safe-area-inset-bottom) + 54px) 0px;\n}\n.card-background-page-history-trips .text-left {\n  font-size: 13px;\n}\n.card-background-page-history-trips .label-reviews {\n  color: #26bed6;\n  font-weight: bold;\n}\n.card-background-page-history-trips .div-wrapimg {\n  position: relative;\n  height: 118px;\n  width: 110px;\n  overflow: hidden;\n  border-radius: 5px;\n}\n.card-background-page-history-trips img {\n  left: 0;\n  bottom: 0;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.card-background-page-history-trips .header-title {\n  padding: 12px;\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n  padding-right: 15%;\n}\n.card-background-page-history-trips .header-arrow {\n  margin: 3px 11px;\n}\n.card-background-page-history-trips .label-badge {\n  color: #222222;\n  font-size: 12px;\n  font-weight: 400;\n  margin-left: 3px;\n}\n.card-background-page-history-trips .badgescss {\n  position: absolute;\n  color: #ffffff;\n  z-index: 10;\n  margin-left: 84%;\n  margin-top: -10%;\n  background: rgba(0, 0, 0, 0.5);\n  border: 0.5px solid rgba(255, 255, 255, 0.5);\n  box-sizing: border-box;\n  font-weight: 100;\n  display: block;\n}\n.card-background-page-history-trips .badge-md {\n  border-radius: 9px;\n  color: #fff;\n  background-color: #26bed6;\n}\n.card-background-page-history-trips .room-class-name {\n  font-size: 16px;\n  color: #003c71;\n  line-height: 18px;\n}\n.card-background-page-history-trips h2 {\n  margin: 0;\n}\n.card-background-page-history-trips .cls-avg-point {\n  margin: 8px 0px;\n}\n.card-background-page-history-trips .support-text {\n  text-align: right;\n}\n.card-background-page-history-trips .div-split {\n  border-bottom: solid 1px #dedede;\n  opacity: 0.6;\n  margin: 11px 5px 11px 5px;\n}\n.div-split-history {\n  border-bottom: solid 1px #dedede;\n  opacity: 0.6;\n  margin: 16px 0;\n}\n.card-background-page-request-trips {\n  padding: 11px;\n}\n.header-md::after {\n  background-image: none !important;\n}\n.header-ios::after {\n  background-image: none !important;\n}\n.div-request-button {\n  position: fixed;\n  bottom: 58px;\n  width: 100%;\n}\n@media (min-height: 812px) and (max-height: 896px) {\n  .div-request-button {\n    position: fixed;\n    bottom: 88px;\n    width: 100%;\n  }\n\n  .div-empty-trip {\n    margin-top: 154px;\n  }\n}\n.col-img-historytrip {\n  padding: 5px 0;\n}\n.div-myrequesttrip {\n  padding: 11px;\n}\n@media (min-width: 300px) and (max-width: 370px) {\n  .col-mytrip-text-description, .col-historytrip-text-description, .col-requestrip-text-description {\n    left: 12px;\n  }\n\n  .btn-next {\n    font-size: 18px !important;\n    height: 48px;\n    letter-spacing: -0.5px;\n  }\n\n  .col-text-right {\n    font-size: 13px;\n  }\n}\n:host {\n  --ion-color-primary:#26bed6;\n}\nion-list {\n  padding: 0;\n}\n::ng-deep .sc-ion-segment-ios-hion-toolbar:not(.ion-color).sc-ion-segment-ios-s > .segment-button-checked, ::ng-deep ion-toolbar .sc-ion-segment-ios-h:not(.ion-color).sc-ion-segment-ios-s > .segment-button-checked {\n  border: none !important;\n  color: white !important;\n}\n::ng-deep .sc-ion-segment-ios-hion-toolbar:not(.ion-color).sc-ion-segment-ios-s > ion-segment-button, ::ng-deep ion-toolbar .sc-ion-segment-ios-h:not(.ion-color).sc-ion-segment-ios-s > ion-segment-button {\n  border: none !important;\n}\n::ng-deep .list-ios {\n  padding: 0;\n  margin: 0;\n}\n::ng-deep .action-sheets-notification .action-sheet-container.sc-ion-action-sheet-ios {\n  justify-content: flex-start;\n  margin-top: calc(env(safe-area-inset-top) * 2 - 14px);\n  -webkit-padding-start: 8px;\n  padding-inline-start: 8px;\n  -webkit-padding-end: 8px;\n  padding-inline-end: 8px;\n}\n::ng-deep .action-sheets-notification .action-sheet-title.sc-ion-action-sheet-ios {\n  background-color: #ffffff;\n  background-position: unset;\n  text-align: left;\n  font-weight: bold;\n  color: #222222;\n  padding-top: 10px;\n  padding-bottom: 0px;\n  padding-left: 44px;\n  font-size: 14px;\n}\n::ng-deep .action-sheets-notification .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  color: #222222;\n  font-size: 14px;\n}\n::ng-deep .ic_bus2 .action-sheet-group.sc-ion-action-sheet-ios::before {\n  float: left;\n  content: url('ic_bus2.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n::ng-deep .ic_home .action-sheet-group.sc-ion-action-sheet-ios::before {\n  float: left;\n  content: url('ic_home.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n::ng-deep .ic_paper .action-sheet-group.sc-ion-action-sheet-ios::before {\n  float: left;\n  content: url('ic_paper.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n::ng-deep .ic_message .action-sheet-group.sc-ion-action-sheet-ios::before {\n  float: left;\n  content: url('ic_message.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n::ng-deep .action-sheets-notification .action-sheet-group.sc-ion-action-sheet-ios {\n  background-color: #ffffff;\n  box-shadow: 1px 1px 8px 0px #828282;\n  border-radius: 10px !important;\n}\n::ng-deep .action-sheets-notification .action-sheet-button.sc-ion-action-sheet-ios {\n  -webkit-padding-start: 44px;\n          padding-inline-start: 44px;\n  text-align: left;\n  padding-top: 0px;\n  padding-bottom: 13px;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 15px;\n  -webkit-padding-end: 10px;\n  padding-inline-end: 10px;\n  height: auto;\n  min-height: 60px;\n  --background-activated:#fff;\n  --background-selected:#fff;\n  border-bottom: none;\n  margin: 0;\n  width: 100%;\n}\n::ng-deep .fixheight-44 .action-sheet-button.sc-ion-action-sheet-ios {\n  -webkit-padding-start: 44px;\n          padding-inline-start: 44px;\n  text-align: left;\n  padding-top: 0px;\n  padding-bottom: 13px;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 15px;\n  -webkit-padding-end: 10px;\n  padding-inline-end: 10px;\n  height: auto;\n  min-height: 44px !important;\n  --background-activated:#fff;\n  --background-selected:#fff;\n  border-bottom: none;\n}\n::ng-deep .fixheight-80 .action-sheet-button.sc-ion-action-sheet-ios {\n  -webkit-padding-start: 44px;\n          padding-inline-start: 44px;\n  text-align: left;\n  padding-top: 0px;\n  padding-bottom: 13px;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 15px;\n  -webkit-padding-end: 10px;\n  padding-inline-end: 10px;\n  height: auto;\n  min-height: 80px !important;\n  --background-activated:#fff;\n  --background-selected:#fff;\n  border-bottom: none;\n}\n::ng-deep .fixheight-90 .action-sheet-button.sc-ion-action-sheet-ios {\n  -webkit-padding-start: 44px;\n          padding-inline-start: 44px;\n  text-align: left;\n  padding-top: 0px;\n  padding-bottom: 13px;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 15px;\n  -webkit-padding-end: 10px;\n  padding-inline-end: 10px;\n  height: auto;\n  min-height: 90px !important;\n  --background-activated:#fff;\n  --background-selected:#fff;\n  border-bottom: none;\n}\n::ng-deep .action-sheets-notification .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 18px;\n}\n@media (min-width: 250px) and (max-width: 329px) {\n  ::ng-deep .action-sheets-notification .action-sheet-button.sc-ion-action-sheet-ios {\n    min-height: 72px;\n  }\n  ::ng-deep .fixheight-44 .action-sheet-button.sc-ion-action-sheet-ios {\n    min-height: 44px;\n  }\n  ::ng-deep .fixheight-80 .action-sheet-button.sc-ion-action-sheet-ios {\n    min-height: 80px;\n  }\n  ::ng-deep .fixheight-90 .action-sheet-button.sc-ion-action-sheet-ios {\n    min-height: 102px;\n  }\n}\n@media (min-width: 300px) and (max-width: 359px) {\n  .col-mytrip-text-description, .col-historytrip-text-description, .col-requestrip-text-description {\n    left: 12px;\n  }\n\n  .btn-next {\n    font-size: 14px;\n    height: 48px;\n    letter-spacing: 0, 5px;\n  }\n\n  .col-text-right {\n    font-size: 13px;\n  }\n}\n:host {\n  --ion-color-primary:#26bed6;\n}\nion-list {\n  padding: 0;\n}\n::ng-deep .ios.segment-button-layout-icon-top.ion-activatable.ion-activatable-instant.hydrated.segment-button-checked {\n  color: white !important;\n}\n::ng-deep .segment-button-checked .sp-counttext {\n  right: 10% !important;\n}\n::ng-deep .segment-button-checked .sp-counttext-his {\n  right: 20% !important;\n}\n::ng-deep .list-ios {\n  padding: 0;\n  margin: 0;\n}\n::ng-deep .sc-ion-segment-ios-h {\n  margin: 0 16px;\n}\n::ng-deep .alert-button-group.sc-ion-alert-ios {\n  flex-wrap: nowrap;\n  font-size: 14px !important;\n}\n::ng-deep .alert-button.sc-ion-alert-ios {\n  font-size: 14px;\n}\n::ng-deep .trip-empty p {\n  margin: 4px 0;\n}\n::ng-deep .action-sheets-insurrance .action-sheet-title.sc-ion-action-sheet-md {\n  font-size: 18px;\n  color: black;\n  font-weight: bold;\n}\n::ng-deep .action-sheets-insurrance .action-sheet-container.sc-ion-action-sheet-ios {\n  padding: 0;\n}\n::ng-deep .action-sheets-insurrance .action-sheet-group.sc-ion-action-sheet-ios:last-child {\n  margin: 0;\n  border-radius: 0;\n}\n::ng-deep .action-sheets-insurrance .action-sheet-title.sc-ion-action-sheet-ios {\n  text-align: left;\n  font-size: 18px;\n  color: #222222;\n  font-weight: bold;\n}\n::ng-deep .action-sheets-insurrance .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  justify-content: left;\n}\n::ng-deep .action-sheets-insurrance .action-sheet-button.sc-ion-action-sheet-ios {\n  font-size: 14px;\n  color: #222222;\n  height: 60px;\n  text-align: left;\n}\n::ng-deep .action-sheets-insurrance .action-sheet-button-inner.sc-ion-action-sheet-md {\n  justify-content: flex-start;\n  border-top: solid 1px #ccc;\n}\n::ng-deep .action-sheets-insurrance .action-sheet-title.sc-ion-action-sheet-md {\n  font-size: 18px;\n  font-weight: bold;\n}\n::ng-deep .has-claimed .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  opacity: 0.3;\n}\n@media (min-width: 414px) and (max-width: 414px) {\n  ::ng-deep .div-center {\n    width: 377px;\n  }\n}\n.div-button {\n  background-color: #ffffff !important;\n  position: absolute;\n  width: 100%;\n  bottom: calc(env(safe-area-inset-bottom) + 120px);\n}\nion-content {\n  background-color: #ffffff !important;\n}\n.trip-empty {\n  padding: 13px 16px 16px 16px;\n  height: 100%;\n}\n.trip-suggest-content {\n  border-radius: 6px;\n  box-shadow: 0px 0px 2px 1px #dedede;\n  position: relative;\n}\n.img {\n  border-radius: 6px 6px 0 0;\n  box-shadow: 0px 0px 2px 1px #dedede;\n}\n.float-info {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n  z-index: 11;\n}\n.float-promo {\n  position: absolute;\n  top: 83px;\n  left: 12px;\n  background-color: #e52822;\n  color: #fff;\n  font-size: 12px;\n  width: 88%;\n  height: 22px;\n  padding: 3px 8px 0px 12px;\n  z-index: 99;\n}\n.float-promo-description {\n  margin: 0;\n  width: 100%;\n  color: #fff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.hotel-name {\n  font-size: 17px;\n  margin-top: -10px;\n  text-align: left;\n  font-weight: bold;\n  white-space: nowrap;\n  width: 310px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #fff;\n  letter-spacing: -0.34px;\n}\n.float-promo:before {\n  content: \" \";\n  position: absolute;\n  left: 0px;\n  top: 22px;\n  border-top: 4px solid #851f1c;\n  border-left: 4px solid transparent;\n  border-bottom: none;\n}\n.grad1 {\n  position: absolute;\n  width: 100%;\n  height: 80px;\n  /* For browsers that do not support gradients */\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));\n  /* Standard syntax (must be last) */\n  z-index: 10;\n  bottom: 5px;\n  left: 0px;\n  opacity: 0.25;\n}\n.text-empty-title {\n  font-size: 14px;\n  color: #828282;\n  text-align: left;\n  letter-spacing: -0.2px;\n  font-weight: 300;\n  padding-bottom: 13px;\n}\n.combo-content {\n  padding: 11px 10px 13px 8px;\n}\n.combo-text {\n  font-size: 14px;\n  color: #333333;\n  text-align: left;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n}\n.btn-combo-suggest {\n  border-color: #f79221;\n  color: #ffffff;\n  background: #f79221;\n  width: 95%;\n  height: 48px;\n  margin: 0 10px 0 8px;\n}\n.div-button-combo-suggest {\n  bottom: 8px;\n  position: relative;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n.div-button-combo-other {\n  padding: 20px 0;\n  color: #26bed6;\n  font-size: 17px;\n  font-weight: 500;\n  text-align: center;\n}\n@media (min-height: 458px) and (max-height: 666px) {\n  .text-empty-title {\n    font-size: 12px;\n    color: #828282;\n    text-align: left;\n    letter-spacing: -0.2px;\n    font-weight: 300;\n    padding-bottom: 13px;\n  }\n\n  .combo-text {\n    font-size: 12px;\n    color: #333333;\n    text-align: left;\n    letter-spacing: -0.3px;\n    font-weight: 300;\n  }\n\n  .btn-combo-suggest {\n    border-color: #f79221;\n    color: #ffffff;\n    background: #f79221;\n    width: 95%;\n    height: 44px !important;\n    margin: 0 10px 0 8px;\n    font-size: 17px !important;\n    margin-top: -10px;\n  }\n\n  .div-button-combo-suggest {\n    bottom: 10px;\n  }\n\n  .trip-empty {\n    max-height: 570px;\n    height: 450px;\n  }\n}\n@media (min-height: 667px) and (max-height: 736px) {\n  .trip-empty {\n    padding: 13px 16px 16px 16px;\n    height: 100%;\n    max-height: 570px;\n  }\n\n  .div-button-combo-suggest {\n    bottom: 10px;\n  }\n}\n@media (min-height: 737px) and (max-height: 812px) {\n  .trip-empty {\n    padding: 13px 16px 16px 16px;\n    height: 100%;\n    max-height: 576px;\n  }\n}\n[nav-view-transition=“ios”][nav-view-direction=“forward”],\n[nav-view-transition=“ios”][nav-view-direction=“back”] {\n  background-color: #ffffff;\n  --background: #ffffff;\n}\n.div-insurance {\n  padding-top: 8px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.div-insurance .lbl-hadclaimed {\n  font-size: 14px;\n  color: #828282;\n}\n.div-insurance .logo-insurance {\n  width: 36px;\n  height: 22px;\n}\n.div-insurance .cls-label-text {\n  font-size: 12px;\n  color: #4f4f4f;\n  letter-spacing: -0.34px;\n}\n.div-insurance .p-lt-4 {\n  position: absolute;\n  padding-left: 4px;\n  padding-top: 4px;\n}\n.div-insurance .item-text {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n}\n.div-insurance .cls-insuranceno {\n  padding-left: 4px;\n  font-weight: bold;\n}\n.div-insurance .cls-require-text {\n  color: #26bed6;\n  text-decoration: underline;\n  padding: 8px 8px 0 8px;\n}\n.div-insurance .cls-hadclaimed {\n  font-size: 14px;\n  color: #828282;\n}\n.div-insurance .div-item-insurance {\n  padding-bottom: 16px;\n}\n.div-insurance .p-top-8 {\n  padding-top: 8px;\n}\n.div-insurance .img-hadclaimed {\n  margin: -6px 4px;\n  width: 24px;\n  height: 24px;\n}\n.div-insurance .insurrance-contact {\n  font-size: 14px;\n  position: relative;\n}\n.div-insurance .insurrance-contact .insurrance-contact-name {\n  position: relative;\n}\n.div-insurance .insurrance-contact .insurrance-contact-phone {\n  position: absolute;\n  top: 0;\n  left: 116px;\n  color: #26bed6;\n}\n.div-insurance .insurrance-contact .insurrance-contact-arrow {\n  position: absolute;\n  right: -5px;\n  top: -3px;\n}\n.div-insurance .insurrance-contact .insurrance-support-phone, .div-insurance .insurrance-contact .insurrance-detail-info {\n  padding: 10px 0;\n}\n.div-insurance .insurrance-contact .text-support-center {\n  color: #26bed6;\n  font-weight: bold;\n  padding-left: 4px;\n}\n.div-insurance .insurrance-contact .img-support {\n  padding-left: 8px;\n}\n.div-insurance .insurrance-contact .img-call {\n  right: 0px;\n}\n.div-insurance .p-bottom-8 {\n  padding-bottom: 8px;\n}\n.div-insurance .div-split-insurrance {\n  border-bottom: solid 1px #dedede;\n  opacity: 0.6;\n  margin: 11px 0;\n}\n.cls-col-popover-history {\n  height: 24px;\n}\n.cls-col-popover-history .mustClaim {\n  color: #e52822;\n}\n.popover-history {\n  float: right;\n  font-size: 44px;\n  color: #222222;\n  opacity: 0.54;\n  letter-spacing: -4.84px;\n  line-height: 18px;\n  position: absolute;\n  right: 0;\n  top: -11px;\n  padding-right: 5px;\n}\n.p-top-23 {\n  padding-top: 23px;\n}\n.text-age {\n  font-size: 12px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  color: #828282;\n}\n.v-align-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.div-flybooking {\n  font-size: 14px;\n  min-height: 120px;\n}\n.div-flybooking .m-top-28 {\n  margin-top: 28px;\n}\n.div-flybooking .padding-5 {\n  padding: 0 8px;\n  position: relative;\n  margin-bottom: 32px;\n  padding-top: 16px;\n}\n.div-flybooking .m-top-8 {\n  margin-top: 8px;\n}\n.div-flybooking .m-11 {\n  margin: 11px 0;\n}\n.div-flybooking .b-16 {\n  bottom: 16px !important;\n}\n.div-flybooking .div-arrival {\n  margin-top: 32px;\n  min-height: 120px;\n  padding: 0 5px;\n  position: relative;\n}\n.div-flybooking .text-right {\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: -0.4px;\n}\n.div-flybooking .text-departure {\n  position: relative;\n}\n.div-flybooking .logo {\n  position: absolute;\n  bottom: 0;\n  right: 24px;\n}\n.div-flybooking .div-departure, .div-flybooking .div-return {\n  position: relative;\n}\n.div-flybooking .div-departure .div-line, .div-flybooking .div-return .div-line {\n  position: absolute;\n  padding-left: 46px;\n  top: 6px;\n}\n.div-flybooking .div-departure .div-time-departure, .div-flybooking .div-return .div-time-departure {\n  width: 50px;\n}\n.div-flybooking .div-departure .div-info-departure, .div-flybooking .div-departure .div-info-return, .div-flybooking .div-return .div-info-departure, .div-flybooking .div-return .div-info-return {\n  position: absolute;\n  left: 60px;\n  top: 0;\n}\n.div-flybooking .div-departure .placeline, .div-flybooking .div-return .placeline {\n  content: \"\";\n  position: absolute;\n  height: 34px;\n  width: 1px;\n  top: 16px;\n  border-left: dotted 1.5px #bdbdbd;\n  left: 47px;\n}\n.div-flybooking .div-departure .placepoint, .div-flybooking .div-return .placepoint {\n  position: absolute;\n  top: 46%;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: 1px solid #CCCCCC;\n  left: 44px;\n}\n.div-flybooking .div-departure .placepoint-return, .div-flybooking .div-return .placepoint-return {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: 1px solid #CCCCCC;\n  top: 6px;\n  left: 44px;\n}\n.div-flybooking .text-thin {\n  font-weight: 200;\n}\n.text-bkg-history {\n  font-size: 12px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n.div-width-250 {\n  width: 250px;\n}\n.text-flight-datetime {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n.text-flight-title {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n.div-flight-inout {\n  padding: 0px 18px;\n  width: 32px;\n  height: 32px;\n  position: relative;\n}\n.div-flight-inout .img-flight-inout {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 0;\n  top: -2px;\n}\n.div-flight-inout .img-oneway {\n  width: 12px !important;\n  margin-left: 8px;\n  top: -5px;\n}\n.div-pax {\n  padding: 0px 8px;\n}\n.div-pax .div-split {\n  margin: 11px 0px 16px 0px;\n}\n.div-pax .pax-label {\n  font-size: 18px;\n  font-weight: 600;\n}\n.div-pax .m-top-27 {\n  margin-top: 27px;\n}\n.div-pax .m-top-8 {\n  margin-top: 8px;\n}\n.div-pax .div-pax-lug {\n  position: relative;\n}\n.div-pax .div-pax-lug .pax-type {\n  font-size: 12px;\n  color: #828282;\n  letter-spacing: -0.34px;\n  text-align: right;\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-weight: 100;\n}\n.div-pax .div-pax-lug .text-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.div-pax .div-luggest {\n  padding-top: 8px;\n  font-weight: 200;\n}\n.div-section-pax {\n  padding: 0 16px;\n}\n.div-section-pax .div-title {\n  font-size: 18px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #000000;\n}\n.div-section-pax .text-pax {\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #000000;\n}\n.div-section-pax .text-right {\n  text-align: right;\n  font-weight: 100;\n}\n::ng-deep ion-footer {\n  box-shadow: none;\n}\n.div-paymentbank .div-text-payment {\n  font-size: 14px;\n  line-height: 28px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n}\n.div-paymentbank .div-text-payment .d-flex {\n  display: flex;\n}\n.div-paymentbank .div-text-payment .d-flex .d-img {\n  width: 60%;\n  margin-right: 10px;\n  align-self: center;\n}\n.div-paymentbank .div-text-payment .d-flex .cls-text {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.56px;\n  text-align: left;\n  color: #222222;\n  white-space: initial;\n}\n.div-paymentbank .div-text-payment .text-copy {\n  padding-left: 8px;\n}\n.div-paymentbank .div-text-payment .text-booking {\n  color: #e52822;\n}\n.div-paymentbank .div-text-payment p {\n  display: block;\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n.div-paymentbank .div-text-payment .text-warning-payment {\n  height: 32px;\n  margin: 24px 0 0;\n  padding: 8px 39px 7px;\n  background-color: rgba(254, 237, 199, 0.4);\n}\n.div-paymentbank .div-text-payment .text-payment-bank {\n  margin: 0;\n  padding: 8px;\n  background-color: #feedc7;\n}\n.div-paymentbank .div-text-otherpayment {\n  margin: 16px 8px;\n}\n.div-paymentbank .btn-paymentother {\n  text-align: center;\n  width: 100%;\n  height: 44px !important;\n  background: rgba(245, 146, 51, 0.1);\n  color: #f59233;\n  padding: 11px 0 10px 0;\n}\n.div-paymentbank .m-lr-8 {\n  margin: 0 8px;\n}\n.d-flex-later {\n  display: flex;\n  background: #feedc7;\n  padding-top: 8px;\n}\n.d-img {\n  margin-right: 10px;\n}\n.cls-text {\n  font-size: 14px;\n  letter-spacing: -0.56px;\n  white-space: normal;\n}\n.cls-textopen {\n  color: #26bed6;\n  font-size: 14px;\n  letter-spacing: -0.56px;\n}\n.mt6 {\n  margin-top: 6px;\n}\n.mt16 {\n  margin-top: 16px;\n}\n.text-payment-info {\n  white-space: normal !important;\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  line-height: 28px;\n  margin: 0;\n  background: #feedc7;\n  padding-left: 8px;\n}\n.div-text-payment {\n  font-size: 14px;\n  line-height: 28px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n}\n.text-copy {\n  padding-left: 4px;\n}\n.text-bold {\n  font-size: 14px;\n  line-height: 1.5;\n  color: #222222;\n  font-weight: 600;\n  letter-spacing: -0.28px;\n}\n.text-other {\n  font-size: 14px;\n  color: #000000;\n}\n.div-btn-payment {\n  margin-top: 12px;\n}\n.btn-payment {\n  background-color: #feedc7;\n  color: #f59233;\n  width: 100%;\n  margin: 0;\n  font-size: 17px !important;\n}\n.div-payment-combo-flight {\n  display: flex;\n}\n.div-payment-combo-flight .div-payment-left {\n  width: 100%;\n}\n.div-payment-combo-flight .div-price {\n  text-align: right;\n  width: 100%;\n}\n.div-payment-combo-flight .div-text-fee {\n  line-height: 12px;\n}\n.text-name {\n  font-weight: 600;\n  font-size: 18px;\n  letter-spacing: -0.6px;\n  margin-bottom: 0;\n  margin-top: 12px;\n}\n.text-name .text-green {\n  color: #26bed6;\n}\n.text-fee {\n  margin: 2px 0px 5px 0px;\n  color: #828282;\n  letter-spacing: -0.34px;\n  font-size: 12px;\n}\n.text-note {\n  font-size: 12px;\n  color: #828282;\n  font-style: italic;\n  letter-spacing: -0.34px;\n}\n.text-date {\n  margin-top: 0px;\n  font-weight: bold;\n  font-size: 14px;\n}\n.total-price {\n  color: #26bed6;\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n  margin-bottom: 0;\n  margin-top: 8px;\n  height: 50px;\n}\n.text-red {\n  color: #e52822;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmxpZ2h0bXl0cmlwL2ZsaWdodG15dHJpcC5wYWdlLnNjc3MiLCIvVXNlcnMvZGV2LWl2aXZ1L0RvY3VtZW50cy9EZXZlbG9wL29saXZpYV9pb3Mvc3JjL2FwcC9mbGlnaHRteXRyaXAvZmxpZ2h0bXl0cmlwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFFSSxlQUFBO0FEQUo7QUNDSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FEQ1I7QUNDSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FEQ1I7QUNFSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBREFSO0FDR0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUREUjtBQ0tBO0VBQ0ksYUFBQTtBREZKO0FDSUE7RUFDSSwyQkFBQTtBRERKO0FDR0E7RUFDSSwyQkFBQTtBREFKO0FDRUE7RUFDSSxXQUFBO0FEQ0o7QUNDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNFLGNBQUE7QURFTjtBQ0FFO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FER047QUNERTtFQUNJLFdBQUE7QURJTjtBQ0ZFO0VBQ0UsV0FBQTtBREtKO0FDSEU7RUFDSSxpQkFBQTtBRE1OO0FDSkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QURPSjtBQ0xFO0VBQ0ksYUFBQTtFQUNGLHNCQUFBO0VBQ0EsdUJBQUE7QURRSjtBQ0xBO0VBQ0ksWUFBQTtFQUNBLHFEQUFBO0VBQ0Esd0JBQUE7QURRSjtBQ05JO0VBQ0ksbUJBQUE7QURRUjtBQ0pJO0VBQ1Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FETVo7QUNKSTtFQUNJLG9CQUFBO0FETVI7QUNISTtF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O0FEL0NKIiwiZmlsZSI6InNyYy9hcHAvZmxpZ2h0bXl0cmlwL2ZsaWdodG15dHJpcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uZmxpZ2h0LW15dHJpcC1oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4uZmxpZ2h0LW15dHJpcC1oZWFkZXIgLnRleHQtdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA4MHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbi5mbGlnaHQtbXl0cmlwLWhlYWRlciAuYnRuLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAzMnB4O1xuICBvcGFjaXR5OiAwLjg7XG4gIHBhZGRpbmc6IDZweDtcbn1cbi5mbGlnaHQtbXl0cmlwLWhlYWRlciAuc3AtY291bnR0ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTglO1xufVxuLmZsaWdodC1teXRyaXAtaGVhZGVyIC5zcC1jb3VudHRleHQtaGlzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjUlO1xufVxuXG4uZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm0tdG9wLTY0IHtcbiAgbWFyZ2luLXRvcDogNjRweCAhaW1wb3J0YW50O1xufVxuXG4ubS10b3AtMjQge1xuICBtYXJnaW4tdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tLTgge1xuICBtYXJnaW46IDhweDtcbn1cblxuLnRleHQtcGF4IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBjb2xvcjogIzIyMjIyMjtcbn1cblxuLnRleHQtdG90YWwtcHJpY2Uge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICBjb2xvcjogIzI2YmVkNjtcbn1cblxuLmRpdi13aWR0aC0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRpdi13aWR0aC0yMDAge1xuICB3aWR0aDogMjAwJTtcbn1cblxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRleHQtc3ViIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi52LWFsaWduLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGl2LWZsaWdodC1teXRyaXAtY29udGVudCwgLmNhcmQtYmFja2dyb3VuZC1wYWdlLWhpc3RvcnktdHJpcHMge1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pICsgOTRweCkgMHB4O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG59XG4uZGl2LWZsaWdodC1teXRyaXAtY29udGVudCAuZGl2LWZsaWdodC1teXRyaXAsIC5jYXJkLWJhY2tncm91bmQtcGFnZS1oaXN0b3J5LXRyaXBzIC5kaXYtZmxpZ2h0LW15dHJpcCB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG59XG4uZGl2LWZsaWdodC1teXRyaXAtY29udGVudCAuZGl2LWRlbGl2ZXJ5X3BheW1lbnQsIC5jYXJkLWJhY2tncm91bmQtcGFnZS1oaXN0b3J5LXRyaXBzIC5kaXYtZGVsaXZlcnlfcGF5bWVudCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU0LCAyMzcsIDE5OSwgMC40KTtcbiAgcGFkZGluZzogMTBweCA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4uZGl2LWZsaWdodC1teXRyaXAtY29udGVudCAuZGl2LW15dHJpcCwgLmNhcmQtYmFja2dyb3VuZC1wYWdlLWhpc3RvcnktdHJpcHMgLmRpdi1teXRyaXAge1xuICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbn1cbi5kaXYtZmxpZ2h0LW15dHJpcC1jb250ZW50IC5jb2wtZmxpZ2h0LW15dHJpcCwgLmNhcmQtYmFja2dyb3VuZC1wYWdlLWhpc3RvcnktdHJpcHMgLmNvbC1mbGlnaHQtbXl0cmlwIHtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDhweDtcbn1cbi5kaXYtZmxpZ2h0LW15dHJpcC1jb250ZW50IC5kaXYtaW1nLWxvZ28sIC5jYXJkLWJhY2tncm91bmQtcGFnZS1oaXN0b3J5LXRyaXBzIC5kaXYtaW1nLWxvZ28ge1xuICBoZWlnaHQ6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmRpdi1mbGlnaHQtbXl0cmlwLWNvbnRlbnQgLmRpdi1pbWctbG9nbyAuaW1nLWxvZ28sIC5jYXJkLWJhY2tncm91bmQtcGFnZS1oaXN0b3J5LXRyaXBzIC5kaXYtaW1nLWxvZ28gLmltZy1sb2dvIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cbi5kaXYtZmxpZ2h0LW15dHJpcC1jb250ZW50IC5kaXYtaW1nLWxvZ28gLmxvZ28tdm5hLCAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtaGlzdG9yeS10cmlwcyAuZGl2LWltZy1sb2dvIC5sb2dvLXZuYSB7XG4gIGhlaWdodDogMTJweCAhaW1wb3J0YW50O1xufVxuLmRpdi1mbGlnaHQtbXl0cmlwLWNvbnRlbnQgLnRleHQtdGhpbiwgLmNhcmQtYmFja2dyb3VuZC1wYWdlLWhpc3RvcnktdHJpcHMgLnRleHQtdGhpbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzIyMjIyMjtcbn1cbi5kaXYtZmxpZ2h0LW15dHJpcC1jb250ZW50IC50ZXh0LWhvbGQtdGlja2V0LCAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtaGlzdG9yeS10cmlwcyAudGV4dC1ob2xkLXRpY2tldCB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmRpdi1mbGlnaHQtbXl0cmlwLWNvbnRlbnQgLnJvdy1ia2ctaWQsIC5jYXJkLWJhY2tncm91bmQtcGFnZS1oaXN0b3J5LXRyaXBzIC5yb3ctYmtnLWlkIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDI0MiwgMjQyLCAwLjUpO1xufVxuLmRpdi1mbGlnaHQtbXl0cmlwLWNvbnRlbnQgLmRpdi10aWNrZXQsIC5jYXJkLWJhY2tncm91bmQtcGFnZS1oaXN0b3J5LXRyaXBzIC5kaXYtdGlja2V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5kaXYtZmxpZ2h0LW15dHJpcC1jb250ZW50IC50LXJpZ2h0LCAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtaGlzdG9yeS10cmlwcyAudC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZGl2LWVtcHR5LXRyaXAge1xuICBtYXJnaW4tdG9wOiAxMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGl2LXdpZHRoLTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGl2LXNwbGl0LXBhbmVsIHtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIG1hcmdpbjogMTZweCAtMTZweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLnNlZ21lbnQtYnV0dG9uLmFjdGl2YXRlZCwgLnNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYWN0aXZhdGVkLCAuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gIGJvcmRlci1jb2xvcjogIzI2YmVkNiAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogIzI2YmVkNiAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uY2xzLXN0cmlrZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4uc2VnbWVudC1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbn1cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLW15dHJpcHMgLml0ZW0tcm9vbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMTA0cHg7XG4gIG1hcmdpbjogMCA1cHg7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtbXl0cmlwcyAuZGl2LXNwbGl0LWNvbG9yIHtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtbXl0cmlwcyAuZGl2LXdyYXBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTA0cHg7XG4gIHdpZHRoOiAxMDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLW15dHJpcHMgLmltZy1hdmF0YXIge1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtaW4taGVpZ2h0OiAxMDRweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZS1teXRyaXBzIC5jb2wtbXl0cmlwLXRleHQtZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nLWxlZnQ6IDExMnB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLW15dHJpcHMgLmRpdi1jaW4tY291dCB7XG4gIG1hcmdpbjogMCA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtbXl0cmlwcyAuZGl2LWNpbi1jb3V0IC5kaXYtY2luIHtcbiAgd2lkdGg6IDM0JTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZS1teXRyaXBzIC5kaXYtY2luLWNvdXQgLmRpdi1jb3V0IHtcbiAgd2lkdGg6IDMzJTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZS1teXRyaXBzIC5kaXYtY2luLWNvdXQgLmRpdi1kdXJhdGlvbiB7XG4gIHdpZHRoOiAyMiU7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtbXl0cmlwcyAuZGl2LWNpbi1jb3V0IC5kaXYtbGFiZWwtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLW15dHJpcHMgLmRpdi1jaW4tY291dCAuZGl2LWRhdGUge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjY2RjZGNkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtbXl0cmlwcyAuZGl2LWNpbi1jb3V0IC5kaXYtZGF0ZS1jb3V0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLW15dHJpcHMgLmRpdi1jaW4tY291dCAubm8tYm9yZGVyIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLW15dHJpcHMgLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCA1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtbXl0cmlwcyAuZC1mbGV4IC5kaXYtbGVmdCB7XG4gIHdpZHRoOiAyMHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLW15dHJpcHMgLmQtZmxleCAuZGl2LWNlbnRlciB7XG4gIHdpZHRoOiAzMzhweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZS1teXRyaXBzIC5kLWZsZXggLmRpdi1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLW15dHJpcHMgLm0tdG9wLTMge1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtbXl0cmlwcyAubS10b3AtMTQge1xuICBtYXJnaW4tdG9wOiAxNHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLW15dHJpcHMgLm0tdG9wLTgge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtbXl0cmlwcyAuY29sLW5vcGQtdG9wIHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZS1teXRyaXBzIC5pbWctY2FsbGNlbnRlciB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtbXl0cmlwcyAuc2Vjb25kLWNvbnRlbnQge1xuICBwYWRkaW5nOiA5cHggMTFweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLW15dHJpcHMgLnNlY29uZC1jb250ZW50IC5wLWxyLTUge1xuICBwYWRkaW5nOiAwIDVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZS1teXRyaXBzIC5kaXYtZmxpZ2h0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtbXl0cmlwcyAudGV4dC10aWNrZXQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubS1sZi0wIHtcbiAgbWFyZ2luOiA4cHggMCAhaW1wb3J0YW50O1xufVxuXG4uZGl2LXJlcXVlc3QtcGF5bWVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzAwM2M3MTtcbiAgaGVpZ2h0OiAzMnB4O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uZGl2LXJlcXVlc3QtcGF5bWVudCAubGJsLXJlcXVlc3QtcGF5bWVudCB7XG4gIHRvcDogN3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tLXRvcC0yNyB7XG4gIG1hcmdpbi10b3A6IDI3cHg7XG59XG5cbi5maXJzdC1jb250ZW50IHtcbiAgbWFyZ2luOiAwIDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmZpcnN0LWNvbnRlbnQgLmNvbC1ib29raW5naWQge1xuICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLmZpcnN0LWNvbnRlbnQgLnAtci0wIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbi5maXJzdC1jb250ZW50IC5jb2wtYmtnLXN0YXR1cyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBwYWRkaW5nOiA1cHggNXB4IDVweCAwcHg7XG59XG4uZmlyc3QtY29udGVudCAuZmx5LWJrZy1jb2RlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQ6ICMyNmJlZDY7XG59XG4uZmlyc3QtY29udGVudCAuZi1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmZpcnN0LWNvbnRlbnQtaGlzdG9yeSB7XG4gIG1hcmdpbjogMCAxNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5kaXYtcGF5bWVudCB7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAyNHB4IDE2cHg7XG59XG4uZGl2LXBheW1lbnQgLmRpdi1zcGxpdC1wYXltZW50IHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkZWRlZGU7XG4gIG9wYWNpdHk6IDAuNjtcbiAgbWFyZ2luOiAxMXB4IDAgMTZweCAwO1xufVxuLmRpdi1wYXltZW50IC5kaXYtcGF5bWVudC1jb21iby1mbGlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi1wYXltZW50IC5kaXYtcGF5bWVudC1jb21iby1mbGlnaHQgLmRpdi1wYXltZW50LWxlZnQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5kaXYtcGF5bWVudCAuZGl2LXBheW1lbnQtY29tYm8tZmxpZ2h0IC5kaXYtcHJpY2Uge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGl2LXBheW1lbnQgLmRpdi1wYXltZW50LWNvbWJvLWZsaWdodCAuZGl2LXRleHQtZmVlIHtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG4uZGl2LXBheW1lbnQgLnRleHQtcG9saWN5IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uZGl2LXBheW1lbnQgLnRleHQtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5kaXYtcGF5bWVudCAudGV4dC1uYW1lIC50ZXh0LWdyZWVuIHtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG4uZGl2LXBheW1lbnQgLnRleHQtZmVlIHtcbiAgbWFyZ2luOiAycHggMHB4IDVweCAwcHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmRpdi1wYXltZW50IC50ZXh0LW5vdGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xufVxuLmRpdi1wYXltZW50IC50ZXh0LWRhdGUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZGl2LXBheW1lbnQgLnRvdGFsLXByaWNlIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5kaXYtcGF5bWVudCAuZGl2LWJ0bi1wYXltZW50IHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5kaXYtcGF5bWVudCAuYnRuLXBheW1lbnQge1xuICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbn1cbi5kaXYtcGF5bWVudCAuZGl2LXBlbmFsdHksIC5kaXYtcGF5bWVudCAuZGl2LXJ1bGVzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAyMnB4O1xufVxuLmRpdi1wYXltZW50IC5kaXYtcGVuYWx0eSAuZGl2LWxhYmVsLWxlZnQsIC5kaXYtcGF5bWVudCAuZGl2LXJ1bGVzIC5kaXYtbGFiZWwtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uZGl2LXBheW1lbnQgLmRpdi1wZW5hbHR5IC5kaXYtYXJyb3ctcmlnaHQsIC5kaXYtcGF5bWVudCAuZGl2LXJ1bGVzIC5kaXYtYXJyb3ctcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uZGl2LXBheW1lbnQgLmRpdi1wZW5hbHR5IC5kaXYtYXJyb3ctcmlnaHQgLmNscy1pY29uLWFycm93LCAuZGl2LXBheW1lbnQgLmRpdi1ydWxlcyAuZGl2LWFycm93LXJpZ2h0IC5jbHMtaWNvbi1hcnJvdyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTVweDtcbiAgdG9wOiAtMnB4O1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmhlYWRlci10aXRsZSAuZGl2LXJlZnJlc2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNnB4O1xuICB0b3A6IDhweDtcbn1cbi5oZWFkZXItdGl0bGUgLmRpdi1yZWZyZXNoIC5pbWctcmVmcmVzaCB7XG4gIHdpZHRoOiAyNHB4O1xufVxuXG4uaGVhZGVyLWFycm93IHtcbiAgbWFyZ2luOiAzcHggMTFweDtcbn1cblxuLmxhYmVsLWJhZGdlIHtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbn1cblxuLmFsaWduLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJhZGdlc2NzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHotaW5kZXg6IDEwO1xuICBtYXJnaW4tbGVmdDogODQlO1xuICBtYXJnaW4tdG9wOiAtMTAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXdlaWdodDogMTAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNHB4IDhweDtcbn1cblxuLmJhZGdlLW1kIHtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNjtcbn1cblxuLnJvb20tY2xhc3MtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmJrZy1pZCB7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5oMiB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNscy1hdmctcG9pbnQge1xuICBtYXJnaW46IDhweCAwcHg7XG59XG5cbi5zdXBwb3J0LXRleHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmRpdi1zcGxpdCB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZGVkZWRlO1xuICBvcGFjaXR5OiAwLjY7XG4gIG1hcmdpbjogMTFweCA1cHggMTZweCA1cHg7XG59XG5cbi5jb2wtaWNvbiB7XG4gIHBhZGRpbmc6IDNweCAwcHg7XG59XG5cbi5jb2wtdGV4dCB7XG4gIHBhZGRpbmc6IDJweCAwcHg7XG59XG5cbi5jb2wtYWRkcmVzcyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5oaWRkZW4tdGV4dCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZGl2LWRhdGUtY291dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uaWNvbi1hcnJvdy1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLmNvbC1ub3JtYWx0ZXh0LW5vcGQtdG9wIHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4ucm9vbS1uYW1lIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYnRuLW5leHQge1xuICBib3JkZXI6IHNvbGlkIDFweCAjZjc5MjIxO1xuICBjb2xvcjogI2Y3OTIyMTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW46IDhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcbn1cblxuLmltZy10cmlwLWVtcHR5IHtcbiAgaGVpZ2h0OiAzMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1nLWVtcHR5IHtcbiAgcGFkZGluZy10b3A6IDIwJTtcbn1cblxuLnRleHQtdHJpcC1lbXB0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogI2JkYmRiZDtcbn1cblxuLmJ1dHRvbi10cmlwLWVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLXRyaXAtZW1wdHkge1xuICBib3JkZXItY29sb3I6ICNmNzkyMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjZjc5MjIxO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmhpc3RvcnktdHJpcCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xufVxuXG4ubGFiZWwtY29tYm9uYW1lIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmxhYmVsLWZsaWdodC1zdGFydCwgLmxhYmVsLWZsaWdodC1yZXR1cm4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xufVxuXG4uZmxpZ2h0LXN0YXJ0LWNvZGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jb2wtbm9wYWRkaW5nLWxlZnQge1xuICBwYWRkaW5nOiA1cHggNXB4IDVweCAwcHg7XG59XG5cbi5jb21iby1pbmZvIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG59XG5cbi5jb21iby1kZXBhcnR1cmUtZGF0ZSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5mbGlnaHQtZnJvbSwgLmZsaWdodC1udW1uZXIge1xuICBjb2xvcjogIzRmNGY0Zjtcbn1cblxuLmltZy1sdWdnYWdlIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5jYXJkLWJhY2tncm91bmQtcGFnZS1oaXN0b3J5LXRyaXBzIHtcbiAgcGFkZGluZzogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkgKyA1NHB4KSAwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtaGlzdG9yeS10cmlwcyAudGV4dC1sZWZ0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLWhpc3RvcnktdHJpcHMgLmxhYmVsLXJldmlld3Mge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtaGlzdG9yeS10cmlwcyAuZGl2LXdyYXBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTE4cHg7XG4gIHdpZHRoOiAxMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLWhpc3RvcnktdHJpcHMgaW1nIHtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLWhpc3RvcnktdHJpcHMgLmhlYWRlci10aXRsZSB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1yaWdodDogMTUlO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLWhpc3RvcnktdHJpcHMgLmhlYWRlci1hcnJvdyB7XG4gIG1hcmdpbjogM3B4IDExcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtaGlzdG9yeS10cmlwcyAubGFiZWwtYmFkZ2Uge1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLWhpc3RvcnktdHJpcHMgLmJhZGdlc2NzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHotaW5kZXg6IDEwO1xuICBtYXJnaW4tbGVmdDogODQlO1xuICBtYXJnaW4tdG9wOiAtMTAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXdlaWdodDogMTAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZS1oaXN0b3J5LXRyaXBzIC5iYWRnZS1tZCB7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtaGlzdG9yeS10cmlwcyAucm9vbS1jbGFzcy1uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzAwM2M3MTtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtaGlzdG9yeS10cmlwcyBoMiB7XG4gIG1hcmdpbjogMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZS1oaXN0b3J5LXRyaXBzIC5jbHMtYXZnLXBvaW50IHtcbiAgbWFyZ2luOiA4cHggMHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLWhpc3RvcnktdHJpcHMgLnN1cHBvcnQtdGV4dCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLWhpc3RvcnktdHJpcHMgLmRpdi1zcGxpdCB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZGVkZWRlO1xuICBvcGFjaXR5OiAwLjY7XG4gIG1hcmdpbjogMTFweCA1cHggMTFweCA1cHg7XG59XG5cbi5kaXYtc3BsaXQtaGlzdG9yeSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZGVkZWRlO1xuICBvcGFjaXR5OiAwLjY7XG4gIG1hcmdpbjogMTZweCAwO1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtcmVxdWVzdC10cmlwcyB7XG4gIHBhZGRpbmc6IDExcHg7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWlvczo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtcmVxdWVzdC1idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNThweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSAobWluLWhlaWdodDogODEycHgpIGFuZCAobWF4LWhlaWdodDogODk2cHgpIHtcbiAgLmRpdi1yZXF1ZXN0LWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogODhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5kaXYtZW1wdHktdHJpcCB7XG4gICAgbWFyZ2luLXRvcDogMTU0cHg7XG4gIH1cbn1cbi5jb2wtaW1nLWhpc3Rvcnl0cmlwIHtcbiAgcGFkZGluZzogNXB4IDA7XG59XG5cbi5kaXYtbXlyZXF1ZXN0dHJpcCB7XG4gIHBhZGRpbmc6IDExcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gIC5jb2wtbXl0cmlwLXRleHQtZGVzY3JpcHRpb24sIC5jb2wtaGlzdG9yeXRyaXAtdGV4dC1kZXNjcmlwdGlvbiwgLmNvbC1yZXF1ZXN0cmlwLXRleHQtZGVzY3JpcHRpb24ge1xuICAgIGxlZnQ6IDEycHg7XG4gIH1cblxuICAuYnRuLW5leHQge1xuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICB9XG5cbiAgLmNvbC10ZXh0LXJpZ2h0IHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbn1cbjpob3N0IHtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTojMjZiZWQ2O1xufVxuXG5pb24tbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbjo6bmctZGVlcCAuc2MtaW9uLXNlZ21lbnQtaW9zLWhpb24tdG9vbGJhcjpub3QoLmlvbi1jb2xvcikuc2MtaW9uLXNlZ21lbnQtaW9zLXMgPiAuc2VnbWVudC1idXR0b24tY2hlY2tlZCwgOjpuZy1kZWVwIGlvbi10b29sYmFyIC5zYy1pb24tc2VnbWVudC1pb3MtaDpub3QoLmlvbi1jb2xvcikuc2MtaW9uLXNlZ21lbnQtaW9zLXMgPiAuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuc2MtaW9uLXNlZ21lbnQtaW9zLWhpb24tdG9vbGJhcjpub3QoLmlvbi1jb2xvcikuc2MtaW9uLXNlZ21lbnQtaW9zLXMgPiBpb24tc2VnbWVudC1idXR0b24sIDo6bmctZGVlcCBpb24tdG9vbGJhciAuc2MtaW9uLXNlZ21lbnQtaW9zLWg6bm90KC5pb24tY29sb3IpLnNjLWlvbi1zZWdtZW50LWlvcy1zID4gaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmxpc3QtaW9zIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LWNvbnRhaW5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLXRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKiAyIC0gMTRweCk7XG4gIC13ZWJraXQtcGFkZGluZy1zdGFydDogOHB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogOHB4O1xuICAtd2Via2l0LXBhZGRpbmctZW5kOiA4cHg7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogOHB4O1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LXRpdGxlLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdW5zZXQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzIyMjIyMjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogNDRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG46Om5nLWRlZXAgLmljX2J1czIgLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczo6YmVmb3JlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbnRlbnQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWdzL2ljX2J1czIuc3ZnXCIpO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDhweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbn1cbjo6bmctZGVlcCAuaWNfaG9tZSAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOjpiZWZvcmUge1xuICBmbG9hdDogbGVmdDtcbiAgY29udGVudDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvaWNfaG9tZS5zdmdcIik7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogOHB4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xufVxuOjpuZy1kZWVwIC5pY19wYXBlciAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOjpiZWZvcmUge1xuICBmbG9hdDogbGVmdDtcbiAgY29udGVudDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvaWNfcGFwZXIuc3ZnXCIpO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDhweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbn1cbjo6bmctZGVlcCAuaWNfbWVzc2FnZSAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOjpiZWZvcmUge1xuICBmbG9hdDogbGVmdDtcbiAgY29udGVudDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvaWNfbWVzc2FnZS5zdmdcIik7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogOHB4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggMHB4ICM4MjgyODI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogNDRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIC13ZWJraXQtcGFkZGluZy1lbmQ6IDEwcHg7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZmY7XG4gIC0tYmFja2dyb3VuZC1zZWxlY3RlZDojZmZmO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuOjpuZy1kZWVwIC5maXhoZWlnaHQtNDQgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogNDRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIC13ZWJraXQtcGFkZGluZy1lbmQ6IDEwcHg7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6I2ZmZjtcbiAgLS1iYWNrZ3JvdW5kLXNlbGVjdGVkOiNmZmY7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG46Om5nLWRlZXAgLmZpeGhlaWdodC04MCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0NHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMTBweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAxMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojZmZmO1xuICAtLWJhY2tncm91bmQtc2VsZWN0ZWQ6I2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbjo6bmctZGVlcCAuZml4aGVpZ2h0LTkwIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQ0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxM3B4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAtd2Via2l0LXBhZGRpbmctZW5kOiAxMHB4O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogOTBweCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZmY7XG4gIC0tYmFja2dyb3VuZC1zZWxlY3RlZDojZmZmO1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjUwcHgpIGFuZCAobWF4LXdpZHRoOiAzMjlweCkge1xuICA6Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtbm90aWZpY2F0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgICBtaW4taGVpZ2h0OiA3MnB4O1xuICB9XG4gIDo6bmctZGVlcCAuZml4aGVpZ2h0LTQ0IC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgICBtaW4taGVpZ2h0OiA0NHB4O1xuICB9XG4gIDo6bmctZGVlcCAuZml4aGVpZ2h0LTgwIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICB9XG4gIDo6bmctZGVlcCAuZml4aGVpZ2h0LTkwIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgICBtaW4taGVpZ2h0OiAxMDJweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICAuY29sLW15dHJpcC10ZXh0LWRlc2NyaXB0aW9uLCAuY29sLWhpc3Rvcnl0cmlwLXRleHQtZGVzY3JpcHRpb24sIC5jb2wtcmVxdWVzdHJpcC10ZXh0LWRlc2NyaXB0aW9uIHtcbiAgICBsZWZ0OiAxMnB4O1xuICB9XG5cbiAgLmJ0bi1uZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLCA1cHg7XG4gIH1cblxuICAuY29sLXRleHQtcmlnaHQge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuOmhvc3Qge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiMyNmJlZDY7XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZzogMDtcbn1cblxuOjpuZy1kZWVwIC5pb3Muc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24tdG9wLmlvbi1hY3RpdmF0YWJsZS5pb24tYWN0aXZhdGFibGUtaW5zdGFudC5oeWRyYXRlZC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQgLnNwLWNvdW50dGV4dCB7XG4gIHJpZ2h0OiAxMCUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuc2VnbWVudC1idXR0b24tY2hlY2tlZCAuc3AtY291bnR0ZXh0LWhpcyB7XG4gIHJpZ2h0OiAyMCUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubGlzdC1pb3Mge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG46Om5nLWRlZXAgLnNjLWlvbi1zZWdtZW50LWlvcy1oIHtcbiAgbWFyZ2luOiAwIDE2cHg7XG59XG46Om5nLWRlZXAgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIHtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbjo6bmctZGVlcCAudHJpcC1lbXB0eSBwIHtcbiAgbWFyZ2luOiA0cHggMDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1pbnN1cnJhbmNlIC5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1tZCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1pbnN1cnJhbmNlIC5hY3Rpb24tc2hlZXQtY29udGFpbmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgcGFkZGluZzogMDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1pbnN1cnJhbmNlIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1pbnN1cnJhbmNlIC5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1pbnN1cnJhbmNlIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWluc3VycmFuY2UgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtaW5zdXJyYW5jZSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LW1kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2NjYztcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1pbnN1cnJhbmNlIC5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1tZCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG46Om5nLWRlZXAgLmhhcy1jbGFpbWVkIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgb3BhY2l0eTogMC4zO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDQxNHB4KSBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcbiAgOjpuZy1kZWVwIC5kaXYtY2VudGVyIHtcbiAgICB3aWR0aDogMzc3cHg7XG4gIH1cbn1cblxuLmRpdi1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkgKyAxMjBweCk7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG4udHJpcC1lbXB0eSB7XG4gIHBhZGRpbmc6IDEzcHggMTZweCAxNnB4IDE2cHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRyaXAtc3VnZ2VzdC1jb250ZW50IHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAxcHggI2RlZGVkZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwIDA7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDFweCAjZGVkZWRlO1xufVxuXG4uZmxvYXQtaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA4cHg7XG4gIGxlZnQ6IDhweDtcbiAgei1pbmRleDogMTE7XG59XG5cbi5mbG9hdC1wcm9tbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4M3B4O1xuICBsZWZ0OiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUyODIyO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogODglO1xuICBoZWlnaHQ6IDIycHg7XG4gIHBhZGRpbmc6IDNweCA4cHggMHB4IDEycHg7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4uZmxvYXQtcHJvbW8tZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5ob3RlbC1uYW1lIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAzMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGNvbG9yOiAjZmZmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbn1cblxuLmZsb2F0LXByb21vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAyMnB4O1xuICBib3JkZXItdG9wOiA0cHggc29saWQgIzg1MWYxYztcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmdyYWQxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjMpKTtcbiAgLyogU3RhbmRhcmQgc3ludGF4IChtdXN0IGJlIGxhc3QpICovXG4gIHotaW5kZXg6IDEwO1xuICBib3R0b206IDVweDtcbiAgbGVmdDogMHB4O1xuICBvcGFjaXR5OiAwLjI1O1xufVxuXG4udGV4dC1lbXB0eS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmctYm90dG9tOiAxM3B4O1xufVxuXG4uY29tYm8tY29udGVudCB7XG4gIHBhZGRpbmc6IDExcHggMTBweCAxM3B4IDhweDtcbn1cblxuLmNvbWJvLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uYnRuLWNvbWJvLXN1Z2dlc3Qge1xuICBib3JkZXItY29sb3I6ICNmNzkyMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjZjc5MjIxO1xuICB3aWR0aDogOTUlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbjogMCAxMHB4IDAgOHB4O1xufVxuXG4uZGl2LWJ1dHRvbi1jb21iby1zdWdnZXN0IHtcbiAgYm90dG9tOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmRpdi1idXR0b24tY29tYm8tb3RoZXIge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtaW4taGVpZ2h0OiA0NThweCkgYW5kIChtYXgtaGVpZ2h0OiA2NjZweCkge1xuICAudGV4dC1lbXB0eS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjODI4MjgyO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAxM3B4O1xuICB9XG5cbiAgLmNvbWJvLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuXG4gIC5idG4tY29tYm8tc3VnZ2VzdCB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjc5MjIxO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQ6ICNmNzkyMjE7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgMTBweCAwIDhweDtcbiAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgfVxuXG4gIC5kaXYtYnV0dG9uLWNvbWJvLXN1Z2dlc3Qge1xuICAgIGJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC50cmlwLWVtcHR5IHtcbiAgICBtYXgtaGVpZ2h0OiA1NzBweDtcbiAgICBoZWlnaHQ6IDQ1MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDY2N3B4KSBhbmQgKG1heC1oZWlnaHQ6IDczNnB4KSB7XG4gIC50cmlwLWVtcHR5IHtcbiAgICBwYWRkaW5nOiAxM3B4IDE2cHggMTZweCAxNnB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiA1NzBweDtcbiAgfVxuXG4gIC5kaXYtYnV0dG9uLWNvbWJvLXN1Z2dlc3Qge1xuICAgIGJvdHRvbTogMTBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4taGVpZ2h0OiA3MzdweCkgYW5kIChtYXgtaGVpZ2h0OiA4MTJweCkge1xuICAudHJpcC1lbXB0eSB7XG4gICAgcGFkZGluZzogMTNweCAxNnB4IDE2cHggMTZweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogNTc2cHg7XG4gIH1cbn1cbltuYXYtdmlldy10cmFuc2l0aW9uPeKAnGlvc+KAnV1bbmF2LXZpZXctZGlyZWN0aW9uPeKAnGZvcndhcmTigJ1dLFxuW25hdi12aWV3LXRyYW5zaXRpb2494oCcaW9z4oCdXVtuYXYtdmlldy1kaXJlY3Rpb2494oCcYmFja+KAnV0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbi5kaXYtaW5zdXJhbmNlIHtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5kaXYtaW5zdXJhbmNlIC5sYmwtaGFkY2xhaW1lZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uZGl2LWluc3VyYW5jZSAubG9nby1pbnN1cmFuY2Uge1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAyMnB4O1xufVxuLmRpdi1pbnN1cmFuY2UgLmNscy1sYWJlbC10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG59XG4uZGl2LWluc3VyYW5jZSAucC1sdC00IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cbi5kaXYtaW5zdXJhbmNlIC5pdGVtLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG4uZGl2LWluc3VyYW5jZSAuY2xzLWluc3VyYW5jZW5vIHtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmRpdi1pbnN1cmFuY2UgLmNscy1yZXF1aXJlLXRleHQge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHBhZGRpbmc6IDhweCA4cHggMCA4cHg7XG59XG4uZGl2LWluc3VyYW5jZSAuY2xzLWhhZGNsYWltZWQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmRpdi1pbnN1cmFuY2UgLmRpdi1pdGVtLWluc3VyYW5jZSB7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuLmRpdi1pbnN1cmFuY2UgLnAtdG9wLTgge1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuLmRpdi1pbnN1cmFuY2UgLmltZy1oYWRjbGFpbWVkIHtcbiAgbWFyZ2luOiAtNnB4IDRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cbi5kaXYtaW5zdXJhbmNlIC5pbnN1cnJhbmNlLWNvbnRhY3Qge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kaXYtaW5zdXJhbmNlIC5pbnN1cnJhbmNlLWNvbnRhY3QgLmluc3VycmFuY2UtY29udGFjdC1uYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRpdi1pbnN1cmFuY2UgLmluc3VycmFuY2UtY29udGFjdCAuaW5zdXJyYW5jZS1jb250YWN0LXBob25lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDExNnB4O1xuICBjb2xvcjogIzI2YmVkNjtcbn1cbi5kaXYtaW5zdXJhbmNlIC5pbnN1cnJhbmNlLWNvbnRhY3QgLmluc3VycmFuY2UtY29udGFjdC1hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC01cHg7XG4gIHRvcDogLTNweDtcbn1cbi5kaXYtaW5zdXJhbmNlIC5pbnN1cnJhbmNlLWNvbnRhY3QgLmluc3VycmFuY2Utc3VwcG9ydC1waG9uZSwgLmRpdi1pbnN1cmFuY2UgLmluc3VycmFuY2UtY29udGFjdCAuaW5zdXJyYW5jZS1kZXRhaWwtaW5mbyB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5kaXYtaW5zdXJhbmNlIC5pbnN1cnJhbmNlLWNvbnRhY3QgLnRleHQtc3VwcG9ydC1jZW50ZXIge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufVxuLmRpdi1pbnN1cmFuY2UgLmluc3VycmFuY2UtY29udGFjdCAuaW1nLXN1cHBvcnQge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbi5kaXYtaW5zdXJhbmNlIC5pbnN1cnJhbmNlLWNvbnRhY3QgLmltZy1jYWxsIHtcbiAgcmlnaHQ6IDBweDtcbn1cbi5kaXYtaW5zdXJhbmNlIC5wLWJvdHRvbS04IHtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cbi5kaXYtaW5zdXJhbmNlIC5kaXYtc3BsaXQtaW5zdXJyYW5jZSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZGVkZWRlO1xuICBvcGFjaXR5OiAwLjY7XG4gIG1hcmdpbjogMTFweCAwO1xufVxuXG4uY2xzLWNvbC1wb3BvdmVyLWhpc3Rvcnkge1xuICBoZWlnaHQ6IDI0cHg7XG59XG4uY2xzLWNvbC1wb3BvdmVyLWhpc3RvcnkgLm11c3RDbGFpbSB7XG4gIGNvbG9yOiAjZTUyODIyO1xufVxuXG4ucG9wb3Zlci1oaXN0b3J5IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDQ0cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBvcGFjaXR5OiAwLjU0O1xuICBsZXR0ZXItc3BhY2luZzogLTQuODRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogLTExcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLnAtdG9wLTIzIHtcbiAgcGFkZGluZy10b3A6IDIzcHg7XG59XG5cbi50ZXh0LWFnZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi52LWFsaWduLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGl2LWZseWJvb2tpbmcge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xufVxuLmRpdi1mbHlib29raW5nIC5tLXRvcC0yOCB7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG59XG4uZGl2LWZseWJvb2tpbmcgLnBhZGRpbmctNSB7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuLmRpdi1mbHlib29raW5nIC5tLXRvcC04IHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLmRpdi1mbHlib29raW5nIC5tLTExIHtcbiAgbWFyZ2luOiAxMXB4IDA7XG59XG4uZGl2LWZseWJvb2tpbmcgLmItMTYge1xuICBib3R0b206IDE2cHggIWltcG9ydGFudDtcbn1cbi5kaXYtZmx5Ym9va2luZyAuZGl2LWFycml2YWwge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgcGFkZGluZzogMCA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kaXYtZmx5Ym9va2luZyAudGV4dC1yaWdodCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cbi5kaXYtZmx5Ym9va2luZyAudGV4dC1kZXBhcnR1cmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGl2LWZseWJvb2tpbmcgLmxvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDI0cHg7XG59XG4uZGl2LWZseWJvb2tpbmcgLmRpdi1kZXBhcnR1cmUsIC5kaXYtZmx5Ym9va2luZyAuZGl2LXJldHVybiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kaXYtZmx5Ym9va2luZyAuZGl2LWRlcGFydHVyZSAuZGl2LWxpbmUsIC5kaXYtZmx5Ym9va2luZyAuZGl2LXJldHVybiAuZGl2LWxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctbGVmdDogNDZweDtcbiAgdG9wOiA2cHg7XG59XG4uZGl2LWZseWJvb2tpbmcgLmRpdi1kZXBhcnR1cmUgLmRpdi10aW1lLWRlcGFydHVyZSwgLmRpdi1mbHlib29raW5nIC5kaXYtcmV0dXJuIC5kaXYtdGltZS1kZXBhcnR1cmUge1xuICB3aWR0aDogNTBweDtcbn1cbi5kaXYtZmx5Ym9va2luZyAuZGl2LWRlcGFydHVyZSAuZGl2LWluZm8tZGVwYXJ0dXJlLCAuZGl2LWZseWJvb2tpbmcgLmRpdi1kZXBhcnR1cmUgLmRpdi1pbmZvLXJldHVybiwgLmRpdi1mbHlib29raW5nIC5kaXYtcmV0dXJuIC5kaXYtaW5mby1kZXBhcnR1cmUsIC5kaXYtZmx5Ym9va2luZyAuZGl2LXJldHVybiAuZGl2LWluZm8tcmV0dXJuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA2MHB4O1xuICB0b3A6IDA7XG59XG4uZGl2LWZseWJvb2tpbmcgLmRpdi1kZXBhcnR1cmUgLnBsYWNlbGluZSwgLmRpdi1mbHlib29raW5nIC5kaXYtcmV0dXJuIC5wbGFjZWxpbmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMzRweDtcbiAgd2lkdGg6IDFweDtcbiAgdG9wOiAxNnB4O1xuICBib3JkZXItbGVmdDogZG90dGVkIDEuNXB4ICNiZGJkYmQ7XG4gIGxlZnQ6IDQ3cHg7XG59XG4uZGl2LWZseWJvb2tpbmcgLmRpdi1kZXBhcnR1cmUgLnBsYWNlcG9pbnQsIC5kaXYtZmx5Ym9va2luZyAuZGl2LXJldHVybiAucGxhY2Vwb2ludCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NiU7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gIGxlZnQ6IDQ0cHg7XG59XG4uZGl2LWZseWJvb2tpbmcgLmRpdi1kZXBhcnR1cmUgLnBsYWNlcG9pbnQtcmV0dXJuLCAuZGl2LWZseWJvb2tpbmcgLmRpdi1yZXR1cm4gLnBsYWNlcG9pbnQtcmV0dXJuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xuICB0b3A6IDZweDtcbiAgbGVmdDogNDRweDtcbn1cbi5kaXYtZmx5Ym9va2luZyAudGV4dC10aGluIHtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuLnRleHQtYmtnLWhpc3Rvcnkge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5kaXYtd2lkdGgtMjUwIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4udGV4dC1mbGlnaHQtZGF0ZXRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4udGV4dC1mbGlnaHQtdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZGl2LWZsaWdodC1pbm91dCB7XG4gIHBhZGRpbmc6IDBweCAxOHB4O1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGl2LWZsaWdodC1pbm91dCAuaW1nLWZsaWdodC1pbm91dCB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAtMnB4O1xufVxuLmRpdi1mbGlnaHQtaW5vdXQgLmltZy1vbmV3YXkge1xuICB3aWR0aDogMTJweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICB0b3A6IC01cHg7XG59XG5cbi5kaXYtcGF4IHtcbiAgcGFkZGluZzogMHB4IDhweDtcbn1cbi5kaXYtcGF4IC5kaXYtc3BsaXQge1xuICBtYXJnaW46IDExcHggMHB4IDE2cHggMHB4O1xufVxuLmRpdi1wYXggLnBheC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5kaXYtcGF4IC5tLXRvcC0yNyB7XG4gIG1hcmdpbi10b3A6IDI3cHg7XG59XG4uZGl2LXBheCAubS10b3AtOCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbi5kaXYtcGF4IC5kaXYtcGF4LWx1ZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kaXYtcGF4IC5kaXYtcGF4LWx1ZyAucGF4LXR5cGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbi5kaXYtcGF4IC5kaXYtcGF4LWx1ZyAudGV4dC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cbi5kaXYtcGF4IC5kaXYtbHVnZ2VzdCB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi5kaXYtc2VjdGlvbi1wYXgge1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG4uZGl2LXNlY3Rpb24tcGF4IC5kaXYtdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmRpdi1zZWN0aW9uLXBheCAudGV4dC1wYXgge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmRpdi1zZWN0aW9uLXBheCAudGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG46Om5nLWRlZXAgaW9uLWZvb3RlciB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5kaXYtcGF5bWVudGJhbmsgLmRpdi10ZXh0LXBheW1lbnQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmRpdi1wYXltZW50YmFuayAuZGl2LXRleHQtcGF5bWVudCAuZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kaXYtcGF5bWVudGJhbmsgLmRpdi10ZXh0LXBheW1lbnQgLmQtZmxleCAuZC1pbWcge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5kaXYtcGF5bWVudGJhbmsgLmRpdi10ZXh0LXBheW1lbnQgLmQtZmxleCAuY2xzLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41NnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XG59XG4uZGl2LXBheW1lbnRiYW5rIC5kaXYtdGV4dC1wYXltZW50IC50ZXh0LWNvcHkge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbi5kaXYtcGF5bWVudGJhbmsgLmRpdi10ZXh0LXBheW1lbnQgLnRleHQtYm9va2luZyB7XG4gIGNvbG9yOiAjZTUyODIyO1xufVxuLmRpdi1wYXltZW50YmFuayAuZGl2LXRleHQtcGF5bWVudCBwIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMGVtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAwZW07XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cbi5kaXYtcGF5bWVudGJhbmsgLmRpdi10ZXh0LXBheW1lbnQgLnRleHQtd2FybmluZy1wYXltZW50IHtcbiAgaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW46IDI0cHggMCAwO1xuICBwYWRkaW5nOiA4cHggMzlweCA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU0LCAyMzcsIDE5OSwgMC40KTtcbn1cbi5kaXYtcGF5bWVudGJhbmsgLmRpdi10ZXh0LXBheW1lbnQgLnRleHQtcGF5bWVudC1iYW5rIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWVkYzc7XG59XG4uZGl2LXBheW1lbnRiYW5rIC5kaXYtdGV4dC1vdGhlcnBheW1lbnQge1xuICBtYXJnaW46IDE2cHggOHB4O1xufVxuLmRpdi1wYXltZW50YmFuayAuYnRuLXBheW1lbnRvdGhlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMTQ2LCA1MSwgMC4xKTtcbiAgY29sb3I6ICNmNTkyMzM7XG4gIHBhZGRpbmc6IDExcHggMCAxMHB4IDA7XG59XG4uZGl2LXBheW1lbnRiYW5rIC5tLWxyLTgge1xuICBtYXJnaW46IDAgOHB4O1xufVxuXG4uZC1mbGV4LWxhdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogI2ZlZWRjNztcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuLmQtaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2xzLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41NnB4O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4uY2xzLXRleHRvcGVuIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjU2cHg7XG59XG5cbi5tdDYge1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5tdDE2IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLnRleHQtcGF5bWVudC1pbmZvIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6ICNmZWVkYzc7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuXG4uZGl2LXRleHQtcGF5bWVudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi50ZXh0LWNvcHkge1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cblxuLnRleHQtYm9sZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xufVxuXG4udGV4dC1vdGhlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5kaXYtYnRuLXBheW1lbnQge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4uYnRuLXBheW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlZGM3O1xuICBjb2xvcjogI2Y1OTIzMztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtcGF5bWVudC1jb21iby1mbGlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi1wYXltZW50LWNvbWJvLWZsaWdodCAuZGl2LXBheW1lbnQtbGVmdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmRpdi1wYXltZW50LWNvbWJvLWZsaWdodCAuZGl2LXByaWNlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmRpdi1wYXltZW50LWNvbWJvLWZsaWdodCAuZGl2LXRleHQtZmVlIHtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbi50ZXh0LW5hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4udGV4dC1uYW1lIC50ZXh0LWdyZWVuIHtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG5cbi50ZXh0LWZlZSB7XG4gIG1hcmdpbjogMnB4IDBweCA1cHggMHB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRleHQtbm90ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG59XG5cbi50ZXh0LWRhdGUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi50b3RhbC1wcmljZSB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi50ZXh0LXJlZCB7XG4gIGNvbG9yOiAjZTUyODIyO1xufSIsIlxuLmZsaWdodC1teXRyaXAtaGVhZGVyXG57XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIC50ZXh0LXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICB9XG4gICAgLmJ0bi1oZWFkZXJ7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICB9XG5cbiAgICAuc3AtY291bnR0ZXh0e1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxOCU7XG4gICAgfVxuXG4gICAgLnNwLWNvdW50dGV4dC1oaXN7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDI1JTtcbiAgICB9XG5cbn1cbi5kLWZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5tLXRvcC02NHtcbiAgICBtYXJnaW4tdG9wOiA2NHB4ICFpbXBvcnRhbnQ7XG59XG4ubS10b3AtMjR7XG4gICAgbWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xufVxuLm0tOHtcbiAgICBtYXJnaW46IDhweDtcbn1cbi50ZXh0LXBheHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICB9XG4gIC50ZXh0LXRvdGFsLXByaWNle1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICAgICAgY29sb3I6ICMyNmJlZDY7XG4gIH1cbiAgLmRpdi13aWR0aC0xMDB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZGl2LXdpZHRoLTIwMHtcbiAgICB3aWR0aDogMjAwJTtcbn1cbiAgLnRleHQtcmlnaHR7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICAudGV4dC1zdWJ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgY29sb3I6ICM4MjgyODI7XG4gIH1cbiAgLnYtYWxpZ24tY2VudGVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbi5kaXYtZmxpZ2h0LW15dHJpcC1jb250ZW50LC5jYXJkLWJhY2tncm91bmQtcGFnZS1oaXN0b3J5LXRyaXBze1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiBjYWxjKCBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkgKyA5NHB4KSAwcHg7XG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuXG4gICAgLmRpdi1mbGlnaHQtbXl0cmlwe1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAuZGl2LWRlbGl2ZXJ5X3BheW1lbnR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NCwyMzcsMTk5LCAwLjQpO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCA4cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICB9XG4gICAgLmRpdi1teXRyaXB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgIH1cblxuICAgIC5jb2wtZmxpZ2h0LW15dHJpcHtcbiAgICAgICAgcGFkZGluZzogNXB4IDAgNXB4IDhweDtcbiAgICB9XG5cbiAgICAuZGl2LWltZy1sb2dve1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIC5pbWctbG9nb3tcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28tdm5he1xuICAgICAgICAgICAgaGVpZ2h0OiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGV4dC10aGlue1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDAgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgfVxuXG4gICAgLnRleHQtaG9sZC10aWNrZXR7XG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC5yb3ctYmtnLWlke1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAvL3BhZGRpbmc6IDExcHggMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDI0MiwgMjQyLCAwLjUpO1xuICAgIH1cbiAgICAuZGl2LXRpY2tldHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgLnQtcmlnaHR7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbn1cblxuLmRpdi1lbXB0eS10cmlwe1xuICAgIG1hcmdpbi10b3A6IDEyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kaXYtd2lkdGgtMTAwe1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZGl2LXNwbGl0LXBhbmVse1xuICAgIGhlaWdodDogNnB4O1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgbWFyZ2luOiAxNnB4IC0xNnB4O1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG59XG4gICAgXG4uc2VnbWVudC1idXR0b24uYWN0aXZhdGVkLCAuc2VnbWVudC1idXR0b24uc2VnbWVudC1hY3RpdmF0ZWQsLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgIGJvcmRlci1jb2xvcjogIzI2YmVkNiAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgY29sb3I6ICMyNmJlZDYgIWltcG9ydGFudDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG4uY2xzLXN0cmlrZXtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbi5zZWdtZW50LWJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZS1teXRyaXBze1xuICAgIC5pdGVtLXJvb217XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWluLWhlaWdodDogMTA0cHg7XG4gICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgfVxuICAgIC5kaXYtc3BsaXQtY29sb3J7XG4gICAgICAgIGhlaWdodDogN3B4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgIH1cbiAgICAuZGl2LXdyYXBpbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDoxMDRweDtcbiAgICAgICAgd2lkdGg6IDEwNHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIC5pbWctYXZhdGFyIHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgbWluLWhlaWdodDogMTA0cHg7XG4gICAgICAgIC8vbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgLy9tYXgtaGVpZ2h0OiAyMDBweDtcbiAgICB9XG4gICAgLmNvbC1teXRyaXAtdGV4dC1kZXNjcmlwdGlvbntcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMTJweDtcbiAgICB9XG4gICAgLmRpdi1jaW4tY291dHtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAuZGl2LWNpbntcbiAgICAgICAgICAgIHdpZHRoOiAzNCU7XG4gICAgICAgIH1cbiAgICAgICAgLmRpdi1jb3V0e1xuICAgICAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgIH0gXG4gICAgICAgIC5kaXYtZHVyYXRpb257XG4gICAgICAgICAgICB3aWR0aDogMjIlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmRpdi1sYWJlbC1kYXRle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6ICM0ZjRmNGY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRpdi1kYXRlIHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNjZGNkY2Q7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICAgICAgfVxuICAgICAgICAuZGl2LWRhdGUtY291dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICAgICAgfVxuICAgICAgICAubm8tYm9yZGVye1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5kLWZsZXh7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG5cbiAgICAgICAgLmRpdi1sZWZ0e1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2LWNlbnRlcntcbiAgICAgICAgICAgIHdpZHRoOiAzMzhweDtcbiAgICAgICAgfVxuICAgICAgICAuZGl2LXJpZ2h0e1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm0tdG9wLTN7XG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICB9XG4gICAgLm0tdG9wLTE0e1xuICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgIH1cbiAgICAubS10b3AtOHtcbiAgICAgICAgbWFyZ2luLXRvcDo4cHg7XG4gICAgfVxuICAgIC5jb2wtbm9wZC10b3B7XG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgfVxuICAgIC5pbWctY2FsbGNlbnRlcntcbiAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgIGhlaWdodDogMTJweDtcbiAgICB9XG4gICAgLnNlY29uZC1jb250ZW50e1xuICAgICAgICBwYWRkaW5nOiA5cHggMTFweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICAgIC5wLWxyLTV7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgIH1cblxuICAgIC5kaXYtZmxpZ2h0LWxhYmVse1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiM0ZjRmNGY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgIH1cbiAgICAudGV4dC10aWNrZXR7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6MTRweFxuICAgIH1cblxufVxuXG4ubS1sZi0we1xuICAgIG1hcmdpbjogOHB4IDAgIWltcG9ydGFudDtcbn1cbi5kaXYtcmVxdWVzdC1wYXltZW50e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogIzAwM2M3MTtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuXG4gICAgLmxibC1yZXF1ZXN0LXBheW1lbnR7XG4gICAgICAgIHRvcDogN3B4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxufVxuLm0tdG9wLTI3e1xuICAgIG1hcmdpbi10b3A6IDI3cHg7XG59XG5cbi5maXJzdC1jb250ZW50e1xuICAgIG1hcmdpbjogMCA4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgLy8gcGFkZGluZy1ib3R0b206IDE2cHg7XG5cbiAgICAuY29sLWJvb2tpbmdpZHtcbiAgICAgICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB9XG4gICAgLnAtci0we1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIH1cbiAgICAuY29sLWJrZy1zdGF0dXN7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiMyNmJlZDY7XG4gICAgICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDBweDtcbiAgICB9XG4gICAgLmZseS1ia2ctY29kZXtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyNmJlZDY7XG4gICAgfVxuICAgIC5mLWJvbGR7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxufVxuXG4uZmlyc3QtY29udGVudC1oaXN0b3J5e1xuICAgIG1hcmdpbjogMCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmRpdi1wYXltZW50e1xuICAgIHBhZGRpbmc6IDE2cHggMTZweCAyNHB4IDE2cHg7XG4gICAgLmRpdi1zcGxpdC1wYXltZW50e1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2RlZGVkZTtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICBtYXJnaW46IDExcHggMCAxNnB4IDA7XG4gICAgfVxuICAgIC5kaXYtcGF5bWVudC1jb21iby1mbGlnaHR7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgLmRpdi1wYXltZW50LWxlZnR7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAuZGl2LXByaWNle1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAuZGl2LXRleHQtZmVle1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnRleHQtcG9saWN5e1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gICAgLnRleHQtbmFtZVxuICAgICAgICB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MTJweDtcbiAgICAgICAgICAgIC50ZXh0LWdyZWVuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyNmJlZDZcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudGV4dC1mZWV7XG4gICAgICAgICAgICBtYXJnaW46IDJweCAwcHggNXB4IDBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtbm90ZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgICAgICAgICAgY29sb3I6IzgyODI4MjtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWRhdGVcbiAgICAgICAge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHhcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnRvdGFsLXByaWNle1xuICAgICAgICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgfVxuICAgICAgICAuZGl2LWJ0bi1wYXltZW50e1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgfVxuICAgICAgICAuYnRuLXBheW1lbnRcbiAgICAgICAge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIC5kaXYtcGVuYWx0eSwgLmRpdi1ydWxlc3tcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtaW4taGVpZ2h0OiAyMnB4O1xuXG4gICAgICAgIC5kaXYtbGFiZWwtbGVmdHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgfVxuICAgICAgICAuZGl2LWFycm93LXJpZ2h0e1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuXG4gICAgICAgICAgICAuY2xzLWljb24tYXJyb3d7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogLTVweDtcbiAgICAgICAgICAgICAgICB0b3A6IC0ycHg7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmhlYWRlci10aXRsZXtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAuZGl2LXJlZnJlc2h7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgIHRvcDogOHB4O1xuXG4gICAgICAgIC5pbWctcmVmcmVzaHtcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLmhlYWRlci1hcnJvd3tcbiAgICBtYXJnaW46IDNweCAxMXB4O1xufVxuLmxhYmVsLWJhZGdle1xuICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDo0MDA7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICB9XG4gIC5hbGlnbi1jZW50ZXJ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbi5iYWRnZXNjc3Mge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBtYXJnaW4tbGVmdDogODQlO1xuICAgIG1hcmdpbi10b3A6IC0xMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG59XG4uYmFkZ2UtbWQge1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xufVxuLnJvb20tY2xhc3MtbmFtZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuLmJrZy1pZHtcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmgye1xuICAgIG1hcmdpbjogMDtcbn1cbi5jbHMtYXZnLXBvaW50e1xuICAgIG1hcmdpbjogOHB4IDBweDtcbn1cbi5zdXBwb3J0LXRleHR7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uZGl2LXNwbGl0e1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZGVkZWRlO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBtYXJnaW46IDExcHggNXB4IDE2cHggNXB4O1xufVxuLmNvbC1pY29ue1xuICAgIHBhZGRpbmc6IDNweCAwcHg7XG59XG4uY29sLXRleHR7XG4gICAgcGFkZGluZzogMnB4IDBweDtcbn1cbi5jb2wtYWRkcmVzc3tcbiAgICBwYWRkaW5nOiAwO1xufVxuLmhpZGRlbi10ZXh0e1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmRpdi1kYXRlLWNvdXQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzIyMjIyMjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgcGFkZGluZy10b3A6IDA7XG59XG4uaWNvbi1hcnJvdy1yaWdodHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4uY29sLW5vcm1hbHRleHQtbm9wZC10b3B7XG4gICAgcGFkZGluZzogMCA1cHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogMjAwO1xufVxuLnJvb20tbmFtZXtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5idG4tbmV4dFxue1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNmNzkyMjE7XG4gICAgY29sb3I6ICNmNzkyMjE7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIG1hcmdpbjogOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XG59XG5cbi5pbWctdHJpcC1lbXB0eXtcbiAgICBoZWlnaHQ6IDMyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbWctZW1wdHl7XG4gICAgcGFkZGluZy10b3A6IDIwJTtcbn1cbi50ZXh0LXRyaXAtZW1wdHl7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICBjb2xvcjogI2JkYmRiZDtcbn1cbi5idXR0b24tdHJpcC1lbXB0eXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnRuLXRyaXAtZW1wdHl7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjc5MjIxO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQ6ICNmNzkyMjE7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDQ4cHg7XG5cbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIG1hcmdpbi10b3A6MTZweDtcbn1cbi5oaXN0b3J5LXRyaXB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMTFweDtcbn1cblxuLy8vLy8vLy8vLy8vLy9jb21ib1xuLmxhYmVsLWNvbWJvbmFtZXtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLmxhYmVsLWZsaWdodC1zdGFydCwgLmxhYmVsLWZsaWdodC1yZXR1cm57XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiM0ZjRmNGY7XG59XG4uZmxpZ2h0LXN0YXJ0LWNvZGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jb2wtbm9wYWRkaW5nLWxlZnR7XG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggMHB4O1xufVxuLmNvbWJvLWluZm97XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgIGNvbG9yOiAjNGY0ZjRmO1xufVxuLmNvbWJvLWRlcGFydHVyZS1kYXRle1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uZmxpZ2h0LWZyb20sLmZsaWdodC1udW1uZXJ7XG4gICAgY29sb3I6ICM0ZjRmNGY7XG59XG4uaW1nLWx1Z2dhZ2V7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4vL1N0eWxlIHRyaXBoaXN0b3J5XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtaGlzdG9yeS10cmlwcyB7XG4gICAgcGFkZGluZzogY2FsYyggZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pICsgNTRweCkgMHB4O1xuICAgIC50ZXh0LWxlZnR7XG4gICAgICAgIGZvbnQtc2l6ZToxM3B4O1xuICAgIH1cbiAgICAubGFiZWwtcmV2aWV3c3tcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbi5kaXYtd3JhcGltZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDoxMThweDtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5pbWcge1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4uaGVhZGVyLXRpdGxle1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNSU7XG59XG4uaGVhZGVyLWFycm93e1xuICAgIG1hcmdpbjogM3B4IDExcHg7XG59XG4ubGFiZWwtYmFkZ2V7XG4gICAgY29sb3I6ICMyMjIyMjI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xufVxuLmJhZGdlc2NzcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIG1hcmdpbi1sZWZ0OiA4NCU7XG4gICAgbWFyZ2luLXRvcDogLTEwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmJhZGdlLW1kIHtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNjtcbn1cbi5yb29tLWNsYXNzLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzAwM2M3MTtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuXG5oMntcbiAgICBtYXJnaW46IDA7XG59XG4uY2xzLWF2Zy1wb2ludHtcbiAgICBtYXJnaW46IDhweCAwcHg7XG59XG4uc3VwcG9ydC10ZXh0e1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmRpdi1zcGxpdHtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2RlZGVkZTtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgbWFyZ2luOiAxMXB4IDVweCAxMXB4IDVweDtcbn1cblxufVxuXG4uZGl2LXNwbGl0LWhpc3Rvcnl7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkZWRlZGU7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIG1hcmdpbjogMTZweCAwO1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtcmVxdWVzdC10cmlwc3tcbiAgICBwYWRkaW5nOiAxMXB4O1xufVxuLmhlYWRlci1tZDo6YWZ0ZXJ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xufVxuLmhlYWRlci1pb3M6OmFmdGVye1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5kaXYtcmVxdWVzdC1idXR0b257XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNThweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIChtaW4taGVpZ2h0OjgxMnB4KSBhbmQgKG1heC1oZWlnaHQ6ODk2cHgpe1xuICAgIC5kaXYtcmVxdWVzdC1idXR0b257XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiA4OHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuZGl2LWVtcHR5LXRyaXB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1NHB4O1xuICAgIH1cbn1cblxuLmNvbC1pbWctaGlzdG9yeXRyaXB7XG4gICAgcGFkZGluZzogNXB4IDA7XG59XG4uZGl2LW15cmVxdWVzdHRyaXB7XG4gICAgcGFkZGluZzoxMXB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDozMDBweCkgYW5kIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gICAgLmNvbC1teXRyaXAtdGV4dC1kZXNjcmlwdGlvbiwuY29sLWhpc3Rvcnl0cmlwLXRleHQtZGVzY3JpcHRpb24sLmNvbC1yZXF1ZXN0cmlwLXRleHQtZGVzY3JpcHRpb257XG4gICAgICBsZWZ0OiAxMnB4O1xuICAgIH1cbiAgICAuYnRuLW5leHR7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG4gICAgfVxuICAgIC5jb2wtdGV4dC1yaWdodHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgICBcbiAgfVxuICA6aG9zdHtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiMyNmJlZDY7XG59XG5pb24tbGlzdHtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5cbi8vL3N0eWxlIGlvc1xuOjpuZy1kZWVwe1xuICAgIC5zYy1pb24tc2VnbWVudC1pb3MtaGlvbi10b29sYmFyOm5vdCguaW9uLWNvbG9yKS5zYy1pb24tc2VnbWVudC1pb3MtcyA+IC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkLCBpb24tdG9vbGJhciAuc2MtaW9uLXNlZ21lbnQtaW9zLWg6bm90KC5pb24tY29sb3IpLnNjLWlvbi1zZWdtZW50LWlvcy1zID4gLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5zYy1pb24tc2VnbWVudC1pb3MtaGlvbi10b29sYmFyOm5vdCguaW9uLWNvbG9yKS5zYy1pb24tc2VnbWVudC1pb3MtcyA+IGlvbi1zZWdtZW50LWJ1dHRvbiwgaW9uLXRvb2xiYXIgLnNjLWlvbi1zZWdtZW50LWlvcy1oOm5vdCguaW9uLWNvbG9yKS5zYy1pb24tc2VnbWVudC1pb3MtcyA+IGlvbi1zZWdtZW50LWJ1dHRvbntcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5saXN0LWlvc3tcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIC8vc3R5bGUgbm90aWZ5XG4gICAgLmFjdGlvbi1zaGVldHMtbm90aWZpY2F0aW9uIC5hY3Rpb24tc2hlZXQtY29udGFpbmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKjIgLSAxNHB4ICk7XG4gICAgICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogOHB4O1xuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogOHB4O1xuICAgICAgICAtd2Via2l0LXBhZGRpbmctZW5kOiA4cHg7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogOHB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdW5zZXQ7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgICAgLmFjdGlvbi1zaGVldHMtbm90aWZpY2F0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xuICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgICAgLmljX2J1czIgLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczo6YmVmb3Jle1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgY29udGVudDogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9pY19idXMyLnN2ZycpO1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDhweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTNweCA7XG4gICAgICB9XG4gICAgICAuaWNfaG9tZSAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOjpiZWZvcmV7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBjb250ZW50OiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2ljX2hvbWUuc3ZnJyk7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxM3B4IDtcbiAgICAgICAgLy90b3A6MTNweDtcbiAgICAgIH1cbiAgICAgIC5pY19wYXBlciAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOjpiZWZvcmV7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBjb250ZW50OiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2ljX3BhcGVyLnN2ZycpO1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDhweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTNweCA7XG4gICAgICB9XG4gICAgICAuaWNfbWVzc2FnZSAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOjpiZWZvcmV7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBjb250ZW50OiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2ljX21lc3NhZ2Uuc3ZnJyk7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxM3B4IDtcbiAgICAgIH1cbiAgICAgIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDhweCAwcHggIzgyODI4MjtcbiAgICAgICBib3JkZXItcmFkaXVzOjEwcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICBcbiAgICAgIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQ0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxM3B4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICAtd2Via2l0LXBhZGRpbmctZW5kOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWluLWhlaWdodDo2MHB4O1xuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZmY7XG4gICAgICAgIC0tYmFja2dyb3VuZC1zZWxlY3RlZDojZmZmO1xuICAgICAgICBib3JkZXItYm90dG9tOm5vbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICBcbiAgICAgIC5maXhoZWlnaHQtNDQgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0NHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMTBweDtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1pbi1oZWlnaHQ6NDRweCAhaW1wb3J0YW50O1xuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZmY7XG4gICAgICAtLWJhY2tncm91bmQtc2VsZWN0ZWQ6I2ZmZjtcbiAgICAgIGJvcmRlci1ib3R0b206bm9uZTtcbiAgICAgIH1cbiAgICBcbiAgICAgIC5maXhoZWlnaHQtODAgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0NHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMTBweDtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1pbi1oZWlnaHQ6ODBweCAhaW1wb3J0YW50O1xuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZmY7XG4gICAgICAtLWJhY2tncm91bmQtc2VsZWN0ZWQ6I2ZmZjtcbiAgICAgIGJvcmRlci1ib3R0b206bm9uZTtcbiAgICAgIH1cbiAgICBcbiAgICAgIC5maXhoZWlnaHQtOTAgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0NHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMTBweDtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1pbi1oZWlnaHQ6OTBweCAhaW1wb3J0YW50O1xuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZmY7XG4gICAgICAgIC0tYmFja2dyb3VuZC1zZWxlY3RlZDojZmZmO1xuICAgICAgICBib3JkZXItYm90dG9tOm5vbmU7XG4gICAgICB9XG4gICAgICAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgIH1cbiAgICBcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAyNTBweCkgYW5kIChtYXgtd2lkdGg6IDMyOXB4KSB7XG4gICAgICAgIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcbiAgICAgICAgICBtaW4taGVpZ2h0OjcycHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLmZpeGhlaWdodC00NCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcbiAgICAgICAgICBtaW4taGVpZ2h0OjQ0cHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLmZpeGhlaWdodC04MCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcbiAgICAgICAgICBtaW4taGVpZ2h0OjgwcHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLmZpeGhlaWdodC05MCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcbiAgICAgICAgICBtaW4taGVpZ2h0OjEwMnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDozMDBweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XG4gICAgLmNvbC1teXRyaXAtdGV4dC1kZXNjcmlwdGlvbiwuY29sLWhpc3Rvcnl0cmlwLXRleHQtZGVzY3JpcHRpb24sLmNvbC1yZXF1ZXN0cmlwLXRleHQtZGVzY3JpcHRpb257XG4gICAgICBsZWZ0OiAxMnB4O1xuICAgIH1cbiAgICAuYnRuLW5leHR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAsNXB4O1xuICAgIH1cbiAgICAuY29sLXRleHQtcmlnaHR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gICAgXG4gIH1cbiAgOmhvc3R7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeTojMjZiZWQ2O1xufVxuaW9uLWxpc3R7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLy8vc3R5bGUgaW9zXG46Om5nLWRlZXB7XG5cbiAgICAuaW9zLnNlZ21lbnQtYnV0dG9uLWxheW91dC1pY29uLXRvcC5pb24tYWN0aXZhdGFibGUuaW9uLWFjdGl2YXRhYmxlLWluc3RhbnQuaHlkcmF0ZWQuc2VnbWVudC1idXR0b24tY2hlY2tlZHtcbiAgICAgICBcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQgLnNwLWNvdW50dGV4dHtcbiAgICAgICAgcmlnaHQ6IDEwJSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuc2VnbWVudC1idXR0b24tY2hlY2tlZCAuc3AtY291bnR0ZXh0LWhpc3tcbiAgICAgICAgcmlnaHQ6IDIwJSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICAubGlzdC1pb3N7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLnNjLWlvbi1zZWdtZW50LWlvcy1oe1xuICAgICAgICBtYXJnaW46IDAgMTZweDtcbiAgICB9XG4gICAgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIHtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3N7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgLnRyaXAtZW1wdHkgcHtcbiAgICAgICAgbWFyZ2luOiA0cHggMDtcbiAgICB9XG5cbiAgICAuYWN0aW9uLXNoZWV0cy1pbnN1cnJhbmNlIC5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1tZHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAvL3N0eWxlIGNobyBpb3NcbiAgICAuYWN0aW9uLXNoZWV0cy1pbnN1cnJhbmNlIC5hY3Rpb24tc2hlZXQtY29udGFpbmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICAuYWN0aW9uLXNoZWV0cy1pbnN1cnJhbmNlIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6bGFzdC1jaGlsZHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cbiAgICAuYWN0aW9uLXNoZWV0cy1pbnN1cnJhbmNlIC5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuYWN0aW9uLXNoZWV0cy1pbnN1cnJhbmNlIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgfVxuICAgIC5hY3Rpb24tc2hlZXRzLWluc3VycmFuY2UgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG5cbiAgICAuYWN0aW9uLXNoZWV0cy1pbnN1cnJhbmNlIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjY2NjO1xuICAgIH1cbiAgICAuYWN0aW9uLXNoZWV0cy1pbnN1cnJhbmNlIC5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1tZHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmhhcy1jbGFpbWVkIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xuICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQxNHB4KSBhbmQgKG1heC13aWR0aDo0MTRweCl7XG4gICAgICAgIC5kaXYtY2VudGVye1xuICAgICAgICAgICAgd2lkdGg6IDM3N3B4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZGl2LWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogY2FsYyggZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pICsgMTIwcHgpO1xufVxuXG5pb24tY29udGVudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG4vLyBTdHlsZSB0cmlwIHN1Z2dlc3Rcbi50cmlwLWVtcHR5e1xuICAgIHBhZGRpbmc6IDEzcHggMTZweCAxNnB4IDE2cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLnRyaXAtc3VnZ2VzdC1jb250ZW50e1xuICAgIGJvcmRlci1yYWRpdXM6NnB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDFweCAjZGVkZWRlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbWd7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwIDA7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMXB4ICNkZWRlZGU7XG59XG4uZmxvYXQtaW5mb3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA4cHg7XG4gICAgbGVmdDogOHB4O1xuICAgIHotaW5kZXg6IDExO1xuICB9XG5cbi5mbG9hdC1wcm9tb3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA4M3B4O1xuICAgIGxlZnQ6IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1MjgyMjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgd2lkdGg6IDg4JTtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgcGFkZGluZzogM3B4IDhweCAwcHggMTJweDtcbiAgICB6LWluZGV4OiA5OTtcbiAgfVxuXG4gIC5mbG9hdC1wcm9tby1kZXNjcmlwdGlvbntcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgLmhvdGVsLW5hbWVcbiAgICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB3aWR0aDogMzEwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICB9XG5cbiAgICAuZmxvYXQtcHJvbW86YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICB0b3A6IDIycHg7XG4gICAgICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjODUxZjFjO1xuICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgfVxuXG4gICAgLmdyYWQxIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogODBweDsgLyogRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzICovXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4zKSk7IC8qIFN0YW5kYXJkIHN5bnRheCAobXVzdCBiZSBsYXN0KSAqL1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgYm90dG9tOjVweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICBvcGFjaXR5OiAwLjI1O1xuICAgICAgfVxuICAgICAgLnRleHQtZW1wdHktdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOjEzcHg7XG4gICAgICB9XG5cbiAgICAgIC5jb21iby1jb250ZW50e1xuICAgICAgICBwYWRkaW5nOiAxMXB4IDEwcHggMTNweCA4cHg7XG4gICAgICB9XG5cbiAgICAgIC5jb21iby10ZXh0e1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgfVxuXG4gICAgICAuYnRuLWNvbWJvLXN1Z2dlc3R7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2Y3OTIyMTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNzkyMjE7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgbWFyZ2luOiAwIDEwcHggMCA4cHg7XG4gICAgICB9XG4gICAgICAuZGl2LWJ1dHRvbi1jb21iby1zdWdnZXN0e1xuICAgICAgICBib3R0b206IDhweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgLmRpdi1idXR0b24tY29tYm8tb3RoZXJ7XG4gICAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICAgIGZvbnQtc2l6ZToxN3B4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi1oZWlnaHQ6NDU4cHgpIGFuZCAobWF4LWhlaWdodDogNjY2cHgpIHtcbiAgICAgICAgLnRleHQtZW1wdHktdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgICAgICAgfVxuICAgICAgICAuY29tYm8tdGV4dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgfVxuICAgICAgICAuYnRuLWNvbWJvLXN1Z2dlc3Qge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjc5MjIxO1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjc5MjIxO1xuICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggMCA4cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5kaXYtYnV0dG9uLWNvbWJvLXN1Z2dlc3R7XG4gICAgICAgICAgICBib3R0b206MTBweDtcbiAgICAgICAgfVxuICAgICAgICAudHJpcC1lbXB0eSB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA1NzBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDUwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgQG1lZGlhIChtaW4taGVpZ2h0OjY2N3B4KSBhbmQgKG1heC1oZWlnaHQ6IDczNnB4KSB7XG4gICAgICAgIC50cmlwLWVtcHR5IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEzcHggMTZweCAxNnB4IDE2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA1NzBweDtcbiAgICAgICAgfVxuICAgICAgICAuZGl2LWJ1dHRvbi1jb21iby1zdWdnZXN0e1xuICAgICAgICAgICAgYm90dG9tOjEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4taGVpZ2h0OjczN3B4KSBhbmQgKG1heC1oZWlnaHQ6IDgxMnB4KSB7XG4gICAgICAgIC50cmlwLWVtcHR5IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEzcHggMTZweCAxNnB4IDE2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA1NzZweDtcbiAgICAgICAgfVxuICAgICAgfVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuLy8vL0ZpeCBs4buXaSBtw6BuIGJhY2tncm91bmQgYuG7iyDEkWVuIHRyw6puIGlvcyAxMVxuW25hdi12aWV3LXRyYW5zaXRpb2494oCcaW9z4oCdXVtuYXYtdmlldy1kaXJlY3Rpb2494oCcZm9yd2FyZOKAnV0sXG5bbmF2LXZpZXctdHJhbnNpdGlvbj3igJxpb3PigJ1dW25hdi12aWV3LWRpcmVjdGlvbj3igJxiYWNr4oCdXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbiRjb250ZW50LWlvcy10cmFuc2l0aW9uLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi5kaXYtaW5zdXJhbmNle1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIFxuICAgIC5sYmwtaGFkY2xhaW1lZHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICB9XG4gICAgLmxvZ28taW5zdXJhbmNle1xuICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgIH1cbiAgICAuY2xzLWxhYmVsLXRleHR7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogIzRmNGY0ZjtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgICAgXG4gICAgfVxuICAgIC5wLWx0LTR7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgfVxuICAgIC5pdGVtLXRleHR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICB9XG4gICAgLmNscy1pbnN1cmFuY2Vub3tcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuY2xzLXJlcXVpcmUtdGV4dHtcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBwYWRkaW5nOiA4cHggOHB4IDAgOHB4O1xuICAgIH1cbiAgICAuY2xzLWhhZGNsYWltZWR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgfVxuICAgIC5kaXYtaXRlbS1pbnN1cmFuY2V7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICB9XG4gICAgLnAtdG9wLTh7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgfVxuICAgIC5pbWctaGFkY2xhaW1lZHtcbiAgICAgIG1hcmdpbjogLTZweCA0cHg7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICB9XG5cbiAgICAuaW5zdXJyYW5jZS1jb250YWN0e1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAuaW5zdXJyYW5jZS1jb250YWN0LW5hbWV7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5zdXJyYW5jZS1jb250YWN0LXBob25le1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMTE2cHg7XG4gICAgICAgICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgICAgfVxuICAgICAgICAuaW5zdXJyYW5jZS1jb250YWN0LWFycm93e1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogLTVweDtcbiAgICAgICAgICB0b3A6IC0zcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmluc3VycmFuY2Utc3VwcG9ydC1waG9uZSwgLmluc3VycmFuY2UtZGV0YWlsLWluZm97XG4gICAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LXN1cHBvcnQtY2VudGVye1xuICAgICAgICAgIGNvbG9yOiAjMjZiZWQ2OyBcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICAgICAgfVxuICAgICAgICAuaW1nLXN1cHBvcnR7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgICAgfVxuICAgICAgICAuaW1nLWNhbGx7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5wLWJvdHRvbS04e1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIH1cbiAgICAuZGl2LXNwbGl0LWluc3VycmFuY2V7XG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2RlZGVkZTtcbiAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIG1hcmdpbjogMTFweCAwO1xuICAgICAgfVxufVxuLy9zdHlsZSBwb3BvdmVyLWhpc3Rvcnlcbi5jbHMtY29sLXBvcG92ZXItaGlzdG9yeXtcbiAgaGVpZ2h0OiAyNHB4O1xuXG4gIC5tdXN0Q2xhaW17XG4gICAgICBjb2xvcjogI2U1MjgyMjtcbiAgfVxufVxuLnBvcG92ZXItaGlzdG9yeXtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDQ0cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBvcGFjaXR5OiAwLjU0O1xuICBsZXR0ZXItc3BhY2luZzogLTQuODRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogLTExcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5wLXRvcC0yM3tcbiAgICBwYWRkaW5nLXRvcDoyM3B4O1xufVxuLnRleHQtYWdle1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgY29sb3I6ICM4MjgyODI7XG59XG4udi1hbGlnbi1jZW50ZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmRpdi1mbHlib29raW5ne1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtaW4taGVpZ2h0OiAxMjBweDtcblxuICAgIC5tLXRvcC0yOHtcbiAgICAgICAgbWFyZ2luLXRvcDoyOHB4O1xuICAgIH1cbiAgICAucGFkZGluZy01e1xuICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICB9XG4gICAgLm0tdG9wLTh7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICB9XG4gICAgLm0tMTF7XG4gICAgICAgIG1hcmdpbjogMTFweCAwO1xuICAgIH1cbiAgICAuYi0xNntcbiAgICAgICAgYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5kaXYtYXJyaXZhbHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgICAgbWluLWhlaWdodDogMTIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC50ZXh0LXJpZ2h0e1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgfVxuICAgIC50ZXh0LWRlcGFydHVyZXtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBcbiAgICB9XG4gICAgLmxvZ297XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMjRweDtcbiAgICB9XG4gICAgLmRpdi1kZXBhcnR1cmUsIC5kaXYtcmV0dXJue1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgXG4gICAgICAgIC5kaXYtbGluZXtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDZweDtcbiAgICAgICAgICAgIHRvcDogNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5kaXYtdGltZS1kZXBhcnR1cmV7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgfVxuICAgICAgICAuZGl2LWluZm8tZGVwYXJ0dXJlLCAuZGl2LWluZm8tcmV0dXJue1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogNjBweDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICAucGxhY2VsaW5lXG4gICAgICAgIHsgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICAgIHRvcDogMTZweDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBkb3R0ZWQgMS41cHggI2JkYmRiZDtcbiAgICAgICAgICAgIGxlZnQ6IDQ3cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnBsYWNlcG9pbnR7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDQ2JTtcbiAgICAgICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gICAgICAgICAgICBsZWZ0OiA0NHB4O1xuICAgICAgICB9XG4gICAgICAgIC5wbGFjZXBvaW50LXJldHVybntcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gICAgICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgICAgIGxlZnQ6IDQ0cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgXG4gICAgLnRleHQtdGhpbntcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICB9XG59XG5cbi50ZXh0LWJrZy1oaXN0b3J5e1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS42NztcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICBjb2xvcjogIzgyODI4Mjtcbn1cbi5kaXYtd2lkdGgtMjUwe1xuICAgIHdpZHRoOiAyNTBweDtcbn1cbi50ZXh0LWZsaWdodC1kYXRldGltZXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH1cbiAgXG5cbi50ZXh0LWZsaWdodC10aXRsZXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH1cbiAgLmRpdi1mbGlnaHQtaW5vdXR7XG4gICAgcGFkZGluZzogMHB4IDE4cHg7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5pbWctZmxpZ2h0LWlub3V0e1xuICAgICAgd2lkdGg6IDMycHg7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAtMnB4O1xuICAgIH1cblxuICAgIC5pbWctb25ld2F5e1xuICAgICAgICB3aWR0aDogMTJweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICB0b3A6IC01cHg7XG4gICAgICB9XG4gIH1cbiAgXG5cbi5kaXYtcGF4e1xuICAgIHBhZGRpbmc6IDBweCA4cHg7XG5cbiAgICAuZGl2LXNwbGl0e1xuICAgICAgICBtYXJnaW46IDExcHggMHB4IDE2cHggMHB4O1xuICAgIH1cblxuICAgIC5wYXgtbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgLm0tdG9wLTI3e1xuICAgICAgICBtYXJnaW4tdG9wOjI3cHg7XG4gICAgfVxuICAgIC5tLXRvcC04e1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgfVxuICAgIC5kaXYtcGF4LWx1Z3tcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgXG4gICAgICAgIFxuICAgICAgICAucGF4LXR5cGV7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC50ZXh0LXJpZ2h0e1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIC5kaXYtbHVnZ2VzdHtcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICB9XG59XG5cbi8vLy8vXG4uZGl2LXNlY3Rpb24tcGF4e1xuICAgIHBhZGRpbmc6IDAgMTZweDtcblxuICAgIC5kaXYtdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgfVxuXG4gICAgLnRleHQtcGF4e1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cblxuICAgIC50ZXh0LXJpZ2h0e1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICB9XG59XG5cbjo6bmctZGVlcHtcbiAgICBpb24tZm9vdGVyIHtcbiAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxufVxuXG4uZGl2LXBheW1lbnRiYW5re1xuIFxuICAgIC5kaXYtdGV4dC1wYXltZW50e1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG5cbiAgICAuZC1mbGV4e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIC5kLWltZ3tcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY2xzLXRleHR7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjU2cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLnRleHQtY29weXtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgfVxuXG4gICAgLnRleHQtYm9va2luZ3tcbiAgICAgICAgY29sb3I6ICNlNTI4MjI7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBlbTtcbiAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xuICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG4gICAgICB9XG5cbiAgICAgIC50ZXh0LXdhcm5pbmctcGF5bWVudHtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBtYXJnaW46IDI0cHggMCAwO1xuICAgICAgICBwYWRkaW5nOiA4cHggMzlweCA3cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU0LDIzNywxOTksIDAuNCk7XG4gICAgICB9XG5cbiAgICAgIC50ZXh0LXBheW1lbnQtYmFua3tcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWVkYzc7XG4gICAgICB9XG5cbiAgICAgXG4gICAgXG4gICAgfVxuICAgXG4gICAgLmRpdi10ZXh0LW90aGVycGF5bWVudHtcbiAgICAgICAgbWFyZ2luOiAxNnB4IDhweDtcbiAgICB9XG5cbiAgICAuYnRuLXBheW1lbnRvdGhlcntcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwxNDYsNTEsIDAuMSk7XG4gICAgICBjb2xvcjogI2Y1OTIzMztcbiAgICAgIHBhZGRpbmc6IDExcHggMCAxMHB4IDA7XG4gICAgfSAgIFxuICAgIC5tLWxyLTh7XG4gICAgICAgIG1hcmdpbjogMCA4cHg7XG4gICAgfVxufVxuLmQtZmxleC1sYXRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6ICNmZWVkYzc7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbn1cbi5kLWltZ3tcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uY2xzLXRleHR7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC41NnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG4uY2xzLXRleHRvcGVuXG57XG4gICAgY29sb3I6ICMyNmJlZDY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC41NnB4O1xufVxuLm10Nlxue1xuICAgIG1hcmdpbi10b3A6IDZweDtcbn1cbi5tdDE2XG57XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi50ZXh0LXBheW1lbnQtaW5mb3tcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZDogI2ZlZWRjNztcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbi5kaXYtdGV4dC1wYXltZW50e1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG5cbn1cbi50ZXh0LWNvcHl7XG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG4udGV4dC1ib2xke1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XG59XG4udGV4dC1vdGhlcntcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG4uZGl2LWJ0bi1wYXltZW50e1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG59XG4uYnRuLXBheW1lbnRcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlZGM3O1xuICAgIGNvbG9yOiAjZjU5MjMzO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbn1cbi5kaXYtcGF5bWVudC1jb21iby1mbGlnaHR7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC5kaXYtcGF5bWVudC1sZWZ0e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmRpdi1wcmljZXtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuZGl2LXRleHQtZmVle1xuICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICB9XG59XG4udGV4dC1uYW1lXG57XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcbiAgICBtYXJnaW4tYm90dG9tOjA7XG4gICAgbWFyZ2luLXRvcDoxMnB4O1xuICAgIC50ZXh0LWdyZWVuXG4gICAge1xuICAgICAgICBjb2xvcjogIzI2YmVkNlxuICAgIH1cbn1cbi50ZXh0LWZlZXtcbiAgICBtYXJnaW46IDJweCAwcHggNXB4IDBweDtcbiAgICBjb2xvcjogIzgyODI4MjtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4udGV4dC1ub3Rle1xuICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgIGNvbG9yOiM4MjgyODI7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xufVxuLnRleHQtZGF0ZVxue1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHhcbn1cblxuLnRvdGFsLXByaWNle1xuICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4udGV4dC1yZWR7XG4gICAgY29sb3I6ICNlNTI4MjJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/flightmytrip/flightmytrip.page.ts":
/*!***************************************************!*\
  !*** ./src/app/flightmytrip/flightmytrip.page.ts ***!
  \***************************************************/
/*! exports provided: FlightmytripPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightmytripPage", function() { return FlightmytripPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");












let FlightmytripPage = class FlightmytripPage {
    constructor(navCtrl, gf, _flightService, modalCtrl, toastCtrl, zone, storage, valueGlobal, clipboard, activityService) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this._flightService = _flightService;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.zone = zone;
        this.storage = storage;
        this.valueGlobal = valueGlobal;
        this.clipboard = clipboard;
        this.activityService = activityService;
        this.tabflight = 1;
        this.hasloaddata = false;
        this.nextflightcounttext = '';
        this.historyflightcounttext = '';
        this.listAirport = [];
        jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-slide").removeClass("cls-visible").addClass("cls-disabled");
        this.storage.get('listmytrips').then(data => {
            if (data) {
                this.loadMytrip(data);
            }
            else {
                this.getdata(null);
            }
        });
        if (this._flightService.listAirport) {
            this.listAirport = this._flightService.listAirport;
        }
        else {
            this.storage.get("listAirport").then((data) => {
                if (!data) {
                    this.loadLocation();
                }
                else {
                    this.listAirport = data;
                    this._flightService.listAirport = data;
                }
            });
        }
    }
    ngOnInit() {
        this._flightService.itemMenuFlightClick.pipe().subscribe(data => {
            if (data == 2) {
                this.zone.run(() => {
                    this.storage.get('listmytrips').then(data => {
                        if (data) {
                            this.loadMytrip(data);
                        }
                        else {
                            this.getdata(null);
                        }
                    });
                });
            }
        });
    }
    loadLocation() {
        var se = this;
        let urlPath = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlFlight + "gate/apiv1/AllPlace?token=3b760e5dcf038878925b5613c32615ea3ds";
        var options = {
            method: 'GET',
            url: urlPath,
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            'headers': {
                "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                'Content-Type': 'application/json; charset=utf-8'
            },
        };
        requestretry__WEBPACK_IMPORTED_MODULE_9__(options, function (error, response, body) {
            if (error) {
                error.page = "searchhotel";
                error.func = "getItems";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                throw new Error(error);
            }
            ;
            let result = JSON.parse(body);
            if (result && result.length > 0) {
                se.zone.run(() => {
                    se.listAirport = [...result];
                    se._flightService.listAirport = [...result];
                });
            }
        });
    }
    Selecttab(value) {
        this.zone.run(() => {
            this.tabflight = value;
        });
    }
    refreshData() {
        var se = this;
        se.listMyTrips = [];
        se.listHistoryTrips = [];
        se.hasloaddata = false;
        se.mytripcount = 0;
        se.historyflightcount = 0;
        se.nextflightcounttext = "";
        se.historyflightcounttext = "";
        se.getdata(null);
    }
    getdata(token) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            se.loginuser = auth_token;
            console.log(auth_token);
            if (auth_token || token) {
                var text = "Bearer " + (token ? token : auth_token);
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/dashboard/getmytrip?getall=true',
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/json-patch+json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_9__(options, function (error, response, body) {
                    if (error) {
                        error.page = "mytrips";
                        error.func = "getdata";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                    }
                    else if (response.statusCode == 401) {
                        se.storage.get('jti').then((memberid) => {
                            se.storage.get('deviceToken').then((devicetoken) => {
                                se.gf.refreshToken(memberid, devicetoken).then((token) => {
                                    setTimeout(() => {
                                        se.getdatanewtoken(token);
                                    }, 100);
                                });
                            });
                        });
                    }
                    else {
                        if (body) {
                            se.zone.run(() => {
                                let lstTrips = JSON.parse(body);
                                se.storage.get('listmytrips').then(data => {
                                    if (data) {
                                        se.storage.remove('listmytrips').then(() => {
                                            se.storage.set('listmytrips', lstTrips);
                                        });
                                    }
                                    else {
                                        se.storage.set('listmytrips', lstTrips);
                                    }
                                });
                                se.loadMytrip(lstTrips);
                            });
                        }
                        else {
                            if (response.statusCode != 200) {
                                se.listMyTrips = [];
                                se.listHistoryTrips = [];
                                se.hasloaddata = true;
                                se.mytripcount = 0;
                                se.historyflightcount = 0;
                                se.nextflightcounttext = "";
                                se.historyflightcounttext = "";
                            }
                        }
                    }
                });
            }
            else {
                se.hasloaddata = true;
                se.listMyTrips = [];
                se.listHistoryTrips = [];
                se.mytripcount = 0;
                se.historyflightcount = 0;
                se.nextflightcounttext = "";
                se.historyflightcounttext = "";
            }
        });
        setTimeout(() => {
            if (se.myloader) {
                se.myloader.dismiss();
            }
        }, 500);
    }
    getdatanewtoken(token) {
        var se = this;
        se.loginuser = token;
        console.log(token);
        if (token) {
            var text = "Bearer " + token;
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/dashboard/getmytrip?getall=true',
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json-patch+json',
                    authorization: text
                }
            };
            requestretry__WEBPACK_IMPORTED_MODULE_9__(options, function (error, response, body) {
                if (error) {
                    error.page = "mytrips";
                    error.func = "getdata";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                }
                else {
                    if (body) {
                        se.zone.run(() => {
                            let lstTrips = JSON.parse(body);
                            se.storage.get('listmytrips').then(data => {
                                if (data) {
                                    se.storage.remove('listmytrips').then(() => {
                                        se.storage.set('listmytrips', lstTrips);
                                    });
                                }
                                else {
                                    se.storage.set('listmytrips', lstTrips);
                                }
                            });
                            se.loadMytrip(lstTrips);
                        });
                    }
                    else {
                        if (response.statusCode != 200) {
                            se.listMyTrips = [];
                            se.listHistoryTrips = [];
                            se.hasloaddata = true;
                            se.mytripcount = 0;
                            se.historyflightcount = 0;
                            se.nextflightcounttext = "";
                            se.historyflightcounttext = "";
                        }
                    }
                }
            });
        }
        else {
            se.hasloaddata = true;
            se.listMyTrips = [];
            se.listHistoryTrips = [];
            se.mytripcount = 0;
            se.historyflightcount = 0;
            se.nextflightcounttext = "";
            se.historyflightcounttext = "";
        }
        setTimeout(() => {
            if (se.myloader) {
                se.myloader.dismiss();
            }
        }, 500);
    }
    goback() {
        this.zone.run(() => {
            this._flightService.itemMenuFlightClick.emit(1);
            this._flightService.itemTabFlightActive.emit(1);
        });
    }
    loadMytrip(listtrips) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            se.loginuser = auth_token;
            if (auth_token) {
                se.mytripcount = 0;
                se.listMyTrips = [];
                se.historyflightcount = 0;
                se.listHistoryTrips = [];
                let lstTrips = listtrips;
                if (lstTrips.tripFuture.length > 0) {
                    lstTrips.tripFuture.forEach(element => {
                        if (element.flight_ticket_info && element.flight_ticket_info.indexOf("VXR") != -1) {
                            element.booking_type = "COMBO_VXR";
                        }
                        if (element.payment_status != 3 && element.payment_status != -2) {
                            if (element.avatar) {
                                let urlavatar = element.avatar.substring(0, element.avatar.length - 4);
                                let tail = element.avatar.substring(element.avatar.length - 4, element.avatar.length);
                                element.avatar = urlavatar + "-" + "104x104" + tail;
                            }
                            if (element.booking_id.indexOf("FLY") != -1 || element.booking_id.indexOf("VMB") != -1) {
                                element.totalpricedisplay = se.gf.convertNumberToString(element.amount_after_tax);
                                if (element.payment_status == 0 && element.delivery_payment_date) {
                                    let diffminutes = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).diff(moment__WEBPACK_IMPORTED_MODULE_8__(element.delivery_payment_date), 'minutes');
                                    if (diffminutes <= 0) {
                                        let hours = Math.floor(diffminutes * (-1) / 60);
                                        let minutes = diffminutes * (-1) - (hours * 60);
                                        if (hours < 10) {
                                            hours = hours != 0 ? "0" + hours : "0";
                                        }
                                        if (minutes < 10) {
                                            minutes = "0" + minutes;
                                        }
                                        element.delivery_payment_date_display = "Hạn thanh toán trước " + moment__WEBPACK_IMPORTED_MODULE_8__(element.delivery_payment_date).format("HH:mm") + " " + se.gf.getDayOfWeek(element.delivery_payment_date).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(element.delivery_payment_date).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(element.delivery_payment_date).format("MM") + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(element.delivery_payment_date).format("YYYY");
                                        if (!(element.pay_method == 3 || element.pay_method == 51)) {
                                            var obj = se.gf.getbank(element.pay_method);
                                            element.urlimgbank = obj.urlimgbank;
                                            element.textbank = obj.textbank;
                                            element.accountNumber = obj.accountNumber;
                                            element.bankName = obj.bankName;
                                            element.url = obj.url;
                                        }
                                        else if (element.pay_method == 3) {
                                            element.payment_info = JSON.parse(element.payment_info);
                                            element.PaymentCode = element.payment_info.PaymentCode;
                                        }
                                    }
                                }
                                element.checkInDisplay = se.gf.getDayOfWeek(element.checkInDate).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(element.checkInDate).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(element.checkInDate).format("MM");
                                element.checkOutDisplay = se.gf.getDayOfWeek(element.checkOutDate).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(element.checkOutDate).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(element.checkOutDate).format("MM");
                                element.flightFrom = element.bookingsComboData[0].flightFrom;
                                element.flightTo = element.bookingsComboData[0].flightTo;
                                element.departAirport = se.getAirportByCode(element.bookingsComboData[0].departCode);
                                element.returnAirport = se.getAirportByCode(element.bookingsComboData[0].arrivalCode);
                                se.textDeparture = se.getDayOfWeek(element.bookingsComboData[0].departureDate) + ', ' + element.bookingsComboData[0].departureDate;
                                se.textRegionDepart = se.getRegionByCode(element.bookingsComboData[0].departCode);
                                se.textRegionReturn = se.getRegionByCode(element.bookingsComboData[0].arrivalCode);
                                se.textAirpotDepart = se.getAirpot(element.bookingsComboData[0].departCode);
                                se.textAirpotReturn = se.getAirpot(element.bookingsComboData[0].arrivalCode);
                                let idxlug = 0;
                                element.bookingsComboData.forEach(el => {
                                    if (el.airlineName.indexOf('Vietnam Airlines') != -1) {
                                        if (el.flightNumner.indexOf(',') != -1) {
                                            let fnstring = el.flightNumner.split(',')[0].trim();
                                            let fn = fnstring.substring(2, el.flightNumner.length) * 1;
                                            if (fn >= 6000) {
                                                el.operatedBy = "Khai thác bởi Pacific Airlines";
                                            }
                                        }
                                        else {
                                            let fn = el.flightNumner.substring(2, el.flightNumner.length) * 1;
                                            if (fn >= 6000) {
                                                el.operatedBy = "Khai thác bởi Pacific Airlines";
                                            }
                                        }
                                    }
                                    if (el.passengers && el.passengers.length > 0) {
                                        for (let index = 0; index < el.passengers.length; index++) {
                                            el.passengers[index].arrlug = [];
                                        }
                                        for (let index = 0; index < el.passengers.length; index++) {
                                            const elementlug = el.passengers[index];
                                            let departElementLug = null;
                                            if (idxlug == 1) {
                                                departElementLug = element.bookingsComboData[idxlug - 1].passengers;
                                            }
                                            if (elementlug.hanhLy && elementlug.hanhLy.indexOf(':') == -1 && (elementlug.hanhLy.replace('kg', '')) * 1 > 0) {
                                                if (idxlug == 1) {
                                                    if (departElementLug) {
                                                        let itemfilter = departElementLug.filter((l) => { return l.arrlug && l.name == elementlug.name; });
                                                        if (itemfilter && itemfilter.length > 0) {
                                                            itemfilter[0].arrlug.push({ lugname: el.departCode + " - " + el.arrivalCode, lugweight: elementlug.hanhLy, lugprice: elementlug.giaTienHanhLy, seatnumber: elementlug.seatNumber });
                                                        }
                                                        else {
                                                            if (elementlug.seatNumber) {
                                                                itemfilter[0].arrlug.push({ lugname: el.departCode + " - " + el.arrivalCode, lugweight: "", lugprice: 0, seatnumber: elementlug.seatNumber });
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        elementlug.arrlug.push({ lugname: el.departCode + " - " + el.arrivalCode, lugweight: elementlug.hanhLy, lugprice: elementlug.giaTienHanhLy, seatnumber: elementlug.seatNumber });
                                                    }
                                                }
                                                else {
                                                    if (elementlug.arrlug.length > 0) {
                                                        let itemfilter = elementlug.arrlug.filter((l) => { return l.paxname == elementlug.name; });
                                                        if (itemfilter && itemfilter.length > 0) {
                                                            itemfilter[0].arrlug.push({ lugname: el.departCode + " - " + el.arrivalCode, lugweight: elementlug.hanhLy, lugprice: elementlug.giaTienHanhLy, seatnumber: elementlug.seatNumber });
                                                        }
                                                        else {
                                                            if (elementlug.seatNumber) {
                                                                itemfilter[0].arrlug.push({ lugname: el.departCode + " - " + el.arrivalCode, lugweight: "", lugprice: 0, seatnumber: elementlug.seatNumber });
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        elementlug.arrlug.push({ lugname: el.departCode + " - " + el.arrivalCode, lugweight: elementlug.hanhLy, lugprice: elementlug.giaTienHanhLy, seatnumber: elementlug.seatNumber });
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    idxlug++;
                                });
                                if (element.bookingsComboData.length > 1) {
                                    se.textReturn = se.getDayOfWeek(element.bookingsComboData[1].departureDate) + ', ' + element.bookingsComboData[1].departureDate;
                                    se.textArrivalRegionDepart = se.getRegionByCode(element.bookingsComboData[1].departCode);
                                    se.textArrivalRegionReturn = se.getRegionByCode(element.bookingsComboData[1].arrivalCode);
                                    se.textAirpotArrivalDepart = se.getAirpot(element.bookingsComboData[1].departCode);
                                    se.textAirpotArrivalReturn = se.getAirpot(element.bookingsComboData[1].arrivalCode);
                                }
                                if (element.bookingsComboData && element.bookingsComboData[0].passengers && element.bookingsComboData[0].passengers.length > 0) {
                                    element.adult = 0;
                                    element.child = 0;
                                    element.infant = 0;
                                    element.bookingsComboData[0].passengers.forEach((elementlug, index) => {
                                        let yearold = 18;
                                        if (elementlug.dob) {
                                            let arr = elementlug.dob.split('/');
                                            let newdob = new Date(arr[2], arr[1] - 1, arr[0]);
                                            yearold = moment__WEBPACK_IMPORTED_MODULE_8__(element.checkInDate).diff(moment__WEBPACK_IMPORTED_MODULE_8__(newdob), 'years');
                                        }
                                        elementlug.isAdult = yearold > 12 ? true : false;
                                        if (elementlug.isAdult) {
                                            element.adult += 1;
                                        }
                                        else {
                                            if (yearold < 2) {
                                                element.infant += 1;
                                                elementlug.isInfant = true;
                                            }
                                            else {
                                                element.child += 1;
                                            }
                                        }
                                        if (elementlug.hanhLy && elementlug.hanhLy.length > 0 && elementlug.hanhLy.indexOf(':') != -1) {
                                            elementlug.hanhLy = elementlug.hanhLy.replace(/\n/ig, ':');
                                            let arrlug = elementlug.hanhLy.split(':');
                                            elementlug.arrlug = [];
                                            if (arrlug && arrlug.length > 0) {
                                                let idx = 0;
                                                arrlug.forEach(lug => {
                                                    if (idx > 0) {
                                                        let arrlugname = lug;
                                                        if (arrlugname.length > 4) {
                                                            arrlugname = arrlugname.substring(0, 4);
                                                        }
                                                        let lugweight = arrlugname.substring(0, 2);
                                                        if (idx == 1 && lugweight > 0) {
                                                            elementlug.arrlug.push({ lugname: element.bookingsComboData[0].departCode + " - " + element.bookingsComboData[0].arrivalCode, lugweight: arrlugname });
                                                        }
                                                        else if (idx == 3 && lugweight > 0) {
                                                            elementlug.arrlug.push({ lugname: element.bookingsComboData[0].arrivalCode + " - " + element.bookingsComboData[0].departCode, lugweight: arrlugname });
                                                        }
                                                    }
                                                    idx++;
                                                });
                                            }
                                        }
                                    });
                                }
                            }
                            if (element.delivery_payment_date) {
                                let arrpaymentdate = element.delivery_payment_date.split(" ");
                                let hour = '', day = '';
                                let arrday;
                                if (arrpaymentdate && arrpaymentdate.length > 1) {
                                    let arrhour = arrpaymentdate[1].substring(0, 5).split(":");
                                    if (arrhour && arrhour.length > 0) {
                                        hour = arrhour[0].toString() + "h" + arrhour[1].toString();
                                    }
                                    arrday = arrpaymentdate[0].split('-');
                                    if (arrday && arrday.length > 0) {
                                        day = arrday[2].toString() + "-" + arrday[1].toString();
                                    }
                                }
                                element.deliveryPaymentDisplay = "Trước " + hour + ", " + day;
                                let arrhours = arrpaymentdate[1].split(":");
                                let today = new Date();
                                let d = new Date(Number(arrday[0]), Number(arrday[1]) - 1, Number(arrday[2]), Number(arrhours[0]), Number(arrhours[1]), Number(arrhours[2]));
                                let diffminutes = moment__WEBPACK_IMPORTED_MODULE_8__(d).diff(today, 'minutes');
                                if (diffminutes < 0) {
                                    element.deliveryPaymentDisplay = "";
                                }
                                let hours = Math.round(diffminutes / 60);
                                let minutes = diffminutes - (hours * 60);
                                element.paymentBefore = hours + "h" + minutes + "'";
                                if (element.extra_guest_info) {
                                    let arrpax = element.extra_guest_info.split('|');
                                    if (arrpax && arrpax.length > 1 && arrpax[1] > 0) {
                                        element.paxDisplay = arrpax[0].toString() + " người lớn, " + arrpax[1].toString() + " trẻ em";
                                    }
                                    else if (arrpax && arrpax.length > 1 && arrpax[1] == 0) {
                                        element.paxDisplay = arrpax[0].toString() + " người lớn";
                                    }
                                }
                                if (element.amount_after_tax) {
                                    element.priceShow = element.amount_after_tax.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                                }
                            }
                            element.isRequestTrip = false;
                            if (element.booking_id.indexOf("FLY") != -1 || element.booking_id.indexOf("VMB") != -1) {
                                se.listMyTrips.push(element);
                                se.mytripcount++;
                                se.nextflightcounttext = "(" + se.mytripcount + ")";
                            }
                        }
                    });
                }
                if (lstTrips.tripHistory.length > 0) {
                    lstTrips.tripHistory.forEach(elementHis => {
                        if (elementHis.avatar) {
                            let urlavatar = elementHis.avatar.substring(0, elementHis.avatar.length - 4);
                            let tail = elementHis.avatar.substring(elementHis.avatar.length - 4, elementHis.avatar.length);
                            elementHis.avatar157 = urlavatar + "-" + "104x157" + tail;
                            elementHis.avatar104 = urlavatar + "-" + "104x104" + tail;
                            elementHis.avatar110 = urlavatar + "-" + "110x118" + tail;
                        }
                        else {
                            elementHis.avatar110 = "//cdn1.ivivu.com/iVivu/2018/02/07/15/noimage-110x118.jpg";
                        }
                        if (elementHis.booking_id.indexOf("FLY") != -1 || elementHis.booking_id.indexOf("VMB") != -1) {
                            elementHis.checkInDisplay = se.gf.getDayOfWeek(elementHis.checkInDate).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(elementHis.checkInDate).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(elementHis.checkInDate).format("MM");
                            elementHis.checkOutDisplay = se.gf.getDayOfWeek(elementHis.checkOutDate).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(elementHis.checkOutDate).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(elementHis.checkOutDate).format("MM");
                            elementHis.flightFrom = elementHis.bookingsComboData[0].flightFrom;
                            elementHis.flightTo = elementHis.bookingsComboData[0].flightTo;
                            elementHis.departAirport = se.getAirportByCode(elementHis.bookingsComboData[0].departCode);
                            elementHis.returnAirport = se.getAirportByCode(elementHis.bookingsComboData[0].arrivalCode);
                            elementHis.roundTrip = elementHis.bookingsComboData.length > 1 ? true : false;
                            if (elementHis.bookingsComboData && elementHis.bookingsComboData[0].passengers && elementHis.bookingsComboData[0].passengers.length > 0) {
                                elementHis.bookingsComboData[0].passengers.forEach((elementHisLug, index) => {
                                    let yearold = 18;
                                    if (elementHisLug.dob) {
                                        let arr = elementHisLug.dob.split('/');
                                        let newdate = new Date(arr[2], arr[1], arr[0]);
                                        yearold = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).diff(moment__WEBPACK_IMPORTED_MODULE_8__(newdate), 'years');
                                    }
                                    elementHisLug.isAdult = yearold > 12 ? true : false;
                                    if (elementHisLug.hanhLy && elementHisLug.hanhLy.length > 0) {
                                        let arrlug = elementHisLug.hanhLy.split(':');
                                        elementHisLug.arrlug = [];
                                        if (arrlug && arrlug.length > 0) {
                                            let idx = 0;
                                            arrlug.forEach(lug => {
                                                if (idx > 0) {
                                                    let arrlugname = lug;
                                                    if (arrlugname.length > 4) {
                                                        arrlugname = arrlugname.substring(0, 4);
                                                    }
                                                    if (idx == 1) {
                                                        elementHisLug.arrlug.push({ lugname: elementHis.bookingsComboData[0].flightFrom + " - " + elementHis.bookingsComboData[0].flightTo, lugweight: arrlugname });
                                                    }
                                                    else if (elementHis.bookingsComboData.length > 1 && idx == 2) {
                                                        elementHisLug.arrlug.push({ lugname: elementHis.bookingsComboData[1].flightFrom + " - " + elementHis.bookingsComboData[1].flightTo, lugweight: arrlugname });
                                                    }
                                                }
                                                idx++;
                                            });
                                        }
                                    }
                                });
                            }
                            se.listHistoryTrips.push(elementHis);
                            se.historyflightcount++;
                        }
                    });
                    se.historyflightcounttext = "(" + se.historyflightcount + ")";
                }
                se.sortMytrip();
                se.hasloaddata = true;
                se.currentTrip = 0;
                if (se.listMyTrips && se.listMyTrips.length > 0) {
                    se.hasdata = true;
                    let firstitem = se.listMyTrips[0];
                    if (se._flightService.bookingCodePayment) {
                        let itempayment = se.listMyTrips.filter((itemf) => { return itemf.booking_id == se._flightService.bookingCodePayment; });
                        if (itempayment && itempayment.length > 0) {
                            se.setCheckInCheckOutInfo(itempayment[0]);
                        }
                        else {
                            se.setCheckInCheckOutInfo(firstitem);
                        }
                        se._flightService.bookingCodePayment = "";
                    }
                    else {
                        se.setCheckInCheckOutInfo(firstitem);
                    }
                }
            }
            else {
                se.hasloaddata = true;
                se.listMyTrips = [];
                se.listHistoryTrips = [];
                se.mytripcount = 0;
                se.historyflightcount = 0;
                se.nextflightcounttext = "";
                se.historyflightcounttext = "";
            }
        });
    }
    sortMytrip() {
        var se = this;
        if (se.listMyTrips && se.listMyTrips.length > 0) {
            se.zone.run(() => se.listMyTrips.sort(function (a, b) {
                let direction = -1;
                if (!a['isRequestTrip'] && !b['isRequestTrip']) {
                    if (moment__WEBPACK_IMPORTED_MODULE_8__(a['checkInDate']).diff(moment__WEBPACK_IMPORTED_MODULE_8__(b['checkInDate']), 'days') > 0) {
                        return -1 * direction;
                    }
                    else {
                        return 1 * direction;
                    }
                }
                else if (!a['isRequestTrip'] && b['isRequestTrip']) {
                    if (moment__WEBPACK_IMPORTED_MODULE_8__(a['checkInDate']).diff(moment__WEBPACK_IMPORTED_MODULE_8__(b['start_date']), 'days') > 0) {
                        return -1 * direction;
                    }
                    else {
                        return 1 * direction;
                    }
                }
                else if (a['isRequestTrip'] && !b['isRequestTrip']) {
                    if (moment__WEBPACK_IMPORTED_MODULE_8__(a['start_date']).diff(moment__WEBPACK_IMPORTED_MODULE_8__(b['checkInDate']), 'days') > 0) {
                        return -1 * direction;
                    }
                    else {
                        return 1 * direction;
                    }
                }
                else {
                    if (moment__WEBPACK_IMPORTED_MODULE_8__(a['start_date']).diff(moment__WEBPACK_IMPORTED_MODULE_8__(b['start_date']), 'days') > 0) {
                        return -1 * direction;
                    }
                    else {
                        return 1 * direction;
                    }
                }
            }));
        }
    }
    setCheckInCheckOutInfo(obj) {
        var se = this;
        se.isFlyBooking = (obj.booking_id.indexOf("FLY") != -1 || obj.booking_id.indexOf("VMB") != -1) ? true : false;
        se.datecin = new Date(obj.checkInDate);
        se.datecout = new Date(obj.checkOutDate);
        se.cindisplay = moment__WEBPACK_IMPORTED_MODULE_8__(se.datecin).format('DD-MM-YYYY');
        se.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_8__(se.datecout).format('DD-MM-YYYY');
        if (obj.bookingsComboData) {
            se.cincombodeparturedisplay = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(obj.bookingsComboData[0].departureDate)).format('DD-MM-YYYY');
            se.cincomboarrivaldisplay = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(obj.bookingsComboData[0].arrivalDate)).format('DD-MM-YYYY');
            if (obj.bookingsComboData.length > 1) {
                se.coutcombodeparturedisplay = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(obj.bookingsComboData[1].departureDate)).format('DD-MM-YYYY');
                se.coutcomboarrivaldisplay = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(obj.bookingsComboData[1].arrivalDate)).format('DD-MM-YYYY');
            }
        }
        se.numberOfDay = moment__WEBPACK_IMPORTED_MODULE_8__(se.datecout).diff(moment__WEBPACK_IMPORTED_MODULE_8__(se.datecin), 'days');
        if (obj.flight_ticket_info) {
            let arrInfo = obj.flight_ticket_info.split("<br/>");
            if (arrInfo.length == 2) {
                let arrFlightStart = arrInfo[0].split("|");
                let arrFlightReturn = arrInfo[1].split("|");
                se.cincombodeparturedisplay = arrFlightStart[0];
                se.cincombodeparturelocationdisplay = arrFlightStart[1];
                se.cincombodepartureflightnumberdisplay = arrFlightStart[2];
                se.cincomboarrivaldisplay = arrFlightReturn[0];
                se.cincomboarrivallocationdisplay = arrFlightReturn[1];
                se.cincomboarrivalflightnumberdisplay = arrFlightReturn[2];
            }
            else if (arrInfo.length > 2) {
                let arrFlightStart = arrInfo[0].split("|");
                let arrFlightReturn = arrInfo[1].split("|");
                se.cincombodeparturedisplay = arrFlightStart[0];
                se.cincombodeparturelocationdisplay = arrFlightStart[1];
                se.cincombodepartureflightnumberdisplay = arrFlightStart[2];
                se.cincomboarrivaldisplay = arrFlightReturn[0];
                se.cincomboarrivallocationdisplay = arrFlightReturn[1];
                se.cincomboarrivalflightnumberdisplay = arrFlightReturn[2];
            }
            if (obj.bookingsComboData && obj.bookingsComboData.length > 2) {
                obj.bookingsComboData = obj.bookingsComboData.slice(0, 2);
            }
            if (obj.bookingsComboData && obj.bookingsComboData.length > 1) {
                se.departCodeDisplay = obj.bookingsComboData[0].departCode + ' → ' + obj.bookingsComboData[0].arrivalCode;
                if (obj.bookingsComboData.length > 1) {
                    se.arrivalCodeDisplay = obj.bookingsComboData[1].departCode + ' → ' + obj.bookingsComboData[1].arrivalCode;
                }
            }
        }
    }
    setCheckInCheckOutRQInfo(obj) {
        var se = this;
        var datecinRQ = new Date(obj.start_date);
        var datecoutRQ = new Date(obj.end_date);
        se.cinRQdisplay = moment__WEBPACK_IMPORTED_MODULE_8__(datecinRQ).format('DD-MM-YYYY');
        se.coutRQdisplay = moment__WEBPACK_IMPORTED_MODULE_8__(datecoutRQ).format('DD-MM-YYYY');
        se.numberOfRQDay = moment__WEBPACK_IMPORTED_MODULE_8__(datecoutRQ).diff(moment__WEBPACK_IMPORTED_MODULE_8__(datecinRQ), 'days');
    }
    getDayOfWeek(day) {
        let arrdate = day.split('/');
        let newdate = new Date(arrdate[2], arrdate[1], arrdate[0]);
        let cinthu = moment__WEBPACK_IMPORTED_MODULE_8__(newdate).format("dddd");
        switch (cinthu) {
            case "Monday":
                cinthu = "Thứ 2";
                break;
            case "Tuesday":
                cinthu = "Thứ 3";
                break;
            case "Wednesday":
                cinthu = "Thứ 4";
                break;
            case "Thursday":
                cinthu = "Thứ 5";
                break;
            case "Friday":
                cinthu = "Thứ 6";
                break;
            case "Saturday":
                cinthu = "Thứ 7";
                break;
            default:
                cinthu = "Chủ nhật";
                break;
        }
        return cinthu;
    }
    getAirpot(code) {
        let itemairport = this._flightService.listAirport.filter((itemairport) => { return itemairport.code == code; });
        return itemairport && itemairport.length > 0 ? itemairport[0].airport : '';
    }
    getRegionByCode(code) {
        let itemairport = this._flightService.listAirport.filter((itemairport) => { return itemairport.code == code; });
        return itemairport && itemairport.length > 0 ? itemairport[0].city : '';
    }
    nextTrip() {
        this.currentTrip = this.currentTrip + 1;
        let obj = this.listMyTrips[this.currentTrip];
        if (!obj.isRequestTrip) {
            this.setCheckInCheckOutInfo(obj);
            this.isRequestTrip = false;
        }
        else {
            this.setCheckInCheckOutRQInfo(obj);
            this.isRequestTrip = true;
        }
        this.content.scrollToTop(50);
        this.gf.googleAnalytion('mytrips', 'Search', 'nexttrip');
    }
    previousTrip() {
        this.currentTrip = this.currentTrip - 1;
        let obj = this.listMyTrips[this.currentTrip];
        if (!obj.isRequestTrip) {
            this.setCheckInCheckOutInfo(obj);
            this.isRequestTrip = false;
        }
        else {
            this.setCheckInCheckOutRQInfo(obj);
            this.isRequestTrip = true;
        }
        this.content.scrollToTop(50);
        this.gf.googleAnalytion('mytrips', 'Search', 'previoustrip');
    }
    getAirportByCode(code) {
        var se = this, res = "";
        if (se.listAirport && se.listAirport.length > 0) {
            let itemmap = se.listAirport.filter((item) => { return item.code == code; });
            res = (itemmap && itemmap.length > 0) ? itemmap[0].airport : "";
        }
        return res;
    }
    gotologin() {
        this.valueGlobal.backValue = "flightmytrip";
        this.navCtrl.navigateForward('/login');
    }
    copyClipboard(type) {
        if (type == 1) {
            this.clipboard.copy(this.accountNumber);
        }
        else if (type == 2) {
            this.clipboard.copy("Người thụ hưởng: Công ty Cổ Phần IVIVU.COM");
        }
        else if (type == 3) {
            this.clipboard.copy(this.bookingCode);
        }
        else if (type == 4) {
            this.clipboard.copy(this.total);
        }
        this.presentToastr('Đã sao chép');
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
    gotoflightpaymentselect(itemflight) {
        this._flightService.itemFlightCache = itemflight;
        this.navCtrl.navigateForward('/flightpaymentselect');
    }
    payment(trip) {
        var se = this;
        se.navCtrl.navigateForward("/roompaymentlive/1");
    }
    paymentselect(trip) {
        this.activityService.objPaymentMytrip = { trip: trip };
        this.navCtrl.navigateForward("/mytripaymentflightselect");
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
], FlightmytripPage.prototype, "content", void 0);
FlightmytripPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flightmytrip',
        template: __webpack_require__(/*! ./flightmytrip.page.html */ "./src/app/flightmytrip/flightmytrip.page.html"),
        styles: [__webpack_require__(/*! ./flightmytrip.page.scss */ "./src/app/flightmytrip/flightmytrip.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["GlobalFunction"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_5__["flightService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_10__["ValueGlobal"],
        _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_11__["Clipboard"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["ActivityService"]])
], FlightmytripPage);



/***/ }),

/***/ "./src/app/flightnotify/flightnotify.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/flightnotify/flightnotify.module.ts ***!
  \*****************************************************/
/*! exports provided: FlightnotifyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightnotifyPageModule", function() { return FlightnotifyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightnotify_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flightnotify.page */ "./src/app/flightnotify/flightnotify.page.ts");






let FlightnotifyPageModule = class FlightnotifyPageModule {
};
FlightnotifyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
        ],
        declarations: [_flightnotify_page__WEBPACK_IMPORTED_MODULE_5__["FlightnotifyPage"]],
        exports: [_flightnotify_page__WEBPACK_IMPORTED_MODULE_5__["FlightnotifyPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FlightnotifyPageModule);



/***/ }),

/***/ "./src/app/flightnotify/flightnotify.page.html":
/*!*****************************************************!*\
  !*** ./src/app/flightnotify/flightnotify.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"flightnotify-header\">\r\n      <ion-row>\r\n        <ion-col class=\"header-title\"><label>Thông báo</label>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-header>\r\n<div class=\"flightnotify-content\">\r\n  <div class=\"inbox-content\" *ngIf=\"!loaddatadone else loaddone\">\r\n    <ion-row *ngFor=\"let item of itemskeleton\">\r\n        <ion-row class=\"cls-border-bottom\" style=\"width:100%\">\r\n                <ion-item style=\"--padding-start:0;--background: transparent;--border-style:none;--inner-padding-end:0;width: 100%;\">\r\n                  <ion-row style=\"width:100%\">\r\n                      <ion-col size=\"1.2\" style=\"padding: 0\">\r\n                          <div>\r\n                            <ion-skeleton-text animated style=\"width:100%;margin-top: 6px;height: 24px;width: 24px;border-radius:24px\"></ion-skeleton-text>\r\n                          </div>\r\n                        </ion-col>\r\n                        <ion-col size=\"10.8\" style=\"padding: 0\">\r\n                          <div><ion-skeleton-text animated style=\"width:100%;margin-top: 8px;height: 16px;\"></ion-skeleton-text></div>\r\n                          <div><ion-skeleton-text animated style=\"width:100%;margin-top: 8px;height: 16px;\"></ion-skeleton-text></div>\r\n                          <div><ion-skeleton-text animated style=\"width:25%;margin-top: 8px;height: 16px;\"></ion-skeleton-text></div>\r\n                      </ion-col>\r\n                  </ion-row>\r\n                </ion-item>\r\n      </ion-row>\r\n    </ion-row>\r\n  </div>\r\n  <ng-template #loaddone>\r\n    <div class=\"inbox-content-empty\" *ngIf=\"items.length == 0 && loaddatadone\">\r\n      <div class=\"img-inbox-empty\">\r\n        <div class=\"img-empty\"><img  src=\"../../assets/empty/trip_empty.svg\"></div>\r\n      </div>\r\n      <div class=\"text-trip-empty\">\r\n        <label>Hiện chưa có thư mới nào.</label>\r\n      </div>\r\n  </div>\r\n\r\n  \r\n  \r\n  <div class=\"inbox-content\" *ngIf=\"items && items.length > 0 && loaddatadone\">\r\n      <ion-row *ngFor=\"let item of items\" [ngClass]=\"items && items.length > 0 && !item.status ? 'item-unread' : '' \">\r\n        <div *ngIf=\"!item.deleted\" style=\"width:100%\">\r\n          <ion-row class=\"cls-border-bottom\">\r\n            <ion-item-sliding>\r\n                  <ion-item style=\"--padding-start:0;--inner-padding-end:0;--background: transparent;--border-style:none\"  (click)=\"updateStatusMessage(item)\">\r\n                    <ion-row style=\"width:100%\">\r\n                        <ion-col size=\"1.2\" style=\"padding: 0\">\r\n                            <div>\r\n                              <img style=\"margin-top: 4px;\" name=\"home\" src=\"./assets/imgs/ic_home.svg\" *ngIf=\" item.notifyAction == 'approve' || item.notifyAction == 'cancel' || item.notifyAction == 'sharereviewofhotel' || item.notifyAction== 'waitingconfirmtopayment' || item.notifyAction == 'paymented' || item.notifyAction == 'bookingbegoingroom'\" >\r\n                              <img style=\"margin-top: 4px;\" name=\"bus\" src=\"./assets/imgs/ic_bus2.svg\" *ngIf=\"item.notifyType == 'bookingbegoingcombotransfer'\" >\r\n                              <img style=\"margin-top: 4px;\" name=\"message\" src=\"./assets/imgs/ic_message.svg\" *ngIf=\"item.notifyAction == 'blogofmytrip'\" >\r\n                              <img style=\"margin-top: 4px;\" name=\"paper\" src=\"./assets/imgs/ic_paper.svg\" *ngIf=\"item.notifyAction == 'bookingbegoingcombofly' || item.notifyAction == 'flychangeinfo'\" >\r\n                            </div>\r\n                          </ion-col>\r\n                          <ion-col size=\"10.8\" style=\"padding: 0\">\r\n                            <div><ion-label class=\"inbox-title\">{{item.title}}</ion-label></div>\r\n                            <div><ion-label [ngClass]=\"!item.status ? 'inbox-message hidden-text' : 'inbox-message readed-text' \">{{item.message}}</ion-label></div>\r\n                            <div><ion-label class=\"inbox-date\">{{item.date}}</ion-label></div>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                  </ion-item>\r\n                  <ion-item-options side=\"end\">\r\n                    <ion-item-option  side=\"end\" color=\"danger\" (click)=\"deleteNotifi(item)\">\r\n                      Xóa\r\n                    </ion-item-option>\r\n                  </ion-item-options>\r\n                 \r\n            </ion-item-sliding>\r\n        </ion-row>\r\n        </div>\r\n      </ion-row>\r\n  </div>\r\n  </ng-template>\r\n\r\n    \r\n</div>\r\n    <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\" *ngIf=\"!loadend\">\r\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n\r\n"

/***/ }),

/***/ "./src/app/flightnotify/flightnotify.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/flightnotify/flightnotify.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flightnotify-header {\n  position: fixed;\n}\n\n.header-title {\n  padding: 10px;\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.header-arrow {\n  margin: 3px 11px;\n}\n\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.text-trip-empty {\n  text-align: center;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #bdbdbd;\n}\n\n.img-inbox-empty {\n  text-align: center;\n}\n\n.flightnotify-content {\n  height: auto;\n  padding: calc(env(safe-area-inset-bottom) + 80px) 16px;\n  padding-bottom: 110px;\n  position: -webkit-sticky;\n}\n\n.cls-icon {\n  background-color: #003c71;\n  border-radius: 20px;\n  width: 24px;\n  height: 24px;\n  text-align: center;\n}\n\n.cls-row-content {\n  padding: 0px 16px 16px 16px;\n}\n\n.inbox-content-empty {\n  padding: 16px;\n}\n\n.cls-border-bottom {\n  padding: 12px 0px;\n  margin: 0 16px;\n  border-bottom: solid 1px rgba(201, 201, 201, 0.5);\n}\n\n.inbox-title {\n  font-size: 14px;\n  font-weight: bold;\n  white-space: normal;\n}\n\n.inbox-message {\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: -0.4px;\n}\n\n.inbox-date {\n  font-size: 12px;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n\n.item-unread {\n  background-color: rgba(0, 60, 113, 0.1);\n}\n\n.inbox-content:first-child {\n  padding-top: 4px;\n}\n\n.readed-text {\n  white-space: normal;\n}\n\n.img-empty {\n  padding-top: 96px;\n  padding-bottom: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2ZsaWdodG5vdGlmeS9mbGlnaHRub3RpZnkucGFnZS5zY3NzIiwic3JjL2FwcC9mbGlnaHRub3RpZnkvZmxpZ2h0bm90aWZ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7QUNBRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURHTTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNBVjs7QURFUTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNDVjs7QURDTTtFQUNFLGtCQUFBO0FDRVI7O0FEQUU7RUFFRSxZQUFBO0VBQ0Esc0RBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FDRUo7O0FEQUk7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0dOOztBRERJO0VBQ0UsMkJBQUE7QUNJTjs7QURGSTtFQUNFLGFBQUE7QUNLTjs7QURIRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlEQUFBO0FDTUo7O0FESkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ09KOztBREpFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNPSjs7QURKRTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNPSjs7QURKRTtFQUNFLHVDQUFBO0FDT0o7O0FESkU7RUFDRSxnQkFBQTtBQ09KOztBRExFO0VBQ0UsbUJBQUE7QUNRSjs7QURMRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodG5vdGlmeS9mbGlnaHRub3RpZnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mbGlnaHRub3RpZnktaGVhZGVye1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG4uaGVhZGVyLXRpdGxle1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmhlYWRlci1hcnJvd3tcclxuICBtYXJnaW46IDNweCAxMXB4O1xyXG59XHJcblxyXG5cclxuICAgICAgLnRvb2xiYXItdGl0bGUtbWQge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xyXG4gICAgICAgIH0gIFxyXG4gICAgICAgIC50ZXh0LXRyaXAtZW1wdHl7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgICAgICBjb2xvcjogI2JkYmRiZDtcclxuICAgICAgfVxyXG4gICAgICAuaW1nLWluYm94LWVtcHR5e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gIC5mbGlnaHRub3RpZnktY29udGVudFxyXG4gIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IGNhbGMoIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSArIDgwcHgpIDE2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTEwcHg7XHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgfVxyXG4gICAgLmNscy1pY29ue1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzYzcxO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICB3aWR0aDogMjRweDtcclxuICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY2xzLXJvdy1jb250ZW50e1xyXG4gICAgICBwYWRkaW5nOiAwcHggMTZweCAxNnB4IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuaW5ib3gtY29udGVudC1lbXB0eXtcclxuICAgICAgcGFkZGluZzogMTZweDtcclxuICAgIH1cclxuICAuY2xzLWJvcmRlci1ib3R0b217XHJcbiAgICBwYWRkaW5nOiAxMnB4IDBweDtcclxuICAgIG1hcmdpbjogMCAxNnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMjAxLCAyMDEsIDIwMSwgMC41KTtcclxuICB9XHJcbiAgLmluYm94LXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIH1cclxuICBcclxuICAuaW5ib3gtbWVzc2FnZXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICB9XHJcbiAgXHJcbiAgLmluYm94LWRhdGV7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gIH1cclxuICBcclxuICAuaXRlbS11bnJlYWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDYwLCAxMTMsIDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbmJveC1jb250ZW50OmZpcnN0LWNoaWxke1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICB9XHJcbiAgLnJlYWRlZC10ZXh0e1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICB9XHJcbiAgXHJcbiAgLmltZy1lbXB0eXtcclxuICAgIHBhZGRpbmctdG9wOiA5NnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XHJcbn0iLCIuZmxpZ2h0bm90aWZ5LWhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLmhlYWRlci10aXRsZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhlYWRlci1hcnJvdyB7XG4gIG1hcmdpbjogM3B4IDExcHg7XG59XG5cbi50b29sYmFyLXRpdGxlLW1kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG59XG5cbi50ZXh0LXRyaXAtZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICNiZGJkYmQ7XG59XG5cbi5pbWctaW5ib3gtZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mbGlnaHRub3RpZnktY29udGVudCB7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkgKyA4MHB4KSAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTEwcHg7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbn1cblxuLmNscy1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwM2M3MTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2xzLXJvdy1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4IDE2cHggMTZweCAxNnB4O1xufVxuXG4uaW5ib3gtY29udGVudC1lbXB0eSB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5jbHMtYm9yZGVyLWJvdHRvbSB7XG4gIHBhZGRpbmc6IDEycHggMHB4O1xuICBtYXJnaW46IDAgMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMjAxLCAyMDEsIDIwMSwgMC41KTtcbn1cblxuLmluYm94LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmluYm94LW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuXG4uaW5ib3gtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4uaXRlbS11bnJlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDYwLCAxMTMsIDAuMSk7XG59XG5cbi5pbmJveC1jb250ZW50OmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuLnJlYWRlZC10ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmltZy1lbXB0eSB7XG4gIHBhZGRpbmctdG9wOiA5NnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/flightnotify/flightnotify.page.ts":
/*!***************************************************!*\
  !*** ./src/app/flightnotify/flightnotify.page.ts ***!
  \***************************************************/
/*! exports provided: FlightnotifyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightnotifyPage", function() { return FlightnotifyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/badge/ngx */ "./node_modules/@ionic-native/badge/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");











let FlightnotifyPage = class FlightnotifyPage {
    constructor(navCtrl, gf, _flightService, platform, badge, storage, zone, toastCtrl, valueGlobal, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this._flightService = _flightService;
        this.platform = platform;
        this.badge = badge;
        this.storage = storage;
        this.zone = zone;
        this.toastCtrl = toastCtrl;
        this.valueGlobal = valueGlobal;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.items = [];
        this.phone = '';
        this.email = '';
        this.loaddatadone = false;
        this.itemskeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.pageIndex = 1;
        this.pageSize = 10;
        this.storage.get('phone').then(data => {
            if (data) {
                this.phone = data;
            }
        });
        this.storage.get('email').then(e => {
            if (e) {
                this.email = e;
            }
        });
        this.loadUserNotification();
    }
    ngOnInit() {
        this._flightService.itemMenuFlightClick.pipe().subscribe(data => {
            if (data == 3) {
                this.loadUserNotification();
            }
        });
    }
    loadUserNotification() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/GetNotificationByUser?pageIndex=' + se.pageIndex + '&pageSize=' + se.pageSize,
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_7__(options, function (error, response, body) {
                    if (error) {
                        error.page = "inbox";
                        error.func = "loadUserNotification";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(error, response);
                    }
                    else {
                        if (body && body != "[]") {
                            var data = JSON.parse(body);
                            if (data && data.length > 0) {
                                data.forEach(element => {
                                    if (element.notifyType == "fly" || element.notifyAction == "flychangeinfo") {
                                        let arrdate = moment__WEBPACK_IMPORTED_MODULE_8__(element.created).format('DD/MM/YYYY/HH/mm').split('/');
                                        let d = new Date(Number(arrdate[2]), Number(arrdate[1]) - 1, Number(arrdate[0]), Number(arrdate[3]), Number(arrdate[4]));
                                        let today = new Date();
                                        if (moment__WEBPACK_IMPORTED_MODULE_8__(today).diff(d, 'hours') <= 24) {
                                            let diffhours = moment__WEBPACK_IMPORTED_MODULE_8__(today).diff(d, 'hours');
                                            element.date = moment__WEBPACK_IMPORTED_MODULE_8__(today).diff(d, 'hours') + " giờ trước";
                                            if (diffhours == 0) {
                                                element.date = moment__WEBPACK_IMPORTED_MODULE_8__(today).diff(d, 'minutes') + " phút trước";
                                            }
                                        }
                                        else {
                                            element.date = moment__WEBPACK_IMPORTED_MODULE_8__(element.created).format('DD/MM/YYYY');
                                        }
                                        element.deleted = false;
                                        if (se.items.length > 0) {
                                            if (!se.gf.checkExistsItemInArray(se.items, element, 'trip')) {
                                                se.items.push(element);
                                            }
                                        }
                                        else {
                                            se.items.push(element);
                                        }
                                    }
                                });
                                setTimeout(() => {
                                    se.zone.run(() => {
                                        let countNoti = se.items.filter(item => { return !item.status; }).length;
                                        se.badge.set(countNoti);
                                        se.valueGlobal.countNotifi = countNoti;
                                        se.sortNotifi(se.items);
                                        se.loaddatadone = true;
                                    });
                                }, 100);
                            }
                        }
                        else {
                            se.zone.run(() => {
                                se.loadend = true;
                                se.loaddatadone = true;
                                if (se.pageIndex == 1) {
                                    se.items = [];
                                    se.valueGlobal.countNotifi = 0;
                                }
                            });
                        }
                    }
                });
            }
            else {
                se.zone.run(() => {
                    se.items = [];
                    se.valueGlobal.countNotifi = 0;
                    se.loaddatadone = true;
                });
                se.refreshToken();
            }
        });
    }
    sortNotifi(data) {
        var se = this;
        if (data && data.length > 0) {
            se.zone.run(() => data.sort(function (a, b) {
                let direction = -1;
                if (moment__WEBPACK_IMPORTED_MODULE_8__(a['created']).diff(moment__WEBPACK_IMPORTED_MODULE_8__(b['created']), 'minutes') <= 0) {
                    return -1 * direction;
                }
                else {
                    return 1 * direction;
                }
            }));
        }
    }
    ;
    updateStatusMessage(item) {
        var se = this;
        se.items.forEach(element => {
            if (element.id == item.id) {
                se.zone.run(() => {
                    if (!element.status) {
                        element.status = 1;
                        se.callUpdateStatus(element);
                    }
                });
            }
        });
        if (item && item.bookingCode && item.notifyAction != "cancel") {
            if (item.notifyAction == "sharereviewofhotel") {
                se.navCtrl.navigateForward(['/app/tabs/tab3']);
                se.gf.setParams(item.bookingCode, 'notifiBookingCode');
                se.gf.setParams(2, 'selectedTab3');
            }
            else if (item.notifyType == "blog" && item.notifyAction == "blogofmytrip") {
                se.valueGlobal.backValue = "tab4";
                se.navCtrl.navigateForward("/blog/" + item.bookingCode);
            }
            else if (item.notifyType == "fly" && item.notifyAction == "flychangeinfo") {
                se.navCtrl.navigateForward(['/app/tabs/tab3']);
                se.gf.setParams(item.bookingCode, 'notifiBookingCode');
                se.gf.setParams(item.switchObj, 'notifiSwitchObj');
            }
            else {
                se.gf.setParams(item.bookingCode, 'notifiBookingCode');
                se.navCtrl.navigateForward(['/app/tabs/tab3']);
            }
        }
        else {
            se.presentToastNotifi(item.message);
        }
    }
    callUpdateStatus(item) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/UpdateStatusNotificationOfUser',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                    body: {
                        "id": item.id,
                        "phoneNumber": this.phone,
                        "email": this.email,
                        "memberId": auth_token,
                        "switchTypeOf": item.switchTypeOf,
                        "switchAction": item.switchAction,
                        "switchObj": item.switchObj,
                        "title": item.title,
                        "message": item.message,
                        "status": 1
                    },
                    json: true,
                };
                requestretry__WEBPACK_IMPORTED_MODULE_7__(options, function (error, response, body) {
                    if (error) {
                        error.page = "inbox";
                        error.func = "loadUserNotification";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(error, response);
                    }
                    else if (body && body.success) {
                        se.valueGlobal.countNotifi--;
                    }
                });
            }
        });
    }
    deleteNotifi(item) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/DeleteNotificationOfUser',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                    body: {
                        "id": item.id,
                        "phoneNumber": this.phone,
                        "email": this.email,
                        "memberId": auth_token,
                        "switchTypeOf": item.switchTypeOf,
                        "switchAction": item.switchAction,
                        "switchObj": item.switchObj,
                        "title": item.title,
                        "message": item.message,
                        "status": 1
                    },
                    json: true,
                };
                requestretry__WEBPACK_IMPORTED_MODULE_7__(options, function (error, response, body) {
                    if (error) {
                        error.page = "inbox";
                        error.func = "loadUserNotification";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(error, response);
                    }
                    else if (body && body.success) {
                        se.zone.run(() => {
                            item.deleted = true;
                        });
                    }
                });
            }
        });
    }
    presentToastNotifi(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: item.message,
                duration: 3000,
                position: 'top',
            });
            toast.present();
        });
    }
    showConfirm(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: msg,
                cssClass: "cls-alert-showmore",
                buttons: [
                    {
                        text: 'Để sau',
                        handler: () => {
                            this.storage.remove('auth_token');
                            this.storage.remove('email');
                            this.storage.remove('username');
                            this.storage.remove('jti');
                            this.storage.remove('userInfoData');
                            this.storage.remove('userRewardData');
                            this.storage.remove('point');
                            this.storage.remove('infocus');
                            this.zone.run(() => {
                                this.valueGlobal.countNotifi = 0;
                            });
                            if (this.modalCtrl) {
                                this.modalCtrl.dismiss();
                            }
                            this.navCtrl.navigateBack('/');
                        }
                    },
                    {
                        text: 'Đăng nhập',
                        role: 'OK',
                        handler: () => {
                            this.storage.remove('auth_token');
                            this.storage.remove('email');
                            this.storage.remove('username');
                            this.storage.remove('jti');
                            this.storage.remove('userInfoData');
                            this.storage.remove('userRewardData');
                            this.storage.remove('point');
                            this.storage.remove('infocus');
                            this.zone.run(() => {
                                this.valueGlobal.countNotifi = 0;
                            });
                            if (this.modalCtrl) {
                                this.modalCtrl.dismiss();
                            }
                            this.navCtrl.navigateForward('/login');
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    doRefresh(event) {
        var se = this;
        se.loadUserNotification();
        setTimeout(() => {
            event.target.complete();
        }, 1500);
    }
    onSwipe(event) {
        debugger;
    }
    doInfinite(infiniteScroll) {
        this.zone.run(() => {
            this.pageIndex += 1;
            this.loadUserNotification();
            infiniteScroll.target.complete();
        });
    }
    refreshToken() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlMobile + '/api/Account/reloadTokenClaims',
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                };
                requestretry__WEBPACK_IMPORTED_MODULE_7__(options, function (error, response, body) {
                    if (error) {
                        error.page = "tab4";
                        error.func = "refreshToken";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(error, response);
                    }
                    else {
                        var json = JSON.parse(body);
                        if (json.auth_token) {
                            se.storage.remove('auth_token');
                            se.storage.set("auth_token", json.auth_token);
                            se.loadUserNotification();
                        }
                    }
                });
            }
        });
    }
};
FlightnotifyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flightnotify',
        template: __webpack_require__(/*! ./flightnotify.page.html */ "./src/app/flightnotify/flightnotify.page.html"),
        styles: [__webpack_require__(/*! ./flightnotify.page.scss */ "./src/app/flightnotify/flightnotify.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__["GlobalFunction"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_10__["flightService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_5__["Badge"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_9__["ValueGlobal"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], FlightnotifyPage);



/***/ }),

/***/ "./src/app/flighttopdeal/flighttopdeal.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/flighttopdeal/flighttopdeal.module.ts ***!
  \*******************************************************/
/*! exports provided: FlighttopdealPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlighttopdealPageModule", function() { return FlighttopdealPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flighttopdeal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flighttopdeal.page */ "./src/app/flighttopdeal/flighttopdeal.page.ts");






let FlighttopdealPageModule = class FlighttopdealPageModule {
};
FlighttopdealPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        declarations: [_flighttopdeal_page__WEBPACK_IMPORTED_MODULE_5__["FlighttopdealPage"]],
        exports: [_flighttopdeal_page__WEBPACK_IMPORTED_MODULE_5__["FlighttopdealPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FlighttopdealPageModule);



/***/ }),

/***/ "./src/app/flighttopdeal/flighttopdeal.page.html":
/*!*******************************************************!*\
  !*** ./src/app/flighttopdeal/flighttopdeal.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flighttopdeal-section\">\n    <div class=\"title-padding\">\n        <ion-label class=\"text-title2\">\n          Khuyến mãi và ưu đãi \n        </ion-label>\n      </div>\n\n      <div class=\"sub-title\">\n        <ion-label class=\"text-subtitle\">\n          Tận hưởng ưu đãi - Trải nghiệm thoải mái\n        </ion-label>\n      </div>\n\n      <div class=\"innerdeals1 slide2-scroll\">\n      <div (click)=\"itemclickht(slide)\"\n          class=\"cls-deal\" *ngFor=\"let slide of listflighttopdeal\">\n          <img class=\"slide2 img\" [src]=\"slide.linkImage\" />\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/flighttopdeal/flighttopdeal.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/flighttopdeal/flighttopdeal.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flighttopdeal-section .title-padding {\n  padding: 38px 0px 0px 0px;\n  padding-right: 16px !important;\n}\n.flighttopdeal-section .sub-title {\n  font-size: 12px;\n  font-weight: 300;\n  letter-spacing: -0.34px;\n  color: #333333;\n}\n.flighttopdeal-section .text-title2 {\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 1.5;\n  color: #222222;\n}\n.flighttopdeal-section .div-seemore {\n  margin-top: 5px;\n  text-align: right;\n  float: right;\n  color: #26bed6;\n}\n.flighttopdeal-section .innerdeals1 {\n  height: 100%;\n  width: 100%;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  margin-top: 16px;\n}\n.flighttopdeal-section .innerdeals1 div {\n  display: table-cell;\n}\n.flighttopdeal-section .innerdeals1 .cls-deal {\n  padding-left: 16px;\n  position: relative;\n}\n.flighttopdeal-section .innerdeals1 .cls-deal .float-info {\n  position: absolute;\n  bottom: 8px;\n  left: 16px;\n  z-index: 11;\n}\n.flighttopdeal-section .innerdeals1 .cls-deal .float-info p {\n  margin: 0;\n}\n.flighttopdeal-section .innerdeals1 .cls-deal .hotel-name {\n  font-size: 16px;\n  margin: 0;\n  text-align: left;\n  font-weight: bold;\n  white-space: nowrap;\n  width: 260px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #fff;\n}\n.flighttopdeal-section .innerdeals1 .cls-deal:first-child {\n  padding-left: 0;\n}\n.flighttopdeal-section .innerdeals1 .grad1 {\n  position: absolute;\n  width: 272px;\n  height: 80px;\n  /* For browsers that do not support gradients */\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));\n  z-index: 10;\n  bottom: 4px;\n  left: 8px;\n  border-radius: 6px;\n  opacity: 0.5;\n}\n.flighttopdeal-section .innerdeals1 .cls-deal:last-child {\n  padding-right: 16px !important;\n}\n.flighttopdeal-section .innerdeals1 .slide2 {\n  min-width: 272px;\n  height: 356px;\n}\n.flighttopdeal-section .innerdeals1 .img {\n  border-radius: 5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.flighttopdeal-section .innerdeals1 .slide2-scroll {\n  height: 356px;\n  margin-left: -19px;\n  margin-top: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2ZsaWdodHRvcGRlYWwvZmxpZ2h0dG9wZGVhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZsaWdodHRvcGRlYWwvZmxpZ2h0dG9wZGVhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSx5QkFBQTtFQUNBLDhCQUFBO0FDRFI7QURJTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0ZSO0FES0k7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNKUjtBRE1JO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNKUjtBRE9JO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNMUjtBRE9RO0VBQ0UsbUJBQUE7QUNMVjtBRFFRO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ05aO0FEUVk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ05oQjtBRFFnQjtFQUNJLFNBQUE7QUNOcEI7QURVYztFQUVNLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDVHBCO0FEYVE7RUFDSSxlQUFBO0FDWFo7QURjUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFBYywrQ0FBQTtFQUNkLDRFQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0FDWlo7QURlVTtFQUNFLDhCQUFBO0FDYlo7QURnQlU7RUFFRSxnQkFBQTtFQUNBLGFBQUE7QUNmWjtBRGtCWTtFQUVBLGtCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ2pCWjtBRG9CWTtFQUVJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDbkJoQiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHRvcGRlYWwvZmxpZ2h0dG9wZGVhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxpZ2h0dG9wZGVhbC1zZWN0aW9ue1xuXG4gICAgLnRpdGxlLXBhZGRpbmd7XG4gICAgICAgIHBhZGRpbmc6IDM4cHggMHB4IDBweCAwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6MTZweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICBcbiAgICAgIC5zdWItdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgfVxuXG4gICAgLnRleHQtdGl0bGUyXG4gICAge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIH1cbiAgICAuZGl2LXNlZW1vcmV7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgY29sb3I6ICMyNmJlZDZcbiAgICB9XG5cbiAgICAuaW5uZXJkZWFsczF7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuXG4gICAgICAgIGRpdntcbiAgICAgICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XG4gICAgICAgIH1cblxuICAgICAgICAuY2xzLWRlYWx7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgIC5mbG9hdC1pbmZve1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDhweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxNnB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDExO1xuXG4gICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5ob3RlbC1uYW1lXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI2MHB4O1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY2xzLWRlYWw6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JhZDEge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgICAgIHdpZHRoOiAyNzJweDtcbiAgICAgICAgICAgIGhlaWdodDogODBweDsgLyogRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzICovXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICBib3R0b206NHB4O1xuICAgICAgICAgICAgbGVmdDogOHB4O1xuICAgICAgICAgICAgLy9vcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBvcGFjaXR5OjAuNTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2xzLWRlYWw6bGFzdC1jaGlsZHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2xpZGUyXG4gICAgICAgICAge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyNzJweDtcbiAgICAgICAgICAgIGhlaWdodDogMzU2cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbWcgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNsaWRlMi1zY3JvbGxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTE5cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgICAgICAgICAgLy8gQG1lZGlhIChtaW4td2lkdGg6MzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgICAgICAgICAgICAgIC8vICAgICBoZWlnaHQ6IDMyMHB4O1xuICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgLy8gQG1lZGlhIChtaW4td2lkdGg6MzYwcHgpIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICAgICAgICAgICAgICAgIC8vICAgICBoZWlnaHQ6IDMyMHB4O1xuXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vIEBtZWRpYSAobWluLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtd2lkdGg6IDM4NHB4KSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGhlaWdodDogMzIwcHg7XG5cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgLy8gQG1lZGlhIChtaW4td2lkdGg6IDM4NHB4KSBhbmQgKG1heC13aWR0aDogNDEycHgpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgaGVpZ2h0OiAzMjBweDtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgLy8gQG1lZGlhIChtaW4td2lkdGg6IDQxMnB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgaGVpZ2h0OiAzMjBweDtcblxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAvLyBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgICAgIC8vICAgICBoZWlnaHQ6IDMyMHB4O1xuXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGhlaWdodDogMzIwcHg7XG5cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgLy8gQG1lZGlhIChtaW4td2lkdGg6IDcyMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgaGVpZ2h0OiAzMjBweDtcblxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAvLyBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICAgICAgICAgIC8vICAgICBoZWlnaHQ6IDMzMHB4O1xuXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vIEBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xuICAgICAgICAgICAgICAgIC8vICAgICBoZWlnaHQ6IDU3MHB4O1xuXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgIH1cbn0iLCIuZmxpZ2h0dG9wZGVhbC1zZWN0aW9uIC50aXRsZS1wYWRkaW5nIHtcbiAgcGFkZGluZzogMzhweCAwcHggMHB4IDBweDtcbiAgcGFkZGluZy1yaWdodDogMTZweCAhaW1wb3J0YW50O1xufVxuLmZsaWdodHRvcGRlYWwtc2VjdGlvbiAuc3ViLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4uZmxpZ2h0dG9wZGVhbC1zZWN0aW9uIC50ZXh0LXRpdGxlMiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG4uZmxpZ2h0dG9wZGVhbC1zZWN0aW9uIC5kaXYtc2VlbW9yZSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG4uZmxpZ2h0dG9wZGVhbC1zZWN0aW9uIC5pbm5lcmRlYWxzMSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLmZsaWdodHRvcGRlYWwtc2VjdGlvbiAuaW5uZXJkZWFsczEgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cbi5mbGlnaHR0b3BkZWFsLXNlY3Rpb24gLmlubmVyZGVhbHMxIC5jbHMtZGVhbCB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZsaWdodHRvcGRlYWwtc2VjdGlvbiAuaW5uZXJkZWFsczEgLmNscy1kZWFsIC5mbG9hdC1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDhweDtcbiAgbGVmdDogMTZweDtcbiAgei1pbmRleDogMTE7XG59XG4uZmxpZ2h0dG9wZGVhbC1zZWN0aW9uIC5pbm5lcmRlYWxzMSAuY2xzLWRlYWwgLmZsb2F0LWluZm8gcCB7XG4gIG1hcmdpbjogMDtcbn1cbi5mbGlnaHR0b3BkZWFsLXNlY3Rpb24gLmlubmVyZGVhbHMxIC5jbHMtZGVhbCAuaG90ZWwtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDI2MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgY29sb3I6ICNmZmY7XG59XG4uZmxpZ2h0dG9wZGVhbC1zZWN0aW9uIC5pbm5lcmRlYWxzMSAuY2xzLWRlYWw6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4uZmxpZ2h0dG9wZGVhbC1zZWN0aW9uIC5pbm5lcmRlYWxzMSAuZ3JhZDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNzJweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjMpKTtcbiAgei1pbmRleDogMTA7XG4gIGJvdHRvbTogNHB4O1xuICBsZWZ0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3BhY2l0eTogMC41O1xufVxuLmZsaWdodHRvcGRlYWwtc2VjdGlvbiAuaW5uZXJkZWFsczEgLmNscy1kZWFsOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG59XG4uZmxpZ2h0dG9wZGVhbC1zZWN0aW9uIC5pbm5lcmRlYWxzMSAuc2xpZGUyIHtcbiAgbWluLXdpZHRoOiAyNzJweDtcbiAgaGVpZ2h0OiAzNTZweDtcbn1cbi5mbGlnaHR0b3BkZWFsLXNlY3Rpb24gLmlubmVyZGVhbHMxIC5pbWcge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmZsaWdodHRvcGRlYWwtc2VjdGlvbiAuaW5uZXJkZWFsczEgLnNsaWRlMi1zY3JvbGwge1xuICBoZWlnaHQ6IDM1NnB4O1xuICBtYXJnaW4tbGVmdDogLTE5cHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/flighttopdeal/flighttopdeal.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/flighttopdeal/flighttopdeal.page.ts ***!
  \*****************************************************/
/*! exports provided: FlighttopdealPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlighttopdealPage", function() { return FlighttopdealPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var ionic_image_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-image-loader */ "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../providers/flightService */ "./src/app/providers/flightService.ts");










let FlighttopdealPage = class FlighttopdealPage {
    constructor(navCtrl, gf, modalCtrl, toastCtrl, zone, imageLoader, storage, actionsheetCtrl, valueGlobal, _flightService) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.zone = zone;
        this.imageLoader = imageLoader;
        this.storage = storage;
        this.actionsheetCtrl = actionsheetCtrl;
        this.valueGlobal = valueGlobal;
        this._flightService = _flightService;
        this.listflighttopdeal = [];
        this.loadDataFlightTopdeal();
    }
    ngOnInit() {
    }
    loadDataFlightTopdeal() {
        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlFlight + "gate/apiv1/GetSlideHome";
        this.gf.RequestApi("GET", url, {
            "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
            'Content-Type': 'application/json; charset=utf-8'
        }, {}, "homeflight", "GetSlideHome").then((data) => {
            if (data) {
                data.forEach(element => {
                    if (element.version == 2 && element.content) {
                        element.validToText = moment__WEBPACK_IMPORTED_MODULE_7__(element.validTo).format("DD/MM/YYYY");
                        this.listflighttopdeal.push(element);
                    }
                });
            }
        });
    }
    itemclickht(item) {
        this._flightService.itemFlightTopDeal = item;
        this.navCtrl.navigateForward('/flighttopdealdetail');
    }
};
FlighttopdealPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flighttopdeal',
        template: __webpack_require__(/*! ./flighttopdeal.page.html */ "./src/app/flighttopdeal/flighttopdeal.page.html"),
        styles: [__webpack_require__(/*! ./flighttopdeal.page.scss */ "./src/app/flighttopdeal/flighttopdeal.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["GlobalFunction"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        ionic_image_loader__WEBPACK_IMPORTED_MODULE_5__["ImageLoaderService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_8__["ValueGlobal"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_9__["flightService"]])
], FlighttopdealPage);



/***/ }),

/***/ "./src/app/flightuseful/flightuseful.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/flightuseful/flightuseful.module.ts ***!
  \*****************************************************/
/*! exports provided: FlightusefulPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightusefulPageModule", function() { return FlightusefulPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightuseful_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flightuseful.page */ "./src/app/flightuseful/flightuseful.page.ts");






let FlightusefulPageModule = class FlightusefulPageModule {
};
FlightusefulPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        declarations: [_flightuseful_page__WEBPACK_IMPORTED_MODULE_5__["FlightusefulPage"]],
        exports: [_flightuseful_page__WEBPACK_IMPORTED_MODULE_5__["FlightusefulPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FlightusefulPageModule);



/***/ }),

/***/ "./src/app/flightuseful/flightuseful.page.html":
/*!*****************************************************!*\
  !*** ./src/app/flightuseful/flightuseful.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"div-useful-content\" #divuseful>\n  <div class=\"div-useful-title\">\n    <div class=\"title-padding\">\n      <ion-label class=\"text-title2\">\n      Thông tin hữu ích\n      </ion-label>\n    </div>\n\n    <div class=\"sub-title\">\n      <ion-label class=\"text-subtitle\">\n        Có một hành trình hơn cả mong đợi\n      </ion-label>\n    </div>\n  </div>\n    \n\n      <div class=\"item-useful\">\n        <div *ngFor=\"let itemuseful of listUseful\">\n            <div [ngClass]=\"itemuseful.clicked ? 'd-flex has-clicked' : 'd-flex' \" *ngIf=\"!itemuseful.clicked else itemhasclicked\" (click)=\"itemClick(itemuseful)\">\n                <span class=\"p-right-16\">›  <span class=\"text-content\">{{itemuseful.title}}</span></span>\n            </div>\n            <ng-template #itemhasclicked>\n                <div (click)=\"itemClick(itemuseful)\" id=\"{{itemuseful.id}}\">\n                    <div class=\"d-flex \">\n                       <span class=\"p-right-4\"><img src=\"./assets/ic_flight/ic_down_primary.svg\"></span> <span class=\"text-content has-clicked\">{{itemuseful.title}}</span>\n                    </div>\n                    <div class=\"div-useful-show\">\n                        <div [innerHTML]=\"itemuseful.contents\"></div>\n                    </div>\n                </div>\n              \n            </ng-template>\n        </div>\n      </div>\n    \n</div>"

/***/ }),

/***/ "./src/app/flightuseful/flightuseful.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/flightuseful/flightuseful.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d-flex {\n  display: flex;\n}\n\n.p-right-16 {\n  padding-right: 16px;\n}\n\n.p-right-4 {\n  padding-right: 4px;\n}\n\n.div-useful-content .item-useful {\n  border-radius: 4px;\n  background-color: #ffffff;\n  padding: 8px;\n  margin-top: 12px;\n  margin-bottom: 68px;\n}\n\n.div-useful-content .item-useful .text-content {\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 2;\n  color: #333333;\n}\n\n.div-useful-content .div-useful-show {\n  border-radius: 4px;\n  background-color: rgba(242, 242, 242, 0.5);\n  padding: 8px;\n  margin-top: 11px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 2;\n  color: #333333;\n}\n\n.div-useful-content .title-padding {\n  padding: 38px 0px 0px 0px;\n  padding-right: 16px !important;\n}\n\n.div-useful-content .sub-title {\n  font-size: 12px;\n  font-weight: 300;\n  letter-spacing: -0.34px;\n  color: #333333;\n}\n\n.div-useful-content .text-title2 {\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 1.5;\n  color: #222222;\n}\n\n.div-useful-content .has-clicked {\n  font-weight: 500 !important;\n  color: #003c71 !important;\n}\n\n.div-useful-title.cls-topdeal-float .title-padding {\n  padding-top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2ZsaWdodHVzZWZ1bC9mbGlnaHR1c2VmdWwucGFnZS5zY3NzIiwic3JjL2FwcC9mbGlnaHR1c2VmdWwvZmxpZ2h0dXNlZnVsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURDQTtFQUNJLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtBQ0dKOztBRENRO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRVo7O0FEQVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0VoQjs7QURFUTtFQUNJLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0RaOztBRElJO0VBQ0kseUJBQUE7RUFDQSw4QkFBQTtBQ0ZSOztBREtNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDSFI7O0FETUk7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNMUjs7QURRSTtFQUNJLDJCQUFBO0VBQ0EseUJBQUE7QUNOUjs7QURhQTtFQUNJLDJCQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9mbGlnaHR1c2VmdWwvZmxpZ2h0dXNlZnVsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kLWZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5wLXJpZ2h0LTE2e1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG4ucC1yaWdodC00e1xuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcbn1cbi5kaXYtdXNlZnVsLWNvbnRlbnR7XG4gICBcbiAgICAgICAgLml0ZW0tdXNlZnVse1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2OHB4O1xuXG4gICAgICAgICAgICAudGV4dC1jb250ZW50e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5kaXYtdXNlZnVsLXNob3d7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MiwyNDIsMjQyLCAwLjUpO1xuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTFweDtcblxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIH1cbiAgICBcbiAgICAudGl0bGUtcGFkZGluZ3tcbiAgICAgICAgcGFkZGluZzogMzhweCAwcHggMHB4IDBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDoxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gIFxuICAgICAgLnN1Yi10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICB9XG5cbiAgICAudGV4dC10aXRsZTJcbiAgICB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgfVxuXG4gICAgLmhhcy1jbGlja2Vke1xuICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjMDAzYzcxICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgXG59XG5cblxuLmRpdi11c2VmdWwtdGl0bGUuY2xzLXRvcGRlYWwtZmxvYXQgLnRpdGxlLXBhZGRpbmd7XG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICB9IiwiLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wLXJpZ2h0LTE2IHtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuLnAtcmlnaHQtNCB7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbn1cblxuLmRpdi11c2VmdWwtY29udGVudCAuaXRlbS11c2VmdWwge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogNjhweDtcbn1cbi5kaXYtdXNlZnVsLWNvbnRlbnQgLml0ZW0tdXNlZnVsIC50ZXh0LWNvbnRlbnQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBjb2xvcjogIzMzMzMzMztcbn1cbi5kaXYtdXNlZnVsLWNvbnRlbnQgLmRpdi11c2VmdWwtc2hvdyB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDI0MiwgMjQyLCAwLjUpO1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbi10b3A6IDExcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLmRpdi11c2VmdWwtY29udGVudCAudGl0bGUtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDM4cHggMHB4IDBweCAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHggIWltcG9ydGFudDtcbn1cbi5kaXYtdXNlZnVsLWNvbnRlbnQgLnN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLmRpdi11c2VmdWwtY29udGVudCAudGV4dC10aXRsZTIge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuLmRpdi11c2VmdWwtY29udGVudCAuaGFzLWNsaWNrZWQge1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAzYzcxICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtdXNlZnVsLXRpdGxlLmNscy10b3BkZWFsLWZsb2F0IC50aXRsZS1wYWRkaW5nIHtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/flightuseful/flightuseful.page.ts":
/*!***************************************************!*\
  !*** ./src/app/flightuseful/flightuseful.page.ts ***!
  \***************************************************/
/*! exports provided: FlightusefulPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightusefulPage", function() { return FlightusefulPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../providers/flightService */ "./src/app/providers/flightService.ts");









let FlightusefulPage = class FlightusefulPage {
    constructor(navCtrl, gf, zone, storage, valueGlobal, _flightService) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.zone = zone;
        this.storage = storage;
        this.valueGlobal = valueGlobal;
        this._flightService = _flightService;
        this.loadDataFlightUseful();
    }
    ngOnInit() {
    }
    loadDataFlightUseful() {
        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFlight + "gate/apiv1/GetUsefulHome";
        this.gf.RequestApi("GET", url, {
            "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
            'Content-Type': 'application/json; charset=utf-8'
        }, {}, "homeflight", "GetUsefulHome").then((data) => {
            if (data) {
                this.listUseful = data;
            }
        });
    }
    itemClick(item) {
        if (this.itemclick && this.itemclick.id == item.id) {
            this.itemclick = item;
        }
        else {
            this.itemclick = item;
            for (let index = 0; index < this.listUseful.length; index++) {
                const element = this.listUseful[index];
                element.clicked = false;
            }
        }
        if (item.clicked) {
            item.clicked = false;
        }
        else {
            item.clicked = true;
            setTimeout(() => {
                this._flightService.itemUseFulClick.emit(parseInt(jquery__WEBPACK_IMPORTED_MODULE_4__("#" + item.id)[0].offsetTop) - 70);
            }, 10);
        }
    }
};
FlightusefulPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flightuseful',
        template: __webpack_require__(/*! ./flightuseful.page.html */ "./src/app/flightuseful/flightuseful.page.html"),
        styles: [__webpack_require__(/*! ./flightuseful.page.scss */ "./src/app/flightuseful/flightuseful.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["GlobalFunction"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_7__["ValueGlobal"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_8__["flightService"]])
], FlightusefulPage);



/***/ }),

/***/ "./src/app/homeflight/homeflight.module.ts":
/*!*************************************************!*\
  !*** ./src/app/homeflight/homeflight.module.ts ***!
  \*************************************************/
/*! exports provided: HomeflightPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeflightPageModule", function() { return HomeflightPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _homeflight_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homeflight.page */ "./src/app/homeflight/homeflight.page.ts");
/* harmony import */ var _flightmytrip_flightmytrip_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../flightmytrip/flightmytrip.module */ "./src/app/flightmytrip/flightmytrip.module.ts");
/* harmony import */ var _flightnotify_flightnotify_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../flightnotify/flightnotify.module */ "./src/app/flightnotify/flightnotify.module.ts");
/* harmony import */ var _flightaccount_flightaccount_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../flightaccount/flightaccount.module */ "./src/app/flightaccount/flightaccount.module.ts");
/* harmony import */ var _flighttopdeal_flighttopdeal_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../flighttopdeal/flighttopdeal.module */ "./src/app/flighttopdeal/flighttopdeal.module.ts");
/* harmony import */ var _flightuseful_flightuseful_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../flightuseful/flightuseful.module */ "./src/app/flightuseful/flightuseful.module.ts");
/* harmony import */ var _order_order_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../order/order.module */ "./src/app/order/order.module.ts");
/* harmony import */ var _bizTravel_booking_booking_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../bizTravel/booking/booking.module */ "./src/app/bizTravel/booking/booking.module.ts");













let HomeflightPageModule = class HomeflightPageModule {
};
HomeflightPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _flightmytrip_flightmytrip_module__WEBPACK_IMPORTED_MODULE_6__["FlightmytripPageModule"],
            _flightnotify_flightnotify_module__WEBPACK_IMPORTED_MODULE_7__["FlightnotifyPageModule"],
            _flightaccount_flightaccount_module__WEBPACK_IMPORTED_MODULE_8__["FlightaccountPageModule"],
            _flighttopdeal_flighttopdeal_module__WEBPACK_IMPORTED_MODULE_9__["FlighttopdealPageModule"],
            _flightuseful_flightuseful_module__WEBPACK_IMPORTED_MODULE_10__["FlightusefulPageModule"],
            _order_order_module__WEBPACK_IMPORTED_MODULE_11__["OrderPageModule"],
            _bizTravel_booking_booking_module__WEBPACK_IMPORTED_MODULE_12__["BookingPageModule"]
        ],
        declarations: [_homeflight_page__WEBPACK_IMPORTED_MODULE_5__["HomeflightPage"]],
        exports: [_homeflight_page__WEBPACK_IMPORTED_MODULE_5__["HomeflightPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], HomeflightPageModule);



/***/ }),

/***/ "./src/app/homeflight/homeflight.page.html":
/*!*************************************************!*\
  !*** ./src/app/homeflight/homeflight.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"div-flight-content\" *ngIf=\"flightTabActive == 1\">\n    <!-- <div [ngClass]=\"isNotice ? 'background mb50' : 'background'\"> -->\n        <div class=\"background\">\n        <!-- <img [ngClass]=\"isNotice ? 'img-background-notice' : 'img-background'\"  src=\"./assets/ic_flight/flight_bg.jpg\"> -->\n        <img class=\"img-background\" src=\"./assets/ic_flight/flight_bg.jpg\">\n        <div class=\"div-wrap-background\"></div>\n        <div class=\"text-center\">\n            <img class=\"img-logo\" src=\"./assets/logo/logo.svg\" />\n        </div>\n        <div class=\"padding div-wrap-content\">\n            <!-- <div [ngClass]=\"isNotice ? 'text-home-hotel-notice' : 'text-home-hotel'\"  > -->\n                <div class=\"text-home-hotel\"  >\n                <label class=\"label-home-hotel\">\n                    Lựa chọn thông minh - Hành trình như ý\n                </label>\n            </div>\n            <div class=\"div-wrap-search-input\"></div>\n            <div class=\"div-direction\">\n                <ion-row>\n                    <ion-list class=\"div-list-flighttype\">\n                        <ion-radio-group name=\"rdgroup\" class=\"list-flighttype d-flex\" [(ngModel)]=\"flighttype\" mode=\"md\">\n                            <div class=\"div-twoway d-flex rd-active\">\n                                <ion-radio style=\"--color-checked:#fff;width: 19px; height: 19px;--border-width: 0.5px;\" value=\"twoway\" class=\"rd-departure\" (click)=\"radioCheck(1)\" checked=\"true\" mode=\"md\"></ion-radio>\n                                <div class=\"rd-text\" (click)=\"radioCheck(1)\">Khứ hồi</div>\n                            </div>\n                               <div class=\"div-oneway d-flex\">\n                                <ion-radio value=\"oneway\" class=\"rd-departure\" style=\"padding-left:32px;width: 47px; height: 19px;--color-checked:#fff;--border-width: 0.5px;\" (click)=\"radioCheck(2)\" mode=\"md\"></ion-radio>\n                                <div class=\"rd-text\" (click)=\"radioCheck(2)\">Một chiều</div>\n                               </div>\n                                \n                        </ion-radio-group>\n                        \n                </ion-list>\n                </ion-row>\n                \n            </div>\n\n            <ion-row class=\"row-flight m-top-16\">\n                <div class=\"div-width div-relative\">\n                    <div class=\"img-input\"  (click)=\"searchFlight(1)\">\n                        <img class=\"img-padding img-location\" src=\"./assets/ic_flight/flight_cin.svg\"/>\n                    </div>\n\n                    <div class=\"div-input-right text-input-flight div-flex-center \" *ngIf=\"departCode else choiceDepartCode\"  (click)=\"searchFlight(1)\">\n                        <div class=\"text-location div-departcode\">{{departCity}}<span class=\"text-code\">{{departCode}}</span></div>\n                        <div class=\"text-location-desc div-departcode\">{{departAirport}}</div>\n                    </div>\n                    <ng-template #choiceDepartCode>\n                        <div class=\"div-input-right text-input-flight div-flex-center\" (click)=\"searchFlight(1)\">\n                            <div class=\"text-code-empty f-14\">\n                                Chọn nơi khởi hành\n                            </div>\n                        </div>\n                    </ng-template>\n\n                    <div class=\"div-switch\" (click)=\"switchDepart()\" *ngIf=\"departCode && returnCode\">\n                        <img class=\"img-switch\" src=\"./assets/ic_flight/ic_switch.svg\">\n                    </div>\n                </div>\n            </ion-row>\n\n            <ion-row class=\"row-flight\">\n                <div class=\"div-width\">\n                    <div class=\"img-input\"  (click)=\"searchFlight(2)\">\n                        <img class=\"img-padding img-location\" src=\"./assets/ic_flight/flight_cout.svg\"/>\n                    </div>\n\n                    <div class=\"div-input-right text-input-flight div-flex-center\" *ngIf=\"returnCode else choiceReturnCode\"  (click)=\"searchFlight(2)\">\n                        <div class=\"text-location div-returncode\">{{returnCity}}<span class=\"text-code\">{{returnCode}}</span></div>\n                        <div class=\"text-location-desc div-returncode\">{{returnAirport}}</div>\n                    </div>\n                    <ng-template #choiceReturnCode>\n                        <div class=\"div-input-right text-input-flight div-flex-center\"  (click)=\"searchFlight(2)\">\n                            <div class=\"text-code-empty f-14\">\n                                Chọn nơi đến\n                            </div>\n                        </div>\n                    </ng-template>\n                </div>\n            </ion-row>\n\n            <div>\n                <ion-row class=\"row-cin-cout\" (click)=\"openPickupCalendar()\">\n                    <div class=\"div-width\">\n                        <div class=\"div-cin\">\n                            <div class=\"img-cin-cout\">\n                                <img class=\"img-padding img-checkin\" src=\"./assets/iocnsearch/ic_checkin.svg\"/>\n                            </div>\n                            <div class=\"div-input-right text-input-cin div-flex-center\">\n                                <div class=\"text-cin\">\n                                    <label class=\"text-cin-input\">{{ cindisplaymonth }}</label>\n                                </div>\n                                <div class=\"font-thu\" *ngIf=\"cofdate==0\">\n                                    <label class=\"text-color text-cinthu\">{{ cinthu }}</label>\n                                </div>\n                                <div class=\"font-thu\" *ngIf=\"cofdate==1\">\n                                    <label class=\"text-color text-cinthu text-red\">{{cinthu}}</label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"div-cout\" [ngClass]=\"flighttype == 'twoway' ? '' : 'div-hidden'\">\n                            <div class=\"img-cin-cout p-top-12\">\n                                <!-- <img class=\"img-padding img-checkout\" src=\"./assets/iocnsearch/ic_checkout.svg\"/> -->\n                                <img class=\"img-padding img-checkout\" src=\"./assets/ic_flight/icon_arrow_gray.svg\">\n                            </div>\n                            <div class=\"div-input-right text-input-cout div-flex-center\">\n                                <div class=\"text-cin\">\n                                    <label class=\"text-cin-input\">{{ coutdisplaymonth }}</label>\n                                </div>\n                                <div class=\"font-thu\">\n                                    <label *ngIf=\"cotdate==0\" class=\"text-color text-cinthu\">{{coutthu}}</label>\n                                    <label *ngIf=\"cotdate==1\" class=\"text-color text-cinthu text-red\">{{coutthu}}</label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </ion-row>\n\n                <ion-row class=\"row-pax\" (click)=\"choicePax()\">\n                    <div class=\"div-width\">\n                        <div class=\"img-cin-cout\">\n                            <img class=\"img-padding img-people\" src=\"./assets/iocnsearch/ic_people.svg\"/>\n                        </div>\n\n                        <div class=\"div-input-right div-flex-center\">\n                            <div class=\"text-pax\">\n                                <div class=\"div-adult\">{{ adult }} người lớn<span *ngIf=\"child\">, {{ child }}  trẻ em</span><span *ngIf=\"infant\">, {{ infant }} em bé</span></div>\n                                <!-- <div class=\"div-child text-color\">{{ child }} trẻ em, {{ infant }} trẻ sơ sinh</div> -->\n                            </div>\n                        </div>\n                    </div>\n                </ion-row>\n\n                <ion-row>\n                    <button ion-button round (click)=\"search()\" class=\"button btn-search\" clear>\n                        Tìm kiếm\n                    </button>\n                </ion-row>\n            </div>\n\n            \n\n            \n            \n        </div>\n    </div>\n    <div class=\"div-topdeal\">\n        <app-flighttopdeal></app-flighttopdeal>\n    </div>\n    \n\n    <div [ngClass]=\"(myflight && myflight.departCity && myflight.returnCity) ? 'div-topdeal-flight' : 'div-topdeal-flight'\" *ngIf=\"listflighttopdeal && listflighttopdeal.length >0\">\n        \n        <div *ngIf=\"myflight && myflight.departCity && myflight.returnCity\" (click)=\"showMyFlight()\">\n            <div class=\"div-text-yourflight\">\n                Chuyến bay của bạn\n            </div>\n            <div class=\"div-content-yourflight\">\n                <div class=\"d-flex\">\n                    <div class=\"text-flight-title div-width-250 d-flex\">\n                        <div>\n                            <div>{{ myflight.departCity }} </div>\n                            <div class=\"text-flight-datetime\">{{ myflight.checkInDisplayMonth }} </div>\n                        </div>\n                        <div class=\"div-flight-inout\">\n                            <img class=\"img-flight-inout\" src=\"./assets/ic_flight/ic_flight_inout.svg\" *ngIf=\"myflight.roundTrip else oneway\">\n                            <ng-template #oneway><img class=\"img-flight-inout img-oneway\" src=\"./assets/imgs/ic_arrow.svg\"></ng-template>\n                        </div> \n                        <div>\n                            <div>{{ myflight.returnCity }} </div>\n                            <div class=\"text-flight-datetime\" *ngIf=\"myflight.roundTrip\">{{ myflight.checkOutDisplayMonth }} </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"div-flight-topdeal p-top-32\">\n            <div class=\"title-topdeal\">Giá vé tốt nhất hiện tại</div>\n            <div class=\"subtitle-topdeal m-bottom-16\">Giá tốt hôm nay chớ để ngày mai</div>\n        </div>\n            \n            <div [ngClass]=\"dx == listflighttopdeal.length-1? 'div-item-flight':'div-item-flight m-bottom-16'\" *ngFor=\"let itemdeal of listflighttopdeal; let idx = index\" (click)=\"select(itemdeal)\">\n                <div class=\"div-first d-flex\">\n    \n                    <div class=\"text-flight-title div-width-600 d-flex\">\n                        <div>\n                            <div>{{ itemdeal.fromPlaceName }} </div>\n                            <div class=\"text-flight-datetime\">{{ itemdeal.dateDepartDisplay }} </div>\n                        </div>\n                        <div class=\"div-flight-inout\">\n                            <img class=\"img-flight-inout\" src=\"./assets/ic_flight/ic_flight_inout.svg\" *ngIf=\"itemdeal.roundTrip else oneway\">\n                            <ng-template #oneway><img class=\"img-flight-inout img-oneway\" src=\"../assets/imgs/ic_arrow.svg\"></ng-template>\n                        </div> \n                        <div>\n                            <div>{{ itemdeal.toPlaceNameDisplay }} </div>\n                            <div class=\"text-flight-datetime\">{{ itemdeal.dateReturnDisplay }} </div>\n                        </div>\n                    </div>\n                  \n                    <div class=\"div-logo div-width-100 text-right\">\n                        <img class=\"img-logo\" *ngIf=\"itemdeal.depart.airCode == 'VietJetAir'\" src=\"./assets/ic_airticket/ic_vietjet_b.png\">\n                        <img class=\"img-logo\" *ngIf=\"itemdeal.depart.airCode == 'JetStar'\" src=\"./assets/ic_airticket/ic_jetstar_b.png\">\n                        <img class=\"img-logo logo-vna\" *ngIf=\"itemdeal.depart.airCode == 'VietnamAirlines'\"src=\"./assets/ic_airticket/logo_vna.png\">\n                        <img class=\"img-logo\" *ngIf=\"itemdeal.depart.airCode == 'BambooAirways'\" src=\"./assets/ic_airticket/ic_bamboo_b.png\">\n                    </div>\n      \n                </div>\n                <div class=\"div-date m-top-4 div-width-250\">\n                </div>\n      \n                <div class=\"div-second d-flex p-top-8 m-bottom-16\">\n                    <div class=\"flight-price\">{{itemdeal.priceDisplay}} <span class=\"text-sub-price\">đ</span></div> \n                    <div class=\"div-button\">\n                        <button ion-button round (click)=\"select(itemdeal)\" class=\"button btn-select\" clear>\n                        Xem\n                        </button>\n                    </div>\n                </div>\n              \n            </div>\n    </div>\n\n    <div class=\"div-useful\">\n        <app-flightuseful></app-flightuseful>\n    </div>\n</div>\n\n<div class=\"div-flight-trip\" *ngIf=\"flightTabActive == 2\">\n    <!-- <app-flightmytrip></app-flightmytrip> -->\n    <app-order *ngIf=\"!isBizAccount else bookings\"></app-order>\n    <ng-template #bookings>\n        <app-booking></app-booking>\n    </ng-template>\n    \n</div>\n\n<div class=\"div-flight-notify\" *ngIf=\"flightTabActive == 3\">\n    <app-flightnotify></app-flightnotify>\n  </div>\n\n  <div class=\"div-flight-account\" *ngIf=\"flightTabActive == 4\">\n    <app-flightaccount></app-flightaccount>\n  </div>"

/***/ }),

/***/ "./src/app/homeflight/homeflight.page.scss":
/*!*************************************************!*\
  !*** ./src/app/homeflight/homeflight.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div-flight-content .d-flex {\n  display: flex;\n}\n.div-flight-content .m-offset-top-104 {\n  margin-top: -104px;\n}\n.div-flight-content .p-top-4 {\n  padding-top: 4px;\n}\n.div-flight-content .p-top-12 {\n  padding-top: 12px !important;\n}\n.div-flight-content .m-top-16 {\n  margin-top: 16px !important;\n}\n.div-flight-content .div-hidden {\n  visibility: hidden;\n}\n.div-flight-content .background {\n  height: calc(env(safe-area-inset-top) + 582px);\n  position: relative;\n  z-index: 0;\n}\n.div-flight-content .background .div-wrap-search-input {\n  position: absolute;\n  margin: -8px;\n  padding: 8px;\n  opacity: 0.4;\n  border-radius: 4px;\n  background-color: #222222;\n  z-index: -1;\n  width: 95.8%;\n  height: 370px;\n  margin-top: -34px;\n}\n.div-flight-content .background .img-background {\n  width: 100% !important;\n  height: calc(env(safe-area-inset-top) + 582px);\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n  z-index: -1;\n}\n.div-flight-content .background .img-background-notice {\n  width: 100% !important;\n  height: calc(env(safe-area-inset-top) + 657px);\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n  z-index: 0;\n}\n.div-flight-content .background .div-wrap-content {\n  z-index: 1;\n  position: absolute;\n  width: 100%;\n}\n.div-flight-content .background .f-14 {\n  font-size: 14px;\n}\n.div-flight-content .background .div-relative {\n  position: relative;\n}\n.div-flight-content .background .div-switch {\n  position: absolute;\n  right: 12px;\n  top: 34px;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border: solid 0.5px #fff;\n  background: #26bed6;\n  border-radius: 36px;\n}\n.div-flight-content .background .div-switch .img-switch {\n  width: 36px;\n  height: 36px;\n}\n.div-flight-content .background .div-direction {\n  margin-top: 12px;\n}\n.div-flight-content .background .div-direction .rd-active {\n  opacity: 1 !important;\n}\n.div-flight-content .background .div-direction .div-twoway, .div-flight-content .background .div-direction .div-oneway {\n  opacity: 0.7;\n}\n.div-flight-content .background .div-direction .list-departure {\n  margin: 2;\n  display: inline-flex;\n}\n.div-flight-content .background .div-direction .rd-departure {\n  padding: 4px;\n  margin-left: -4px;\n}\n.div-flight-content .background .div-direction .rd-departure .radio-icon {\n  width: 12px;\n  height: 12px;\n}\n.div-flight-content .background .div-direction .rd-text {\n  padding-left: 4px;\n  padding-top: 1px;\n  font-size: 16px;\n  font-weight: 300;\n}\n.div-flight-content .background .div-direction .radio-md .radio-inner {\n  left: 1px;\n  top: 1px;\n  width: 6px;\n  height: 6px;\n}\n.div-flight-content .background .div-direction .div-list-flighttype {\n  margin-bottom: 0;\n  background: none;\n  color: #fff;\n}\n.div-flight-content .background .img-logo {\n  width: 76px;\n  margin-top: calc(env(safe-area-inset-top) + 22px);\n  z-index: 10;\n  position: relative;\n}\n.div-flight-content .background .text-center {\n  text-align: center;\n}\n.div-flight-content .background .padding {\n  padding: 16px;\n}\n.div-flight-content .background .padding .text-home-hotel {\n  margin-top: 116px;\n}\n.div-flight-content .background .padding .text-home-hotel .label-home-hotel {\n  color: #ffffff;\n  font-size: 17px;\n  line-height: 23px;\n  font-weight: 600;\n  letter-spacing: -0.34px;\n}\n.div-flight-content .background .padding .text-home-hotel-notice {\n  margin-top: 185px;\n}\n.div-flight-content .background .padding .text-home-hotel-notice .label-home-hotel {\n  color: #ffffff;\n  font-size: 17px;\n  line-height: 23px;\n  font-weight: 600;\n  letter-spacing: -0.34px;\n}\n.div-flight-content .background .padding .div-width {\n  width: 100%;\n}\n.div-flight-content .background .padding .text-code {\n  padding-left: 4px;\n  color: #828282;\n}\n.div-flight-content .background .padding .text-code-empty {\n  color: #828282;\n}\n.div-flight-content .background .padding .row-flight {\n  background: #ffffff;\n  border-radius: 2px;\n  height: 48px;\n  margin-top: 8px;\n}\n.div-flight-content .background .padding .row-flight .img-input {\n  height: 48px;\n  margin-top: 14px;\n  margin-left: 16px;\n  width: 50px;\n  position: absolute;\n}\n.div-flight-content .background .padding .row-cin-cout {\n  background: #ffffff;\n  border-radius: 2px;\n  height: 48px;\n  margin-top: 8px;\n}\n.div-flight-content .background .padding .row-cin-cout .div-cin {\n  position: absolute;\n  width: 46%;\n  height: 48px;\n}\n.div-flight-content .background .padding .row-cin-cout .img-checkin, .div-flight-content .background .padding .row-cin-cout .img-people {\n  width: 16px;\n  height: 16px;\n}\n.div-flight-content .background .padding .row-cin-cout .img-checkout {\n  width: 16px;\n  height: 10px;\n}\n.div-flight-content .background .padding .div-input-right {\n  margin-left: 51px;\n}\n.div-flight-content .background .padding .img-cin-cout {\n  padding: 16px 20px 16px 17px;\n  position: absolute;\n}\n.div-flight-content .background .padding .row-pax {\n  background: #ffffff;\n  border-radius: 2px;\n  margin-top: 8px;\n  height: 48px;\n}\n.div-flight-content .background .padding .text-input-flight {\n  font-weight: 300;\n  margin-left: 51px;\n}\n.div-flight-content .background .padding .text-location {\n  font-size: 16px;\n}\n.div-flight-content .background .padding .text-location-desc {\n  font-size: 12px;\n  color: #828282;\n}\n.div-flight-content .background .padding .text-input-search {\n  margin: 0px 0 14px 51px;\n}\n.div-flight-content .background .padding .text-input-search-wraptext {\n  margin: 4px 0 14px 51px;\n}\n.div-flight-content .background .padding .text-middle {\n  display: table-cell;\n  vertical-align: middle;\n  height: 48px;\n}\n.div-flight-content .background .padding .text-cin, .div-flight-content .background .padding .text-pax {\n  font-size: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #333333;\n  letter-spacing: -0.34px;\n  font-weight: 300;\n}\n.div-flight-content .background .padding .text-color {\n  color: #828282;\n}\n.div-flight-content .background .padding .text-red {\n  color: #e52822;\n}\n.div-flight-content .background .padding .font-thu {\n  margin-top: 1px;\n  font-size: 12px;\n  letter-spacing: -0.34px;\n}\n.div-flight-content .background .padding .div-cout {\n  position: absolute;\n  margin-left: 148px;\n  height: 48px;\n}\n.div-flight-content .background .padding .div-img-coffee {\n  bottom: 40px;\n}\n.div-flight-content .background .padding .img-coffee {\n  height: 32px;\n}\n.div-flight-content .background .padding .div-child {\n  font-size: 12px;\n}\n.div-flight-content .background .padding .btn-search {\n  border-color: #f79221;\n  color: #ffffff;\n  background: #f79221;\n  width: 100%;\n  height: 52px;\n  border-radius: 4px !important;\n  font-size: 18px !important;\n  margin-top: 12px;\n}\n.div-flight-content .background .padding .div-flex-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 48px;\n}\n.div-flight-content .div-text-yourflight {\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: -0.51px;\n  line-height: 1.5;\n  color: #222222;\n  padding-top: 36px;\n}\n.div-flight-content .div-content-yourflight {\n  height: 59px;\n  opacity: 0.9;\n  border-radius: 4px;\n  background: #fff;\n  padding: 8px;\n  margin-top: 8px;\n}\n.div-flight-content .div-content-yourflight .text-flight-title {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n}\n.div-flight-content .div-content-yourflight .text-flight-title .div-flight-inout {\n  padding: 0px 22px;\n  width: 32px;\n  height: 32px;\n  position: relative;\n  margin-left: 12px;\n}\n.div-flight-content .div-content-yourflight .text-flight-title .div-flight-inout .img-flight-inout {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 0;\n  top: -8px;\n}\n.div-flight-content .div-content-yourflight .text-flight-content {\n  font-size: 14px;\n  font-weight: 100;\n  line-height: 1.5;\n}\n.div-flight-content .text-flight-datetime {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n  margin-top: 4px;\n}\n.div-flight-content .div-topdeal {\n  padding-left: 16px;\n  background: #f2f2f2;\n}\n.div-flight-content .div-topdeal-flight {\n  padding: 0 16px;\n  background: #f2f2f2;\n  padding-bottom: 1px;\n}\n.div-flight-content .div-topdeal-flight .title-topdeal {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.5;\n  color: #222222;\n}\n.div-flight-content .div-topdeal-flight .subtitle-topdeal {\n  font-size: 12px;\n  font-weight: 300;\n  letter-spacing: -0.34px;\n  color: #333333;\n}\n.div-flight-content .div-topdeal-flight .div-oneway {\n  width: 12px !important;\n  margin-left: 10px !important;\n  margin-top: 1px !important;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight {\n  width: 100%;\n  height: 126px;\n  border-radius: 3px;\n  background-color: #fff;\n  padding: 16px 8px 0px 8px;\n  justify-content: space-between;\n  display: flex;\n  flex-direction: column;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .text-flight-title {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.51px;\n  color: #000000;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .div-first {\n  position: relative;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .div-first .div-logo {\n  height: 30px;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .div-first .div-logo .img-logo {\n  height: 30px;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .div-first .div-logo .logo-vna {\n  height: 16px;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .div-first .flight-type {\n  width: 110px;\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #4f4f4f;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .flight-price {\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 1.13;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n  height: 34px;\n  padding-top: 11px;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .text-sub-price {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .div-time {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .div-second {\n  margin-top: 8px;\n  position: relative;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .div-second .div-time {\n  width: 110px;\n  font-size: 16px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #494b55;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .div-second .div-flight-time {\n  font-size: 16px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #494b55;\n  padding-left: 8px;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .div-second .div-button {\n  position: absolute;\n  right: 0;\n  text-align: right;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .div-second .div-button .btn-select {\n  width: 66px !important;\n  height: 34px !important;\n  color: #ffffff;\n  background: #f79221;\n  border-radius: 4px !important;\n  font-size: 18px !important;\n  font-size: 14px !important;\n  font-weight: 500 !important;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n}\n.div-flight-content .div-topdeal-flight .div-flight-inout {\n  padding: 0px 18px;\n  width: 32px;\n  height: 32px;\n  position: relative;\n}\n.div-flight-content .div-topdeal-flight .div-flight-inout .img-flight-inout {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 0;\n  top: -2px;\n}\n.div-flight-content .div-topdeal-flight .div-width-250 {\n  width: 250%;\n}\n.div-flight-content .div-topdeal-flight .div-width-100 {\n  width: 100%;\n}\n.div-flight-content .div-topdeal-flight .div-width-600 {\n  width: 600%;\n}\n.div-flight-content .div-topdeal-flight .text-right {\n  text-align: right;\n}\n.div-flight-content .img-oneway {\n  width: 12px !important;\n  margin-left: 8px;\n  top: -5px;\n}\n@media (min-width: 300px) and (max-width: 350px) {\n  .img-padding.img-location {\n    margin-left: -2px !important;\n  }\n\n  .img-padding.img-checkin {\n    margin-left: -4px !important;\n  }\n\n  .img-padding.img-checkout {\n    margin-left: -22px !important;\n  }\n\n  .img-padding.img-people {\n    margin-left: -4px !important;\n  }\n\n  .col-calendar {\n    padding-right: 0;\n  }\n}\n.div-useful {\n  padding: 0 16px;\n  background: #f2f2f2;\n  padding-bottom: 16px;\n}\n@media (min-width: 412px) and (max-width: 420px) {\n  .div-wrap-search-input {\n    width: 96.2% !important;\n  }\n\n  .swiper-pagination {\n    width: 96.2% !important;\n  }\n}\n.div-flight-trip {\n  height: 100%;\n}\n.mb50 {\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2hvbWVmbGlnaHQvaG9tZWZsaWdodC5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWVmbGlnaHQvaG9tZWZsaWdodC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0FDQUo7QURFRTtFQUNFLGtCQUFBO0FDQUo7QURFRTtFQUNFLGdCQUFBO0FDQUo7QURFRTtFQUNFLDRCQUFBO0FDQUo7QURFRTtFQUNFLDJCQUFBO0FDQUo7QURHRTtFQUNFLGtCQUFBO0FDREo7QURJSTtFQUVJLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDSFI7QURNTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDSlI7QURRUTtFQUNFLHNCQUFBO0VBRUEsOENBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDUFY7QURTTTtFQUNFLHNCQUFBO0VBRUEsOENBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDUlI7QURVTTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNSUjtBRFVNO0VBQ0UsZUFBQTtBQ1JSO0FEV1E7RUFDRSxrQkFBQTtBQ1RWO0FEV1E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ1RWO0FEV1U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ1RaO0FEYVE7RUFDSSxnQkFBQTtBQ1haO0FEYVk7RUFDSSxxQkFBQTtBQ1hoQjtBRGNZO0VBQ0ks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RURrRkU7SUFDRSw0QkFBQTtFQy9FSjs7RURpRkU7SUFDRSw2QkFBQTtFQzlFSjs7RURnRkU7SUFDRSw0QkFBQTtFQzdFSjs7RUQrRUU7SUFDRSxnQkFBQTtFQzVFSjtBQUNGO0FEK0VFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUM3RUo7QUQrRUU7RUFDRTtJQUNFLHVCQUFBO0VDNUVKOztFRDhFRTtJQUNFLHVCQUFBO0VDM0VKO0FBQ0Y7QUQ4RUU7RUFDRSxZQUFBO0FDNUVKO0FEOEVFO0VBQ0UsbUJBQUE7QUMzRUoiLCJmaWxlIjoic3JjL2FwcC9ob21lZmxpZ2h0L2hvbWVmbGlnaHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdi1mbGlnaHQtY29udGVudHtcbiAgLmQtZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5tLW9mZnNldC10b3AtMTA0e1xuICAgIG1hcmdpbi10b3A6IC0xMDRweDtcbiAgfVxuICAucC10b3AtNHtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICB9XG4gIC5wLXRvcC0xMntcbiAgICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xuICB9XG4gIC5tLXRvcC0xNntcbiAgICBtYXJnaW4tdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5kaXYtaGlkZGVue1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuXG4gICAgLmJhY2tncm91bmR7XG5cbiAgICAgICAgaGVpZ2h0OiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDU4MnB4KTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAwO1xuXG5cbiAgICAgIC5kaXYtd3JhcC1zZWFyY2gtaW5wdXR7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbWFyZ2luOiAtOHB4O1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgd2lkdGg6IDk1LjglO1xuICAgICAgICBoZWlnaHQ6IDM3MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMzRweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgXG4gICAgICAgIC5pbWctYmFja2dyb3VuZHtcbiAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgIFxuICAgICAgICAgIGhlaWdodDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyA1ODJweCk7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgfVxuICAgICAgLmltZy1iYWNrZ3JvdW5kLW5vdGljZXtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgLy9oZWlnaHQ6IGNhbGMoIGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDI3MnB4KSAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IGNhbGMoIGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDY1N3B4KTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICB9XG4gICAgICAuZGl2LXdyYXAtY29udGVudHtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5mLTE0e1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZGl2LXJlbGF0aXZle1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAuZGl2LXN3aXRjaHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDEycHg7XG4gICAgICAgICAgdG9wOiAzNHB4O1xuICAgICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAwLjVweCAjZmZmO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMyNmJlZDY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzZweDtcblxuICAgICAgICAgIC5pbWctc3dpdGNoe1xuICAgICAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmRpdi1kaXJlY3Rpb257XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuXG4gICAgICAgICAgICAucmQtYWN0aXZle1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRpdi10d293YXksLmRpdi1vbmV3YXl7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpc3QtZGVwYXJ0dXJle1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZC1kZXBhcnR1cmV7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgICAgIC8vbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZC1kZXBhcnR1cmUgLnJhZGlvLWljb257XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJkLXRleHR7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDFweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yYWRpby1tZCAucmFkaW8taW5uZXJ7XG4gICAgICAgICAgICAgICAgbGVmdDogMXB4O1xuICAgICAgICAgICAgICAgIHRvcDogMXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGl2LWxpc3QtZmxpZ2h0dHlwZXtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaW1nLWxvZ297XG4gICAgICAgICAgICB3aWR0aDogNzZweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgMjJweCApO1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC50ZXh0LWNlbnRlcntcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC5wYWRkaW5ne1xuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcblxuICAgICAgICAgICAgLnRleHQtaG9tZS1ob3RlbHtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTE2cHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAubGFiZWwtaG9tZS1ob3RlbHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC50ZXh0LWhvbWUtaG90ZWwtbm90aWNle1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxODVweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5sYWJlbC1ob21lLWhvdGVse1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kaXYtd2lkdGh7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGV4dC1jb2Rle1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRleHQtY29kZS1lbXB0eXtcbiAgICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucm93LWZsaWdodHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuXG4gICAgICAgICAgICAgICAgLmltZy1pbnB1dHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucm93LWNpbi1jb3V0e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgLmRpdi1jaW57XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ2JTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAuaW1nLWNoZWNraW4sIC5pbWctcGVvcGxle1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLmltZy1jaGVja291dHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kaXYtaW5wdXQtcmlnaHR7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUxcHg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW1nLWNpbi1jb3V0e1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMjBweCAxNnB4IDE3cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJvdy1wYXh7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAudGV4dC1pbnB1dC1mbGlnaHR7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNTFweDtcblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC50ZXh0LWxvY2F0aW9ue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAudGV4dC1sb2NhdGlvbi1kZXNje1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAudGV4dC1pbnB1dC1zZWFyY2h7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMCAxNHB4IDUxcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAudGV4dC1pbnB1dC1zZWFyY2gtd3JhcHRleHR7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA0cHggMCAxNHB4IDUxcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAudGV4dC1taWRkbGV7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC50ZXh0LWNpbiwgLnRleHQtcGF4e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC50ZXh0LWNvbG9yXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnRleHQtcmVke1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZTUyODIyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5mb250LXRodVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kaXYtY291dHtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNDhweDtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kaXYtaW1nLWNvZmZlZXtcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTo0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmltZy1jb2ZmZWV7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGl2LWNoaWxke1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJ0bi1zZWFyY2hcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNmNzkyMjE7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y3OTIyMTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRpdi1mbGV4LWNlbnRlcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgXG4gICAgICAgXG4gICAgICB9XG5cbiAgICAgIC5kaXYtdGV4dC15b3VyZmxpZ2h0e1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgICAgcGFkZGluZy10b3A6IDM2cHg7XG4gICAgfVxuXG4gICAgICAuZGl2LWNvbnRlbnQteW91cmZsaWdodHtcbiAgICAgICAgaGVpZ2h0OiA1OXB4O1xuICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgICAgICAgLnRleHQtZmxpZ2h0LXRpdGxle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcblxuICAgICAgICAgICAgLmRpdi1mbGlnaHQtaW5vdXR7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyMnB4O1xuICAgICAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuXG4gICAgICAgICAgICAgIC5pbWctZmxpZ2h0LWlub3V0e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB0b3A6IC04cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICAudGV4dC1mbGlnaHQtY29udGVudHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgICAudGV4dC1mbGlnaHQtZGF0ZXRpbWV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgIH1cblxuICAgICAgLmRpdi10b3BkZWFse1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgICB9XG4gICAgICAvLy8vLy8vLy8vLy8vXG5cbiAgICAgIC5kaXYtdG9wZGVhbC1mbGlnaHR7XG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDFweDtcblxuICAgICAgICAudGl0bGUtdG9wZGVhbHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgICB9XG4gICAgICAgIC5zdWJ0aXRsZS10b3BkZWFse1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICB9XG4gICAgICAgIC5kaXYtb25ld2F5e1xuICAgICAgICAgIHdpZHRoOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuZGl2LWl0ZW0tZmxpZ2h0e1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTI2cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgcGFkZGluZzogMTZweCA4cHggMHB4IDhweDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBcbiAgICAgICAgICAudGV4dC1mbGlnaHQtdGl0bGV7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kaXYtZmlyc3R7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gICAgICAgICAgICAgIC5kaXYtbG9nb3tcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgXG4gICAgICAgICAgICAgICAgICAuaW1nLWxvZ297XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAubG9nby12bmF7XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICAuZmxpZ2h0LXR5cGV7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTEwcHg7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNGY0ZjRmO1xuICBcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZsaWdodC1wcmljZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTM7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDExcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0LXN1Yi1wcmljZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRpdi10aW1le1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIH1cbiAgICAgICAgICAuZGl2LXNlY29uZHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAgICAgICAgICAgICAuZGl2LXRpbWV7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTEwcHg7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzQ5NGI1NTtcbiAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgLmRpdi1mbGlnaHQtdGltZXtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzQ5NGI1NTtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICAuZGl2LWJ1dHRvbntcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIFxuICAgICAgICAgICAgICAgICAgLmJ0bi1zZWxlY3R7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY2cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y3OTIyMTtcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICB9XG4gICAgICAuZGl2LWZsaWdodC1pbm91dHtcbiAgICAgICAgcGFkZGluZzogMHB4IDE4cHg7XG4gICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gICAgICAgIC5pbWctZmxpZ2h0LWlub3V0e1xuICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IC0ycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5kaXYtd2lkdGgtMjUwe1xuICAgICAgICB3aWR0aDogMjUwJTtcbiAgICAgIH1cbiAgICAgIC5kaXYtd2lkdGgtMTAwe1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5kaXYtd2lkdGgtNjAwe1xuICAgICAgICB3aWR0aDogNjAwJTtcbiAgICAgIH1cbiAgICAgIC50ZXh0LXJpZ2h0e1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5pbWctb25ld2F5e1xuICAgICAgICB3aWR0aDogMTJweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICB0b3A6IC01cHg7XG4gICAgICB9XG59XG5cbi8vLy8vL21lZGlhXG5AbWVkaWEobWluLXdpZHRoOjMwMHB4KSBhbmQgKG1heC13aWR0aDozNTBweCl7XG4gICAgLmltZy1wYWRkaW5nLmltZy1sb2NhdGlvbntcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5pbWctcGFkZGluZy5pbWctY2hlY2tpbntcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5pbWctcGFkZGluZy5pbWctY2hlY2tvdXR7XG4gICAgICBtYXJnaW4tbGVmdDogLTIycHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmltZy1wYWRkaW5nLmltZy1wZW9wbGV7XG4gICAgICBtYXJnaW4tbGVmdDogLTRweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuY29sLWNhbGVuZGFye1xuICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICB9XG4gIH1cblxuICAuZGl2LXVzZWZ1bHtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNDEycHgpIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICAgIC5kaXYtd3JhcC1zZWFyY2gtaW5wdXR7XG4gICAgICB3aWR0aDogOTYuMiUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnN3aXBlci1wYWdpbmF0aW9ue1xuICAgICAgd2lkdGg6IDk2LjIlICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLmRpdi1mbGlnaHQtdHJpcHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLm1iNTB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfSIsIi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5tLW9mZnNldC10b3AtMTA0IHtcbiAgbWFyZ2luLXRvcDogLTEwNHB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAucC10b3AtNCB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5wLXRvcC0xMiB7XG4gIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5tLXRvcC0xNiB7XG4gIG1hcmdpbi10b3A6IDE2cHggIWltcG9ydGFudDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmRpdi1oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIHtcbiAgaGVpZ2h0OiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDU4MnB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAwO1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAuZGl2LXdyYXAtc2VhcmNoLWlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IC04cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgb3BhY2l0eTogMC40O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogOTUuOCU7XG4gIGhlaWdodDogMzcwcHg7XG4gIG1hcmdpbi10b3A6IC0zNHB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAuaW1nLWJhY2tncm91bmQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgNTgycHgpO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLmltZy1iYWNrZ3JvdW5kLW5vdGljZSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyA2NTdweCk7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDA7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5kaXYtd3JhcC1jb250ZW50IHtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLmYtMTQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5kaXYtcmVsYXRpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5kaXYtc3dpdGNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTJweDtcbiAgdG9wOiAzNHB4O1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiBzb2xpZCAwLjVweCAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMjZiZWQ2O1xuICBib3JkZXItcmFkaXVzOiAzNnB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAuZGl2LXN3aXRjaCAuaW1nLXN3aXRjaCB7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5kaXYtZGlyZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLmRpdi1kaXJlY3Rpb24gLnJkLWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLmRpdi1kaXJlY3Rpb24gLmRpdi10d293YXksIC5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLmRpdi1kaXJlY3Rpb24gLmRpdi1vbmV3YXkge1xuICBvcGFjaXR5OiAwLjc7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5kaXYtZGlyZWN0aW9uIC5saXN0LWRlcGFydHVyZSB7XG4gIG1hcmdpbjogMjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5kaXYtZGlyZWN0aW9uIC5yZC1kZXBhcnR1cmUge1xuICBwYWRkaW5nOiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAuZGl2LWRpcmVjdGlvbiAucmQtZGVwYXJ0dXJlIC5yYWRpby1pY29uIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLmRpdi1kaXJlY3Rpb24gLnJkLXRleHQge1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgcGFkZGluZy10b3A6IDFweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAuZGl2LWRpcmVjdGlvbiAucmFkaW8tbWQgLnJhZGlvLWlubmVyIHtcbiAgbGVmdDogMXB4O1xuICB0b3A6IDFweDtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiA2cHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5kaXYtZGlyZWN0aW9uIC5kaXYtbGlzdC1mbGlnaHR0eXBlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5pbWctbG9nbyB7XG4gIHdpZHRoOiA3NnB4O1xuICBtYXJnaW4tdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDIycHgpO1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5wYWRkaW5nIHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLnBhZGRpbmcgLnRleHQtaG9tZS1ob3RlbCB7XG4gIG1hcmdpbi10b3A6IDExNnB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAudGV4dC1ob21lLWhvdGVsIC5sYWJlbC1ob21lLWhvdGVsIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAudGV4dC1ob21lLWhvdGVsLW5vdGljZSB7XG4gIG1hcmdpbi10b3A6IDE4NXB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAudGV4dC1ob21lLWhvdGVsLW5vdGljZSAubGFiZWwtaG9tZS1ob3RlbCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLnBhZGRpbmcgLmRpdi13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAudGV4dC1jb2RlIHtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAudGV4dC1jb2RlLWVtcHR5IHtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5wYWRkaW5nIC5yb3ctZmxpZ2h0IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLnBhZGRpbmcgLnJvdy1mbGlnaHQgLmltZy1pbnB1dCB7XG4gIGhlaWdodDogNDhweDtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5wYWRkaW5nIC5yb3ctY2luLWNvdXQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGhlaWdodDogNDhweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAucm93LWNpbi1jb3V0IC5kaXYtY2luIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNDYlO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5wYWRkaW5nIC5yb3ctY2luLWNvdXQgLmltZy1jaGVja2luLCAuZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5wYWRkaW5nIC5yb3ctY2luLWNvdXQgLmltZy1wZW9wbGUge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAucm93LWNpbi1jb3V0IC5pbWctY2hlY2tvdXQge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxMHB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAuZGl2LWlucHV0LXJpZ2h0IHtcbiAgbWFyZ2luLWxlZnQ6IDUxcHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5wYWRkaW5nIC5pbWctY2luLWNvdXQge1xuICBwYWRkaW5nOiAxNnB4IDIwcHggMTZweCAxN3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5wYWRkaW5nIC5yb3ctcGF4IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGhlaWdodDogNDhweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLnBhZGRpbmcgLnRleHQtaW5wdXQtZmxpZ2h0IHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLWxlZnQ6IDUxcHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5wYWRkaW5nIC50ZXh0LWxvY2F0aW9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAudGV4dC1sb2NhdGlvbi1kZXNjIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLnBhZGRpbmcgLnRleHQtaW5wdXQtc2VhcmNoIHtcbiAgbWFyZ2luOiAwcHggMCAxNHB4IDUxcHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5wYWRkaW5nIC50ZXh0LWlucHV0LXNlYXJjaC13cmFwdGV4dCB7XG4gIG1hcmdpbjogNHB4IDAgMTRweCA1MXB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAudGV4dC1taWRkbGUge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5wYWRkaW5nIC50ZXh0LWNpbiwgLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAudGV4dC1wYXgge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogIzMzMzMzMztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5wYWRkaW5nIC50ZXh0LWNvbG9yIHtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5wYWRkaW5nIC50ZXh0LXJlZCB7XG4gIGNvbG9yOiAjZTUyODIyO1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAuZm9udC10aHUge1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5wYWRkaW5nIC5kaXYtY291dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDE0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5wYWRkaW5nIC5kaXYtaW1nLWNvZmZlZSB7XG4gIGJvdHRvbTogNDBweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLnBhZGRpbmcgLmltZy1jb2ZmZWUge1xuICBoZWlnaHQ6IDMycHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5wYWRkaW5nIC5kaXYtY2hpbGQge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5wYWRkaW5nIC5idG4tc2VhcmNoIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogI2Y3OTIyMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAuZGl2LWZsZXgtY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogNDhweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmRpdi10ZXh0LXlvdXJmbGlnaHQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgcGFkZGluZy10b3A6IDM2cHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5kaXYtY29udGVudC15b3VyZmxpZ2h0IHtcbiAgaGVpZ2h0OiA1OXB4O1xuICBvcGFjaXR5OiAwLjk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5kaXYtY29udGVudC15b3VyZmxpZ2h0IC50ZXh0LWZsaWdodC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5kaXYtY29udGVudC15b3VyZmxpZ2h0IC50ZXh0LWZsaWdodC10aXRsZSAuZGl2LWZsaWdodC1pbm91dCB7XG4gIHBhZGRpbmc6IDBweCAyMnB4O1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuZGl2LWNvbnRlbnQteW91cmZsaWdodCAudGV4dC1mbGlnaHQtdGl0bGUgLmRpdi1mbGlnaHQtaW5vdXQgLmltZy1mbGlnaHQtaW5vdXQge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogLThweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmRpdi1jb250ZW50LXlvdXJmbGlnaHQgLnRleHQtZmxpZ2h0LWNvbnRlbnQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC50ZXh0LWZsaWdodC1kYXRldGltZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmRpdi10b3BkZWFsIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuZGl2LXRvcGRlYWwtZmxpZ2h0IHtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuZGl2LXRvcGRlYWwtZmxpZ2h0IC50aXRsZS10b3BkZWFsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzIyMjIyMjtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmRpdi10b3BkZWFsLWZsaWdodCAuc3VidGl0bGUtdG9wZGVhbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuZGl2LXRvcGRlYWwtZmxpZ2h0IC5kaXYtb25ld2F5IHtcbiAgd2lkdGg6IDEycHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMXB4ICFpbXBvcnRhbnQ7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5kaXYtdG9wZGVhbC1mbGlnaHQgLmRpdi1pdGVtLWZsaWdodCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyNnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE2cHggOHB4IDBweCA4cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmRpdi10b3BkZWFsLWZsaWdodCAuZGl2LWl0ZW0tZmxpZ2h0IC50ZXh0LWZsaWdodC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuZGl2LXRvcGRlYWwtZmxpZ2h0IC5kaXYtaXRlbS1mbGlnaHQgLmRpdi1maXJzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmRpdi10b3BkZWFsLWZsaWdodCAuZGl2LWl0ZW0tZmxpZ2h0IC5kaXYtZmlyc3QgLmRpdi1sb2dvIHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuZGl2LXRvcGRlYWwtZmxpZ2h0IC5kaXYtaXRlbS1mbGlnaHQgLmRpdi1maXJzdCAuZGl2LWxvZ28gLmltZy1sb2dvIHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuZGl2LXRvcGRlYWwtZmxpZ2h0IC5kaXYtaXRlbS1mbGlnaHQgLmRpdi1maXJzdCAuZGl2LWxvZ28gLmxvZ28tdm5hIHtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuZGl2LXRvcGRlYWwtZmxpZ2h0IC5kaXYtaXRlbS1mbGlnaHQgLmRpdi1maXJzdCAuZmxpZ2h0LXR5cGUge1xuICB3aWR0aDogMTEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuZGl2LXRvcGRlYWwtZmxpZ2h0IC5kaXYtaXRlbS1mbGlnaHQgLmZsaWdodC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjEzO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGhlaWdodDogMzRweDtcbiAgcGFkZGluZy10b3A6IDExcHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5kaXYtdG9wZGVhbC1mbGlnaHQgLmRpdi1pdGVtLWZsaWdodCAudGV4dC1zdWItcHJpY2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5kaXYtdG9wZGVhbC1mbGlnaHQgLmRpdi1pdGVtLWZsaWdodCAuZGl2LXRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuZGl2LXRvcGRlYWwtZmxpZ2h0IC5kaXYtaXRlbS1mbGlnaHQgLmRpdi1zZWNvbmQge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmRpdi10b3BkZWFsLWZsaWdodCAuZGl2LWl0ZW0tZmxpZ2h0IC5kaXYtc2Vjb25kIC5kaXYtdGltZSB7XG4gIHdpZHRoOiAxMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcbiAgY29sb3I6ICM0OTRiNTU7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5kaXYtdG9wZGVhbC1mbGlnaHQgLmRpdi1pdGVtLWZsaWdodCAuZGl2LXNlY29uZCAuZGl2LWZsaWdodC10aW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcbiAgY29sb3I6ICM0OTRiNTU7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuZGl2LXRvcGRlYWwtZmxpZ2h0IC5kaXYtaXRlbS1mbGlnaHQgLmRpdi1zZWNvbmQgLmRpdi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmRpdi10b3BkZWFsLWZsaWdodCAuZGl2LWl0ZW0tZmxpZ2h0IC5kaXYtc2Vjb25kIC5kaXYtYnV0dG9uIC5idG4tc2VsZWN0IHtcbiAgd2lkdGg6IDY2cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjZjc5MjIxO1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuZGl2LXRvcGRlYWwtZmxpZ2h0IC5kaXYtZmxpZ2h0LWlub3V0IHtcbiAgcGFkZGluZzogMHB4IDE4cHg7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmRpdi10b3BkZWFsLWZsaWdodCAuZGl2LWZsaWdodC1pbm91dCAuaW1nLWZsaWdodC1pbm91dCB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAtMnB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuZGl2LXRvcGRlYWwtZmxpZ2h0IC5kaXYtd2lkdGgtMjUwIHtcbiAgd2lkdGg6IDI1MCU7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5kaXYtdG9wZGVhbC1mbGlnaHQgLmRpdi13aWR0aC0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmRpdi10b3BkZWFsLWZsaWdodCAuZGl2LXdpZHRoLTYwMCB7XG4gIHdpZHRoOiA2MDAlO1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuZGl2LXRvcGRlYWwtZmxpZ2h0IC50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5pbWctb25ld2F5IHtcbiAgd2lkdGg6IDEycHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgdG9wOiAtNXB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xuICAuaW1nLXBhZGRpbmcuaW1nLWxvY2F0aW9uIHtcbiAgICBtYXJnaW4tbGVmdDogLTJweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmltZy1wYWRkaW5nLmltZy1jaGVja2luIHtcbiAgICBtYXJnaW4tbGVmdDogLTRweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmltZy1wYWRkaW5nLmltZy1jaGVja291dCB7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMnB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW1nLXBhZGRpbmcuaW1nLXBlb3BsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IC00cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jb2wtY2FsZW5kYXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbn1cbi5kaXYtdXNlZnVsIHtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQxMnB4KSBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmRpdi13cmFwLXNlYXJjaC1pbnB1dCB7XG4gICAgd2lkdGg6IDk2LjIlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICAgIHdpZHRoOiA5Ni4yJSAhaW1wb3J0YW50O1xuICB9XG59XG4uZGl2LWZsaWdodC10cmlwIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWI1MCB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/homeflight/homeflight.page.ts":
/*!***********************************************!*\
  !*** ./src/app/homeflight/homeflight.page.ts ***!
  \***********************************************/
/*! exports provided: HomeflightPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeflightPage", function() { return HomeflightPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var ionic_image_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-image-loader */ "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _network_provider_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../network-provider.service */ "./src/app/network-provider.service.ts");
/* harmony import */ var _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../providers/bizTravelService */ "./src/app/providers/bizTravelService.ts");
















let HomeflightPage = class HomeflightPage {
    constructor(navCtrl, gf, modalCtrl, toastCtrl, zone, imageLoader, storage, actionsheetCtrl, valueGlobal, searchhotel, _flightService, appVersion, networkProvider, platform, bizTravelService) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.zone = zone;
        this.imageLoader = imageLoader;
        this.storage = storage;
        this.actionsheetCtrl = actionsheetCtrl;
        this.valueGlobal = valueGlobal;
        this.searchhotel = searchhotel;
        this._flightService = _flightService;
        this.appVersion = appVersion;
        this.networkProvider = networkProvider;
        this.platform = platform;
        this.bizTravelService = bizTravelService;
        this.cindisplay = '25-05-2020';
        this.coutdisplay = '27-05-2020';
        this.cinthu = "Thứ 3";
        this.coutthu = "Thứ 5";
        this.cotdate = 0;
        this.cofdate = 0;
        this.adult = 1;
        this.child = 0;
        this.infant = 0;
        this.flighttype = "twoway";
        this.departCity = "";
        this.departCode = "";
        this.departAirport = "";
        this.returnCity = "";
        this.returnCode = "";
        this.returnAirport = "";
        this.myflight = {};
        this.cinthushort = "";
        this.coutthushort = "";
        this.listflighttopdeal = [];
        this.flightTabActive = 1;
        this.isConnected = true;
        this.roundtriptext = "khứ hồi/khách";
        this.countdaydisplay = 0;
        this.monthtext = "Tháng";
        this.showlowestprice = false;
        this.allowclickcalendar = true;
        this.isNotice = false;
        this.getShowNotice();
        this.storage.get('jti').then(jti => {
            if (jti) {
                this.memberid = jti;
            }
        });
        this.networkProvider.getNetworkStatus().subscribe((connected) => {
            this.isConnected = connected;
        });
        this.platform.resume.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.networkProvider.getNetworkStatus().subscribe((connected) => {
                this.isConnected = connected;
            });
        }));
        this.storage.remove("listAirport");
        this.storage.get("listAirport").then((data) => {
            if (!data) {
                this.loadLocation();
            }
            else {
                this._flightService.listAirport = data;
            }
        });
        this.storage.get("itemFlightCache").then((data) => {
            if (data) {
                data = JSON.parse(data);
                this._flightService.itemFlightCache = data;
                if (data.roundTrip != undefined) {
                    this.flighttype = data.roundTrip ? 'twoway' : 'oneway';
                }
                this.myflight = Object.assign({}, data);
                this.departCode = data.departCode;
                this.departCity = data.departCity;
                this.departAirport = data.departAirport;
                this.returnCode = data.returnCode;
                this.returnCity = data.returnCity;
                this.returnAirport = data.returnAirport;
                let diffday = moment__WEBPACK_IMPORTED_MODULE_8__(data.checkInDate).diff(new Date(), 'days');
                if (diffday <= 0) {
                    this.cin = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).add(7, 'days');
                    this.cout = this.flighttype == "twoway" ? moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).add(2, 'days') : this.cin;
                }
                else {
                    this.cin = data.checkInDate;
                    this.cout = data.checkOutDate;
                }
                this.getDayName(this.cin, this.cout);
                this.adult = data.adult;
                this.child = data.child;
                this.infant = data.infant ? data.infant : 0;
                this.arrchild = data.arrchild;
                this.cindisplaymonth = moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("MM");
                this.coutdisplaymonth = moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("MM");
                this.myflight.checkInDisplayMonth = this.getDayOfWeek(this.cin).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("MM");
                this.myflight.checkOutDisplayMonth = this.getDayOfWeek(this.cout).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("MM");
                this.checkInDisplayMonth = this.getDayOfWeek(this.cin).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("MM");
                this.checkOutDisplayMonth = this.getDayOfWeek(this.cout).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("MM");
                this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD-MM-YYYY");
                this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD-MM-YYYY");
                this.isExtenal = data.isExtenal;
                if (data.itemSameCity) {
                    this.itemSameCity = data.itemSameCity,
                        this.itemDepartSameCity = data.itemDepartSameCity,
                        this.itemReturnSameCity = data.itemReturnSameCity,
                        this.departCity = data.departCity,
                        this.returnCity = data.returnCity;
                }
            }
            else {
                this.reloadInfo();
            }
        });
        this.storage.get('flighttopdeal').then((data) => {
            if (data) {
                this.loadcachetopdeal(data);
            }
            else {
                this.loadflighttopdeal();
            }
        });
        setTimeout(() => {
            this.loadflighttopdeal();
        }, 60 * 1000);
        this.loadCalendarPrice();
        this.showlowestprice = this._flightService.itemFlightCache.showCalendarLowestPrice;
        if (this.departCode && this.returnCode) {
            if (this.showlowestprice) {
                jquery__WEBPACK_IMPORTED_MODULE_4__('.price-calendar-text').removeClass('price-calendar-disabled').addClass('price-calendar-visible');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__('.price-calendar-text').removeClass('price-calendar-visible').addClass('price-calendar-disabled');
            }
        }
        this.loadUserInfo();
    }
    ngOnInit() {
        var se = this;
        se._flightService.itemFlightChangePax.pipe().subscribe(data => {
            if (data == 1) {
                se.reloadInfo();
            }
        });
        se._flightService.itemFlightChangeLocation.pipe().subscribe(data => {
            if (data) {
                se.changeLocationInfo(data, se._flightService.searchDepartCode ? true : false);
            }
        });
        se._flightService.itemMenuFlightClick.pipe().subscribe(data => {
            se.zone.run(() => {
                se.flightTabActive = data;
                if (data == 1) {
                    jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-slide").removeClass("cls-disabled").addClass("cls-visible");
                }
                else {
                    if (data == 2) {
                        se.loadUserInfo();
                    }
                    jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-slide").removeClass("cls-visible").addClass("cls-disabled");
                }
            });
        });
        se._flightService.itemFlightReloadInfo.pipe().subscribe(data => {
            if (data == 1) {
                se.reloadInfoFlight();
            }
        });
        se._flightService.itemTabFlightFocus.pipe().subscribe(data => {
            if (data) {
                se.bindlunar();
            }
        });
        se._flightService.itemCheckTabActive.pipe().subscribe((data) => {
            if (se.flightTabActive != 1) {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-slide").removeClass("cls-visible").addClass("cls-disabled");
                jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-home").removeClass("cls-visible").addClass("cls-disabled");
                jquery__WEBPACK_IMPORTED_MODULE_4__(".cls-notice").removeClass("cls-visible").addClass("cls-disabled");
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".cls-notice").removeClass("cls-disabled").addClass("cls-visible");
                jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-slide").removeClass("cls-disabled").addClass("cls-visible");
                jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-home").removeClass("cls-disabled").addClass("cls-visible");
            }
        });
        se.bizTravelService.accountBizTravelChange.pipe().subscribe((check) => {
            if (check == 1) {
                se.loadUserInfo();
            }
            else if (check == 2) {
                se.isBizAccount = false;
            }
        });
    }
    loadUserInfo() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_12__(options, function (error, response, body) {
                    if (response.statusCode == 200) {
                        if (body) {
                            var data = JSON.parse(body);
                            se.storage.remove('userInfoData');
                            se.storage.set('userInfoData', data);
                            if (data.bizAccount) {
                                se.bizTravelService.bizAccount = data.bizAccount;
                                se.bizTravelService.isCompany = true;
                                se.isBizAccount = true;
                            }
                            else {
                                se.bizTravelService.bizAccount = null;
                                se.bizTravelService.isCompany = false;
                                se.isBizAccount = false;
                            }
                        }
                    }
                    else {
                        se.isBizAccount = false;
                    }
                });
            }
        });
    }
    loadLocation() {
        var se = this;
        let urlPath = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFlight + "gate/apiv1/AllPlace?token=3b760e5dcf038878925b5613c32615ea3ds";
        var options = {
            method: 'GET',
            url: urlPath,
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            'headers': {
                "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                'Content-Type': 'application/json; charset=utf-8'
            },
        };
        requestretry__WEBPACK_IMPORTED_MODULE_12__(options, function (error, response, body) {
            if (error) {
                error.page = "homeflight";
                error.func = "loadlocation";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                throw new Error(error);
            }
            ;
            let result = JSON.parse(body);
            if (result && result.length > 0) {
                se.storage.set("listAirport", result);
                se._flightService.listAirport = result;
            }
        });
    }
    changeLocationInfo(data, isdepart) {
        var se = this;
        if (isdepart) {
            if (!data.SameCity) {
                se.departCode = data.code;
                se.departCity = data.city;
                se.departAirport = data.airport;
                se.itemSameCity = false;
                se._flightService.itemFlightCache.itemSameCity = false;
                se._flightService.itemFlightCache.itemDepartSameCity = null;
                se._flightService.itemFlightCache.itemReturnSameCity = null;
            }
            else {
                se.itemDepartSameCity = data;
                se.departCity = data.city;
                se.departAirport = data.country;
                se._flightService.itemFlightCache.itemSameCity = true;
                se.itemSameCity = true;
                se.departCode = "";
            }
        }
        else {
            if (!data.SameCity) {
                se.returnCode = data.code;
                se.returnCity = data.city;
                se.returnAirport = data.airport;
                se.itemSameCity = false;
                se._flightService.itemFlightCache.itemSameCity = false;
                se._flightService.itemFlightCache.itemDepartSameCity = null;
                se._flightService.itemFlightCache.itemReturnSameCity = null;
            }
            else {
                se.itemReturnSameCity = data;
                se.returnCity = data.city;
                se.returnAirport = data.country;
                se._flightService.itemFlightCache.itemSameCity = true;
                se.itemSameCity = true;
                se.returnCode = "";
            }
        }
        se.isExtenal = data.country != "Việt Nam" ? true : false;
        se._flightService.itemFlightCache.isExtenal = data.country != "Việt Nam" ? true : false;
    }
    reloadInfoFlight() {
        if (this._flightService.itemFlightCache) {
            if (this._flightService.itemFlightCache.checkInDate) {
                this.cin = this._flightService.itemFlightCache.checkInDate;
            }
            else {
                this.cin = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).add(7, 'days');
            }
            if (this._flightService.itemFlightCache.checkOutDate) {
                this.cout = this._flightService.itemFlightCache.checkOutDate;
            }
            else {
                this.cout = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).add(9, 'days');
            }
            this.cinthu = this.getDayOfWeek(this.cin).dayname;
            this.coutthu = this.getDayOfWeek(this.cout).dayname;
            this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD-MM-YYYY");
            this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD-MM-YYYY");
            this.cindisplaymonth = moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("MM");
            this.coutdisplaymonth = moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("MM");
            this.checkInDisplayMonth = this.getDayOfWeek(this.cin).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("MM");
            this.checkOutDisplayMonth = this.getDayOfWeek(this.cout).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("MM");
            if (this._flightService.itemFlightCache) {
                this.departCity = this._flightService.itemFlightCache.departCity;
                this.returnCity = this._flightService.itemFlightCache.returnCity;
                this.departCode = this._flightService.itemFlightCache.departCode;
                this.returnCode = this._flightService.itemFlightCache.returnCode;
                this.departAirport = this.getAirpot(this.departCode);
                this.returnAirport = this.getAirpot(this.returnCode);
                this.myflight.departCity = this._flightService.itemFlightCache.departCity;
                this.myflight.returnCity = this._flightService.itemFlightCache.returnCity;
                this.myflight.checkInDisplayMonth = this.getDayOfWeek(this.cin).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("MM");
                this.myflight.checkOutDisplayMonth = this.getDayOfWeek(this.cout).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("MM");
                this.myflight.roundTrip = this._flightService.itemFlightCache.roundTrip;
                this.myflight.isExtenal = this._flightService.itemFlightCache.isExtenal;
                this.flighttype = this._flightService.itemFlightCache.roundTrip ? 'twoway' : 'oneway';
            }
        }
    }
    reloadInfo() {
        if (!this.cin) {
            this.cin = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).add(7, 'days');
            this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD-MM-YYYY");
            this.cindisplaymonth = moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("MM");
            this.cinthu = this.getDayOfWeek(this.cin).dayname;
        }
        if (!this.cout) {
            this.cout = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).add(9, 'days');
            this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD-MM-YYYY");
            this.coutdisplaymonth = moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("MM");
            this.coutthu = this.getDayOfWeek(this.cout).dayname;
        }
        this.checkInDisplayMonth = this.getDayOfWeek(this.cin).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("MM");
        this.checkOutDisplayMonth = this.getDayOfWeek(this.cout).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("MM");
        if (this._flightService.itemFlightCache && this._flightService.itemFlightCache.adult) {
            this.adult = this._flightService.itemFlightCache.adult;
        }
        if (this._flightService.itemFlightCache && this._flightService.itemFlightCache.arrchild) {
            this.arrchild = this._flightService.itemFlightCache.arrchild;
        }
        if (this._flightService.itemFlightCache && this._flightService.itemFlightCache.child && this._flightService.itemFlightCache.arrchild) {
            this.child = this._flightService.itemFlightCache.child;
            if (this._flightService.itemFlightCache.arrchild) {
                for (let i = 0; i < this._flightService.itemFlightCache.arrchild.length; i++) {
                    let itemchild = this._flightService.itemFlightCache.arrchild[i];
                    if (itemchild.numage >= 12) {
                        if (this.child > 1) {
                            this.child--;
                            this.adult++;
                        }
                        else {
                            this.child = 0;
                            this.adult++;
                        }
                    }
                }
            }
        }
        else {
            this.child = 0;
        }
        if (this._flightService.itemFlightCache && this._flightService.itemFlightCache.child == 0 && this._flightService.itemFlightCache.arrchild && this._flightService.itemFlightCache.arrchild.length == 0) {
            this._flightService.itemFlightCache.infant = 0;
        }
        this.infant = this._flightService.itemFlightCache.infant ? this._flightService.itemFlightCache.infant : 0;
        this._flightService.itemFlightCache.adult = this.adult;
        this._flightService.itemFlightCache.child = this.child;
        this._flightService.itemFlightCache.infant = this.infant ? this.infant : 0;
        this._flightService.itemFlightCache.pax = this.adult + (this.child ? this.child : 0) + (this.infant ? this.infant : 0);
        this._flightService.itemFlightCache.arrchild = this.arrchild;
        this.storage.get("itemFlightCache").then((data) => {
            if (data) {
                this.storage.remove("itemFlightCache").then(() => {
                    this.storage.set("itemFlightCache", JSON.stringify(this._flightService.itemFlightCache));
                });
            }
            else {
                this.storage.set("itemFlightCache", JSON.stringify(this._flightService.itemFlightCache));
            }
        });
    }
    reloadInfoOneway(isoneway) {
        if (isoneway) {
            this.cout = this.cin;
        }
        else {
            this.cout = moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).add(2, 'days');
        }
        this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD-MM-YYYY");
        this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD-MM-YYYY");
        this.cindisplaymonth = moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("MM");
        this.coutdisplaymonth = moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("MM");
        this.checkInDisplayMonth = this.getDayOfWeek(this.cin).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("MM");
        this.checkOutDisplayMonth = this.getDayOfWeek(this.cout).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("MM");
        this.cinthu = moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format('dddd');
        switch (this.cinthu) {
            case "Monday":
                this.cinthu = "Thứ 2";
                this.cinthushort = "T2";
                break;
            case "Tuesday":
                this.cinthu = "Thứ 3";
                this.cinthushort = "T3";
                break;
            case "Wednesday":
                this.cinthu = "Thứ 4";
                this.cinthushort = "T4";
                break;
            case "Thursday":
                this.cinthu = "Thứ 5";
                this.cinthushort = "T5";
                break;
            case "Friday":
                this.cinthu = "Thứ 6";
                this.cinthushort = "T6";
                break;
            case "Saturday":
                this.cinthu = "Thứ 7";
                this.cinthushort = "T7";
                break;
            default:
                this.cinthu = "Chủ nhật";
                this.cinthushort = "CN";
                break;
        }
        this.coutthu = moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format('dddd');
        switch (this.coutthu) {
            case "Monday":
                this.coutthu = "Thứ 2";
                this.coutthushort = "T2";
                break;
            case "Tuesday":
                this.coutthu = "Thứ 3";
                this.coutthushort = "T3";
                break;
            case "Wednesday":
                this.coutthu = "Thứ 4";
                this.coutthushort = "T4";
                break;
            case "Thursday":
                this.coutthu = "Thứ 5";
                this.coutthushort = "T5";
                break;
            case "Friday":
                this.coutthu = "Thứ 6";
                this.coutthushort = "T6";
                break;
            case "Saturday":
                this.coutthu = "Thứ 7";
                this.coutthushort = "T7";
                break;
            default:
                this.coutthu = "Chủ nhật";
                this.coutthushort = "CN";
                break;
        }
        this.bindlunar();
    }
    radioCheck(value) {
        var itemListDeparture = document.getElementsByClassName('list-flighttype');
        var itemRadioDeparture = document.getElementsByClassName('rd-departure');
        if (value == 1) {
            itemListDeparture[0].setAttribute('aria-activedescendant', "rb-1-0");
            this.flighttype = "twoway";
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-oneway").removeClass("rd-active");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-twoway").addClass("rd-active");
            this.reloadInfoOneway(false);
        }
        else if (value == 2) {
            itemListDeparture[0].setAttribute('aria-activedescendant', "rb-1-1");
            this.flighttype = "oneway";
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-twoway").removeClass("rd-active");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-oneway").addClass("rd-active");
            this.reloadInfoOneway(true);
        }
    }
    searchFlight(index) {
        if (!this.isConnected) {
            this.gf.showToastWarning('Thiết bị đang không kết nối mạng, vui lòng bật kết nối để tiếp tục thao tác!');
            return;
        }
        this.valueGlobal.backValue = "homeflight";
        this._flightService.searchDepartCode = index == 1 ? true : false;
        this.navCtrl.navigateForward("/flightsearchairport");
    }
    clickedElement(e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var obj = e.currentTarget;
            if ((this.flighttype == "twoway" && (jquery__WEBPACK_IMPORTED_MODULE_4__(obj.parentNode).hasClass("endSelection") || jquery__WEBPACK_IMPORTED_MODULE_4__(obj.parentNode).hasClass("startSelection"))) || (this.flighttype == "oneway" && jquery__WEBPACK_IMPORTED_MODULE_4__(obj).hasClass('on-selected'))) {
                if (this.modalCtrl) {
                    let fday;
                    let tday;
                    var monthenddate;
                    var yearenddate;
                    var monthstartdate;
                    var yearstartdate;
                    var objTextMonthEndDate;
                    var objTextMonthStartDate;
                    this.cofdate = 0;
                    this.cotdate = 0;
                    this.cinthu = "";
                    this.coutthu = "";
                    if (this.flighttype == "twoway") {
                        this.roundtriptext = "khứ hồi/khách";
                        if (jquery__WEBPACK_IMPORTED_MODULE_4__(obj.parentNode).hasClass('endSelection')) {
                            if (jquery__WEBPACK_IMPORTED_MODULE_4__('.days-btn.lunarcalendar.on-selected > p')[0]) {
                                fday = jquery__WEBPACK_IMPORTED_MODULE_4__('.days-btn.lunarcalendar.on-selected > p')[0].innerText;
                            }
                            else {
                                fday = jquery__WEBPACK_IMPORTED_MODULE_4__('.on-selected > p')[0].textContent;
                            }
                            if (jquery__WEBPACK_IMPORTED_MODULE_4__('.days.endSelection .days-btn.lunarcalendar > p')[0]) {
                                tday = jquery__WEBPACK_IMPORTED_MODULE_4__('.days.endSelection .days-btn.lunarcalendar > p')[0].innerText;
                            }
                            else {
                                tday = jquery__WEBPACK_IMPORTED_MODULE_4__('.days.endSelection .days-btn > p')[0].innerText;
                            }
                            objTextMonthStartDate = jquery__WEBPACK_IMPORTED_MODULE_4__('.on-selected').closest('.month-box').children()[0].textContent.replace('Tháng ', '');
                            objTextMonthEndDate = jquery__WEBPACK_IMPORTED_MODULE_4__(obj).closest('.month-box').children()[0].textContent.replace('Tháng ', '');
                        }
                        else {
                            if (jquery__WEBPACK_IMPORTED_MODULE_4__('.days-btn.lunarcalendar.on-selected > p')[0]) {
                                fday = jquery__WEBPACK_IMPORTED_MODULE_4__('.days-btn.lunarcalendar.on-selected > p')[0].innerText;
                            }
                            else {
                                fday = jquery__WEBPACK_IMPORTED_MODULE_4__(obj)[0].children[0].textContent;
                            }
                            if (jquery__WEBPACK_IMPORTED_MODULE_4__('.days.endSelection .days-btn.lunarcalendar > p')[0]) {
                                tday = jquery__WEBPACK_IMPORTED_MODULE_4__('.days.endSelection .days-btn.lunarcalendar > p')[0].innerText;
                            }
                            else {
                                tday = jquery__WEBPACK_IMPORTED_MODULE_4__('.days.endSelection .days-btn > p')[0].innerText;
                            }
                            objTextMonthStartDate = jquery__WEBPACK_IMPORTED_MODULE_4__(obj).closest('.month-box').children()[0].textContent.replace('Tháng ', '');
                            objTextMonthEndDate = jquery__WEBPACK_IMPORTED_MODULE_4__('.endSelection').closest('.month-box').children()[0].textContent.replace('Tháng ', '');
                        }
                    }
                    else {
                        this.roundtriptext = "một chiều/khách";
                        if (jquery__WEBPACK_IMPORTED_MODULE_4__('.days-btn.lunarcalendar.on-selected > p')[0]) {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_4__('.days-btn.lunarcalendar.on-selected > p')[0].innerText;
                        }
                        else {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_4__('.on-selected > p')[0].textContent;
                        }
                        tday = fday;
                        objTextMonthStartDate = jquery__WEBPACK_IMPORTED_MODULE_4__('.on-selected').closest('.month-box').children()[0].textContent.replace('Tháng ', '');
                        objTextMonthEndDate = objTextMonthStartDate;
                    }
                    if (objTextMonthEndDate &&
                        objTextMonthEndDate.length > 0 &&
                        objTextMonthStartDate &&
                        objTextMonthStartDate.length > 0) {
                        monthstartdate = objTextMonthStartDate.trim().split(",")[0];
                        yearstartdate = objTextMonthStartDate.trim().split(",")[1];
                        monthenddate = objTextMonthEndDate.trim().split(",")[0];
                        yearenddate = objTextMonthEndDate.trim().split(",")[1];
                        var fromdate = new Date(yearstartdate, monthstartdate - 1, fday);
                        var todate = new Date(yearenddate, monthenddate - 1, tday);
                        let diffday = moment__WEBPACK_IMPORTED_MODULE_8__(todate).diff(fromdate, "days");
                        this.countday = diffday;
                        this.countdaydisplay = this.countday + 1;
                        var se = this;
                        let allowseach = (diffday >= 0) ? true : false;
                        if (fromdate && todate && allowseach) {
                            setTimeout(() => {
                                se.modalCtrl.dismiss();
                            }, 300);
                            se.cin = moment__WEBPACK_IMPORTED_MODULE_8__(fromdate).format("YYYY-MM-DD");
                            se.cout = se.flighttype == "twoway" ? moment__WEBPACK_IMPORTED_MODULE_8__(todate).format("YYYY-MM-DD") : moment__WEBPACK_IMPORTED_MODULE_8__(fromdate).format("YYYY-MM-DD");
                            se.zone.run(() => {
                                se.datecin = new Date(se.cin);
                                se.datecout = new Date(se.cout);
                                se.cindisplay = moment__WEBPACK_IMPORTED_MODULE_8__(se.datecin).format("DD-MM-YYYY");
                                se.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_8__(se.datecout).format("DD-MM-YYYY");
                                se.cindisplaymonth = moment__WEBPACK_IMPORTED_MODULE_8__(se.datecin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("MM");
                                se.coutdisplaymonth = moment__WEBPACK_IMPORTED_MODULE_8__(se.datecout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("MM");
                                se.checkInDisplayMonth = se.getDayOfWeek(se.cin).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("MM");
                                se.checkOutDisplayMonth = se.getDayOfWeek(se.cout).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("MM");
                                se.storage.get("itemFlightCache").then((data) => {
                                    if (data) {
                                        se.storage.remove("itemFlightCache").then(() => {
                                            se.storage.set("itemFlightCache", JSON.stringify(se._flightService.itemFlightCache));
                                        });
                                    }
                                    else {
                                        se.storage.set("itemFlightCache", JSON.stringify(se._flightService.itemFlightCache));
                                    }
                                });
                                se.bindlunar();
                            });
                        }
                    }
                }
            }
        });
    }
    openPickupCalendar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.gf.hideStatusBar();
            if (!this.allowclickcalendar) {
                return;
            }
            this.allowclickcalendar = false;
            let fromdate = new Date(moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format('YYYY-MM-DD'));
            let todate = new Date(moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format('YYYY-MM-DD'));
            let key = "listHotDealCalendar_" + this.departCode + "_" + this.returnCode;
            this.storage.get(key).then((data) => {
                if (!data || (data.arrivals.length == 0 && data.departs.length == 0)) {
                    this.loadCalendarPrice();
                }
            });
            this.countday = moment__WEBPACK_IMPORTED_MODULE_8__(todate).diff(moment__WEBPACK_IMPORTED_MODULE_8__(fromdate), 'days');
            this.countdaydisplay = (this.flighttype == "twoway") ? (this.countday + 1) : 1;
            let _daysConfig = [];
            for (let j = 0; j < this.valueGlobal.listlunar.length; j++) {
                _daysConfig.push({
                    date: this.valueGlobal.listlunar[j].date,
                    subTitle: moment__WEBPACK_IMPORTED_MODULE_8__(this.valueGlobal.listlunar[j].date).format("DD/MM") + ': ' + this.valueGlobal.listlunar[j].name,
                    cssClass: 'lunarcalendar'
                });
            }
            var options;
            if (this.flighttype == "twoway") {
                options = {
                    pickMode: "range",
                    title: "Chọn ngày",
                    monthFormat: " M, YYYY",
                    weekdays: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
                    closeLabel: "",
                    doneLabel: "",
                    step: 0,
                    defaultScrollTo: fromdate,
                    defaultDateRange: { from: fromdate, to: todate },
                    daysConfig: _daysConfig
                };
            }
            else {
                options = {
                    pickMode: "single",
                    title: "Chọn ngày",
                    monthFormat: " M, YYYY",
                    weekdays: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
                    closeLabel: "",
                    doneLabel: "",
                    step: 0,
                    defaultScrollTo: fromdate,
                    defaultDate: fromdate,
                    daysConfig: _daysConfig
                };
            }
            this.myCalendar = yield this.modalCtrl.create({
                component: ion2_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarModal"],
                cssClass: 'flight-calendar-custom',
                animated: true,
                componentProps: { options }
            });
            this.myCalendar.present().then(() => {
                this.allowclickcalendar = true;
                let key = "listHotDealCalendar_" + this.departCode + "_" + this.returnCode;
                this.storage.get(key).then((data) => {
                    if (data) {
                        if (this.flighttype == "twoway") {
                            this.renderCalenderPrice(1, data.departs, data.arrivals);
                        }
                        else {
                            this.renderCalenderPrice(2, data.departs, null);
                        }
                    }
                });
                this.showlowestprice = this._flightService.itemFlightCache.showCalendarLowestPrice;
                setTimeout(() => {
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom ion-calendar-modal ion-toolbar ion-buttons[slot=end]').append("<div class='div-close' (click)='closecalendar()'> <img class='header-img-close' src='./assets/ic_close.svg' ></div>");
                    if (this.countdaydisplay > 0) {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom ion-calendar-modal ion-calendar-week ion-toolbar').before(`<div class='d-flex bg-f2'><div class='div-width-100'> <div class='text-header-normal'>Giá ${this.roundtriptext}</div> </div> <div class='text-header-normal div-width-100 text-right div-calendar-cincout'>Hành trình <span class='text-tealish p-l-4'>${this.countdaydisplay} ngày <img class='img-down' src='./assets/imgs/ic_down.svg'></span></div></div>`);
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom ion-calendar-modal ion-calendar-week ion-toolbar').before(`<div class='d-flex bg-f2'><div class='div-width-100'> <div class='text-header-normal'>Giá ${this.roundtriptext}</div> </div> <div class='text-header-normal div-width-100 text-right div-calendar-cincout'>Hành trình <span class='text-tealish p-l-4'><img class='img-down' src='./assets/imgs/ic_down.svg'></span></div></div>`);
                    }
                    if (this.flighttype == "twoway") {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom ion-calendar-modal ion-calendar-week ion-toolbar').before(`<div class='d-flex p-16 div-show-calendar-cincout calendar-visible'> <div class='div-width-100'> <div class='text-date-normal'>Ngày đi</div><div class='text-flight-datetime'>${this.checkInDisplayMonth} </div></div> <div class='div-width-100'><div class='text-date-normal p-l-8'>Ngày về</div> <div class='text-flight-datetime p-l-8 border-left' *ngIf='flighttype=='twoway''>${this.checkOutDisplayMonth} </div></div></div>`);
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom ion-calendar-modal ion-calendar-week ion-toolbar').before(`<div class='d-flex p-16 div-show-calendar-cincout calendar-visible'> <div class='div-width-100'> <div class='text-date-normal'>Ngày đi</div><div class='text-flight-datetime'>${this.checkInDisplayMonth} </div></div> </div>`);
                    }
                    if (this.showlowestprice) {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom ion-calendar-modal').append(`<div class='d-flex div-lowest-price'><div class='div-width-100 text-lowest-price'>Xem giá ước tính thấp nhất</div> <div class='div-width-100 toggle-right'><ion-toggle style='--handle-height: 24px' class='button-show-lowest-price' mode='ios' (ionChange)="showLowestPrice($event)" [(ngModel)]="showlowestprice" checked></ion-toggle></div> </div>`);
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom ion-calendar-modal').append(`<div class='d-flex div-lowest-price'><div class='div-width-100 text-lowest-price'>Xem giá ước tính thấp nhất</div> <div class='div-width-100 toggle-right'><ion-toggle style='--handle-height: 24px' class='button-show-lowest-price' mode='ios' [(ngModel)]="showlowestprice"></ion-toggle></div> </div>`);
                    }
                    var container = document.querySelector(".button-show-lowest-price");
                    container.addEventListener("touchend", (e) => {
                        this.showLowestPrice(e);
                    }, false);
                    if (jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom .month-box .month-title').length > 0) {
                        for (let index = 0; index < jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom .month-box .month-title').length; index++) {
                            const elementMonthTitle = jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom .month-box .month-title')[index];
                            elementMonthTitle.textContent = 'Tháng' + elementMonthTitle.textContent;
                        }
                    }
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom .header-img-close').click((e => this.closecalendar()));
                    jquery__WEBPACK_IMPORTED_MODULE_4__(".days-btn").click(e => this.clickedElement(e));
                    if (this.showlowestprice) {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.price-calendar-text').removeClass('price-calendar-disabled').addClass('price-calendar-visible');
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.price-calendar-text').removeClass('price-calendar-visible').addClass('price-calendar-disabled');
                    }
                    if (jquery__WEBPACK_IMPORTED_MODULE_4__('.div-calendar-cincout')) {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.div-calendar-cincout').click(e => this.showCalendarCinCout());
                    }
                    let divmonth = jquery__WEBPACK_IMPORTED_MODULE_4__('.month-box');
                    if (divmonth && divmonth.length > 0) {
                        for (let index = 0; index < divmonth.length; index++) {
                            const em = divmonth[index];
                            let divsmall = jquery__WEBPACK_IMPORTED_MODULE_4__('#' + em.id + ' small');
                            if (divsmall && divsmall.length > 0) {
                                jquery__WEBPACK_IMPORTED_MODULE_4__('#' + em.id).append("<div class='div-month-text-small'></div>");
                                for (let i = 0; i < divsmall.length; i++) {
                                    const es = divsmall[i];
                                    jquery__WEBPACK_IMPORTED_MODULE_4__('#' + em.id + ' .div-month-text-small').append("<div class='sm-" + em.id + '-' + i + "'></div>");
                                    jquery__WEBPACK_IMPORTED_MODULE_4__('.sm-' + em.id + '-' + i).append(es);
                                }
                            }
                        }
                    }
                }, 10);
            });
            var se = this;
            const event = yield this.myCalendar.onDidDismiss();
            const date = event.data;
            if (event.data) {
                const from = date.from;
                const to = date.to;
                se.cin = moment__WEBPACK_IMPORTED_MODULE_8__(from.dateObj).format("YYYY-MM-DD");
                se.cout = se.flighttype == "twoway" ? moment__WEBPACK_IMPORTED_MODULE_8__(to.dateObj).format("YYYY-MM-DD") : moment__WEBPACK_IMPORTED_MODULE_8__(from.dateObj).format("YYYY-MM-DD");
                se.zone.run(() => {
                    se.datecin = new Date(se.cin);
                    se.datecout = new Date(se.cout);
                    se.cindisplay = moment__WEBPACK_IMPORTED_MODULE_8__(se.datecin).format("DD-MM-YYYY");
                    se.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_8__(se.datecout).format("DD-MM-YYYY");
                    se.cindisplaymonth = moment__WEBPACK_IMPORTED_MODULE_8__(se.datecin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("MM");
                    se.coutdisplaymonth = moment__WEBPACK_IMPORTED_MODULE_8__(se.datecout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("MM");
                    se.checkInDisplayMonth = se.getDayOfWeek(se.cin).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("MM");
                    se.checkOutDisplayMonth = se.getDayOfWeek(se.cout).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("MM");
                    se.getDayName(se.datecin, se.datecout);
                });
            }
        });
    }
    checklunar(s) {
        return s.indexOf('Mùng') >= 0;
    }
    bindlunar() {
        var se = this;
        se.cofdate = 0;
        se.cotdate = 0;
        if (se.valueGlobal.listlunar) {
            for (let i = 0; i < se.valueGlobal.listlunar.length; i++) {
                var checkdate = moment__WEBPACK_IMPORTED_MODULE_8__(se.valueGlobal.listlunar[i].date).format('YYYY-MM-DD');
                if (checkdate == se.cin) {
                    se.cofdate = 1;
                    if (se.valueGlobal.listlunar[i].isNameDisplay == 1) {
                        var ischecklunar = se.checklunar(se.valueGlobal.listlunar[i].name);
                        if (ischecklunar) {
                            se.cinthu = se.valueGlobal.listlunar[i].name + ' ' + 'tết';
                        }
                        else {
                            se.cinthu = se.valueGlobal.listlunar[i].name;
                        }
                    }
                }
                else {
                    this.getDayName(this.datecin, this.datecout);
                }
                if (checkdate == se.cout) {
                    se.cotdate = 1;
                    if (se.valueGlobal.listlunar[i].isNameDisplay == 1) {
                        var ischecklunar = se.checklunar(se.valueGlobal.listlunar[i].name);
                        if (ischecklunar) {
                            se.coutthu = se.valueGlobal.listlunar[i].name + ' ' + 'tết';
                        }
                        else {
                            se.coutthu = se.valueGlobal.listlunar[i].name;
                        }
                    }
                }
                else {
                    this.getDayName(this.datecin, this.datecout);
                }
            }
        }
    }
    getDayName(datecin, datecout) {
        if (!this.cinthu || !this.cinthushort) {
            this.cinthu = moment__WEBPACK_IMPORTED_MODULE_8__(datecin).format('dddd');
            switch (this.cinthu) {
                case "Monday":
                    this.cinthu = "Thứ 2";
                    this.cinthushort = "T2";
                    break;
                case "Tuesday":
                    this.cinthu = "Thứ 3";
                    this.cinthushort = "T3";
                    break;
                case "Wednesday":
                    this.cinthu = "Thứ 4";
                    this.cinthushort = "T4";
                    break;
                case "Thursday":
                    this.cinthu = "Thứ 5";
                    this.cinthushort = "T5";
                    break;
                case "Friday":
                    this.cinthu = "Thứ 6";
                    this.cinthushort = "T6";
                    break;
                case "Saturday":
                    this.cinthu = "Thứ 7";
                    this.cinthushort = "T7";
                    break;
                default:
                    this.cinthu = "Chủ nhật";
                    this.cinthushort = "CN";
                    break;
            }
        }
        if (!this.coutthu || !this.coutthushort) {
            this.coutthu = moment__WEBPACK_IMPORTED_MODULE_8__(datecout).format('dddd');
            switch (this.coutthu) {
                case "Monday":
                    this.coutthu = "Thứ 2";
                    this.coutthushort = "T2";
                    break;
                case "Tuesday":
                    this.coutthu = "Thứ 3";
                    this.coutthushort = "T3";
                    break;
                case "Wednesday":
                    this.coutthu = "Thứ 4";
                    this.coutthushort = "T4";
                    break;
                case "Thursday":
                    this.coutthu = "Thứ 5";
                    this.coutthushort = "T5";
                    break;
                case "Friday":
                    this.coutthu = "Thứ 6";
                    this.coutthushort = "T6";
                    break;
                case "Saturday":
                    this.coutthu = "Thứ 7";
                    this.coutthushort = "T7";
                    break;
                default:
                    this.coutthu = "Chủ nhật";
                    this.coutthushort = "CN";
                    break;
            }
        }
    }
    getDayOfWeek(date) {
        let d = moment__WEBPACK_IMPORTED_MODULE_8__(date).format('dddd');
        let dayname = '', daynameshort = '';
        switch (d) {
            case "Monday":
                dayname = "Thứ 2";
                daynameshort = "T2";
                break;
            case "Tuesday":
                dayname = "Thứ 3";
                daynameshort = "T3";
                break;
            case "Wednesday":
                dayname = "Thứ 4";
                daynameshort = "T4";
                break;
            case "Thursday":
                dayname = "Thứ 5";
                daynameshort = "T5";
                break;
            case "Friday":
                dayname = "Thứ 6";
                daynameshort = "T6";
                break;
            case "Saturday":
                dayname = "Thứ 7";
                daynameshort = "T7";
                break;
            default:
                dayname = "Chủ nhật";
                daynameshort = "CN";
                break;
        }
        return { dayname: dayname, daynameshort: daynameshort };
    }
    choicePax() {
        this.gf.hideStatusBar();
        if (this.adult) {
            this._flightService.itemFlightCache.adult = this.adult;
        }
        if (this.child) {
            this._flightService.itemFlightCache.child = this.child;
        }
        if (this.infant) {
            this._flightService.itemFlightCache.infant = this.infant;
        }
        if (this.arrchild) {
            this._flightService.itemFlightCache.arrchild = this.arrchild;
        }
        this.gf.setParams(false, "requestcombo");
        this.navCtrl.navigateForward("/flightselectpax");
    }
    checkValidDate() {
        return moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).diff(new Date(), 'days') < 0 ? false : true;
    }
    search() {
        var se = this;
        se._flightService.itemFlightCache = {};
        se._flightService.objectFilter = {};
        se._flightService.objectFilterReturn = {};
        se._flightService.itemFlightCache.departFlight = null;
        se._flightService.itemFlightCache.returnFlight = null;
        se._flightService.itemFlightCache.itemFlight = null;
        se.storage.remove('flightfilterobject');
        if (!se.departCode || !se.returnCode) {
            se.gf.showToastWarning('Vui lòng chọn chiều đi, chiều về.');
            return;
        }
        if (se.departCode && se.returnCode && se.departCode === se.returnCode) {
            se.gf.showToastWarning('Điểm khởi hành không được trùng với điểm đến. Vui lòng kiểm tra lại.');
            return;
        }
        if (!se.checkValidDate()) {
            se.gf.showToastWarning('Ngày khởi hành không được nhỏ hơn ngày hiện tại.');
            return;
        }
        se._flightService.objSearch = {
            departCode: se.departCode,
            arrivalCode: se.returnCode,
            departDate: se.cin,
            returnDate: se.cout,
            adult: se.adult,
            child: se.child ? se.child : 0,
            infant: se.infant ? se.infant : 0,
            title: "Đi " + se.departCity + " - " + se.returnCity,
            subtitle: se.cinthu + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("DD-M-YYYY") + " · " + (se.adult + se.child + (se.infant ? se.infant : 0)) + " khách",
            titleReturn: "Về " + se.returnCity + " - " + se.departCity,
            subtitleReturn: se.coutthu + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("DD-M-YYYY") + " · " + (se.adult + se.child + (se.infant ? se.infant : 0)) + " khách",
            itemSameCity: se.itemSameCity,
            itemDepartSameCity: se.itemDepartSameCity,
            itemReturnSameCity: se.itemReturnSameCity,
            departCity: se.departCity,
            returnCity: se.returnCity,
            roundTrip: (se.flighttype == "twoway") ? true : false
        };
        se._flightService.itemFlightCache.roundTrip = (se.flighttype == "twoway") ? true : false;
        se._flightService.itemFlightCache.checkInDate = se.cin;
        se._flightService.itemFlightCache.checkOutDate = se.cout;
        se._flightService.itemFlightCache.checkInDisplayMonth = se.cindisplaymonth;
        se._flightService.itemFlightCache.checkOutDisplayMonth = se.coutdisplaymonth;
        se._flightService.itemFlightCache.adult = se.adult;
        se._flightService.itemFlightCache.child = se.child;
        se._flightService.itemFlightCache.infant = se.infant ? se.infant : 0;
        se._flightService.itemFlightCache.pax = se.adult + (se.child ? se.child : 0) + (se.infant ? se.infant : 0);
        se._flightService.itemFlightCache.arrchild = se.arrchild;
        se._flightService.itemFlightCache.departCity = se.departCity;
        se._flightService.itemFlightCache.departCode = se.departCode;
        se._flightService.itemFlightCache.departAirport = se.departAirport;
        se._flightService.itemFlightCache.returnCity = se.returnCity;
        se._flightService.itemFlightCache.returnCode = se.returnCode;
        se._flightService.itemFlightCache.returnAirport = se.returnAirport;
        se._flightService.itemFlightCache.step = 1;
        se._flightService.itemFlightCache.isExtenal = se.isExtenal;
        se._flightService.itemFlightCache.departTimeDisplay = se.cinthu + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("MM");
        se._flightService.itemFlightCache.returnTimeDisplay = se.coutthu + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("MM");
        se._flightService.itemFlightCache.departInfoDisplay = "Chiều đi" + " · " + se.cinthu + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("MM");
        se._flightService.itemFlightCache.returnInfoDisplay = "Chiều về" + " · " + se.coutthu + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("MM");
        se._flightService.itemFlightCache.departPaymentTitleDisplay = se.cinthushort + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("DD-MM") + " · " + se.departCode + " - " + se.returnCode + " · ";
        se._flightService.itemFlightCache.returnPaymentTitleDisplay = se.coutthushort + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("DD-MM") + " · " + se.returnCode + " - " + se.departCode + " · ";
        se._flightService.itemFlightCache.checkInDisplay = se.getDayOfWeek(se.cin).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("MM");
        se._flightService.itemFlightCache.checkOutDisplay = se.getDayOfWeek(se.cout).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("MM");
        se._flightService.itemFlightCache.checkInDisplaysort = se.getDayOfWeek(se.cin).daynameshort + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("MM");
        se._flightService.itemFlightCache.checkOutDisplaysort = se.getDayOfWeek(se.cout).daynameshort + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("MM");
        se._flightService.itemFlightCache.objSearch = se._flightService.objSearch;
        if (se.itemSameCity) {
            se._flightService.itemFlightCache.itemSameCity = se.itemSameCity;
            se._flightService.itemFlightCache.itemDepartSameCity = se.itemDepartSameCity;
            se._flightService.itemFlightCache.itemReturnSameCity = se.itemReturnSameCity;
        }
        se.storage.get("itemFlightCache").then((data) => {
            if (data) {
                se.storage.remove("itemFlightCache").then(() => {
                    se.storage.set("itemFlightCache", JSON.stringify(se._flightService.itemFlightCache));
                });
            }
            else {
                se.storage.set("itemFlightCache", JSON.stringify(se._flightService.itemFlightCache));
            }
        });
        se.navCtrl.navigateForward("/flightsearchresult");
    }
    showMyFlight() {
        var se = this;
        if (!se.isConnected) {
            se.gf.showToastWarning('Thiết bị đang không kết nối mạng, vui lòng bật kết nối để tiếp tục thao tác!');
            return;
        }
        se.storage.get("itemFlightCache").then((data) => {
            data = JSON.parse(data);
            if (data.objSearch) {
                let diffday = moment__WEBPACK_IMPORTED_MODULE_8__(data.checkInDate).diff(new Date(), 'days');
                if (diffday < 0) {
                    se.gf.showToastWarning('Ngày khởi hành không được nhỏ hơn ngày hiện tại. Vui lòng chọn lại!');
                    return;
                }
                se._flightService.itemFlightCache = data;
                se._flightService.objSearch = data.objSearch;
                se.navCtrl.navigateForward("/flightsearchresult");
            }
        });
    }
    switchDepart() {
        var se = this;
        let dc = document.getElementsByClassName('div-departcode')[0];
        let rc = document.getElementsByClassName('div-returncode')[0];
        let tempdepartcity = se.returnCity;
        let tempdepartcode = se.returnCode;
        let tempdepartairport = se.returnAirport;
        se.returnCity = se.departCity;
        se.returnCode = se.departCode;
        se.returnAirport = se.departAirport;
        se._flightService.itemFlightCache.returnCity = se.returnCity;
        se._flightService.itemFlightCache.returnCode = se.returnCode;
        se._flightService.itemFlightCache.returnAirport = se.returnAirport;
        se.departCity = tempdepartcity;
        se.departCode = tempdepartcode;
        se.departAirport = tempdepartairport;
        se._flightService.itemFlightCache.departCity = se.departCity;
        se._flightService.itemFlightCache.departCode = se.departCode;
        se._flightService.itemFlightCache.departAirport = se.departAirport;
    }
    loadflighttopdeal() {
        var se = this;
        let urlPath = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFlight + "gate/apiv1/GetHotDeal" + (se.memberid ? "?memberid=" + se.memberid : "");
        var options = {
            method: 'GET',
            url: urlPath,
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            'headers': {
                "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                'Content-Type': 'application/json; charset=utf-8'
            },
        };
        requestretry__WEBPACK_IMPORTED_MODULE_12__(options, function (error, response, body) {
            if (error) {
                error.page = "homeflight";
                error.func = "loadflighttopdeal";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                throw new Error(error);
            }
            ;
            let result = JSON.parse(body);
            if (result && result.length > 0) {
                se.storage.get('flighttopdeal').then((data) => {
                    if (data) {
                        se.storage.remove('flighttopdeal').then(() => {
                            se.storage.set("flighttopdeal", result);
                            se.loadcachetopdeal(data);
                        });
                    }
                    else {
                        se.storage.set("flighttopdeal", result);
                        se.loadcachetopdeal(result);
                    }
                });
            }
        });
    }
    loadcachetopdeal(data) {
        var se = this;
        se.zone.run(() => data.sort(function (a, b) {
            let direction = -1;
            if (a['price'] * 1 < b['price'] * 1) {
                return 1 * direction;
            }
            else if (a['price'] * 1 > b['price'] * 1) {
                return -1 * direction;
            }
        }));
        data.forEach(element => {
            element.roundTrip = false;
            if (element.depart) {
                element.fromPlaceName = element.depart.fromPlaceName;
                element.toPlaceNameDisplay = element.depart.toPlaceName.split(',')[0];
                element.dateDisplay = moment__WEBPACK_IMPORTED_MODULE_8__(element.depart.departTime).format('DD.MM');
                element.dateDepartDisplay = se.getDayOfWeek(element.depart.departTime).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(element.depart.departTime).format('DD') + ' thg ' + moment__WEBPACK_IMPORTED_MODULE_8__(element.depart.departTime).format('MM');
            }
            if (element.return) {
                element.dateDisplay += " - " + moment__WEBPACK_IMPORTED_MODULE_8__(element.return.departTime).format('DD.MM');
                element.dateReturnDisplay = se.getDayOfWeek(element.return.departTime).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(element.return.departTime).format('DD') + ' thg ' + moment__WEBPACK_IMPORTED_MODULE_8__(element.return.departTime).format('MM');
                element.roundTrip = true;
            }
            element.priceDisplay = se.gf.convertNumberToString(element.price);
        });
        se.listflighttopdeal = data;
    }
    select(item) {
        var se = this;
        if (!se.isConnected) {
            se.gf.showToastWarning('Thiết bị đang không kết nối mạng, vui lòng bật kết nối để tiếp tục thao tác!');
            return;
        }
        se._flightService.objectFilter = {};
        se._flightService.itemFlightCache.departFlight = null;
        se._flightService.itemFlightCache.returnFlight = null;
        se._flightService.itemFlightCache.itemFlight = null;
        se.storage.remove('flightfilterobject');
        let objday = se.getDayOfWeek(item.depart.departTime);
        let objdayreturn = se.getDayOfWeek(item.return.departTime);
        se._flightService.objSearch = {
            departCode: item.depart.fromPlace,
            arrivalCode: item.return.fromPlace,
            departDate: item.depart.departTime,
            returnDate: item.return.departTime,
            adult: se.adult ? se.adult : 1,
            child: se.child ? se.child : 0,
            infant: se.infant ? se.infant : 0,
            title: "Đi " + item.fromPlaceName + " - " + item.toPlaceNameDisplay,
            subtitle: objday.dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(item.depart.departTime).format("DD-M-YYYY") + " · " + ((se.adult ? se.adult : 1) + (se.child ? se.child : 0) + (se.infant ? se.infant : 0)) + " khách",
            titleReturn: "Về " + item.toPlaceNameDisplay + " - " + item.fromPlaceName,
            subtitleReturn: objdayreturn.dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(item.return.departTime).format("DD-M-YYYY") + " · " + 1 + " khách",
            itemSameCity: null,
            itemDepartSameCity: "",
            itemReturnSameCity: "",
            departCity: item.fromPlaceName,
            returnCity: item.toPlaceNameDisplay,
            roundTrip: item.roundTrip
        };
        se._flightService.itemFlightCache.roundTrip = item.roundTrip;
        se._flightService.itemFlightCache.checkInDate = item.depart.departTime;
        se._flightService.itemFlightCache.checkOutDate = item.return.departTime;
        se._flightService.itemFlightCache.checkInDisplayMonth = moment__WEBPACK_IMPORTED_MODULE_8__(item.depart.departTime).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(item.depart.departTime).format("MM");
        se._flightService.itemFlightCache.checkOutDisplayMonth = moment__WEBPACK_IMPORTED_MODULE_8__(item.return.departTime).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(item.return.departTime).format("MM");
        se._flightService.itemFlightCache.adult = se.adult ? se.adult : 1;
        se._flightService.itemFlightCache.child = se.child ? se.child : 0;
        se._flightService.itemFlightCache.infant = se.infant ? se.infant : 0;
        se._flightService.itemFlightCache.pax = se._flightService.itemFlightCache.adult * 1 + se._flightService.itemFlightCache.child * 1 + se._flightService.itemFlightCache.infant * 1;
        se._flightService.itemFlightCache.arrchild = se.arrchild ? se.arrchild : [];
        se._flightService.itemFlightCache.departCity = item.fromPlaceName;
        se._flightService.itemFlightCache.departCode = item.depart.fromPlace;
        se._flightService.itemFlightCache.departAirport = "";
        se._flightService.itemFlightCache.returnCity = item.toPlaceNameDisplay;
        se._flightService.itemFlightCache.returnCode = item.return.fromPlace;
        se._flightService.itemFlightCache.returnAirport = "";
        se._flightService.itemFlightCache.step = 1;
        se._flightService.itemFlightCache.departTimeDisplay = objday.dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(item.depart.departTime).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(item.depart.departTime).format("MM");
        se._flightService.itemFlightCache.returnTimeDisplay = objdayreturn.dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(item.return.departTime).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(item.return.departTime).format("MM");
        se._flightService.itemFlightCache.departInfoDisplay = "Chiều đi" + " · " + objday.dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(item.depart.departTime).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(item.depart.departTime).format("MM");
        se._flightService.itemFlightCache.returnInfoDisplay = "Chiều về" + " · " + objdayreturn.dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(item.return.departTime).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(item.return.departTime).format("MM");
        se._flightService.itemFlightCache.departPaymentTitleDisplay = objday.daynameshort + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(item.depart.departTime).format("DD-MM") + " · " + item.depart.fromPlace + " - " + item.return.fromPlace + " · ";
        se._flightService.itemFlightCache.returnPaymentTitleDisplay = objdayreturn.daynameshort + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(item.return.departTime).format("DD-MM") + " · " + item.return.fromPlace + " - " + item.depart.fromPlace + " · ";
        se._flightService.itemFlightCache.checkInDisplay = se.getDayOfWeek(item.depart.departTime).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(item.depart.departTime).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(item.depart.departTime).format("MM");
        se._flightService.itemFlightCache.checkOutDisplay = se.getDayOfWeek(item.return.departTime).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(item.return.departTime).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(item.return.departTime).format("MM");
        se._flightService.itemFlightCache.objSearch = se._flightService.objSearch;
        se.navCtrl.navigateForward("/flightsearchresult");
    }
    getAirpot(code) {
        let name = '';
        let itemairport = this._flightService.listAirport.filter((itemairport) => { return itemairport.code == code; });
        return itemairport && itemairport.length > 0 ? itemairport[0].airport : '';
        return name;
    }
    getRegionByCode(code) {
        let itemairport = this._flightService.listAirport.filter((itemairport) => { return itemairport.code == code; });
        return itemairport && itemairport.length > 0 ? itemairport[0].city : '';
    }
    closecalendar() {
        this.modalCtrl.dismiss();
    }
    showLowestPrice(event) {
        setTimeout(() => {
            this.showlowestprice = event.target.checked;
            this._flightService.itemFlightCache.showCalendarLowestPrice = this.showlowestprice;
            if (this.departCode && this.returnCode) {
                if (this.showlowestprice) {
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.price-calendar-text').removeClass('price-calendar-disabled').addClass('price-calendar-visible');
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.price-calendar-text').removeClass('price-calendar-visible').addClass('price-calendar-disabled');
                }
            }
            else {
                this.gf.showToastWarning('Vui lòng chọn điểm khởi hành và điểm đến trước khi xem lịch giá rẻ.');
            }
        }, 100);
    }
    loadCalendarPrice() {
        if (this.departCode && this.returnCode) {
            let url = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFlight + "gate/apiv1/GetHotDealCalendar?fromplace=" + this.departCode + "&toplace=" + this.returnCode + "&getincache=false";
            this.gf.RequestApi("GET", url, {
                "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                'Content-Type': 'application/json; charset=utf-8'
            }, {}, "homeflight", "showCalendarPrice").then((data) => {
                if (data) {
                    let key = "listHotDealCalendar_" + this.departCode + "_" + this.returnCode;
                    if (data && data.departs && data.departs.length > 0) {
                        this.storage.set(key, data);
                        if (this.flighttype == "twoway") {
                            this.renderCalenderPrice(1, data.departs, data.arrivals);
                        }
                        else {
                            this.renderCalenderPrice(2, data.departs, null);
                        }
                    }
                }
            });
        }
    }
    renderCalenderPrice(type, departs, arrivals) {
        var se = this;
        try {
            if (jquery__WEBPACK_IMPORTED_MODULE_4__('.month-box').length > 0) {
                let diffday = moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).diff(this.cin, "days");
                for (let index = 0; index < jquery__WEBPACK_IMPORTED_MODULE_4__('.month-box').length; index++) {
                    const elementMonth = jquery__WEBPACK_IMPORTED_MODULE_4__('.month-box')[index];
                    let objtextmonth = elementMonth.children[0].textContent.replace('Tháng ', '');
                    let monthstartdate = objtextmonth.trim().split(",")[0];
                    let yearstartdate = objtextmonth.trim().split(",")[1];
                    let textmonth = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(yearstartdate, monthstartdate - 1, 1)).format('YYYY-MM');
                    if (objtextmonth && objtextmonth.length > 0) {
                        let listdepartinmonth = departs.filter((item) => { return moment__WEBPACK_IMPORTED_MODULE_8__(item.departTime).format('YYYY-MM') == textmonth; });
                        let listreturninmonth;
                        if (this.flighttype == "twoway") {
                            listreturninmonth = arrivals.filter((item) => { return moment__WEBPACK_IMPORTED_MODULE_8__(item.departTime).format('YYYY-MM') == textmonth; });
                        }
                        let listdayinmonth = elementMonth.children[1].children[0].children[0].children;
                        if (listdayinmonth && listdayinmonth.length > 0) {
                            for (let j = 0; j < listdayinmonth.length; j++) {
                                const elementday = listdayinmonth[j];
                                if (elementday && elementday.textContent) {
                                    let fday = elementday.textContent;
                                    let fromdate = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(yearstartdate, monthstartdate - 1, fday)).format('YYYY-MM-DD');
                                    let todate = moment__WEBPACK_IMPORTED_MODULE_8__(fromdate).add(diffday, 'days').format('YYYY-MM-DD');
                                    if (fromdate) {
                                        if (type == 1) {
                                            let mindepartvalue = Math.min(...listdepartinmonth.map(o => o.price));
                                            let minreturnvalue = Math.min(...listreturninmonth.map(o => o.price));
                                            let minvalue = mindepartvalue + minreturnvalue;
                                            let pricefromdate = 0;
                                            let itemfromdate = listdepartinmonth.filter((d) => { return moment__WEBPACK_IMPORTED_MODULE_8__(d.departTime).format('YYYY-MM-DD') == fromdate; });
                                            if (itemfromdate && itemfromdate.length > 0) {
                                                pricefromdate = itemfromdate[0].price;
                                            }
                                            let pricetodate = 0;
                                            let itemtodate = listreturninmonth.filter((d) => { return moment__WEBPACK_IMPORTED_MODULE_8__(d.departTime).format('YYYY-MM-DD') == todate; });
                                            if (itemtodate && itemtodate.length > 0) {
                                                pricetodate = itemtodate[0].price;
                                            }
                                            if (pricefromdate && pricetodate) {
                                                let totalpriceitem = pricefromdate + pricetodate;
                                                let totalprice = (totalpriceitem) / 1000 >= 1000 ? se.gf.convertNumberToString(Math.round(totalpriceitem / 1000)) : Math.round((totalpriceitem / 1000));
                                                totalprice = totalprice + "K";
                                                if (minvalue == totalpriceitem) {
                                                    jquery__WEBPACK_IMPORTED_MODULE_4__(elementday.children[0]).append(`<span class='price-calendar-text price-calendar-disabled min-price'>${totalprice}</span>`);
                                                }
                                                else {
                                                    jquery__WEBPACK_IMPORTED_MODULE_4__(elementday.children[0]).append(`<span class='price-calendar-text price-calendar-disabled'>${totalprice}</span>`);
                                                }
                                            }
                                        }
                                        else {
                                            let mindepartvalue = Math.min(...listdepartinmonth.map(o => o.price));
                                            let minvalue = mindepartvalue;
                                            let pricefromdate = 0;
                                            let itemfromdate = listdepartinmonth.filter((d) => { return moment__WEBPACK_IMPORTED_MODULE_8__(d.departTime).format('YYYY-MM-DD') == fromdate; });
                                            if (itemfromdate && itemfromdate.length > 0) {
                                                pricefromdate = itemfromdate[0].price;
                                            }
                                            let totalprice = pricefromdate / 1000 >= 1000 ? se.gf.convertNumberToString(Math.round(pricefromdate / 1000)) : Math.round(pricefromdate / 1000);
                                            totalprice = totalprice + "K";
                                            if (pricefromdate) {
                                                if (minvalue == pricefromdate) {
                                                    jquery__WEBPACK_IMPORTED_MODULE_4__(elementday.children[0]).append(`<span class='price-calendar-text m-l-5 price-calendar-disabled min-price'>${totalprice}</span>`);
                                                }
                                                else {
                                                    jquery__WEBPACK_IMPORTED_MODULE_4__(elementday.children[0]).append(`<span class='price-calendar-text m-l-5 price-calendar-disabled'>${totalprice}</span>`);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (this.showlowestprice) {
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.price-calendar-text').removeClass('price-calendar-disabled').addClass('price-calendar-visible');
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.price-calendar-text').removeClass('price-calendar-visible').addClass('price-calendar-disabled');
                }
            }
        }
        catch (error) {
            console.log('Lỗi jquery khi show lịch giá rẻ: ' + error);
        }
    }
    showCalendarCinCout() {
        var se = this;
        if (jquery__WEBPACK_IMPORTED_MODULE_4__('.div-show-calendar-cincout').hasClass('calendar-visible')) {
            jquery__WEBPACK_IMPORTED_MODULE_4__('.div-show-calendar-cincout').removeClass('calendar-visible').addClass('calendar-disabled');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_4__('.div-show-calendar-cincout').removeClass('calendar-disabled').addClass('calendar-visible');
        }
    }
    loadflighttrips() {
        return new Promise((resolve, reject) => {
            this.storage.get('listmytrips').then(data => {
                if (data) {
                    resolve(data);
                }
                else {
                    this.getdata().then((data) => {
                        resolve(data);
                    });
                }
            });
        });
    }
    getdata() {
        var se = this;
        return new Promise((resolve, reject) => {
            se.storage.get('auth_token').then(auth_token => {
                if (auth_token) {
                    var text = "Bearer " + auth_token;
                    var options = {
                        method: 'GET',
                        url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/api/dashboard/getMyTripPaging?getall=true&getHistory=false&pageIndex=1&pageSize=25',
                        headers: {
                            'accept': 'application/json',
                            'content-type': 'application/json-patch+json',
                            authorization: text
                        }
                    };
                    requestretry__WEBPACK_IMPORTED_MODULE_12__(options, function (error, response, body) {
                        if (error) {
                            error.page = "mytrips";
                            error.func = "getdata";
                            error.param = JSON.stringify(options);
                            _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                        }
                        else {
                            if (body) {
                                se.zone.run(() => {
                                    let lstTrips = JSON.parse(body);
                                    se.storage.get('listmytrips').then(data => {
                                        if (data) {
                                            se.storage.remove('listmytrips').then(() => {
                                                se.storage.set('listmytrips', lstTrips);
                                            });
                                        }
                                        else {
                                            se.storage.set('listmytrips', lstTrips);
                                        }
                                    });
                                    resolve(lstTrips);
                                });
                            }
                        }
                    });
                }
                else {
                    resolve([]);
                }
            });
        });
    }
    filterFlightTopDealByTrips(data) {
        var se = this;
        data = data.filter((datatrip) => { return datatrip.booking_id.indexOf('FLY') != -1 || datatrip.booking_id.indexOf('VMB') != -1 || datatrip.booking_type == 'FLY' || datatrip.booking_type == 'VMB'; });
        if (data && data.length > 0) {
            let listdepartcode = data.map((itemfilter) => { return itemfilter.bookingsComboData[0].departCode; });
            if (listdepartcode && listdepartcode.length > 0) {
                let res = listdepartcode.some(r => r == se.departCode);
                if (!res) {
                    listdepartcode.push(se.departCode);
                }
                const uniqueCode = [...new Set(listdepartcode.map(obj => obj))];
                if (uniqueCode && uniqueCode.length > 0) {
                    se.listflighttopdeal = se.listflighttopdeal.filter((itemdhd) => {
                        let res = uniqueCode.some(code => code == itemdhd.depart.fromPlace);
                        return res;
                    });
                }
            }
            else {
                if (se.departCode) {
                    se.listflighttopdeal = se.listflighttopdeal.filter((itemdhd) => { return itemdhd.depart.fromPlace === se.departCode; });
                }
            }
        }
        else {
            if (se.departCode) {
                se.listflighttopdeal = se.listflighttopdeal.filter((itemdhd) => { return itemdhd.depart.fromPlace === se.departCode; });
            }
        }
    }
    getShowNotice() {
        var se = this;
        var options = {
            'method': 'GET',
            'url': _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/getCovidNotify',
            'headers': {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_12__(options, function (error, response) {
            if (error)
                throw new Error(error);
            var data = JSON.parse(response.body);
            se.isNotice = data.show;
        });
    }
};
HomeflightPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homeflight',
        template: __webpack_require__(/*! ./homeflight.page.html */ "./src/app/homeflight/homeflight.page.html"),
        styles: [__webpack_require__(/*! ./homeflight.page.scss */ "./src/app/homeflight/homeflight.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["GlobalFunction"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        ionic_image_loader__WEBPACK_IMPORTED_MODULE_6__["ImageLoaderService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_9__["ValueGlobal"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_9__["SearchHotel"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_11__["flightService"],
        _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_13__["AppVersion"],
        _network_provider_service__WEBPACK_IMPORTED_MODULE_14__["NetworkProvider"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_15__["BizTravelService"]])
], HomeflightPage);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _homeflight_homeflight_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../homeflight/homeflight.module */ "./src/app/homeflight/homeflight.module.ts");








const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]
    }
];
let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _homeflight_homeflight_module__WEBPACK_IMPORTED_MODULE_7__["HomeflightPageModule"],
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content\n  #scrollArea\n  [fullscreen]=\"true\"\n  class=\"cls-content-cover\"\n  style=\"-background:transparent;overflow: hidden;--offset-bottom: 0px !important;\"\n  [scrollEvents]=\"true\"\n  (ionScroll)=\"scrollFunction($event)\"\n>\n  <ion-refresher *ngIf=\"activeTab ==0\"\n    style=\"margin-top: 24px;\"\n    slot=\"fixed\"\n    pullMin=\"100\"\n    pullMax=\"200\"\n    (ionRefresh)=\"doRefresh($event)\"\n  >\n    <ion-refresher-content\n      pullingIcon=\"none\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"\"\n    ></ion-refresher-content>\n  </ion-refresher>\n  \n<div class=\"div-wraper-home\">\n  <div class=\"cls-notice cls-disabled\" *ngIf=\"isNotice\">\n    <div class=\"div-notice\">\n      <img class=\"img-notice\" src=\"./assets/ic_home/info.svg\" />\n    </div>\n    <div class=\"margin-left-11\">\n      <div class=\"text-info\">\n        Cập Nhật Thông Tin Kiểm Soát Dịch Bệnh Tại Các Địa Phương Trong Nước. <a (click)=\"openWebpage('https://www.ivivu.com/blog/2021/06/nhung-dieu-quan-trong-can-luu-y-khi-du-lich-trong-mua-dich/')\"\n          target=\"_blank\">Xem chi tiết</a></div>\n    </div>\n  </div>\n  <div [ngClass]=\"isNotice ? 'swiper-pagination-notice' : 'swiper-pagination'\">\n    <div (click)=\"setActiveTab(0)\" [ngClass]=\"activeTab ==0 ? 'div-hotel' : 'div-hotel home-deactive-tab'\">\n      <div class=\"div-icon-home text-center\">\n          <img src=\"./assets/ic_home/hotel_enable.svg\" />\n          <!-- <img src=\"./assets/ic_home/hotel_disabled.svg\" *ngIf=\"activeTab !=0\"/> -->\n      </div>\n      <div [ngClass]=\"activeTab ==0 ? 'div-text-home text-center home-active-tab' : 'div-text-home text-center ' \">Khách sạn</div>\n    </div>\n\n    <div (click)=\"setActiveTab(1)\" [ngClass]=\"activeTab ==1 ? 'div-flight' : 'div-flight home-deactive-tab'\">\n      <div class=\"div-icon-home text-center\">\n          <img src=\"./assets/ic_home/flight_enable.svg\" />\n          <!-- <img src=\"./assets/ic_home/flight_disabled.svg\" *ngIf=\"activeTab !=1\"/> -->\n      </div>\n      <div [ngClass]=\"activeTab ==1 ? 'div-text-home text-center home-active-tab' : 'div-text-home text-center ' \">Vé máy bay</div>\n    </div>\n\n    <div (click)=\"setActiveTab(2)\" [ngClass]=\"activeTab ==2 ? 'div-combo' : 'div-combo home-deactive-tab'\">\n      <div class=\"div-icon-home text-center\">\n          <img src=\"./assets/ic_home/combo_enable.svg\" />\n          <!-- <img src=\"./assets/ic_home/combo_disabled.svg\" *ngIf=\"activeTab !=2\"/> -->\n      </div>\n      <div [ngClass]=\"activeTab ==2 ? 'div-text-home text-center home-active-tab' : 'div-text-home text-center ' \">Combo</div>\n    </div>\n\n    <div (click)=\"setActiveTab(3)\" [ngClass]=\"activeTab ==3 ? 'div-food' : 'div-food home-deactive-tab'\">\n      <div class=\"div-icon-home text-center\">\n          <img src=\"./assets/ic_home/food_enable.svg\" />\n          <!-- <img src=\"./assets/ic_home/food_disabled.svg\" *ngIf=\"activeTab !=3\"/> -->\n      </div>\n      <div [ngClass]=\"activeTab ==3 ? 'div-text-home text-center home-active-tab' : 'div-text-home text-center ' \">Bữa trưa</div>\n    </div>\n\n    <!-- <div class=\"div-food\" (click)=\"setActiveTab(3)\">Ăn uống</div> -->\n    \n    <!-- <div class=\"active-mark\"></div> -->\n  </div>\n  <ion-slides (ionSlideDidChange)=\"slidechange()\" #myHomeSlider class=\"home-slider\" >\n    <ion-slide class=\"slide-hotel\">\n       \n    </ion-slide>\n\n    <ion-slide class=\"slide-flight\">\n        \n    </ion-slide>\n\n    <ion-slide class=\"slide-combo\">\n        \n    </ion-slide>\n\n    <ion-slide class=\"slide-food\">\n        \n    </ion-slide>\n\n   \n  </ion-slides>\n</div>\n\n<div [ngClass]=\"activeTab ==0 ? 'div-wraper-hotel cls-visible' : 'div-wraper-hotel cls-disabled'\">\n  <div [ngClass]=\"isNotice ? 'background-notice' : 'background'\">\n    <img class=\"img-background\" src=\"./assets/blue.jpg\">\n    <div class=\"div-wrap-background\"></div>\n    \n    <div class=\"div-wrap-search\" style=\"text-align: center\">\n      <img class=\"img-logo\" src=\"./assets/logo/logo.svg\" />\n    </div>\n    <div *ngIf=\"ischeckvmb == true\"></div>\n    <div *ngIf=\"ischeckks == true\" padding=\"\">\n      <div [ngClass]=\"isNotice ? 'text-home-hotel-notice' : 'text-home-hotel'\">\n        <label class=\"label-home-hotel\">\n          Trải nghiệm kỳ nghỉ tuyệt vời\n        </label>\n      </div>\n      <div class=\"div-wrap-search-input\"></div>\n        <ion-row class=\"row-search-home\" (click)=\"change()\">\n          <div class=\"div-width\">\n            <div class=\"img-input\">\n              <img\n                class=\"img-padding img-location\"\n                src=\"./assets/iocnsearch/ic_location.svg\"\n              />\n            </div>\n  \n            <div class=\"div-input-right text-input-search\">\n              <div *ngIf=\"!input\" class=\"text-placeholder text-middle\">\n                Bạn muốn đi đâu?\n              </div>\n              <div *ngIf=\"input\" class=\"text-search text-middle\">\n                {{ input }}\n              </div>\n            </div>\n          </div>\n        </ion-row>\n        \n        <div *ngIf=\"ischecksearch == false\">\n          <ion-row\n            style=\"background: #ffffff;border-radius: 2px;height:48px;margin-top: 8px\"\n            (click)=\"openPickupCalendar(false)\"\n          >\n          <div class=\"div-width\">\n            <div class=\"div-cin\">\n                <div class=\"img-cin-cout\"><img class=\"img-padding img-checkin\" src=\"./assets/iocnsearch/ic_checkin.svg\"/></div>\n  \n                <div class=\"div-input-right text-input-cin\">\n                  <div *ngIf=\"searchhotel.cindisplay else loaddingcin\">\n                    <div class=\"text-cin\">\n                      <label class=\"text-cin-input\">{{ searchhotel.cindisplay }}</label>\n                    </div>\n                    <div class=\"font-thu\" *ngIf=\"cofdate==0\">\n                      <label class=\"text-color text-cinthu\">{{ searchhotel.cinthu }}</label>\n                    </div>\n                    <div class=\"font-thu\" *ngIf=\"cofdate==1\" >\n                      <label class=\"text-color text-cinthu\" style=\"color: #e52822;\">{{searchhotel.cinthu}}</label>\n                    </div>\n                  </div>\n                  <ng-template #loaddingcin>\n                    <div class=\"div-loadingcin\">\n                      <ion-skeleton-text\n                        animated\n                        style=\"width:100px;margin: 0;height: 32px\"\n                      ></ion-skeleton-text>\n                    </div>\n                  </ng-template>\n                  \n                </div>\n                \n            </div>\n            <div class=\"div-cout\">\n              <div class=\"img-cin-cout p-top-12 p-l-0\">\n                <img class=\"img-padding img-checkout\" src=\"./assets/ic_flight/icon_arrow_gray.svg\">\n            </div>\n  \n                <div class=\"div-input-right text-input-cout m-l-36\">\n                  <div *ngIf=\"searchhotel.coutdisplay else loaddingcout\">\n                    <div class=\"text-cin\">\n                      <label class=\"text-cin-input\">{{ searchhotel.coutdisplay }}</label>\n                    </div>\n                    <div  class=\"font-thu\" >\n                      <label  *ngIf=\"cotdate==0\" class=\"text-color text-cinthu\">{{searchhotel.coutthu}}</label>\n                      <label style=\"color: #e52822\" *ngIf=\"cotdate==1\" class=\"text-color text-cinthu\" >{{searchhotel.coutthu}}</label>\n                    </div>\n                  </div>\n                   <ng-template #loaddingcout>\n                      <div class=\"div-loadingcin\">\n                        <ion-skeleton-text\n                          animated\n                          style=\"width:100px;margin: 0;height: 32px\"\n                        ></ion-skeleton-text>\n                      </div>\n                   </ng-template>\n                </div>\n            </div>\n          </div>\n          </ion-row>\n  \n          <ion-row (click)=\"openmnu()\" style=\"background: #ffffff;border-radius: 2px;margin-top: 8px;height:48px\" >\n            <div class=\"div-width\">\n                <div class=\"img-cin-cout\"><img class=\"img-padding img-people\" src=\"./assets/iocnsearch/ic_people.svg\"/></div>\n  \n                <div class=\"div-input-right\">\n                    <div class=\"text-pax\">\n                        <label class=\"text-cin-input\">{{ adult }} người lớn, {{ child }} trẻ em</label>\n                      </div>\n                      <div class=\"font-thu\">\n                        <label class=\"text-color text-cinthu\">{{ roomnumber }} phòng</label>\n                    </div>\n                </div>\n            </div>\n          </ion-row>\n          <ion-row>\n            <button\n              ion-button\n              round\n              style=\"margin-top: 16px\"\n              (click)=\"search()\"\n              class=\"button btn-search\"\n              clear\n            >\n              Tìm kiếm\n            </button>\n          </ion-row>\n      </div>\n      \n      \n    </div>\n  </div>\n\n\n\n  <div\n    *ngIf=\"ischeck == true && ischeckks == true \"\n    [ngClass]=\"isNotice ? 'cls-content-slide-notice' : 'cls-content-slide'\"\n  >\n  <!-- tìm kiếm gần đây -->\n<ion-row *ngIf=\"arrHistory.length>0\" style=\"margin-left: -5px;padding-top:16px\" class=\"p-left-16\">\n\n  <ion-col size=\"12\" style=\"padding-bottom: 0\">\n    <ion-label class=\"text-title2\">\n      Tìm kiếm gần đây của bạn\n    </ion-label>\n  </ion-col>\n\n</ion-row>\n<div *ngIf=\"arrHistory.length>0\"  class=\"div-scroll-recent\">\n  <div  [ngClass]=\"arrHistory.length==1 ? 'd-flex-only' : 'd-flex-recent'\"  id=\"div-recent\">\n    <div [ngClass]=\"arrHistory.length==1 ? 'div-recent-1' : 'div-recent'\" (click)=\"funcRecent(item)\" *ngFor=\"let item of arrHistory.slice().reverse()\">\n      <div>\n        <img class=\"img-recent\" src={{item.imageUrl}}>\n      </div>\n      <div [ngClass]=\"arrHistory.length==1 ? 'div-right-recent-1' : 'div-right-recent'\">\n        <div class=\"div-text-info-1\">\n          <ion-label >\n            <p class=\"text-hotelname-recent\">{{item.name}}</p>\n              <p class=\"text-info-recent\">{{item.checkInDate}} - {{item.checkOutDate}}</p>\n              <p class=\"text-info-recent-1\">{{item.adult}} người lớn, {{item.child}} trẻ em</p>\n          </ion-label>\n        </div>\n      \n      \n      </div>\n    </div>\n</div>\n\n</div>\n    <ion-row\n      *ngIf=\"blogtrips.length > 0\"\n      style=\"margin-left: -5px;padding-top:16px\"\n      class=\"p-left-16\"\n    >\n      <ion-col size=\"8\" style=\"padding-bottom: 0\">\n        <ion-label class=\"text-title2\">\n          Vi Vu {{ regionnamesuggest }}\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"4\" style=\"padding: 5px 0 0 0\">\n        <div style=\"margin-top: 5px;text-align: right\">\n          <ion-label (click)=\"seemoreblog(1)\" style=\"color: #26bed6\">\n            Xem thêm\n          </ion-label>\n          <img src=\"./assets/imgs/vector.svg\" />\n        </div>\n      </ion-col>\n    </ion-row>\n    <div *ngIf=\"blogtrips.length > 0\" class=\"sub-title p-left-16 p-bottom-0\">\n      <ion-label class=\"text-subtitle\">\n        Tự do khám phá. Tận hưởng trọn vẹn\n      </ion-label>\n    </div>\n    <div\n      *ngIf=\"blogtrips.length > 0\"\n      class=\"innerdeals1 slideblogtrips-scroll\"\n      style=\"overflow-x: scroll; margin-left:0\"\n      padding\n      (scroll)=\"onScrollBlogTrip($event)\"\n    >\n      <div\n        style=\"padding-left: 16px;position: relative;\"\n        class=\"cls-deal cls-blogtrip\"\n        *ngFor=\"let slide of blogtrips; let idx = index\"\n      >\n\n        <div class=\"div-wrap-deal\"> \n          <div class=\"div-wrap-image\">\n            <img\n            (click)=\"clickitemblogtrips(slide)\"\n            class=\"slide2 img\"\n            *ngIf=\"slide.avatar\"\n            [src]=\"slide.avatar\"\n          />\n          <img\n            (click)=\"clickitemblogtrips(slide)\"\n            class=\"slide2 img\"\n            *ngIf=\"!slide.avatar\"\n            src=\"https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage.png\"\n          />\n          </div>\n          <div (click)=\"clickitemblogtrips(slide)\" class=\"float-info\">\n            <h2 class=\"text-title-blog\">\n              {{ slide.title }}\n            </h2>\n          </div>\n        </div>\n        <!-- <div [ngClass]=\"idx == 0 ? 'float-infoicon top-16' : 'float-infoicon top-16 left-28'\" (click)=\"share(slide.url)\">\n          <div class=\"div-wrap-icon\">\n            <img class=\"img-share\"\n            src=\"./assets/imgs/ic_share.svg\"\n          />\n          </div>\n          \n        </div>\n        <div [ngClass]=\"idx == 0 ? 'float-infoiconheart top-16' : 'float-infoiconheart top-16 left-72'\" >\n          <div class=\"div-wrap-icon-heart\">\n            <img\n              *ngIf=\"!slide.Like\"\n              class=\"img-heart\"\n              (click)=\"likeItemblogtrips(slide.id)\"\n              src=\"./assets/imgs/heart-empty.svg\"\n            />\n            <img\n              *ngIf=\"slide.Like\"\n              class=\"img-heart\"\n              (click)=\"unlikeItemblogtrips(slide.id)\"\n              src=\"./assets/imgs/heart-red.svg\"\n            />\n          </div>\n        </div> -->\n       \n      </div>\n      <div *ngIf=\"showloadmoreblogtrip\" class=\"div-loadmore\">\n        <ion-spinner\n          name=\"bubbles\"\n          class=\"spinner-bubbles hydrated\"\n        ></ion-spinner>\n      </div>\n    </div>\n    <div [ngClass]=\"blogtrips.length > 0 ? 'title-padding p-left-16 p-top-21' : 'title-padding p-left-16 p-top-30'\" style=\"background-color: #f2f2f2;\" *ngIf=\"slideData1.length >0\">\n      <ion-label class=\"text-title2\">\n        Ưu đãi tốt nhất hôm nay\n      </ion-label>\n      <div style=\"margin-top: 5px;text-align: right;float: right;background-color: #f2f2f2;\">\n        <ion-label (click)=\"seemoredeal()\" style=\"color: #26bed6\">\n          Xem thêm\n        </ion-label>\n        <img src=\"./assets/imgs/vector.svg\" />\n      </div>\n    </div>\n    <div style=\"background-color: #f2f2f2;\" class=\"sub-title p-left-16 \" *ngIf=\"slideData1.length >0\">\n      <ion-label class=\"text-subtitle\">\n        Nhanh tay đặt ngay. Để mai sẽ lỡ\n      </ion-label>\n    </div>\n    <div *ngIf=\"slideData1.length >0\"\n      class=\"innerdeals1 slide2-scroll\"\n      style=\"overflow-x: scroll;overflow-y: hidden; margin-left: -4px;background-color: #f2f2f2;\"\n      padding\n      (scroll)=\"onScroll($event)\">\n    <div\n        (click)=\"itemclickht(slide)\"\n        class=\"cls-deal\"\n        style=\"padding-left: 16px;position: relative\"\n        *ngFor=\"let slide of slideData1\">\n\n        <div class=\"div-wrap-deal\"> \n          <div class=\"div-wrap-image\">\n            <img class=\"slide2 img\" [src]=\"slide.imageUrl\" />\n            <div class=\"float-promo\">\n              <p class=\"float-promo-description\" *ngIf=\"slide.priceshow\">\n                {{ slide.description }} | {{ slide.priceshow }} triệu/<span *ngIf=\"slide.priceFor!=0\">khách</span><span *ngIf=\"slide.priceFor==0\">phòng</span>\n              </p>\n    \n              <p class=\"float-promo-description\" *ngIf=\"!slide.priceshow\">\n                {{ slide.description }}\n              </p>\n            </div>\n          </div>\n          <div class=\"float-info\">\n            <h2 class=\"hotel-name\" style=\"margin:0\">\n              {{ slide.name }}\n            </h2>\n            <p style=\"margin: 0\">\n              <img *ngIf=\"slide.rating != 0\" src=\"{{ slide.rating }}\" />\n            </p>\n          </div>\n        </div>\n       \n      </div>\n      <div *ngIf=\"showloadmore\" class=\"div-loadmore\">\n        <ion-spinner\n          name=\"bubbles\"\n          class=\"spinner-bubbles hydrated\"\n        ></ion-spinner>\n      </div>\n    </div>\n    <div class=\"title-padding  p-left-16 bg-white\">\n      <ion-label class=\"text-title2\">\n        <!-- Du lịch ngay! Vì bạn xứng đáng -->\n        Du lịch an toàn\n      </ion-label>\n    </div>\n    <div class=\"sub-title p-left-16 bg-white\">\n      <ion-label class=\"text-subtitle\">\n        <!-- Làm việc cả năm. Đến lúc tưởng thưởng -->\n        Nâng cao sức khỏe, cân bằng cuộc sống\n      </ion-label>\n    </div>\n    <div\n      class=\"inner2 slide3-scroll bg-white\"\n      style=\"overflow-x: scroll; margin-left: 0\"\n      padding\n    >\n      <div\n        class=\"cls-mood\"\n        style=\"padding-left: 16px;position: relative;\"\n        *ngFor=\"let slide of slideMood\"\n        (click)=\"itemSelectedmood(slide)\"\n      >\n        <img class=\"slide3 img\" [src]=\"slide.avatar\" />\n        <div class=\"float-info bottom-18\">\n          <p class=\"text-titledes f-20 p-bottom-2\" [innerHTML]=\"slide.title\"></p>\n          <p class=\"cls-subtitle\">\n            {{ slide.shortDescription }} - {{ slide.totalHotel }} Khách sạn\n          </p>\n        </div>\n        <div class=\"grad2\"></div>\n      </div>\n    </div>\n    <div class=\"title-padding-1 p-left-16  bg-white\">\n      <ion-label class=\"text-title2\">\n        Điểm đến yêu thích trong nước\n      </ion-label>\n    </div>\n    <div class=\"sub-title p-left-16  bg-white\">\n      <ion-label class=\"text-subtitle\">\n        Lên rừng xuống biển. Trọn vẹn Việt Nam\n      </ion-label>\n    </div>\n   \n    <div\n      class=\"cls-destination p-left-16  bg-white\"\n      style=\"padding-top:8px;padding-bottom: 16px;\"\n      *ngIf=\"regionsend.length > 0\"\n    >\n      <ion-grid style=\"padding:0\">\n        <!-- row 1 -->\n        <ion-row>\n          <ion-col size=\"8\" class=\"nopadding\">\n            <!-- item 1 -->\n            <ion-row\n              style=\"padding-bottom:8px;padding-right:8px\"\n              (click)=\"itemclickregion(regionsend[0])\" *ngIf=\"regionsend[0]\"\n            >\n              <div class=\" div-info-cover-auto-width\">\n                <img class=\"img-region\" [src]=\"regionsend[0].image\" />\n                <div class=\"float-info-region\">\n                  <p class=\"text-titledes\" [innerHTML]=\"regionsend[0].name\"></p>\n                </div>\n                <div class=\"grad3\"></div>\n              </div>\n            </ion-row>\n\n            <ion-row style=\"padding-right:8px\">\n              <!-- item 2 -->\n              <ion-col\n                size=\"6\"\n                class=\"nopadding\"\n                style=\"padding-right:8px\"\n                (click)=\"itemclickregion(regionsend[2])\"  *ngIf=\"regionsend[2]\"\n              >\n                <div class=\"div-info-cover-auto-width\">\n                  <img class=\"img-region\" [src]=\"regionsend[2].image\" />\n                  <div class=\"float-info-region\">\n                    <p\n                      class=\"text-titledes\"\n                      [innerHTML]=\"regionsend[2].name\"\n                    ></p>\n                  </div>\n                  <div class=\"grad3\"></div>\n                </div>\n              </ion-col>\n              <!-- item 3 -->\n              <ion-col\n                size=\"6\"\n                class=\"nopadding\"\n                (click)=\"itemclickregion(regionsend[3])\"  *ngIf=\"regionsend[3]\"\n              >\n                <div class=\"div-info-cover-auto-width\">\n                  <img class=\"img-region\" [src]=\"regionsend[3].image\" />\n                  <div class=\"float-info-region\">\n                    <p\n                      class=\"text-titledes\"\n                      [innerHTML]=\"regionsend[3].name\"\n                    ></p>\n                  </div>\n                  <div class=\"grad3\"></div>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <!-- item 4 -->\n          <ion-col\n            size=\"4\"\n            class=\"nopadding\"\n            (click)=\"itemclickregion(regionsend[1])\"  *ngIf=\"regionsend[1]\"\n          >\n            <div class=\"div-info-cover-auto-height\">\n              <img class=\"img-region\" [src]=\"regionsend[1].image\" />\n              <div class=\"float-info-region\">\n                <p class=\"text-titledes\" [innerHTML]=\"regionsend[1].name\"></p>\n              </div>\n              <div class=\"grad3\"></div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <!-- row 2 -->\n        <ion-row style=\"padding-top: 8px;\">\n          <!-- item 5 -->\n          <ion-col\n            size=\"3.59\"\n            class=\"nopadding\"\n            (click)=\"itemclickregion(regionsend[5])\"  *ngIf=\"regionsend[5]\"\n          >\n            <div class=\"div-info-cover-auto-height\">\n              <img class=\"img-region\" [src]=\"regionsend[5].image\" />\n              <div class=\"float-info-region\">\n                <p class=\"text-titledes\" [innerHTML]=\"regionsend[5].name\"></p>\n              </div>\n              <div class=\"grad3\"></div>\n            </div>\n          </ion-col>\n          <ion-col class=\"nopadding\" style=\"padding-left:8px\">\n            <!-- item 6 -->\n            <ion-row\n              style=\"padding-bottom:8px;\"\n              (click)=\"itemclickregion(regionsend[6])\"  *ngIf=\"regionsend[6]\"\n            >\n              <div class=\" div-info-cover-auto-width\">\n                <img class=\"img-region\" [src]=\"regionsend[6].image\" />\n                <div class=\"float-info-region\">\n                  <p class=\"text-titledes\" [innerHTML]=\"regionsend[6].name\"></p>\n                </div>\n                <div class=\"grad3\"></div>\n              </div>\n            </ion-row>\n\n            <ion-row>\n              <!-- item 7 -->\n              <ion-col\n                size=\"6\"\n                class=\"nopadding\"\n                style=\"padding-right:8px\"\n                (click)=\"itemclickregion(regionsend[4])\"  *ngIf=\"regionsend[4]\"\n              >\n                <div class=\"div-info-cover-auto-width\">\n                  <img class=\"img-region\" [src]=\"regionsend[4].image\" />\n                  <div class=\"float-info-region\">\n                    <p\n                      class=\"text-titledes\"\n                      [innerHTML]=\"regionsend[4].name\"\n                    ></p>\n                  </div>\n                  <div class=\"grad3\"></div>\n                </div>\n              </ion-col>\n              <!-- item 8 -->\n              <ion-col\n                size=\"6\"\n                class=\"nopadding\"\n                (click)=\"itemclickregion(regionsend[7])\"  *ngIf=\"regionsend[7]\"\n              >\n                <div class=\"div-info-cover-auto-width\">\n                  <img class=\"img-region\" [src]=\"regionsend[7].image\" />\n                  <div class=\"float-info-region\">\n                    <p\n                      class=\"text-titledes\"\n                      [innerHTML]=\"regionsend[7].name\"\n                    ></p>\n                  </div>\n                  <div class=\"grad3\"></div>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <!-- Điểm đến nước ngoài -->\n    <div class=\"title-padding-1 p-left-16 bg-white\">\n      <ion-label class=\"text-title2\">\n        Điểm đến yêu thích nước ngoài\n      </ion-label>\n    </div>\n    <div class=\"sub-title p-left-16 bg-white\">\n      <ion-label class=\"text-subtitle\">\n        Bao la thế giới. Bốn bể là nhà\n      </ion-label>\n    </div>\n    <div\n      class=\"cls-destination p-left-16 bg-white\"\n      style=\"padding-top:8px;padding-bottom: 16px;\"\n      *ngIf=\"regionintersend.length > 0\"\n    >\n      <ion-grid style=\"padding:0\">\n        <!-- row 1 -->\n        <ion-row>\n          <!-- col 1 -->\n          <ion-col\n            size=\"8\"\n            style=\"padding-right:8px\"\n            class=\"nopadding\" *ngIf=\"regionintersend[0]\"\n            (click)=\"itemclickregion(regionintersend[0])\"\n          >\n            <div class=\" div-info-cover-auto-width\">\n              <img class=\"img-region\" [src]=\"regionintersend[0].image\" />\n              <div class=\"float-info-region\">\n                <p\n                  class=\"text-titledes\"\n                  [innerHTML]=\"regionintersend[0].name\"\n                ></p>\n              </div>\n              <div class=\"grad3\"></div>\n            </div>\n          </ion-col>\n          <!-- col 2 -->\n          <ion-col\n            size=\"4\"\n            class=\"nopadding\" *ngIf=\"regionintersend[1]\"\n            (click)=\"itemclickregion(regionintersend[1])\"\n          >\n            <div class=\" div-info-cover-auto-width\">\n              <img class=\"img-region\" [src]=\"regionintersend[1].image\" />\n              <div class=\"float-info-region\">\n                <p\n                  class=\"text-titledes\"\n                  [innerHTML]=\"regionintersend[1].name\"\n                ></p>\n              </div>\n              <div class=\"grad3\"></div></div\n          ></ion-col>\n        </ion-row>\n        <!-- row 2 -->\n        <ion-row style=\"padding-top:8px\">\n          <!-- col 1 -->\n          <ion-col\n            size=\"4\"\n            style=\"padding-right:8px\"\n            class=\"nopadding\" *ngIf=\"regionintersend[2]\"\n            (click)=\"itemclickregion(regionintersend[2])\"\n          >\n            <div class=\" div-info-cover-auto-width\">\n              <img class=\"img-region\" [src]=\"regionintersend[2].image\" />\n              <div class=\"float-info-region\">\n                <p\n                  class=\"text-titledes\"\n                  [innerHTML]=\"regionintersend[2].name\"\n                ></p>\n              </div>\n              <div class=\"grad3\"></div>\n            </div>\n          </ion-col>\n          <!-- col 2 -->\n          <ion-col\n            size=\"4\"\n            style=\"padding-right:8px\"\n            class=\"nopadding\" *ngIf=\"regionintersend[3]\"\n            (click)=\"itemclickregion(regionintersend[3])\"\n          >\n            <div class=\" div-info-cover-auto-width\">\n              <img class=\"img-region\" [src]=\"regionintersend[3].image\" />\n              <div class=\"float-info-region\">\n                <p\n                  class=\"text-titledes\"\n                  [innerHTML]=\"regionintersend[3].name\"\n                ></p>\n              </div>\n              <div class=\"grad3\"></div>\n            </div>\n          </ion-col>\n          <!-- col 3 -->\n          <ion-col\n            size=\"4\"\n            class=\"nopadding\" *ngIf=\"regionintersend[4]\"\n            (click)=\"itemclickregion(regionintersend[4])\"\n          >\n            <div class=\" div-info-cover-auto-width\">\n              <img class=\"img-region\" [src]=\"regionintersend[4].image\" />\n              <div class=\"float-info-region\">\n                <p\n                  class=\"text-titledes\"\n                  [innerHTML]=\"regionintersend[4].name\"\n                ></p>\n              </div>\n              <div class=\"grad3\"></div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div class=\"title-padding-1 p-left-16\" style=\"position: relative;background-color: #f2f2f2;\">\n      <ion-label class=\"text-title2\">\n        Cẩm nang du lịch\n      </ion-label>\n      <div style=\"margin-top: 5px;text-align: right;float: right;\">\n        <ion-label (click)=\"seemoreblog(2)\" style=\"color: #26bed6\">\n          Xem thêm\n        </ion-label>\n        <img src=\"./assets/imgs/vector.svg\" />\n      </div>\n    </div>\n    <div class=\"sub-title p-left-16 p-bottom-0\" style=\"background-color: #f2f2f2;\">\n      <ion-label class=\"text-subtitle\">\n        Cập nhật thông tin. Chuyến đi tuyệt vời\n      </ion-label>\n    </div>\n    <div\n      class=\"innerdeals1 slide5-scroll\"\n      style=\"overflow-x: scroll; overflow-y: hidden; margin-left: 0px;--padding-top: 0px;background-color: #f2f2f2\"\n      padding\n      (scroll)=\"onScrollBlog($event)\"\n    >\n      <div\n        style=\"padding-left: 16px;position: relative;\"\n        class=\"cls-deal cls-blog\"\n        *ngFor=\"let slide of blog; let idx = index\"\n      >\n      <div class=\"div-wrap-deal\"> \n        <div class=\"div-wrap-image\">\n          <img\n          (click)=\"clickitemblog(slide)\"\n          class=\"slide2 img\"\n          *ngIf=\"slide.Avatar\"\n          [src]=\"slide.Avatar\"\n          />\n          <img\n            (click)=\"clickitemblog(slide)\"\n            class=\"slide2 img\"\n            *ngIf=\"!slide.Avatar\"\n            src=\"https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage.png\"\n          />\n        </div>\n        <div (click)=\"clickitemblog(slide)\" class=\"float-info\">\n          <h2 class=\"text-title-blog\">\n            {{ slide.Title }}\n          </h2>\n        </div>\n\n      </div>\n       \n        \n        <!-- <div [ngClass]=\"idx == 0 ? 'float-infoicon top-16' : 'float-infoicon top-16 left-28'\"(click)=\"share(slide.Url)\">\n          <div class=\"div-wrap-icon\">\n            <img class=\"img-share\"\n            src=\"./assets/imgs/ic_share.svg\"\n          />\n          </div>\n          \n        </div>\n        <div [ngClass]=\"idx == 0 ? 'float-infoiconheart top-16' : 'float-infoiconheart top-16 left-72'\" >\n          <div class=\"div-wrap-icon-heart\">\n          <img\n            *ngIf=\"!slide.Like\"\n            class=\"img-heart\"\n            (click)=\"likeItemblog(slide.Id)\"\n            src=\"./assets/imgs/heart-empty.svg\"\n          />\n          <img\n            *ngIf=\"slide.Like\"\n            class=\"img-heart\"\n            (click)=\"unlikeItemblog(slide.Id)\"\n            src=\"./assets/imgs/heart-red.svg\"\n          />\n        </div>\n        </div> -->\n        \n        <!-- <div class=\"grad-blog\" (click)=\"clickitemblog(slide)\"></div> -->\n      </div>\n      <div *ngIf=\"showloadmoreblog\" class=\"div-loadmore\">\n        <ion-spinner\n          name=\"bubbles\"\n          class=\"spinner-bubbles hydrated\"\n        ></ion-spinner>\n      </div>\n    </div>\n  </div>\n  <div\n    *ngIf=\"slideData1.length == 0 && totalItem >0 && isConnected\"\n    style=\"background-color:#ffffff\"\n  >\n    <div *ngIf=\"slideData1.length == 0\" padding>\n      <ion-row>\n        <ion-skeleton-text\n          animated\n          style=\"width:30%;margin: 0;height: 16px;\"\n        ></ion-skeleton-text>\n      </ion-row>\n\n      <ion-row style=\"margin-top:16px\">\n        <ion-col style=\"padding: 0\">\n          <ion-skeleton-text\n            animated\n            style=\"width:100%;height:118px;border-radius: 6px;margin:0\"\n          ></ion-skeleton-text>\n        </ion-col>\n        <ion-col style=\"padding: 0;margin-left:8px\">\n          <ion-skeleton-text\n            animated\n            style=\"width:100%;height:118px;border-radius: 6px;margin:0\"\n          ></ion-skeleton-text>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col style=\"padding: 0\">\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:35%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:85%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:60%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n        </ion-col>\n        <ion-col style=\"padding: 0; margin-left: 8px\">\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:35%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:85%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:60%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"4\" style=\"padding: 0\">\n          <ion-skeleton-text\n            animated\n            style=\"width:100%;margin: 0;height: 16px; margin-top: 32px\"\n          ></ion-skeleton-text>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-top:16px\">\n        <ion-col size=\"4\" style=\"padding: 0\">\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:100%;height:98px;border-radius: 6px;margin:0\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:75%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:30%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"4\" style=\"padding: 0; margin-left: 8px\">\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:100%;height:98px;border-radius: 6px;margin:0\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:75%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:30%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top: 16px\">\n        <ion-col size=\"4\" style=\"padding: 0\">\n          <ion-skeleton-text\n            animated\n            style=\"width:100%;margin: 0;height: 16px\"\n          ></ion-skeleton-text>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-top:16px\">\n        <ion-col size=\"4\" style=\"padding: 0\">\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:100%;height:98px;border-radius: 6px;margin:0\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:75%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"4\" style=\"padding: 0; margin-left: 8px\">\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:100%;height:98px;border-radius: 6px;margin:0\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:75%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top: 32px\">\n        <ion-skeleton-text\n          animated\n          style=\"width:20%;margin: 0;height: 16px\"\n        ></ion-skeleton-text>\n      </ion-row>\n      <ion-row style=\"margin-top:16px\">\n        <ion-col style=\"padding: 0\">\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:100%;height:118px;border-radius: 6px;margin:0\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:100%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:30%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n        </ion-col>\n        <ion-col style=\"padding: 0; margin-left: 8px\">\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:100%;height:118px;border-radius: 6px;margin:0\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:30%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:85%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</div>\n\n<div [ngClass]=\"activeTab ==1 ? 'div-wraper-flight cls-visible' : 'div-wraper-flight cls-disabled' \" style=\"height: 100%\">\n  <app-homeflight ></app-homeflight>\n</div>\n\n<div [ngClass]=\"activeTab ==2 ? 'div-wraper-combo cls-visible' :  'div-wraper-food cls-disabled'\">\n  <app-homecombo></app-homecombo>\n</div>\n\n<!-- <div [ngClass]=\"activeTab ==3 ? 'div-wraper-food cls-visible' :  'div-wraper-food cls-disabled'\">\n  <app-homefood></app-homefood>\n</div> -->\n\n\n  <div\n    *ngIf=\"!isConnected\"\n    style=\"background-color: #ffffff; height: 400px;padding: 16px;\"\n  >\n    <div class=\"img-lostconnection\">\n      <img class=\"img-empty\" src=\"./assets/empty/trip_empty.svg\" />\n    </div>\n    <div class=\"text-lostconnection\">\n      <label\n        >Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng.</label\n      >\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  height: calc(env(safe-area-inset-top) + 568px);\n  position: relative;\n  z-index: 1;\n}\n.background .div-wrap-background {\n  position: absolute;\n  height: calc(env(safe-area-inset-top) + 568px);\n  width: 100%;\n  z-index: -1;\n}\n.background .img-background {\n  width: 100% !important;\n  height: calc(env(safe-area-inset-top) + 568px);\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n  z-index: -1;\n}\n.background .div-wrap-search-input {\n  position: absolute;\n  margin: -8px;\n  padding: 8px;\n  opacity: 0.4;\n  border-radius: 4px;\n  background-color: #222222;\n  z-index: -1;\n  width: 95.8%;\n  height: 287px;\n  margin-top: -36px;\n}\n.background .div-wrap-search {\n  z-index: 1;\n  position: relative;\n}\n.background .text-home-hotel {\n  margin-top: 120px;\n}\n.background .text-home-hotel .label-home-hotel {\n  color: #ffffff;\n  font-size: 17px;\n  line-height: 23px;\n  font-weight: 600;\n}\n.background .text-home-hotel-notice {\n  margin-top: 197px;\n}\n.background .text-home-hotel-notice .label-home-hotel {\n  color: #ffffff;\n  font-size: 17px;\n  line-height: 23px;\n  font-weight: 600;\n}\n.background .row-search-home {\n  background: #ffffff;\n  border-radius: 2px;\n  height: 50px;\n  margin-top: 12px;\n}\n.background-notice {\n  height: calc(env(safe-area-inset-top) + 568px);\n  position: relative;\n  z-index: 1;\n}\n.background-notice .div-wrap-background {\n  position: absolute;\n  height: calc(env(safe-area-inset-top) + 568px);\n  width: 100%;\n  z-index: -1;\n}\n.background-notice .img-background {\n  width: 100% !important;\n  height: calc(env(safe-area-inset-top) + 568px);\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n  z-index: -1;\n}\n.background-notice .div-wrap-search-input {\n  position: absolute;\n  margin: -8px;\n  padding: 8px;\n  opacity: 0.4;\n  border-radius: 4px;\n  background-color: #222222;\n  z-index: -1;\n  width: 95.8%;\n  height: 287px;\n  margin-top: -36px;\n}\n.background-notice .div-wrap-search {\n  z-index: 1;\n  position: relative;\n}\n.background-notice .text-home-hotel {\n  margin-top: 120px;\n}\n.background-notice .text-home-hotel .label-home-hotel {\n  color: #ffffff;\n  font-size: 17px;\n  line-height: 23px;\n  font-weight: 600;\n}\n.background-notice .text-home-hotel-notice {\n  margin-top: 197px;\n}\n.background-notice .text-home-hotel-notice .label-home-hotel {\n  color: #ffffff;\n  font-size: 17px;\n  line-height: 23px;\n  font-weight: 600;\n}\n.background-notice .row-search-home {\n  background: #ffffff;\n  border-radius: 2px;\n  height: 50px;\n  margin-top: 12px;\n}\n.cls-content-slide {\n  background-color: #fff;\n  margin-top: -72px;\n  z-index: 1;\n  position: relative;\n}\n.cls-content-slide-notice {\n  background-color: #fff;\n  z-index: 1;\n  margin-bottom: 48px;\n  position: relative;\n}\n.text-title1 {\n  margin-top: 0.6rem;\n  font-size: 12px;\n  color: #8F8F8F;\n  letter-spacing: 0.2ch;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.text-titledes {\n  margin: 0;\n  font-size: 17px;\n  font-weight: bold;\n  color: #fff;\n  padding-bottom: 6px;\n}\n.text-title-blog {\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 20px;\n  margin: 0;\n  color: #fff;\n  padding-bottom: 2px;\n  overflow: hidden;\n  max-width: 265px;\n  max-height: 39px;\n  -webkit-line-clamp: 2;\n  height: auto;\n  display: -webkit-box;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical;\n}\n.text-title2 {\n  font-weight: bold;\n  font-size: 20px;\n}\n.text-subtitle {\n  font-size: 14px;\n  color: #333333;\n}\n.grad1 {\n  position: absolute;\n  width: 272px;\n  height: 80px;\n  /* For browsers that do not support gradients */\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));\n  z-index: 10;\n  bottom: 4px;\n  left: 8px;\n  border-radius: 6px;\n  opacity: 0.5;\n}\n.grad2 {\n  position: absolute;\n  width: 215px;\n  height: 80px;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));\n  z-index: 10;\n  bottom: 4px;\n  left: 16px;\n  border-radius: 6px;\n  opacity: 0.5;\n}\n.grad3 {\n  position: absolute;\n  width: 100%;\n  height: 48px;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));\n  z-index: 10;\n  bottom: 0px;\n  left: 0px;\n  border-radius: 6px;\n  opacity: 0.5;\n}\n.grad-blog {\n  position: absolute;\n  width: 272px;\n  height: 80px;\n  /* For browsers that do not support gradients */\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));\n  z-index: 10;\n  bottom: 4px;\n  left: 8px;\n  border-radius: 6px;\n  opacity: 0.5;\n}\n.cls-deal:first-child .grad1 {\n  position: absolute;\n  width: 272px;\n  height: 80px;\n  /* For browsers that do not support gradients */\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));\n  z-index: 10;\n  bottom: 4px;\n  left: 8px;\n  border-radius: 6px;\n  opacity: 0.5;\n}\n.cls-blog:first-child .grad1 {\n  position: absolute;\n  width: 272px;\n  height: 80px;\n  /* For browsers that do not support gradients */\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));\n  z-index: 10;\n  bottom: 4px;\n  left: 4px;\n  border-radius: 6px;\n  opacity: 0.5;\n}\n.cls-mood:first-child .grad2 {\n  position: absolute;\n  width: 100%;\n  height: 80px;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));\n  z-index: 10;\n  bottom: 4px;\n  left: 0px;\n  border-radius: 6px;\n  opacity: 0.5;\n}\n.cls-deal:first-child .grad-blog {\n  position: absolute;\n  width: 99%;\n  height: 80px;\n  /* For browsers that do not support gradients */\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));\n  z-index: 10;\n  bottom: 4px;\n  left: 4px;\n  border-radius: 6px;\n  opacity: 0.5;\n}\n.cls-blog:first-child .grad-blog {\n  position: absolute;\n  width: 272px;\n  height: 80px;\n  /* For browsers that do not support gradients */\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));\n  z-index: 10;\n  bottom: 4px;\n  left: 0px;\n  border-radius: 6px;\n  opacity: 0.5;\n}\n.grad-icon-blog {\n  position: absolute;\n  width: 94.5%;\n  height: 56px;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));\n  z-index: 10;\n  top: 0px;\n  left: 16px;\n  border-radius: 6px;\n  opacity: 0.5;\n}\n.cls-deal:first-child .grad-icon-blog {\n  position: absolute;\n  width: 100%;\n  height: 56px;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));\n  z-index: 10;\n  top: 0px;\n  left: 0px;\n  border-radius: 6px;\n  opacity: 0.5;\n}\n.img {\n  border-radius: 5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.cls-deal:first-child .float-infoicon {\n  position: absolute;\n  left: 8px;\n  z-index: 11;\n  width: 48px;\n  height: 48px;\n}\n.float-infoicon {\n  position: absolute;\n  left: 16px;\n  z-index: 11;\n  width: 48px;\n  height: 48px;\n}\n.div-wrap-icon {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 50%;\n  padding: 2px;\n  width: 28px;\n  height: 28px;\n}\n.div-wrap-icon .img-share {\n  width: 18px;\n  margin-left: 3px;\n  margin-top: 1px;\n}\n.div-wrap-icon-heart {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 50%;\n  padding: 2px;\n  width: 28px;\n  height: 28px;\n}\n.div-wrap-icon-heart .img-heart {\n  padding-top: 2px;\n  width: 20px;\n  height: 18px;\n  margin-left: 2px;\n  margin-top: 2px;\n}\n.cls-deal:first-child .float-infoiconheart {\n  position: absolute;\n  bottom: 59px;\n  left: 56px;\n  z-index: 11;\n  width: 48px;\n  height: 48px;\n  padding: 0px 8px 8px 8px;\n}\n.float-infoiconheart {\n  position: absolute;\n  bottom: 59px;\n  left: 56px;\n  z-index: 11;\n  width: 48px;\n  height: 48px;\n  padding: 0px 8px 8px 8px;\n}\n.float-info {\n  position: absolute;\n  bottom: 8px;\n  left: 24px;\n  z-index: 11;\n}\n.float-info-region {\n  position: absolute;\n  bottom: 0px;\n  left: 8px;\n  z-index: 11;\n}\n.float-promo {\n  position: absolute;\n  top: 19px;\n  left: -4px;\n  background-color: #e52822;\n  color: #fff;\n  font-size: 12px;\n  height: 22px;\n  padding: 3px 8px 0px 12px;\n  max-width: 95%;\n}\n.cls-deal:first-child .float-promo {\n  position: absolute;\n  top: 19px;\n  left: -4px;\n  background-color: #e52822;\n  color: #fff;\n  font-size: 12px;\n  height: 22px;\n  padding: 3px 8px 0px 12px;\n  font-weight: bold;\n  max-width: 95%;\n}\n.float-promo-description {\n  margin: 0;\n  width: 100%;\n  color: #fff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: bold;\n}\n.cls-deal:first-child .float-promo:after {\n  content: \" \";\n  position: absolute;\n  left: 0px;\n  top: 22px;\n  border-top: 4px solid #851f1c;\n  border-left: 4px solid transparent;\n  border-bottom: none;\n}\n.float-promo:after {\n  content: \" \";\n  position: absolute;\n  left: 0px;\n  top: 22px;\n  border-top: 4px solid #851f1c;\n  border-left: 4px solid transparent;\n  border-bottom: none;\n}\n.cls-deal:first-child .float-info {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n}\n.cls-mood:first-child .float-info {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n}\n.cls-subtitle {\n  font-size: 14px;\n  color: #fff;\n  padding-right: 15px;\n  margin: 0;\n  height: 29px;\n}\n.div-info-cover-auto-width {\n  position: relative;\n  height: 104px;\n  width: 100%;\n}\n.div-info-cover-auto-height {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n.img-region {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  border-radius: 5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.nopadding {\n  padding: 0;\n}\n.slideblogtrips-scroll {\n  height: 234px;\n}\n@media (min-width: 800px) {\n  .slideblogtrips-scroll {\n    height: 540px;\n  }\n}\n.slide2 {\n  min-width: 272px;\n  height: 208px;\n}\n.slide2-scroll {\n  height: 320px;\n  margin-left: -19px;\n  padding-top: 8px;\n}\n@media (min-width: 320px) and (max-width: 360px) {\n  .slide2-scroll {\n    height: 320px;\n    width: 100%;\n  }\n}\n@media (min-width: 360px) and (max-width: 375px) {\n  .slide2-scroll {\n    height: 320px;\n  }\n}\n@media (min-width: 375px) and (max-width: 384px) {\n  .slide2-scroll {\n    height: 320px;\n  }\n}\n@media (min-width: 384px) and (max-width: 412px) {\n  .slide2-scroll {\n    height: 320px;\n  }\n}\n@media (min-width: 412px) and (max-width: 480px) {\n  .slide2-scroll {\n    height: 320px;\n  }\n}\n@media (min-width: 480px) and (max-width: 600px) {\n  .slide2-scroll {\n    height: 320px;\n  }\n}\n@media (min-width: 600px) and (max-width: 720px) {\n  .slide2-scroll {\n    height: 320px;\n  }\n}\n@media (min-width: 720px) and (max-width: 768px) {\n  .slide2-scroll {\n    height: 320px;\n  }\n}\n@media (min-width: 768px) and (max-width: 800px) {\n  .slide2-scroll {\n    height: 330px;\n  }\n}\n@media (min-width: 800px) {\n  .slide2-scroll {\n    height: 570px;\n  }\n}\n.slide5-scroll {\n  height: 234px;\n  margin-left: -15px;\n}\n@media (min-width: 800px) {\n  .slide5-scroll {\n    height: 540px;\n  }\n}\n.slide3-scroll {\n  height: 300px;\n  margin-left: -15px;\n  padding-top: 8px;\n}\n@media (min-width: 300px) and (max-width: 360px) {\n  .slide3-scroll {\n    height: 160px;\n  }\n}\n@media (min-width: 360px) and (max-width: 375px) {\n  .slide3-scroll {\n    height: 180px;\n  }\n}\n@media (min-width: 375px) and (max-width: 384px) {\n  .slide3-scroll {\n    height: 180px;\n  }\n}\n@media (min-width: 384px) and (max-width: 412px) {\n  .slide3-scroll {\n    height: 180px;\n  }\n}\n@media (min-width: 412px) and (max-width: 480px) {\n  .slide3-scroll {\n    height: 190px;\n  }\n}\n@media (min-width: 480px) and (max-width: 600px) {\n  .slide3-scroll {\n    height: 190px;\n  }\n}\n@media (min-width: 600px) and (max-width: 720px) {\n  .slide3-scroll {\n    height: 190px;\n  }\n}\n@media (min-width: 720px) and (max-width: 768px) {\n  .slide3-scroll {\n    height: 190px;\n  }\n}\n@media (min-width: 768px) and (max-width: 800px) {\n  .slide3-scroll {\n    height: 190px;\n  }\n}\n@media (min-width: 800px) {\n  .slide3-scroll {\n    height: 330px;\n  }\n}\n.slide4-scroll {\n  height: 300px;\n  margin-left: -15px;\n  margin-top: -10px;\n}\n@media (min-width: 300px) and (max-width: 360px) {\n  .slide4-scroll {\n    height: 166px;\n  }\n}\n@media (min-width: 360px) and (max-width: 375px) {\n  .slide4-scroll {\n    height: 186px;\n  }\n}\n@media (min-width: 375px) and (max-width: 384px) {\n  .slide4-scroll {\n    height: 186px;\n  }\n}\n@media (min-width: 384px) and (max-width: 412px) {\n  .slide4-scroll {\n    height: 186px;\n  }\n}\n@media (min-width: 412px) and (max-width: 480px) {\n  .slide4-scroll {\n    height: 196px;\n  }\n}\n@media (min-width: 480px) and (max-width: 600px) {\n  .slide4-scroll {\n    height: 196px;\n  }\n}\n@media (min-width: 600px) and (max-width: 720px) {\n  .slide4-scroll {\n    height: 196px;\n  }\n}\n@media (min-width: 720px) and (max-width: 768px) {\n  .slide4-scroll {\n    height: 196px;\n  }\n}\n@media (min-width: 768px) and (max-width: 800px) {\n  .slide4-scroll {\n    height: 196px;\n  }\n}\n@media (min-width: 800px) {\n  .slide4-scroll {\n    height: 320px;\n  }\n}\n.slide3 {\n  min-width: 216px;\n  height: 282px;\n}\n.innerdeals1 {\n  height: 100%;\n}\n.innerdeals1 div {\n  display: table-cell;\n}\n.innerdeals2 {\n  width: 570px;\n  height: 100%;\n}\n.innerdeals2 div {\n  display: table-cell;\n}\n.innerdeals3 {\n  width: 850px;\n  height: 100%;\n}\n.innerdeals3 div {\n  display: table-cell;\n}\n.innerdeals4 {\n  width: 1120px;\n  height: 100%;\n}\n.innerdeals4 div {\n  display: table-cell;\n}\n.innerdeals5 {\n  width: 1400px;\n  height: 100%;\n}\n.innerdeals5 div {\n  display: table-cell;\n}\n.innerdeals6 {\n  width: 1680px;\n  height: 100%;\n}\n.innerdeals6 div {\n  display: table-cell;\n}\n.innerdeals7 {\n  width: 1950px;\n  height: 100%;\n}\n.innerdeals7 div {\n  display: table-cell;\n}\n.innerdeals8 {\n  width: 2230px;\n  height: 100%;\n}\n.innerdeals8 div {\n  display: table-cell;\n}\n.innerdeals9 {\n  width: 2500px;\n  height: 100%;\n}\n.innerdeals9 div {\n  display: table-cell;\n}\n.innerdeals10 {\n  width: 2780px;\n  height: 100%;\n}\n.innerdeals10 div {\n  display: table-cell;\n}\n.innerdeals11 {\n  width: 3060px;\n  height: 100%;\n}\n.innerdeals11 div {\n  display: table-cell;\n}\n.innerdeals12 {\n  width: 3340px;\n  height: 100%;\n}\n.innerdeals12 div {\n  display: table-cell;\n}\n.innerdeals13 {\n  width: 3610px;\n  height: 100%;\n}\n.innerdeals13 div {\n  display: table-cell;\n}\n.innerdeals14 {\n  width: 3890px;\n  height: 100%;\n}\n.innerdeals14 div {\n  display: table-cell;\n}\n.innerdeals15 {\n  width: 4170px;\n  height: 100%;\n}\n.innerdeals15 div {\n  display: table-cell;\n}\n.innerdeals16 {\n  width: 4450px;\n  height: 100%;\n}\n.innerdeals16 div {\n  display: table-cell;\n}\n.innerdeals17 {\n  width: 4720px;\n  height: 100%;\n}\n.innerdeals17 div {\n  display: table-cell;\n}\n.innerdeals18 {\n  width: 5000px;\n  height: 100%;\n}\n.innerdeals18 div {\n  display: table-cell;\n}\n.innerdeals19 {\n  width: 5280px;\n  height: 100%;\n}\n.innerdeals19 div {\n  display: table-cell;\n}\n.innerdeals20 {\n  width: 5550px;\n  height: 100%;\n}\n.innerdeals20 div {\n  display: table-cell;\n}\n.inner2 {\n  height: 100%;\n}\n.inner2 div {\n  display: table-cell;\n}\n.inner3 {\n  width: 510px;\n  height: 100%;\n}\n.inner3 div {\n  display: table-cell;\n}\n.inner4 {\n  width: 195%;\n  height: 100%;\n}\n.inner4 div {\n  display: table-cell;\n}\n.inner5 {\n  width: 850px;\n  height: 100%;\n}\n.inner5 div {\n  display: table-cell;\n}\n.inner6 {\n  width: 1000px;\n  height: 100%;\n}\n.inner6 div {\n  display: table-cell;\n}\n.inner7 {\n  width: 1170px;\n  height: 100%;\n}\n.inner7 div {\n  display: table-cell;\n}\n.inner8 {\n  width: 1330px;\n  height: 100%;\n}\n.inner8 div {\n  display: table-cell;\n}\n.inner9 {\n  width: 1520px;\n  height: 100%;\n}\n.inner9 div {\n  display: table-cell;\n}\n.inner10 {\n  width: 1690px;\n  height: 100%;\n}\n.inner10 div {\n  display: table-cell;\n}\n.text-price {\n  font-size: 14px;\n  text-align: left;\n  margin-top: 0px;\n  color: #26bed6;\n  font-weight: bold;\n  margin-top: -10px;\n}\n.hotel-name {\n  font-size: 16px;\n  margin-top: -10px;\n  text-align: left;\n  font-weight: bold;\n  white-space: nowrap;\n  width: 260px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #fff;\n}\n.title-blog {\n  font-size: 14px;\n  margin-top: 0px;\n  text-align: left;\n  width: 260px;\n  padding-top: 8px;\n}\ninput[type=text] {\n  width: 100%;\n  border: 0px solid #aaa;\n  margin: 9px -20px;\n  outline: none;\n  box-sizing: border-box;\n  transition: 0.3s;\n  font-size: 16px;\n}\n.item-md ion-avatar {\n  min-width: 0px;\n  min-height: 0px;\n}\n.vl {\n  border-left: 1px solid #bdbdbd;\n  height: 36px;\n  margin-left: 5px;\n}\n.btn-search {\n  border-color: #f59233;\n  color: #ffffff;\n  background: #f59233;\n  width: 100%;\n  height: 52px !important;\n  border-radius: 4px !important;\n  font-size: 18px !important;\n}\n.list-header-md {\n  padding-left: 0px;\n  margin-bottom: 0px;\n  min-height: 0px;\n  border-top: 0px solid #dedede;\n  font-size: 1.4rem;\n  font-weight: bold;\n  color: #222222;\n}\n.item-md {\n  padding-left: 0px;\n}\n/*Style calendar*/\n.col-calendar {\n  z-index: 99;\n}\n.col-calendar {\n  margin-top: 4px;\n}\n.col-calendar .calendar-date.cin {\n  width: 200px;\n  position: absolute;\n  left: -71px;\n  top: 32px;\n}\n.col-calendar .calendar-date.cout {\n  width: 200px;\n  position: absolute;\n  left: -88px;\n  top: 32px;\n}\n.page-main .calendar-date .button {\n  border-color: #f79221;\n  color: #ffffff;\n  background: #f79221;\n}\n.ion-md-calendar:before {\n  content: none;\n}\n.calendar-date .item-inner {\n  margin-left: 0px !important;\n}\n.calendar-date .item-block {\n  min-height: 2.4rem;\n  height: 0px;\n}\npage-main .slide3 {\n  height: 98px;\n  width: 160px !important;\n}\n.item-md ion-thumbnail img {\n  border-radius: 5px;\n}\n.item-ios ion-thumbnail img {\n  border-radius: 5px;\n}\n.cls-deal:first-child {\n  padding-left: 4px !important;\n  overflow: hidden;\n}\n.cls-blog:first-child {\n  padding-left: 0px !important;\n  overflow: hidden;\n}\n.cls-deal:last-child {\n  padding-right: 16px !important;\n}\n.cls-mood:first-child {\n  padding-left: 0px !important;\n}\n.cls-mood:last-child {\n  padding-right: 16px !important;\n}\n.cls-destination:first-child {\n  padding-left: 0px !important;\n}\n.cls-destination:last-child {\n  padding-right: 16px !important;\n}\n/*Style calendar*/\n.range-md-xanh .range-bar-active,\n.range-md-xanh .range-knob,\n.range-md-xanh .range-pin,\n.range-md-xanh .range-pin::before {\n  background: #26bed6 !important;\n}\n.m-left-10 {\n  margin-left: -10px;\n}\n.div-padding {\n  width: 48px;\n  height: 48px;\n  justify-content: center;\n  margin-top: -14px;\n}\nlabel {\n  padding: 18px 0px 18px 0px;\n}\n.text-cinthu {\n  padding: 18px 18px 18px 0px;\n}\n@media (min-width: 300px) and (max-width: 350px) {\n  .img-padding.img-location {\n    margin-left: -2px !important;\n  }\n\n  .img-padding.img-checkin {\n    margin-left: -4px !important;\n  }\n\n  .img-padding.img-checkout {\n    margin-left: -22px !important;\n  }\n\n  .img-padding.img-people {\n    margin-left: -4px !important;\n  }\n\n  .col-calendar {\n    padding-right: 0;\n  }\n}\nbody .alert-title {\n  text-align: center;\n  color: #26bed6;\n}\nbody .toolbar-content-ios {\n  padding-left: 8px;\n}\nbody ion-app.ios [padding] .scroll-content {\n  padding: 16px;\n  padding-top: 16px !important;\n}\nbody .ct-1, body .ct-2, body .ct-8 {\n  margin: 0 0 10px;\n}\nbody .alert-button {\n  color: #fff !important;\n  background-color: #f79221 !important;\n  border-radius: 5px !important;\n}\nbody .range-knob-handle {\n  width: 48px !important;\n  height: 48px !important;\n}\nbody .bar-button-md, body .bar-button-ios {\n  height: 48px;\n}\n.text-loadding {\n  text-align: center;\n}\n.cls-content {\n  background-color: #ffffff;\n}\n.statusbar-margin-top {\n  margin-top: calc(env(safe-area-inset-top) + 22px);\n}\n::ng-deep .cls-content-cover .statusbar-margin-top {\n  margin-top: calc(env(safe-area-inset-top) + 22px);\n}\n@media (min-width: 300px) and (max-width: 412px) {\n  ::ng-deep ion-spinner {\n    height: 160px;\n  }\n}\n@media (min-width: 412px) and (max-width: 800px) {\n  ::ng-deep ion-spinner {\n    height: 160px;\n  }\n  ::ng-deep .div-wrap-search-input {\n    width: 96.2% !important;\n  }\n  ::ng-deep .swiper-pagination {\n    width: 96.2% !important;\n  }\n}\n::ng-deep .lunarcalendar {\n  border: 0.5px solid #e52822;\n  border-radius: 36px !important;\n  width: 30px;\n  height: 30px;\n}\n::ng-deep .lunarcalendar p {\n  color: #e52822 !important;\n}\n::ng-deep .dayhot {\n  background-image: url('ic_fire.svg');\n  background-repeat: no-repeat;\n  background-position: 27px 0px;\n}\n::ng-deep .days {\n  margin-bottom: 20px !important;\n}\n::ng-deep .between .days-btn {\n  border-radius: 0 !important;\n  border: 0 !important;\n}\n::ng-deep .startSelection .days-btn {\n  border: 0 !important;\n}\n::ng-deep .startSelection .days-btn p {\n  color: #fff !important;\n}\n::ng-deep .endSelection .days-btn {\n  border: 0 !important;\n}\n::ng-deep .endSelection .days-btn p {\n  color: #fff !important;\n}\n::ng-deep small {\n  margin: -6px !important;\n  color: #e52822 !important;\n  font-weight: 300 !important;\n  bottom: -6px !important;\n  width: 100px !important;\n  left: -25px !important;\n}\n::ng-deep .p-left-16 {\n  padding-left: 16px !important;\n  padding-right: 16px !important;\n}\n::ng-deep .action-sheets-notification .action-sheet-container.sc-ion-action-sheet-ios {\n  justify-content: flex-start;\n  margin-top: calc(env(safe-area-inset-top) * 2 - 14px);\n  -webkit-padding-start: 8px;\n  padding-inline-start: 8px;\n  -webkit-padding-end: 8px;\n  padding-inline-end: 8px;\n}\n::ng-deep .action-sheets-notification .action-sheet-title.sc-ion-action-sheet-ios {\n  background-color: #ffffff;\n  background-position: unset;\n  text-align: left;\n  font-weight: bold;\n  color: #222222;\n  padding-top: 10px;\n  padding-bottom: 0px;\n  padding-left: 44px;\n  font-size: 14px;\n}\n::ng-deep .action-sheets-notification .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  color: #222222;\n  font-size: 14px;\n}\n::ng-deep .ic_bus2 .action-sheet-group.sc-ion-action-sheet-ios::before {\n  float: left;\n  content: url('ic_bus2.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n::ng-deep .ic_home .action-sheet-group.sc-ion-action-sheet-ios::before {\n  float: left;\n  content: url('ic_home.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n::ng-deep .ic_paper .action-sheet-group.sc-ion-action-sheet-ios::before {\n  float: left;\n  content: url('ic_paper.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n::ng-deep .ic_message .action-sheet-group.sc-ion-action-sheet-ios::before {\n  float: left;\n  content: url('ic_message.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n::ng-deep .action-sheets-notification .action-sheet-group.sc-ion-action-sheet-ios {\n  background-color: #ffffff;\n  box-shadow: 1px 1px 8px 0px #828282;\n  border-radius: 10px !important;\n}\n::ng-deep .action-sheets-notification .action-sheet-button.sc-ion-action-sheet-ios {\n  -webkit-padding-start: 44px;\n          padding-inline-start: 44px;\n  text-align: left;\n  padding-top: 0px;\n  padding-bottom: 13px;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 15px;\n  -webkit-padding-end: 10px;\n  padding-inline-end: 10px;\n  height: auto;\n  min-height: 60px;\n  --background-activated:#fff;\n  --background-selected:#fff;\n  border-bottom: none;\n  margin: 0;\n  width: 100%;\n}\n::ng-deep .fixheight-44 .action-sheet-button.sc-ion-action-sheet-ios {\n  -webkit-padding-start: 44px;\n          padding-inline-start: 44px;\n  text-align: left;\n  padding-top: 0px;\n  padding-bottom: 13px;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 15px;\n  -webkit-padding-end: 10px;\n  padding-inline-end: 10px;\n  height: auto;\n  min-height: 44px !important;\n  --background-activated:#fff;\n  --background-selected:#fff;\n  border-bottom: none;\n}\n::ng-deep .fixheight-80 .action-sheet-button.sc-ion-action-sheet-ios {\n  -webkit-padding-start: 44px;\n          padding-inline-start: 44px;\n  text-align: left;\n  padding-top: 0px;\n  padding-bottom: 13px;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 15px;\n  -webkit-padding-end: 10px;\n  padding-inline-end: 10px;\n  height: auto;\n  min-height: 80px !important;\n  --background-activated:#fff;\n  --background-selected:#fff;\n  border-bottom: none;\n}\n::ng-deep .fixheight-90 .action-sheet-button.sc-ion-action-sheet-ios {\n  -webkit-padding-start: 44px;\n          padding-inline-start: 44px;\n  text-align: left;\n  padding-top: 0px;\n  padding-bottom: 13px;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 15px;\n  -webkit-padding-end: 10px;\n  padding-inline-end: 10px;\n  height: auto;\n  min-height: 90px !important;\n  --background-activated:#fff;\n  --background-selected:#fff;\n  border-bottom: none;\n}\n::ng-deep .action-sheets-notification .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 18px;\n}\n@media (min-width: 250px) and (max-width: 329px) {\n  ::ng-deep .action-sheets-notification .action-sheet-button.sc-ion-action-sheet-ios {\n    min-height: 72px;\n  }\n  ::ng-deep .fixheight-44 .action-sheet-button.sc-ion-action-sheet-ios {\n    min-height: 44px;\n  }\n  ::ng-deep .fixheight-80 .action-sheet-button.sc-ion-action-sheet-ios {\n    min-height: 80px;\n  }\n  ::ng-deep .fixheight-90 .action-sheet-button.sc-ion-action-sheet-ios {\n    min-height: 102px;\n  }\n}\n::ng-deep .ic_bus2 .toast-container::before {\n  float: left;\n  content: url('ic_bus2.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n::ng-deep .ic_home .toast-wrapper.toast-top .toast-container .toast-content::before {\n  float: left;\n  content: url('ic_home.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n::ng-deep .ic_paper .toast-content::before {\n  float: left;\n  content: url('ic_paper.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n::ng-deep .ic_message .toast-content::before {\n  float: left;\n  content: url('ic_message.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n::ng-deep .cls-alert-showmore {\n  align-items: center !important;\n}\n::ng-deep .cls-alert-showmore .done1-combo-css .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 270px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -moz-user-select: none !important;\n   -ms-user-select: none !important;\n       user-select: none !important;\n}\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 15px !important;\n  overflow: hidden !important;\n  width: auto;\n}\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: flex !important;\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n}\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-button.sc-ion-alert-ios {\n  border-color: none;\n  background: none;\n  text-transform: none;\n  font-size: 15px !important;\n}\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-md {\n  text-transform: none;\n  font-size: 14px;\n  padding: 10px 0;\n}\n::ng-deep .alert-button-group.sc-ion-alert-md {\n  flex-wrap: nowrap;\n}\n::ng-deep .alert-button-inner.sc-ion-alert-md {\n  justify-content: center;\n}\n::ng-deep .alert-button.sc-ion-alert-md {\n  padding-right: 0;\n  width: 100%;\n  text-transform: none;\n}\n::ng-deep .home-slider ion-segment-button {\n  text-transform: capitalize;\n  color: #fff;\n}\n::ng-deep .home-slider ion-slide {\n  color: #fff;\n  font-size: 17px;\n  font-weight: 600;\n  height: 50px;\n}\n::ng-deep .home-slider {\n  position: absolute;\n  top: 106px;\n  width: 100%;\n  z-index: 10;\n}\n.img-lostconnection {\n  padding-top: 70px;\n  text-align: center;\n}\n.text-lostconnection {\n  color: #828282;\n  padding: 0 50px;\n  text-align: center;\n}\n.cls-content-cover {\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  scroll-behavior: smooth;\n  --offset-bottom:0px;\n}\n.cls-content-slide:after {\n  content: \" \";\n  height: 200px;\n  background-color: #dedede;\n}\n.div-statusbar-float {\n  position: absolute;\n  z-index: 12;\n  width: 100%;\n  background-color: #ffffff;\n  color: #222222;\n  padding-left: 16px;\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0.2s, opacity 0.2s linear;\n}\n.float-statusbar-enabled {\n  visibility: visible;\n  transition: visibility 0.2s, opacity 0.2s linear;\n  opacity: 1;\n  height: 40px;\n}\n.float-statusbar-disabled {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0.2s, opacity 0.2s linear;\n  z-index: 0;\n}\n.cls-experiencemusttry {\n  padding-top: 7px;\n  padding-bottom: 16px;\n}\n.p-right-8 {\n  margin-right: 8px;\n}\n.m-bottom-8 {\n  margin-bottom: 8px;\n}\n.p-top-30 {\n  padding-top: 30px !important;\n}\n.p-top-21 {\n  padding-top: 21px !important;\n}\n.title-padding {\n  padding: 16px 0px 0px 0px;\n}\n.title-padding-1 {\n  padding: 24px 0px 0px 0px;\n}\n.img-region {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  border-radius: 5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.nopadding {\n  padding: 0;\n}\n.float-info-region {\n  position: absolute;\n  bottom: 0px;\n  left: 8px;\n  z-index: 11;\n}\n.float-info-experience {\n  position: absolute;\n  bottom: 0px;\n  text-align: center;\n  z-index: 11;\n  width: 100%;\n}\n.img-float-experience {\n  position: absolute;\n  bottom: 8px;\n  text-align: center;\n  z-index: 11;\n  width: 100%;\n}\n.img-musttry {\n  height: 96px;\n}\n.text-titleexp {\n  margin: 0;\n  font-size: 16px;\n  font-weight: bold;\n  color: #fff;\n  padding-bottom: 8px;\n  letter-spacing: -0.34px;\n  text-align: center;\n}\n.grad-experience {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10;\n  bottom: 0px;\n  left: 0px;\n  border-radius: 4px;\n}\n.sub-title {\n  line-height: 15px;\n  padding-top: 4px;\n  padding-bottom: 8px;\n}\n.text-placeholder {\n  color: #828282;\n  font-size: 16px;\n  line-height: 20px;\n}\n.text-search {\n  font-size: 16px;\n  line-height: 20px;\n}\n.col-placeholder {\n  align-self: center;\n  padding-top: 0;\n}\n.cls-blogtrip:first-child {\n  padding-left: 0 !important;\n}\n.cls-blogtrip:first-child .grad-blog {\n  left: 0 !important;\n}\n.m-top-7 {\n  margin-top: 7px;\n}\n.div-width {\n  width: 100%;\n}\n.img-input {\n  height: 48px;\n  padding: 16px 20px 16px 18px;\n  width: 50px;\n  position: absolute;\n}\n.img-cin-cout {\n  padding: 14px 20px 14px 17px;\n  position: absolute;\n}\n.p-l-0 {\n  padding-left: 0 !important;\n}\n.img-checkin, .img-people {\n  width: 16px;\n  height: 16px;\n}\n.img-checkout {\n  width: 16px;\n  height: 12px;\n}\n.div-input-right {\n  margin-left: 51px;\n}\n.m-l-36 {\n  margin-left: 36px !important;\n}\n.div-cin {\n  position: absolute;\n  width: 46%;\n  height: 48px;\n}\n.text-input-search {\n  margin: 0px 0 14px 51px;\n}\n.text-input-search-wraptext {\n  margin: 4px 0 14px 51px;\n}\n.text-middle {\n  display: table-cell;\n  vertical-align: middle;\n  height: 48px;\n}\n.text-cin, .text-pax {\n  font-size: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #333333;\n  letter-spacing: -0.34px;\n  margin-top: 6px;\n}\n.text-color {\n  color: #828282;\n}\n.font-thu {\n  margin-top: 1px;\n  font-size: 12px;\n  letter-spacing: -0.34px;\n}\n.div-cout {\n  position: absolute;\n  margin-left: 158px;\n  height: 48px;\n}\n.div-img-coffee {\n  bottom: 40px;\n}\n.img-coffee {\n  height: 32px;\n}\n.img-logo {\n  width: 76px;\n  margin-top: calc(env(safe-area-inset-top) + 22px);\n  z-index: 10;\n  position: relative;\n}\n.div-wraper-slide {\n  position: absolute;\n  height: calc(env(safe-area-inset-top) + 128px) !important;\n  width: 100%;\n  background-color: rgba(0, 60, 113, 0.2);\n  z-index: 10;\n}\n.swiper-pagination {\n  display: flex;\n  position: absolute;\n  top: calc(env(safe-area-inset-top) + 94px);\n  background: #fff;\n  height: 86px;\n  padding: 16px 0;\n  margin-left: 8px;\n  width: 95.8%;\n  border-radius: 4px;\n  z-index: 99;\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: -0.42px;\n  color: #222222;\n}\n.swiper-pagination .div-hotel, .swiper-pagination .div-flight, .swiper-pagination .div-combo, .swiper-pagination .div-food {\n  width: 25%;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 300;\n}\n.swiper-pagination .active-mark {\n  position: absolute;\n  bottom: 0;\n  font-weight: 600 !important;\n  transition: left 0.5s ease-out;\n  width: 30%;\n  left: 0%;\n  height: 100%;\n  background: #cdcdcd;\n  z-index: -1;\n  border-radius: 2px;\n  background-color: rgba(255, 255, 255, 0.26);\n  margin-left: 16px;\n  top: -3px;\n}\n.swiper-pagination .sub-color {\n  font-weight: 300;\n  opacity: 0.7;\n}\n.swiper-pagination .left-50 {\n  left: 37%;\n  margin-left: -6px;\n}\n.swiper-pagination .left-66 {\n  left: 70%;\n  margin-left: -4px;\n  width: 27%;\n}\n.swiper-pagination .focus {\n  font-weight: 600 !important;\n  opacity: 1 !important;\n}\n.cls-visible {\n  visibility: visible;\n  transition: visibility 2s, opacity 0.5s linear;\n  opacity: 1;\n}\n.cls-disabled {\n  visibility: hidden;\n  height: 0px;\n  opacity: 0;\n  transition: visibility 2s, opacity 0.5s linear;\n  z-index: 0;\n  display: none;\n}\n.div-wraper-food {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.swiper-pagination.main-color {\n  color: #ffffff !important;\n}\n.div-hotel.main-color {\n  color: #ffffff !important;\n}\n.div-flight.main-color {\n  color: #ffffff !important;\n}\n.home-active-tab {\n  color: #26bed6;\n  font-weight: bold;\n}\n.home-deactive-tab {\n  color: #333333;\n  opacity: 0.65;\n  letter-spacing: -0.4px !important;\n}\n.div-icon-home {\n  margin-bottom: 6px;\n}\n.cls-notice {\n  display: flex;\n  position: absolute;\n  top: calc(env(safe-area-inset-top) + 94px);\n  background-color: #feeec7;\n  height: 67px;\n  padding: 16px 0;\n  margin-left: 8px;\n  border-radius: 4px;\n  z-index: 99;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.4;\n  letter-spacing: -0.69px;\n  color: #333333;\n  margin-right: 8px;\n}\n.cls-notice .div-hotel, .cls-notice .div-flight, .cls-notice .div-combo, .cls-notice .div-food {\n  width: 25%;\n  text-align: center;\n  font-size: 12px;\n  font-weight: 300;\n}\n.cls-notice .active-mark {\n  position: absolute;\n  bottom: 0;\n  font-weight: 600 !important;\n  transition: left 0.5s ease-out;\n  width: 30%;\n  left: 0%;\n  height: 100%;\n  background: #cdcdcd;\n  z-index: -1;\n  border-radius: 2px;\n  background-color: rgba(255, 255, 255, 0.26);\n  margin-left: 16px;\n  top: -3px;\n}\n.cls-notice .sub-color {\n  font-weight: 300;\n  opacity: 0.7;\n}\n.cls-notice .left-50 {\n  left: 37%;\n  margin-left: -6px;\n}\n.cls-notice .left-66 {\n  left: 70%;\n  margin-left: -4px;\n  width: 27%;\n}\n.cls-notice .focus {\n  font-weight: 600 !important;\n  opacity: 1 !important;\n}\n.swiper-pagination-notice {\n  display: flex;\n  position: absolute;\n  top: calc(env(safe-area-inset-top) + 171px);\n  width: 100%;\n  background: #fff;\n  height: 86px;\n  padding: 16px 0;\n  margin-left: 8px;\n  width: 95.2%;\n  border-radius: 4px;\n  z-index: 99;\n  font-size: 12px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: -0.34px;\n  color: #222222;\n}\n.swiper-pagination-notice .div-hotel, .swiper-pagination-notice .div-flight, .swiper-pagination-notice .div-combo, .swiper-pagination-notice .div-food {\n  width: 25%;\n  text-align: center;\n  font-size: 12px;\n  font-weight: 300;\n}\n.swiper-pagination-notice .active-mark {\n  position: absolute;\n  bottom: 0;\n  font-weight: 600 !important;\n  transition: left 0.5s ease-out;\n  width: 30%;\n  left: 0%;\n  height: 100%;\n  background: #cdcdcd;\n  z-index: -1;\n  border-radius: 2px;\n  background-color: rgba(255, 255, 255, 0.26);\n  margin-left: 16px;\n  top: -3px;\n}\n.swiper-pagination-notice .sub-color {\n  font-weight: 300;\n  opacity: 0.7;\n}\n.swiper-pagination-notice .left-50 {\n  left: 37%;\n  margin-left: -6px;\n}\n.swiper-pagination-notice .left-66 {\n  left: 70%;\n  margin-left: -4px;\n  width: 27%;\n}\n.swiper-pagination-notice .focus {\n  font-weight: 600 !important;\n  opacity: 1 !important;\n}\n.div-notice {\n  align-self: center;\n  margin-left: 6px;\n  margin-top: 5px;\n}\n.margin-left-11 {\n  margin-left: 11px;\n}\n.img-notice {\n  width: 32px;\n  height: 32px;\n}\n.text-info {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.4;\n  color: #333333;\n}\n.top-12 {\n  top: 12px;\n}\n.div-wrap-deal {\n  display: flex !important;\n  flex-direction: column;\n}\n.div-wrap-deal .float-infoicon {\n  left: 12px !important;\n}\n.div-wrap-deal .div-wrap-image {\n  position: relative;\n  height: 170px;\n}\n.div-wrap-deal .hotel-name {\n  color: #222222;\n}\n.div-wrap-deal .float-info {\n  position: relative !important;\n  left: 0 !important;\n  height: 54px;\n  bottom: 0px !important;\n  background: #fff;\n  padding: 8px;\n  border-radius: 0 0 4px 4px;\n}\n.div-wrap-deal .img {\n  border-radius: 5px 5px 0 0px !important;\n}\n.div-wrap-deal .slide2 {\n  height: 170px !important;\n}\n.div-wrap-deal .text-title-blog {\n  color: #222222;\n}\n.float-infoicon {\n  left: 12px !important;\n}\n.left-28 {\n  left: 28px !important;\n}\n.left-72 {\n  left: 72px !important;\n}\n.top-4 {\n  top: 4px !important;\n}\n.top-16 {\n  top: 16px;\n}\n.bg-white {\n  background-color: #ffffff;\n}\n.p-bottom-0 {\n  padding-bottom: 0 !important;\n}\n.p-top-24 {\n  padding-top: 24px;\n}\n.bottom-18 {\n  bottom: 18px !important;\n}\n.f-20 {\n  font-size: 20px !important;\n}\n.p-bottom-2 {\n  padding-bottom: 2px !important;\n}\n.div-loadingcin {\n  padding-top: 8px;\n}\n.col-img-hotel {\n  height: 123px;\n  position: absolute;\n}\n.img-recent {\n  height: 96px;\n  width: 96px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.text-hotelname-recent {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.3;\n  color: #333;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-info-recent {\n  font-size: 12px;\n  color: #828282;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-info-recent-1 {\n  font-size: 12px;\n  color: #828282;\n  line-height: 8px;\n  margin-top: 5px;\n}\n.div-text-info {\n  margin: 12px;\n}\n.div-text-info-1 {\n  margin-top: 20px !important;\n  margin: 12px;\n}\n.div-right-recent-1 {\n  width: 75%;\n  background-color: #fff;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);\n}\n.div-right-recent {\n  width: 69%;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);\n}\n.div-recent {\n  margin-left: 16px;\n  height: 96px;\n  width: 311px;\n  display: flex;\n}\n.div-recent-1 {\n  margin-right: 16px;\n  height: 96px;\n  width: 100%;\n  display: flex;\n  margin-left: 16px;\n}\n.d-flex-recent {\n  display: flex;\n  width: 660px;\n}\n.d-flex-only {\n  display: flex;\n}\n.div-scroll-recent {\n  overflow-x: scroll;\n  height: 100px;\n  margin-top: 16px;\n  overflow-y: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0FGO0FERUU7RUFFRSxrQkFBQTtFQUNBLDhDQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNESjtBREdFO0VBQ0Usc0JBQUE7RUFFQSw4Q0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNGSjtBRElFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNGSjtBREtFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FDSEo7QURLRTtFQUdFLGlCQUFBO0FDTEo7QURPSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0xOO0FEUUU7RUFHRSxpQkFBQTtBQ1JKO0FEVUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNSTjtBRFdFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1RKO0FEWUE7RUFFRSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ1ZGO0FEWUU7RUFFRSxrQkFBQTtFQUNBLDhDQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNYSjtBRGFFO0VBQ0Usc0JBQUE7RUFFQSw4Q0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNaSjtBRGNFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlC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d0JJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNyQk47QURzQk07RUFDRSxtQkFBQTtBQ3BCUjtBRHVCSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDcEJOO0FEcUJNO0VBQ0UsbUJBQUE7QUNuQlI7QURzQkk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ25CTjtBRG9CTTtFQUNFLG1CQUFBO0FDbEJSO0FEcUJJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNsQk47QURtQk07RUFDRSxtQkFBQTtBQ2pCUjtBRG9CSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDakJOO0FEa0JNO0VBQ0UsbUJBQUE7QUNoQlI7QURtQkk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ2hCTjtBRGlCTTtFQUNFLG1CQUFBO0FDZlI7QURrQkk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ2ZOO0FEZ0JNO0VBQ0UsbUJBQUE7QUNkUjtBRGlCSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDZE47QURlTTtFQUNFLG1CQUFBO0FDYlI7QURnQkk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ2JOO0FEY007RUFDRSxtQkFBQTtBQ1pSO0FEZ0JJO0VBQ0UsWUFBQTtBQ2JOO0FEY007RUFDRSxtQkFBQTtBQ1pSO0FEZUk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ1pOO0FEYU07RUFDRSxtQkFBQTtBQ1hSO0FEY0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ1hOO0FEWU07RUFDRSxtQkFBQTtBQ1ZSO0FEYUk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ1ZOO0FEV007RUFDRSxtQkFBQTtBQ1RSO0FEWUk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ1ROO0FEVU07RUFDRSxtQkFBQTtBQ1JSO0FEV0k7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ1JOO0FEU007RUFDRSxtQkFBQTtBQ1BSO0FEVUk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ1BOO0FEUU07RUFDRSxtQkFBQTtBQ05SO0FEU0k7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ05OO0FET007RUFDRSxtQkFBQTtBQ0xSO0FEUUk7RUFDRSxhQUFBO0VB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QTtBQ3BHRjtBRHVHQTtFQUNFLGdCQUFBO0FDcEdGO0FEc0dBO0VBRUUsYUFBQTtFQUNBLGtCQUFBO0FDcEdGO0FEc0dBO0VBQ0UsWUFBQTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDbkdKO0FEcUdBO0VBQ0UsZUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDbEdKO0FEcUdBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7QUNsR0o7QURxR0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ2xHRjtBRG9HQTtFQUNFLFlBQUE7QUNqR0Y7QURtR0E7RUFDRSwyQkFBQTtFQUNBLFlBQUE7QUNoR0Y7QURrR0E7RUFDRSxVQUFBO0VBQ0Esc0JBQUE7RUFFQywwQ0FBQTtBQ2hHSDtBRG1HQTtFQUNFLFVBQUE7RUFDQSwwQ0FBQTtBQ2hHRjtBRGtHQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDL0ZGO0FEaUdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQzlGRjtBRGdHQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDN0ZGO0FEK0ZBO0VBQ0UsYUFBQTtBQzVGRjtBRDhGQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUMzRkoiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XHJcbiAgXHJcbiAgaGVpZ2h0OiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDU2OHB4KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuXHJcbiAgLmRpdi13cmFwLWJhY2tncm91bmR7XHJcbiAgICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyA1NjhweCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICAuaW1nLWJhY2tncm91bmR7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgNTY4cHgpO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcbiAgLmRpdi13cmFwLXNlYXJjaC1pbnB1dHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogLThweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHdpZHRoOiA5NS44JTtcclxuICAgIGhlaWdodDogMjg3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzZweDtcclxuICB9XHJcblxyXG4gIC5kaXYtd3JhcC1zZWFyY2h7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAudGV4dC1ob21lLWhvdGVse1xyXG4gICAgLy90ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvL21hcmdpbi10b3A6IDQ2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcclxuXHJcbiAgICAubGFiZWwtaG9tZS1ob3RlbHtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50ZXh0LWhvbWUtaG90ZWwtbm90aWNle1xyXG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogNDZweDtcclxuICAgIG1hcmdpbi10b3A6IDE5N3B4O1xyXG5cclxuICAgIC5sYWJlbC1ob21lLWhvdGVse1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbiAgLnJvdy1zZWFyY2gtaG9tZXtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIH1cclxufVxyXG4uYmFja2dyb3VuZC1ub3RpY2V7XHJcbiAgXHJcbiAgaGVpZ2h0OiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDU2OHB4KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuXHJcbiAgLmRpdi13cmFwLWJhY2tncm91bmR7XHJcbiAgICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyA1NjhweCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICAuaW1nLWJhY2tncm91bmR7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgNTY4cHgpO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcbiAgLmRpdi13cmFwLXNlYXJjaC1pbnB1dHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogLThweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHdpZHRoOiA5NS44JTtcclxuICAgIGhlaWdodDogMjg3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzZweDtcclxuICB9XHJcblxyXG4gIC5kaXYtd3JhcC1zZWFyY2h7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAudGV4dC1ob21lLWhvdGVse1xyXG4gICAgLy90ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvL21hcmdpbi10b3A6IDQ2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcclxuXHJcbiAgICAubGFiZWwtaG9tZS1ob3RlbHtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50ZXh0LWhvbWUtaG90ZWwtbm90aWNle1xyXG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogNDZweDtcclxuICAgIG1hcmdpbi10b3A6IDE5N3B4O1xyXG5cclxuICAgIC5sYWJlbC1ob21lLWhvdGVse1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbiAgLnJvdy1zZWFyY2gtaG9tZXtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIH1cclxufVxyXG4uY2xzLWNvbnRlbnQtc2xpZGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IC03MnB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIC8vcGFkZGluZy1ib3R0b206IDQ4cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNscy1jb250ZW50LXNsaWRlLW5vdGljZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuICAgIC50ZXh0LXRpdGxlMVxyXG4gICAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwLjZyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICM4RjhGOEY7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJjaDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMFxyXG4gICAgXHJcbiAgICB9XHJcbiAgICAudGV4dC10aXRsZWRlc1xyXG4gICAge1xyXG4gICAgICAvL21hcmdpbi10b3A6IDAuNnJlbTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjojZmZmO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gICAgfVxyXG4gICAgLnRleHQtdGl0bGUtYmxvZ3tcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBjb2xvcjojZmZmO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBtYXgtd2lkdGg6IDI2NXB4O1xyXG4gICAgICBtYXgtaGVpZ2h0OiAzOXB4O1xyXG4gICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgIC8qIGF1dG9wcmVmaXhlcjogaWdub3JlIG5leHQgKi8gLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIH1cclxuICAgIC50ZXh0LXRpdGxlMlxyXG4gICAge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAudGV4dC1zdWJ0aXRsZXtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjojMzMzMzMzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZ3JhZDEge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICB3aWR0aDogMjcycHg7XHJcbiAgICAgIGhlaWdodDogODBweDsgLyogRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzICovXHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4zKSk7XHJcbiAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICBib3R0b206NHB4O1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIC8vb3BhY2l0eTogMC41O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIG9wYWNpdHk6MC41O1xyXG4gICAgfVxyXG4gICAgLmdyYWQyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgICAgd2lkdGg6IDIxNXB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7IC8vIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAvXHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4zKSk7IC8vIFN0YW5kYXJkIHN5bnRheCAobXVzdCBiZSBsYXN0KSAvXHJcbiAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICBib3R0b206NHB4O1xyXG4gICAgICBsZWZ0OiAxNnB4O1xyXG4gICAgICAvL29wYWNpdHk6IDAuNTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICBvcGFjaXR5OjAuNTtcclxuICAgIH1cclxuICAgIC5ncmFkMyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDQ4cHg7IC8vIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAvXHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4yKSk7IC8vIFN0YW5kYXJkIHN5bnRheCAobXVzdCBiZSBsYXN0KSAvXHJcbiAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICBib3R0b206MHB4O1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIC8vb3BhY2l0eTogMC41O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIG9wYWNpdHk6MC41O1xyXG4gICAgfVxyXG4gICAgLmdyYWQtYmxvZ3tcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgICAgd2lkdGg6IDI3MnB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7IC8qIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAqL1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMykpO1xyXG4gICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgYm90dG9tOjRweDtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICAvL29wYWNpdHk6IDAuNTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICBvcGFjaXR5OjAuNTtcclxuICAgIH1cclxuICAgIC5jbHMtZGVhbDpmaXJzdC1jaGlsZCAuZ3JhZDEge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICB3aWR0aDogMjcycHg7XHJcbiAgICAgIGhlaWdodDogODBweDsgLyogRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzICovXHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4zKSk7XHJcbiAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICBib3R0b206NHB4O1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIC8vb3BhY2l0eTogMC41O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIG9wYWNpdHk6MC41O1xyXG4gICAgfVxyXG4gICAgLmNscy1ibG9nOmZpcnN0LWNoaWxkIC5ncmFkMSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICAgIHdpZHRoOiAyNzJweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4OyAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjMpKTtcclxuICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgIGJvdHRvbTo0cHg7XHJcbiAgICAgIGxlZnQ6IDRweDtcclxuICAgICAgLy9vcGFjaXR5OiAwLjU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgb3BhY2l0eTowLjU7XHJcbiAgICB9XHJcbiAgICAuY2xzLW1vb2Q6Zmlyc3QtY2hpbGQgLmdyYWQye1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA4MHB4OyAvLyBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgL1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMykpOyAvLyBTdGFuZGFyZCBzeW50YXggKG11c3QgYmUgbGFzdCkgL1xyXG4gICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgYm90dG9tOjRweDtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAvL29wYWNpdHk6IDAuNTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICBvcGFjaXR5OjAuNTtcclxuICAgIH1cclxuICAgIC5jbHMtZGVhbDpmaXJzdC1jaGlsZCAuZ3JhZC1ibG9ne1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICB3aWR0aDogOTklO1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7IC8qIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAqL1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMykpO1xyXG4gICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgYm90dG9tOjRweDtcclxuICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAvL29wYWNpdHk6IDAuNTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICBvcGFjaXR5OjAuNTtcclxuICAgIH1cclxuICAgIC5jbHMtYmxvZzpmaXJzdC1jaGlsZCAuZ3JhZC1ibG9ne1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICB3aWR0aDogMjcycHg7XHJcbiAgICAgIGhlaWdodDogODBweDsgLyogRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzICovXHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4zKSk7XHJcbiAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICBib3R0b206NHB4O1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIC8vb3BhY2l0eTogMC41O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIG9wYWNpdHk6MC41O1xyXG4gICAgfVxyXG5cclxuICAgIC5ncmFkLWljb24tYmxvZ3tcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgICAgd2lkdGg6IDk0LjUlO1xyXG4gICAgICBoZWlnaHQ6IDU2cHg7IC8vIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAvXHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwKSk7IC8vIFN0YW5kYXJkIHN5bnRheCAobXVzdCBiZSBsYXN0KSAvXHJcbiAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICB0b3A6MHB4O1xyXG4gICAgICBsZWZ0OiAxNnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIG9wYWNpdHk6MC41O1xyXG4gICAgfVxyXG4gICAgLmNscy1kZWFsOmZpcnN0LWNoaWxkIC5ncmFkLWljb24tYmxvZ3tcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNTZweDsgLy8gRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzIC9cclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDApKTsgLy8gU3RhbmRhcmQgc3ludGF4IChtdXN0IGJlIGxhc3QpIC9cclxuICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgIHRvcDowcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICBvcGFjaXR5OjAuNTtcclxuICAgIH1cclxuXHJcbiAgICAuaW1nIFxyXG4gICAge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG4gICAgLy8gLmZsb2F0LWluZm9pY29ue1xyXG4gICAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyAgIGJvdHRvbTogNjBweDtcclxuICAgIC8vICAgbGVmdDogMTZweDtcclxuICAgIC8vICAgei1pbmRleDogMTE7XHJcbiAgICAvLyB9XHJcbiAgICAuY2xzLWRlYWw6Zmlyc3QtY2hpbGQgLmZsb2F0LWluZm9pY29ue1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgei1pbmRleDogMTE7XHJcbiAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZsb2F0LWluZm9pY29ue1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDE2cHg7XHJcbiAgICAgIHotaW5kZXg6IDExO1xyXG4gICAgICB3aWR0aDogNDhweDtcclxuICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgfVxyXG4gICAgLmRpdi13cmFwLWljb257XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsIDAuMik7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICB3aWR0aDogMjhweDtcclxuICAgICAgaGVpZ2h0OiAyOHB4O1xyXG5cclxuICAgICAgLmltZy1zaGFyZXtcclxuICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kaXYtd3JhcC1pY29uLWhlYXJ0e1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLCAwLjIpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgIGhlaWdodDogMjhweDtcclxuXHJcbiAgICAgIC5pbWctaGVhcnR7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgICAgICB3aWR0aDoyMHB4O1xyXG4gICAgICAgIGhlaWdodDoxOHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2xzLWRlYWw6Zmlyc3QtY2hpbGQgLmZsb2F0LWluZm9pY29uaGVhcnR7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiA1OXB4O1xyXG4gICAgICBsZWZ0OiA1NnB4O1xyXG4gICAgICB6LWluZGV4OiAxMTtcclxuICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgcGFkZGluZzogMHB4IDhweCA4cHggOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mbG9hdC1pbmZvaWNvbmhlYXJ0e1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogNTlweDtcclxuICAgICAgbGVmdDogNTZweDtcclxuICAgICAgei1pbmRleDogMTE7XHJcbiAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgIHBhZGRpbmc6IDBweCA4cHggOHB4IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAuZmxvYXQtaW5mb3tcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDhweDtcclxuICAgICAgbGVmdDogMjRweDtcclxuICAgICAgei1pbmRleDogMTE7XHJcbiAgICB9XHJcbiAgICAuZmxvYXQtaW5mby1yZWdpb257XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgei1pbmRleDogMTE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mbG9hdC1wcm9tb3tcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDE5cHg7XHJcbiAgICAgIGxlZnQ6IC00cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNTI4MjI7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgLy8gd2lkdGg6IDg4JTtcclxuICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICBwYWRkaW5nOiAzcHggOHB4IDBweCAxMnB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDk1JTtcclxuICAgICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgLy8gdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNscy1kZWFsOmZpcnN0LWNoaWxkIC5mbG9hdC1wcm9tb3tcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDE5cHg7XHJcbiAgICAgIGxlZnQ6IC00cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNTI4MjI7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgLy8gd2lkdGg6IDg4JTtcclxuICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICBwYWRkaW5nOiAzcHggOHB4IDBweCAxMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIC8vIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAvLyB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZmxvYXQtcHJvbW8tZGVzY3JpcHRpb257XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNscy1kZWFsOmZpcnN0LWNoaWxkIC5mbG9hdC1wcm9tbzphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgdG9wOiAyMnB4O1xyXG4gICAgICBib3JkZXItdG9wOiA0cHggc29saWQgIzg1MWYxYztcclxuICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuZmxvYXQtcHJvbW86YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIHRvcDogMjJweDtcclxuICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICM4NTFmMWM7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNscy1kZWFsOmZpcnN0LWNoaWxkIC5mbG9hdC1pbmZve1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogOHB4O1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgLmNscy1tb29kOmZpcnN0LWNoaWxkIC5mbG9hdC1pbmZve1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogOHB4O1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICB9XHJcbiAgICAuY2xzLXN1YnRpdGxle1xyXG4gICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBoZWlnaHQ6IDI5cHg7XHJcbiAgICB9XHJcbiAgICAuZGl2LWluZm8tY292ZXItYXV0by13aWR0aHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBoZWlnaHQ6IDEwNHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5kaXYtaW5mby1jb3Zlci1hdXRvLWhlaWdodHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmltZy1yZWdpb257XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIG9iamVjdC1maXQ6Y292ZXI7XHJcbiAgICB9XHJcbiAgICAubm9wYWRkaW5ne1xyXG4gICAgICBwYWRkaW5nOjA7XHJcbiAgICB9XHJcblxyXG4gICAgLnNsaWRlYmxvZ3RyaXBzLXNjcm9sbFxyXG4gICAge1xyXG4gICAgICBoZWlnaHQ6IDIzNHB4O1xyXG5cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiA1NDBweDtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNsaWRlMlxyXG4gICAge1xyXG4gICAgICBtaW4td2lkdGg6IDI3MnB4O1xyXG4gICAgICBoZWlnaHQ6IDIwOHB4O1xyXG4gICAgICAvLyBAbWVkaWEgKG1pbi13aWR0aDozMDBweCkgYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgICAgIC8vICAgaGVpZ2h0OiAxNzRweDtcclxuICAgICAgLy8gICBtaW4td2lkdGg6IDI2MHB4OyBcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBAbWVkaWEgKG1pbi13aWR0aDozNjBweCkgYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgICAgIC8vICAgaGVpZ2h0OiAxNzRweDtcclxuICAgICAgLy8gICBtaW4td2lkdGg6IDI2MHB4OyBcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBAbWVkaWEgKG1pbi13aWR0aDogMzc1cHgpIGFuZCAobWF4LXdpZHRoOiAzODRweCkge1xyXG4gICAgICAvLyAgIGhlaWdodDogMTc0cHg7XHJcbiAgICAgIC8vICAgbWluLXdpZHRoOiAyODJweDtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBAbWVkaWEgKG1pbi13aWR0aDogMzg0cHgpIGFuZCAobWF4LXdpZHRoOiA0MTJweCkge1xyXG4gICAgICAvLyAgIGhlaWdodDogMTc0cHg7XHJcbiAgICAgIC8vICAgbWluLXdpZHRoOiAyODJweDtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBAbWVkaWEgKG1pbi13aWR0aDogNDEycHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICAvLyAgIGhlaWdodDogMTkxcHg7XHJcbiAgICAgIC8vICAgbWluLXdpZHRoOiAzMTBweDtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAvLyAgIGhlaWdodDogMTkxcHg7XHJcbiAgICAgIC8vICAgbWluLXdpZHRoOiAzMTBweDtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAvLyAgIGhlaWdodDogMTkxcHg7XHJcbiAgICAgIC8vICAgbWluLXdpZHRoOiAzMTBweDtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBAbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAvLyAgIGhlaWdodDogMTkxcHg7XHJcbiAgICAgIC8vICAgbWluLXdpZHRoOiAzMTBweDtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgICAvLyAgIGhlaWdodDogMTkxcHg7XHJcbiAgICAgIC8vICAgbWluLXdpZHRoOiAzMTBweDtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBAbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAgICAgLy8gICBoZWlnaHQ6IDQzMnB4O1xyXG4gICAgICAvLyAgIG1pbi13aWR0aDogNzAwcHg7XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIC5zbGlkZTItc2Nyb2xsXHJcbiAgICB7XHJcbiAgICAgIGhlaWdodDogMzIwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTlweDtcclxuICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6MzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgICAgIGhlaWdodDogMzIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6MzYwcHgpIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICAgICAgIGhlaWdodDogMzIwcHg7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtd2lkdGg6IDM4NHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMjBweDtcclxuXHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDM4NHB4KSBhbmQgKG1heC13aWR0aDogNDEycHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0MTJweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMjBweDtcclxuICAgICAgICAvL21hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMjBweDtcclxuXHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDMyMHB4O1xyXG5cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGhlaWdodDogMzIwcHg7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMzBweDtcclxuXHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiA1NzBweDtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbiAgICAuc2xpZGU1LXNjcm9sbFxyXG4gICAge1xyXG4gICAgICBoZWlnaHQ6IDIzNHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcblxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDU0MHB4O1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNsaWRlMy1zY3JvbGxcclxuICAgIHtcclxuICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDozMDBweCkgYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDozNjBweCkgYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuXHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1heC13aWR0aDogMzg0cHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG5cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzg0cHgpIGFuZCAobWF4LXdpZHRoOiA0MTJweCkge1xyXG4gICAgICAgIGhlaWdodDogMTgwcHg7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0MTJweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxOTBweDtcclxuXHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xyXG5cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgIGhlaWdodDogMTkwcHg7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3MjBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxOTBweDtcclxuXHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xyXG5cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDMzMHB4O1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNsaWRlNC1zY3JvbGxcclxuICAgIHtcclxuICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6MzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgICAgIGhlaWdodDogMTY2cHg7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOjM2MHB4KSBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDE4NnB4O1xyXG5cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzc1cHgpIGFuZCAobWF4LXdpZHRoOiAzODRweCkge1xyXG4gICAgICAgIGhlaWdodDogMTg2cHg7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAzODRweCkgYW5kIChtYXgtd2lkdGg6IDQxMnB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxODZweDtcclxuXHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQxMnB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDE5NnB4O1xyXG5cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIGhlaWdodDogMTk2cHg7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxOTZweDtcclxuXHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDcyMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDE5NnB4O1xyXG5cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgICAgIGhlaWdodDogMTk2cHg7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xyXG4gICAgICAgIGhlaWdodDogMzIwcHg7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2xpZGUzXHJcbiAgICB7XHJcbiAgICAgIG1pbi13aWR0aDogMjE2cHg7XHJcbiAgICAgIGhlaWdodDogMjgycHg7XHJcbiAgICB9XHJcbiAgICAuaW5uZXJkZWFsczF7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH1cclxuICAgIC5pbm5lcmRlYWxzMntcclxuICAgICAgd2lkdGg6IDU3MHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbm5lcmRlYWxzM3tcclxuICAgICAgd2lkdGg6IDg1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbm5lcmRlYWxzNHtcclxuICAgICAgd2lkdGg6IDExMjBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5uZXJkZWFsczV7XHJcbiAgICAgIHdpZHRoOiAxNDAwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmlubmVyZGVhbHM2e1xyXG4gICAgICB3aWR0aDogMTY4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbm5lcmRlYWxzN3tcclxuICAgICAgd2lkdGg6IDE5NTBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5uZXJkZWFsczh7XHJcbiAgICAgIHdpZHRoOiAyMjMwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmlubmVyZGVhbHM5e1xyXG4gICAgICB3aWR0aDogMjUwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbm5lcmRlYWxzMTB7XHJcbiAgICAgIHdpZHRoOiAyNzgwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmlubmVyZGVhbHMxMXtcclxuICAgICAgd2lkdGg6IDMwNjBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5uZXJkZWFsczEye1xyXG4gICAgICB3aWR0aDogMzM0MHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbm5lcmRlYWxzMTN7XHJcbiAgICAgIHdpZHRoOiAzNjEwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmlubmVyZGVhbHMxNHtcclxuICAgICAgd2lkdGg6IDM4OTBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5uZXJkZWFsczE1e1xyXG4gICAgICB3aWR0aDogNDE3MHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbm5lcmRlYWxzMTZ7XHJcbiAgICAgIHdpZHRoOiA0NDUwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmlubmVyZGVhbHMxN3tcclxuICAgICAgd2lkdGg6IDQ3MjBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5uZXJkZWFsczE4e1xyXG4gICAgICB3aWR0aDogNTAwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbm5lcmRlYWxzMTl7XHJcbiAgICAgIHdpZHRoOiA1MjgwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmlubmVyZGVhbHMyMHtcclxuICAgICAgd2lkdGg6IDU1NTBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbm5lcjJ7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmlubmVyM3tcclxuICAgICAgd2lkdGg6IDUxMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbm5lcjR7XHJcbiAgICAgIHdpZHRoOiAxOTUlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbm5lcjV7XHJcbiAgICAgIHdpZHRoOiA4NTBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5uZXI2e1xyXG4gICAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbm5lcjd7XHJcbiAgICAgIHdpZHRoOiAxMTcwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmlubmVyOHtcclxuICAgICAgd2lkdGg6IDEzMzBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5uZXI5e1xyXG4gICAgICB3aWR0aDogMTUyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbm5lcjEwe1xyXG4gICAgICB3aWR0aDogMTY5MHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAudGV4dC1wcmljZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxuICAuaG90ZWwtbmFtZVxyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHdpZHRoOiAyNjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgfVxyXG4gIC50aXRsZS1ibG9nXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdpZHRoOiAyNjBweDtcclxuICAgIHBhZGRpbmctdG9wOjhweDtcclxuICB9XHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjYWFhO1xyXG4gICAgbWFyZ2luOiA5cHggLTIwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBmb250LXNpemU6IDE2cHhcclxuICB9XHJcblxyXG4gIC8vIC5iYWNrZ3JvdW5ke1xyXG4gIC8vICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvYmx1ZS5wbmcnKTtcclxuICAvLyAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLy8gfVxyXG4gIC8vIC5pbnB1dFdpdGhJY29uIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAvLyAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAvLyB9XHJcbiAgXHJcbiAgLy8gLmlucHV0V2l0aEljb24ge1xyXG4gIC8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIH1cclxuICBcclxuICAvLyAuaW5wdXRXaXRoSWNvbiBpIHtcclxuICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyAgIGxlZnQ6IDA7XHJcbiAgLy8gICB0b3A6IDBweDtcclxuICAvLyAgIHBhZGRpbmc6IDI0cHggMTVweDtcclxuICAvLyAgIGNvbG9yOiAjYWFhO1xyXG4gIC8vICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAvLyB9XHJcbiAgXHJcbiAgLy8gW2NsYXNzXj1cImljb24tXCJdLCBbY2xhc3MqPVwiIGljb24tXCJdIHtcclxuICAvLyAgIC8qIHVzZSAhaW1wb3J0YW50IHRvIHByZXZlbnQgaXNzdWVzIHdpdGggYnJvd3NlciBleHRlbnNpb25zIHRoYXQgY2hhbmdlIGZvbnRzICovXHJcbiAgLy8gICBmb250LWZhbWlseTogJ2ljb21vb24nICFpbXBvcnRhbnQ7XHJcbiAgLy8gICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIC8vICAgZm9udC12YXJpYW50OiBub3JtYWw7XHJcbiAgLy8gICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAvLyAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIFxyXG4gIC8vICAgLyogQmV0dGVyIEZvbnQgUmVuZGVyaW5nID09PT09PT09PT09ICovXHJcbiAgLy8gICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAvLyAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgLy8gfVxyXG4gXHJcbiAgLml0ZW0tbWQgaW9uLWF2YXRhciB7XHJcbiAgICAgbWluLXdpZHRoOiAwcHg7IFxyXG4gICAgIG1pbi1oZWlnaHQ6IDBweDsgXHJcbiAgfVxyXG5cclxuICBcclxuICAudmwge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYmRiZGJkO1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweFxyXG4gIH1cclxuICAuYnRuLXNlYXJjaFxyXG4gIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZjU5MjMzO1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgYmFja2dyb3VuZDogI2Y1OTIzMztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNTJweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5saXN0LWhlYWRlci1tZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDBweDtcclxuICAgIGJvcmRlci10b3A6IDBweCBzb2xpZCAjZGVkZWRlO1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMjIyMjIyO1xyXG59XHJcbi5pdGVtLW1kIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcbiAgLypTdHlsZSBjYWxlbmRhciovXHJcbiAgLmNvbC1jYWxlbmRhcntcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gIH1cclxuICAuY29sLWNhbGVuZGFye1xyXG4gICAgbWFyZ2luLXRvcDo0cHg7XHJcbiAgICAvL21hcmdpbi1sZWZ0OjRweDtcclxuICB9XHJcbiAgLmNvbC1jYWxlbmRhciAuY2FsZW5kYXItZGF0ZS5jaW57XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtNzFweDtcclxuICAgIHRvcDogMzJweDtcclxuICB9IFxyXG4gIC5jb2wtY2FsZW5kYXIgLmNhbGVuZGFyLWRhdGUuY291dHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC04OHB4O1xyXG4gICAgdG9wOiAzMnB4O1xyXG4gIH0gXHJcbiAgLnBhZ2UtbWFpbiAuY2FsZW5kYXItZGF0ZSAuYnV0dG9uIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2Y3OTIyMTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZDogI2Y3OTIyMTtcclxuICB9XHJcbiAgLmlvbi1tZC1jYWxlbmRhcjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiBub25lO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLmNhbGVuZGFyLWRhdGUgLml0ZW0taW5uZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jYWxlbmRhci1kYXRlIC5pdGVtLWJsb2Nre1xyXG4gICAgbWluLWhlaWdodDogMi40cmVtO1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIHBhZ2UtbWFpbiAuc2xpZGUzIHtcclxuICAgIGhlaWdodDogOThweDtcclxuICAgIHdpZHRoOiAxNjBweCAhaW1wb3J0YW50O1xyXG4gICAgLy8gb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uaXRlbS1pb3MgaW9uLXRodW1ibmFpbCBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uY2xzLWRlYWw6Zmlyc3QtY2hpbGR7XHJcbiAgcGFkZGluZy1sZWZ0OiA0cHggIWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jbHMtYmxvZzpmaXJzdC1jaGlsZHtcclxuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmNscy1kZWFsOmxhc3QtY2hpbGR7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jbHMtbW9vZDpmaXJzdC1jaGlsZHtcclxuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jbHMtbW9vZDpsYXN0LWNoaWxke1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY2xzLWRlc3RpbmF0aW9uOmZpcnN0LWNoaWxke1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNscy1kZXN0aW5hdGlvbjpsYXN0LWNoaWxke1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKlN0eWxlIGNhbGVuZGFyKi9cclxuICAucmFuZ2UtbWQteGFuaCAucmFuZ2UtYmFyLWFjdGl2ZSxcclxuICAucmFuZ2UtbWQteGFuaCAucmFuZ2Uta25vYixcclxuICAucmFuZ2UtbWQteGFuaCAucmFuZ2UtcGluLFxyXG4gIC5yYW5nZS1tZC14YW5oIC5yYW5nZS1waW46OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjZiZWQ2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLWxlZnQtMTB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbn1cclxuXHJcbi5kaXYtcGFkZGluZ3tcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTRweDtcclxufVxyXG4vLyAuaW1nLXBhZGRpbmd7XHJcbi8vICAgaGVpZ2h0OiA0OHB4O1xyXG4vLyAgIHBhZGRpbmc6IDE1cHg7XHJcbi8vIH1cclxuXHJcbmxhYmVsIHtcclxuICBwYWRkaW5nOiAxOHB4IDBweCAxOHB4IDBweDtcclxufVxyXG4udGV4dC1jaW50aHV7XHJcbiAgcGFkZGluZzogMThweCAxOHB4IDE4cHggMHB4O1xyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOjMwMHB4KSBhbmQgKG1heC13aWR0aDozNTBweCl7XHJcbiAgLmltZy1wYWRkaW5nLmltZy1sb2NhdGlvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAtMnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5pbWctcGFkZGluZy5pbWctY2hlY2tpbntcclxuICAgIG1hcmdpbi1sZWZ0OiAtNHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5pbWctcGFkZGluZy5pbWctY2hlY2tvdXR7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIycHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmltZy1wYWRkaW5nLmltZy1wZW9wbGV7XHJcbiAgICBtYXJnaW4tbGVmdDogLTRweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY29sLWNhbGVuZGFye1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcbn1cclxuICBcclxuYm9keXtcclxuICAuYWxlcnQtdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzI2YmVkNjtcclxuICB9XHJcbiAgLnRvb2xiYXItY29udGVudC1pb3Mge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIGlvbi1hcHAuaW9zIFtwYWRkaW5nXSAuc2Nyb2xsLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdC0xLC5jdC0yLC5jdC04e1xyXG4gICAgbWFyZ2luOjAgMCAxMHB4O1xyXG4gIH1cclxuICAuYWxlcnQtYnV0dG9ue1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNzkyMjEgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnJhbmdlLWtub2ItaGFuZGxle1xyXG4gICAgd2lkdGg6IDQ4cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNDhweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gIFxyXG4gIC5iYXItYnV0dG9uLW1kLC5iYXItYnV0dG9uLWlvc3tcclxuICAgIGhlaWdodDogNDhweDtcclxuICB9XHJcblxyXG4gIFxyXG59XHJcbi50ZXh0LWxvYWRkaW5ne1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLy8gLmNscy1jb250ZW50LWNvdmVye1xyXG4vLyAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2JsdWUucG5nJyk7XHJcbi8vICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuLy8gfVxyXG4uY2xzLWNvbnRlbnR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBcclxufVxyXG4uc3RhdHVzYmFyLW1hcmdpbi10b3B7XHJcbiAgbWFyZ2luLXRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyAyMnB4ICk7XHJcbiAgLy90cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuMnMsIG9wYWNpdHkgMC4ycyBsaW5lYXI7XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXB7XHJcbiAgLmNscy1jb250ZW50LWNvdmVyIC5zdGF0dXNiYXItbWFyZ2luLXRvcHtcclxuICAgIG1hcmdpbi10b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgMjJweCApO1xyXG4gICAgLy90cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuMnMsIG9wYWNpdHkgMC4ycyBsaW5lYXI7XHJcbiAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNDEycHgpIHtcclxuICAgICAgaW9uLXNwaW5uZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQxMnB4KSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICAgaW9uLXNwaW5uZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRpdi13cmFwLXNlYXJjaC1pbnB1dHtcclxuICAgICAgICB3aWR0aDogOTYuMiUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN3aXBlci1wYWdpbmF0aW9ue1xyXG4gICAgICAgIHdpZHRoOiA5Ni4yJSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgLy9jc3MgbOG7i2NoIMOibVxyXG4gIC5sdW5hcmNhbGVuZGFyXHJcbiAge1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZTUyODIyIDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM2cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAzMHB4IDtcclxuICAgIGhlaWdodDogMzBweCA7XHJcbiAgICBwe1xyXG4gICAgICBjb2xvcjogICNlNTI4MjIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgLmRheWhvdFxyXG4gIHtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9pY19maXJlLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDI3cHggMHB4O1xyXG4gIH1cclxuICAuZGF5c1xyXG4gIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcclxuICB9XHJcbi5iZXR3ZWVuIHtcclxuICAuZGF5cy1idG5cclxuICB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLnN0YXJ0U2VsZWN0aW9uIHtcclxuICAuZGF5cy1idG4gXHJcbiAge1xyXG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwe1xyXG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uZW5kU2VsZWN0aW9uIHtcclxuICAuZGF5cy1idG5cclxuICB7XHJcbiAgICBwe1xyXG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiAgc21hbGxcclxuICB7XHJcbiAgICBtYXJnaW46IC02cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZTUyODIyICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3R0b206IC02cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogLTI1cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLy9cclxuICAucC1sZWZ0LTE2IHtcclxuICAgIHBhZGRpbmctbGVmdDoxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjE2cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LWNvbnRhaW5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi10b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKjIgLSAxNHB4ICk7XHJcbiAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA4cHg7XHJcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLmFjdGlvbi1zaGVldHMtbm90aWZpY2F0aW9uIC5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdW5zZXQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgLmFjdGlvbi1zaGVldHMtbm90aWZpY2F0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xyXG4gICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC5pY19idXMyIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6OmJlZm9yZXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29udGVudDogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9pY19idXMyLnN2ZycpO1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTNweCA7XHJcbiAgfVxyXG4gIC5pY19ob21lIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6OmJlZm9yZXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29udGVudDogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9pY19ob21lLnN2ZycpO1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTNweCA7XHJcbiAgICAvL3RvcDoxM3B4O1xyXG4gIH1cclxuICAuaWNfcGFwZXIgLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczo6YmVmb3Jle1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb250ZW50OiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2ljX3BhcGVyLnN2ZycpO1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTNweCA7XHJcbiAgfVxyXG4gIC5pY19tZXNzYWdlIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6OmJlZm9yZXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29udGVudDogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9pY19tZXNzYWdlLnN2ZycpO1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTNweCA7XHJcbiAgfVxyXG4gIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggOHB4IDBweCAjODI4MjgyO1xyXG4gICBib3JkZXItcmFkaXVzOjEwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0NHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtaW4taGVpZ2h0OjYwcHg7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZmY7XHJcbiAgICAtLWJhY2tncm91bmQtc2VsZWN0ZWQ6I2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b206bm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuZml4aGVpZ2h0LTQ0IC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQ0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6NDRweCAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojZmZmO1xyXG4gIC0tYmFja2dyb3VuZC1zZWxlY3RlZDojZmZmO1xyXG4gIGJvcmRlci1ib3R0b206bm9uZTtcclxuICB9XHJcblxyXG4gIC5maXhoZWlnaHQtODAgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNDRweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEzcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWluLWhlaWdodDo4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZmY7XHJcbiAgLS1iYWNrZ3JvdW5kLXNlbGVjdGVkOiNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTpub25lO1xyXG4gIH1cclxuXHJcbiAgLmZpeGhlaWdodC05MCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0NHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtaW4taGVpZ2h0OjkwcHggIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6I2ZmZjtcclxuICAgIC0tYmFja2dyb3VuZC1zZWxlY3RlZDojZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTpub25lO1xyXG4gIH1cclxuICAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAyNTBweCkgYW5kIChtYXgtd2lkdGg6IDMyOXB4KSB7XHJcbiAgICAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICAgIG1pbi1oZWlnaHQ6NzJweDtcclxuICAgIH1cclxuXHJcbiAgICAuZml4aGVpZ2h0LTQ0IC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xyXG4gICAgICBtaW4taGVpZ2h0OjQ0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpeGhlaWdodC04MCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcclxuICAgICAgbWluLWhlaWdodDo4MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5maXhoZWlnaHQtOTAgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICAgIG1pbi1oZWlnaHQ6MTAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vLy9uZXcgc3R5bGVcclxuICAuaWNfYnVzMiAudG9hc3QtY29udGFpbmVyOjpiZWZvcmV7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbnRlbnQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvaWNfYnVzMi5zdmcnKTtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDhweDtcclxuICAgIG1hcmdpbi10b3A6IDEzcHggO1xyXG4gIH1cclxuICBcclxuICAuaWNfaG9tZSAudG9hc3Qtd3JhcHBlci50b2FzdC10b3AgLnRvYXN0LWNvbnRhaW5lciAudG9hc3QtY29udGVudDo6YmVmb3Jle1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb250ZW50OiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2ljX2hvbWUuc3ZnJyk7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxM3B4IDtcclxuICAgIC8vdG9wOjEzcHg7XHJcbiAgfVxyXG4gIC5pY19wYXBlciAudG9hc3QtY29udGVudDo6YmVmb3Jle1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb250ZW50OiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2ljX3BhcGVyLnN2ZycpO1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTNweCA7XHJcbiAgfVxyXG4gIC5pY19tZXNzYWdlIC50b2FzdC1jb250ZW50OjpiZWZvcmV7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbnRlbnQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvaWNfbWVzc2FnZS5zdmcnKTtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDhweDtcclxuICAgIG1hcmdpbi10b3A6IDEzcHggO1xyXG4gIH1cclxuICAuY2xzLWFsZXJ0LXNob3dtb3JlIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgLmRvbmUxLWNvbWJvLWNzcyAuc2MtaW9uLWFsZXJ0LWlvcy1oIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCNmOWY5ZjkpKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tbWF4LXdpZHRoOiAyNzBweCAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1taW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS13aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tbWluLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1tYXgtaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICByaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LGluaGVyaXQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG91Y2gtYWN0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtaW9ze1xyXG4gICAgcGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHggIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLW1pbi1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiB2YXIoLS1tYXgtaGVpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtaW9zIHtcclxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9ze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3A6IC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLDAsMCwwKSwuMikgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZikgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuZG9uZTEtY29tYm8tY3NzIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGR7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcclxuICAgICAgICBib3JkZXItY29sb3I6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtbWR7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIH1cclxuICAgIH1cclxuICAgIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LW1ke1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICB9XHJcbiAgICAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1tZCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LW1kIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob21lLXNsaWRlciBpb24tc2VnbWVudC1idXR0b257XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIC5ob21lLXNsaWRlciBpb24tc2xpZGV7XHJcbiAgICAgIC8vYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNmZmY7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgIH1cclxuICAgIC5ob21lLXNsaWRlcntcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDEwNnB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgei1pbmRleDogMTA7XHJcbiAgICB9XHJcbn1cclxuLmltZy1sb3N0Y29ubmVjdGlvbntcclxuICBwYWRkaW5nLXRvcDogNzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRleHQtbG9zdGNvbm5lY3Rpb257XHJcbiAgY29sb3I6ICM4MjgyODI7XHJcbiAgcGFkZGluZzogMCA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNscy1jb250ZW50LWNvdmVye1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLy8gSUUgMTArXHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICAvLyBGaXJlZm94XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAgIC0tb2Zmc2V0LWJvdHRvbTowcHg7XHJcbn1cclxuLmNscy1jb250ZW50LXNsaWRlOmFmdGVye1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcclxufVxyXG5cclxuLmRpdi1zdGF0dXNiYXItZmxvYXR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDEyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgY29sb3I6ICMyMjIyMjI7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4ycywgb3BhY2l0eSAwLjJzIGxpbmVhcjtcclxufVxyXG4uZmxvYXQtc3RhdHVzYmFyLWVuYWJsZWR7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuMnMsIG9wYWNpdHkgMC4ycyBsaW5lYXI7XHJcbiAgb3BhY2l0eTogMTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuLmZsb2F0LXN0YXR1c2Jhci1kaXNhYmxlZHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuMnMsIG9wYWNpdHkgMC4ycyBsaW5lYXI7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuLy8vLyBleHBlcmllbmNlbXVzdHRyeVxyXG4uY2xzLWV4cGVyaWVuY2VtdXN0dHJ5e1xyXG4gIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbn1cclxuLnAtcmlnaHQtOHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLm0tYm90dG9tLTh7XHJcbiAgbWFyZ2luLWJvdHRvbTo4cHg7XHJcbn1cclxuLnAtdG9wLTMwe1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnAtdG9wLTIxe1xyXG4gIHBhZGRpbmctdG9wOiAyMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aXRsZS1wYWRkaW5ne1xyXG4gIHBhZGRpbmc6MTZweCAwcHggMHB4IDBweDtcclxufVxyXG4udGl0bGUtcGFkZGluZy0xe1xyXG4gIHBhZGRpbmc6MjRweCAwcHggMHB4IDBweDtcclxufVxyXG5cclxuLmltZy1yZWdpb257XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4ubm9wYWRkaW5ne1xyXG4gIHBhZGRpbmc6MDtcclxufVxyXG5cclxuLmZsb2F0LWluZm8tcmVnaW9ue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDBweDtcclxuICBsZWZ0OiA4cHg7XHJcbiAgei1pbmRleDogMTE7XHJcbn1cclxuLmZsb2F0LWluZm8tZXhwZXJpZW5jZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHotaW5kZXg6IDExO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pbWctZmxvYXQtZXhwZXJpZW5jZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHotaW5kZXg6IDExO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pbWctbXVzdHRyeXtcclxuICBoZWlnaHQ6IDk2cHg7XHJcbn1cclxuLnRleHQtdGl0bGVleHBcclxuICAgIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjojZmZmO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4uZ3JhZC1leHBlcmllbmNle1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlOyAvLyBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgL1xyXG4gICAgICBiYWNrZ3JvdW5kOiAgcmdiYSgwLCAwLCAwLCAwLjUpOy8vIFN0YW5kYXJkIHN5bnRheCAobXVzdCBiZSBsYXN0KSAvXHJcbiAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICBib3R0b206MHB4O1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIC8vb3BhY2l0eTogMC4yNTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWItdGl0bGV7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDo0cHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcblxyXG4udGV4dC1wbGFjZWhvbGRlcntcclxuICBjb2xvcjogIzgyODI4MiA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcbi50ZXh0LXNlYXJjaHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuLmNvbC1wbGFjZWhvbGRlcntcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6MDtcclxufVxyXG4uY2xzLWJsb2d0cmlwOmZpcnN0LWNoaWxke1xyXG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5jbHMtYmxvZ3RyaXA6Zmlyc3QtY2hpbGQgLmdyYWQtYmxvZ3tcclxuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLm0tdG9wLTd7XHJcbiAgbWFyZ2luLXRvcDo3cHg7XHJcbn1cclxuXHJcbi8vU3R5bGUgaW5wdXQgdXBkYXRlXHJcbiAgLmRpdi13aWR0aHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuaW1nLWlucHV0e1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICBwYWRkaW5nOiAxNnB4IDIwcHggMTZweCAxOHB4O1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICAuaW1nLWNpbi1jb3V0e1xyXG4gICAgcGFkZGluZzogMTRweCAyMHB4IDE0cHggMTdweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgLnAtbC0we1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5pbWctY2hlY2tpbiwgIC5pbWctcGVvcGxle1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgfVxyXG4gIC5pbWctY2hlY2tvdXQge1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgfVxyXG4gIC5kaXYtaW5wdXQtcmlnaHR7XHJcbiAgICBtYXJnaW4tbGVmdDogNTFweDtcclxuICAgIFxyXG4gIH1cclxuICAubS1sLTM2e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM2cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmRpdi1jaW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNDYlO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gIH1cclxuICAudGV4dC1pbnB1dC1zZWFyY2h7XHJcbiAgICBtYXJnaW46IDBweCAwIDE0cHggNTFweDtcclxuICB9XHJcbiAgLnRleHQtaW5wdXQtc2VhcmNoLXdyYXB0ZXh0e1xyXG4gICAgbWFyZ2luOiA0cHggMCAxNHB4IDUxcHg7XHJcbiAgfVxyXG4gIC50ZXh0LW1pZGRsZXtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gIH1cclxuXHJcbiAgLnRleHQtY2luLCAudGV4dC1wYXh7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICB9XHJcblxyXG4gIC50ZXh0LWNvbG9yXHJcbiAgICB7XHJcbiAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gIH1cclxuICAuZm9udC10aHVcclxuICAgIHtcclxuICAgICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gICAgfVxyXG4gICAgLmRpdi1jb3V0e1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNThweDtcclxuICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAvL2JvcmRlci1sZWZ0OiBzb2xpZCAwLjVweCAjODI4MjgyO1xyXG4gICAgfVxyXG4gICAgLmRpdi1pbWctY29mZmVle1xyXG4gICAgICBib3R0b206NDBweDtcclxuICAgIH1cclxuICAgIC5pbWctY29mZmVle1xyXG4gICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbi5pbWctbG9nb3tcclxuICB3aWR0aDogNzZweDtcclxuICAvL3dpZHRoOiA5MHB4O1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgMjJweCApO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4vLy8vLy8vLy8vXHJcbi5kaXYtd3JhcGVyLXNsaWRle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgMTI4cHgpICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCA2MCwgMTEzLCAwLjIpO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcbi5zd2lwZXItcGFnaW5hdGlvbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvL3RvcDogMTU2cHg7XHJcbiAgdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDk0cHgpIDtcclxuICAvL3dpZHRoOiAxMDAlO1xyXG4gIC8vIGNvbG9yOiAjZmZmO1xyXG4gIC8vIGZvbnQtc2l6ZTogMTdweDtcclxuXHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBoZWlnaHQ6IDg2cHg7XHJcbiAgcGFkZGluZzogMTZweCAwO1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgd2lkdGg6IDk1LjglO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgei1pbmRleDogOTk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQycHg7XHJcbiAgY29sb3I6ICMyMjIyMjI7XHJcbiAgXHJcbiAgLmRpdi1ob3RlbCwgLmRpdi1mbGlnaHQsIC5kaXYtY29tYm8sIC5kaXYtZm9vZHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuXHJcbiAgLmFjdGl2ZS1tYXJre1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gYm90dG9tOiAwO1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHJnYmEoMjU1LDI1NSwyNTUsIDEpO1xyXG4gICAgLy8gZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgLy8gdHJhbnNpdGlvbjogbGVmdCAwLjVzIGVhc2Utb3V0O1xyXG4gICAgLy8gd2lkdGg6IDUwJTtcclxuICAgIC8vIGxlZnQ6IDAlO1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGxlZnQgMC41cyBlYXNlLW91dDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNjZGNkY2Q7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNik7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIHRvcDogLTNweDtcclxuICB9XHJcbiAgLnN1Yi1jb2xvcntcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG4gIC5sZWZ0LTUwe1xyXG4gICAgbGVmdDogMzclO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC02cHg7XHJcbiAgfVxyXG4gIC5sZWZ0LTY2e1xyXG4gICAgbGVmdDogNzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC00cHg7XHJcbiAgICB3aWR0aDogMjclO1xyXG4gIH1cclxuICAuZm9jdXN7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY2xzLXZpc2libGV7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDJzLCBvcGFjaXR5IDAuNXMgbGluZWFyO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLy9oZWlnaHQ6IDQ4cHg7XHJcbn1cclxuLmNscy1kaXNhYmxlZHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiAwcHg7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDJzLCBvcGFjaXR5IDAuNXMgbGluZWFyO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uZGl2LXdyYXBlci1mb29ke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zd2lwZXItcGFnaW5hdGlvbi5tYWluLWNvbG9ye1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRpdi1ob3RlbC5tYWluLWNvbG9ye1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRpdi1mbGlnaHQubWFpbi1jb2xvcntcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaG9tZS1hY3RpdmUtdGFie1xyXG4gIGNvbG9yOiAjMjZiZWQ2O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaG9tZS1kZWFjdGl2ZS10YWJ7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbiAgb3BhY2l0eTogMC42NTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRpdi1pY29uLWhvbWV7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcbi8vbm90aWNlXHJcbi5jbHMtbm90aWNle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyA5NHB4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlZWM3O1xyXG4gIGhlaWdodDogNjdweDtcclxuICBwYWRkaW5nOiAxNnB4IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcclxuICBjb2xvcjogIzMzMzMzMztcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAuZGl2LWhvdGVsLCAuZGl2LWZsaWdodCwgLmRpdi1jb21ibywgLmRpdi1mb29ke1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG5cclxuICAuYWN0aXZlLW1hcmt7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuNXMgZWFzZS1vdXQ7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbGVmdDogMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2RjZGNkO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjYpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICB0b3A6IC0zcHg7XHJcbiAgfVxyXG4gIC5zdWItY29sb3J7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gIH1cclxuICAubGVmdC01MHtcclxuICAgIGxlZnQ6IDM3JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG4gIH1cclxuICAubGVmdC02NntcclxuICAgIGxlZnQ6IDcwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNHB4O1xyXG4gICAgd2lkdGg6IDI3JTtcclxuICB9XHJcbiAgLmZvY3Vze1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4uc3dpcGVyLXBhZ2luYXRpb24tbm90aWNle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vdG9wOiAxNTZweDtcclxuICB0b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgMTcxcHgpIDtcclxuICB3aWR0aDogMTAwJTtcclxuICAvLyBjb2xvcjogI2ZmZjtcclxuICAvLyBmb250LXNpemU6IDE3cHg7XHJcbiAgLy8gei1pbmRleDogOTk7XHJcblxyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgaGVpZ2h0OiA4NnB4O1xyXG4gIHBhZGRpbmc6IDE2cHggMDtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIHdpZHRoOiA5NS4yJTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4gIHotaW5kZXg6IDk5O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gIGNvbG9yOiAjMjIyMjIyO1xyXG4gIFxyXG4gIC8vIC5kaXYtaG90ZWx7XHJcbiAgLy8gICB3aWR0aDogMzMlO1xyXG4gIC8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICAvLyAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAvLyAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gLmRpdi1mb29ke1xyXG4gIC8vICAgd2lkdGg6IDMzJTtcclxuICAvLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyAgIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgLy8gICBmb250LXNpemU6IDE2cHg7XHJcbiAgLy8gICBmb250LXdlaWdodDogMzAwO1xyXG4gIC8vICAgb3BhY2l0eTogMC43O1xyXG4gIC8vICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gLmRpdi1mbGlnaHR7XHJcbiAgLy8gICB3aWR0aDogNDAlO1xyXG4gIC8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICAvLyAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAvLyAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgLy8gICBvcGFjaXR5OiAwLjc7XHJcbiAgLy8gfVxyXG4gIC5kaXYtaG90ZWwsIC5kaXYtZmxpZ2h0LCAuZGl2LWNvbWJvLCAuZGl2LWZvb2R7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcblxyXG4gIC5hY3RpdmUtbWFya3tcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIGJvdHRvbTogMDtcclxuICAgIC8vIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCByZ2JhKDI1NSwyNTUsMjU1LCAxKTtcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIC8vIHRyYW5zaXRpb246IGxlZnQgMC41cyBlYXNlLW91dDtcclxuICAgIC8vIHdpZHRoOiA1MCU7XHJcbiAgICAvLyBsZWZ0OiAwJTtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuNXMgZWFzZS1vdXQ7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbGVmdDogMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2RjZGNkO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjYpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICB0b3A6IC0zcHg7XHJcbiAgfVxyXG4gIC5zdWItY29sb3J7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gIH1cclxuICAubGVmdC01MHtcclxuICAgIGxlZnQ6IDM3JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG4gIH1cclxuICAubGVmdC02NntcclxuICAgIGxlZnQ6IDcwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNHB4O1xyXG4gICAgd2lkdGg6IDI3JTtcclxuICB9XHJcbiAgLmZvY3Vze1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4uZGl2LW5vdGljZXtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5tYXJnaW4tbGVmdC0xMXtcclxuICBtYXJnaW4tbGVmdDogMTFweDtcclxufVxyXG4uaW1nLW5vdGljZXtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbn1cclxuLnRleHQtaW5mb3tcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS40O1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcblxyXG4udG9wLTEye1xyXG4gIHRvcDogMTJweDtcclxufVxyXG4uZGl2LXdyYXAtZGVhbHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAvL21hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgXHJcblxyXG4gIC5mbG9hdC1pbmZvaWNvbntcclxuICAgIGxlZnQ6IDEycHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmRpdi13cmFwLWltYWdle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxNzBweDtcclxuICB9XHJcbiAgLmhvdGVsLW5hbWV7XHJcbiAgICBjb2xvcjogIzIyMjIyMjtcclxuICB9XHJcblxyXG4gIC5mbG9hdC1pbmZve1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICBib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xyXG4gIH1cclxuXHJcbiAgLmltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuc2xpZGUyIHtcclxuICAgIGhlaWdodDogMTcwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50ZXh0LXRpdGxlLWJsb2d7XHJcbiAgICBjb2xvcjogIzIyMjIyMjtcclxuICB9XHJcblxyXG59XHJcblxyXG4uZmxvYXQtaW5mb2ljb257XHJcbiAgbGVmdDogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcbi5sZWZ0LTI4e1xyXG4gIGxlZnQ6IDI4cHggIWltcG9ydGFudDtcclxufVxyXG4ubGVmdC03MntcclxuICBsZWZ0OiA3MnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRvcC00e1xyXG4gIHRvcDogNHB4ICFpbXBvcnRhbnRcclxufVxyXG4udG9wLTE2e1xyXG4gIHRvcDogMTZweDtcclxufVxyXG4uYmctd2hpdGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnAtYm90dG9tLTB7XHJcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG4ucC10b3AtMjR7XHJcbiAgcGFkZGluZy10b3A6IDI0cHg7XHJcbn1cclxuLmJvdHRvbS0xOHtcclxuICBib3R0b206IDE4cHggIWltcG9ydGFudDtcclxufVxyXG4uZi0yMHtcclxuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4ucC1ib3R0b20tMntcclxuICBwYWRkaW5nLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kaXYtbG9hZGluZ2NpbntcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcbi5jb2wtaW1nLWhvdGVse1xyXG4gIC8vaGVpZ2h0OiAxMDlweDtcclxuICBoZWlnaHQ6IDEyM3B4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uaW1nLXJlY2VudHtcclxuICBoZWlnaHQ6IDk2cHg7XHJcbiAgICB3aWR0aDogOTZweDtcclxuICAgIG9iamVjdC1maXQ6Y292ZXI7XHJcbn1cclxuLnRleHQtaG90ZWxuYW1lLXJlY2VudHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbn1cclxuLnRleHQtaW5mby1yZWNlbnR7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjODI4MjgyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG59XHJcbi50ZXh0LWluZm8tcmVjZW50LTF7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjODI4MjgyO1xyXG4gIGxpbmUtaGVpZ2h0OiA4cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5kaXYtdGV4dC1pbmZve1xyXG4gIG1hcmdpbjogMTJweDtcclxufVxyXG4uZGl2LXRleHQtaW5mby0xe1xyXG4gIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW46IDEycHg7XHJcbn1cclxuLmRpdi1yaWdodC1yZWNlbnQtMXtcclxuICB3aWR0aDogNzUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblxyXG4gICBib3gtc2hhZG93OiAwIDJweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG59XHJcbi5kaXYtcmlnaHQtcmVjZW50e1xyXG4gIHdpZHRoOiA2OSU7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcbi5kaXYtcmVjZW50e1xyXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gIGhlaWdodDo5NnB4O1xyXG4gIHdpZHRoOiAzMTFweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5kaXYtcmVjZW50LTF7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gIGhlaWdodDo5NnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbn1cclxuLmQtZmxleC1yZWNlbnR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogNjYwcHg7XHJcbn1cclxuLmQtZmxleC1vbmx5e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmRpdi1zY3JvbGwtcmVjZW50e1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn0iLCIuYmFja2dyb3VuZCB7XG4gIGhlaWdodDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyA1NjhweCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbi5iYWNrZ3JvdW5kIC5kaXYtd3JhcC1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgNTY4cHgpO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogLTE7XG59XG4uYmFja2dyb3VuZCAuaW1nLWJhY2tncm91bmQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgNTY4cHgpO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbn1cbi5iYWNrZ3JvdW5kIC5kaXYtd3JhcC1zZWFyY2gtaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogLThweDtcbiAgcGFkZGluZzogOHB4O1xuICBvcGFjaXR5OiAwLjQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOiA5NS44JTtcbiAgaGVpZ2h0OiAyODdweDtcbiAgbWFyZ2luLXRvcDogLTM2cHg7XG59XG4uYmFja2dyb3VuZCAuZGl2LXdyYXAtc2VhcmNoIHtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJhY2tncm91bmQgLnRleHQtaG9tZS1ob3RlbCB7XG4gIG1hcmdpbi10b3A6IDEyMHB4O1xufVxuLmJhY2tncm91bmQgLnRleHQtaG9tZS1ob3RlbCAubGFiZWwtaG9tZS1ob3RlbCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmJhY2tncm91bmQgLnRleHQtaG9tZS1ob3RlbC1ub3RpY2Uge1xuICBtYXJnaW4tdG9wOiAxOTdweDtcbn1cbi5iYWNrZ3JvdW5kIC50ZXh0LWhvbWUtaG90ZWwtbm90aWNlIC5sYWJlbC1ob21lLWhvdGVsIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uYmFja2dyb3VuZCAucm93LXNlYXJjaC1ob21lIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5iYWNrZ3JvdW5kLW5vdGljZSB7XG4gIGhlaWdodDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyA1NjhweCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbi5iYWNrZ3JvdW5kLW5vdGljZSAuZGl2LXdyYXAtYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDU2OHB4KTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xufVxuLmJhY2tncm91bmQtbm90aWNlIC5pbWctYmFja2dyb3VuZCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyA1NjhweCk7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xufVxuLmJhY2tncm91bmQtbm90aWNlIC5kaXYtd3JhcC1zZWFyY2gtaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogLThweDtcbiAgcGFkZGluZzogOHB4O1xuICBvcGFjaXR5OiAwLjQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOiA5NS44JTtcbiAgaGVpZ2h0OiAyODdweDtcbiAgbWFyZ2luLXRvcDogLTM2cHg7XG59XG4uYmFja2dyb3VuZC1ub3RpY2UgLmRpdi13cmFwLXNlYXJjaCB7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5iYWNrZ3JvdW5kLW5vdGljZSAudGV4dC1ob21lLWhvdGVsIHtcbiAgbWFyZ2luLXRvcDogMTIwcHg7XG59XG4uYmFja2dyb3VuZC1ub3RpY2UgLnRleHQtaG9tZS1ob3RlbCAubGFiZWwtaG9tZS1ob3RlbCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmJhY2tncm91bmQtbm90aWNlIC50ZXh0LWhvbWUtaG90ZWwtbm90aWNlIHtcbiAgbWFyZ2luLXRvcDogMTk3cHg7XG59XG4uYmFja2dyb3VuZC1ub3RpY2UgLnRleHQtaG9tZS1ob3RlbC1ub3RpY2UgLmxhYmVsLWhvbWUtaG90ZWwge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5iYWNrZ3JvdW5kLW5vdGljZSAucm93LXNlYXJjaC1ob21lIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5jbHMtY29udGVudC1zbGlkZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IC03MnB4O1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jbHMtY29udGVudC1zbGlkZS1ub3RpY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50ZXh0LXRpdGxlMSB7XG4gIG1hcmdpbi10b3A6IDAuNnJlbTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzhGOEY4RjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMmNoO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGV4dC10aXRsZWRlcyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG5cbi50ZXh0LXRpdGxlLWJsb2cge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtd2lkdGg6IDI2NXB4O1xuICBtYXgtaGVpZ2h0OiAzOXB4O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC8qIGF1dG9wcmVmaXhlcjogaWdub3JlIG5leHQgKi9cbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLnRleHQtdGl0bGUyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRleHQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4uZ3JhZDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNzJweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjMpKTtcbiAgei1pbmRleDogMTA7XG4gIGJvdHRvbTogNHB4O1xuICBsZWZ0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uZ3JhZDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMTVweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICB6LWluZGV4OiAxMDtcbiAgYm90dG9tOiA0cHg7XG4gIGxlZnQ6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uZ3JhZDMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4yKSk7XG4gIHotaW5kZXg6IDEwO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmdyYWQtYmxvZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI3MnB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIC8qIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICB6LWluZGV4OiAxMDtcbiAgYm90dG9tOiA0cHg7XG4gIGxlZnQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5jbHMtZGVhbDpmaXJzdC1jaGlsZCAuZ3JhZDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNzJweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjMpKTtcbiAgei1pbmRleDogMTA7XG4gIGJvdHRvbTogNHB4O1xuICBsZWZ0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uY2xzLWJsb2c6Zmlyc3QtY2hpbGQgLmdyYWQxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjcycHg7XG4gIGhlaWdodDogODBweDtcbiAgLyogRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4zKSk7XG4gIHotaW5kZXg6IDEwO1xuICBib3R0b206IDRweDtcbiAgbGVmdDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmNscy1tb29kOmZpcnN0LWNoaWxkIC5ncmFkMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjMpKTtcbiAgei1pbmRleDogMTA7XG4gIGJvdHRvbTogNHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uY2xzLWRlYWw6Zmlyc3QtY2hpbGQgLmdyYWQtYmxvZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDk5JTtcbiAgaGVpZ2h0OiA4MHB4O1xuICAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjMpKTtcbiAgei1pbmRleDogMTA7XG4gIGJvdHRvbTogNHB4O1xuICBsZWZ0OiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uY2xzLWJsb2c6Zmlyc3QtY2hpbGQgLmdyYWQtYmxvZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI3MnB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIC8qIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICB6LWluZGV4OiAxMDtcbiAgYm90dG9tOiA0cHg7XG4gIGxlZnQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5ncmFkLWljb24tYmxvZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDk0LjUlO1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwKSk7XG4gIHotaW5kZXg6IDEwO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5jbHMtZGVhbDpmaXJzdC1jaGlsZCAuZ3JhZC1pY29uLWJsb2cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwKSk7XG4gIHotaW5kZXg6IDEwO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5jbHMtZGVhbDpmaXJzdC1jaGlsZCAuZmxvYXQtaW5mb2ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDhweDtcbiAgei1pbmRleDogMTE7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5mbG9hdC1pbmZvaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTZweDtcbiAgei1pbmRleDogMTE7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5kaXYtd3JhcC1pY29uIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDJweDtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbn1cbi5kaXYtd3JhcC1pY29uIC5pbWctc2hhcmUge1xuICB3aWR0aDogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuXG4uZGl2LXdyYXAtaWNvbi1oZWFydCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAycHg7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG59XG4uZGl2LXdyYXAtaWNvbi1oZWFydCAuaW1nLWhlYXJ0IHtcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4uY2xzLWRlYWw6Zmlyc3QtY2hpbGQgLmZsb2F0LWluZm9pY29uaGVhcnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNTlweDtcbiAgbGVmdDogNTZweDtcbiAgei1pbmRleDogMTE7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDBweCA4cHggOHB4IDhweDtcbn1cblxuLmZsb2F0LWluZm9pY29uaGVhcnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNTlweDtcbiAgbGVmdDogNTZweDtcbiAgei1pbmRleDogMTE7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDBweCA4cHggOHB4IDhweDtcbn1cblxuLmZsb2F0LWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogOHB4O1xuICBsZWZ0OiAyNHB4O1xuICB6LWluZGV4OiAxMTtcbn1cblxuLmZsb2F0LWluZm8tcmVnaW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogOHB4O1xuICB6LWluZGV4OiAxMTtcbn1cblxuLmZsb2F0LXByb21vIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE5cHg7XG4gIGxlZnQ6IC00cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTI4MjI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGhlaWdodDogMjJweDtcbiAgcGFkZGluZzogM3B4IDhweCAwcHggMTJweDtcbiAgbWF4LXdpZHRoOiA5NSU7XG59XG5cbi5jbHMtZGVhbDpmaXJzdC1jaGlsZCAuZmxvYXQtcHJvbW8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTlweDtcbiAgbGVmdDogLTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MjgyMjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBwYWRkaW5nOiAzcHggOHB4IDBweCAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWF4LXdpZHRoOiA5NSU7XG59XG5cbi5mbG9hdC1wcm9tby1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jbHMtZGVhbDpmaXJzdC1jaGlsZCAuZmxvYXQtcHJvbW86YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMjJweDtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICM4NTFmMWM7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5mbG9hdC1wcm9tbzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAyMnB4O1xuICBib3JkZXItdG9wOiA0cHggc29saWQgIzg1MWYxYztcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmNscy1kZWFsOmZpcnN0LWNoaWxkIC5mbG9hdC1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDhweDtcbiAgbGVmdDogOHB4O1xufVxuXG4uY2xzLW1vb2Q6Zmlyc3QtY2hpbGQgLmZsb2F0LWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogOHB4O1xuICBsZWZ0OiA4cHg7XG59XG5cbi5jbHMtc3VidGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMjlweDtcbn1cblxuLmRpdi1pbmZvLWNvdmVyLWF1dG8td2lkdGgge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTA0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGl2LWluZm8tY292ZXItYXV0by1oZWlnaHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWctcmVnaW9uIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ubm9wYWRkaW5nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNsaWRlYmxvZ3RyaXBzLXNjcm9sbCB7XG4gIGhlaWdodDogMjM0cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLnNsaWRlYmxvZ3RyaXBzLXNjcm9sbCB7XG4gICAgaGVpZ2h0OiA1NDBweDtcbiAgfVxufVxuXG4uc2xpZGUyIHtcbiAgbWluLXdpZHRoOiAyNzJweDtcbiAgaGVpZ2h0OiAyMDhweDtcbn1cblxuLnNsaWRlMi1zY3JvbGwge1xuICBoZWlnaHQ6IDMyMHB4O1xuICBtYXJnaW4tbGVmdDogLTE5cHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAuc2xpZGUyLXNjcm9sbCB7XG4gICAgaGVpZ2h0OiAzMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDM2MHB4KSBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgLnNsaWRlMi1zY3JvbGwge1xuICAgIGhlaWdodDogMzIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtd2lkdGg6IDM4NHB4KSB7XG4gIC5zbGlkZTItc2Nyb2xsIHtcbiAgICBoZWlnaHQ6IDMyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzg0cHgpIGFuZCAobWF4LXdpZHRoOiA0MTJweCkge1xuICAuc2xpZGUyLXNjcm9sbCB7XG4gICAgaGVpZ2h0OiAzMjBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQxMnB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnNsaWRlMi1zY3JvbGwge1xuICAgIGhlaWdodDogMzIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5zbGlkZTItc2Nyb2xsIHtcbiAgICBoZWlnaHQ6IDMyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuc2xpZGUyLXNjcm9sbCB7XG4gICAgaGVpZ2h0OiAzMjBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDcyMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNsaWRlMi1zY3JvbGwge1xuICAgIGhlaWdodDogMzIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5zbGlkZTItc2Nyb2xsIHtcbiAgICBoZWlnaHQ6IDMzMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLnNsaWRlMi1zY3JvbGwge1xuICAgIGhlaWdodDogNTcwcHg7XG4gIH1cbn1cblxuLnNsaWRlNS1zY3JvbGwge1xuICBoZWlnaHQ6IDIzNHB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLnNsaWRlNS1zY3JvbGwge1xuICAgIGhlaWdodDogNTQwcHg7XG4gIH1cbn1cblxuLnNsaWRlMy1zY3JvbGwge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAuc2xpZGUzLXNjcm9sbCB7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDM2MHB4KSBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgLnNsaWRlMy1zY3JvbGwge1xuICAgIGhlaWdodDogMTgwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtd2lkdGg6IDM4NHB4KSB7XG4gIC5zbGlkZTMtc2Nyb2xsIHtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzg0cHgpIGFuZCAobWF4LXdpZHRoOiA0MTJweCkge1xuICAuc2xpZGUzLXNjcm9sbCB7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQxMnB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnNsaWRlMy1zY3JvbGwge1xuICAgIGhlaWdodDogMTkwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5zbGlkZTMtc2Nyb2xsIHtcbiAgICBoZWlnaHQ6IDE5MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuc2xpZGUzLXNjcm9sbCB7XG4gICAgaGVpZ2h0OiAxOTBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDcyMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNsaWRlMy1zY3JvbGwge1xuICAgIGhlaWdodDogMTkwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5zbGlkZTMtc2Nyb2xsIHtcbiAgICBoZWlnaHQ6IDE5MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLnNsaWRlMy1zY3JvbGwge1xuICAgIGhlaWdodDogMzMwcHg7XG4gIH1cbn1cblxuLnNsaWRlNC1zY3JvbGwge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgLnNsaWRlNC1zY3JvbGwge1xuICAgIGhlaWdodDogMTY2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzNjBweCkgYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gIC5zbGlkZTQtc2Nyb2xsIHtcbiAgICBoZWlnaHQ6IDE4NnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzc1cHgpIGFuZCAobWF4LXdpZHRoOiAzODRweCkge1xuICAuc2xpZGU0LXNjcm9sbCB7XG4gICAgaGVpZ2h0OiAxODZweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDM4NHB4KSBhbmQgKG1heC13aWR0aDogNDEycHgpIHtcbiAgLnNsaWRlNC1zY3JvbGwge1xuICAgIGhlaWdodDogMTg2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0MTJweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5zbGlkZTQtc2Nyb2xsIHtcbiAgICBoZWlnaHQ6IDE5NnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuc2xpZGU0LXNjcm9sbCB7XG4gICAgaGVpZ2h0OiAxOTZweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLnNsaWRlNC1zY3JvbGwge1xuICAgIGhlaWdodDogMTk2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MjBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zbGlkZTQtc2Nyb2xsIHtcbiAgICBoZWlnaHQ6IDE5NnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuc2xpZGU0LXNjcm9sbCB7XG4gICAgaGVpZ2h0OiAxOTZweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gIC5zbGlkZTQtc2Nyb2xsIHtcbiAgICBoZWlnaHQ6IDMyMHB4O1xuICB9XG59XG5cbi5zbGlkZTMge1xuICBtaW4td2lkdGg6IDIxNnB4O1xuICBoZWlnaHQ6IDI4MnB4O1xufVxuXG4uaW5uZXJkZWFsczEge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaW5uZXJkZWFsczEgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHMyIHtcbiAgd2lkdGg6IDU3MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaW5uZXJkZWFsczIgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHMzIHtcbiAgd2lkdGg6IDg1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaW5uZXJkZWFsczMgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHM0IHtcbiAgd2lkdGg6IDExMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmlubmVyZGVhbHM0IGRpdiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG5cbi5pbm5lcmRlYWxzNSB7XG4gIHdpZHRoOiAxNDAwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcmRlYWxzNSBkaXYge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4uaW5uZXJkZWFsczYge1xuICB3aWR0aDogMTY4MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaW5uZXJkZWFsczYgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHM3IHtcbiAgd2lkdGg6IDE5NTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmlubmVyZGVhbHM3IGRpdiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG5cbi5pbm5lcmRlYWxzOCB7XG4gIHdpZHRoOiAyMjMwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcmRlYWxzOCBkaXYge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4uaW5uZXJkZWFsczkge1xuICB3aWR0aDogMjUwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaW5uZXJkZWFsczkgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHMxMCB7XG4gIHdpZHRoOiAyNzgwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcmRlYWxzMTAgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHMxMSB7XG4gIHdpZHRoOiAzMDYwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcmRlYWxzMTEgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHMxMiB7XG4gIHdpZHRoOiAzMzQwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcmRlYWxzMTIgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHMxMyB7XG4gIHdpZHRoOiAzNjEwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcmRlYWxzMTMgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHMxNCB7XG4gIHdpZHRoOiAzODkwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcmRlYWxzMTQgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHMxNSB7XG4gIHdpZHRoOiA0MTcwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcmRlYWxzMTUgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHMxNiB7XG4gIHdpZHRoOiA0NDUwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcmRlYWxzMTYgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHMxNyB7XG4gIHdpZHRoOiA0NzIwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcmRlYWxzMTcgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHMxOCB7XG4gIHdpZHRoOiA1MDAwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcmRlYWxzMTggZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHMxOSB7XG4gIHdpZHRoOiA1MjgwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcmRlYWxzMTkgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHMyMCB7XG4gIHdpZHRoOiA1NTUwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcmRlYWxzMjAgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyMiB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcjIgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyMyB7XG4gIHdpZHRoOiA1MTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmlubmVyMyBkaXYge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4uaW5uZXI0IHtcbiAgd2lkdGg6IDE5NSU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcjQgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyNSB7XG4gIHdpZHRoOiA4NTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmlubmVyNSBkaXYge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4uaW5uZXI2IHtcbiAgd2lkdGg6IDEwMDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmlubmVyNiBkaXYge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4uaW5uZXI3IHtcbiAgd2lkdGg6IDExNzBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmlubmVyNyBkaXYge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4uaW5uZXI4IHtcbiAgd2lkdGg6IDEzMzBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmlubmVyOCBkaXYge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4uaW5uZXI5IHtcbiAgd2lkdGg6IDE1MjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmlubmVyOSBkaXYge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4uaW5uZXIxMCB7XG4gIHdpZHRoOiAxNjkwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcjEwIGRpdiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG5cbi50ZXh0LXByaWNlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbi5ob3RlbC1uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAyNjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udGl0bGUtYmxvZyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMjYwcHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwcHggc29saWQgI2FhYTtcbiAgbWFyZ2luOiA5cHggLTIwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5pdGVtLW1kIGlvbi1hdmF0YXIge1xuICBtaW4td2lkdGg6IDBweDtcbiAgbWluLWhlaWdodDogMHB4O1xufVxuXG4udmwge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNiZGJkYmQ7XG4gIGhlaWdodDogMzZweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmJ0bi1zZWFyY2gge1xuICBib3JkZXItY29sb3I6ICNmNTkyMzM7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjZjU5MjMzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MnB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbn1cblxuLmxpc3QtaGVhZGVyLW1kIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWluLWhlaWdodDogMHB4O1xuICBib3JkZXItdG9wOiAwcHggc29saWQgI2RlZGVkZTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzIyMjIyMjtcbn1cblxuLml0ZW0tbWQge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuLypTdHlsZSBjYWxlbmRhciovXG4uY29sLWNhbGVuZGFyIHtcbiAgei1pbmRleDogOTk7XG59XG5cbi5jb2wtY2FsZW5kYXIge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5jb2wtY2FsZW5kYXIgLmNhbGVuZGFyLWRhdGUuY2luIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC03MXB4O1xuICB0b3A6IDMycHg7XG59XG5cbi5jb2wtY2FsZW5kYXIgLmNhbGVuZGFyLWRhdGUuY291dCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtODhweDtcbiAgdG9wOiAzMnB4O1xufVxuXG4ucGFnZS1tYWluIC5jYWxlbmRhci1kYXRlIC5idXR0b24ge1xuICBib3JkZXItY29sb3I6ICNmNzkyMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjZjc5MjIxO1xufVxuXG4uaW9uLW1kLWNhbGVuZGFyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG5cbi5jYWxlbmRhci1kYXRlIC5pdGVtLWlubmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY2FsZW5kYXItZGF0ZSAuaXRlbS1ibG9jayB7XG4gIG1pbi1oZWlnaHQ6IDIuNHJlbTtcbiAgaGVpZ2h0OiAwcHg7XG59XG5cbnBhZ2UtbWFpbiAuc2xpZGUzIHtcbiAgaGVpZ2h0OiA5OHB4O1xuICB3aWR0aDogMTYwcHggIWltcG9ydGFudDtcbn1cblxuLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pdGVtLWlvcyBpb24tdGh1bWJuYWlsIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNscy1kZWFsOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiA0cHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNscy1ibG9nOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNscy1kZWFsOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jbHMtbW9vZDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jbHMtbW9vZDpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1yaWdodDogMTZweCAhaW1wb3J0YW50O1xufVxuXG4uY2xzLWRlc3RpbmF0aW9uOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLmNscy1kZXN0aW5hdGlvbjpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1yaWdodDogMTZweCAhaW1wb3J0YW50O1xufVxuXG4vKlN0eWxlIGNhbGVuZGFyKi9cbi5yYW5nZS1tZC14YW5oIC5yYW5nZS1iYXItYWN0aXZlLFxuLnJhbmdlLW1kLXhhbmggLnJhbmdlLWtub2IsXG4ucmFuZ2UtbWQteGFuaCAucmFuZ2UtcGluLFxuLnJhbmdlLW1kLXhhbmggLnJhbmdlLXBpbjo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzI2YmVkNiAhaW1wb3J0YW50O1xufVxuXG4ubS1sZWZ0LTEwIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4uZGl2LXBhZGRpbmcge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogLTE0cHg7XG59XG5cbmxhYmVsIHtcbiAgcGFkZGluZzogMThweCAwcHggMThweCAwcHg7XG59XG5cbi50ZXh0LWNpbnRodSB7XG4gIHBhZGRpbmc6IDE4cHggMThweCAxOHB4IDBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcbiAgLmltZy1wYWRkaW5nLmltZy1sb2NhdGlvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IC0ycHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pbWctcGFkZGluZy5pbWctY2hlY2tpbiB7XG4gICAgbWFyZ2luLWxlZnQ6IC00cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pbWctcGFkZGluZy5pbWctY2hlY2tvdXQge1xuICAgIG1hcmdpbi1sZWZ0OiAtMjJweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmltZy1wYWRkaW5nLmltZy1wZW9wbGUge1xuICAgIG1hcmdpbi1sZWZ0OiAtNHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY29sLWNhbGVuZGFyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG59XG5ib2R5IC5hbGVydC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG5ib2R5IC50b29sYmFyLWNvbnRlbnQtaW9zIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5ib2R5IGlvbi1hcHAuaW9zIFtwYWRkaW5nXSAuc2Nyb2xsLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4O1xuICBwYWRkaW5nLXRvcDogMTZweCAhaW1wb3J0YW50O1xufVxuYm9keSAuY3QtMSwgYm9keSAuY3QtMiwgYm9keSAuY3QtOCB7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG59XG5ib2R5IC5hbGVydC1idXR0b24ge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjc5MjIxICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xufVxuYm9keSAucmFuZ2Uta25vYi1oYW5kbGUge1xuICB3aWR0aDogNDhweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcbn1cbmJvZHkgLmJhci1idXR0b24tbWQsIGJvZHkgLmJhci1idXR0b24taW9zIHtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4udGV4dC1sb2FkZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNscy1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLnN0YXR1c2Jhci1tYXJnaW4tdG9wIHtcbiAgbWFyZ2luLXRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyAyMnB4KTtcbn1cblxuOjpuZy1kZWVwIC5jbHMtY29udGVudC1jb3ZlciAuc3RhdHVzYmFyLW1hcmdpbi10b3Age1xuICBtYXJnaW4tdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDIycHgpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNDEycHgpIHtcbiAgOjpuZy1kZWVwIGlvbi1zcGlubmVyIHtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDEycHgpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICA6Om5nLWRlZXAgaW9uLXNwaW5uZXIge1xuICAgIGhlaWdodDogMTYwcHg7XG4gIH1cbiAgOjpuZy1kZWVwIC5kaXYtd3JhcC1zZWFyY2gtaW5wdXQge1xuICAgIHdpZHRoOiA5Ni4yJSAhaW1wb3J0YW50O1xuICB9XG4gIDo6bmctZGVlcCAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICAgIHdpZHRoOiA5Ni4yJSAhaW1wb3J0YW50O1xuICB9XG59XG46Om5nLWRlZXAgLmx1bmFyY2FsZW5kYXIge1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNlNTI4MjI7XG4gIGJvcmRlci1yYWRpdXM6IDM2cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cbjo6bmctZGVlcCAubHVuYXJjYWxlbmRhciBwIHtcbiAgY29sb3I6ICNlNTI4MjIgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuZGF5aG90IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvaWNfZmlyZS5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDI3cHggMHB4O1xufVxuOjpuZy1kZWVwIC5kYXlzIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5iZXR3ZWVuIC5kYXlzLWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnN0YXJ0U2VsZWN0aW9uIC5kYXlzLWJ0biB7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5zdGFydFNlbGVjdGlvbiAuZGF5cy1idG4gcCB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmVuZFNlbGVjdGlvbiAuZGF5cy1idG4ge1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuZW5kU2VsZWN0aW9uIC5kYXlzLWJ0biBwIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBzbWFsbCB7XG4gIG1hcmdpbjogLTZweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2U1MjgyMiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogLTZweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgbGVmdDogLTI1cHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAucC1sZWZ0LTE2IHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC1jb250YWluZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi10b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICogMiAtIDE0cHgpO1xuICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDhweDtcbiAgLXdlYmtpdC1wYWRkaW5nLWVuZDogOHB4O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDhweDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHVuc2V0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDQ0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuOjpuZy1kZWVwIC5pY19idXMyIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6OmJlZm9yZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb250ZW50OiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9pY19idXMyLnN2Z1wiKTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4cHg7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG59XG46Om5nLWRlZXAgLmljX2hvbWUgLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczo6YmVmb3JlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbnRlbnQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWdzL2ljX2hvbWUuc3ZnXCIpO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDhweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbn1cbjo6bmctZGVlcCAuaWNfcGFwZXIgLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczo6YmVmb3JlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbnRlbnQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWdzL2ljX3BhcGVyLnN2Z1wiKTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4cHg7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG59XG46Om5nLWRlZXAgLmljX21lc3NhZ2UgLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczo6YmVmb3JlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbnRlbnQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWdzL2ljX21lc3NhZ2Uuc3ZnXCIpO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDhweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggOHB4IDBweCAjODI4MjgyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtbm90aWZpY2F0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQ0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxM3B4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAtd2Via2l0LXBhZGRpbmctZW5kOiAxMHB4O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogNjBweDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojZmZmO1xuICAtLWJhY2tncm91bmQtc2VsZWN0ZWQ6I2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbjo6bmctZGVlcCAuZml4aGVpZ2h0LTQ0IC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQ0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxM3B4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAtd2Via2l0LXBhZGRpbmctZW5kOiAxMHB4O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZmY7XG4gIC0tYmFja2dyb3VuZC1zZWxlY3RlZDojZmZmO1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuOjpuZy1kZWVwIC5maXhoZWlnaHQtODAgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogNDRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIC13ZWJraXQtcGFkZGluZy1lbmQ6IDEwcHg7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6I2ZmZjtcbiAgLS1iYWNrZ3JvdW5kLXNlbGVjdGVkOiNmZmY7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG46Om5nLWRlZXAgLmZpeGhlaWdodC05MCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0NHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMTBweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAxMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDkwcHggIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojZmZmO1xuICAtLWJhY2tncm91bmQtc2VsZWN0ZWQ6I2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDI1MHB4KSBhbmQgKG1heC13aWR0aDogMzI5cHgpIHtcbiAgOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gICAgbWluLWhlaWdodDogNzJweDtcbiAgfVxuICA6Om5nLWRlZXAgLmZpeGhlaWdodC00NCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gICAgbWluLWhlaWdodDogNDRweDtcbiAgfVxuICA6Om5nLWRlZXAgLmZpeGhlaWdodC04MCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gICAgbWluLWhlaWdodDogODBweDtcbiAgfVxuICA6Om5nLWRlZXAgLmZpeGhlaWdodC05MCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gICAgbWluLWhlaWdodDogMTAycHg7XG4gIH1cbn1cbjo6bmctZGVlcCAuaWNfYnVzMiAudG9hc3QtY29udGFpbmVyOjpiZWZvcmUge1xuICBmbG9hdDogbGVmdDtcbiAgY29udGVudDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvaWNfYnVzMi5zdmdcIik7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogOHB4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xufVxuOjpuZy1kZWVwIC5pY19ob21lIC50b2FzdC13cmFwcGVyLnRvYXN0LXRvcCAudG9hc3QtY29udGFpbmVyIC50b2FzdC1jb250ZW50OjpiZWZvcmUge1xuICBmbG9hdDogbGVmdDtcbiAgY29udGVudDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvaWNfaG9tZS5zdmdcIik7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogOHB4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xufVxuOjpuZy1kZWVwIC5pY19wYXBlciAudG9hc3QtY29udGVudDo6YmVmb3JlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbnRlbnQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWdzL2ljX3BhcGVyLnN2Z1wiKTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4cHg7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG59XG46Om5nLWRlZXAgLmljX21lc3NhZ2UgLnRvYXN0LWNvbnRlbnQ6OmJlZm9yZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb250ZW50OiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9pY19tZXNzYWdlLnN2Z1wiKTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4cHg7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5kb25lMS1jb21iby1jc3MgLnNjLWlvbi1hbGVydC1pb3MtaCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Y5ZjlmOSkpICFpbXBvcnRhbnQ7XG4gIC0tbWF4LXdpZHRoOiAyNzBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgLS1taW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpICFpbXBvcnRhbnQ7XG4gIHRvdWNoLWFjdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtaW9zIHtcbiAgcGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICB3aWR0aDogdmFyKC0td2lkdGgpICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoKSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCkgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IHZhcigtLW1pbi1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IHZhcigtLW1heC1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuZG9uZTEtY29tYm8tY3NzIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xuICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3Mge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB3aWR0aDogYXV0bztcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcbiAgYm9yZGVyLWNvbG9yOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1tZCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbjo6bmctZGVlcCAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1tZCB7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuOjpuZy1kZWVwIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LW1kIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46Om5nLWRlZXAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtbWQge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG46Om5nLWRlZXAgLmhvbWUtc2xpZGVyIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogI2ZmZjtcbn1cbjo6bmctZGVlcCAuaG9tZS1zbGlkZXIgaW9uLXNsaWRlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuOjpuZy1kZWVwIC5ob21lLXNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uaW1nLWxvc3Rjb25uZWN0aW9uIHtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQtbG9zdGNvbm5lY3Rpb24ge1xuICBjb2xvcjogIzgyODI4MjtcbiAgcGFkZGluZzogMCA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jbHMtY29udGVudC1jb3ZlciB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIC0tb2Zmc2V0LWJvdHRvbTowcHg7XG59XG5cbi5jbHMtY29udGVudC1zbGlkZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xufVxuXG4uZGl2LXN0YXR1c2Jhci1mbG9hdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTI7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBjb2xvcjogIzIyMjIyMjtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4ycywgb3BhY2l0eSAwLjJzIGxpbmVhcjtcbn1cblxuLmZsb2F0LXN0YXR1c2Jhci1lbmFibGVkIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjJzLCBvcGFjaXR5IDAuMnMgbGluZWFyO1xuICBvcGFjaXR5OiAxO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5mbG9hdC1zdGF0dXNiYXItZGlzYWJsZWQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4ycywgb3BhY2l0eSAwLjJzIGxpbmVhcjtcbiAgei1pbmRleDogMDtcbn1cblxuLmNscy1leHBlcmllbmNlbXVzdHRyeSB7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuXG4ucC1yaWdodC04IHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5tLWJvdHRvbS04IHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4ucC10b3AtMzAge1xuICBwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xufVxuXG4ucC10b3AtMjEge1xuICBwYWRkaW5nLXRvcDogMjFweCAhaW1wb3J0YW50O1xufVxuXG4udGl0bGUtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDE2cHggMHB4IDBweCAwcHg7XG59XG5cbi50aXRsZS1wYWRkaW5nLTEge1xuICBwYWRkaW5nOiAyNHB4IDBweCAwcHggMHB4O1xufVxuXG4uaW1nLXJlZ2lvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLm5vcGFkZGluZyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5mbG9hdC1pbmZvLXJlZ2lvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDhweDtcbiAgei1pbmRleDogMTE7XG59XG5cbi5mbG9hdC1pbmZvLWV4cGVyaWVuY2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDExO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmltZy1mbG9hdC1leHBlcmllbmNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAxMTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWctbXVzdHRyeSB7XG4gIGhlaWdodDogOTZweDtcbn1cblxuLnRleHQtdGl0bGVleHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ3JhZC1leHBlcmllbmNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDEwO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5zdWItdGl0bGUge1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cblxuLnRleHQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLnRleHQtc2VhcmNoIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmNvbC1wbGFjZWhvbGRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5jbHMtYmxvZ3RyaXA6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuLmNscy1ibG9ndHJpcDpmaXJzdC1jaGlsZCAuZ3JhZC1ibG9nIHtcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4ubS10b3AtNyB7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cblxuLmRpdi13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1nLWlucHV0IHtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiAxNnB4IDIwcHggMTZweCAxOHB4O1xuICB3aWR0aDogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uaW1nLWNpbi1jb3V0IHtcbiAgcGFkZGluZzogMTRweCAyMHB4IDE0cHggMTdweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucC1sLTAge1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuLmltZy1jaGVja2luLCAuaW1nLXBlb3BsZSB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG5cbi5pbWctY2hlY2tvdXQge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxMnB4O1xufVxuXG4uZGl2LWlucHV0LXJpZ2h0IHtcbiAgbWFyZ2luLWxlZnQ6IDUxcHg7XG59XG5cbi5tLWwtMzYge1xuICBtYXJnaW4tbGVmdDogMzZweCAhaW1wb3J0YW50O1xufVxuXG4uZGl2LWNpbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDQ2JTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4udGV4dC1pbnB1dC1zZWFyY2gge1xuICBtYXJnaW46IDBweCAwIDE0cHggNTFweDtcbn1cblxuLnRleHQtaW5wdXQtc2VhcmNoLXdyYXB0ZXh0IHtcbiAgbWFyZ2luOiA0cHggMCAxNHB4IDUxcHg7XG59XG5cbi50ZXh0LW1pZGRsZSB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLnRleHQtY2luLCAudGV4dC1wYXgge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogIzMzMzMzMztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLnRleHQtY29sb3Ige1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLmZvbnQtdGh1IHtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xufVxuXG4uZGl2LWNvdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAxNThweDtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uZGl2LWltZy1jb2ZmZWUge1xuICBib3R0b206IDQwcHg7XG59XG5cbi5pbWctY29mZmVlIHtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuXG4uaW1nLWxvZ28ge1xuICB3aWR0aDogNzZweDtcbiAgbWFyZ2luLXRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyAyMnB4KTtcbiAgei1pbmRleDogMTA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRpdi13cmFwZXItc2xpZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyAxMjhweCkgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgNjAsIDExMywgMC4yKTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDk0cHgpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IDg2cHg7XG4gIHBhZGRpbmc6IDE2cHggMDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgd2lkdGg6IDk1LjglO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHotaW5kZXg6IDk5O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40MnB4O1xuICBjb2xvcjogIzIyMjIyMjtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbiAuZGl2LWhvdGVsLCAuc3dpcGVyLXBhZ2luYXRpb24gLmRpdi1mbGlnaHQsIC5zd2lwZXItcGFnaW5hdGlvbiAuZGl2LWNvbWJvLCAuc3dpcGVyLXBhZ2luYXRpb24gLmRpdi1mb29kIHtcbiAgd2lkdGg6IDI1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24gLmFjdGl2ZS1tYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjVzIGVhc2Utb3V0O1xuICB3aWR0aDogMzAlO1xuICBsZWZ0OiAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjY2RjZGNkO1xuICB6LWluZGV4OiAtMTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjYpO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgdG9wOiAtM3B4O1xufVxuLnN3aXBlci1wYWdpbmF0aW9uIC5zdWItY29sb3Ige1xuICBmb250LXdlaWdodDogMzAwO1xuICBvcGFjaXR5OiAwLjc7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24gLmxlZnQtNTAge1xuICBsZWZ0OiAzNyU7XG4gIG1hcmdpbi1sZWZ0OiAtNnB4O1xufVxuLnN3aXBlci1wYWdpbmF0aW9uIC5sZWZ0LTY2IHtcbiAgbGVmdDogNzAlO1xuICBtYXJnaW4tbGVmdDogLTRweDtcbiAgd2lkdGg6IDI3JTtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbiAuZm9jdXMge1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cblxuLmNscy12aXNpYmxlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAycywgb3BhY2l0eSAwLjVzIGxpbmVhcjtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNscy1kaXNhYmxlZCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgaGVpZ2h0OiAwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMnMsIG9wYWNpdHkgMC41cyBsaW5lYXI7XG4gIHotaW5kZXg6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kaXYtd3JhcGVyLWZvb2Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi5tYWluLWNvbG9yIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLmRpdi1ob3RlbC5tYWluLWNvbG9yIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLmRpdi1mbGlnaHQubWFpbi1jb2xvciB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5ob21lLWFjdGl2ZS10YWIge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ob21lLWRlYWN0aXZlLXRhYiB7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBvcGFjaXR5OiAwLjY1O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtaWNvbi1ob21lIHtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4uY2xzLW5vdGljZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDk0cHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlZWM3O1xuICBoZWlnaHQ6IDY3cHg7XG4gIHBhZGRpbmc6IDE2cHggMDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB6LWluZGV4OiA5OTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLmNscy1ub3RpY2UgLmRpdi1ob3RlbCwgLmNscy1ub3RpY2UgLmRpdi1mbGlnaHQsIC5jbHMtbm90aWNlIC5kaXYtY29tYm8sIC5jbHMtbm90aWNlIC5kaXYtZm9vZCB7XG4gIHdpZHRoOiAyNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmNscy1ub3RpY2UgLmFjdGl2ZS1tYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjVzIGVhc2Utb3V0O1xuICB3aWR0aDogMzAlO1xuICBsZWZ0OiAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjY2RjZGNkO1xuICB6LWluZGV4OiAtMTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjYpO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgdG9wOiAtM3B4O1xufVxuLmNscy1ub3RpY2UgLnN1Yi1jb2xvciB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5jbHMtbm90aWNlIC5sZWZ0LTUwIHtcbiAgbGVmdDogMzclO1xuICBtYXJnaW4tbGVmdDogLTZweDtcbn1cbi5jbHMtbm90aWNlIC5sZWZ0LTY2IHtcbiAgbGVmdDogNzAlO1xuICBtYXJnaW4tbGVmdDogLTRweDtcbiAgd2lkdGg6IDI3JTtcbn1cbi5jbHMtbm90aWNlIC5mb2N1cyB7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tbm90aWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgMTcxcHgpO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiA4NnB4O1xuICBwYWRkaW5nOiAxNnB4IDA7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIHdpZHRoOiA5NS4yJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB6LWluZGV4OiA5OTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tbm90aWNlIC5kaXYtaG90ZWwsIC5zd2lwZXItcGFnaW5hdGlvbi1ub3RpY2UgLmRpdi1mbGlnaHQsIC5zd2lwZXItcGFnaW5hdGlvbi1ub3RpY2UgLmRpdi1jb21ibywgLnN3aXBlci1wYWdpbmF0aW9uLW5vdGljZSAuZGl2LWZvb2Qge1xuICB3aWR0aDogMjUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1ub3RpY2UgLmFjdGl2ZS1tYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjVzIGVhc2Utb3V0O1xuICB3aWR0aDogMzAlO1xuICBsZWZ0OiAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjY2RjZGNkO1xuICB6LWluZGV4OiAtMTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjYpO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgdG9wOiAtM3B4O1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLW5vdGljZSAuc3ViLWNvbG9yIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgb3BhY2l0eTogMC43O1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLW5vdGljZSAubGVmdC01MCB7XG4gIGxlZnQ6IDM3JTtcbiAgbWFyZ2luLWxlZnQ6IC02cHg7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tbm90aWNlIC5sZWZ0LTY2IHtcbiAgbGVmdDogNzAlO1xuICBtYXJnaW4tbGVmdDogLTRweDtcbiAgd2lkdGg6IDI3JTtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1ub3RpY2UgLmZvY3VzIHtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtbm90aWNlIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5tYXJnaW4tbGVmdC0xMSB7XG4gIG1hcmdpbi1sZWZ0OiAxMXB4O1xufVxuXG4uaW1nLW5vdGljZSB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbi50ZXh0LWluZm8ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4udG9wLTEyIHtcbiAgdG9wOiAxMnB4O1xufVxuXG4uZGl2LXdyYXAtZGVhbCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5kaXYtd3JhcC1kZWFsIC5mbG9hdC1pbmZvaWNvbiB7XG4gIGxlZnQ6IDEycHggIWltcG9ydGFudDtcbn1cbi5kaXYtd3JhcC1kZWFsIC5kaXYtd3JhcC1pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxNzBweDtcbn1cbi5kaXYtd3JhcC1kZWFsIC5ob3RlbC1uYW1lIHtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG4uZGl2LXdyYXAtZGVhbCAuZmxvYXQtaW5mbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTRweDtcbiAgYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcbn1cbi5kaXYtd3JhcC1kZWFsIC5pbWcge1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMHB4ICFpbXBvcnRhbnQ7XG59XG4uZGl2LXdyYXAtZGVhbCAuc2xpZGUyIHtcbiAgaGVpZ2h0OiAxNzBweCAhaW1wb3J0YW50O1xufVxuLmRpdi13cmFwLWRlYWwgLnRleHQtdGl0bGUtYmxvZyB7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4uZmxvYXQtaW5mb2ljb24ge1xuICBsZWZ0OiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sZWZ0LTI4IHtcbiAgbGVmdDogMjhweCAhaW1wb3J0YW50O1xufVxuXG4ubGVmdC03MiB7XG4gIGxlZnQ6IDcycHggIWltcG9ydGFudDtcbn1cblxuLnRvcC00IHtcbiAgdG9wOiA0cHggIWltcG9ydGFudDtcbn1cblxuLnRvcC0xNiB7XG4gIHRvcDogMTZweDtcbn1cblxuLmJnLXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLnAtYm90dG9tLTAge1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4ucC10b3AtMjQge1xuICBwYWRkaW5nLXRvcDogMjRweDtcbn1cblxuLmJvdHRvbS0xOCB7XG4gIGJvdHRvbTogMThweCAhaW1wb3J0YW50O1xufVxuXG4uZi0yMCB7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ucC1ib3R0b20tMiB7XG4gIHBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcbn1cblxuLmRpdi1sb2FkaW5nY2luIHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuLmNvbC1pbWctaG90ZWwge1xuICBoZWlnaHQ6IDEyM3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5pbWctcmVjZW50IHtcbiAgaGVpZ2h0OiA5NnB4O1xuICB3aWR0aDogOTZweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi50ZXh0LWhvdGVsbmFtZS1yZWNlbnQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGNvbG9yOiAjMzMzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnRleHQtaW5mby1yZWNlbnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnRleHQtaW5mby1yZWNlbnQtMSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGxpbmUtaGVpZ2h0OiA4cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmRpdi10ZXh0LWluZm8ge1xuICBtYXJnaW46IDEycHg7XG59XG5cbi5kaXYtdGV4dC1pbmZvLTEge1xuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTJweDtcbn1cblxuLmRpdi1yaWdodC1yZWNlbnQtMSB7XG4gIHdpZHRoOiA3NSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmRpdi1yaWdodC1yZWNlbnQge1xuICB3aWR0aDogNjklO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5kaXYtcmVjZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIGhlaWdodDogOTZweDtcbiAgd2lkdGg6IDMxMXB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGl2LXJlY2VudC0xIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBoZWlnaHQ6IDk2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cblxuLmQtZmxleC1yZWNlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNjYwcHg7XG59XG5cbi5kLWZsZXgtb25seSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kaXYtc2Nyb2xsLXJlY2VudCB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/auth-service */ "./src/app/providers/auth-service.ts");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
/* harmony import */ var _search_hotel_filter_search_hotel_filter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../search-hotel-filter/search-hotel-filter */ "./src/app/search-hotel-filter/search-hotel-filter.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _network_provider_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../network-provider.service */ "./src/app/network-provider.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _ionic_native_firebase_messaging_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/firebase-messaging/ngx */ "./node_modules/@ionic-native/firebase-messaging/ngx/index.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _ionic_native_firebase_dynamic_links_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic-native/firebase-dynamic-links/ngx */ "./node_modules/@ionic-native/firebase-dynamic-links/ngx/index.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var _providers_foodService__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../providers/foodService */ "./src/app/providers/foodService.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../providers/mytrip-service.service */ "./src/app/providers/mytrip-service.service.ts");
/* harmony import */ var _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../providers/bizTravelService */ "./src/app/providers/bizTravelService.ts");






























let Tab1Page = class Tab1Page {
    constructor(navCtrl, authService, modalCtrl, http, zone, platform, searchhotel, valueGlobal, splashScreen, gf, activeRoute, router, loadCtrl, loadingCtrl, safariViewController, element, network, networkProvider, alertCtrl, storage, socialSharing, fcm, fcmNative, appVersion, firebaseDynamicLinks, actionSheetCtrl, nativePageTransitions, activityService, foodService, flightService, _mytripservice, bizTravelService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.zone = zone;
        this.platform = platform;
        this.searchhotel = searchhotel;
        this.valueGlobal = valueGlobal;
        this.splashScreen = splashScreen;
        this.gf = gf;
        this.activeRoute = activeRoute;
        this.router = router;
        this.loadCtrl = loadCtrl;
        this.loadingCtrl = loadingCtrl;
        this.safariViewController = safariViewController;
        this.element = element;
        this.network = network;
        this.networkProvider = networkProvider;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.fcm = fcm;
        this.fcmNative = fcmNative;
        this.appVersion = appVersion;
        this.firebaseDynamicLinks = firebaseDynamicLinks;
        this.actionSheetCtrl = actionSheetCtrl;
        this.nativePageTransitions = nativePageTransitions;
        this.activityService = activityService;
        this.foodService = foodService;
        this.flightService = flightService;
        this._mytripservice = _mytripservice;
        this.bizTravelService = bizTravelService;
        this.pet = "khachsan";
        this.slideData1 = [];
        this.slideData = [];
        this.slideData2 = [];
        this.regions = [];
        this.regionsinter = [];
        this.regionshtml = [];
        this.regionscheck = [];
        this.regionsend = [];
        this.regionintersend = [];
        this.recom = [];
        this.recoms = [];
        this.arrtempdeal = [];
        this.ischeck = false;
        this.ischeckks = true;
        this.showCalCin = false;
        this.showCalCout = false;
        this.ischecklist = false;
        this.isenabled = true;
        this.ischeckclose = false;
        this.blog = [];
        this.adult = 2;
        this.child = 0;
        this.roomnumber = 1;
        this.ischecksearch = false;
        this.page = 1;
        this.pageSize = 5;
        this.totalItem = 200;
        this.pageBlog = 1;
        this.pageSizeBlog = 5;
        this.showloadmore = true;
        this.showloadmoreblog = true;
        this.showloadmoreblogtrip = true;
        this.listBlog = [];
        this.blogtrips = [];
        this.regionnamesuggest = "";
        this.canLoadBlog = true;
        this.pageBlogTrip = 1;
        this.canLoadDeal = true;
        this.cofdate = 0;
        this.cotdate = 0;
        this.isrefreshlist = "false";
        this.activeTab = 0;
        this.arrDistrict = [];
        this.arrCity = [];
        this.allowclickcalendar = true;
        this.isNotice = false;
        this.allowShowCalendarFirstTime = true;
        this.arrHistory = [];
        this.scrollFunction = (event) => {
            var se = this;
            let el = document.getElementsByClassName('div-statusbar-float');
            if (el.length > 0) {
                if (event.detail.scrollTop > 100) {
                    if (!el[0].classList.contains("float-statusbar-enabled")) {
                        el[0].classList.add('float-statusbar-enabled');
                        el[0].classList.remove('float-statusbar-disabled');
                    }
                }
                else {
                    el[0].classList.remove('float-statusbar-enabled');
                    el[0].classList.add('float-statusbar-disabled');
                }
            }
            if (se.activeTab == 3 && se.foodService.tabFoodIndex == 1 && se.router.url.indexOf("foodcombodetail") == -1) {
                if (event.detail.scrollTop >= 400) {
                    if (!jquery__WEBPACK_IMPORTED_MODULE_17__(".homefood-header").hasClass("cls-visible")) {
                        jquery__WEBPACK_IMPORTED_MODULE_17__(".homefood-header").removeClass("cls-disabled").addClass("cls-visible");
                    }
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_17__(".homefood-header").removeClass("cls-visible").addClass("cls-disabled");
                }
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_17__(".homefood-header").removeClass("cls-visible").addClass("cls-disabled");
            }
            if (se.activeTab == 1) {
                if (se.flightService.tabFlightIndex != 1) {
                    se.hideStatusBar();
                }
                let el = document.getElementsByClassName('div-flight-topdeal');
                let eluseful = document.getElementsByClassName('div-useful-title');
                if (el && el.length > 0) {
                    if (event.detail.scrollTop >= 1230) {
                        if (el.length > 0 && !el[0].classList.contains("cls-topdeal-float")) {
                            el[0].classList.add('cls-topdeal-float');
                        }
                    }
                    else {
                        el[0].classList.remove('cls-topdeal-float');
                    }
                }
                if (eluseful && eluseful.length > 0) {
                    if (event.detail.scrollTop >= 2156) {
                        if (eluseful.length > 0 && !eluseful[0].classList.contains("cls-topdeal-float")) {
                            eluseful[0].classList.add('cls-topdeal-float');
                        }
                    }
                    else {
                        eluseful[0].classList.remove('cls-topdeal-float');
                    }
                }
            }
        };
        bizTravelService.isCompany = true;
        this.storage.get('jti').then((memberid) => {
            this.storage.get('deviceToken').then((devicetoken) => {
                if (devicetoken) {
                    this.gf.refreshToken(memberid, devicetoken);
                }
                else {
                    this.fcmNative.onTokenRefresh().subscribe(token => {
                        this.storage.set('deviceToken', token);
                        this.gf.refreshToken(memberid, token);
                    });
                }
            });
        });
        this.getCalendarholidays();
        this.appVersion.getVersionNumber().then(version => {
            this.appversion = version;
        });
        this.storage.get('arrHistory').then((data) => {
            if (data) {
                this.arrHistory = data;
                if (this.arrHistory.length > 1) {
                    let elements = document.querySelectorAll(".d-flex-recent");
                    if (elements.length > 0) {
                        Object.keys(elements).map((key) => {
                            let itemstyle = (320 * this.arrHistory.length) + 20 + 'px';
                            elements[key].style.width = itemstyle;
                        });
                    }
                    else {
                        let elements = document.querySelectorAll(".d-flex-only");
                        Object.keys(elements).map((key) => {
                            let itemstyle = (320 * this.arrHistory.length) + 20 + 'px';
                            elements[key].style.width = itemstyle;
                        });
                    }
                }
            }
        });
        this.valueGlobal.notRefreshDetail = false;
        if (this.valueGlobal.fbObject) {
            var obj = this.valueGlobal.fbObject;
            if (obj && obj.deepLink) {
                var arrParams = obj.deepLink.split("?");
                if (arrParams && arrParams.length > 1) {
                    var id = arrParams[1];
                    this.valueGlobal.logingoback = "/hoteldetail/" + id;
                    this.navCtrl.navigateForward('/hoteldetail/' + id);
                }
            }
            this.valueGlobal.fbObject = null;
        }
        storage.get("jti").then((uid) => {
            this.memberid = uid;
        });
        var se = this;
        se.platform.resume.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            se.networkProvider.getNetworkStatus().subscribe((connected) => {
                se.isConnected = connected;
                if (se.isConnected) {
                    se.networkProvider.setNetworkStatus(true);
                    se.zone.run(() => {
                        se.loaddata();
                    });
                    se.getNewsBlog(0);
                    se.storage.get("listtopdealdefault").then((data) => {
                        if (data && data.length > 0) {
                            se.loadTopDeal(data);
                            se.getHotelDealPaging();
                            se.getRegions();
                            se.getRegionsInternational();
                        }
                        else {
                            se.getHoteldeal();
                            setTimeout(() => {
                                if (se.myloader) {
                                    se.myloader.dismiss();
                                }
                            }, 2000);
                        }
                    });
                }
                else {
                    setTimeout(() => {
                        se.isConnected = false;
                        se.ischeck = false;
                        se.slideData1 = [];
                    }, 100);
                    se.gf.showWarning("Không có kết nối mạng", "Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng", "Đóng");
                }
            });
        }));
        if (!se.intervalTrip) {
            se.intervalTrip = setInterval(() => {
                storage.remove("listblogtripdefault");
                storage.remove("listtopdealdefault");
                storage.remove("regionnamesuggest");
            }, 24 * 60 * 60 * 1000);
        }
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.onEnter();
            this.gbmsg = this.searchhotel.gbmsg;
            this.gbitem = this.searchhotel.gbitem;
            this.co = this.searchhotel.flag;
            this.input = this.searchhotel.input;
            this.chuoi = this.searchhotel.chuoi;
            this.recent = this.searchhotel.recent;
            this.subscription = this.router.events.subscribe(event => {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_11__["NavigationEnd"] &&
                    (event.url === "/" ||
                        event.url == "/tabs/tab1" ||
                        event.url === "/app/tabs/tab1")) {
                    this.onEnter();
                    if (this.gf.getParams("resetBlogTrips")) {
                        this.blogtrips = [];
                        this.pageBlogTrip = 1;
                        this.gf.setParams(false, "resetBlogTrips");
                    }
                    else {
                    }
                }
            });
        });
    }
    onEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            if (se.activeTab == 0) {
                se._mytripservice.rootPage = "homehotel";
            }
            if (se.activeTab == 1) {
                return;
            }
            this.storage.get('arrHistory').then((data) => {
                if (data) {
                    this.arrHistory = data;
                    if (this.arrHistory.length > 1) {
                        let elements = document.querySelectorAll(".d-flex-recent");
                        if (elements.length > 0) {
                            Object.keys(elements).map((key) => {
                                let itemstyle = (320 * this.arrHistory.length) + 20 + 'px';
                                elements[key].style.width = itemstyle;
                            });
                        }
                        else {
                            let elements = document.querySelectorAll(".d-flex-only");
                            Object.keys(elements).map((key) => {
                                let itemstyle = (320 * this.arrHistory.length) + 20 + 'px';
                                elements[key].style.width = itemstyle;
                            });
                        }
                    }
                }
            });
            se.flightService.itemTabFlightActive.pipe().subscribe((data) => {
                if (data) {
                    se.setActiveTab(1);
                }
            });
            se.foodService.itemTabFood.pipe().subscribe((data) => {
                if (data) {
                    se.setActiveTab(3);
                }
            });
            se.searchhotel.itemTabHotel.pipe().subscribe((data) => {
                if (data) {
                    se.setActiveTab(0);
                }
            });
            se.flightService.itemUseFulClick.pipe().subscribe((data) => {
                if (data) {
                    if (se.content) {
                        se.content.scrollToPoint(0, data, 200);
                    }
                }
            });
            se.flightService.itemHomeFlightScrollTop.pipe().subscribe((data) => {
                if (data) {
                    setTimeout(() => {
                        if (se.content) {
                            se.content.scrollToTop(200);
                        }
                    }, 300);
                }
            });
            se.searchhotel.itemSearchHotelHome.pipe().subscribe((data) => {
                setTimeout(() => {
                    if (data && !se.searchhotel.hasShowCalendarFirstTime) {
                        se.searchhotel.hasShowCalendarFirstTime = true;
                        se.checkDefaultDateFocus();
                    }
                }, 100);
            });
            se.storage.get('auth_token').then((data) => {
                if (!data) {
                    se.blogtrips = [];
                    se.valueGlobal.countNotifi = 0;
                }
                else {
                    if (this.valueGlobal.blogid) {
                        this.likeItemblog(this.valueGlobal.blogid);
                    }
                    else {
                        this.getbloglike(1);
                    }
                }
            });
            if (se.blogtrips.length == 0) {
                se.storage.get("listblogtripdefault").then((data) => {
                    if (data && data.length > 0) {
                        se.blogtrips = data;
                    }
                    else {
                        se.getblogtrips();
                    }
                });
                se.storage.get("regionnamesuggest").then((regionname) => {
                    se.regionnamesuggest = regionname;
                });
            }
            if (se.blog.length == 0) {
                se.storage.get("listblogdefault").then((data) => {
                    if (data && data.length > 0) {
                        se.blog = data;
                    }
                    else {
                        se.getNewsBlog(0);
                    }
                });
                se.getNewsBlog(1);
            }
            if (se.slideData || se.slideData.length == 0) {
                se.storage.get("listtopdealdefault").then((data) => {
                    if (data && data.length > 0) {
                        se.slideData = data;
                    }
                    else {
                        se.getHoteldeal();
                    }
                });
            }
            if (se.slideData1 || se.slideData1.length == 0) {
                se.slideData1 = se.activityService.listTopDeal;
                se.loaddata();
                se.getHotelDealPaging();
                se.storage.get('listtopregions').then(dataregion => {
                    if (dataregion) {
                        se.loadCacheRegion();
                    }
                    else {
                        se.getRegions();
                    }
                });
                se.storage.get('listtopregioninternational').then(dataregionnation => {
                    if (dataregionnation) {
                        se.loadRegionsInternational(dataregionnation);
                    }
                    else {
                        se.getRegionsInternational();
                    }
                });
            }
            if (se.slideData1.length == 0) {
                se.loaddata();
                se.storage.get("listtopdealdefault").then((data) => {
                    if (data && data.length > 0) {
                        se.loadTopDeal(data);
                        se.getHotelDealPaging();
                        se.storage.get('listtopregions').then(dataregion => {
                            if (dataregion) {
                                se.loadCacheRegion();
                            }
                            else {
                                se.getRegions();
                            }
                        });
                        se.storage.get('listtopregioninternational').then(dataregionnation => {
                            if (dataregionnation) {
                                se.loadRegionsInternational(dataregionnation);
                            }
                            else {
                                se.getRegionsInternational();
                            }
                        });
                    }
                    else {
                        setTimeout(() => {
                            se.getHoteldeal();
                        }, 100);
                    }
                });
            }
            else {
                se.loaddata();
            }
        });
    }
    showNotification(data) {
        if (data && data.BookingCode && data.notifyAction != "cancel") {
            if (data.notifyAction == "sharereviewofhotel") {
                this.navCtrl.navigateForward('/app/tabs/tab3');
                this.gf.setParams(data.BookingCode, 'notifiBookingCode');
                this.gf.setParams(2, 'selectedTab3');
            }
            else if (data.NotifyType == "blog" && data.notifyAction == "blogofmytrip") {
                this.valueGlobal.backValue = "tab4";
                this.navCtrl.navigateForward("/blog/" + data.BookingCode);
            }
            else if (data.NotifyType == "fly" && data.notifyAction == "flychangeinfo") {
                this.navCtrl.navigateForward('/app/tabs/tab3');
                this.gf.setParams(data.BookingCode, 'notifiBookingCode');
                this.gf.setParams(data.switchObj, 'notifiSwitchObj');
            }
            else {
                this.gf.setParams(data.BookingCode, 'notifiBookingCode');
                this.navCtrl.navigateForward('/app/tabs/tab3');
            }
        }
        else {
            this.showToast(data.message);
        }
    }
    showActionSheetNoti(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            var iconStr = 'ic_home';
            var subclass = '';
            if (data.NotifyType == 'bookingbegoingcombotransfer') {
                iconStr = 'ic_bus2';
            }
            else if (data.NotifyType == 'blog') {
                iconStr = 'ic_message';
            }
            else if (data.notifyAction == 'bookingbegoingcombofly' || data.notifyAction == 'flychangeinfo') {
                iconStr = 'ic_paper';
            }
            if (data.notifyAction == 'cancel') {
                subclass = 'fixheight-90';
            }
            if (data.notifyAction == 'flychangeinfo' || data.notifyAction == 'blogofmytrip') {
                subclass = 'fixheight-44';
            }
            let actionSheet = yield se.actionSheetCtrl.create({
                cssClass: 'action-sheets-notification ' + iconStr + ' ' + subclass,
                header: data.title,
                animated: true,
                backdropDismiss: true,
                mode: 'ios',
                buttons: [
                    {
                        text: data.message,
                        handler: () => {
                            se.showNotification(data);
                        }
                    }
                ]
            });
            actionSheet.present();
        });
    }
    showToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.alertCtrl.create({
                message: msg,
                position: 'top',
                duration: 5000
            });
            toast.present();
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    presentLoadingData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.myloader = yield this.loadingCtrl.create({
                duration: 3000
            });
            this.myloader.present();
        });
    }
    presentLoadingNavigate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                duration: 250,
            });
            loading.present();
        });
    }
    loaddata() {
        this.page = 1;
        this.pageSize = 5;
        this.pageBlog = 1;
        this.pageBlogTrip = 1;
        this.pageSizeBlog = 5;
        this.totalItem = 200;
        this.isenabled = true;
        this.ischeck = true;
        this.gbmsg = this.searchhotel.gbmsg;
        this.gbitem = this.searchhotel.gbitem;
        this.co = this.searchhotel.flag;
        this.input = this.searchhotel.input;
        this.chuoi = this.searchhotel.chuoi;
        this.recent = this.searchhotel.recent;
        if (!this.searchhotel.chuoi) {
            if (this.searchhotel.star) {
                for (let i = 0; i < this.searchhotel.star.length; i++) {
                    if (i == 0) {
                        if (i == this.searchhotel.star.length - 1) {
                            this.chuoi = "* " + this.searchhotel.star[i];
                        }
                        else {
                            this.chuoi = "* " + this.searchhotel.star[i] + ",";
                        }
                    }
                    else if (i != 0) {
                        if (i != this.searchhotel.star.length - 1) {
                            this.chuoi = this.chuoi + this.searchhotel.star[i] + ",";
                        }
                        else {
                            this.chuoi = this.chuoi + this.searchhotel.star[i];
                        }
                    }
                }
            }
            if (this.searchhotel.minprice) {
                if (this.chuoi) {
                    this.chuoi =
                        this.chuoi +
                            " | " +
                            "đ " +
                            this.searchhotel.minprice.toLocaleString() +
                            " -" +
                            " " +
                            this.searchhotel.maxprice.toLocaleString();
                }
                else {
                    this.chuoi =
                        "đ " +
                            this.searchhotel.minprice.toLocaleString() +
                            " -" +
                            " " +
                            this.searchhotel.maxprice.toLocaleString();
                }
            }
            if (this.searchhotel.review > 0) {
                if (this.chuoi) {
                    this.chuoi =
                        this.chuoi + " | " + "Nhận xét " + this.searchhotel.review + "+";
                }
                else {
                    this.chuoi = "Nhận xét " + this.searchhotel.review + "+";
                }
            }
            else {
                this.chuoi = this.chuoi;
            }
        }
        else {
            this.chuoi = this.searchhotel.chuoi;
        }
        if (this.searchhotel.CheckInDate) {
            if (this.searchhotel.adult) {
                this.adult = this.searchhotel.adult;
            }
            if (this.searchhotel.child != null) {
                this.child = this.searchhotel.child;
            }
            if (this.searchhotel.child == 0) {
                this.child = this.searchhotel.child;
            }
            if (this.searchhotel.roomnumber) {
                this.roomnumber = this.searchhotel.roomnumber;
            }
            if (this.searchhotel.CheckInDate && moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.CheckInDate).diff(moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format('YYYY-MM-DD')), 'days') >= 0) {
                this.cin = this.searchhotel.CheckInDate;
                this.cout = this.searchhotel.CheckOutDate;
                this.datecin = new Date(this.searchhotel.CheckInDate);
                this.datecout = new Date(this.searchhotel.CheckOutDate);
                this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.datecin).format("DD-MM-YYYY");
                this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.datecout).format("DD-MM-YYYY");
                this.searchhotel.datecin = new Date(this.searchhotel.CheckInDate);
                this.searchhotel.datecout = new Date(this.searchhotel.CheckOutDate);
                this.searchhotel.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecin).format("DD-MM-YYYY");
                this.searchhotel.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecout).format("DD-MM-YYYY");
            }
            else {
                this.cin = new Date();
                var rescin = this.cin.setTime(this.cin.getTime() + (1 * 24 * 60 * 60 * 1000));
                var datein = new Date(rescin);
                this.cin = moment__WEBPACK_IMPORTED_MODULE_7__(datein).format("YYYY-MM-DD");
                this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(datein).format("DD-MM-YYYY");
                this.datecin = new Date(rescin);
                this.cout = new Date();
                var res = this.cout.setTime(this.cout.getTime() + (2 * 24 * 60 * 60 * 1000));
                var date = new Date(res);
                this.cout = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("YYYY-MM-DD");
                this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("DD-MM-YYYY");
                this.datecout = new Date(res);
                this.searchhotel.datecin = new Date(this.searchhotel.CheckInDate);
                this.searchhotel.datecout = new Date(this.searchhotel.CheckOutDate);
                this.searchhotel.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecin).format("DD-MM-YYYY");
                this.searchhotel.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecout).format("DD-MM-YYYY");
            }
            this.getCinCoutDayName();
        }
        else {
            this.storage.get('cacheSearchHotelInfo').then((data) => {
                if (data && data.checkInDate) {
                    if (data.adult) {
                        this.adult = data.adult;
                        this.searchhotel.adult = data.adult;
                    }
                    if (data.child != null) {
                        this.child = data.child;
                        this.searchhotel.child = data.child;
                    }
                    if (data.child == 0) {
                        this.child = data.child;
                        this.searchhotel.child = data.child;
                    }
                    if (data.childAge) {
                        this.searchhotel.arrchild = data.childAge;
                    }
                    if (data.roomNumber) {
                        this.roomnumber = data.roomNumber;
                        this.searchhotel.roomnumber = data.roomNumber;
                    }
                    let diffdate = moment__WEBPACK_IMPORTED_MODULE_7__(data.checkInDate).diff(moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format('YYYY-MM-DD')), 'days');
                    if (data.checkInDate && diffdate >= 0) {
                        this.cin = data.checkInDate;
                        this.cout = data.checkOutDate;
                        this.datecin = new Date(data.checkInDate);
                        this.datecout = new Date(data.checkOutDate);
                        this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.datecin).format("DD-MM-YYYY");
                        this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.datecout).format("DD-MM-YYYY");
                        this.searchhotel.CheckInDate = this.cin;
                        this.searchhotel.CheckOutDate = this.cout;
                        this.searchhotel.datecin = new Date(this.searchhotel.CheckInDate);
                        this.searchhotel.datecout = new Date(this.searchhotel.CheckOutDate);
                        this.searchhotel.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecin).format("DD-MM-YYYY");
                        this.searchhotel.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecout).format("DD-MM-YYYY");
                    }
                    else {
                        this.cin = new Date();
                        var rescin = this.cin.setTime(this.cin.getTime() + (1 * 24 * 60 * 60 * 1000));
                        var datein = new Date(rescin);
                        this.cin = moment__WEBPACK_IMPORTED_MODULE_7__(datein).format("YYYY-MM-DD");
                        this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(datein).format("DD-MM-YYYY");
                        this.datecin = new Date(rescin);
                        this.cout = new Date();
                        var res = this.cout.setTime(this.cout.getTime() + (2 * 24 * 60 * 60 * 1000));
                        var date = new Date(res);
                        this.cout = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("YYYY-MM-DD");
                        this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("DD-MM-YYYY");
                        this.datecout = new Date(res);
                        this.searchhotel.CheckInDate = this.cin;
                        this.searchhotel.CheckOutDate = this.cout;
                        this.searchhotel.datecin = new Date(this.searchhotel.CheckInDate);
                        this.searchhotel.datecout = new Date(this.searchhotel.CheckOutDate);
                        this.searchhotel.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecin).format("DD-MM-YYYY");
                        this.searchhotel.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecout).format("DD-MM-YYYY");
                    }
                    this.getCinCoutDayName();
                }
                else if (!this.cin || !this.searchhotel.CheckInDate) {
                    this.cin = new Date();
                    var rescin = this.cin.setTime(this.cin.getTime() + (1 * 24 * 60 * 60 * 1000));
                    var datein = new Date(rescin);
                    this.cin = moment__WEBPACK_IMPORTED_MODULE_7__(datein).format("YYYY-MM-DD");
                    this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(datein).format("DD-MM-YYYY");
                    this.datecin = new Date(rescin);
                    this.cout = new Date();
                    var res = this.cout.setTime(this.cout.getTime() + (2 * 24 * 60 * 60 * 1000));
                    var date = new Date(res);
                    this.cout = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("YYYY-MM-DD");
                    this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("DD-MM-YYYY");
                    this.datecout = new Date(res);
                    this.searchhotel.CheckInDate = this.cin;
                    this.searchhotel.CheckOutDate = this.cout;
                    this.searchhotel.datecin = new Date(this.cin);
                    this.searchhotel.datecout = new Date(this.cout);
                    this.searchhotel.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecin).format("DD-MM-YYYY");
                    this.searchhotel.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecout).format("DD-MM-YYYY");
                    this.getCinCoutDayName();
                }
            });
        }
        this.getCalendarholidays();
    }
    getCinCoutDayName() {
        if (this.searchhotel.datecin) {
            this.searchhotel.cinthu = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecin).format("dddd");
            switch (this.searchhotel.cinthu) {
                case "Monday":
                    this.searchhotel.cinthu = "Thứ 2";
                    break;
                case "Tuesday":
                    this.searchhotel.cinthu = "Thứ 3";
                    break;
                case "Wednesday":
                    this.searchhotel.cinthu = "Thứ 4";
                    break;
                case "Thursday":
                    this.searchhotel.cinthu = "Thứ 5";
                    break;
                case "Friday":
                    this.searchhotel.cinthu = "Thứ 6";
                    break;
                case "Saturday":
                    this.searchhotel.cinthu = "Thứ 7";
                    break;
                default:
                    this.searchhotel.cinthu = "Chủ nhật";
                    break;
            }
        }
        if (this.searchhotel.datecout) {
            this.searchhotel.coutthu = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecout).format("dddd");
            switch (this.searchhotel.coutthu) {
                case "Monday":
                    this.searchhotel.coutthu = "Thứ 2";
                    break;
                case "Tuesday":
                    this.searchhotel.coutthu = "Thứ 3";
                    break;
                case "Wednesday":
                    this.searchhotel.coutthu = "Thứ 4";
                    break;
                case "Thursday":
                    this.searchhotel.coutthu = "Thứ 5";
                    break;
                case "Friday":
                    this.searchhotel.coutthu = "Thứ 6";
                    break;
                case "Saturday":
                    this.searchhotel.coutthu = "Thứ 7";
                    break;
                default:
                    this.searchhotel.coutthu = "Chủ nhật";
                    break;
            }
        }
    }
    getDayName(datecin, datecout) {
        if (!this.cinthu) {
            this.cinthu = moment__WEBPACK_IMPORTED_MODULE_7__(datecin).format('dddd');
            switch (this.cinthu) {
                case "Monday":
                    this.cinthu = "Thứ 2";
                    break;
                case "Tuesday":
                    this.cinthu = "Thứ 3";
                    break;
                case "Wednesday":
                    this.cinthu = "Thứ 4";
                    break;
                case "Thursday":
                    this.cinthu = "Thứ 5";
                    break;
                case "Friday":
                    this.cinthu = "Thứ 6";
                    break;
                case "Saturday":
                    this.cinthu = "Thứ 7";
                    break;
                default:
                    this.cinthu = "Chủ nhật";
                    break;
            }
        }
        if (!this.coutthu) {
            this.coutthu = moment__WEBPACK_IMPORTED_MODULE_7__(datecout).format('dddd');
            switch (this.coutthu) {
                case "Monday":
                    this.coutthu = "Thứ 2";
                    break;
                case "Tuesday":
                    this.coutthu = "Thứ 3";
                    break;
                case "Wednesday":
                    this.coutthu = "Thứ 4";
                    break;
                case "Thursday":
                    this.coutthu = "Thứ 5";
                    break;
                case "Friday":
                    this.coutthu = "Thứ 6";
                    break;
                case "Saturday":
                    this.coutthu = "Thứ 7";
                    break;
                default:
                    this.coutthu = "Chủ nhật";
                    break;
            }
        }
    }
    cin_click() { }
    showcalendarcin() {
        this.showCalCin = !this.showCalCin;
        if (this.showCalCout) {
            this.showCalCout = !this.showCalCout;
        }
    }
    showcalendarcout() {
        if (this.showCalCin) {
            this.showCalCin = !this.showCalCin;
        }
        this.showCalCout = !this.showCalCout;
    }
    getRegions() {
        var se = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/RegionsBanner' + (se.memberid ? '?memberid=' + se.memberid : ''),
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers: {
                apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
                apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "main",
                    func: "getRegions",
                    message: response.statusMessage,
                    content: response.body,
                    param: JSON.stringify(options),
                    type: "warning"
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "main";
                error.func = "getRegions";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(objError, response);
            }
            se.zone.run(() => {
                se.regions = JSON.parse(body);
                se.loadRegions(se.regions);
                se.storage.get('listtopregions').then((data) => {
                    if (data) {
                        se.storage.remove('listtopregions').then((datanew) => {
                            se.storage.set('listtopregions', datanew);
                        });
                    }
                    else {
                        se.storage.set('listtopregions', se.regions);
                    }
                });
            });
        });
    }
    loadRegions(listregions) {
        var se = this;
        se.regions = listregions;
        for (let i = 0; i < se.regions.length; i++) {
            if (se.regions[i].image.indexOf('https') == -1) {
                se.regions[i].image = 'https:' + se.regions[i].image;
            }
            if (i == 0 || i == 4) {
                if (se.regions[i].image.indexOf('755x190') == -1) {
                    se.regions[i].image = se.regions[i].image.replace(".jpg", "-755x190.jpg");
                }
            }
            if (i == 2 || i == 5) {
                if (se.regions[i].image.indexOf('370x395') == -1) {
                    se.regions[i].image = se.regions[i].image.replace(".jpg", "-370x395.jpg");
                }
            }
            var item = { image: se.regions[i].image, name: se.regions[i].title, id: se.regions[i].regionId, regionCode: se.regions[i].code, totalHotel: se.regions[i].total };
            if (!se.checkExistsItemInArray(se.regionsend, item, 2)) {
                se.regionsend.push(item);
            }
        }
        se.slregion = se.regionsend.length;
        se.storage.get('listtopmoods').then((data) => {
            if (data) {
                se.loadMoods(data);
                setTimeout(() => {
                    se.zone.run(() => {
                        se.getmood();
                    });
                }, 30000);
            }
            else {
                se.getmood();
            }
        });
    }
    getRegionsInternational() {
        var se = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/RegionsBanner?isInternation=true' + (se.memberid ? '&memberid=' + se.memberid : ''),
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers: {
                apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
                apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "main",
                    func: "getRegions",
                    message: response.statusMessage,
                    content: response.body,
                    param: JSON.stringify(options),
                    type: "warning"
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "main";
                error.func = "getRegions";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(objError, response);
            }
            se.zone.run(() => {
                se.regionsinter = JSON.parse(body);
                se.storage.get('listtopregioninternational').then((data) => {
                    if (data) {
                        se.storage.remove('listtopregioninternational').then(() => {
                            se.storage.set('listtopregioninternational', se.regionsinter);
                        });
                    }
                    else {
                        se.storage.set('listtopregioninternational', se.regionsinter);
                    }
                });
                se.loadRegionsInternational(se.regionsinter);
            });
        });
    }
    loadRegionsInternational(listregions) {
        var se = this;
        se.regionsinter = listregions;
        for (let i = 0; i < se.regionsinter.length; i++) {
            if (se.regionsinter[i].image.indexOf('https') == -1) {
                se.regionsinter[i].image = 'https:' + se.regionsinter[i].image;
            }
            if (i == 0) {
                if (se.regionsinter[i].image.indexOf('755x190') == -1) {
                    se.regionsinter[i].image = se.regionsinter[i].image.replace(".jpg", "-755x190.jpg");
                }
            }
            var item = { image: se.regionsinter[i].image, name: se.regionsinter[i].title, id: se.regionsinter[i].regionId, regionCode: se.regionsinter[i].code, totalHotel: se.regionsinter[i].total };
            if (!se.checkExistsItemInArray(se.regionintersend, item, 2)) {
                se.regionintersend.push(item);
            }
        }
    }
    getHoteldeal() {
        var se = this;
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/TopDeals?pageIndex=' + se.page + '&pageSize=' + se.totalItem + (se.memberid ? '&memberid=' + se.memberid : ''),
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers: {
                apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
                apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "main",
                    func: "getHoteldeal",
                    message: response.statusMessage,
                    content: response.body,
                    param: JSON.stringify(options),
                    type: "warning"
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "main";
                error.func = "getHoteldeal";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(error, response);
            }
            ;
            se.slideData = JSON.parse(body);
            se.storage.get('listtopdealdefault').then((data) => {
                if (data) {
                    se.storage.remove('listtopdealdefault').then(() => {
                        se.storage.set('listtopdealdefault', se.slideData);
                    });
                }
                else {
                    se.storage.set('listtopdealdefault', se.slideData);
                }
            });
            se.loadTopDeal(se.slideData);
        });
    }
    loadTopDeal(listtopdeal) {
        var se = this;
        se.slideData = listtopdeal;
        se.totalItem = se.slideData.length;
        se.showloadmore = se.slideData.length == se.totalItem ? false : true;
        var chuoi = "";
        se.zone.run(() => {
            for (let i = 0; i < se.pageSize; i++) {
                if (se.slideData && se.slideData[i] && se.slideData[i].images[0]) {
                    var res = se.slideData[i].images[0].url.substring(0, 4);
                    if (res != "http") {
                        se.slideData[i].images[0].url = 'https:' + se.slideData[i].images[0].url;
                    }
                    var minPrice = se.slideData[i].minPrice.toLocaleString();
                    chuoi = "";
                    var name = se.slideData[i].name.split('|');
                    for (let x = 1; x < name.length; x++) {
                        if (x == name.length - 1) {
                            chuoi = chuoi + name[x];
                        }
                        else {
                            chuoi = chuoi + name[x] + "|";
                        }
                    }
                    switch (se.slideData[i].rating) {
                        case 50:
                            se.slideData[i].rating = "./assets/star/ic_star_5.svg";
                            break;
                        case 45:
                            se.slideData[i].rating = "./assets/star/ic_star_4.5.svg";
                            break;
                        case 40:
                            se.slideData[i].rating = "./assets/star/ic_star_4.svg";
                            break;
                        case 35:
                            se.slideData[i].rating = "./assets/star/ic_star_3.5.svg";
                            break;
                        case 30:
                            se.slideData[i].rating = "./assets/star/ic_star_3.svg";
                            break;
                        case 25:
                            se.slideData[i].rating = "./assets/star/ic_star_2.5.svg";
                            break;
                        case 20:
                            se.slideData[i].rating = "./assets/star/ic_star_2.svg";
                            break;
                        case 15:
                            se.slideData[i].rating = "./assets/star/ic_star_1.5.svg";
                            break;
                        case 10:
                            se.slideData[i].rating = "./assets/star/ic_star.svg";
                            break;
                        case 5:
                            se.slideData[i].rating = "./assets/star/ic_star_0.5.svg";
                            break;
                        default:
                            break;
                    }
                    var item = { ischecked: 0, id: se.slideData[i].id, name: name[0], imageUrl: se.slideData[i].images[0].url, regionName: se.slideData[i].regionName, minPrice: minPrice, description: chuoi, rating: se.slideData[i].rating, priceshow: (se.slideData[i].minPrice / 1000 > 1000) ? ((se.slideData[i].minPrice / 1000)
                            .toLocaleString()
                            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
                            .replace(",", ".")) : 0, priceFor: se.slideData[i].priceFor };
                    if (!se.gf.checkExistsItemInArray(se.slideData1, item, 1)) {
                        se.slideData1.push(item);
                    }
                }
            }
            se.activityService.listTopDeal = se.slideData1;
            se.sl = se.slideData1.length;
            se.ischeck = true;
            if (se.myloader) {
                se.myloader.dismiss();
            }
            se.loadCacheRegion();
        });
    }
    loadCacheRegion() {
        var se = this;
        se.storage.get('listtopregions').then(data => {
            if (data) {
                se.loadRegions(data);
                setTimeout(() => {
                    se.zone.run(() => {
                        se.getRegions();
                    });
                }, 30000);
            }
            else {
                se.getRegions();
            }
        });
        se.storage.get('listtopregioninternational').then(data => {
            if (data) {
                se.loadRegionsInternational(data);
                setTimeout(() => {
                    se.getRegionsInternational();
                }, 30000);
            }
            else {
                se.getRegionsInternational();
            }
        });
    }
    checkExistsItemInArray(arrays, item, type) {
        var res = false;
        if (type == 1 || type == 3 || type == 2) {
            res = arrays.some(r => r.id == item.id);
        }
        if (type == 4) {
            res = arrays.some(r => r.Id == item.Id);
        }
        return res;
    }
    getHotelDealPaging() {
        var se = this;
        se.canLoadDeal = (se.slideData1.length == se.slideData.length) ? false : true;
        let start = se.slideData1.length;
        var chuoi = "";
        se.zone.run(() => {
            for (let i = start; i < start + se.pageSize; i++) {
                if (se.slideData[i] && se.slideData[i].images[0]) {
                    var res = se.slideData[i].images[0].url.substring(0, 4);
                    if (res != "http") {
                        se.slideData[i].images[0].url =
                            "https:" + se.slideData[i].images[0].url;
                    }
                    var minPrice = se.slideData[i].minPrice.toLocaleString();
                    chuoi = "";
                    var name = se.slideData[i].name.split("|");
                    for (let x = 1; x < name.length; x++) {
                        if (x == name.length - 1) {
                            chuoi = chuoi + name[x];
                        }
                        else {
                            chuoi = chuoi + name[x] + "|";
                        }
                    }
                    switch (se.slideData[i].rating) {
                        case 50:
                            se.slideData[i].rating = "./assets/star/ic_star_5.svg";
                            break;
                        case 45:
                            se.slideData[i].rating = "./assets/star/ic_star_4.5.svg";
                            break;
                        case 40:
                            se.slideData[i].rating = "./assets/star/ic_star_4.svg";
                            break;
                        case 35:
                            se.slideData[i].rating = "./assets/star/ic_star_3.5.svg";
                            break;
                        case 30:
                            se.slideData[i].rating = "./assets/star/ic_star_3.svg";
                            break;
                        case 25:
                            se.slideData[i].rating = "./assets/star/ic_star_2.5.svg";
                            break;
                        case 20:
                            se.slideData[i].rating = "./assets/star/ic_star_2.svg";
                            break;
                        case 15:
                            se.slideData[i].rating = "./assets/star/ic_star_1.5.svg";
                            break;
                        case 10:
                            se.slideData[i].rating = "./assets/star/ic_star.svg";
                            break;
                        case 5:
                            se.slideData[i].rating = "./assets/star/ic_star_0.5.svg";
                            break;
                        default:
                            break;
                    }
                    var item = {
                        ischecked: 0,
                        id: se.slideData[i].id,
                        name: name[0],
                        imageUrl: se.slideData[i].images[0].url,
                        regionName: se.slideData[i].regionName,
                        minPrice: minPrice,
                        description: chuoi,
                        rating: se.slideData[i].rating,
                        priceshow: (se.slideData[i].minPrice / 1000 > 1000) ? ((se.slideData[i].minPrice / 1000)
                            .toLocaleString()
                            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
                            .replace(",", ".")) : 0, priceFor: se.slideData[i].priceFor
                    };
                    se.slideData1.push(item);
                }
            }
            se.sl = se.slideData1.length;
            se.ischeck = true;
            se.canLoadDeal = true;
            if (se.myloader) {
                se.myloader.dismiss();
            }
        });
    }
    getmood() {
        var se = this;
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/Moods' + (se.memberid ? '?memberid=' + se.memberid : ''),
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers: {
                'postman-token': 'f0589249-bf19-001c-f359-9b33dcf6db86',
                'cache-control': 'no-cache',
                apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
                apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "main",
                    func: "getmood",
                    message: response.statusMessage,
                    content: response.body,
                    param: JSON.stringify(options),
                    type: "warning"
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "main";
                error.func = "getmood";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(error, response);
            }
            ;
            se.zone.run(() => {
                se.slideMood = JSON.parse(body);
                se.storage.get('listtopmoods').then((data) => {
                    if (data) {
                        se.storage.remove('listtopmoods').then((datanew) => {
                            se.storage.set('listtopmoods', datanew);
                        });
                    }
                    else {
                        se.storage.set('listtopmoods', se.slideMood);
                    }
                });
                se.loadMoods(se.slideMood);
            });
        });
    }
    loadMoods(listmoods) {
        var se = this;
        se.slideMood = listmoods;
        for (let i = 0; i < listmoods.length; i++) {
            var res = listmoods[i].avatar.substring(0, 4);
            if (res != "http") {
                listmoods[i].avatar = 'https:' + listmoods[i].avatar;
            }
        }
        se.slmood = se.slideMood.length;
    }
    clickks() {
        this.ischeckks = true;
        this.ischeckvmb = false;
    }
    clickvmb() {
        this.ischeckks = false;
        this.ischeckvmb = true;
    }
    selectcin(selectdate) {
        var sdate = new Date(selectdate);
        this.datecin = new Date(selectdate);
        this.cin = moment__WEBPACK_IMPORTED_MODULE_7__(sdate).format("YYYY-MM-DD");
        this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(sdate).format("DD-MM-YYYY");
        if (selectdate >= this.datecout) {
            var res = sdate.setTime(sdate.getTime() + 1 * 24 * 60 * 60 * 1000);
            var date = new Date(res);
            this.datecout = date;
            this.cout = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("YYYY-MM-DD");
            this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(sdate).format("DD-MM-YYYY");
            this.coutthu = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("dddd");
            switch (this.coutthu) {
                case "Monday":
                    this.coutthu = "Thứ 2";
                    break;
                case "Tuesday":
                    this.coutthu = "Thứ 3";
                    break;
                case "Wednesday":
                    this.coutthu = "Thứ 4";
                    break;
                case "Thursday":
                    this.coutthu = "Thứ 5";
                    break;
                case "Friday":
                    this.coutthu = "Thứ 6";
                    break;
                case "Saturday":
                    this.coutthu = "Thứ 7";
                    break;
                default:
                    this.coutthu = "Chủ nhật";
                    break;
            }
        }
        this.cinthu = moment__WEBPACK_IMPORTED_MODULE_7__(selectdate).format("dddd");
        switch (this.cinthu) {
            case "Monday":
                this.cinthu = "Thứ 2";
                break;
            case "Tuesday":
                this.cinthu = "Thứ 3";
                break;
            case "Wednesday":
                this.cinthu = "Thứ 4";
                break;
            case "Thursday":
                this.cinthu = "Thứ 5";
                break;
            case "Friday":
                this.cinthu = "Thứ 6";
                break;
            case "Saturday":
                this.cinthu = "Thứ 7";
                break;
            default:
                this.cinthu = "Chủ nhật";
                break;
        }
        this.showCalCin = !this.showCalCin;
    }
    selectcout(selectdate) {
        if (selectdate > this.datecin) {
            this.datecout = new Date(selectdate);
            this.cout = moment__WEBPACK_IMPORTED_MODULE_7__(this.datecout).format("YYYY-MM-DD");
            this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.datecout).format("DD-MM-YYYY");
            this.coutthu = moment__WEBPACK_IMPORTED_MODULE_7__(this.datecout).format("dddd");
            switch (this.coutthu) {
                case "Monday":
                    this.coutthu = "Thứ 2";
                    break;
                case "Tuesday":
                    this.coutthu = "Thứ 3";
                    break;
                case "Wednesday":
                    this.coutthu = "Thứ 4";
                    break;
                case "Thursday":
                    this.coutthu = "Thứ 5";
                    break;
                case "Friday":
                    this.coutthu = "Thứ 6";
                    break;
                case "Saturday":
                    this.coutthu = "Thứ 7";
                    break;
                default:
                    this.coutthu = "Chủ nhật";
                    break;
            }
            this.showCalCout = !this.showCalCout;
        }
    }
    selectclickcin() {
        this.cout = new Date(this.cin);
        var res = this.cout.setTime(this.cout.getTime() + 1 * 24 * 60 * 60 * 1000);
        var date = new Date(res);
        this.cout = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("YYYY-MM-DD");
        this.cinthu = moment__WEBPACK_IMPORTED_MODULE_7__(this.cin).format("dddd");
        switch (this.cinthu) {
            case "Monday":
                this.cinthu = "Thứ 2";
                break;
            case "Tuesday":
                this.cinthu = "Thứ 3";
                break;
            case "Wednesday":
                this.cinthu = "Thứ 4";
                break;
            case "Thursday":
                this.cinthu = "Thứ 5";
                break;
            case "Friday":
                this.cinthu = "Thứ 6";
                break;
            case "Saturday":
                this.cinthu = "Thứ 7";
                break;
            default:
                this.cinthu = "Chủ nhật";
                break;
        }
    }
    selectclickcout() {
        var datecin = Date.parse(this.cin);
        var datecout = Date.parse(this.cout);
        this.coutthu = moment__WEBPACK_IMPORTED_MODULE_7__(datecout).format("dddd");
        switch (this.coutthu) {
            case "Monday":
                this.coutthu = "Thứ 2";
                break;
            case "Tuesday":
                this.coutthu = "Thứ 3";
                break;
            case "Wednesday":
                this.coutthu = "Thứ 4";
                break;
            case "Thursday":
                this.coutthu = "Thứ 5";
                break;
            case "Friday":
                this.coutthu = "Thứ 6";
                break;
            case "Saturday":
                this.coutthu = "Thứ 7";
                break;
            default:
                this.coutthu = "Chủ nhật";
                break;
        }
    }
    presentToastwarming(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.alertCtrl.create({
                message: msg,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    openmnu() {
        this.hideStatusBar();
        if (!this.isConnected) {
            this.gf.showWarning("Không có kết nối mạng", "Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng", "Đóng");
            return;
        }
        this.searchhotel.ChildAgeTo = 16;
        this.searchhotel.input = this.input;
        this.searchhotel.flag = this.co;
        this.searchhotel.chuoi = this.chuoi;
        this.gf.setParams(false, "requestcombo");
        this.navCtrl.navigateForward("/occupancy");
    }
    openmnu1() {
        this.hideStatusBar();
        if (!this.isConnected) {
            this.gf.showWarning("Không có kết nối mạng", "Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng", "Đóng");
            return;
        }
        this.searchhotel.input = this.input;
        this.searchhotel.flag = this.co;
        this.searchhotel.chuoi = this.chuoi;
        this.presentModal();
        this.gf.googleAnalytion("mainpage", "Search", "" + this.input + "|" + this.chuoi + "|" + this.cin + "|" + this.cout);
    }
    presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _search_hotel_filter_search_hotel_filter__WEBPACK_IMPORTED_MODULE_14__["SearchHotelFilterPage"],
                componentProps: {
                    aParameter: true
                }
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                this.zone.run(() => {
                    this.loaddata();
                });
            });
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var loader = yield this.loadingCtrl.create({
                message: "",
                duration: 1500
            });
            loader.present();
        });
    }
    presentLoadingnavi() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var loader = yield this.loadingCtrl.create({
                id: '99',
                message: "",
                duration: 10
            });
            loader.present();
        });
    }
    clickedElement(e, openDefault) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var obj = e.currentTarget;
            if (jquery__WEBPACK_IMPORTED_MODULE_17__(obj.parentNode).hasClass("endSelection") ||
                jquery__WEBPACK_IMPORTED_MODULE_17__(obj.parentNode).hasClass("startSelection")) {
                if (this.modalCtrl) {
                    let fday;
                    let tday;
                    var monthenddate;
                    var yearenddate;
                    var monthstartdate;
                    var yearstartdate;
                    var objTextMonthEndDate;
                    var objTextMonthStartDate;
                    this.cofdate = 0;
                    this.cotdate = 0;
                    this.cinthu = "";
                    this.coutthu = "";
                    if (jquery__WEBPACK_IMPORTED_MODULE_17__(obj.parentNode).hasClass('endSelection')) {
                        if (jquery__WEBPACK_IMPORTED_MODULE_17__('.days-btn.lunarcalendar.on-selected > p')[0]) {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_17__('.days-btn.lunarcalendar.on-selected > p')[0].innerText;
                        }
                        else {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_17__('.on-selected')[0].textContent;
                        }
                        if (jquery__WEBPACK_IMPORTED_MODULE_17__('.days.endSelection .days-btn.lunarcalendar > p')[0]) {
                            tday = jquery__WEBPACK_IMPORTED_MODULE_17__('.days.endSelection .days-btn.lunarcalendar > p')[0].innerText;
                        }
                        else {
                            tday = jquery__WEBPACK_IMPORTED_MODULE_17__(obj)[0].textContent;
                        }
                        objTextMonthStartDate = jquery__WEBPACK_IMPORTED_MODULE_17__('.on-selected').closest('.month-box').children()[0].textContent;
                        objTextMonthEndDate = jquery__WEBPACK_IMPORTED_MODULE_17__(obj).closest('.month-box').children()[0].textContent;
                    }
                    else {
                        if (jquery__WEBPACK_IMPORTED_MODULE_17__('.days-btn.lunarcalendar.on-selected > p')[0]) {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_17__('.days-btn.lunarcalendar.on-selected > p')[0].innerText;
                        }
                        else {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_17__(obj)[0].textContent;
                        }
                        if (jquery__WEBPACK_IMPORTED_MODULE_17__('.days.endSelection .days-btn.lunarcalendar > p')[0]) {
                            tday = jquery__WEBPACK_IMPORTED_MODULE_17__('.days.endSelection .days-btn.lunarcalendar > p')[0].innerText;
                        }
                        else {
                            tday = jquery__WEBPACK_IMPORTED_MODULE_17__('.endSelection').children('.days-btn')[0].textContent;
                        }
                        objTextMonthStartDate = jquery__WEBPACK_IMPORTED_MODULE_17__(obj).closest('.month-box').children()[0].textContent;
                        objTextMonthEndDate = jquery__WEBPACK_IMPORTED_MODULE_17__('.endSelection').closest('.month-box').children()[0].textContent;
                    }
                    if (objTextMonthEndDate &&
                        objTextMonthEndDate.length > 0 &&
                        objTextMonthStartDate &&
                        objTextMonthStartDate.length > 0) {
                        monthstartdate = objTextMonthStartDate.split("/")[0];
                        yearstartdate = objTextMonthStartDate.split("/")[1];
                        monthenddate = objTextMonthEndDate.split("/")[0];
                        yearenddate = objTextMonthEndDate.split("/")[1];
                        var fromdate = new Date(yearstartdate, monthstartdate - 1, fday);
                        var todate = new Date(yearenddate, monthenddate - 1, tday);
                        if (fromdate && todate && moment__WEBPACK_IMPORTED_MODULE_7__(todate).diff(fromdate, "days") > 0) {
                            var se = this;
                            setTimeout(() => {
                                se.modalCtrl.dismiss();
                            }, 300);
                            se.zone.run(() => {
                                se.cin = moment__WEBPACK_IMPORTED_MODULE_7__(fromdate).format("YYYY-MM-DD");
                                se.cout = moment__WEBPACK_IMPORTED_MODULE_7__(todate).format("YYYY-MM-DD");
                                se.searchhotel.CheckInDate = moment__WEBPACK_IMPORTED_MODULE_7__(fromdate).format("YYYY-MM-DD");
                                se.searchhotel.CheckOutDate = moment__WEBPACK_IMPORTED_MODULE_7__(todate).format("YYYY-MM-DD");
                                se.datecin = new Date(se.searchhotel.CheckInDate);
                                se.datecout = new Date(se.searchhotel.CheckOutDate);
                                se.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(se.datecin).format("DD-MM-YYYY");
                                se.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(se.datecout).format("DD-MM-YYYY");
                                se.searchhotel.datecin = new Date(se.searchhotel.CheckInDate);
                                se.searchhotel.datecout = new Date(se.searchhotel.CheckOutDate);
                                se.searchhotel.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(se.searchhotel.datecin).format("DD-MM-YYYY");
                                se.searchhotel.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(se.searchhotel.datecout).format("DD-MM-YYYY");
                                this.bindlunar();
                            });
                            se.storage.set('hasChangeDate', true);
                            se.gf.setCacheSearchHotelInfo({ checkInDate: se.searchhotel.CheckInDate, checkOutDate: se.searchhotel.CheckOutDate, adult: se.searchhotel.adult, child: se.searchhotel.child, childAge: se.searchhotel.arrchild, roomNumber: se.searchhotel.roomnumber });
                        }
                    }
                }
            }
        });
    }
    openPickupCalendar(openDefault) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.hideStatusBar();
            if (!this.allowclickcalendar) {
                return;
            }
            this.allowclickcalendar = false;
            let fromdate = new Date(this.searchhotel.CheckInDate ? this.searchhotel.CheckInDate : this.cin);
            let todate = new Date(this.searchhotel.CheckOutDate ? this.searchhotel.CheckOutDate : this.cout);
            let _daysConfig = [];
            for (let j = 0; j < this.valueGlobal.listlunar.length; j++) {
                _daysConfig.push({
                    date: this.valueGlobal.listlunar[j].date,
                    subTitle: this.valueGlobal.listlunar[j].name,
                    cssClass: 'lunarcalendar'
                });
            }
            const options = {
                pickMode: "range",
                title: "Chọn ngày",
                monthFormat: "MM / YYYY",
                weekdays: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
                closeLabel: "Thoát",
                doneLabel: "",
                step: 0,
                defaultScrollTo: fromdate,
                defaultDateRange: { from: fromdate, to: todate },
                daysConfig: _daysConfig
            };
            this.myCalendar = yield this.modalCtrl.create({
                component: ion2_calendar__WEBPACK_IMPORTED_MODULE_12__["CalendarModal"],
                animated: true,
                componentProps: { options }
            });
            this.myCalendar.present().then(() => {
                se.allowclickcalendar = true;
                jquery__WEBPACK_IMPORTED_MODULE_17__(".days-btn").click(e => this.clickedElement(e, openDefault));
            });
            var se = this;
            const event = yield this.myCalendar.onDidDismiss();
            if (event) {
                se.allowclickcalendar = true;
            }
            const date = event.data;
            if (event.data) {
                const from = date.from;
                const to = date.to;
                se.cin = moment__WEBPACK_IMPORTED_MODULE_7__(from.dateObj).format("YYYY-MM-DD");
                se.cout = moment__WEBPACK_IMPORTED_MODULE_7__(to.dateObj).format("YYYY-MM-DD");
                se.zone.run(() => {
                    se.searchhotel.CheckInDate = se.cin;
                    se.searchhotel.CheckOutDate = se.cout;
                    se.datecin = new Date(se.cin);
                    se.datecout = new Date(se.cout);
                    se.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(se.datecin).format("DD-MM-YYYY");
                    se.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(se.datecout).format("DD-MM-YYYY");
                    se.searchhotel.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(se.datecin).format("DD-MM-YYYY");
                    se.searchhotel.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(se.datecout).format("DD-MM-YYYY");
                    se.getDayName(se.datecin, se.datecout);
                });
                se.gf.setCacheSearchHotelInfo({ checkInDate: se.searchhotel.CheckInDate, checkOutDate: se.searchhotel.CheckOutDate, adult: se.searchhotel.adult, child: se.searchhotel.child, childAge: se.searchhotel.arrchild, roomNumber: se.searchhotel.roomnumber });
            }
            if (se.searchhotel.CheckInDate && se.searchhotel.CheckOutDate) {
                se.zone.run(() => {
                    se.searchhotel.datecin = new Date(se.searchhotel.CheckInDate);
                    se.searchhotel.datecout = new Date(se.searchhotel.CheckOutDate);
                    se.searchhotel.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(se.searchhotel.datecin).format("DD-MM-YYYY");
                    se.searchhotel.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(se.searchhotel.datecout).format("DD-MM-YYYY");
                    se.searchhotel.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(se.searchhotel.datecin).format("DD-MM-YYYY");
                    se.searchhotel.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(se.searchhotel.datecout).format("DD-MM-YYYY");
                    se.getCinCoutDayName();
                });
                se.gf.setCacheSearchHotelInfo({ checkInDate: se.searchhotel.CheckInDate, checkOutDate: se.searchhotel.CheckOutDate, adult: se.searchhotel.adult, child: se.searchhotel.child, childAge: se.searchhotel.arrchild, roomNumber: se.searchhotel.roomnumber });
            }
        });
    }
    getNewsBlog(value) {
        var se = this;
        se.canLoadBlog = false;
        var options = {
            method: "GET",
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlBlog +
                "/GetNewsBlog?pageIndex=" +
                se.pageBlog +
                "&pageSize=" +
                se.pageSizeBlog +
                (se.memberid ? "&memberid=" + se.memberid : ""),
            timeout: 10000,
            maxAttempts: 5,
            retryDelay: 2000,
            headers: {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "main",
                    func: "getNewsBlog",
                    message: response.statusMessage,
                    content: response.body,
                    param: JSON.stringify(options),
                    type: "warning"
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "main";
                error.func = "getNewsBlog";
                (error.param = JSON.stringify(options)), _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(error, response);
            }
            se.zone.run(() => {
                var listBlogtemp = JSON.parse(body);
                se.listBlog = [];
                se.showloadmoreblog = listBlogtemp.length == 0 ? false : true;
                for (let i = 0; i < listBlogtemp.length; i++) {
                    listBlogtemp[i].Date = moment__WEBPACK_IMPORTED_MODULE_7__(listBlogtemp[i].Date).format("DD/MM/YYYY");
                }
                if (se.arrbloglike && se.arrbloglike.length > 0) {
                    var itemblog;
                    for (let i = 0; i < listBlogtemp.length; i++) {
                        itemblog = {
                            Avatar: listBlogtemp[i].Avatar,
                            Date: listBlogtemp[i].Date,
                            Id: listBlogtemp[i].id,
                            Title: listBlogtemp[i].Title,
                            Url: listBlogtemp[i].Url,
                            Like: false
                        };
                        for (let j = 0; j < se.arrbloglike.length; j++) {
                            if (se.arrbloglike[j].id == listBlogtemp[i].id) {
                                itemblog = {
                                    Avatar: listBlogtemp[i].Avatar,
                                    Date: listBlogtemp[i].Date,
                                    Id: listBlogtemp[i].id,
                                    Title: listBlogtemp[i].Title,
                                    Url: listBlogtemp[i].Url,
                                    Like: true
                                };
                                break;
                            }
                        }
                        se.listBlog.push(itemblog);
                    }
                }
                else {
                    for (let i = 0; i < listBlogtemp.length; i++) {
                        itemblog = {
                            Avatar: listBlogtemp[i].Avatar,
                            Date: listBlogtemp[i].Date,
                            Id: listBlogtemp[i].id,
                            Title: listBlogtemp[i].Title,
                            Url: listBlogtemp[i].Url,
                            Like: false
                        };
                        se.listBlog.push(itemblog);
                    }
                }
                if (!se.checkExistsItemInArray(se.blog, listBlogtemp[0], 4)) {
                    se.blog.push(...se.listBlog);
                    se.canLoadBlog = true;
                }
                else {
                    if (value == 1) {
                        for (let i = 0; i < se.blog.length; i++) {
                            se.blog[i].Like = false;
                        }
                    }
                    se.showloadmoreblog = false;
                }
                se.storage.set("listblogdefault", se.blog);
                if (value == 0) {
                    se.getblogtrips();
                }
                se.storage.get("auth_token").then(auth_token => {
                    if (!auth_token) {
                        se.bindItemunLike();
                    }
                });
            });
        });
    }
    clickitemblog(item) {
        if (!this.isConnected) {
            this.gf.showWarning("Không có kết nối mạng", "Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng", "Đóng");
            return;
        }
        this.valueGlobal.urlblog = item.Url;
        this.valueGlobal.backValue = "blog";
        this.valueGlobal.logingoback = "/blog/" + item.Id;
        this.navCtrl.navigateForward("/blog/" + item.Id);
        this.gf.googleAnalytion("main", "Search", "blog");
        this.hideStatusBar();
    }
    clickitemblogmain() {
        if (!this.isConnected) {
            this.gf.showWarning("Không có kết nối mạng", "Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng", "Đóng");
            return;
        }
        var url = "https://www.ivivu.com/blog";
        this.openWebpage(url);
        this.gf.googleAnalytion("main", "Search", "blog");
        this.hideStatusBar();
    }
    openWebpage(url) {
        this.safariViewController.isAvailable().then((available) => {
            if (available) {
                this.safariViewController
                    .show({
                    url: url,
                    hidden: false,
                    animated: true,
                    transition: "curl",
                    enterReaderModeIfAvailable: true,
                    tintColor: "#ff0000"
                })
                    .subscribe((result) => {
                    if (result.event === "opened")
                        console.log("Opened");
                    else if (result.event === "loaded")
                        console.log("Loaded");
                    else if (result.event === "closed")
                        console.log("Closed");
                }, (error) => console.error(error));
            }
            else {
            }
        });
    }
    getItems(ev) {
        if (this.input) {
            this.ischeckclose = true;
            var se = this;
            const val = ev.target.value;
            var options = {
                method: "GET",
                url: "https://www.ivivu.com/GListSuggestion",
                timeout: 10000,
                maxAttempts: 5,
                retryDelay: 2000,
                qs: { key: val },
                headers: {}
            };
            requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                if (response.statusCode != 200) {
                    var objError = {
                        page: "main",
                        func: "getItems",
                        message: response.statusMessage,
                        content: response.body,
                        param: JSON.stringify(options),
                        type: "warning"
                    };
                    _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(objError, response);
                }
                if (error) {
                    error.page = "main";
                    error.func = "getItems";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(error, response);
                }
                se.zone.run(() => {
                    se.items = JSON.parse(body);
                    if (val && val.trim() != "") {
                        se.items;
                        se.ischecklist = true;
                    }
                    else {
                        se.items = [];
                        se.ischecklist = false;
                    }
                });
            });
        }
        else {
            this.ischeckclose = false;
            this.ischecklist = false;
        }
        this.gf.googleAnalytion("main", "searchregion", "");
    }
    change() {
        if (!this.isConnected) {
            this.gf.showWarning("Không có kết nối mạng", "Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng", "Đóng");
            return;
        }
        this.storage.get("listregion").then((data) => {
            if (!data) {
                this.presentLoadingnavi();
            }
        });
        if (this.input) {
            this.ischeckclose = true;
        }
        this.recent = this.searchhotel.recent;
        this.navCtrl.navigateForward("/searchhotel");
    }
    clearClonePage(pagename) {
        let elements = [];
        elements = Array.from(document.querySelectorAll(pagename));
        if (elements != null && elements.length > 0) {
            elements.forEach(el => {
                if (el && el != null) {
                    el.remove();
                }
            });
        }
    }
    itemclick(item) {
        if (!this.isConnected) {
            this.gf.showWarning("Không có kết nối mạng", "Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng", "Đóng");
            return;
        }
        this.gbitem = item;
        if (item.HotelName) {
            this.input = item.HotelName;
        }
        else {
            this.input = item.RegionName;
        }
        this.ischeckclose = false;
        this.ischecksearch = false;
        this.co = 0;
        this.gf.googleAnalytion("main", "Search", "" + this.input + "|" + this.cin + "|" + this.cout);
    }
    next1(msg) {
        if (!this.isConnected) {
            this.gf.showWarning("Không có kết nối mạng", "Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng", "Đóng");
            return;
        }
        this.gbmsg = msg;
        this.ischeckclose = false;
        this.searchhotel.gbmsg = msg;
        this.ischecksearch = false;
        if (msg.regionName) {
            this.input = msg.regionName;
        }
        else {
            this.input = msg.HotelName;
        }
        this.isenabled = false;
        this.co = 2;
        this.gf.googleAnalytion("main", "Search", "" + this.input + "|" + this.cin + "|" + this.cout);
    }
    close() {
        this.ischecksearch = false;
        if (!this.input) {
            this.isenabled = true;
        }
    }
    next(msg, i) {
        if (!this.isConnected) {
            this.gf.showWarning("Không có kết nối mạng", "Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng", "Đóng");
            return;
        }
        this.ischeckclose = false;
        this.gbmsg = msg;
        this.searchhotel.gbmsg = msg;
        this.ischecksearch = false;
        this.index = i;
        this.input = msg.regionName;
        this.isenabled = false;
        this.co = 1;
        this.gf.googleAnalytion("main", "Search", "" + this.input + "|" + this.cin + "|" + this.cout);
    }
    getdata() {
        var se = this;
        var options = {
            method: "GET",
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile +
                "/mobile/OliviaApis/Regions" +
                (se.memberid ? "?memberid=" + se.memberid : ""),
            headers: {
                apisecret: "2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU",
                apikey: "0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U"
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "main",
                    func: "getdata",
                    message: response.statusMessage,
                    content: response.body,
                    param: JSON.stringify(options),
                    type: "warning"
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "main";
                error.func = "getdata";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(error, response);
            }
            se.json = JSON.parse(body);
            se.getRegions();
        });
    }
    search() {
        if (!this.isConnected) {
            this.gf.showWarning("Không có kết nối mạng", "Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng", "Đóng");
            return;
        }
        this.searchhotel.backPage = "";
        if (this.input) {
            this.searchhotel.chuoi = this.chuoi;
            this.searchhotel.child = this.child;
            this.searchhotel.adult = this.adult;
            this.searchhotel.input = this.input;
            var se = this;
            if (this.co == 1) {
                this.authService.region = this.gbmsg.regionName;
                this.authService.regionid = this.gbmsg.regionId;
                this.authService.regioncode = this.gbmsg.regionCode;
                if (this.recent) {
                    var cocheck = 0;
                    for (let i = 0; i < this.recent.length; i++) {
                        if (this.recent[i].regionId == this.gbmsg.regionId) {
                            cocheck = 1;
                            break;
                        }
                    }
                    if (cocheck == 0) {
                        var item1 = {
                            type: "2",
                            hotelId: "",
                            hotelName: "",
                            regionId: this.gbmsg.regionId,
                            regionCode: this.gbmsg.regionCode,
                            regionName: this.gbmsg.regionName,
                            flag: "1",
                            totalHotels: this.gbmsg.totalHotels
                        };
                        se.searchhotel.recent = [];
                        if (this.recent.length > 1) {
                            se.searchhotel.recent.push(this.recent[1]);
                        }
                        else {
                            se.searchhotel.recent.push(this.recent[0]);
                        }
                        se.searchhotel.recent.push(item1);
                        se.isrefreshlist = "true";
                    }
                }
                else {
                    var item1 = {
                        type: "2",
                        hotelId: "",
                        hotelName: "",
                        regionId: this.gbmsg.regionId,
                        regionCode: this.gbmsg.regionCode,
                        regionName: this.gbmsg.regionName,
                        flag: "1",
                        totalHotels: this.gbmsg.totalHotels
                    };
                    se.searchhotel.recent = [];
                    se.searchhotel.recent.push(item1);
                }
                this.valueGlobal.logingoback = '/app/tabs/hotellist/true';
                var item = {};
                item.adult = se.searchhotel.adult;
                item.child = se.searchhotel.child;
                item.arrchild = se.searchhotel.arrchild;
                if (this.gbmsg.imageUrl) {
                    item.imageUrl = (this.gbmsg.imageUrl.toLocaleString().trim().indexOf("http") == -1) ? 'https:' + this.gbmsg.imageUrl : this.gbmsg.imageUrl;
                }
                else {
                    item.imageUrl = '';
                }
                var checkInDate = new Date(this.searchhotel.CheckInDate);
                var checkOutDate = new Date(this.searchhotel.CheckOutDate);
                item.CheckInDate = this.searchhotel.CheckInDate;
                item.CheckOutDate = this.searchhotel.CheckOutDate;
                item.checkInDate = moment__WEBPACK_IMPORTED_MODULE_7__(checkInDate).format('DD') + ' ' + 'tháng' + ' ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkInDate).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkInDate).format('YYYY');
                item.checkOutDate = moment__WEBPACK_IMPORTED_MODULE_7__(checkOutDate).format('DD') + ' ' + 'tháng' + ' ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkOutDate).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkOutDate).format('YYYY');
                item.id = this.gbmsg.regionId;
                item.name = this.gbmsg.regionName;
                item.isType = 1;
                this.gf.setCacheSearch(item, 0);
                this.navCtrl.navigateForward('/hotellist/' + se.isrefreshlist);
                this.gf.googleAnalytion("main", "Search", this.authService.regioncode +
                    "|" +
                    this.input +
                    "|" +
                    this.cin +
                    "|" +
                    this.cout);
            }
            else if (this.co == 0) {
                if (this.gbitem.Type == 1) {
                    var id1 = { id: this.gbitem.HotelId };
                    if (this.recent) {
                        var cocheck = 0;
                        for (let i = 0; i < this.recent.length; i++) {
                            var temp = this.recent[i].hotelId;
                            if (temp == id1.id) {
                                cocheck = 1;
                                break;
                            }
                        }
                        if (cocheck == 0) {
                            var item2 = {
                                type: "1",
                                hotelId: this.gbitem.HotelId,
                                hotelName: this.gbitem.HotelName,
                                regionId: "",
                                regionCode: "",
                                regionName: "",
                                flag: "0",
                                totalHotels: ""
                            };
                            se.searchhotel.recent = [];
                            if (this.recent.length > 1) {
                                se.searchhotel.recent.push(this.recent[1]);
                            }
                            else {
                                se.searchhotel.recent.push(this.recent[0]);
                            }
                            this.searchhotel.recent.push(item2);
                            se.isrefreshlist = "true";
                        }
                    }
                    else {
                        var item2 = {
                            type: "1",
                            hotelId: this.gbitem.HotelId,
                            hotelName: this.gbitem.HotelName,
                            regionId: "",
                            regionCode: "",
                            regionName: "",
                            flag: "0",
                            totalHotels: ""
                        };
                        se.searchhotel.recent = [];
                        this.searchhotel.recent.push(item2);
                    }
                    this.searchhotel.rootPage = "mainpage";
                    this.valueGlobal.logingoback = "/hoteldetail/" + se.gbitem.HotelId;
                    var item = {};
                    item.adult = this.searchhotel.adult;
                    item.child = this.searchhotel.child;
                    item.arrchild = this.searchhotel.arrchild;
                    item.roomnumber = this.searchhotel.roomnumber;
                    item.imageUrl = '';
                    var checkInDate = new Date(this.searchhotel.CheckInDate);
                    var checkOutDate = new Date(this.searchhotel.CheckOutDate);
                    item.CheckInDate = this.searchhotel.CheckInDate;
                    item.CheckOutDate = this.searchhotel.CheckOutDate;
                    item.checkInDate = moment__WEBPACK_IMPORTED_MODULE_7__(checkInDate).format('DD') + ' ' + 'tháng' + ' ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkInDate).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkInDate).format('YYYY');
                    item.checkOutDate = moment__WEBPACK_IMPORTED_MODULE_7__(checkOutDate).format('DD') + ' ' + 'tháng' + ' ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkOutDate).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkOutDate).format('YYYY');
                    item.id = this.gbitem.HotelId;
                    item.name = this.gbitem.HotelName;
                    item.isType = 0;
                    this.gf.setCacheSearch(item, 0);
                    se.navCtrl.navigateForward('/hoteldetail/' + se.gbitem.HotelId);
                    this.gf.googleAnalytion("main", "Search", this.input +
                        "|" +
                        this.cin +
                        "|" +
                        this.cout +
                        "|" +
                        this.gbitem.HotelId +
                        "|" +
                        this.gbitem.HotelName);
                }
                else {
                    if (this.recent) {
                        var cocheck = 0;
                        for (let i = 0; i < this.recent.length; i++) {
                            if (this.recent[i].regionId == this.gbitem.regionId) {
                                cocheck = 1;
                                break;
                            }
                        }
                        if (cocheck == 0) {
                            var item3 = {
                                type: "2",
                                hotelId: "",
                                hotelName: "",
                                regionId: this.gbitem.RegionId,
                                regionCode: this.gbitem.RegionCode,
                                regionName: this.gbitem.RegionName,
                                flag: "0",
                                totalHotels: this.gbitem.totalHotels
                            };
                            se.searchhotel.recent = [];
                            if (this.recent.length > 1) {
                                se.searchhotel.recent.push(this.recent[1]);
                            }
                            else {
                                se.searchhotel.recent.push(this.recent[0]);
                            }
                            this.searchhotel.recent.push(item3);
                            se.isrefreshlist = "true";
                        }
                    }
                    else {
                        var item3 = {
                            type: "2",
                            hotelId: "",
                            hotelName: "",
                            regionId: this.gbitem.RegionId,
                            regionCode: this.gbitem.RegionCode,
                            regionName: this.gbitem.RegionName,
                            flag: "0",
                            totalHotels: this.gbitem.totalHotels
                        };
                        se.searchhotel.recent = [];
                        this.searchhotel.recent.push(item3);
                    }
                    this.authService.region = this.gbitem.RegionName;
                    this.authService.regionid = this.gbitem.RegionId;
                    this.authService.regioncode = this.gbitem.RegionCode;
                    var obj = {
                        regionName: this.authService.region,
                        regionId: this.authService.regionid,
                        regionCode: this.authService.regioncode
                    };
                    this.searchhotel.gbmsg = obj;
                    this.valueGlobal.logingoback = "/hotellist/false";
                    var item = {};
                    item.adult = this.searchhotel.adult;
                    item.child = this.searchhotel.child;
                    item.arrchild = this.searchhotel.arrchild;
                    item.roomnumber = this.searchhotel.roomnumber;
                    if (this.gbitem.imageUrl) {
                        item.imageUrl = (this.gbitem.imageUrl.toLocaleString().trim().indexOf("http") == -1) ? 'https:' + this.gbitem.imageUrl : this.gbitem.imageUrl;
                    }
                    else {
                        item.imageUrl = '';
                    }
                    var checkInDate = new Date(this.searchhotel.CheckInDate);
                    var checkOutDate = new Date(this.searchhotel.CheckOutDate);
                    item.CheckInDate = this.searchhotel.CheckInDate;
                    item.CheckOutDate = this.searchhotel.CheckOutDate;
                    item.checkInDate = moment__WEBPACK_IMPORTED_MODULE_7__(checkInDate).format('DD') + ' ' + 'tháng' + ' ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkInDate).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkInDate).format('YYYY');
                    item.checkOutDate = moment__WEBPACK_IMPORTED_MODULE_7__(checkOutDate).format('DD') + ' ' + 'tháng' + ' ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkOutDate).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkOutDate).format('YYYY');
                    item.id = this.gbitem.RegionId;
                    item.name = this.gbitem.RegionName;
                    item.isType = 1;
                    this.gf.setCacheSearch(item, 0);
                    this.navCtrl.navigateForward('/hotellist/' + se.isrefreshlist);
                    this.gf.googleAnalytion("main", "Search", this.authService.regioncode +
                        "|" +
                        this.input +
                        "|" +
                        this.cin +
                        "|" +
                        this.cout +
                        "|" +
                        this.gbitem.RegionCode);
                }
            }
            else if (this.co == 2) {
                if (this.gbmsg.Type == 1) {
                    var id1 = { id: this.gbmsg.hotelId };
                    this.searchhotel.rootPage = "mainpage";
                    this.searchhotel.gbitem.hotelId = this.gbmsg.hotelId;
                    this.valueGlobal.logingoback = "/hoteldetail/" + id1;
                    var item = {};
                    item.adult = this.searchhotel.adult;
                    item.child = this.searchhotel.child;
                    item.arrchild = this.searchhotel.arrchild;
                    item.roomnumber = this.searchhotel.roomnumber;
                    item.imageUrl = '';
                    var checkInDate = new Date(this.searchhotel.CheckInDate);
                    var checkOutDate = new Date(this.searchhotel.CheckOutDate);
                    item.CheckInDate = this.searchhotel.CheckInDate;
                    item.CheckOutDate = this.searchhotel.CheckOutDate;
                    item.checkInDate = moment__WEBPACK_IMPORTED_MODULE_7__(checkInDate).format('DD') + ' ' + 'tháng' + ' ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkInDate).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkInDate).format('YYYY');
                    item.checkOutDate = moment__WEBPACK_IMPORTED_MODULE_7__(checkOutDate).format('DD') + ' ' + 'tháng' + ' ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkOutDate).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkOutDate).format('YYYY');
                    item.id = this.gbmsg.HotelId;
                    item.name = this.gbmsg.HotelName;
                    item.isType = 0;
                    this.gf.setCacheSearch(item, 0);
                    this.navCtrl.navigateForward("/hoteldetail/" + id1);
                    this.gf.googleAnalytion("main", "Search", this.input +
                        "|" +
                        this.cin +
                        "|" +
                        this.cout +
                        "|" +
                        this.gbitem.hotelId);
                }
                else {
                    this.authService.region = this.gbmsg.regionName;
                    this.authService.regionid = this.gbmsg.regionId;
                    this.authService.regioncode = this.gbmsg.regionCode;
                    var cocheck = 0;
                    for (let i = 0; i < this.recent.length; i++) {
                        if (this.recent[i].regionId == this.gbmsg.regionId) {
                            cocheck = 1;
                            break;
                        }
                    }
                    if (cocheck == 0) {
                        se.isrefreshlist = "true";
                    }
                    var item = {};
                    item.adult = this.searchhotel.adult;
                    item.child = this.searchhotel.child;
                    item.arrchild = this.searchhotel.arrchild;
                    item.roomnumber = this.searchhotel.roomnumber;
                    if (this.gbmsg.imageUrl) {
                        item.imageUrl = (this.gbmsg.imageUrl.toLocaleString().trim().indexOf("http") == -1) ? 'https:' + this.gbmsg.imageUrl : this.gbmsg.imageUrl;
                    }
                    else {
                        item.imageUrl = '';
                    }
                    var checkInDate = new Date(this.searchhotel.CheckInDate);
                    var checkOutDate = new Date(this.searchhotel.CheckOutDate);
                    item.CheckInDate = this.searchhotel.CheckInDate;
                    item.CheckOutDate = this.searchhotel.CheckOutDate;
                    item.checkInDate = moment__WEBPACK_IMPORTED_MODULE_7__(checkInDate).format('DD') + ' ' + 'tháng' + ' ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkInDate).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkInDate).format('YYYY');
                    item.checkOutDate = moment__WEBPACK_IMPORTED_MODULE_7__(checkOutDate).format('DD') + ' ' + 'tháng' + ' ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkOutDate).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkOutDate).format('YYYY');
                    item.id = this.gbmsg.regionId;
                    item.name = this.gbmsg.regionName;
                    item.isType = 1;
                    this.gf.setCacheSearch(item, 0);
                    this.navCtrl.navigateForward("/hotellist/" + se.isrefreshlist);
                    this.gf.googleAnalytion("main", "Search", this.authService.regioncode +
                        "|" +
                        this.input +
                        "|" +
                        this.cin +
                        "|" +
                        this.cout +
                        "|" +
                        this.gbmsg.regionCode);
                }
            }
            else if (this.input && !this.co) {
                this.input = "";
                this.navCtrl.navigateForward("/searchhotel");
            }
        }
        else {
            this.navCtrl.navigateForward("/searchhotel");
            this.gf.googleAnalytion("main", "Search", "");
        }
    }
    deletetext() {
        this.input = "";
        this.ischeckclose = false;
        this.ischecklist = false;
    }
    ionViewDidLoad() {
        let elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map(key => {
                elements[key].style.display = "flex";
            });
        }
    }
    hideStatusBar() {
        var se = this;
        let el = document.getElementsByClassName('div-statusbar-float');
        el[0].classList.remove('float-statusbar-enabled');
        el[0].classList.add('float-statusbar-disabled');
    }
    ionViewWillEnter() {
        if (this.networkProvider.isOnline()) {
            this.isConnected = true;
        }
        else {
            this.isConnected = false;
            this.gf.showWarning("Không có kết nối mạng", "Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng", "Đóng");
            return;
        }
        this.valueGlobal.logingoback = '/app/tabs/tab1';
        if (this.searchhotel.backPage == 'foodpaymentdonepage' || this.searchhotel.backPage == 'foodplaceotherpage'
            || this.searchhotel.backPage == 'foodpaymentchoosebank' || this.searchhotel.backPage == 'foodpaymentselect' || this.searchhotel.backPage == 'foodinstallmentdone' || this.valueGlobal.backValue == "homefood") {
        }
        else if (this.valueGlobal.backValue == "homeflight") {
            this.hideStatusBar();
            if (this.foodService.firstload == 0) {
                setTimeout(() => {
                    this.activeTab = 1;
                    this.setActiveTab(1);
                    this.foodService.firstload += 1;
                    this.valueGlobal.backValue = "";
                }, 700);
            }
            else {
                setTimeout(() => {
                    this.activeTab = 1;
                    this.setActiveTab(1);
                    this.valueGlobal.backValue = "";
                }, 100);
            }
        }
        else if (this.valueGlobal.backValue == "flightmytrip") {
            if (this.foodService.firstload == 0) {
                setTimeout(() => {
                    this.activeTab = 1;
                    this.setActiveTab(1);
                    this.foodService.firstload += 1;
                    this.flightService.itemMenuFlightClick.emit(2);
                    jquery__WEBPACK_IMPORTED_MODULE_17__(".div-wraper-slide").removeClass("cls-visible").addClass("cls-disabled");
                }, 700);
            }
            else {
                setTimeout(() => {
                    this.activeTab = 1;
                    this.setActiveTab(1);
                    this.flightService.itemMenuFlightClick.emit(2);
                    jquery__WEBPACK_IMPORTED_MODULE_17__(".div-wraper-slide").removeClass("cls-visible").addClass("cls-disabled");
                }, 100);
            }
        }
        else {
            this.gf.clearActivatedTab();
            if (document.querySelector(".tabbar")) {
                document.querySelector(".tabbar")['style'].display = 'flex';
            }
            this.setActiveTab(0);
        }
        if (this.valueGlobal.backValue == "foodbill" || this.valueGlobal.backValue == "foodaccount") {
            if (!this.foodService.firstload) {
                setTimeout(() => {
                    this.activeTab = 1;
                    this.setActiveTab(1);
                    this.foodService.firstload += 1;
                    if (this.valueGlobal.backValue == "foodaccount") {
                        this.foodService.menuFooterClick.emit(4);
                        this.valueGlobal.backValue = "";
                    }
                }, 700);
            }
            else {
                setTimeout(() => {
                    this.activeTab = 1;
                    this.setActiveTab(1);
                    if (this.valueGlobal.backValue == "foodaccount") {
                        this.foodService.menuFooterClick.emit(4);
                        this.valueGlobal.backValue = "";
                    }
                }, 100);
            }
        }
        jquery__WEBPACK_IMPORTED_MODULE_17__(".homefood-header").removeClass("cls-visible").addClass("cls-disabled");
        this.searchhotel.backPage = "";
    }
    itemclickht(item) {
        this.hideStatusBar();
        this.searchhotel.child = this.child;
        this.searchhotel.adult = this.adult;
        this.searchhotel.roomnumber = this.roomnumber;
        this.searchhotel.hotelID = item.id;
        this.searchhotel.rootPage = "topdeal";
        var itemRecent = {};
        itemRecent.adult = this.searchhotel.adult;
        itemRecent.child = this.searchhotel.child;
        itemRecent.arrchild = this.searchhotel.arrchild;
        itemRecent.roomnumber = this.searchhotel.roomnumber;
        if (item.imageUrl) {
            itemRecent.imageUrl = (item.imageUrl.toLocaleString().trim().indexOf("http") == -1) ? 'https:' + item.imageUrl : item.imageUrl;
        }
        var checkInDate = new Date(this.searchhotel.CheckInDate);
        var checkOutDate = new Date(this.searchhotel.CheckOutDate);
        itemRecent.CheckInDate = this.searchhotel.CheckInDate;
        itemRecent.CheckOutDate = this.searchhotel.CheckOutDate;
        itemRecent.checkInDate = moment__WEBPACK_IMPORTED_MODULE_7__(checkInDate).format('DD') + ' ' + 'tháng' + ' ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkInDate).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkInDate).format('YYYY');
        itemRecent.checkOutDate = moment__WEBPACK_IMPORTED_MODULE_7__(checkOutDate).format('DD') + ' ' + 'tháng' + ' ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkOutDate).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkOutDate).format('YYYY');
        itemRecent.id = item.id;
        itemRecent.name = item.name;
        itemRecent.isType = 0;
        this.gf.setCacheSearch(itemRecent, 0);
        this.valueGlobal.logingoback = "/hoteldetail/" + item.id;
        setTimeout(() => {
            this.navCtrl.navigateForward('/hoteldetail/' + item.id);
        }, 10);
    }
    itemSelectedmood(item) {
        this.valueGlobal.logingoback = '/hotellistmood/' + item.id + '/' + item.title;
        var id1 = { id: item.id, title: item.title };
        this.searchhotel.child = this.child;
        this.searchhotel.adult = this.adult;
        this.searchhotel.roomnumber = this.roomnumber;
        setTimeout(() => {
            this.navCtrl.navigateForward("/hotellistmood/" + item.id + "/" + item.title);
        }, 10);
        this.hideStatusBar();
        this.gf.googleAnalytion("hotellistmood", "Search", item.title);
    }
    itemclickregion(item) {
        this.searchhotel.child = this.child;
        this.searchhotel.adult = this.adult;
        this.searchhotel.roomnumber = this.roomnumber;
        this.searchhotel.rootPage = "topregion";
        this.authService.region = item.name;
        this.authService.regionid = item.id;
        this.authService.regioncode = item.regionCode;
        this.searchhotel.location = "";
        this.searchhotel.chuoi = this.chuoi;
        this.zone.run(() => {
            this.input = item.name;
            this.searchhotel.input = item.name;
        });
        this.searchhotel.local0check = false;
        this.searchhotel.local1check = false;
        this.searchhotel.local2check = false;
        this.searchhotel.local3check = false;
        this.searchhotel.local4check = false;
        this.searchhotel.local5check = false;
        this.searchhotel.local6check = false;
        this.searchhotel.local7check = false;
        this.searchhotel.local8check = false;
        this.searchhotel.local9check = false;
        this.searchhotel.local10check = false;
        this.searchhotel.local11check = false;
        this.searchhotel.local12check = false;
        this.searchhotel.local13check = false;
        this.searchhotel.local14check = false;
        this.searchhotel.local15check = false;
        this.searchhotel.local16check = false;
        this.searchhotel.local17check = false;
        this.searchhotel.local18check = false;
        this.searchhotel.local19check = false;
        this.searchhotel.location = "";
        var obj = {
            regionName: this.authService.region,
            regionId: this.authService.regionid,
            regionCode: this.authService.regioncode
        };
        this.searchhotel.gbmsg = obj;
        this.searchhotel.flag = 1;
        this.valueGlobal.logingoback = "/hotellist/true";
        var itemRecent = {};
        itemRecent.adult = this.searchhotel.adult;
        itemRecent.child = this.searchhotel.child;
        itemRecent.arrchild = this.searchhotel.arrchild;
        itemRecent.roomnumber = this.searchhotel.roomnumber;
        if (item.image) {
            itemRecent.imageUrl = (item.image.toLocaleString().trim().indexOf("http") == -1) ? 'https:' + item.image : item.image;
        }
        var checkInDate = new Date(this.searchhotel.CheckInDate);
        var checkOutDate = new Date(this.searchhotel.CheckOutDate);
        itemRecent.CheckInDate = this.searchhotel.CheckInDate;
        itemRecent.CheckOutDate = this.searchhotel.CheckOutDate;
        itemRecent.checkInDate = moment__WEBPACK_IMPORTED_MODULE_7__(checkInDate).format('DD') + ' ' + 'tháng' + ' ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkInDate).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkInDate).format('YYYY');
        itemRecent.checkOutDate = moment__WEBPACK_IMPORTED_MODULE_7__(checkOutDate).format('DD') + ' ' + 'tháng' + ' ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkOutDate).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkOutDate).format('YYYY');
        itemRecent.id = item.id;
        itemRecent.name = item.name;
        itemRecent.isType = 1;
        this.gf.setCacheSearch(itemRecent, 0);
        this.navCtrl.navigateForward("/hotellist/true");
        this.hideStatusBar();
        this.gf.googleAnalytion("main", "Search", "topregion:" + this.authService.regioncode);
    }
    onScroll(event) {
        let scrolled = 0;
        let el = document.getElementsByClassName("slide2-scroll");
        if (el.length > 0) {
            scrolled = Math.round(el[0].scrollWidth - el[0].scrollLeft);
        }
        if (scrolled == el[0].offsetWidth || scrolled + 1 == el[0].offsetWidth) {
            setTimeout(() => {
                this.doInfinite();
            }, 500);
        }
    }
    doInfinite() {
        this.zone.run(() => {
            if (this.ischeck == true && this.canLoadDeal) {
                this.page = this.page + 1;
                this.getHotelDealPaging();
            }
        });
    }
    onScrollBlog(event) {
        let scrolled = 0;
        let el = document.getElementsByClassName("slide5-scroll");
        if (el.length > 0) {
            scrolled = Math.round(el[0].scrollWidth - el[0].scrollLeft);
        }
        if (scrolled == el[0].offsetWidth || scrolled + 1 == el[0].offsetWidth) {
            setTimeout(() => {
                this.doInfiniteBlog();
            }, 500);
        }
    }
    onScrollBlogTrip(event) {
        let scrolled = 0;
        let el = document.getElementsByClassName("slideblogtrips-scroll");
        if (el.length > 0) {
            scrolled = Math.round(el[0].scrollWidth - el[0].scrollLeft);
        }
        if (scrolled == el[0].offsetWidth || scrolled + 1 == el[0].offsetWidth) {
            setTimeout(() => {
                this.doInfiniteBlogTrip();
            }, 500);
        }
    }
    doInfiniteBlog() {
        this.zone.run(() => {
            if (this.ischeck == true) {
                this.pageBlog = this.pageBlog + 1;
                this.getNewsBlog(0);
            }
        });
    }
    doInfiniteBlogTrip() {
        this.zone.run(() => {
            if (this.ischeck == true) {
                this.pageBlogTrip = this.pageBlogTrip + 1;
                this.getblogtrips();
            }
        });
    }
    getblogtrips() {
        var se = this;
        se.storage.get("auth_token").then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: "GET",
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile +
                        "/mobile/OliviaApis/GeBlogByTripLatestOfUser" +
                        "?pageIndex=" +
                        se.pageBlogTrip +
                        "&pageSize=10",
                    timeout: 10000,
                    maxAttempts: 5,
                    retryDelay: 2000,
                    headers: {
                        "cache-control": "no-cache",
                        "content-type": "application/json",
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (error) {
                        error.page = "hotellike";
                        error.func = "getblog";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(error, response);
                        throw new Error(error);
                    }
                    se.zone.run(() => {
                        var data = JSON.parse(body);
                        var listBlogtemp = data.items;
                        if (listBlogtemp && listBlogtemp.length > 0) {
                            se.regionnamesuggest = data.regionName;
                            if (se.arrbloglike && se.arrbloglike.length > 0) {
                                var itemblog;
                                for (let i = 0; i < listBlogtemp.length; i++) {
                                    itemblog = {
                                        avatar: listBlogtemp[i].avatar,
                                        date: listBlogtemp[i].Date,
                                        id: listBlogtemp[i].id,
                                        title: listBlogtemp[i].title,
                                        url: listBlogtemp[i].url,
                                        Like: false
                                    };
                                    for (let j = 0; j < se.arrbloglike.length; j++) {
                                        if (se.arrbloglike[j].id == listBlogtemp[i].Id) {
                                            itemblog = {
                                                avatar: listBlogtemp[i].avatar,
                                                date: listBlogtemp[i].date,
                                                id: listBlogtemp[i].id,
                                                title: listBlogtemp[i].title,
                                                url: listBlogtemp[i].url,
                                                Like: true
                                            };
                                            break;
                                        }
                                    }
                                    if (!se.checkExistsItemInArray(se.blogtrips, itemblog, 1)) {
                                        se.blogtrips.push(itemblog);
                                    }
                                }
                            }
                            else {
                                for (let i = 0; i < listBlogtemp.length; i++) {
                                    itemblog = {
                                        avatar: listBlogtemp[i].avatar,
                                        date: listBlogtemp[i].date,
                                        id: listBlogtemp[i].id,
                                        title: listBlogtemp[i].title,
                                        url: listBlogtemp[i].url,
                                        Like: false
                                    };
                                    if (!se.checkExistsItemInArray(se.blogtrips, itemblog, 1)) {
                                        se.blogtrips.push(itemblog);
                                    }
                                }
                            }
                            if (se.arrbloglike && se.arrbloglike.length > 0) {
                                se.bindItemLiketrips(se.arrbloglike);
                            }
                            se.storage.set("listblogtripdefault", se.blogtrips);
                            se.storage.set("regionnamesuggest", data.regionName);
                        }
                        else {
                            se.showloadmoreblogtrip = false;
                        }
                    });
                });
            }
            else {
                se.blogtrips = [];
                se.showloadmoreblogtrip = false;
            }
        });
    }
    bindItemunLike() {
        if (this.blog.length > 0) {
            this.zone.run(() => {
                for (let i = 0; i < this.blog.length; i++) {
                    this.blog[i].Like = false;
                }
            });
        }
    }
    bindItemLike(listLike) {
        var se = this;
        if (listLike.length > 0) {
            se.blog.forEach(element => {
                if (listLike && listLike.length > 0) {
                    var itemlikemap = listLike.filter(item => {
                        return item.id == element.Id;
                    });
                    if (itemlikemap && itemlikemap.length > 0) {
                        se.zone.run(() => {
                            element.Like = true;
                        });
                    }
                    else {
                        se.zone.run(() => {
                            element.Like = false;
                        });
                    }
                }
            });
        }
        else {
            for (let i = 0; i < se.blog.length; i++) {
                se.blog[i].Like = false;
            }
        }
        if (se.blogtrips && se.blogtrips.length > 0) {
            this.bindItemLiketrips(se.arrbloglike);
        }
        else {
            this.getblogtrips();
        }
    }
    bindItemLiketrips(listLike) {
        var se = this;
        if (listLike && listLike.length > 0) {
            se.blogtrips.forEach(element => {
                var itemlikemap = listLike.filter(item => {
                    return item.id == element.id;
                });
                if (itemlikemap && itemlikemap.length > 0) {
                    se.zone.run(() => {
                        element.Like = true;
                    });
                }
                else {
                    se.zone.run(() => {
                        element.Like = false;
                    });
                }
            });
        }
        else {
            for (let i = 0; i < se.blogtrips.length; i++) {
                se.blogtrips[i].Like = false;
            }
        }
    }
    getbloglike(value) {
        var se = this;
        se.storage.get("auth_token").then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: "GET",
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile +
                        "/mobile/OliviaApis/GetFavouriteBlogByUser",
                    timeout: 10000,
                    maxAttempts: 5,
                    retryDelay: 2000,
                    headers: {
                        "cache-control": "no-cache",
                        "content-type": "application/json",
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (error) {
                        error.page = "hotellike";
                        error.func = "getblog";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(error, response);
                        throw new Error(error);
                    }
                    se.zone.run(() => {
                        se.arrbloglike = JSON.parse(body);
                        if (se.arrbloglike.msg) {
                            se.arrbloglike = [];
                        }
                        if (value == 0) {
                            se.getNewsBlog(0);
                            se.storage.get('blogtripdefault').then(data => {
                                if (data) {
                                    se.blogtrips = data;
                                }
                                else {
                                    se.getblogtrips();
                                }
                            });
                        }
                        else {
                            se.bindItemLike(se.arrbloglike);
                        }
                    });
                });
            }
            else {
                se.arrbloglike = [];
                se.getNewsBlog(1);
            }
        });
    }
    seemoreblog(value) {
        this.gf.setParams(value, "seemoreblog");
        this.valueGlobal.backValue = "blog";
        this.valueGlobal.logingoback = 'bloglist';
        this.navCtrl.navigateForward("/bloglist");
        this.hideStatusBar();
    }
    itemblog(item) {
        this.valueGlobal.urlblog = item.Url;
        this.valueGlobal.logingoback = '/blog/' + item.Id;
        this.navCtrl.navigateForward("/blog/" + item.Id);
        this.gf.googleAnalytion("blog", "Search", "");
        this.hideStatusBar();
    }
    clickitemblogtrips(item) {
        this.valueGlobal.urlblog = item.url;
        this.valueGlobal.backValue = "blog";
        this.valueGlobal.logingoback = '/blog/' + item.id;
        this.navCtrl.navigateForward("/blog/" + item.id);
        this.gf.googleAnalytion("blog", "Search", "");
        this.hideStatusBar();
    }
    share(url) {
        this.socialSharing
            .share(null, null, null, url)
            .then(() => {
        })
            .catch(() => {
        });
    }
    likeItemblog(id) {
        var se = this;
        se.storage.get("auth_token").then(auth_token => {
            if (auth_token) {
                se.getbloglikelocal(id, 1);
                var text = "Bearer " + auth_token;
                var options = {
                    method: "POST",
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile + "/mobile/OliviaApis/AddFavouriteBlog",
                    timeout: 10000,
                    maxAttempts: 5,
                    retryDelay: 2000,
                    headers: {
                        authorization: text
                    },
                    body: { postId: id },
                    json: true
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (error) {
                        error.page = "mainpage";
                        error.func = "likeItemblog";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(error, response);
                    }
                    if (se.valueGlobal.blogid) {
                        se.getbloglike(1);
                        se.valueGlobal.blogid = null;
                    }
                });
            }
            else {
                se.valueGlobal.logingoback = '/app/tabs/tab1';
                se.valueGlobal.blogid = id;
                let el = document.getElementsByClassName('div-statusbar-float');
                if (el.length > 0) {
                    el[0].classList.remove('float-statusbar-enabled');
                    el[0].classList.add('float-statusbar-disabled');
                }
                se.navCtrl.navigateForward("/login");
            }
        });
    }
    likeItemblogtrips(id) {
        var se = this;
        se.storage.get("auth_token").then(auth_token => {
            if (auth_token) {
                se.getbloglikelocaltrips(id, 1);
                var text = "Bearer " + auth_token;
                var options = {
                    method: "POST",
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile + "/mobile/OliviaApis/AddFavouriteBlog",
                    timeout: 10000,
                    maxAttempts: 5,
                    retryDelay: 2000,
                    headers: {
                        authorization: text
                    },
                    body: { postId: id },
                    json: true
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (error) {
                        error.page = "mainpage";
                        error.func = "likeItemblogtrips";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(error, response);
                    }
                });
            }
            else {
                se.navCtrl.navigateForward("/login");
            }
        });
    }
    unlikeItemblog(id) {
        var se = this;
        se.storage.get("auth_token").then(auth_token => {
            if (auth_token) {
                se.getbloglikelocal(id, 0);
                var text = "Bearer " + auth_token;
                var options = {
                    method: "POST",
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile +
                        "/mobile/OliviaApis/RemoveFavouriteBlogByUser",
                    timeout: 10000,
                    maxAttempts: 5,
                    retryDelay: 2000,
                    headers: {
                        authorization: text
                    },
                    body: { postId: id },
                    json: true
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (error) {
                        error.page = "mainpage";
                        error.func = "unlikeItemblog";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(error, response);
                    }
                });
            }
            else {
                this.navCtrl.navigateForward("/login");
            }
        });
    }
    unlikeItemblogtrips(id) {
        var se = this;
        se.storage.get("auth_token").then(auth_token => {
            if (auth_token) {
                se.getbloglikelocaltrips(id, 0);
                var text = "Bearer " + auth_token;
                var options = {
                    method: "POST",
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile +
                        "/mobile/OliviaApis/RemoveFavouriteBlogByUser",
                    timeout: 10000,
                    maxAttempts: 5,
                    retryDelay: 2000,
                    headers: {
                        authorization: text
                    },
                    body: { postId: id },
                    json: true
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (error) {
                        error.page = "mainpage";
                        error.func = "unlikeItemblogtrips";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(error, response);
                    }
                });
            }
            else {
                this.navCtrl.navigateForward("/login");
            }
        });
    }
    getbloglikelocaltrips(id, value) {
        this.zone.run(() => {
            for (let i = 0; i < this.blogtrips.length; i++) {
                if (this.blogtrips[i].id == id) {
                    if (value == 1) {
                        this.blogtrips[i].Like = true;
                    }
                    else {
                        this.blogtrips[i].Like = false;
                    }
                    break;
                }
            }
        });
    }
    getbloglikelocal(id, value) {
        this.zone.run(() => {
            for (let i = 0; i < this.blog.length; i++) {
                if (this.blog[i].Id == id) {
                    if (value == 1) {
                        this.blog[i].Like = true;
                    }
                    else {
                        this.blog[i].Like = false;
                    }
                    break;
                }
            }
        });
    }
    seemoredeal() {
        this.valueGlobal.backValue = "topdeallist";
        this.valueGlobal.logingoback = "topdeallist";
        setTimeout(() => {
            this.navCtrl.navigateForward("/topdeallist");
        }, 250);
        this.hideStatusBar();
    }
    doRefresh(event) {
        if (this.activeTab == 3) {
            event.target.complete();
            return;
        }
        this.loaddata();
        this.storage.remove("listblogtripdefault");
        this.storage.remove("listtopdealdefault");
        this.storage.remove("regionnamesuggest");
        this.storage.remove("listtopmoods");
        this.onEnter();
        this.blogtrips = [];
        this.pageBlogTrip = 1;
        this.getbloglike(0);
        this.gf.setParams(false, "resetBlogTrips");
        setTimeout(() => {
            event.target.complete();
        }, 1000);
    }
    getTagByTypeName() {
        var se = this;
        if (se.searchhotel.ef_arrhoteltypenamecheck.length > 0) {
            se.searchhotel.ef_arrhoteltypenamecheck.forEach(element => {
                if (element == 'Ăn gì' && !se.gf.checkExistsItemInArray(se.searchhotel.ef_arrhoteltypecheck, 3, 'filtername')) {
                    se.searchhotel.ef_arrhoteltypecheck.push(3);
                }
                else if (element == 'Xem gì' && !se.gf.checkExistsItemInArray(se.searchhotel.ef_arrhoteltypecheck, 6, 'filtername')) {
                    se.searchhotel.ef_arrhoteltypecheck.push(6);
                }
                else if (element == 'Chơi gì' && !se.gf.checkExistsItemInArray(se.searchhotel.ef_arrhoteltypecheck, 7, 'filtername')) {
                    se.searchhotel.ef_arrhoteltypecheck.push(7);
                }
                else if (element == 'Ở đâu' && !se.gf.checkExistsItemInArray(se.searchhotel.ef_arrhoteltypecheck, 4, 'filtername')) {
                    se.searchhotel.ef_arrhoteltypecheck.push(4);
                }
                else if (element == 'Sống ảo' && !se.gf.checkExistsItemInArray(se.searchhotel.ef_arrhoteltypecheck, 9, 'filtername')) {
                    se.searchhotel.ef_arrhoteltypecheck.push(9);
                }
                else if (element == 'Uống gì' && !se.gf.checkExistsItemInArray(se.searchhotel.ef_arrhoteltypecheck, 22, 'filtername')) {
                    se.searchhotel.ef_arrhoteltypecheck.push(22);
                }
            });
        }
    }
    getFilterName(type) {
        if (type == 3) {
            return "Ăn gì";
        }
        if (type == 6) {
            return "Xem gì";
        }
        if (type == 7) {
            return "Chơi gì";
        }
        if (type == 4) {
            return "Ở đâu";
        }
        if (type == 9) {
            return "Sống ảo";
        }
        if (type == 22) {
            return "Uống gì";
        }
    }
    getdatamytrip() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile + '/api/dashboard/getmytrip?getall=true',
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/json-patch+json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (error) {
                        error.page = "mytrips";
                        error.func = "getdata";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(error, response);
                    }
                    else {
                        if (body) {
                            se.zone.run(() => {
                                let lstTrips = JSON.parse(body);
                                se.storage.get('listmytrips').then(data => {
                                    if (data) {
                                        se.storage.remove('listmytrips').then(() => {
                                            se.storage.set('listmytrips', lstTrips);
                                        });
                                    }
                                    else {
                                        se.storage.set('listmytrips', lstTrips);
                                    }
                                });
                                se.getCombineRequestTrip();
                            });
                        }
                    }
                });
            }
        });
    }
    getCombineRequestTrip() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile + '/api/dashboard/GetMyRequestPrice',
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/json-patch+json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "mytrips",
                            func: "getRequestTrip",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options),
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "mytrips";
                        error.func = "getRequestTrip";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(error, response);
                    }
                    else {
                        if (body) {
                            se.zone.run(() => {
                                var result = JSON.parse(body);
                                se.storage.get('listrequesttrips').then(data => {
                                    if (data) {
                                        se.storage.remove('listrequesttrips').then(() => {
                                            se.storage.set('listrequesttrips', result);
                                        });
                                    }
                                    else {
                                        se.storage.set('listrequesttrips', result);
                                    }
                                });
                            });
                        }
                    }
                });
            }
        });
    }
    getCalendarholidays() {
        var se = this;
        var options = {
            method: 'GET',
            url: 'https://gate.ivivu.com/api/Data/calendarholidays',
            timeout: 180000, maxAttempts: 5, retryDelay: 2000,
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            se.valueGlobal.listlunar = [];
            var json = JSON.parse(body);
            se.valueGlobal.listlunar = json;
            se.cofdate = 0;
            se.cotdate = 0;
            se.bindlunar();
        });
    }
    checklunar(s) {
        return s.indexOf('Mùng') >= 0;
    }
    bindlunar() {
        var se = this;
        for (let i = 0; i < se.valueGlobal.listlunar.length; i++) {
            var checkdate = moment__WEBPACK_IMPORTED_MODULE_7__(se.valueGlobal.listlunar[i].date).format('YYYY-MM-DD');
            if (checkdate == se.cin) {
                se.cofdate = 1;
                if (se.valueGlobal.listlunar[i].isNameDisplay == 1) {
                    var ischecklunar = se.checklunar(se.valueGlobal.listlunar[i].name);
                    if (ischecklunar) {
                        se.cinthu = se.valueGlobal.listlunar[i].name + ' ' + 'tết';
                    }
                    else {
                        se.cinthu = se.valueGlobal.listlunar[i].name;
                    }
                }
            }
            else {
                this.getDayName(this.datecin, this.datecout);
            }
            if (checkdate == se.cout) {
                se.cotdate = 1;
                if (se.valueGlobal.listlunar[i].isNameDisplay == 1) {
                    var ischecklunar = se.checklunar(se.valueGlobal.listlunar[i].name);
                    if (ischecklunar) {
                        se.coutthu = se.valueGlobal.listlunar[i].name + ' ' + 'tết';
                    }
                    else {
                        se.coutthu = se.valueGlobal.listlunar[i].name;
                    }
                }
            }
            else {
                this.getDayName(this.datecin, this.datecout);
            }
        }
    }
    clickhotel() {
        this.activeTab = 1;
        this.tabhome = "hotel";
    }
    clickfood() {
        this.activeTab = 2;
        this.tabhome = "food";
    }
    slidechange() {
        var se = this;
        se.slider.getActiveIndex().then((currentIndex) => {
            se.activeTab = currentIndex;
            se.setActiveTab(currentIndex);
        });
    }
    setActiveTab(currentIndex) {
        if (currentIndex != 2 && currentIndex != 3) {
            this.activeTab = currentIndex;
            this.valueGlobal.activeTab = currentIndex;
        }
        if (currentIndex === 3) {
            this.countcart = this.foodService.listItemsCart.length;
            this.getAddress();
            this.valueGlobal.backValue = "";
            this._mytripservice.rootPage = "homefood";
            this.navCtrl.navigateForward('/homefood');
        }
        else if (currentIndex === 2) {
            this.valueGlobal.backValue = "";
            this.searchhotel.adult = this.adult;
            this.searchhotel.child = this.child;
            this.searchhotel.roomnumber = this.roomnumber;
            this.navCtrl.navigateForward('/topdeallist');
        }
        else if (currentIndex === 1) {
            this.valueGlobal.logingoback = "";
            this._mytripservice.rootPage = "homeflight";
            if (document.querySelector(".tabbar")) {
                document.querySelector(".tabbar")['style'].display = 'none';
                if (document.querySelector(".tabbar")[1]) {
                    document.querySelector(".tabbar")[0]['style'].display = 'none';
                    document.querySelector(".tabbar")[1]['style'].display = 'none';
                }
            }
            if (document.getElementsByClassName("homefood-footer").length > 0) {
                document.getElementsByClassName("homefood-footer")[0]['style'].display = 'none';
                if (document.getElementsByClassName("homefood-footer")[1]) {
                    document.getElementsByClassName("homefood-footer")[1]['style'].display = 'none';
                }
            }
            if (document.getElementsByClassName("homeflight-footer").length > 0) {
                document.getElementsByClassName("homeflight-footer")[0]['style'].display = 'block';
                if (document.getElementsByClassName("homeflight-footer")[1]) {
                    document.getElementsByClassName("homeflight-footer")[1]['style'].display = 'block';
                }
            }
            this.getAddress();
            this.flightService.itemTabFlightFocus.emit(1);
        }
        else {
            this._mytripservice.rootPage = "homehotel";
            jquery__WEBPACK_IMPORTED_MODULE_17__(".div-wraper-home").removeClass("cls-disabled").addClass("cls-visible");
            if (document.querySelector(".tabbar")) {
                document.querySelector(".tabbar")['style'].display = 'flex';
                if (document.querySelector(".tabbar")[1]) {
                    document.querySelector(".tabbar")[0]['style'].display = 'flex';
                    document.querySelector(".tabbar")[1]['style'].display = 'flex';
                }
            }
            if (document.getElementsByClassName("homefood-footer").length > 0) {
                document.getElementsByClassName("homefood-footer")[0]['style'].display = 'none';
                if (document.getElementsByClassName("homefood-footer")[1]) {
                    document.getElementsByClassName("homefood-footer")[1]['style'].display = 'none';
                }
            }
            if (document.getElementsByClassName("homeflight-footer").length > 0) {
                document.getElementsByClassName("homeflight-footer")[0]['style'].display = 'none';
                if (document.getElementsByClassName("homeflight-footer")[1]) {
                    document.getElementsByClassName("homeflight-footer")[1]['style'].display = 'none';
                }
            }
            this.foodService.listimagereview = null;
            this.foodService.objFoodReview = null;
            this.valueGlobal.backValue = "";
        }
        this.gf.setActivatedTab(1);
    }
    getAddress() {
        var se = this;
        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlFood + "/api/FOAdmin/GetData";
        this.gf.RequestApi("GET", url, {}, {}, "", "").then((data) => {
            se.arrDistrict = [];
            se.arrCity = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].levelId == 1) {
                    se.arrCity.push(data[i]);
                }
                if (data[i].levelId == 2) {
                    se.arrDistrict.push(data[i]);
                }
            }
            se.dataDist();
        });
    }
    dataDist() {
        var se = this;
        se.foodService.district = [];
        for (let i = 0; i < se.arrCity.length; i++) {
            var item;
            var chuoi = "";
            if (se.foodService.district.length > 0) {
                var str = se.foodService.district[i - 1].namedist.length;
                se.foodService.district[i - 1].namedist = se.foodService.district[i - 1].namedist.slice(0, str - 2);
            }
            for (let j = 0; j < se.arrDistrict.length; j++) {
                if (se.arrCity[i].id == se.arrDistrict[j].parentId) {
                    if (j == se.arrDistrict.length - 1) {
                        chuoi = chuoi + se.arrDistrict[j].name;
                    }
                    else {
                        chuoi = chuoi + se.arrDistrict[j].name + ', ';
                    }
                }
            }
            item = { namecity: se.arrCity[i].name, namedist: chuoi };
            se.foodService.district.push(item);
        }
    }
    getShowNotice() {
        var se = this;
        var options = {
            'method': 'GET',
            'url': _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/getCovidNotify',
            'headers': {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response) {
            if (error)
                throw new Error(error);
            var data = JSON.parse(response.body);
            se.isNotice = data.show;
        });
    }
    checkDefaultDateFocus() {
        var se = this;
        se.zone.run(() => {
            se.storage.get('cacheSearchHotelInfo').then((data) => {
                if (!data || (data && data.checkInDate && moment__WEBPACK_IMPORTED_MODULE_7__(data.checkInDate).diff(moment__WEBPACK_IMPORTED_MODULE_7__(new Date()), 'days') <= 0)) {
                    se.storage.get('hasChangeDate').then((data) => {
                        if (!data) {
                            se.openPickupCalendar(true);
                            se.allowclickcalendar = false;
                            se.storage.set('hasChangeDate', true);
                        }
                    });
                }
            });
        });
    }
    funcRecent(item) {
        this.searchhotel.isRecent = 1;
        if (item.isType == 0) {
            this.searchhotel.rootPage = "mainpage";
            this.valueGlobal.notRefreshDetail = false;
            this.valueGlobal.logingoback = '/hoteldetail/' + item.id;
            this.searchhotel.hotelID = item.id;
            this.searchhotel.adult = item.adult;
            this.searchhotel.child = item.child;
            this.searchhotel.arrchild = item.arrchild;
            this.searchhotel.roomnumber = item.roomnumber;
            this.searchhotel.CheckInDate = item.CheckInDate;
            this.searchhotel.CheckOutDate = item.CheckOutDate;
            this.searchhotel.objRecent = item;
            let diffdate = moment__WEBPACK_IMPORTED_MODULE_7__(item.CheckInDate).diff(moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format('YYYY-MM-DD')), 'days');
            if (item.CheckInDate && diffdate < 0) {
                this.newMethod(item);
            }
            this.navCtrl.navigateForward('/hoteldetail/' + item.id);
        }
        else if (item.isType == 1) {
            this.authService.region = item.name;
            this.authService.regionid = item.id;
            this.searchhotel.adult = item.adult;
            this.searchhotel.child = item.child;
            this.searchhotel.arrchild = item.arrchild;
            this.searchhotel.roomnumber = item.roomnumber;
            this.searchhotel.CheckInDate = item.CheckInDate;
            this.searchhotel.CheckOutDate = item.CheckOutDate;
            this.searchhotel.objRecent = item;
            let diffdate = moment__WEBPACK_IMPORTED_MODULE_7__(item.CheckInDate).diff(moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format('YYYY-MM-DD')), 'days');
            if (item.CheckInDate && diffdate < 0) {
                this.newMethod(item);
            }
            this.navCtrl.navigateForward('/hotellist/' + this.isrefreshlist);
        }
    }
    newMethod(item) {
        this.cin = new Date();
        var rescin = this.cin.setTime(this.cin.getTime() + (1 * 24 * 60 * 60 * 1000));
        var datein = new Date(rescin);
        this.cin = moment__WEBPACK_IMPORTED_MODULE_7__(datein).format("YYYY-MM-DD");
        this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(datein).format("DD-MM-YYYY");
        this.datecin = new Date(rescin);
        let diffdateCheckout = moment__WEBPACK_IMPORTED_MODULE_7__(item.CheckOutDate).diff(moment__WEBPACK_IMPORTED_MODULE_7__(item.CheckInDate), 'days');
        this.cout = new Date();
        var res = this.cout.setTime(this.cout.getTime() + ((diffdateCheckout + 1) * 24 * 60 * 60 * 1000));
        var date = new Date(res);
        this.cout = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("YYYY-MM-DD");
        this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("DD-MM-YYYY");
        this.datecout = new Date(res);
        this.searchhotel.CheckInDate = this.cin;
        this.searchhotel.CheckOutDate = this.cout;
        this.searchhotel.datecin = new Date(this.searchhotel.CheckInDate);
        this.searchhotel.datecout = new Date(this.searchhotel.CheckOutDate);
        this.searchhotel.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecin).format("DD-MM-YYYY");
        this.searchhotel.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecout).format("DD-MM-YYYY");
        item.CheckInDate = this.searchhotel.CheckInDate;
        item.CheckOutDate = this.searchhotel.CheckOutDate;
        item.checkInDate = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecin).format('DD') + ' ' + 'tháng' + ' ' + moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecin).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecin).format('YYYY');
        item.checkOutDate = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecout).format('DD') + ' ' + 'tháng' + ' ' + moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecout).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecout).format('YYYY');
        this.gf.setCacheSearch(item, 0);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('myHomeSlider'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"])
], Tab1Page.prototype, "slider", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('scrollArea'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
], Tab1Page.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRouterOutlet"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRouterOutlet"])
], Tab1Page.prototype, "routerOutlets", void 0);
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-tab1",
        template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
        styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _providers_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["SearchHotel"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["ValueGlobal"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_9__["SplashScreen"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_10__["GlobalFunction"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_13__["SafariViewController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_15__["Network"],
        _network_provider_service__WEBPACK_IMPORTED_MODULE_16__["NetworkProvider"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_18__["Storage"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_19__["SocialSharing"],
        _ionic_native_firebase_messaging_ngx__WEBPACK_IMPORTED_MODULE_21__["FirebaseMessaging"],
        _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_20__["FCM"],
        _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_22__["AppVersion"],
        _ionic_native_firebase_dynamic_links_ngx__WEBPACK_IMPORTED_MODULE_23__["FirebaseDynamicLinks"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_24__["NativePageTransitions"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_10__["ActivityService"],
        _providers_foodService__WEBPACK_IMPORTED_MODULE_25__["foodService"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_26__["flightService"],
        _providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_27__["MytripService"],
        _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_28__["BizTravelService"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map