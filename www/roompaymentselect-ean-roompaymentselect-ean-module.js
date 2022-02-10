(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roompaymentselect-ean-roompaymentselect-ean-module"],{

/***/ "./src/app/providers/bizTravelService.ts":
/*!***********************************************!*\
  !*** ./src/app/providers/bizTravelService.ts ***!
  \***********************************************/
/*! exports provided: BizTravelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BizTravelService", function() { return BizTravelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BizTravelService = class BizTravelService {
    constructor() {
        this.bizAccount = {
            taxCode: '',
            legalName: '',
            address: '',
            phone: '',
            balanceAvaiable: 0,
            balanceAvailableStr: '0',
            phoneOtp: '',
            supporter: null
        };
        this.accountBizTravelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ;
};
BizTravelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BizTravelService);



/***/ }),

/***/ "./src/app/roompaymentselect-ean/roompaymentselect-ean.html":
/*!******************************************************************!*\
  !*** ./src/app/roompaymentselect-ean/roompaymentselect-ean.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the RoompaymentselectPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-row>\n    <ion-col style=\"text-align: center;height: 48px;\">\n      <div style=\"align-self: center\" >\n        <div style=\"position: absolute;height: 48px;width: 48px;\"  (click)=\"goback()\">\n            <!-- <ion-icon (click)=\"goback()\" color=\"dark-tint\" style=\"font-size: 2em;\" name=\"arrow-back\" class=\"card-title\"></ion-icon> -->\n            <img style=\"height: 48px; padding: 8px;margin-top: 0px;margin-left:-8px\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n        </div>\n        \n        <div style=\"padding-top: 11px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thanh toán</label></div>\n      </div>\n    </ion-col>\n  </ion-row>\n  </ion-header>\n\n\n<ion-content padding>\n    <div style=\"text-align: center\">\n        <img  src=\"./assets/step/step_3.svg\">\n    </div>\n  \n\n  <ion-row style=\"margin-top: 10px;margin-left: -5px;\">\n      <ion-col size=\"4\">\n        <div class=\"div-wrapimg\">\n          <img style=\"border-radius: 5px;height: 100%\" src={{Avatar}}>\n        </div>\n      </ion-col>\n      <ion-col size=\"8\" style=\"padding:3px\" class=\"col-description-roompayment\">\n        <div style=\"margin-left: 3px\">\n          <h2 class=\"text-name\" style=\"margin-top: 0\" text-wrap>{{Name}}\n          </h2>\n          <p style=\"font-size: 14px;color: #4f4f4f\" text-wrap>\n            <ion-icon name=\"pin\"></ion-icon> {{Address}}\n          </p>\n        </div>\n      </ion-col>\n    </ion-row>\n    <hr>\n    <div >\n      <ion-grid style=\"padding:0\">\n        <ion-row style=\"font-size:12px\">\n          <ion-col size=\"5\" style=\"padding:0\">\n            <ion-label style=\"font-weight: 300;color: #4f4f4f\" stacked>Nhận phòng</ion-label>\n          </ion-col>\n          <ion-col size=\"5\" style=\"padding:0\">\n            <ion-label style=\"font-weight: 300;color: #4f4f4f\" stacked>Trả phòng</ion-label>\n          </ion-col>\n          <ion-col size=\"2\" style=\"padding:0\">\n            <ion-label style=\"font-weight: 300;padding-left: 4px;color: #4f4f4f\" stacked>Số đêm</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4.5\" style=\"padding:0\">\n            <ion-label style=\"padding: 0px;font-weight: bold;font-size: 14px\" stacked>{{cin}}</ion-label>\n          </ion-col>\n          <ion-col size=\"0.5\" style=\"padding: 0;\">\n            <ion-label style=\"margin-top: 32px;color: #666666;text-align: center\">|</ion-label>\n          </ion-col>\n          <ion-col size=\"4.5\" style=\"padding:0\">\n            <ion-label style=\"padding: 0px;font-weight: bold;font-size: 14px\" stacked>{{cout}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"0.5\" style=\"padding: 0;margin-left: -3px;\">\n            <ion-label style=\"margin-top: 32px;color: #666666;text-align: center\">|</ion-label>\n          </ion-col>\n          <ion-col size=\"2\" style=\"padding:0\">\n            <ion-label style=\"padding: 0px;font-weight: bold;font-size: 14px;margin-left: 10px\" stacked>{{dur}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <hr>\n    <div>\n      <label class=\"text-name\">\n        {{nameroom}}\n      </label>\n      <p style=\"color: #666;font-size: 14px\" text-wrap>\n        <img class=\"image-card\" src=\"./assets/ic_facility/ic_people.svg\"> {{roomnumber}} phòng | {{adults}} người lớn |\n        {{children}} trẻ em {{textage}}\n        <p>\n          <p style=\"color: #666;font-size: 14px\">\n            <img class=\"image-card\" *ngIf=\"breakfast\" src=\"./assets/ic_facility/ic_food_b.svg\"> {{breakfast}}\n            <p>\n    </div>\n    <hr class=\"cls-hr\">\n    <!-- <div>\n      <ion-item style=\"--padding-start: 0px;--border-style:none;--inner-padding-end:0px\">\n        <label style=\"color: #666;font-size: 14px\" slot=\"start\">\n          Chính sách hủy phòng\n        </label>\n        <ion-icon (click)=\"openRoomCancel()\" name=\"ios-arrow-round-forward\" slot=\"end\"></ion-icon>\n      </ion-item>\n    </div>\n    <hr> -->\n    \n    <div class=\"cls-divpayment\">\n      <ion-row class=\"cls-rowheight\">\n        <ion-col size=\"5\">\n          <div>\n            <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">Tổng cộng</h2>\n            <p style=\"font-size: 10px;font-weight: 300;margin-top: -10px\">Giá đã bao gồm thuế & phí</p>\n          </div>\n        </ion-col>\n        <ion-col (click)=\"roompaymentbreakdow()\" size=\"7\">\n          <p class=\"total-price\" style=\"text-align: right\">\n            {{priceshow}}đ\n            <sup>\n              <img  src=\"./assets/ic_green/ic_info.svg\">\n            </sup>\n          </p>\n        </ion-col>\n      </ion-row>\n    </div>\n    <hr class=\"cls-hr\">\n    <ion-list class=\"cls-list\">\n      <ion-item *ngIf=\"bizTravelService.isCompany\" (click)=\"paymentbiztravel()\" class=\"=cls-minheight h-54\">\n        <label  class=\"text-list m-bottom-8\">\n          Tài khoản công ty\n        </label>\n        <div class=\"text-warning-creadit\" *ngIf=\"bizTravelService.bizAccount && (bizTravelService.bizAccount.balanceAvaiable - totalPrice) <=0\">Số dư Credit không đủ để thực hiện thanh toán</div>\n        <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" *ngIf=\"bizTravelService.bizAccount && (bizTravelService.bizAccount.balanceAvaiable - totalPrice) >0\" class='cls-arrow-payment-align-right'></ion-icon>\n      </ion-item>\n      \n      <ion-item (click)=\"roompaymentatm()\" class=\"cls-minheight\">\n        <label>\n          Thẻ ATM nội địa /Internet Banking\n        </label>\n        <ion-icon slot=\"end\" item-end name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n      </ion-item>\n      <ion-item  (click)=\"roompaymentvisa()\" class=\"cls-minheight ion-item1\">\n        <label>\n          Thẻ tín dụng <img class=\"img-visa\" src=\"./assets/imgs/ic_visa.png\">\n        </label>\n        <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n      </ion-item>\n      <ion-radio-group *ngIf=\"arrbankrmb.length>0&&ischeckvisa\">\n        <ion-item class=\"ion-item\" *ngFor=\"let item of arrbankrmb\">\n          <ion-radio mode=\"md\"  [checked]=\"item.checked\" (click)=\"chooseacc(item)\"></ion-radio>\n          <!-- <img class=\"imgcard ml8\" src={{item.imgbank}}> -->\n          <ion-label  class=\"text-infobank ml8\">\n            {{item.name_Bank}}\n          </ion-label>\n          <ion-label class=\"text-infobank \"><span style=\"vertical-align: middle;\"> •••• •••• ••••</span>\n            {{item.vpc_CardNum}}</ion-label>\n        </ion-item>\n        <ion-item class=\"ion-item\">\n          <ion-radio mode=\"md\" (click)=\"nochooseacc()\"></ion-radio>\n          <ion-label  class=\"text-infobank ml8\">\n            Chon tài khoản khác\n          </ion-label>\n          </ion-item>\n      </ion-radio-group>\n      <div *ngIf=\"isshowRemember\" style=\"margin-left: 15px\">\n        <ion-checkbox [disabled]=\"isdisable\" (click)=\"rememberCard()\" [checked]=\"isremember\" class=\"ion-checkbox\"  color=\"secondary\"></ion-checkbox>\n        <ion-label class=\"label-input\" >Lưu và bảo mật thẻ để đặt dịch vụ nhanh hơn lần sau</ion-label>\n      </div>\n      <hr style=\"margin-left: 15px;\">\n      <ion-item   (click)=\"roompaymentmomo()\" class=\"cls-minheight\">\n        <label>\n          Thanh toán bằng Momo  <img class=\"img-payoo\" src=\"https://res.ivivu.com/payment/img/momo/logo.png\">\n        </label>\n        <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n      </ion-item>\n      <ion-item  (click)=\"roompaymentpayooqr()\" class=\"cls-minheight\">\n          <label>\n            Thanh toán bằng mã QR <img class=\"img-payoo\" src=\"https://res.ivivu.com/payment/img/payoo/payoo-logo.png\">\n          </label>\n          <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n        </ion-item>\n        <ion-item *ngIf=\"checkpayment\"  (click)=\"roompaymentpayoolive()\" class=\"cls-minheight\">\n          <label>\n            Trực tiếp tại cửa hàng tiện lợi <img class=\"img-payoo\" src=\"https://res.ivivu.com/payment/img/payoo/payoo-logo.png\">\n          </label>\n          <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n        </ion-item>\n        <ion-item *ngIf=\"checkpayment\" (click)=\"roompaymentbank()\" class=\"cls-minheight\">\n          <label>\n            Chuyển khoản ngân hàng\n          </label>\n          <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n        </ion-item>\n        <ion-item *ngIf=\"checkpayment\" (click)=\"roompaymentlive()\" class=\"cls-minheight\">\n          <label>\n            Trực tiếp tại văn phòng iVIVU\n          </label>\n          <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n        </ion-item>\n    </ion-list>\n</ion-content>\n<ion-footer *ngIf=\"isbtn\">\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline class=\"button button2\">Thanh toán và hoàn thành</button>\n  </div>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/roompaymentselect-ean/roompaymentselect-ean.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/roompaymentselect-ean/roompaymentselect-ean.module.ts ***!
  \***********************************************************************/
/*! exports provided: RoompaymentselectEanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoompaymentselectEanPageModule", function() { return RoompaymentselectEanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _roompaymentselect_ean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roompaymentselect-ean */ "./src/app/roompaymentselect-ean/roompaymentselect-ean.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let RoompaymentselectEanPageModule = class RoompaymentselectEanPageModule {
};
RoompaymentselectEanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _roompaymentselect_ean__WEBPACK_IMPORTED_MODULE_5__["RoompaymentselectEanPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _roompaymentselect_ean__WEBPACK_IMPORTED_MODULE_5__["RoompaymentselectEanPage"]
                }
            ])
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], RoompaymentselectEanPageModule);



/***/ }),

/***/ "./src/app/roompaymentselect-ean/roompaymentselect-ean.scss":
/*!******************************************************************!*\
  !*** ./src/app/roompaymentselect-ean/roompaymentselect-ean.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-name {\n  font-weight: bold;\n  font-size: 18px;\n}\n.text-name .text-green {\n  color: #26bed6;\n}\n.text-date {\n  margin-top: 0px;\n  font-weight: bold;\n  font-size: 14px;\n}\n.image-card {\n  display: initial !important;\n}\n.total-price {\n  color: #26bed6;\n  font-size: 24px;\n  font-weight: bold;\n}\n.button2 {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n.item.item-md .checkbox-md {\n  position: static;\n  display: block;\n  margin: 9px 9px 9px 4px;\n}\n.text-room-price-ota {\n  color: #828282;\n  font-size: 14px;\n  text-align: right;\n  text-decoration: line-through;\n  margin: 20px;\n  margin-top: -20px;\n}\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n.div-wrapimg {\n  position: relative;\n  height: 110px;\n  width: 104px;\n  overflow: hidden;\n  border-radius: 5px;\n}\nhr {\n  background-color: #ccc;\n}\n@media (min-width: 287px) and (max-width: 359px) {\n  .col-description-roompayment {\n    max-width: 188px;\n    left: 12px;\n  }\n}\n.cls-hr {\n  margin-left: -16px;\n  margin-right: -16px;\n  height: 6px;\n  background-color: #f2f2f2 !important;\n}\n.cls-list {\n  margin-left: -15px;\n  margin-top: -5px;\n}\n.cls-rowheight {\n  height: 60px;\n}\n.cls-divpayment {\n  margin-top: -15px;\n  margin-left: -5px;\n}\n.cls-minheight {\n  --min-height: 48px;\n}\np {\n  display: block;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n.imgcard {\n  width: 40px;\n  height: 12.8px;\n}\n.ion-item {\n  --padding-start: 0px;\n  --inner-border-width: 0 0 0px 0;\n  --min-height: 0px;\n  margin-left: 32px;\n}\n.imgcard {\n  width: 40px;\n  height: 12.8px;\n}\n.text-infobank {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.46px;\n  color: #000000;\n}\n.ml8 {\n  margin-left: 8px;\n}\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n}\np {\n  display: block;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n.img-payoo {\n  width: 40px;\n  vertical-align: middle;\n}\n.imgcard {\n  width: 40px;\n  height: 12.8px;\n}\n.text-infobank {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.46px;\n  color: #000000;\n}\n.ml8 {\n  margin-left: 8px;\n}\n.label-input {\n  font-size: 13px;\n  font-weight: 300;\n  color: #000000;\n  margin-left: 5px;\n}\n.ion-checkbox {\n  width: 16px;\n  height: 16px;\n  margin: -2px;\n}\n.ion-item1 {\n  --inner-border-width: 0 0 0px 0;\n}\n.img-visa {\n  width: 118px;\n  height: 22px;\n  vertical-align: middle;\n}\n.img-visa {\n  width: 118px;\n  height: 22px;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL3Jvb21wYXltZW50c2VsZWN0LWVhbi9yb29tcGF5bWVudHNlbGVjdC1lYW4uc2NzcyIsInNyYy9hcHAvcm9vbXBheW1lbnRzZWxlY3QtZWFuL3Jvb21wYXltZW50c2VsZWN0LWVhbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUUsaUJBQUE7RUFDQSxlQUFBO0FDRE47QURFTTtFQUVFLGNBQUE7QUNEUjtBRElJO0VBRUksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FESUk7RUFDRSwyQkFBQTtBQ0ROO0FER0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQU47QURFSTtFQUVJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNBUjtBREdJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNBTjtBREVJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUNDTjtBRENJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDRU47QURBRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNHSjtBRERFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNJSjtBREZBO0VBRUUsc0JBQUE7QUNJRjtBRERBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLFVBQUE7RUNJRjtBQUNGO0FERkE7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0FDR0Y7QUREQTtFQUVFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNHRjtBRERBO0VBRUUsWUFBQTtBQ0dGO0FEREE7RUFFRSxpQkFBQTtFQUNBLGlCQUFBO0FDR0Y7QUREQTtFQUVFLGtCQUFBO0FDR0Y7QUREQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0FDSUY7QURGQTtFQUVFLFdBQUE7RUFDQSxjQUFBO0FDSUY7QURGQTtFQUVFLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDSUY7QURGQTtFQUVFLFdBQUE7RUFDQSxjQUFBO0FDSUY7QURGQTtFQUVRLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0lSO0FERkk7RUFFRSxnQkFBQTtBQ0lOO0FERkk7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUNJUjtBREZJO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLHFCQUFBO0VBQ0EseUJBQUE7VUFBQSx3QkFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7QUNLTjtBREhJO0VBRUUsV0FBQTtFQUNBLHNCQUFBO0FDS047QURISTtFQUVGLFdBQUE7RUFDQSxjQUFBO0FDS0Y7QURIQTtFQUVRLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0tSO0FESEk7RUFFRSxnQkFBQTtBQ0tOO0FESEk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNNTjtBREpJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDT047QURMSTtFQUVFLCtCQUFBO0FDT047QURMSTtFQUVFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNPTjtBRExJO0VBRUUsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ09OIiwiZmlsZSI6InNyYy9hcHAvcm9vbXBheW1lbnRzZWxlY3QtZWFuL3Jvb21wYXltZW50c2VsZWN0LWVhbi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLnRleHQtbmFtZVxuICAgIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgLnRleHQtZ3JlZW5cbiAgICAgIHtcbiAgICAgICAgY29sb3I6ICMyNmJlZDZcbiAgICAgIH1cbiAgICB9XG4gICAgLnRleHQtZGF0ZVxuICAgIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4XG4gICAgfVxuICAgIC5pbWFnZS1jYXJke1xuICAgICAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAudG90YWwtcHJpY2V7XG4gICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuYnV0dG9uMlxuICAgIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuXG4gICAgfVxuICAgIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW9uLWltZywgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpbWcge1xuICAgICAgd2lkdGg6IDEwNHB4O1xuICAgICAgaGVpZ2h0OiAxMDRweDtcbiAgICB9XG4gICAgLml0ZW0uaXRlbS1tZCAuY2hlY2tib3gtbWQge1xuICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luOiA5cHggOXB4IDlweCA0cHg7XG4gICAgfVxuICAgIC50ZXh0LXJvb20tcHJpY2Utb3Rhe1xuICAgICAgY29sb3I6IzgyODI4MjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICBtYXJnaW46IDIwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgfVxuICAudG9vbGJhci10aXRsZS1tZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogNzBweDtcbiAgfSAgXG4gIC5kaXYtd3JhcGltZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDoxMTBweDtcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5oclxue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDoyODdweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XG4gIC5jb2wtZGVzY3JpcHRpb24tcm9vbXBheW1lbnR7XG4gICAgbWF4LXdpZHRoOiAxODhweDtcbiAgICBsZWZ0OiAxMnB4O1xuICB9XG59XG4uY2xzLWhyXG57XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjIgIWltcG9ydGFudDtcbn1cbi5jbHMtbGlzdFxue1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIG1hcmdpbi10b3A6IC01cHg7XG59XG4uY2xzLXJvd2hlaWdodFxue1xuICBoZWlnaHQ6IDYwcHg7XG59XG4uY2xzLWRpdnBheW1lbnRcbntcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4XG59XG4uY2xzLW1pbmhlaWdodFxue1xuICAtLW1pbi1oZWlnaHQ6IDQ4cHg7XG59XG5wIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cbi5pbWdjYXJkXG57XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDEyLjhweDtcbn1cbi5pb24taXRlbVxue1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgLS1taW4taGVpZ2h0OiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuLmltZ2NhcmRcbntcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMTIuOHB4O1xufVxuLnRleHQtaW5mb2JhbmtcbiAgICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ2cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cbiAgICAubWw4XG4gICAge1xuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICB9XG4gICAgLmJ1dHRvbjJcbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgfSBcbiAgICBwIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gICAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xuICAgIH1cbiAgICAuaW1nLXBheW9vXG4gICAge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgICAuaW1nY2FyZFxue1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAxMi44cHg7XG59XG4udGV4dC1pbmZvYmFua1xuICAgIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNDZweDtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgfVxuICAgIC5tbDhcbiAgICB7XG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIH1cbiAgICAubGFiZWwtaW5wdXR7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cbiAgICAuaW9uLWNoZWNrYm94e1xuICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBtYXJnaW46IC0ycHg7XG4gICAgfVxuICAgIC5pb24taXRlbTFcbiAgICB7XG4gICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICAgIH1cbiAgICAuaW1nLXZpc2FcbiAgICB7XG4gICAgICB3aWR0aDogMTE4cHg7XG4gICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgICAuaW1nLXZpc2FcbiAgICB7XG4gICAgICB3aWR0aDogMTE4cHg7XG4gICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgICBcbiAgICBcblxuXG5cbiIsIi50ZXh0LW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnRleHQtbmFtZSAudGV4dC1ncmVlbiB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuXG4udGV4dC1kYXRlIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaW1hZ2UtY2FyZCB7XG4gIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcbn1cblxuLnRvdGFsLXByaWNlIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idXR0b24yIHtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uaXRlbS1tZCBpb24tdGh1bWJuYWlsIGlvbi1pbWcsIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IDEwNHB4O1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuXG4uaXRlbS5pdGVtLW1kIC5jaGVja2JveC1tZCB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDlweCA5cHggOXB4IDRweDtcbn1cblxuLnRleHQtcm9vbS1wcmljZS1vdGEge1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIG1hcmdpbjogMjBweDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi50b29sYmFyLXRpdGxlLW1kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG59XG5cbi5kaXYtd3JhcGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgd2lkdGg6IDEwNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmhyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDI4N3B4KSBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcbiAgLmNvbC1kZXNjcmlwdGlvbi1yb29tcGF5bWVudCB7XG4gICAgbWF4LXdpZHRoOiAxODhweDtcbiAgICBsZWZ0OiAxMnB4O1xuICB9XG59XG4uY2xzLWhyIHtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMiAhaW1wb3J0YW50O1xufVxuXG4uY2xzLWxpc3Qge1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbi5jbHMtcm93aGVpZ2h0IHtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uY2xzLWRpdnBheW1lbnQge1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG59XG5cbi5jbHMtbWluaGVpZ2h0IHtcbiAgLS1taW4taGVpZ2h0OiA0OHB4O1xufVxuXG5wIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cblxuLmltZ2NhcmQge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAxMi44cHg7XG59XG5cbi5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICAtLW1pbi1oZWlnaHQ6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG59XG5cbi5pbWdjYXJkIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMTIuOHB4O1xufVxuXG4udGV4dC1pbmZvYmFuayB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ2cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4ubWw4IHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmJ1dHRvbjIge1xuICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICB3aWR0aDogOTAlO1xufVxuXG5wIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cblxuLmltZy1wYXlvbyB7XG4gIHdpZHRoOiA0MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uaW1nY2FyZCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDEyLjhweDtcbn1cblxuLnRleHQtaW5mb2Jhbmsge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40NnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLm1sOCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5sYWJlbC1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5pb24tY2hlY2tib3gge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IC0ycHg7XG59XG5cbi5pb24taXRlbTEge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xufVxuXG4uaW1nLXZpc2Ege1xuICB3aWR0aDogMTE4cHg7XG4gIGhlaWdodDogMjJweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmltZy12aXNhIHtcbiAgd2lkdGg6IDExOHB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/roompaymentselect-ean/roompaymentselect-ean.ts":
/*!****************************************************************!*\
  !*** ./src/app/roompaymentselect-ean/roompaymentselect-ean.ts ***!
  \****************************************************************/
/*! exports provided: RoompaymentselectEanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoompaymentselectEanPage", function() { return RoompaymentselectEanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/auth-service */ "./src/app/providers/auth-service.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
/* harmony import */ var _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../providers/bizTravelService */ "./src/app/providers/bizTravelService.ts");













let RoompaymentselectEanPage = class RoompaymentselectEanPage {
    constructor(platform, searchhotel, bookcombo, navCtrl, Roomif, storage, booking1, booking, authService, modalCtrl, loadingCtrl, gf, zone, router, safariViewController, toastCtrl, alertCtrl, bizTravelService) {
        this.platform = platform;
        this.searchhotel = searchhotel;
        this.bookcombo = bookcombo;
        this.navCtrl = navCtrl;
        this.Roomif = Roomif;
        this.storage = storage;
        this.booking1 = booking1;
        this.booking = booking;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.gf = gf;
        this.zone = zone;
        this.router = router;
        this.safariViewController = safariViewController;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.bizTravelService = bizTravelService;
        this.textage = "";
        this.ischeckvisa = false;
        this.bookingCode = "";
        this.arrbankrmb = [];
        this.isbtn = false;
        this.isremember = true;
        this.isdisable = false;
        this.isshowRemember = false;
        this.Avatar = Roomif.imgHotel;
        this.Name = booking.HotelName;
        this.Address = Roomif.Address;
        this.cin = booking.CheckInDate;
        this.cout = booking.CheckOutDate;
        this.dur = Roomif.dur;
        this.roomnumber = Roomif.roomnumber;
        this.adults = booking.Adults;
        this.children = booking.Child;
        this.roomtype = Roomif.roomtype;
        this.indexme = booking.indexmealtype;
        this.indexroom = booking.indexroom;
        this.jsonroom = Roomif.jsonroom;
        this.room = Roomif.arrroom;
        var chuoicin = this.cin.split('-');
        var chuoicout = this.cout.split('-');
        this.cin = chuoicin[2] + "-" + chuoicin[1] + "-" + chuoicin[0];
        this.cout = chuoicout[2] + "-" + chuoicout[1] + "-" + chuoicout[0];
        this.nameroom = this.room[0].ClassName;
        this.roomcancel = this.room[0].MealTypeRates[this.indexme];
        this.breakfast = this.room[0].MealTypeRates[this.indexme].Name;
        this.PriceAvgPlusTAStr = this.roomtype.PriceAvgPlusTAStr;
        this.checkpayment = Roomif.payment;
        this.arrchild = this.searchhotel.arrchild;
        if (this.arrchild) {
            for (let i = 0; i < this.arrchild.length; i++) {
                if (i == this.arrchild.length - 1) {
                    this.textage = this.textage + this.arrchild[i].numage;
                }
                else {
                    this.textage = this.textage + this.arrchild[i].numage + ",";
                }
            }
        }
        if (this.textage) {
            this.textage = "(" + this.textage + ")";
        }
        if (Roomif.priceshow) {
            this.priceshow = Roomif.priceshow;
        }
        else {
            this.priceshow = this.PriceAvgPlusTAStr;
        }
        this.totalPrice = this.priceshow.toString().replace(/\./g, '').replace(/\,/g, '');
        this.searchhotel.backPage = "roompaymentselect-ean";
        this.searchhotel.rootPage = "roompaymentselect-ean";
        this.storage.get('auth_token').then(auth_token => {
            this.auth_token = auth_token;
        });
        this.storage.get('jti').then(jti => {
            if (jti) {
                this.jti = jti;
                this.isshowRemember = true;
                this.GeTokensOfMember(0);
            }
            else {
                this.isremember = false;
            }
        });
        this.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                let text = "Bearer " + auth_token;
                let headers = {
                    'cache-control': 'no-cache',
                    'content-type': 'application/json',
                    authorization: text
                };
                this.gf.RequestApi('GET', _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo', headers, {}, 'flightcombopaymentselect', 'initpage').then((data) => {
                    if (data && data.bizAccount) {
                        this.zone.run(() => {
                            this.bizTravelService.bizAccount = data.bizAccount;
                            this.bizTravelService.isCompany = true;
                        });
                    }
                    else {
                        this.bizTravelService.isCompany = false;
                    }
                });
            }
            else {
                this.bizTravelService.isCompany = false;
            }
        });
        gf.googleAnalytion('roompaymentselect-ean', 'load', '');
        _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writePaymentLog("hotel", "paymentselect", "purchase", this.bookingCode);
    }
    ngOnInit() {
    }
    roompaymentbank() {
        clearInterval(this.Roomif.setInter);
        this.clearClonePage('page-roompaymentbank');
        this.navCtrl.navigateForward("/roompaymentbanknew");
        this.gf.googleAnalytion('roompaymentselect-ean', 'roompaymentbankselect', '');
    }
    roompaymentlive() {
        clearInterval(this.Roomif.setInter);
        this.clearClonePage('page-roompaymentlive');
        this.navCtrl.navigateForward("/roompaymentlive/0");
        this.gf.googleAnalytion('roompaymentselect-ean', 'roompaymentliveselect', '');
    }
    roompaymentatm() {
        this.navCtrl.navigateForward("/roomchoosebank/0");
        this.gf.googleAnalytion('roompaymentselect-ean', 'roompaymentatmselect', '');
    }
    roompaymentvisa() {
        var se = this;
        if (se.booking.CEmail) {
            if (this.arrbankrmb.length == 0) {
                this.GeTokensOfMember(1);
            }
        }
        else {
            se.presentToastr('Email không hợp lệ. Vui lòng kiểm tra lại.');
        }
    }
    roompaymentpayoolive() {
        this.CreateBooking('payoo_store');
    }
    roompaymentpayooqr() {
        this.CreateBooking('payoo_qr');
    }
    roompaymentmomo() {
        this.CreateBooking('momo');
    }
    GeTokensOfMember(stt) {
        var se = this;
        se.gf.GeTokensOfMember(se.jti).then(dataTokens => {
            if (dataTokens) {
                dataTokens = JSON.parse(dataTokens);
                if (dataTokens.tokens.length > 0) {
                    this.arrbankrmb = [];
                    for (let i = 0; i < dataTokens.tokens.length; i++) {
                        if (dataTokens.tokens[i].vpc_Card == 'VC' || dataTokens.tokens[i].vpc_Card == 'MC' || dataTokens.tokens[i].vpc_Card == 'JC' || dataTokens.tokens[i].vpc_Card == 'AE') {
                            var vpc_CardNum = dataTokens.tokens[i].vpc_CardNum.split('xxx');
                            vpc_CardNum = vpc_CardNum[1];
                            var cardname = this.getCardName(dataTokens.tokens[i].vpc_Card);
                            var item = { id: dataTokens.tokens[i].id, imgbank: 'https://res.ivivu.com/payment/img/onepay/' + dataTokens.tokens[i].vpc_Card + '.png', vpc_CardNum: vpc_CardNum, name_Bank: cardname, checked: false };
                            this.arrbankrmb.push(item);
                        }
                    }
                    if (this.arrbankrmb.length > 0) {
                        this.arrbankrmb[0].checked = true;
                        this.tokenid = this.arrbankrmb[0].id;
                        this.isbtn = true;
                        this.ischeckvisa = true;
                        this.isdisable = true;
                    }
                }
            }
            if (stt == 1) {
                if (this.arrbankrmb.length > 0) {
                    this.ischeckvisa = true;
                }
                else {
                    this.CreateBooking('visa');
                }
            }
        });
    }
    getCardName(text) {
        var cardStr = "";
        switch (text) {
            case "MC":
                cardStr = "Mastercard";
                break;
            case "VC":
                cardStr = "Visacard";
                break;
            case "JC":
                cardStr = "JCBCard";
                break;
            case "AE":
                cardStr = "AECard";
        }
        return cardStr;
    }
    refreshToken() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlMobile + '/api/Account/reloadTokenClaims',
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                };
                requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "roompaymentselect-ean",
                            func: "refreshToken",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "roompaymentselect-ean";
                        error.func = "refreshToken";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(error, response);
                    }
                    else {
                        var au = JSON.parse(body);
                        se.zone.run(() => {
                            se.storage.remove('auth_token');
                            se.storage.set('auth_token', au.auth_token);
                            var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_9___default()(au.auth_token);
                            se.storage.remove('point');
                            se.storage.set('point', decoded.point);
                        });
                    }
                });
            }
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
                            se.showInfo("Điểm tích luỹ " + se.Roomif.point + " đã được dùng cho booking " + se.bookingCode + ".Xin vui lòng thao tác lại booking!");
                        }
                        if (se.Roomif.promocode && se.bookingCode) {
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
    callCheckBooking(countCheck) {
        var se = this;
        console.log(countCheck);
        if (countCheck < 5) {
            se.checkBookingStatus().then((data) => {
                if (data) {
                    se.checkdone(data.id);
                }
                else {
                    setTimeout(() => {
                        countCheck++;
                        se.callCheckBooking(countCheck);
                    }, 5000);
                }
            });
        }
        else {
            alert("Hiện tại, giao dịch của bạn hết hiệu lực, xin vui lòng quay lại trang Thông tin Khách Sạn!");
            se.loader.dismiss();
            se.searchhotel.backPage = "roompaymentselect";
            se.navCtrl.navigateBack('/hoteldetail/' + se.booking.HotelId);
        }
    }
    checkdone(id) {
        var se = this;
        se.loader.dismiss();
        se.Roomif.priceshowtt = se.priceshow;
        se.navCtrl.navigateForward('/roompaymentdoneean/' + id + '/' + se.priceshow + '/' + '0');
    }
    checkBookingStatus() {
        var se = this;
        return new Promise((resolve, reject) => {
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlPost + '/mCheckBooking',
                qs: { code: se.book.code },
                headers: {}
            };
            requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                if (response.statusCode != 200) {
                    var objError = {
                        page: "roomchoosebank",
                        func: "roomchoosebank-mCheckBooking",
                        message: response.statusMessage,
                        content: response.body,
                        type: "warning",
                        param: JSON.stringify(options)
                    };
                    _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(objError, response);
                }
                if (error) {
                    error.page = "roomchoosebank";
                    error.func = "roomchoosebank-mCheckBooking";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(error, response);
                }
                ;
                if (body) {
                    var rs = JSON.parse(body);
                    if (rs.StatusBooking == 3) {
                        var data = {
                            id: rs.BookingCode
                        };
                        resolve(data);
                    }
                    else {
                        resolve(false);
                    }
                }
                else {
                    error.page = "roomchoosebank";
                    error.func = "next";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(error, response);
                    se.loader.dismiss();
                    alert("Đã có sự cố xảy ra, vui lòng thử lại!");
                }
            });
        });
    }
    roompaymentbreakdow() {
        var dur = this.dur;
        var roomnumber = this.roomnumber;
        this.clearClonePage("page-roompaymentbreakdown");
        this.navCtrl.navigateForward('/roompaymentbreakdown/' + dur + '/' + roomnumber);
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
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({});
            this.loader.present();
        });
    }
    goback() {
        clearInterval(this.intervalID);
        if ((this.Roomif.point && this.bookingCode) || (this.Roomif.promocode && this.bookingCode)) {
            this.Roomif.bookingCode = this.bookingCode;
            this.navCtrl.navigateBack('/roomdetailreview');
        }
        else {
            this.navCtrl.back();
        }
    }
    openRoomCancel() {
        this.gf.setParams(this.roomcancel, 'roomInfo');
        this.searchhotel.backPage = "roompaymentselect-ean";
        this.navCtrl.navigateForward('/roomcancel');
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
    CreateBooking(paymentType) {
        var se = this;
        se.presentLoading();
        var paymentMethod = se.gf.funcpaymentMethod(paymentType);
        this.CreateBookingRoom(paymentMethod).then(databook => {
            if (databook) {
                if (databook.error == 0) {
                    this.bookingCode = databook.code;
                    this.Roomif.bookingCode = databook.code;
                    if (this.roomtype.Supplier == 'HBED') {
                        var totalPrice = se.priceshow.toString().replace(/\./g, '').replace(/\,/g, '');
                        var url = "";
                        if (paymentType == 'visa') {
                            url = _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=visa&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' + this.Roomif.phone + '&memberId=' + se.jti + '&TokenId=' + se.tokenid + '&rememberToken=' + se.isremember + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
                        }
                        else {
                            url = _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=' + paymentType + '&source=app&amount=' + totalPrice + '&orderCode=' + databook.code + '&buyerPhone=' + this.Roomif.phone + '&memberId=' + se.jti + '&callbackUrl=ivivuapp%3A%2F%2Fapp%2Fmyapp';
                        }
                        this.gf.CreateUrl(url).then(dataBuildLink => {
                            dataBuildLink = JSON.parse(dataBuildLink);
                            if (dataBuildLink.success) {
                                if (paymentType == 'visa') {
                                    se.openWebpage(dataBuildLink.returnUrl);
                                }
                                else if (paymentType == 'payoo_store') {
                                    this.Roomif.BillingCode = dataBuildLink.payooStoreData.BillingCode;
                                    this.Roomif.PeriodPaymentDate = dataBuildLink.payooStoreData.periodPayment;
                                    if (this.loader) {
                                        this.loader.dismiss();
                                    }
                                    this.navCtrl.navigateForward('roompaymentpayoo/' + this.bookingCode + '/0');
                                }
                                else if (paymentType == 'payoo_qr') {
                                    if (dataBuildLink.success) {
                                        this.Roomif.qrimg = dataBuildLink.payooQrData.QRCodeUrl;
                                        if (this.loader) {
                                            this.loader.dismiss();
                                        }
                                        this.navCtrl.navigateForward('roompaymentpayoo/' + this.bookingCode + '/1');
                                    }
                                }
                                else if (paymentType == 'momo') {
                                    if (dataBuildLink.success) {
                                        if (this.loader) {
                                            this.loader.dismiss();
                                        }
                                        window.open(dataBuildLink.returnUrl.payUrl, '_system');
                                        this.setinterval();
                                    }
                                }
                            }
                        });
                    }
                    else if (this.roomtype.Supplier == "VINPEARL"
                        || this.roomtype.Supplier == "SMD") {
                        var totalPrice = se.priceshow.toString().replace(/\./g, '').replace(/\,/g, '');
                        var url = "";
                        if (paymentType == 'visa') {
                            url = _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=visa&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' + this.Roomif.phone + '&memberId=' + se.jti + '&TokenId=' + se.tokenid + '&rememberToken=' + se.isremember + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
                        }
                        else {
                            url = _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=' + paymentType + '&source=app&amount=' + totalPrice + '&orderCode=' + databook.code + '&buyerPhone=' + this.Roomif.phone + '&memberId=' + se.jti + '&callbackUrl=ivivuapp%3A%2F%2Fapp%2Fmyapp';
                        }
                        this.gf.CreateUrl(url).then(dataBuildLink => {
                            dataBuildLink = JSON.parse(dataBuildLink);
                            if (dataBuildLink.success) {
                                if (paymentType == 'visa') {
                                    se.openWebpage(dataBuildLink.returnUrl);
                                }
                                else if (paymentType == 'payoo_store') {
                                    this.Roomif.BillingCode = dataBuildLink.payooStoreData.BillingCode;
                                    this.Roomif.PeriodPaymentDate = dataBuildLink.payooStoreData.periodPayment;
                                    if (this.loader) {
                                        this.loader.dismiss();
                                    }
                                    this.navCtrl.navigateForward('roompaymentpayoo/' + this.bookingCode + '/0');
                                }
                                else if (paymentType == 'payoo_qr') {
                                    if (dataBuildLink.success) {
                                        this.Roomif.qrimg = dataBuildLink.payooQrData.QRCodeUrl;
                                        if (this.loader) {
                                            this.loader.dismiss();
                                        }
                                        this.navCtrl.navigateForward('roompaymentpayoo/' + this.bookingCode + '/1');
                                    }
                                }
                                else if (paymentType == 'momo') {
                                    if (dataBuildLink.success) {
                                        if (this.loader) {
                                            this.loader.dismiss();
                                        }
                                        window.open(dataBuildLink.returnUrl.payUrl, '_system');
                                        this.setinterval();
                                    }
                                }
                            }
                        });
                    }
                    else {
                        se.gf.checkroomEAN(this.bookingCode).then(data => {
                            if (data == '0') {
                                var totalPrice = se.priceshow.toString().replace(/\./g, '').replace(/\,/g, '');
                                var url = "";
                                if (paymentType == 'visa') {
                                    url = _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=visa&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' + this.Roomif.phone + '&memberId=' + se.jti + '&TokenId=' + se.tokenid + '&rememberToken=' + se.isremember + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
                                }
                                else {
                                    url = _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=' + paymentType + '&source=app&amount=' + totalPrice + '&orderCode=' + databook.code + '&buyerPhone=' + this.Roomif.phone + '&memberId=' + se.jti + '&callbackUrl=ivivuapp%3A%2F%2Fapp%2Fmyapp';
                                }
                                this.gf.CreateUrl(url).then(dataBuildLink => {
                                    dataBuildLink = JSON.parse(dataBuildLink);
                                    if (dataBuildLink.success) {
                                        if (paymentType == 'visa') {
                                            se.openWebpage(dataBuildLink.returnUrl);
                                        }
                                        else if (paymentType == 'payoo_store') {
                                            this.Roomif.BillingCode = dataBuildLink.payooStoreData.BillingCode;
                                            this.Roomif.PeriodPaymentDate = dataBuildLink.payooStoreData.periodPayment;
                                            if (this.loader) {
                                                this.loader.dismiss();
                                            }
                                            this.navCtrl.navigateForward('roompaymentpayoo/' + this.bookingCode + '/0');
                                        }
                                        else if (paymentType == 'payoo_qr') {
                                            if (dataBuildLink.success) {
                                                this.Roomif.qrimg = dataBuildLink.payooQrData.QRCodeUrl;
                                                if (this.loader) {
                                                    this.loader.dismiss();
                                                }
                                                this.navCtrl.navigateForward('roompaymentpayoo/' + this.bookingCode + '/1');
                                            }
                                        }
                                        else if (paymentType == 'momo') {
                                            if (dataBuildLink.success) {
                                                if (this.loader) {
                                                    this.loader.dismiss();
                                                }
                                                window.open(dataBuildLink.returnUrl.payUrl, '_system');
                                                this.setinterval();
                                            }
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
                }
                else {
                    if (se.loader) {
                        se.loader.dismiss();
                    }
                    alert(databook.Msg);
                    if (this.Roomif.point && this.Roomif.bookingCode) {
                        this.navCtrl.navigateBack('/roomdetailreview');
                    }
                    if (this.Roomif.promocode && this.Roomif.bookingCode) {
                        this.navCtrl.navigateBack('/roomdetailreview');
                    }
                }
            }
            else {
                if (se.loader) {
                    se.loader.dismiss();
                }
                alert("Đã có sự cố xảy ra, vui lòng thử lại!");
            }
        });
    }
    CreateBookingRoom(paymentMethod) {
        var Invoice = 0;
        this.timestamp = Date.now();
        this.jsonroom.RoomClasses = this.room;
        if (this.Roomif.order) {
            Invoice = 1;
        }
        return new Promise((resolve, reject) => {
            var options = {
                method: 'POST',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlPost + '/mInsertBooking',
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
                    paymentMethod: paymentMethod,
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
                    comboid: this.bookcombo.ComboId,
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
                    _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(objError, response);
                }
                if (error) {
                    error.page = "roompaymentselect";
                    error.func = "roompaymentvisa";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(error, response);
                }
                ;
                if (body) {
                    resolve(body);
                }
            });
        });
    }
    setinterval() {
        clearInterval(this.intervalID);
        this.intervalID = setInterval(() => {
            this.checkPayment();
        }, 1000 * 1);
        setTimeout(() => {
            clearInterval(this.intervalID);
        }, 60000 * 15);
    }
    checkPayment() {
        var se = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlPost + '/mCheckBooking',
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
                _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "roompaymentselect";
                error.func = "openWebpage";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(error, response);
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
                    clearInterval(se.intervalID);
                    if (se.safariViewController) {
                        se.safariViewController.hide();
                    }
                    if (se.loader) {
                        se.loader.dismiss();
                    }
                    se.navCtrl.navigateForward('/roompaymentdoneean/' + id + '/' + total + '/' + ischeck);
                }
                else if (rs.StatusBooking == 9 || rs.StatusBooking == 2) {
                    if (se.loader) {
                        se.loader.dismiss();
                    }
                    if (se.safariViewController) {
                        se.safariViewController.hide();
                    }
                    clearInterval(se.intervalID);
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
                _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(error, response);
                se.loader.dismiss();
                alert("Đã có sự cố xảy ra, vui lòng thử lại!");
            }
        });
    }
    next() {
        this.CreateBooking('visa');
    }
    chooseacc(item) {
        this.tokenid = item.id;
        this.isbtn = true;
        this.isdisable = true;
        this.isremember = true;
    }
    nochooseacc() {
        this.tokenid = "";
        this.isbtn = true;
        this.isdisable = false;
        this.isremember = true;
    }
    rememberCard() {
        this.isremember = !this.isremember;
    }
    paymentbiztravel() {
        if (this.bizTravelService.bizAccount.balanceAvaiable - this.totalPrice * 1 <= 0) {
            return;
        }
        this.gf.showLoading();
        this.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var headers = {
                    'cache-control': 'no-cache',
                    'content-type': 'application/json',
                    authorization: text
                };
                var params = { memberid: this.jti, totalprice: this.priceshow.toString().replace(/\./g, '').replace(/\,/g, '') };
                this.gf.checkAcceptBizCredit('POST', _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/CheckAcceptBizCredit', headers, params, 'companyinfo', 'GetBizTransactions').then((data) => {
                    if (data && data.error == 0) {
                        this.bizTravelService.phoneOtp = data.phoneOtp;
                        this.bizTravelService.phoneOtpShort = data.phoneOtpShort;
                        this.bizTravelService.paymentType = 2;
                        this.roomPayment();
                    }
                    else {
                        this.gf.hideLoading();
                        this.gf.showToastWarning('Account hiện tại không có quyền thanh toán. Vui lòng kiểm tra lại.');
                    }
                });
            }
            else {
                this.gf.hideLoading();
            }
        });
    }
    roomPayment() {
        let se = this;
        var url = "";
        se.CreateBookingRoom('companycredit').then(databook => {
            if (databook) {
                if (databook.error == 0) {
                    se.bookingCode = databook.code;
                    se.Roomif.bookingCode = databook.code;
                    var totalPrice = se.priceshow.toString().replace(/\./g, '').replace(/\,/g, '');
                    url = _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=companycredit&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' + se.Roomif.phone + '&memberId=' + se.jti + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
                    se.gf.CreateUrl(url).then(dataBuildLink => {
                        dataBuildLink = JSON.parse(dataBuildLink);
                        se.gf.hideLoading();
                        if (dataBuildLink.success) {
                            se.bizTravelService.routeBackWhenCancel = 'roomdetailreview';
                            se.bizTravelService.mytripPaymentBookingCode = se.bookingCode;
                            se.navCtrl.navigateForward('confirmpayment');
                        }
                        else {
                            alert("Đã có sự cố xảy ra, vui lòng thử lại!");
                        }
                    });
                }
                else {
                    se.gf.hideLoading();
                    alert(databook.Msg);
                    if (se.Roomif.point && se.Roomif.bookingCode) {
                        se.navCtrl.navigateBack('/roomdetailreview');
                    }
                    if (se.Roomif.promocode && se.Roomif.bookingCode) {
                        se.navCtrl.navigateBack('/roomdetailreview');
                    }
                }
            }
            else {
                se.gf.hideLoading();
                alert("Đã có sự cố xảy ra, vui lòng thử lại!");
            }
        });
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
RoompaymentselectEanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-roompaymentselect-ean',
        template: __webpack_require__(/*! ./roompaymentselect-ean.html */ "./src/app/roompaymentselect-ean/roompaymentselect-ean.html"),
        styles: [__webpack_require__(/*! ./roompaymentselect-ean.scss */ "./src/app/roompaymentselect-ean/roompaymentselect-ean.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["SearchHotel"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["Bookcombo"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["RoomInfo"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["Booking"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["Booking"], _providers_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_8__["GlobalFunction"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_11__["SafariViewController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_12__["BizTravelService"]])
], RoompaymentselectEanPage);



/***/ })

}]);
//# sourceMappingURL=roompaymentselect-ean-roompaymentselect-ean-module.js.map