
import { Component, ViewChild, NgZone, OnInit } from '@angular/core';
import {  NavController, ModalController, LoadingController,Platform, ToastController,AlertController } from '@ionic/angular';
import { Booking, RoomInfo, SearchHotel,Bookcombo } from '../providers/book-service';
import { AuthService } from '../providers/auth-service';
import * as request from 'requestretry';

import { C } from '../providers/constants';
import { Storage } from '@ionic/storage';
import { GlobalFunction } from '../providers/globalfunction';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { BizTravelService } from '../providers/bizTravelService';


/**
 * Generated class for the RoompaymentselectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'app-roompaymentselect',
  templateUrl: 'roompaymentselect.html',
  styleUrls: ['roompaymentselect.scss'],
})
export class RoompaymentselectPage implements OnInit{
  timestamp;
  Avatar; Name; Address; cin; cout; dur; room; nameroom; jsonroom; textage = "";arrchild;
  roomnumber; adults; children; breakfast; PriceAvgPlusTAStr;priceshow
  imgroom; roomtype; indexme; indexroom; cin1; cout1;checkpayment;book;roomcancel;hotelid
  pricetemp;loader:any
  ischeckroom;
  intervalID: NodeJS.Timeout;ischeckvisa = false
  auth_token: any = '';  bookingCode = ""; jti; arrbankrmb = []; tokenid; isbtn = false;
  isremember=true;isdisable=false;isshowRemember=false;
  totalPrice: any;
  ischeckedDK=true;
  constructor(public platform: Platform,public searchhotel:SearchHotel,public bookcombo:Bookcombo,public navCtrl: NavController,
    public storage: Storage, public Roomif: RoomInfo,  public booking1: Booking, 
    public booking: Booking, public authService: AuthService,public modalCtrl: ModalController, public loadingCtrl: LoadingController,public alertCtrl: AlertController,
    public gf: GlobalFunction, public zone: NgZone,private router: Router,private safariViewController: SafariViewController,private toastCtrl: ToastController,
    public bizTravelService: BizTravelService) {
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
    this.roomcancel=this.room[0].MealTypeRates[this.indexme];
    this.breakfast = this.room[0].MealTypeRates[this.indexme].Name;
    this.PriceAvgPlusTAStr = this.roomtype.PriceAvgPlusTAStr;
    this.arrchild = this.searchhotel.arrchild;
    if(this.arrchild){
      for (let i = 0; i < this.arrchild.length; i++) {
        if (i == this.arrchild.length - 1) {
          this.textage = this.textage + this.arrchild[i].numage;
        } else {
          this.textage = this.textage + this.arrchild[i].numage + ",";
        }
      }
    }
    
    if (this.textage) {
      this.textage = "(" + this.textage + ")";
    }
    if (Roomif.priceshow) {
      this.priceshow=Roomif.priceshow;
    }
    else
    {
      this.priceshow=this.PriceAvgPlusTAStr;
    }
    this.totalPrice = this.priceshow.toString().replace(/\./g, '').replace(/\,/g, '');
    this.searchhotel.backPage="roompaymentselect";
    this.searchhotel.rootPage="roompaymentselect";
    this.checkpayment=Roomif.payment;
    this.storage.get('jti').then(jti => {
      if (jti) {
        this.jti = jti;
        this.isshowRemember=true;
        this.GeTokensOfMember(0);
      }
      else{
        this.isremember=false;
      }
    })

    this.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
            let text = "Bearer " + auth_token;
            let headers =
                {
                    'cache-control': 'no-cache',
                    'content-type': 'application/json',
                    authorization: text
                }

            this.gf.RequestApi('GET', C.urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo', headers, {}, 'flightcombopaymentselect', 'initpage').then((data)=>{
              if(data && data.bizAccount){
                this.zone.run(()=>{
                  this.bizTravelService.bizAccount = data.bizAccount;
                  this.bizTravelService.isCompany = true;
                })
               
              }else{
                this.bizTravelService.isCompany = false;
              }
            })
          }else{
            this.bizTravelService.isCompany = false;
          }
        });

    //google analytic
    gf.googleAnalytion('roompaymentselect','load','');
    
  }
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.storage.get('auth_token').then(auth_token => {
      this.auth_token = auth_token;
    })
    C.writePaymentLog("hotel", "paymentselect", "purchase", this.bookingCode);
  }
  roompaymentbank() {
    clearInterval(this.Roomif.setInter);
    this.clearClonePage('page-roompaymentbank');
    this.navCtrl.navigateForward("/roompaymentbanknew");
    //google analytic
    this.gf.googleAnalytion('roompaymentselect','roompaymentbankselect','');
  }
  roompaymentlive() {
    clearInterval(this.Roomif.setInter);
    this.clearClonePage('page-roompaymentlive');
    this.navCtrl.navigateForward("/roompaymentlive/0");
    //google analytic
    this.gf.googleAnalytion('roompaymentselect','roompaymentliveselect','');
  }
  roompaymentatm() {
    this.gf.checkroomInternal(this.booking.HotelId, this.Roomif.RoomId, this.booking.CheckInDate, this.booking.CheckOutDate, this.Roomif.roomnumber).then(data => {
      if (data == 'AL') {
        this.navCtrl.navigateForward("/roomchoosebank/0")
      }
      else{
        alert('???? h???t ph??ng, vui l??ng ch???n ph??ng kh??c');
        this.navCtrl.navigateBack('/hoteldetail/' + this.booking.HotelId);
      }
    })

    //google analytic
    this.gf.googleAnalytion('roompaymentselect','roompaymentatmselect','');
  }
  roompaymentvisa() {
    var se = this;
    if (se.booking.CEmail) {
      if (this.arrbankrmb.length==0) {
        this.GeTokensOfMember(1);
      }
    } else {
      se.loader.dismiss();
      se.presentToastr('Email kh??ng h???p l???. Vui l??ng ki???m tra l???i.');
    }
  }
  //th??m c??c ph????ng th???c thanh to??n
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
              // this.TokenId = dataTokens.tokens[i].id;
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
            this.isdisable=true;
          }
        }
      }
      if (stt == 1) {
        if (this.arrbankrmb.length > 0) {
          this.ischeckvisa = true;
        } else {
          //this.presentLoading();
          this.CreateBooking('visa');
        }
      }
    })
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
              if(se.loader){
                se.loader.dismiss();
               }
               if (se.Roomif.point && se.bookingCode) {
               
                se.Roomif.bookingCode=se.bookingCode;
                se.showInfo("??i???m t??ch lu??? "+se.Roomif.point+" ???? ???????c d??ng cho booking "+se.bookingCode+".Xin vui l??ng thao t??c l???i booking!")
                
               
              }
              if (se.Roomif.promocode && se.bookingCode) {
                // alert("M?? gi???m gi?? "+se.Roomif.promocode+" ???? ???????c d??ng cho booking "+se.bookingCode+".Xin vui l??ng thao t??c l???i booking!");
                se.Roomif.bookingCode=se.bookingCode
                se.showInfo("M?? gi???m gi?? "+se.Roomif.promocode+" ???? ???????c d??ng cho booking "+se.bookingCode+".Xin vui l??ng thao t??c l???i booking!")
                // se.Roomif.promocode="";
               
              }
              clearInterval(se.intervalID);
            }
            clearInterval(se.intervalID);
            this.intervalID = setInterval(() => {
              this.checkPayment();
            }, 1000 * 1);
            setTimeout(() => {
              clearInterval(this.intervalID);
            }, 60000 * 15);
          },
          (error: any) => console.error(error)
        );

      } else {
        // use fallback browser, example InAppBrowser
      }
    }
  );
  }
  // callCheckBooking(countCheck){
  //   var se = this;
  //   console.log(countCheck);
  //   if(countCheck <5){
  //     se.checkBookingStatus().then((data) =>{
  //       if(data){
  //         se.checkdone(data.id);
  //       }else{
  //         setTimeout(()=> {
  //           countCheck ++;
  //           se.callCheckBooking(countCheck);
  //         },5000);
          
  //       }
  //     })
  //   }else{
  //     alert("Hi???n t???i, giao d???ch c???a b???n h???t hi???u l???c, xin vui l??ng quay l???i trang Th??ng tin Kh??ch S???n!");
  //     se.loader.dismiss();
  //     se.searchhotel.backPage = "roompaymentselect";
  //     se.navCtrl.navigateBack('/hoteldetail/'+se.booking.HotelId);
  //   }
  // }

  checkdone(id){
    var se = this;
    se.loader.dismiss();
    se.Roomif.priceshowtt = se.priceshow;
    se.navCtrl.navigateForward('/roompaymentdoneean/' + id + '/' + se.priceshow + '/' + '0');
  }
  // checkBookingStatus() : Promise<any>{
  //   var se = this;
  //   return new Promise((resolve, reject) =>{
  //     var options = {
  //       method: 'GET',
  //       url: C.urls.baseUrl.urlPost + '/mCheckBooking',
  //       qs: { code: se.book.code },
  //       headers:
  //       {
  //       }
  //     };
  //     request(options, function (error, response, body) {
  //       if (response.statusCode != 200) {
  //         var objError = {
  //           page: "roomchoosebank",
  //           func: "roomchoosebank-mCheckBooking",
  //           message: response.statusMessage,
  //           content: response.body,
  //           type: "warning",
  //           param:  JSON.stringify(options)
  //         };
  //         C.writeErrorLog(objError,response);
  //       }
  //       if (error) {
  //         error.page = "roomchoosebank";
  //         error.func = "roomchoosebank-mCheckBooking";
  //         error.param =  JSON.stringify(options);
  //         C.writeErrorLog(error,response);
  //       };
  //       if (body) {
  //         var rs = JSON.parse(body);
  //         if (rs.StatusBooking == 3) {
  //           var data = {
  //             id: rs.BookingCode
  //           }
  //           resolve(data);
  //         }
  //         else {
  //           resolve(false);
  //         }
  //       }
  //       else{
  //         error.page = "roomchoosebank";
  //         error.func = "next";
  //         error.param = JSON.stringify(options);
  //         C.writeErrorLog(error, response);
  //         se.loader.dismiss();
  //         alert("???? c?? s??? c??? x???y ra, vui l??ng th??? l???i!");
  //       }
  //     });
  //   })
    
  // }
  goback() {
    clearInterval(this.intervalID);
    if((this.Roomif.point && this.bookingCode) || (this.Roomif.promocode && this.bookingCode))
    {
      // this.Roomif.promocode="";
      this.Roomif.bookingCode=this.bookingCode;
      this.navCtrl.navigateBack('/roomdetailreview');
    }else{
      this.navCtrl.back();
    }
  }
  
  roompaymentbreakdow() {
    var dur = this.dur;
    var roomnumber = this.roomnumber;
    this.clearClonePage("page-roompaymentbreakdown");
    this.navCtrl.navigateForward('/roompaymentbreakdown/' + dur + '/' + roomnumber);
    
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
  // openRoomCancel(){
  //   let modal = this.modalCtrl.create('RoomcanceldatPage',{roomInfo: this.roomcancel});
  //   modal.present();
  // }
  async presentLoading() {
    this.loader = await this.loadingCtrl.create({
    });
    this.loader.present();
  }
  openRoomCancel(){
    this.gf.setParams(this.roomcancel,'roomInfo')
    this.searchhotel.backPage ="roompaymentselect";
    this.navCtrl.navigateForward('/roomcancel');
  }

  async presentToastr(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }

  CreateBooking(paymentType) {
    var se = this;
    se.presentLoading();
    var paymentMethod=se.gf.funcpaymentMethod(paymentType);
    se.gf.checkroomInternal(this.booking.HotelId, this.Roomif.RoomId, this.booking.CheckInDate, this.booking.CheckOutDate, this.Roomif.roomnumber).then(data => {
      se.ischeckroom=data;
      var totalPrice=se.priceshow.toString().replace(/\./g, '').replace(/\,/g, '');
      var url="";
      if (data == 'AL') {
        this.CreateBookingRoom(paymentMethod).then(databook => {
          if (databook) {
            if (databook.error == 0) {
              this.bookingCode = databook.code;
              this.Roomif.bookingCode = databook.code;
              if (paymentType=='visa') {
                //url  = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType='+paymentType+'&source=app&amount=' + totalPrice + '&orderCode=' + databook.code + '&buyerPhone=' + this.Roomif.phone + '&callbackUrl=' + C.urls.baseUrl.urlPayment + '/Home/BlankappNew';
                url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=visa&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' +this.Roomif.phone + '&memberId=' + se.jti + '&TokenId='+se.tokenid+'&rememberToken='+se.isremember+'&callbackUrl='+ C.urls.baseUrl.urlPayment +'/Home/BlankDeepLink';
              }
              else{
                url  = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType='+paymentType+'&source=app&amount=' + totalPrice + '&orderCode=' + databook.code + '&memberId=' + se.jti+ '&buyerPhone=' + this.Roomif.phone + '&callbackUrl=ivivuapp%3A%2F%2Fapp%2Fmyapp';
              }
              
              this.gf.CreateUrl(url).then(dataBuildLink => {
                dataBuildLink = JSON.parse(dataBuildLink);
                if (dataBuildLink.success) {
                  if (paymentType=='visa') {
                    se.openWebpage(dataBuildLink.returnUrl);
                  }
                  else if(paymentType=='payoo_store'){
                      this.Roomif.BillingCode = dataBuildLink.payooStoreData.BillingCode;
                      this.Roomif.PeriodPaymentDate = dataBuildLink.payooStoreData.periodPayment;
                      if (this.loader) {
                        this.loader.dismiss();
                      }
                      this.navCtrl.navigateForward('roompaymentpayoo/' + this.bookingCode + '/0');
                  }
                  else if(paymentType=='payoo_qr'){
                    if (dataBuildLink.success) {
                      this.Roomif.qrimg = dataBuildLink.payooQrData.QRCodeUrl;
                      if (this.loader) {
                        this.loader.dismiss();
                      }
                      this.navCtrl.navigateForward('roompaymentpayoo/' + this.bookingCode + '/1');
                    }
                  }
                  else if(paymentType=='momo'){
                    if (dataBuildLink.success) {
                      if (this.loader) {
                        this.loader.dismiss();
                      }
                      window.open(dataBuildLink.returnUrl.payUrl, '_system');
                      this.setinterval();
                    }
                  }
                }
              })
            }
            else {
              se.loader.dismiss();
              alert(databook.Msg );
              if(this.Roomif.point &&  this.Roomif.bookingCode)
              {
                this.navCtrl.navigateBack('/roomdetailreview');
              }
              if(this.Roomif.promocode &&  this.Roomif.bookingCode)
              {
                this.navCtrl.navigateBack('/roomdetailreview');
              }
            }
          }
          else {
            se.loader.dismiss();
            alert("???? c?? s??? c??? x???y ra, vui l??ng th??? l???i!");
          }
        })
       
      }
      else {
          if(se.loader){
            se.loader.dismiss();
          }
          if (paymentType=='payoo_store') {
            this.CreateBookingRoom(paymentMethod).then(databook => {
              if (databook) {
                if (databook.error == 0) {
                  this.bookingCode = databook.code;
                  se.navCtrl.navigateForward('/roompaymentdone/' +  this.bookingCode  + '/RQ');
                }
              }
            })
          } else {
            alert('???? h???t ph??ng, vui l??ng ch???n ph??ng kh??c');
            se.navCtrl.navigateBack('/hoteldetail/' + se.booking.HotelId);
          }
        
      }
    })
    
  }
  //T???o booking ph??ng
  CreateBookingRoom(paymentMethod): Promise<any>{
    var Invoice = 0;
    this.timestamp = Date.now();
    this.jsonroom.RoomClasses=this.room;
    if (this.Roomif.order) {
      Invoice = 1;
    }
    return new Promise((resolve, reject) => {
      var options = {
        method: 'POST',
        url: C.urls.baseUrl.urlPost + '/mInsertBooking',
        timeout: 10000, maxAttempts: 5, retryDelay: 2000,
        headers:
        {
          'content-type': 'application/json'
        },
        body:
        {
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
      request(options, function (error, response, body) {
        if(response.statusCode != 200){
          var objError ={
              page: "roompaymentselect",
              func: "roompaymentvisa",
              message : response.statusMessage,
              content : response.body,
              type: "warning",
              param:  JSON.stringify(options)
            };
          C.writeErrorLog(objError,response);
        }
        if (error) {
          error.page="roompaymentselect";
          error.func="roompaymentvisa";
          error.param =  JSON.stringify(options);
          C.writeErrorLog(error,response);
        };
        if (body) {
          resolve(body);
        }
      });
    });
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

  setinterval()
  {
    clearInterval(this.intervalID);
    // this.searchhotel.backPage = "foodpaymentselect";
    // this.navCtrl.navigateBack('/app/tabs/tab1');
    this.intervalID = setInterval(() => {
      this.checkPayment();
    }, 1000 * 1);
    setTimeout(() => {
      clearInterval(this.intervalID);
    }, 60000 * 15);
  }
  //check Payment
  checkPayment(){
    var se = this;
    var options = {
      method: 'GET',
      url: C.urls.baseUrl.urlPost + '/mCheckBooking',
      qs: { code: se.bookingCode },
      headers:
      {
      }
    };
    request(options, function (error, response, body) {
      if (response.statusCode != 200) {
        var objError = {
          page: "roompaymentselect",
          func: "openWebpage",
          message: response.statusMessage,
          content: response.body,
          type: "warning",
          para: JSON.stringify(options)
        };
        C.writeErrorLog(objError, response);
      }
      if (error) {
        error.page = "roompaymentselect";
        error.func = "openWebpage";
        error.param = JSON.stringify(options);
        C.writeErrorLog(error, response);
      };
      if (body) {
        var rs = JSON.parse(body);
        if (rs.StatusBooking == 3) {
          var id = rs.BookingCode;
          var total = se.priceshow;
          se.Roomif.priceshowtt = se.priceshow;
          var ischeck = '0'
          se.clearClonePage('page-roompaymentdone');
          clearInterval(se.intervalID);
          if (se.safariViewController) {
            se.safariViewController.hide();
          }
          if(se.loader){
            se.loader.dismiss();
          }
          se.navCtrl.navigateForward('/roompaymentdoneean/' + id + '/' + total + '/' + ischeck);
        }
        else if(rs.StatusBooking == 9||rs.StatusBooking == 2)
        {
          if(se.loader){
            se.loader.dismiss();
          }
          if (se.safariViewController) {
            se.safariViewController.hide();
          }
          clearInterval(se.intervalID);
          if (se.Roomif.point && se.bookingCode) {
               
            se.showInfo("??i???m t??ch lu??? "+se.Roomif.point+" ???? ???????c d??ng cho booking "+se.bookingCode+".Xin vui l??ng thao t??c l???i booking!")
            
           
          }
          if (se.Roomif.promocode && se.bookingCode) {
            // alert("M?? gi???m gi?? "+se.Roomif.promocode+" ???? ???????c d??ng cho booking "+se.bookingCode+".Xin vui l??ng thao t??c l???i booking!");
            se.showInfo("M?? gi???m gi?? "+se.Roomif.promocode+" ???? ???????c d??ng cho booking "+se.bookingCode+".Xin vui l??ng thao t??c l???i booking!")
            // se.Roomif.promocode="";
           
          }
        }
      }
      else {
        error.page = "roompaymentselect";
        error.func = "openWebpage";
        error.param = JSON.stringify(options);
        C.writeErrorLog(error, response);
        se.loader.dismiss();
        alert("???? c?? s??? c??? x???y ra, vui l??ng th??? l???i!");
      }
    });
  }
  next() {
    this.CreateBooking('visa');
  }
  chooseacc(item) {
    this.tokenid = item.id;
    this.isbtn = true;
    this.isdisable=true;
    this.isremember=true;
  }
  nochooseacc() {
    this.tokenid = "";
    this.isbtn = true;
    this.isdisable=false;
    this.isremember=true;
  }
  rememberCard(){
    this.isremember=!this.isremember
  }

  paymentbiztravel(){
    if(this.bizTravelService.bizAccount.balanceAvaiable - this.totalPrice*1 <=0){
      return;
    }
    this.gf.showLoading();
    this.storage.get('auth_token').then(auth_token => {
      if(auth_token){
        var text = "Bearer " + auth_token;
        var  headers =
        {
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            authorization: text
        }
        var params = {memberid: this.jti, totalprice: this.priceshow.toString().replace(/\./g, '').replace(/\,/g, '') };
        this.gf.checkAcceptBizCredit('POST', C.urls.baseUrl.urlMobile + '/api/Dashboard/CheckAcceptBizCredit', headers, params, 'companyinfo', 'GetBizTransactions').then((data) => {
          if(data && data.error == 0){
            this.bizTravelService.phoneOtp = data.phoneOtp;
            this.bizTravelService.phoneOtpShort = data.phoneOtpShort;
            this.bizTravelService.paymentType = 2;
            this.roomPayment();
          }else{
            this.gf.hideLoading();
            this.gf.showToastWarning('Account hi???n t???i kh??ng c?? quy???n thanh to??n. Vui l??ng ki???m tra l???i.');
          }
        })
      }else{
        this.gf.hideLoading();
      }
     
    })
  }

  roomPayment(){
    let se = this;
    se.gf.checkroomInternal(se.booking.HotelId, se.Roomif.RoomId, se.booking.CheckInDate, se.booking.CheckOutDate, se.Roomif.roomnumber).then(data => {
      se.ischeckroom=data;
      var totalPrice=se.priceshow.toString().replace(/\./g, '').replace(/\,/g, '');
      var url="";
      if (data == 'AL') {
        se.CreateBookingRoom('companycredit').then(databook => {
          if (databook) {
            if (databook.error == 0) {
              se.bookingCode = databook.code;
              se.Roomif.bookingCode = databook.code;
              url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=companycredit&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' +se.Roomif.phone + '&memberId=' + se.jti +'&callbackUrl='+ C.urls.baseUrl.urlPayment +'/Home/BlankDeepLink';
              
              se.gf.CreateUrl(url).then(dataBuildLink => {
                dataBuildLink = JSON.parse(dataBuildLink);
                se.gf.hideLoading();
                if (dataBuildLink.success) {
                  se.bizTravelService.routeBackWhenCancel = 'roomdetailreview';
                  se.bizTravelService.mytripPaymentBookingCode = se.bookingCode;
                  se.navCtrl.navigateForward('confirmpayment');
                }else{
                  alert("???? c?? s??? c??? x???y ra, vui l??ng th??? l???i!");
                }
              })
            }
            else {
              se.gf.hideLoading();
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
                      se.showAlertMessageOnly(databook.Msg);
                    }
                  })
                }else{
                  se.showAlertMessageOnly(databook.Msg);
                }
                
              })
              // alert(databook.Msg );
              // if(se.Roomif.point &&  se.Roomif.bookingCode)
              // {
              //   se.navCtrl.navigateBack('/roomdetailreview');
              // }
              // if(se.Roomif.promocode &&  se.Roomif.bookingCode)
              // {
              //   se.navCtrl.navigateBack('/roomdetailreview');
              // }
            }
          }
          else {
            se.gf.hideLoading();
            alert("???? c?? s??? c??? x???y ra, vui l??ng th??? l???i!");
          }
        })
       
      }
    })
  }
  async showInfo(msg) {
    let alert = await this.alertCtrl.create({
      header: "Th??ng b??o",
      message: msg,
      buttons: [{
        text: 'OK',
        role: 'OK',
        handler: () => {
          alert.dismiss();
          this.Roomif.promocode="";
          this.navCtrl.navigateForward('/roomdetailreview');
        }
      }
      ]
    });
    alert.present();
  }
  checkDk(){
    this.ischeckedDK=!this.ischeckedDK;
  }
  openWebpageDK(url: string) {
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
}
