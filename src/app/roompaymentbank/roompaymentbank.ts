
import { Bookcombo } from './../providers/book-service';
import { Component, NgZone, OnInit } from '@angular/core';
import {  NavController ,LoadingController,Platform, ToastController, AlertController} from '@ionic/angular';
import { Booking, RoomInfo } from '../providers/book-service';
import * as request from 'requestretry';
import { Storage } from '@ionic/storage';
import { C } from '../providers/constants';
import { GlobalFunction, ActivityService } from '../providers/globalfunction';
import jwt_decode from 'jwt-decode';

import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
/**
 * Generated class for the RoompaymentbankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'app-roompaymentbank',
  templateUrl: 'roompaymentbank.html',
  styleUrls: ['roompaymentbank.scss'],
})
export class RoompaymentbankPage implements OnInit{
  ischeckvcbactive = true; ischeckvcb; ischeckacb; ischeckacbactive; ischeckvietin; ischeckvietinactive; ischecktechcom; ischecktechcomactive;
  ischeckdongaactive; ischeckdonga; ischeckagri; ischeckagriactive; ischeckbidv; ischeckbidvactive; ischecksacom; ischecksacomactive;
  text; ischecktext; ischecktextend; isenabled = true; input; ischeck; isenabledbtn; timestamp; paymentMethod; room; jsonroom;ischeckhdactive;ischeckhd;
  ischeckscbactive;ischeckscb;
  public loader:any;
  auth_token: any='';
  rowoneactive = false;
  rowtwoactive = false;
  rowthreeactive = false;
  totalPrice: any;
  textbank: string='';
  bookingCode: any;
  bankName: string;
  accountNumber: string;
  bankBranch: string;
  isPaymentFromMytrip: boolean = false;
  constructor(public platform: Platform,public Roomif: RoomInfo, public zone: NgZone, public storage: Storage, 
    public navCtrl: NavController, public booking: Booking, public loadingCtrl: LoadingController,
    public gf: GlobalFunction, private toastCtrl: ToastController,public bookCombo:Bookcombo,
    public activityService: ActivityService,
    public alertCtrl: AlertController,
    public clipboard: Clipboard,
    private safariViewController: SafariViewController
    ) {
    this.ischeckvietin = true;
    this.ischeckacb = true;
    this.ischecktechcom = true;
    this.ischeckdonga = true;
    this.ischeckagri = true;
    this.ischeckbidv = true;
    this.ischecksacom = true;
    this.ischecktextend = false;
    this.ischecktext = true;
    this.ischeckscb=true;
    this.text = "";
    this.isenabledbtn = false;
    this.ischeckvcbactive = true;
    this.ischeckhd=true;
    this.paymentMethod = "42";
    this.text = "Ng??n h??ng Th????ng M???i C??? Ph???n Ngo???i Th????ng Vi???t Nam (VCB)<br>Chi nh??nh Tp. H??? Ch?? Minh<br>S??? TK: <b>007 1000 895 230</b><a class='text-copy' (click)='copyClipboard(1)'>Sao ch??p</a> <br>Ng?????i th??? h?????ng: C??ng ty C??? Ph???n IVIVU.COM <a class='text-copy' (click)='copyClipboard(1)'>Sao ch??p</a> <br>N???i dung thanh to??n: <b>{{totalPrice}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao ch??p</a> </li>";
    this.room = Roomif.arrroom;
    this.jsonroom = Roomif.jsonroom;
    this.rowoneactive = true;
    this.textbank = "Vietcombank";
    this.bankName = "Ng??n h??ng Th????ng M???i C??? Ph???n Ngo???i Th????ng Vi???t Nam (VCB)";
    this.bankBranch = "Chi nh??nh Tp. H??? Ch?? Minh";
    this.accountNumber = "007 1000 895 230";
    if(this.Roomif && this.Roomif.priceshow){
      this.totalPrice = this.Roomif.priceshow;
    }
    if(this.activityService.objPaymentMytrip && this.activityService.objPaymentMytrip.trip.priceShow){
      this.totalPrice = this.activityService.objPaymentMytrip.trip.priceShow;
      this.bookingCode = this.activityService.objPaymentMytrip.trip.booking_id;
      this.isPaymentFromMytrip = true;
    }
    gf.googleAnalytion('roompaymentbank','load','');
  }
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.storage.get('auth_token').then(auth_token => {
      this.auth_token = auth_token;
      })
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
      this.ischeckscbactive=false;
      this.ischeckhdactive=false;


      this.ischeckvietin = true;
      this.ischecktechcom = true;
      this.ischeckdonga = true;
      this.ischeckbidv = true;
      this.ischecksacom = true;
      this.ischeckagri = true;
      this.ischeckvcb = true;
      this.ischeckscb=true;
      this.ischeckhd=true;
      this.text = "Ng??n h??ng ?? Ch??u (ACB)<br>Chi nh??nh Tp. H??? Ch?? Minh<br>S??? TK: <b>190862589</b><br>Ch??? TK: <b>C??ng ty C??? Ph???n IVIVU.COM</b></li>";
      this.ischecktextend = false;
      this.ischecktext = true;
      this.isenabledbtn = false;
      this.paymentMethod = "41";

      this.rowoneactive =true;
      this.rowtwoactive = false;
      this.rowthreeactive = false;
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
      this.ischeckscbactive=false;
      this.ischeckhdactive=false;


      this.ischeckvietin = true;
      this.ischecktechcom = true;
      this.ischeckdonga = true;
      this.ischeckbidv = true;
      this.ischecksacom = true;
      this.ischeckagri = true;
      this.ischeckacb = true;
      this.ischeckscb=true;
      this.ischeckhd=true;
      this.ischecktextend = false;
      this.ischecktext = true;
      this.text = "Ng??n h??ng Th????ng M???i C??? Ph???n Ngo???i Th????ng Vi???t Nam (VCB)<br>Chi nh??nh Tp. H??? Ch?? Minh<br>S??? TK: <b>007 1000 895 230</b><a class='text-copy' (click)='copyClipboard(1)'>Sao ch??p</a> <br>Ng?????i th??? h?????ng: C??ng ty C??? Ph???n IVIVU.COM <a class='text-copy' (click)='copyClipboard(1)'>Sao ch??p</a> <br>N???i dung thanh to??n: <b>{{totalPrice}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao ch??p</a> </li>";
      this.isenabledbtn = false;
      this.paymentMethod = "42";
      this.rowoneactive =true;
      this.rowtwoactive = false;
      this.rowthreeactive = false;
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
      this.ischeckscbactive=false;
      this.ischeckhdactive=false;


      this.ischeckvcb = true;
      this.ischecktechcom = true;
      this.ischeckdonga = true;
      this.ischeckbidv = true;
      this.ischecksacom = true;
      this.ischeckagri = true;
      this.ischeckacb = true;
      this.ischeckscb=true;
      this.ischeckhd=true;
      this.text = "NH VietinBank<br>Chi Nh??nh 03, Tp.HCM<br>S??? TK: <b>1110 0014 2852</b><br>Ch??? TK: <b>C??ng ty C??? Ph???n IVIVU.COM</b>";
      this.ischecktextend = false;
      this.ischecktext = true;
      this.isenabledbtn = false;
      this.paymentMethod = "45";

      this.rowoneactive =true;
      this.rowtwoactive = false;
      this.rowthreeactive = false;
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
      this.ischeckscbactive=false;
      this.ischeckhdactive=false;


      this.ischeckvcb = true;
      this.ischeckvietin = true;
      this.ischeckdonga = true;
      this.ischeckbidv = true;
      this.ischecksacom = true;
      this.ischeckagri = true;
      this.ischeckacb = true;
      this.ischeckscb=true;
      this.ischeckhd=true;
      this.text = "NH TMCP K??? Th????ng Vi???t Nam (Techcombank)<br>Chi nh??nh Tr???n Quang Di???u, Tp.HCM<br>S??? TK: <b>19128840912016</b><br>Ch??? TK: <b>C??ng ty C??? Ph???n IVIVU.COM</b>"
      this.ischecktextend = false;
      this.ischecktext = true;
      this.isenabledbtn = false;
      this.paymentMethod = "44";

      this.rowoneactive =true;
      this.rowtwoactive = false;
      this.rowthreeactive = false;
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
      this.ischeckscbactive=false;
      this.ischeckhdactive=false;


      this.ischeckvcb = true;
      this.ischeckvietin = true;
      this.ischecktechcom = true;
      this.ischeckbidv = true;
      this.ischecksacom = true;
      this.ischeckagri = true;
      this.ischeckacb = true;
      this.ischeckscb=true;
      this.ischeckhd=true;
      this.ischecktextend = true;
      this.ischecktext = false;
      this.text = "NH TMCP ????ng ?? (DongABank)<br>Chi nh??nh L?? V??n S???, Tp.HCM<br>S??? TK: <b>0139 9166 0002</b><br>Ch??? TK: <b>C??ng ty C??? Ph???n IVIVU.COM</b>";
      this.isenabledbtn = false;
      this.paymentMethod = "43";

      this.rowoneactive = false;
      this.rowtwoactive = true;
      this.rowthreeactive = false;
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
      this.ischeckscbactive=false;
      this.ischeckhdactive=false;


      this.ischeckvcb = true;
      this.ischeckvietin = true;
      this.ischecktechcom = true;
      this.ischeckbidv = true;
      this.ischecksacom = true;
      this.ischeckdonga = true;
      this.ischeckacb = true;
      this.ischeckscb=true;
      this.ischeckhd=true;
      this.ischecktextend = true;
      this.ischecktext = false;
      this.text = "NH Agribank<br>Chi Nh??nh 03, Tp.HCM<br>S??? TK: <b>160 2201 361 086</b><br>Ch??? TK: <b>C??ng ty C??? Ph???n IVIVU.COM</b>";
      this.isenabledbtn = false;
      this.paymentMethod = "47";
      
      this.rowoneactive = false;
      this.rowtwoactive = true;
      this.rowthreeactive = false;
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
      this.ischeckscbactive=false;
      this.ischeckhdactive=false;


      this.ischeckvcb = true;
      this.ischeckvietin = true;
      this.ischecktechcom = true;
      this.ischeckagri = true;
      this.ischecksacom = true;
      this.ischeckdonga = true;
      this.ischeckacb = true;
      this.ischeckscb=true;
      this.ischeckhd=true;
      this.ischecktextend = true;
      this.ischecktext = false;
      this.text = "NH TM CP ?????u T?? v?? Ph??t Tri???n Vi???t Nam (BIDV)<br>Chi Nh??nh 02, Tp.HCM<br>S??? TK: <b>130 1000 147 4890</b><br>Ch??? TK: <b>C??ng ty C??? Ph???n IVIVU.COM</b>";
      this.isenabledbtn = false;
      this.paymentMethod = "48";
      
      this.rowoneactive = false;
      this.rowtwoactive = true;
      this.rowthreeactive = false;
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
      this.ischeckscbactive=false;
      this.ischeckhdactive=false;

      this.ischeckvcb = true;
      this.ischeckvietin = true;
      this.ischecktechcom = true;
      this.ischeckagri = true;
      this.ischeckbidv = true;
      this.ischeckdonga = true;
      this.ischeckacb = true;
      this.ischeckscb=true;
      this.ischeckhd=true;
      this.ischecktextend = true;
      this.ischecktext = false;
      this.text = "Ng??n H??ng TMCP S??i G??n Th????ng T??n (Sacombank)<br>Chi nh??nh Cao Th???ng, Tp.HCM<br>S??? TK: <b>060 0952 73354</b><br>Ch??? TK: <b>C??ng ty C??? Ph???n IVIVU.COM</b>";
      this.isenabledbtn = false;
      this.paymentMethod = "46";
      
      this.rowoneactive = false;
      this.rowtwoactive = true;
      this.rowthreeactive = false;
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

      this.rowoneactive = false;
      this.rowtwoactive = false;
      this.rowthreeactive = true;
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
      
      this.rowoneactive = false;
      this.rowtwoactive = false;
      this.rowthreeactive = true;
      this.textbank = "SCB";
      this.bankName = "Ng??n H??ng S??i G??n (SCB)";
      this.bankBranch = "Chi nh??nh Ph?? ????ng";
      this.accountNumber = "023 0109 7937 00001";
    })

  }
  next() {
    var se = this;
    //N???u kh??ng ph???i thanh to??n t??? mytrip th?? theo lu???ng c??
    if(!this.activityService.objPaymentMytrip){
      this.presentLoading();
      this.jsonroom.RoomClasses=this.room;
      this.timestamp = Date.now();
        if (se.booking.CEmail) {
          var Invoice=0;
          if (se.Roomif.order) {
            Invoice=1;
          }
          var options = {
            method: 'POST',
            url: C.urls.baseUrl.urlPost +'/mInsertBooking',
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers:
            {
              'content-type': 'application/json'
            },
            body:
            {
              RoomClassObj : se.jsonroom.RoomClasses[0].ListObjRoomClass,
              CName: se.Roomif.hoten,
              CEmail: se.booking.CEmail,
              CPhone: se.Roomif.phone,
              timestamp: se.timestamp,
              HotelID: se.booking.HotelId,
              paymentMethod: se.paymentMethod,
              note:se.Roomif.notetotal,
              source  :'6',
              MemberToken: se.auth_token,
              CustomersStr: JSON.stringify(se.Roomif.arrcustomer),
              UsePointPrice:se.Roomif.pricepoint,
              NoteCorp:se.Roomif.order,
              Invoice:Invoice,
              UserPoints:se.Roomif.point,
              CheckInDate: se.jsonroom.CheckInDate,
              CheckOutDate: se.jsonroom.CheckOutDate,
              TotalNight: se.jsonroom.TotalNight,
              MealTypeIndex : se.booking.indexmealtype,
              CompanyName:se.Roomif.companyname,
              CompanyAddress:se.Roomif.address,
              CompanyTaxCode:se.Roomif.tax,
              BillingAddress :se.Roomif.addressorder,
              promotionCode:se.Roomif.promocode,
              comboid:se.bookCombo.ComboId,
              PenaltyDescription:se.Roomif.textcancel,
              companycontactname: this.Roomif.nameOrder
            },
            json: true
          };
          request(options, function (error, response, body) {
            if(response.statusCode != 200){
              var objError ={
                  page: "roompaymentbank",
                  func: "next",
                  message : response.statusMessage,
                  content : response.body,
                  type: "warning",
                  param:  JSON.stringify(options)
                };
              C.writeErrorLog(objError,response);
            }
            if (error) {
              error.page = "roompaymentbank";
              error.func = "next";
              error.param =  JSON.stringify(options);
              C.writeErrorLog(error,response);
            };
            if (body) {
              if (body.error == 0) {
                // console.log(body.code);
                //var code = { BookingCode: body.code,bookingStatus: body.bookingStatus};
                var code=body.code;
                var stt=body.bookingStatus;
                se.clearClonePage('page-roompaymentdone');
                se.loader.dismiss();
                se.navCtrl.navigateForward('/roompaymentdone/'+code+'/'+stt);
              }
              else{
                se.loader.dismiss();
                //alert(body.Msg);
                se.storage.get('jti').then((memberid) => {
                  if(memberid){
                    se.storage.get('deviceToken').then((devicetoken) => {
                      if(devicetoken){
                        se.gf.refreshToken(memberid, devicetoken).then((token) =>{
                          setTimeout(()=>{
                            se.auth_token = token;
                          },100)
                        });
                      }else{
                        se.showAlertMessageOnly(body.Msg);
                      }
                    })
                  }else{
                    se.showAlertMessageOnly(body.Msg);
                  }
                  
                })
              }
            }
            else{
              error.page = "roompaymentbank";
              error.func = "next";
              error.param = JSON.stringify(options);
              C.writeErrorLog(error,response);
              se.loader.dismiss();
              alert("???? c?? s??? c??? x???y ra, vui l??ng th??? l???i!");
            }
          });
        }else{
          se.loader.dismiss();
          se.presentToastr('Email kh??ng h???p l???. Vui l??ng ki???m tra l???i.');
        }
    }else{
      //Lu???ng thanh to??n t??? mytrip
      //???? c?? s??? bkg => chuy???n lu??n qua trang thanh to??n
      let trip = this.activityService.objPaymentMytrip.trip;
      var code= trip.booking_id;
      var stt= trip.payment_status;
      se.activityService.objPaymentMytrip.textPayment = se.text;
      se.activityService.objPaymentMytrip.textLinkPayment = "M??? website/???ng d???ng " +se.textbank;
      se.activityService.objPaymentMytrip.bankName = se.bankName;
      se.activityService.objPaymentMytrip.bankBranch = se.bankBranch;
      se.activityService.objPaymentMytrip.accountNumber = se.accountNumber;
      let url='';
      //thanh to??n vietcombank
      if(se.ischeckvcbactive){
        url = 'https://www.vietcombank.com.vn/IBanking2020';
      }
      //thanh to??n acb
      else if(se.ischeckacbactive){
        url= 'https://online.acb.com.vn/acbib';
      }
      //thanh to??n vietinbank
      else if(se.ischeckvietinactive){
        url= 'https://ebanking.vietinbank.vn/rcas';
      }
      //thanh to??n techcombank
      else if(se.ischecktechcomactive){
        url='https://ib.techcombank.com.vn/servlet/BrowserServlet';
      }
      //thanh to??n dongabank
      else if(se.ischeckdongaactive){
        url='https://ebanking.dongabank.com.vn/khcn/';
      }
      //thanh to??n agribank
      else if(se.ischeckagriactive){
        url='https://ibank.agribank.com.vn/ibank';
      }
      //thanh to??n bidv
      else if(se.ischeckbidvactive){
        url='https://www.bidv.vn:81/iportalweb/iRetail@1';
      }
      //thanh to??n sacombank
      else if(se.ischecksacomactive){
        url='https://www.isacombank.com.vn/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=303&LANGUAGE_ID=003';
      }
      //thanh to??n hdbank
      else if(se.ischeckhdactive){
        url='https://ebanking.hdbank.vn/ipc/vi/';
      }
      //thanh to??n scb
      else if(se.ischeckscbactive){
        url='https://ebanking.scb.com.vn/?module=login';
      }
      se.activityService.objPaymentMytrip.urlPayment = url;
      se.navCtrl.navigateForward('/roompaymentdoneean/' + code + '/' + se.totalPrice + '/' + 1);
    }
    
  }  
  async showAlertMessageOnly(msg){
    let alert = await this.alertCtrl.create({
      header: '',
      message: 'M?? ????ng nh???p ???? h???t h???n, vui l??ng ????ng nh???p l???i!',
      cssClass: "cls-alert-message",
      backdropDismiss: false,
      buttons: [
      {
        text: 'OK',
        role: 'OK',
        handler: () => {
          this.navCtrl.navigateForward('/login');
          alert.dismiss();
        }
      }
      ]
    });
    alert.present();
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
              page: "roompaymentbank",
              func: "refreshToken",
              message: response.statusMessage,
              content: response.body,
              type: "warning",
              param:  JSON.stringify(options)
            };
            C.writeErrorLog(objError,response);
          }
          if (error) {
            error.page = "roompaymentbank";
            error.func = "refreshToken";
            error.param =  JSON.stringify(options);
            C.writeErrorLog(error,response);
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
  goback(){
    this.navCtrl.back();
    this.activityService.objPaymentMytrip = null;
  }
  async presentToastr(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  openPaymentLink(){
    var se = this, bankid=null, url='';
    //thanh to??n vietcombank
    if(se.ischeckvcbactive){
      bankid = 1;
      url = 'https://www.vietcombank.com.vn/IBanking2020';
    }
    //thanh to??n acb
    else if(se.ischeckacbactive){
      url= 'https://online.acb.com.vn/acbib';
    }
    //thanh to??n vietinbank
    else if(se.ischeckvietinactive){
      bankid = 4;
      url= 'https://ebanking.vietinbank.vn/rcas';
    }
    //thanh to??n techcombank
    else if(se.ischecktechcomactive){
      bankid = 2;
      url='https://ib.techcombank.com.vn/servlet/BrowserServlet';
    }
    //thanh to??n dongabank
    else if(se.ischeckdongaactive){
      bankid = 6;
      url='https://ebanking.dongabank.com.vn/khcn/';
    }
    //thanh to??n agribank
    else if(se.ischeckagriactive){
      bankid = 24;
      url='https://ibank.agribank.com.vn/ibank';
    }
    //thanh to??n bidv
    else if(se.ischeckbidvactive){
      bankid = 19;
      url='https://www.bidv.vn:81/iportalweb/iRetail@1';
    }
    //thanh to??n sacombank
    else if(se.ischecksacomactive){
      bankid = 16;
      url='https://www.isacombank.com.vn/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=303&LANGUAGE_ID=003';
    }
    //thanh to??n hdbank
    else if(se.ischeckhdactive){
      bankid = 7;
      url='https://ebanking.hdbank.vn/ipc/vi/';
    }
    //thanh to??n scb
    else if(se.ischeckscbactive){
      bankid = 25;
      url='https://ebanking.scb.com.vn/?module=login';
    }

    if(bankid){
      // se.activityService.objPaymentMytrip.book = {
      //   code: se.activityService.objPaymentMytrip.trip.HotelIdERP,
      //   timestamp: se.timestamp,
      //   cost: se.activityService.objPaymentMytrip.trip.amount_after_tax,
      //   BanhkID: bankid,
      //   paymentType: "1"
      // }
      // var url = C.urls.baseUrl.urlPayment + "/Home/PaymentAppEan?info=" + JSON.stringify(se.activityService.objPaymentMytrip.book);

      se.openWebpage(url);
    }else{
      se.gf.showToastWarning('Vui l??ng ch???n ng??n h??ng thanh to??n.');
    }
    
  }

  openWebpage(url: string) {
    var se=this;
    this.safariViewController.isAvailable()
  .then((available: boolean) => {
      if (available) {
        this.safariViewController.show({
          url: url,
          hidden: false,
          animated: false,
          transition: 'curl',
          enterReaderModeIfAvailable: true,
          tintColor: '#23BFD8'
        })
        .subscribe((result: any) => {
            if(result.event === 'opened') console.log('Opened');
            else if(result.event === 'loaded') console.log('Loaded');
            else if(result.event === 'closed') 
            {
                var options = {
                  method: 'GET',
                  url: C.urls.baseUrl.urlPost + '/mCheckBooking',
                  qs: { code: se.activityService.objPaymentMytrip.trip.code },
                  headers:
                  {
                  }
                };
                request(options, function (error, response, body) {
                  if (response.statusCode != 200) {
                    var objError = {
                      page: "roomchoosebank",
                      func: "roomchoosebank-mCheckBooking",
                      message: response.statusMessage,
                      content: response.body,
                      type: "warning",
                      param: JSON.stringify(options)
                    };
                    C.writeErrorLog(objError, response);
                  }
                  if (error) {
                    error.page = "roomchoosebank";
                    error.func = "roomchoosebank-mCheckBooking";
                    error.param = JSON.stringify(options);
                    C.writeErrorLog(error, response);
                  };
                  if (body) {
                    var rs = JSON.parse(body);
                    if (rs.StatusBooking == 3) {
                      var id = rs.BookingCode;
                      var total = se.activityService.objPaymentMytrip.trip.priceShow;
                      se.Roomif.priceshowtt = se.activityService.objPaymentMytrip.trip.priceShow;
                      var ischeck = '0';
                      se.activityService.objPaymentMytrip.trip.payment_status = 1;
                    }
                    else {
                      alert("Hi???n t???i, giao d???ch c???a b???n h???t hi???u l???c, xin vui l??ng th??? l???i sau!");
                    }
                  }
                  else {
                    error.page = "roomchoosebank";
                    error.func = "mCheckBooking";
                    error.param = JSON.stringify(options);
                    C.writeErrorLog(error, response);
                    alert("???? c?? s??? c??? x???y ra, vui l??ng th??? l???i!");
                  }
          
                });
                se.navCtrl.navigateBack(['/app/tabs/tab3/']);
            }
            
          },
          (error: any) => console.error(error)
        );

      } else {
        // use fallback browser, example InAppBrowser
      }
    }
  );
  }

  copyClipboard(type){
    if(type == 1){
      this.clipboard.copy(this.accountNumber);
    }else if(type == 2){
      this.clipboard.copy("Ng?????i th??? h?????ng: C??ng ty C??? Ph???n IVIVU.COM");
    }else if(type == 3){
      this.clipboard.copy(this.bookingCode);
    }
    
    this.presentToastr('???? sao ch??p');
  }

  done(){
    this.navCtrl.navigateBack(['/app/tabs/tab3/']);
  }
}
