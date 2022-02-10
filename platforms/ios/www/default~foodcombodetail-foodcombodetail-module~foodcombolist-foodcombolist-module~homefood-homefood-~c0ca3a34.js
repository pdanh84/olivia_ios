(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~foodcombodetail-foodcombodetail-module~foodcombolist-foodcombolist-module~homefood-homefood-~c0ca3a34"],{

/***/ "./src/app/fooditem/fooditem.module.ts":
/*!*********************************************!*\
  !*** ./src/app/fooditem/fooditem.module.ts ***!
  \*********************************************/
/*! exports provided: FoodItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodItemPageModule", function() { return FoodItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fooditem_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fooditem.page */ "./src/app/fooditem/fooditem.page.ts");
/* harmony import */ var ionic_image_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-image-loader */ "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");







let FoodItemPageModule = class FoodItemPageModule {
};
FoodItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ionic_image_loader__WEBPACK_IMPORTED_MODULE_6__["IonicImageLoader"]
        ],
        declarations: [_fooditem_page__WEBPACK_IMPORTED_MODULE_5__["FoodItemPage"]],
        exports: [_fooditem_page__WEBPACK_IMPORTED_MODULE_5__["FoodItemPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FoodItemPageModule);



/***/ }),

/***/ "./src/app/fooditem/fooditem.page.html":
/*!*********************************************!*\
  !*** ./src/app/fooditem/fooditem.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n          <div class=\"div-img\">\r\n            <!-- <img class=\"img-item\" src=\"{{item.image}}\"> -->\r\n            <img-loader class=\"img-item\" [src]=\"item.image\" backgroundSize=\"cover\" spinner=\"true\" ></img-loader>\r\n          </div>\r\n          <div *ngIf=\"item.promoTitle\" class=\"float-promo\">\r\n              <div>{{item.promoTitle}}</div>\r\n            </div>\r\n          <div class=\"p-l-8\"> \r\n            <div class=\"d-flex\">\r\n              <div class=\"text-catname\">{{item.name}}</div>\r\n              <div class=\"div-star\">\r\n                <img *ngIf=\"item.typePriceId == 1\" src=\"../../assets/star/ic_star_1.svg\">\r\n                <img *ngIf=\"item.typePriceId == 2\" src=\"../../assets/star/ic_star_2.svg\">\r\n                <img *ngIf=\"item.typePriceId == 3\" src=\"../../assets/star/ic_star_3.svg\">\r\n              </div>\r\n            </div>\r\n            <div class=\"div-point\">\r\n              <div class=\"d-flex\" *ngIf=\"item.avgPoint > 0 else noPoint\" [ngClass]=\"item.avgPoint ? 'p-bottom-12' : ''\">\r\n                  <div class=\"div-badge\">{{item.avgPoint}}</div>\r\n                  <div class=\"div-text-point text-point\" *ngIf=\"item.avgPoint >=9\">Tuyệt vời</div>\r\n                  <div class=\"div-text-point text-point\" *ngIf=\"item.avgPoint >=8 && item.avgPoint <9\">Rất tốt</div>\r\n                  <div class=\"div-text-point text-point\" *ngIf=\"item.avgPoint >=7 && item.avgPoint <8\">Khá tốt</div>\r\n                  <div class=\"div-text-point text-point\" *ngIf=\"item.avgPoint >=6 && item.avgPoint <7\">Tạm được</div>\r\n                  <div class=\"div-text-point text-point\" *ngIf=\"item.avgpoint >= 5 && item.avgpoint <6\">Không tốt</div>\r\n                  <div class=\"text-recommend text-poin\"> |<span class=\"p-left-8\">{{item.numOfReview}} đánh giá</span></div>\r\n      \r\n              </div>\r\n              <ng-template #noPoint>\r\n              </ng-template>\r\n              \r\n              <div class=\"div-chef\" *ngIf=\"item.chef\">\r\n                <div class=\"chef-avatar\">\r\n                  <img class=\"img-chef\" [src]=\"item.avatarChef\" *ngIf=\"item.avatarChef else noavatar\">\r\n                  <ng-template #noavatar><img class=\"img-chef no-img-background\" src=\"https://beta-olivia.ivivu.com/upload/avatar/avatar-default-white.png\"></ng-template>\r\n                </div>\r\n                <div class=\"chef-desc\">\r\n                    <!-- <div class=\"chef-name\" *ngIf=\"item.categoryTypeId != -2\">{{item.chef}}</div> -->\r\n                    <div class=\"chef-name\" *ngIf=\"(item && item.categoryTypeId != -2) else namecollection\">{{item.chef}}</div>\r\n                    <ng-template #namecollection>\r\n                        <div class=\"chef-name\" [innerHTML]=\"item.name\"></div>\r\n                    </ng-template>\r\n                    <div class=\"chef-office\">{{item.restaurent}}</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"div-price\">\r\n                <div class=\"hot-deal\" *ngIf='item.totalBook24H'>\r\n                  <div>{{item.totalBook24H}} Khách đặt trong 24h qua</div>\r\n                </div>\r\n                <div class=\"text-price\">\r\n                  <div class=\"text-sub-price\">1 tuần chỉ</div>\r\n                  <div>{{item.priceDisplay}} <span class=\"s-text\">đ</span></div>\r\n                 \r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n     "

/***/ }),

/***/ "./src/app/fooditem/fooditem.page.scss":
/*!*********************************************!*\
  !*** ./src/app/fooditem/fooditem.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".p-l-8 {\n  padding-left: 8px;\n  height: auto;\n}\n\n.p-left-8 {\n  padding-left: 8px;\n}\n\n.text-normal {\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 21px;\n  padding-bottom: 8px;\n  color: #828282;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.d-flex .div-star {\n  padding-left: 8px;\n  display: table-cell;\n  align-self: center;\n}\n\n.div-img {\n  width: 100%;\n  height: 202px;\n  position: relative;\n}\n\n.img-item {\n  height: 202px !important;\n  width: 100% !important;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px 4px 0 0;\n  position: absolute;\n}\n\nimg-loader > img {\n  height: 202px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px 4px 0 0;\n  position: absolute;\n}\n\n.no-img-background {\n  background: #bdbdbd;\n}\n\n.float-promo {\n  position: absolute;\n  top: 24px;\n  left: -6px;\n  background-color: #e52822;\n  color: #fff;\n  font-size: 12px;\n  max-width: 95%;\n  height: 22px;\n  padding: 3px 12px 0px 13px;\n  z-index: 11;\n}\n\n.float-promo:after {\n  content: \" \";\n  position: absolute;\n  left: 0px;\n  top: 22px;\n  border-top: 6px solid #851f1c;\n  border-left: 6px solid transparent;\n  border-bottom: none;\n}\n\n.text-catname {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 24px;\n  margin: 8px 0;\n}\n\n.div-point {\n  position: relative;\n  padding-bottom: 8px;\n}\n\n.div-point .d-flex {\n  display: flex;\n}\n\n.div-point .d-flex .text-recommend {\n  padding-left: 8px;\n  font-size: 12px;\n  color: #333333;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n}\n\n.div-point .div-badge {\n  width: 32px;\n  height: 20px;\n  border-radius: 6px;\n  background-color: #a0c245;\n  color: #fff;\n  text-align: center;\n  padding-top: 1px;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.div-point .div-text-point {\n  padding-left: 8px;\n}\n\n.div-point .text-point {\n  font-size: 12px;\n  color: #333333;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n}\n\n.div-point .p-bottom-12 {\n  padding-bottom: 12px;\n}\n\n.div-point .div-chef {\n  display: flex;\n}\n\n.div-point .div-chef .chef-avatar .img-chef {\n  width: 48px;\n  height: 48px;\n  -o-object-fit: fill;\n     object-fit: fill;\n  border-radius: 48px;\n}\n\n.div-point .div-chef .chef-desc {\n  display: flex;\n  flex-direction: column;\n  padding-left: 8px;\n  justify-content: center;\n}\n\n.div-point .div-chef .chef-desc .chef-name {\n  font-size: 12px;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n}\n\n.div-point .div-chef .chef-desc .chef-office {\n  font-size: 12px;\n  color: #828282;\n  line-height: 21px;\n  letter-spacing: -0.34px;\n  font-weight: 300;\n}\n\n.div-point .div-chef .chef-desc .text-restanrant-name {\n  font-size: 12px;\n  color: #828282;\n  line-height: 14px;\n  letter-spacing: -0.24px;\n  font-weight: 600;\n}\n\n.div-point .div-price {\n  display: flex;\n  width: 100%;\n}\n\n.div-point .div-price .hot-deal {\n  width: 100%;\n  font-size: 12px;\n  letter-spacing: -0.24px;\n  line-height: 20px;\n  color: #e52822;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n\n.div-point .div-price .text-price {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  text-align: right;\n  font-size: 27px;\n  letter-spacing: -0.27px;\n  color: #26bed6;\n  font-weight: 600;\n  padding-right: 8px;\n}\n\n.div-point .div-price .text-price .s-text {\n  font-size: 12px;\n  letter-spacing: -0.36px;\n  color: #26bed6;\n}\n\n.div-point .div-price .text-price .text-sub-price {\n  font-size: 13px;\n  line-height: 18px;\n  color: #4f4f4f;\n  text-align: right;\n  margin-bottom: -6px;\n  font-weight: 300;\n}\n\n@media (min-width: 768px) and (max-width: 1600px) {\n  .div-img {\n    height: 360px !important;\n  }\n\n  .img-item {\n    height: 360px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL2Zvb2RpdGVtL2Zvb2RpdGVtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9vZGl0ZW0vZm9vZGl0ZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FDQVI7O0FERUk7RUFDSSxpQkFBQTtBQ0NSOztBRENJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNFUjs7QURBSTtFQUNJLGFBQUE7QUNHUjs7QURGUTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0laOztBREFRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0daOztBRERRO0VBQ0ksd0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDSVo7O0FERlE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDS1o7O0FESFE7RUFDSSxtQkFBQTtBQ01aOztBREpRO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ09aOztBRExRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7QUNRWjs7QUROUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ1NaOztBRE5RO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ1NaOztBRFJZO0VBQ0ksYUFBQTtBQ1VoQjs7QURSZ0I7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ1VwQjs7QURQWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDU2hCOztBRE5ZO0VBQ0ksaUJBQUE7QUNRaEI7O0FETFk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNPaEI7O0FETFk7RUFDSSxvQkFBQTtBQ09oQjs7QURKWTtFQUNJLGFBQUE7QUNNaEI7O0FESG9CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtLQUFBLGdCQUFBO0VBQ0EsbUJBQUE7QUNLeEI7O0FERmdCO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ0lwQjs7QURGb0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ0l4Qjs7QURGb0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0l4Qjs7QURGb0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0l4Qjs7QURFWTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDQWhCOztBREVnQjtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQ0FwQjs7QURFZ0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RwQjs7QURHb0I7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDRHhCOztBREdvQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNEeEI7O0FET1E7RUFDSTtJQUNJLHdCQUFBO0VDSmQ7O0VETVU7SUFDSSx3QkFBQTtFQ0hkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mb29kaXRlbS9mb29kaXRlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5wLWwtOHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAucC1sZWZ0LTh7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICB9XHJcbiAgICAudGV4dC1ub3JtYWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgIH1cclxuICAgIC5kLWZsZXh7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAuZGl2LXN0YXJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICAgICAuZGl2LWltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjAycHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltZy1pdGVtIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nLWxvYWRlciA+IGltZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjAycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5vLWltZy1iYWNrZ3JvdW5ke1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmRiZGJkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmxvYXQtcHJvbW97XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAyNHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAtNnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUyODIyO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggMTJweCAwcHggMTNweDtcclxuICAgICAgICAgICAgei1pbmRleDogMTE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLmZsb2F0LXByb21vOmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDIycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCAjODUxZjFjO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0LWNhdG5hbWV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGl2LXBvaW50e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgIC5kLWZsZXh7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAgICAgICAgIC50ZXh0LXJlY29tbWVuZHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRpdi1iYWRnZXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EwYzI0NTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kaXYtdGV4dC1wb2ludHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGV4dC1wb2ludHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucC1ib3R0b20tMTJ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmRpdi1jaGVme1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgICAgICAuY2hlZi1hdmF0YXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgLmltZy1jaGVme1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBmaWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jaGVmLWRlc2N7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2hlZi1uYW1le1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNoZWYtb2ZmaWNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0LXJlc3RhbnJhbnQtbmFtZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGl2LXByaWNle1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIC5ob3QtZGVhbHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlNTI4MjI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGV4dC1wcmljZXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjdweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnMtdGV4dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0LXN1Yi1wcmljZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0ZjRmNGY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1heC13aWR0aDogMTYwMHB4KSAge1xyXG4gICAgICAgICAgICAuZGl2LWltZ3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzYwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW1nLWl0ZW17XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IiwiLnAtbC04IHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnAtbGVmdC04IHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbi50ZXh0LW5vcm1hbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4uZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kLWZsZXggLmRpdi1zdGFyIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmRpdi1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaW1nLWl0ZW0ge1xuICBoZWlnaHQ6IDIwMnB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5pbWctbG9hZGVyID4gaW1nIHtcbiAgaGVpZ2h0OiAyMDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubm8taW1nLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjYmRiZGJkO1xufVxuXG4uZmxvYXQtcHJvbW8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjRweDtcbiAgbGVmdDogLTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MjgyMjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWF4LXdpZHRoOiA5NSU7XG4gIGhlaWdodDogMjJweDtcbiAgcGFkZGluZzogM3B4IDEycHggMHB4IDEzcHg7XG4gIHotaW5kZXg6IDExO1xufVxuXG4uZmxvYXQtcHJvbW86YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMjJweDtcbiAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICM4NTFmMWM7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi50ZXh0LWNhdG5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW46IDhweCAwO1xufVxuXG4uZGl2LXBvaW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuLmRpdi1wb2ludCAuZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kaXYtcG9pbnQgLmQtZmxleCAudGV4dC1yZWNvbW1lbmQge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzMzMzMzMztcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xufVxuLmRpdi1wb2ludCAuZGl2LWJhZGdlIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBjMjQ1O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uZGl2LXBvaW50IC5kaXYtdGV4dC1wb2ludCB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuLmRpdi1wb2ludCAudGV4dC1wb2ludCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcbn1cbi5kaXYtcG9pbnQgLnAtYm90dG9tLTEyIHtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG59XG4uZGl2LXBvaW50IC5kaXYtY2hlZiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZGl2LXBvaW50IC5kaXYtY2hlZiAuY2hlZi1hdmF0YXIgLmltZy1jaGVmIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgb2JqZWN0LWZpdDogZmlsbDtcbiAgYm9yZGVyLXJhZGl1czogNDhweDtcbn1cbi5kaXYtcG9pbnQgLmRpdi1jaGVmIC5jaGVmLWRlc2Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZGl2LXBvaW50IC5kaXYtY2hlZiAuY2hlZi1kZXNjIC5jaGVmLW5hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcbn1cbi5kaXYtcG9pbnQgLmRpdi1jaGVmIC5jaGVmLWRlc2MgLmNoZWYtb2ZmaWNlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmRpdi1wb2ludCAuZGl2LWNoZWYgLmNoZWYtZGVzYyAudGV4dC1yZXN0YW5yYW50LW5hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uZGl2LXBvaW50IC5kaXYtcHJpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5kaXYtcG9pbnQgLmRpdi1wcmljZSAuaG90LWRlYWwge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjZTUyODIyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmRpdi1wb2ludCAuZGl2LXByaWNlIC50ZXh0LXByaWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDI3cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yN3B4O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuLmRpdi1wb2ludCAuZGl2LXByaWNlIC50ZXh0LXByaWNlIC5zLXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNnB4O1xuICBjb2xvcjogIzI2YmVkNjtcbn1cbi5kaXYtcG9pbnQgLmRpdi1wcmljZSAudGV4dC1wcmljZSAudGV4dC1zdWItcHJpY2Uge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IC02cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAuZGl2LWltZyB7XG4gICAgaGVpZ2h0OiAzNjBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmltZy1pdGVtIHtcbiAgICBoZWlnaHQ6IDM2MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/fooditem/fooditem.page.ts":
/*!*******************************************!*\
  !*** ./src/app/fooditem/fooditem.page.ts ***!
  \*******************************************/
/*! exports provided: FoodItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodItemPage", function() { return FoodItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _providers_foodService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/foodService */ "./src/app/providers/foodService.ts");





let FoodItemPage = class FoodItemPage {
    constructor(navCtrl, gf, foodService) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.foodService = foodService;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FoodItemPage.prototype, "item", void 0);
FoodItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fooditem',
        template: __webpack_require__(/*! ./fooditem.page.html */ "./src/app/fooditem/fooditem.page.html"),
        styles: [__webpack_require__(/*! ./fooditem.page.scss */ "./src/app/fooditem/fooditem.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["GlobalFunction"],
        _providers_foodService__WEBPACK_IMPORTED_MODULE_4__["foodService"]])
], FoodItemPage);



/***/ })

}]);
//# sourceMappingURL=default~foodcombodetail-foodcombodetail-module~foodcombolist-foodcombolist-module~homefood-homefood-~c0ca3a34.js.map