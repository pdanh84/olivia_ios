(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rules-rules-module"],{

/***/ "./src/app/rules/rules.module.ts":
/*!***************************************!*\
  !*** ./src/app/rules/rules.module.ts ***!
  \***************************************/
/*! exports provided: RulesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesPageModule", function() { return RulesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rules_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rules.page */ "./src/app/rules/rules.page.ts");







const routes = [
    {
        path: '',
        component: _rules_page__WEBPACK_IMPORTED_MODULE_6__["RulesPage"]
    }
];
let RulesPageModule = class RulesPageModule {
};
RulesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_rules_page__WEBPACK_IMPORTED_MODULE_6__["RulesPage"]]
    })
], RulesPageModule);



/***/ }),

/***/ "./src/app/rules/rules.page.html":
/*!***************************************!*\
  !*** ./src/app/rules/rules.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-row>\n        <ion-col style=\"text-align: center;height: 48px;\">\n            <div style=\"align-self: center\" >\n            <div style=\"position: absolute;height: 48px;width: 48px;align-self: center;\" (click)=\"goback()\">\n                <img style=\"height: 48px; padding: 8px;margin-top: -5px;margin-left:-14px\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n              </div>\n            <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Điều khoản</label></div>\n            </div>\n        </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"rules-content\" padding>\n      <div class=\"text-head-title\">Điều kiện và điều khoản dành cho Khách hàng</div>\n      <div class=\"text-normal\">Khi thực hiện đặt phòng khách sạn, Quý Khách cần phải thỏa mãn những điều kiện sau:</div>\n      \n      <div class=\"text-title p-top-16\">1. Độ tuổi</div>\n      Quý Khách phải từ 18 tuổi trở lên mới được phép tham gia đặt phòng trên trang website.\n      \n      <div class=\"text-title p-top-16\">2. Thanh toán: </div>\n      \n      <div class=\"text-normal p-top-16\">Quý Khách thanh toán tiền đặt phòng trên trang web bằng 1 trong 2 cách sau:</div>\n      \n      <div class=\"text-normal p-top-16\">(a) Khách sạn tại Việt Nam:</div>\n      \n      <div class=\"text-normal p-top-16\">Thẻ tín dụng hay thẻ ATM: tại thời điểm Quý Khách đồng ý thanh toán tiền đặt phòng bằng thẻ tín dụng hay thẻ ATM. Tổng chi phí (thông tin đính kèm) sẽ được thông báo tại trang đặt phòng trước khi Quý Khách nhấn nút “Thanh Toán”. Đối với thẻ tín dụng, dựa trên loại tiền tệ và quốc gia phát hành thẻ của Quý Khách, nhà cung cấp thẻ sẽ tính thêm chi phí tỉ giá và các mức phí khác với sự đồng ý của Quý Khách và nhà cung cấp thẻ; hoặc</div>\n      <div class=\"text-normal p-top-8\">Tiền mặt, chuyển khoản: tại thời điểm đặt phòng, Quý Khách đồng ý thanh toán tiền phòng cho chúng tôi trên trang website bằng cách đến văn phòng iVIVU.com thanh toán tiền mặt hoặc chuyển khoản đến ngân hàng của IVIVU.com, bạn sẽ nhận được mã số xác nhận đặt phòng.</div>\n      \n      <div class=\"text-normal p-top-16\">(b) Khách sạn tại nước ngoài</div>\n      \n      <div class=\"text-normal p-top-16\">Chỉ áp dụng thẻ tín dụng: tại thời điểm Quý Khách đồng ý thanh toán tiền đặt phòng bằng thẻ của mình. Tổng chi phí (thông tin đính kèm) sẽ được thông báo tại trang đặt phòng trước khi Quý Khách nhấn nút “Thanh Toán”. Dựa trên loại tiền tệ và quốc gia phát hành thẻ của Quý Khách, nhà cung cấp thẻ sẽ tính thêm chi phí tỉ giá và các mức phí khác với sự đồng ý của Quý Khách và nhà cung cấp thẻ.</div>\n      \n      <div class=\"text-title p-top-16\">3.Xác nhận thông tin đặt phòng:</div>\n      <div class=\"text-normal p-top-8\">Những thông tin đặt phòng sẽ được xác nhận lần cuối cùng khi chúng tôi gửi email cho Quý Khách để xác nhận thông tin đặt phòng .Thông tin cụ thể như: xác nhận phương thức thanh toán sẽ được chúng tôi gửi mail xác nhận.</div>\n      <div class=\"text-normal p-top-8\">Thông tin xác nhận lần cuối cùng chính xác là lúc Quý Khách đã thực hiện thanh toán tiền đặt phòng. Ngược lại, việc đặt phòng của Quý Khách có thể bị hủy bỏ nếu Quý Khách không thực hiện thanh toán theo hạn thanh toán từ lúc đặt phòng trên trang iVIVU.com. Chúng tôi không thể chắc chắn bất kỳ thông tin đặt phòng nào cho đến khi chúng tôi gửi email xác nhận lần cuối.</div>\n      \n      <div class=\"text-title p-top-16\">4.Thực hiện thay đổi cho thông tin đặt phòng:</div>\n      <div class=\"text-normal p-top-8\">Nếu Quý Khách muốn thay đổi thông tin đặt phòng, vui lòng liên hệ Bộ phận tư vấn qua số điện thoại 1900 1870. Chúng tôi sẽ cố gắng để hỗ trợ Quý Khách một cách tốt nhất, tuy nhiên chúng tôi không đảm bảo mọi yêu cầu thay đổi sẽ được thực hiện. Xin xem những thông tin ghi chú sau:</div>\n      \n      <div class=\"text-normal p-top-8\">Những phòng đặt tại một số nhà cung cấp phòng, trong một thời điểm cụ thể, hoặc những loại phòng được đặt ở dạng đảm bảo là không thể hủy hoặc thay đổi, và những thông tin này được thể hiện trên trang đặt phòng hoặc chi tiết phòng của nhà cung cấp phòng (xem chính sách hủy phòng), quý vị nên xem thông tin này trước khi thực hiện việc đặt phòng.</div>\n      <div class=\"text-normal p-top-8\">Ngoài ra, chúng tôi cũng áp dụng 1 phí quản lý cho các yêu cầu thay đổi đặt phòng /thông tin hủy phòng được chấp nhận, (phí cộng thêm ngoài mức phí huỷ phòng của nhà cung cấp phòng), bấm vào đây để biết thêm phí quản lý.</div>\n      <div class=\"text-normal p-top-8\">Nếu việc thực hiện hủy phòng không thành công hoặc Quý Khách không thực hiện việc nhận phòng (check-in) đúng thời hạn so với đơn đặt phòng, Quý Khách sẽ phải thanh toán toàn bộ chi phí cho đơn đặt phòng đó.</div>\n      \n      <div class=\"text-title p-top-16\">5.Những yêu cầu đăng ký:</div>\n      <div class=\"text-normal p-top-8\">Chúng tôi không cung cấp thông tin chi tiết thẻ tín dụng của Quý Khách cho bất kỳ nhà cung cấp phòng nào và Quý Khách có thể được yêu cầu cung cấp thông tin có trên thẻ và chữ ký chủ thẻ tương ứng cho mục đích bảo đảm về các khoản phí phát sinh, nếu có. Người đăng ký phải từ 18 tuổi, để xác nhận thông tin khách hàng, nhân viên khách sạn sẽ yêu cầu trình bày giấy CMND hoặc hộ chiếu (passport) để đảm bảo thông tin khi đặt phòng là chính xác.</div>\n      <div class=\"text-normal p-top-8\">Ngoài ra, để hạn chế việc sử dụng thẻ tín dụng giả mạo, nhà cung cấp phòng có thể sẽ yêu cầu Quý Khách bổ sung giấy CMND hoặc hộ chiếu (passport) khi đặt phòng để xác nhận chủ thẻ. Một bản lưu của thẻ tín dụng / CMND hoặc hộ chiếu (passport) của Quý Khách cũng có thể được nhà cung cấp phòng giữ lại với mục đích loại trừ thẻ giả mạo, xác nhận nơi cấp thẻ tín dụng, trong trường hợp xảy ra sự cố. Những thông tin này có thể sẽ được nhân viên khách sạn cung cấp cho chúng tôi.</div>\n      \n      <div class=\"text-title p-top-16\">6.Thông tin trang web:</div>\n      \n      <div class=\"text-normal p-top-8\">Chúng tôi nỗ lực cam kết tất cả thông tin chính xác sẽ được hiển thị trên trang web, tuy nhiên xin lưu ý các thông tin cũng được chỉnh sửa từ nhà cung cấp phòng, do đó chúng tôi không đảm bảo được những tất cả thông tin trên là chính xác hoàn toàn hoặc không có bất kỳ lỗi nào. Chúng tôi bảo lưu quyền thay đổi thông tin hiển thị trên trang web (bao gồm Điều khoản và Điều kiện này) bất kỳ thời điểm nào mà không phải báo trước.</div>\n      \n      <div class=\"text-title p-top-16\">7.Trách nhiệm:</div>\n      \n      <div class=\"text-normal p-top-8\">Những qui định hay giới hạn được miễn trừ:</div>\n      <div class=\"text-normal p-top-8\">Chúng tôi sẽ không chịu trách nhiệm với bất kỳ thiệt hại, mất mát, trách nhiệm, khiếu nại hoặc khoản phí nào (bao gồm những nguyên nhân sau: sự bất cẩn gây hậu quả trực tiếp hay gián tiếp gây ra) được phát sinh từ trang web chúng tôi liên quan đến những sản phẩm hay những dịch vụ được thực hiện trên trang này.</div>\n      <div class=\"text-normal p-top-8\">Chúng tôi không bảo đảm hay là người đại diện cho những sản phẩm phòng ở hay dịch vụ nào trên trang web hoặc các trang kết nối. Ở đây trách nhiệm của chúng tôi chỉ cho phép thực hiện việc đặt phòng. Chúng tôi không chịu trách nhiệm với lý do không có phòng trống vì khách sạn đã cho thuê vượt quá số phòng.</div>\n      <div class=\"text-normal p-top-8\">Trường hợp khách sạn không cung cấp những dịch vụ đã được iVIVU.com thay mặt cho khách hàng đặt trước (phòng không còn trống, loại phòng không chính xác) hoặc khách hàng không nhận được dịch vụ như đã xác nhận, iVIVU.com chịu trách nhiệm phối hợp với Khách sạn để sắp xếp phòng đúng như yêu cầu đã được xác nhận. Trong trường hợp khách sạn không sắp xếp được, iVIVU chịu trách nhiệm (i) chuyển khách đến 01 (một) khách sạn khác có loại phòng và dịch vụ tương đương hoặc cao hơn; và (ii) thanh toán các chi phí phát sinh từ việc thay đổi này, bao gồm chi phí do giá phòng thay thế cao hơn so với giá phòng của khách sạn ban đầu mà khách hàng đã đặt và chi phí di chuyển đến khách sạn thay thế (nếu có). Trường hợp không có khách sạn có loại phòng và dịch vụ tương đương, iVIVU chịu trách nhiệm (iii) chuyển khách đến 01 (một) khách sạn khác; và (iv) hoàn lại chênh lệch giá trị đặt phòng dựa trên giá phòng trên hệ thống iVIVU tại thời điểm đặt phòng so với giá trị đặt phòng khách đã hàng đã đặt và chi phí di chuyển đến khách sạn thay thế (nếu có).</div>\n      <div class=\"text-normal p-top-8\">Theo các quy định của chính phủ Việt Nam và các nước sở tại, iVIVU.com sẽ được miễn trừ nghĩa vụ cung cấp dịch vụ và bồi thường trong các trường hợp sau:</div>\n      <div class=\"text-normal p-top-8\">- Trong trường hợp bất khả kháng như thiên tai, chiến tranh, biểu tình hoặc các quyết định đột xuất của các cơ quan quản lý nhà nước.</div>\n      <div class=\"text-normal p-top-8\">- Chuyến bay/xe/tàu bị chậm, hủy theo thông báo của hãng hàng không/tàu/xe ngoài tầm kiểm soát của iVIVU.com.</div>\n      <div class=\"text-normal p-top-8\">- Nếu iVIVU.com có thể chứng minh được đã thông báo cho hành khách về việc chậm, huỷ chuyến hoặc hành khách không đăng ký địa chỉ hay thông tin liên lạc; hoặc không liên hệ được với hành khách theo thông tin đã đăng ký.</div>\n      <div class=\"text-normal p-top-8\">- Miễn trừ bồi thường cho khách bị từ chối trong trường hơp lý do từ hành khách (như tình trạng sức khỏe, dịch bệnh, việc khách không tuân thủ đúng điều lệ/ hợp đồng vận chuyển/quy định của nhà chức trách…), theo yêu cầu của nhà chức trách, an ninh hàng không, ...</div>\n      <div class=\"text-normal p-top-8\">- Nếu có sự thay đổi lịch trình của các phương tiện vận chuyển công cộng như: tàu thuyền, tàu hỏa,.…vì lý do bất khả kháng, IVIVU.com sẽ giữ quyền thay đổi lộ trình hoặc buộc phải thông báo hoãn hủy chuyến đi vì sự an toàn cho Quý khách.</div>\n      \n      <div class=\"text-title p-top-16\">8.Mức độ công bằng:</div>\n      <div class=\"text-normal p-top-8\">Chúng tôi luôn mong muốn giải quyết những đề xuất hoặc thắc mắc một cách nhanh chóng và công bằng nhất. Mọi ý kiến đóng góp xin gửi về Bộ Phận Chăm Sóc Khách Hàng:</div>\n      <div class=\"text-normal p-top-8\">- Văn phòng tại Hồ Chí Minh: Lầu 2, Tòa nhà Anh Đăng, 215 Nam Kỳ Khởi Nghĩa, Phường 7, Quận 3, Tp. Hồ Chí Minh, Việt Nam</div>\n      <div class=\"text-normal p-top-8\">- Văn phòng tại Hà Nội: Tầng 1, Tòa nhà Ladeco, 266 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội, Việt Nam</div>\n      <div class=\"text-normal p-top-8\">- Văn phòng tại Cần Thơ: Tầng 7 - Tòa nhà STS - 11B Đại Lộ Hòa Bình, Phường Tân An, Quận Ninh Kiều, TP. Cần Thơ</div>\n      <div class=\"text-normal p-top-8\">- Điện thoại 1900 1870, hoặc gửi qua địa chỉ email <a class=\"text-link\">TC@iVIVU.com</a></div>\n      \n      <div class=\"text-title p-top-16\">9.Bản quyền:</div>\n      \n      <div class=\"text-normal p-top-8\">Những hình ảnh và nội dung trên iVIVU.com là không được phép sao chép hoặc được sử dụng lại với bất kỳ phiên bản nào khác mà chỉ được sử dụng trên trang web của chúng tôi.</div>\n      \n      <div class=\"text-title p-top-16\">10.Chung:</div>\n      \n      <div class=\"text-normal p-top-8\">Tất cả những điều khoản và điều kiện được công nhận bởi pháp luật Việt Nam. Chúng tôi nhận những thanh toán từ khách sạn thành viên từ việc cung cấp dịch vụ phòng đặt phòng của chúng tôi. Mọi thắc mắc liên hệ Công ty VIVU để xác nhận đặt phòng qua email. Thông tin chi tiết của chúng tôi về cách thức xử lý thông tin cá nhân xin Quý Khách tham khảo Chính sách quyền cá nhân.</div>\n      <div class=\"text-normal p-top-8\">Các đặt phòng được đặt qua đối tác EAN sẽ tuân theo các điều kiện và điều khoản của đối tác, vui lòng xem tại <a class=\"text-link\" href=\"https://developer.expediapartnersolutions.com/terms/vi/\">https://developer.expediapartnersolutions.com/terms/vi/</a></div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/rules/rules.page.scss":
/*!***************************************!*\
  !*** ./src/app/rules/rules.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rules-content .p-top-16 {\n  padding-top: 16px;\n}\n.rules-content .p-top-8 {\n  padding-top: 8px;\n}\n.rules-content .text-head-title {\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: -0.6px;\n}\n.rules-content .text-title {\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: -0.34px;\n}\n.rules-content .text-normal {\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: -0.34px;\n}\n.rules-content .text-link {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL3J1bGVzL3J1bGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcnVsZXMvcnVsZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7QUNBUjtBREVJO0VBQ0ksZ0JBQUE7QUNBUjtBREVJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNBUjtBREVJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNBUjtBREVJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNBUjtBREVJO0VBQ0ksMEJBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3J1bGVzL3J1bGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ydWxlcy1jb250ZW50e1xyXG4gICAgLnAtdG9wLTE2e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLnAtdG9wLTh7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIH1cclxuICAgIC50ZXh0LWhlYWQtdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcclxuICAgIH1cclxuICAgIC50ZXh0LXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gICAgfVxyXG4gICAgLnRleHQtbm9ybWFse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gICAgfVxyXG4gICAgLnRleHQtbGlua3tcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxufSIsIi5ydWxlcy1jb250ZW50IC5wLXRvcC0xNiB7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuLnJ1bGVzLWNvbnRlbnQgLnAtdG9wLTgge1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuLnJ1bGVzLWNvbnRlbnQgLnRleHQtaGVhZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcbn1cbi5ydWxlcy1jb250ZW50IC50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbn1cbi5ydWxlcy1jb250ZW50IC50ZXh0LW5vcm1hbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG59XG4ucnVsZXMtY29udGVudCAudGV4dC1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/rules/rules.page.ts":
/*!*************************************!*\
  !*** ./src/app/rules/rules.page.ts ***!
  \*************************************/
/*! exports provided: RulesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesPage", function() { return RulesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let RulesPage = class RulesPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.back();
    }
};
RulesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rules',
        template: __webpack_require__(/*! ./rules.page.html */ "./src/app/rules/rules.page.html"),
        styles: [__webpack_require__(/*! ./rules.page.scss */ "./src/app/rules/rules.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], RulesPage);



/***/ })

}]);
//# sourceMappingURL=rules-rules-module.js.map