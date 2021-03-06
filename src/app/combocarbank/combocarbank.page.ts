import { Component, NgZone, OnInit } from '@angular/core';
import { NavController, LoadingController, Platform } from '@ionic/angular';
import { Booking, RoomInfo } from '../providers/book-service';
import * as request from 'requestretry';
import { Storage } from '@ionic/storage';
import { C } from '../providers/constants';
import { GlobalFunction } from '../providers/globalfunction';
import jwt_decode from 'jwt-decode';
import { Bookcombo } from './../providers/book-service';
import * as moment from 'moment';
import { Facebook } from '@ionic-native/facebook/ngx';
@Component({
  selector: 'app-combocarbank',
  templateUrl: './combocarbank.page.html',
  styleUrls: ['./combocarbank.page.scss'],
})
export class CombocarbankPage implements OnInit {

  ischeckvcbactive = true; ischeckvcb; ischeckacb; ischeckacbactive; ischeckvietin; ischeckvietinactive; ischecktechcom; ischecktechcomactive;
  ischeckdongaactive; ischeckdonga; ischeckagri; ischeckagriactive; ischeckbidv; ischeckbidvactive; ischecksacom; ischecksacomactive;
  text; ischecktext; ischecktextend; isenabled = true; input; ischeck; isenabledbtn; timestamp; paymentMethod; room; jsonroom; ischeckhdactive; ischeckhd;
  ischeckscbactive; ischeckscb; listcars; hoten; phone; totalAdult; email; ischeckocbactive = false; ischeckocb
  public loader: any;
  textbank: string = '';
  bookingCode: any;
  bankName: string;
  accountNumber: string;
  bankBranch: string;
  jti: any;
  constructor(public platform: Platform, public Roomif: RoomInfo, public zone: NgZone, public storage: Storage,
    public navCtrl: NavController, public booking: Booking, public loadingCtrl: LoadingController, public bookCombo: Bookcombo,
    public gf: GlobalFunction,
    private fb: Facebook) {
    this.listcars = this.gf.getParams('carscombo');
    this.hoten=this.Roomif.hoten;
    this.phone=this.Roomif.phone
    this.totalAdult = bookCombo.totalAdult;
    this.ischeckvietin = true;
    this.ischeckacb = true;
    this.ischecktechcom = true;
    this.ischeckdonga = true;
    this.ischeckagri = true;
    this.ischeckbidv = true;
    this.ischecksacom = true;
    this.ischecktextend = false;
    this.ischecktext = true;
    this.ischeckscb = true;
    this.ischeckocb = true;
    this.text = "";
    this.isenabledbtn = false;
    this.ischeckvcbactive = true;
    this.ischeckhd = true;
    this.paymentMethod = "42";
    this.textbank = "Vietcombank";
    this.bankName = "Ng??n TMCP Ngo???i Th????ng Vi???t Nam (VCB)";
    this.bankBranch = "Chi nh??nh Tp. H??? Ch?? Minh";
    this.accountNumber = "007 1000 895 230";
    this.text = "Ng??n h??ng Th????ng M???i C??? Ph???n Ngo???i Th????ng Vi???t Nam (VCB)<br>Chi nh??nh Tp. H??? Ch?? Minh<br>S??? TK: <b>007 1000 895 230</b><br>Ch??? TK: <b>C??ng ty C??? Ph???n IVIVU.COM</b></li>";
    this.room = Roomif.arrroom;
    this.jsonroom = Roomif.jsonroom;
    this.storage.get('email').then(e => {
      if (e !== null) {
        this.email = e;
      }
    })
    this.storage.get('jti').then(jti => {
      if (jti) {
        this.jti = jti;
      }
    })
    gf.googleAnalytion('roompaymentbank', 'load', '');
  }
  ngOnInit() {
  }
  acb() {
    this.zone.run(() => {
      this.ischeckacbactive = true;

      this.ischeckacb = false;
      this.ischeckvietinactive = false;
      this.ischecktechcomactive = false;
      this.ischeckdongaactive = false;
      this.ischeckbidvactive = false;
      this.ischecksacomactive = false;
      this.ischeckagriactive = false;
      this.ischeckvcbactive = false;
      this.ischeckscbactive = false;
      this.ischeckhdactive = false;

      this.ischeckocbactive = false;
      this.ischeckocb = true;

      this.ischeckvietin = true;
      this.ischecktechcom = true;
      this.ischeckdonga = true;
      this.ischeckbidv = true;
      this.ischecksacom = true;
      this.ischeckagri = true;
      this.ischeckvcb = true;
      this.ischeckscb = true;
      this.ischeckhd = true;
      this.text = "Ng??n h??ng ?? Ch??u (ACB)<br>Chi nh??nh Tp. H??? Ch?? Minh<br>S??? TK: <b>190862589</b><br>Ch??? TK: <b>C??ng ty C??? Ph???n IVIVU.COM</b></li>";
      this.ischecktextend = false;
      this.ischecktext = true;
      this.isenabledbtn = false;
      this.paymentMethod = "41";

      this.textbank = "ACB";
      this.bankName = "Ng??n h??ng TMCP ?? Ch??u (ACB)";
      this.bankBranch = "Chi nh??nh Tp. H??? Ch?? Minh";
      this.accountNumber = "190862589";
    })

  }
  vcb() {
    this.zone.run(() => {
      this.ischeckvcbactive = true;

      this.ischeckvcb = false;
      this.ischeckvietinactive = false;
      this.ischecktechcomactive = false;
      this.ischeckdongaactive = false;
      this.ischeckbidvactive = false;
      this.ischecksacomactive = false;
      this.ischeckagriactive = false;
      this.ischeckacbactive = false;
      this.ischeckscbactive = false;
      this.ischeckhdactive = false;

      this.ischeckocbactive = false;
      this.ischeckocb = true;

      this.ischeckvietin = true;
      this.ischecktechcom = true;
      this.ischeckdonga = true;
      this.ischeckbidv = true;
      this.ischecksacom = true;
      this.ischeckagri = true;
      this.ischeckacb = true;
      this.ischeckscb = true;
      this.ischeckhd = true;
      this.ischecktextend = false;
      this.ischecktext = true;
      this.text = "Ng??n h??ng Th????ng M???i C??? Ph???n Ngo???i Th????ng Vi???t Nam (VCB)<br>Chi nh??nh Tp. H??? Ch?? Minh<br>S??? TK: <b>007 1000 895 230</b><a class='text-copy' (click)='copyClipboard(1)'>Sao ch??p</a> <br>Ng?????i th??? h?????ng: C??ng ty C??? Ph???n IVIVU.COM <a class='text-copy' (click)='copyClipboard(1)'>Sao ch??p</a> <br>N???i dung thanh to??n: <b>{{totalPrice}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao ch??p</a> </li>";
      this.isenabledbtn = false;
      this.paymentMethod = "42";
      this.textbank = "Vietcombank";
      this.bankName = "Ng??n TMCP Ngo???i Th????ng Vi???t Nam (VCB)";
      this.bankBranch = "Chi nh??nh Tp. H??? Ch?? Minh";
      this.accountNumber = "007 1000 895 230";
    })

  }
  vietin() {
    this.zone.run(() => {
      this.ischeckvietinactive = true;

      this.ischeckvcbactive = false;
      this.ischecktechcomactive = false;
      this.ischeckdongaactive = false;
      this.ischeckbidvactive = false;
      this.ischecksacomactive = false;
      this.ischeckagriactive = false;
      this.ischeckacbactive = false;
      this.ischeckvietin = false;
      this.ischeckscbactive = false;
      this.ischeckhdactive = false;

      this.ischeckocbactive = false;
      this.ischeckocb = true;

      this.ischeckvcb = true;
      this.ischecktechcom = true;
      this.ischeckdonga = true;
      this.ischeckbidv = true;
      this.ischecksacom = true;
      this.ischeckagri = true;
      this.ischeckacb = true;
      this.ischeckscb = true;
      this.ischeckhd = true;
      this.text = "NH VietinBank<br>Chi Nh??nh 03, Tp.HCM<br>S??? TK: <b>1110 0014 2852</b><br>Ch??? TK: <b>C??ng ty C??? Ph???n IVIVU.COM</b>";
      this.ischecktextend = false;
      this.ischecktext = true;
      this.isenabledbtn = false;
      this.paymentMethod = "45";

      this.textbank = "Viettinbank";
      this.bankName = "Ng??n h??ng TMCP C??ng th????ng Vi???t Nam VietinBank";
      this.bankBranch = "Chi Nh??nh 03, Tp.HCM";
      this.accountNumber = "1110 0014 2852";
    })

  }
  techcom() {
    this.zone.run(() => {
      this.ischecktechcomactive = true;

      this.ischeckvcbactive = false;
      this.ischeckvietinactive = false;
      this.ischeckdongaactive = false;
      this.ischeckbidvactive = false;
      this.ischecksacomactive = false;
      this.ischeckagriactive = false;
      this.ischeckacbactive = false;
      this.ischecktechcom = false;
      this.ischeckscbactive = false;
      this.ischeckhdactive = false;

      this.ischeckocbactive = false;
      this.ischeckocb = true;

      this.ischeckvcb = true;
      this.ischeckvietin = true;
      this.ischeckdonga = true;
      this.ischeckbidv = true;
      this.ischecksacom = true;
      this.ischeckagri = true;
      this.ischeckacb = true;
      this.ischeckscb = true;
      this.ischeckhd = true;
      this.text = "NH TMCP K??? Th????ng Vi???t Nam (Techcombank)<br>Chi nh??nh Tr???n Quang Di???u, Tp.HCM<br>S??? TK: <b>19128840912016</b><br>Ch??? TK: <b>C??ng ty C??? Ph???n IVIVU.COM</b>"
      this.ischecktextend = false;
      this.ischecktext = true;
      this.isenabledbtn = false;
      this.paymentMethod = "44";

      this.textbank = "Techcombank";
      this.bankName = "NH TMCP K??? Th????ng Vi???t Nam (Techcombank)";
      this.bankBranch = "Chi nh??nh Tr???n Quang Di???u, Tp.HCM";
      this.accountNumber = "19128840912016";
    })

  }

  donga() {
    this.zone.run(() => {
      this.ischeckdongaactive = true;

      this.ischeckvcbactive = false;
      this.ischeckvietinactive = false;
      this.ischecktechcomactive = false;
      this.ischeckbidvactive = false;
      this.ischecksacomactive = false;
      this.ischeckagriactive = false;
      this.ischeckacbactive = false;
      this.ischeckdonga = false;
      this.ischeckscbactive = false;
      this.ischeckhdactive = false;

      this.ischeckocbactive = false;
      this.ischeckocb = true;

      this.ischeckvcb = true;
      this.ischeckvietin = true;
      this.ischecktechcom = true;
      this.ischeckbidv = true;
      this.ischecksacom = true;
      this.ischeckagri = true;
      this.ischeckacb = true;
      this.ischeckscb = true;
      this.ischeckhd = true;
      this.ischecktextend = true;
      this.ischecktext = false;
      this.text = "NH TMCP ????ng ?? (DongABank)<br>Chi nh??nh L?? V??n S???, Tp.HCM<br>S??? TK: <b>0139 9166 0002</b><br>Ch??? TK: <b>C??ng ty C??? Ph???n IVIVU.COM</b>";
      this.isenabledbtn = false;
      this.paymentMethod = "43";

      this.textbank = "dongabank";
      this.bankName = "NH TMCP ????ng ?? (DongABank)";
      this.bankBranch = "Chi nh??nh L?? V??n S???, Tp.HCM";
      this.accountNumber = "0139 9166 0002";
    })

  }

  agri() {
    this.zone.run(() => {
      this.ischeckagriactive = true;

      this.ischeckvcbactive = false;
      this.ischeckvietinactive = false;
      this.ischecktechcomactive = false;
      this.ischeckbidvactive = false;
      this.ischecksacomactive = false;
      this.ischeckdongaactive = false;
      this.ischeckacbactive = false;
      this.ischeckagri = false;
      this.ischeckscbactive = false;
      this.ischeckhdactive = false;

      this.ischeckocbactive = false;
      this.ischeckocb = true;

      this.ischeckvcb = true;
      this.ischeckvietin = true;
      this.ischecktechcom = true;
      this.ischeckbidv = true;
      this.ischecksacom = true;
      this.ischeckdonga = true;
      this.ischeckacb = true;
      this.ischeckscb = true;
      this.ischeckhd = true;
      this.ischecktextend = true;
      this.ischecktext = false;
      this.text = "NH Agribank<br>Chi Nh??nh 03, Tp.HCM<br>S??? TK: <b>160 2201 361 086</b><br>Ch??? TK: <b>C??ng ty C??? Ph???n IVIVU.COM</b>";
      this.isenabledbtn = false;
      this.paymentMethod = "47";

      this.textbank = "Agribank";
      this.bankName = "Ng??n h??ng Agribank";
      this.bankBranch = "Chi Nh??nh 03, Tp.HCM";
      this.accountNumber = "160 2201 361 086";
    })

  }

  bidv() {
    this.zone.run(() => {
      this.ischeckbidvactive = true;

      this.ischeckvcbactive = false;
      this.ischeckvietinactive = false;
      this.ischecktechcomactive = false;
      this.ischeckagriactive = false;
      this.ischecksacomactive = false;
      this.ischeckdongaactive = false;
      this.ischeckacbactive = false;
      this.ischeckbidv = false;
      this.ischeckscbactive = false;
      this.ischeckhdactive = false;

      this.ischeckocbactive = false;
      this.ischeckocb = true;

      this.ischeckvcb = true;
      this.ischeckvietin = true;
      this.ischecktechcom = true;
      this.ischeckagri = true;
      this.ischecksacom = true;
      this.ischeckdonga = true;
      this.ischeckacb = true;
      this.ischeckscb = true;
      this.ischeckhd = true;
      this.ischecktextend = true;
      this.ischecktext = false;
      this.text = "NH TM CP ?????u T?? v?? Ph??t Tri???n Vi???t Nam (BIDV)<br>Chi Nh??nh 02, Tp.HCM<br>S??? TK: <b>130 1000 147 4890</b><br>Ch??? TK: <b>C??ng ty C??? Ph???n IVIVU.COM</b>";
      this.isenabledbtn = false;
      this.paymentMethod = "48";

      this.textbank = "BIDV";
      this.bankName = "NH TM CP ?????u T?? v?? Ph??t Tri???n Vi???t Nam (BIDV)";
      this.bankBranch = "Chi Nh??nh 02, Tp.HCM";
      this.accountNumber = "130 1000 147 4890";
    })

  }

  sacom() {
    this.zone.run(() => {
      this.ischecksacomactive = true;

      this.ischeckvcbactive = false;
      this.ischeckvietinactive = false;
      this.ischecktechcomactive = false;
      this.ischeckagriactive = false;
      this.ischeckbidvactive = false;
      this.ischeckdongaactive = false;
      this.ischeckacbactive = false;
      this.ischecksacom = false;
      this.ischeckscbactive = false;
      this.ischeckhdactive = false;

      this.ischeckocbactive = false;
      this.ischeckocb = true;

      this.ischeckvcb = true;
      this.ischeckvietin = true;
      this.ischecktechcom = true;
      this.ischeckagri = true;
      this.ischeckbidv = true;
      this.ischeckdonga = true;
      this.ischeckacb = true;
      this.ischeckscb = true;
      this.ischeckhd = true;
      this.ischecktextend = true;
      this.ischecktext = false;
      this.text = "Ng??n H??ng TMCP S??i G??n Th????ng T??n (Sacombank)<br>Chi nh??nh Cao Th???ng, Tp.HCM<br>S??? TK: <b>060 0952 73354</b><br>Ch??? TK: <b>C??ng ty C??? Ph???n IVIVU.COM</b>";
      this.isenabledbtn = false;
      this.paymentMethod = "46";

      this.textbank = "Sacombank";
      this.bankName = "Ng??n H??ng TMCP S??i G??n Th????ng T??n (Sacombank)";
      this.bankBranch = "Chi nh??nh Cao Th???ng, Tp.HCM";
      this.accountNumber = "060 0952 73354";
    })

  }
  hd() {
    this.zone.run(() => {
      this.ischeckhdactive = true;

      this.ischeckvcbactive = false;
      this.ischeckvietinactive = false;
      this.ischecktechcomactive = false;
      this.ischeckagriactive = false;
      this.ischeckbidvactive = false;
      this.ischeckdongaactive = false;
      this.ischeckacbactive = false;
      this.ischeckhd = false;
      this.ischecksacomactive = false;
      this.ischeckscbactive = false;

      this.ischeckocbactive = false;
      this.ischeckocb = true;

      this.ischeckvcb = true;
      this.ischeckvietin = true;
      this.ischecktechcom = true;
      this.ischeckagri = true;
      this.ischeckbidv = true;
      this.ischeckdonga = true;
      this.ischeckacb = true;
      this.ischecksacom = true;
      this.ischeckscb = true;
      this.ischecktextend = true;
      this.ischecktext = false;
      this.text = "Ng??n h??ng HDBANK<br>Chi nh??nh S??i g??n<br>S??? TK: <b>052704070018649</b><br>Ch??? TK: <b>C??ng ty C??? Ph???n IVIVU.COM</b>";
      this.isenabledbtn = false;
      this.paymentMethod = "50";

      this.textbank = "HDBank";
      this.bankName = "Ng??n h??ng HDBANK";
      this.bankBranch = "Chi nh??nh S??i g??n";
      this.accountNumber = "052704070018649";
    })

  }
  scb() {
    this.zone.run(() => {
      this.ischeckscbactive = true;

      this.ischeckvcbactive = false;
      this.ischeckvietinactive = false;
      this.ischecktechcomactive = false;
      this.ischeckagriactive = false;
      this.ischeckbidvactive = false;
      this.ischeckdongaactive = false;
      this.ischeckacbactive = false;
      this.ischecksacom = false;
      this.ischeckscb = false;
      this.ischecksacomactive = false;
      this.ischeckhdactive = false;

      this.ischeckocbactive = false;
      this.ischeckocb = true;

      this.ischeckvcb = true;
      this.ischeckvietin = true;
      this.ischecktechcom = true;
      this.ischeckagri = true;
      this.ischeckbidv = true;
      this.ischeckdonga = true;
      this.ischeckacb = true;
      this.ischecksacom = true;
      this.ischeckhd = true;
      this.ischecktextend = true;
      this.ischecktext = false;
      this.text = "Ng??n H??ng S??i G??n (SCB)<br>Chi nh??nh Ph?? ????ng<br>S??? TK: <b>023 0109 7937 00001</b><br>Ch??? TK: <b>C??ng ty C??? Ph???n IVIVU.COM</b>";
      this.isenabledbtn = false;
      this.paymentMethod = "49";

      this.textbank = "SCB";
      this.bankName = "Ng??n H??ng S??i G??n (SCB)";
      this.bankBranch = "Chi nh??nh Ph?? ????ng";
      this.accountNumber = "023 0109 7937 00001";
    })

  }
  ocb() {
    this.zone.run(() => {
      this.ischeckocbactive = true;

      this.ischeckvcbactive = false;
      this.ischeckvietinactive = false;
      this.ischecktechcomactive = false;
      this.ischeckagriactive = false;
      this.ischeckbidvactive = false;
      this.ischeckdongaactive = false;
      this.ischeckacbactive = false;
      this.ischecksacom = false;
      this.ischeckscb = false;
      this.ischecksacomactive = false;
      this.ischeckhdactive = false;
      this.ischeckscbactive = false;

      this.ischeckvcb = true;
      this.ischeckvietin = true;
      this.ischecktechcom = true;
      this.ischeckagri = true;
      this.ischeckbidv = true;
      this.ischeckdonga = true;
      this.ischeckacb = true;
      this.ischecksacom = true;
      this.ischeckhd = true;
      this.ischeckscb = true;
      this.ischeckocb = false;
      this.ischecktextend = true;
      this.ischecktext = false;
      //this.text = "Ng??n H??ng S??i G??n (SCB)<br>Chi nh??nh Ph?? ????ng<br>S??? TK: <b>023 0109 7937 00001</b><br>Ch??? TK: <b>C??ng ty C??? Ph???n IVIVU.COM</b>";
      this.isenabledbtn = false;
      this.paymentMethod = "53";

      this.textbank = "OCB";
      this.bankName = "Ng??n h??ng Ph????ng ????ng (OCB)";
      this.bankBranch = "Ch??? L???n, TP.HCM";
      this.accountNumber = "001 7101 6190 02045";
    })

  }
  next() {
    //this.presentLoading();
    var se = this;
    var form = this.listcars;
    form.HotelBooking.PaymentMethod = this.paymentMethod;
    var options = {
      method: 'POST',
      url: C.urls.baseUrl.urlContracting + '/api/ToolsAPI/CreateComboTransferBooking',
      headers:
      {
      },
      form
    };
    request(options, function (error, response, body) {
      var obj = JSON.parse(body);
      var options = {
        method: 'POST',
        url: C.urls.baseUrl.urlContracting + '/api/ToolsAPI/CreateTransactionIDComboTransfer',
        headers:
          {},
        form:
        {
          BookingCode: obj.Code,
          DepartATCode: obj.TransferReserveCode.DepartReserveCode,
          ReturnATCode: obj.TransferReserveCode.ReturnReserveCode,
          FromPlaceCode: se.listcars.TransferBooking.fromPlaceCode
        }
      };
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        se.loader.dismiss();
        var json = JSON.parse(body);
        if (json.Error == 0) {
          //th??ng tin bank
          se.Roomif.accountNumber = se.accountNumber;
          se.Roomif.textbank = se.textbank;
          se.Roomif.bankName = se.bankName;
          se.Roomif.bankBranch = se.bankBranch;
          se.Roomif.paymentbank = se.paymentMethod;
          if(se.jti){
          var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=tranfer&BanksTranfer='+se.textbank+'&source=app&amount=' + se.bookCombo.totalprice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + obj.Code+ '&memberId=' + se.jti;
            se.gf.CreatePayoo(url).then(() => {
            
            })
          }
          if(se.Roomif.payment == 'AL')
          {
            se.navCtrl.navigateForward('/combodonebank/' + obj.Code);
          }
          else
          {
            se.navCtrl.navigateForward('/combodone/' + obj.Code);
          }
        }
      });
    })
  }
  refreshToken() {
    var se = this;
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: 'GET',
          url: C.urls.baseUrl.urlMobile + '/api/Account/reloadTokenClaims',
          headers:
          {
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            authorization: text
          },
        }
        request(options, function (error, response, body) {
          if (response.statusCode != 200) {
            var objError = {
              page: "combopaymentbank",
              func: "refreshToken",
              message: response.statusMessage,
              content: response.body,
              type: "warning",
              param: JSON.stringify(options)
            };
            C.writeErrorLog(objError, response);
          }
          if (error) {
            error.page = "roompaymentbank";
            error.func = "refreshToken";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
          } else {
            var au = JSON.parse(body);
            se.zone.run(() => {
              se.storage.remove('auth_token');
              se.storage.set('auth_token', au.auth_token);
              var decoded = jwt_decode(au.auth_token);
              se.storage.remove('point');
              se.storage.set('point', decoded.point);
            })
          }
        })
      }
    })
  }
  clearClonePage(pagename) {
    //X??a clone do push page
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
  select() {
    this.navCtrl.back();
  }
  check() {
    if (this.ischeck) {
      this.isenabled = false;
    } else {
      this.isenabled = true;
    }
  }
  // async presentLoading() {
  //   let loader = await this.loadingCtrl.create({
  //     message: "??ang x??? l??...",
  //   });
  //   loader.present();
  // }
  async presentLoading() {
    this.loader = await this.loadingCtrl.create({
    });
    this.loader.present();
  }
  goback() {
    this.navCtrl.back();
  }
  postapibook() {
    var se = this;
    se.presentLoading();
    var options = {
      method: 'POST',
      url: C.urls.baseUrl.urlMobile + '/booking',
      headers:
      {
        apikey: 'sx25k7TABO6W4ULFjfxoJJaLjQr0wUGxYCph1TQiTBM',
        apisecret: 'wZH8vCalp5-ZsUzJiP1IP6V2beWUm0ej8G_25gzg2xg'
      },
      body:
      {
        departParams:
        {
          trip_code: this.listcars.TransferBooking.departTransfer.TransferNumber,
          total_seats: this.bookCombo.totalseatsdep,
          total_price: this.bookCombo.pricedep,
          code: '',
          dropoff_place: this.listcars.TransferBooking.departTransfer.DropoffPlaceName,
          pickup_place: this.listcars.TransferBooking.departTransfer.PickupPlaceName
        },
        returnParams:
        {
          trip_code: this.listcars.TransferBooking.returnTransfer.TransferNumber,
          total_seats: this.bookCombo.totalseatsret,
          total_price: this.bookCombo.priceret,
          code: '',
          pickup_place: this.listcars.TransferBooking.returnTransfer.PickupPlaceName,
          dropoff_place: this.listcars.TransferBooking.returnTransfer.DropoffPlaceName
        },
        customer_phone: se.phone,
        customer_name: se.hoten,
        customer_email: 'tc@ivivu.com',
        pay_status: 0
      },
      json: true
    };
    request(options, function (error, response, body) {
      if (body.status == 0) {
        var json = body.data;
        if (json.length > 0) {
          se.listcars.TransferBooking.departTransfer.ReservedTickets = JSON.stringify(json[0].data.reserve_Tickets);
          se.listcars.TransferBooking.returnTransfer.ReservedTickets = JSON.stringify(json[1].data.reserve_Tickets);
          var expiredtimedep=moment(json[0].data.reserve_Tickets.expired_time).format('YYYYMMDDHHmm');
          var expiredtimeret=moment(json[1].data.reserve_Tickets.expired_time).format('YYYYMMDDHHmm');
          se.Roomif.expiredtime="";
          se.Roomif.expiredtime=json[0].data.reserve_Tickets.expired_time;
          if(Number(expiredtimedep)>Number(expiredtimeret))
          {
            se.Roomif.expiredtime=json[1].data.reserve_Tickets.expired_time;
          }
          var Seatsde = json[0].data.seats;
          var Seatsre = json[1].data.seats;
          var seatstextde = "";
          var seatstextre = "";
          for (let i = 0; i < Seatsde.length; i++) {
            if (i == Seatsde.length - 1) {
              seatstextde = seatstextde + Seatsde[i].seat_code;
            }
            else {
              seatstextde = seatstextde + Seatsde[i].seat_code + ',';
            }
          }
          for (let i = 0; i < Seatsre.length; i++) {
            if (i == Seatsre.length - 1) {
              seatstextre = seatstextre + Seatsre[i].seat_code;
            }
            else {
              seatstextre = seatstextre + Seatsre[i].seat_code + ',';
            }
          }
          se.listcars.TransferBooking.departTransfer.Seats = seatstextde;
          se.listcars.TransferBooking.returnTransfer.Seats = seatstextre;
          // se.listcars.TransferBooking.departTransfer.CancelPolicy = seatstextde;
          // se.listcars.TransferBooking.returnTransfer.CancelPolicy = seatstextre;
          var textfullname = se.hoten.split(' ')
          var FirstName;
          var LastName;
          if (textfullname.length > 2) {
            let name = '';
            for (let i = 1; i < textfullname.length; i++) {
              if (i == 1) {
                name += textfullname[i];
              } else {
                name += ' ' + textfullname[i];
              }
            }
            FirstName = textfullname[0];
            LastName = name;
          } else if (textfullname.length > 1) {
            FirstName = textfullname[0];
            LastName = textfullname[1];
          }
          else if (textfullname.length == 1) {
            FirstName = textfullname[0];
            LastName = "";
          }
          se.listcars.TransferBooking.passengerInfo.FirstName = FirstName;
          se.listcars.TransferBooking.passengerInfo.LastName = LastName;
          se.listcars.TransferBooking.passengerInfo.Email = se.email;
          se.listcars.TransferBooking.passengerInfo.MobileNumber = se.phone;
          se.listcars.HotelBooking.CPhone = se.phone;
          se.listcars.HotelBooking.LeadingName = se.hoten;
          se.listcars.HotelBooking.LeadingEmail = se.email;
          se.listcars.HotelBooking.LeadingPhone = se.phone;
          //se.next();
          if(se.bookCombo.mealTypeRates.Supplier == 'SERI' && se.bookCombo.mealTypeRates.HotelCheckDetailTokenInternal){
            //Check allotment tr?????c khi book
            se.gf.checkAllotmentSeri(
              se.booking.HotelId,
              se.bookCombo.mealTypeRates.RoomId,
              se.booking.CheckInDate,
              se.booking.CheckOutDate,
              se.bookCombo.mealTypeRates.TotalRoom,
              'SERI', se.bookCombo.mealTypeRates.HotelCheckDetailTokenInternal
              ).then((allow)=> {
                if(allow){
                  se.next();
                }else{
                  if (se.loader) {
                    se.loader.dismiss();
                  }
                  se.gf.showToastWarning('Hi???n t???i kh??ch s???n ???? h???t ph??ng lo???i n??y.');
                }
              })
          }else{
            se.next();
          }
        } else {
          se.loader.dismiss();
          alert("Kh??ng c??n gh??? xe, vui l??ng ch???n Nh?? xe kh??c!");
          se.navCtrl.navigateForward('/combocarnew');
        }
      }
      else {
        se.loader.dismiss();
        alert("Kh??ng c??n gh??? xe, vui l??ng ch???n Nh?? xe kh??c!");
        se.navCtrl.navigateForward('/combocarnew');
      }

    });
  }

}
