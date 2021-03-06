import { LaunchReview } from '@ionic-native/launch-review/ngx';
import { Component, NgZone, ViewChild, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController, Platform,ToastController } from '@ionic/angular';
import { Booking, ValueGlobal, RoomInfo, Bookcombo, SearchHotel } from '../providers/book-service';
import { Storage } from '@ionic/storage';
import { C } from '../providers/constants';
import { GlobalFunction } from '../providers/globalfunction';
import * as request from 'requestretry';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';
@Component({
  selector: 'app-flightcombopaymentdonebank',
  templateUrl: './flightcombopaymentdonebank.page.html',
  styleUrls: ['./flightcombopaymentdonebank.page.scss'],
})
export class FlightcombopaymentdonebankPage implements OnInit {

  code; status; priceshow=""; number; checkreview = 1;text="";listfly
  accountNumber: any;textbank; bankName; url = ""; urlimgbank = ""; paymentbank; _email; objectFlight;room;nameroom
  constructor(public _platform: Platform, public valueGlobal: ValueGlobal, public navCtrl: NavController, private Roomif: RoomInfo, public zone: NgZone,
    public booking: Booking, public storage: Storage, public alertCtrl: AlertController, public value: ValueGlobal, public modalCtrl: ModalController, public gf: GlobalFunction,
    public bookCombo: Bookcombo, private activatedRoute: ActivatedRoute, private launchReview: LaunchReview, public clipboard: Clipboard, private toastCtrl: ToastController,private safariViewController: SafariViewController,
    private fb: Facebook,
    public searchhotel: SearchHotel, private _calendar: Calendar) {
    this.priceshow = this.bookCombo.totalprice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    this.accountNumber = this.Roomif.accountNumber;
    this.textbank = this.Roomif.textbank;
    this.bankName = this.Roomif.bankName + " . " + this.Roomif.bankBranch;
    this.paymentbank = this.Roomif.paymentbank;
    let infant = 0;
    this.objectFlight = this.gf.getParams('flightcombo');
    this.room = Roomif.arrroom;
    this.nameroom = this.room[0].ClassName;
    this.getbank();
    this.listfly = this.gf.getParams('flightcombo');
    this._email=this.listfly.HotelBooking.CEmail;
    this.booking.ChildAge.forEach(element => {
      if (element == "<1" || Number(element) < 2) {
        infant += 1;
      }
    });

   }

   ionViewWillEnter(){
    this.gf.googleAnalytionCustom('purchase', { items: [{ item_category: 'flightcombopayment', item_name: this.bookCombo.ComboTitle, item_id: this.bookCombo.HotelCode, start_date: this.booking.CheckInDate, end_date: this.booking.CheckOutDate, number_of_rooms: (this.booking.roomNb ? this.booking.roomNb : 1) }], value: this.gf.convertNumberToDouble(this.priceshow), currency: "VND" });

    let se = this;
    se.fb.logEvent(se.fb.EVENTS.EVENT_NAME_PURCHASED, {'fb_content_type': 'hotel'  ,'fb_content_id': se.bookCombo.HotelCode ? se.bookCombo.HotelCode : se.booking.code,'fb_num_items': se.searchhotel.roomnumber, 'fb_value': se.gf.convertNumberToDouble(se.priceshow) ,  'fb_currency': 'VND' , 
    'checkin_date': se.booking.CheckInDate ,'checkout_date ': se.booking.CheckOutDate,'num_adults': se.searchhotel.adult,'num_children': (se.searchhotel.child ? se.searchhotel.child : 0), 'value': se.gf.convertNumberToDouble(se.priceshow), 'currency': 'VND'  }, se.gf.convertNumberToFloat(se.priceshow) );
     
   }

  ngOnInit() {
    var se=this;
    this.status = this.activatedRoute.snapshot.paramMap.get('stt');
    this.code=se.bookCombo.bookingcode;
    if (this.status == 'AL') {
      var options = {
        'method': 'GET',
        'url': C.urls.baseUrl.urlFlight + 'gate/apiv1/GetPeriodPayment/' + this.bookCombo.FlightCode + '',
        'headers': {
          "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
          'Content-Type': 'application/json; charset=utf-8'
        }
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        var json = JSON.parse(response.body);
        var PaymentPeriod = json.periodPaymentDate;
        var ti = new Date();
        var DateNow = moment(ti).format('YYYYMMDD');
        var ho = ti.getHours();
        var addhours = moment(ti).add(1, 'hours').format('HH:mm');
        se.text = addhours + ' c??ng ng??y';
          if (PaymentPeriod) {
            var PaymentPeriodcovert = moment(PaymentPeriod).format('YYYYMMDDHHmm');
            var thu = moment(PaymentPeriod).format('dddd');
            if (ho > 0 && ho < 6) {
              DateNow = DateNow + '1100';
              if (parseInt(PaymentPeriodcovert) >= parseInt(DateNow)) {
                se.text = '11 am c??ng ng??y';
              }
              else {
                var textthu= se.getDay(thu);
                var day=moment(PaymentPeriod).format('DD')+ ' '+ 'thg' + ' ' +  moment(PaymentPeriod).format('MM') +', ' +moment(PaymentPeriod).format('YYYY') 
                se.text = moment(PaymentPeriod).format('HH:mm') + ' ' + textthu + ', ' + day;
              }
            }
            else if (ho >= 6 && ho < 12) {
              DateNow = DateNow + '1700';
              if (parseInt(PaymentPeriodcovert) >= parseInt(DateNow)) {
                se.text = '17h c??ng ng??y';
               
              }
              else {
                var textthu= se.getDay(thu);
                var day=moment(PaymentPeriod).format('DD')+ ' '+ 'thg' + ' ' +  moment(PaymentPeriod).format('MM') +', ' +moment(PaymentPeriod).format('YYYY') 
                se.text = moment(PaymentPeriod).format('HH:mm') + ' ' + textthu + ', ' + day;
              }
            }
            else if (ho >= 12 && ho < 20) {
              DateNow = DateNow + '2030';
              if (parseInt(PaymentPeriodcovert) >= parseInt(DateNow)) {
                se.text = '20h30 c??ng ng??y'
              }
              else {
                var textthu= se.getDay(thu);
                var day=moment(PaymentPeriod).format('DD')+ ' '+ 'thg' + ' ' +  moment(PaymentPeriod).format('MM') +', ' +moment(PaymentPeriod).format('YYYY') 
                se.text = moment(PaymentPeriod).format('HH:mm') + ' ' + textthu + ', ' + day;
              }
            }
            else {
              var res = ti.setTime(ti.getTime() + (24 * 60 * 60 * 1000));
              var date = new Date(res);
              var checkDate = moment(date).format('YYYYMMDD') + '1100';
              if (parseInt(PaymentPeriodcovert) >= parseInt(checkDate)) {
                se.text = '11 am h??m sau';
              } else {
                var textthu= se.getDay(thu);
                var day=moment(PaymentPeriod).format('DD')+ ' '+ 'thg' + ' ' +  moment(PaymentPeriod).format('MM') +', ' +moment(PaymentPeriod).format('YYYY') 
                se.text = moment(PaymentPeriod).format('HH:mm') + ' ' + textthu + ', ' + day;
              }
            }
          }
          else {
            if (ho > 0 && ho < 6) {
              se.text = '11 am c??ng ng??y';
            }
            else if (ho >= 6 && ho < 12) {
              se.text = '17h c??ng ng??y'
            }
            else if (ho >= 12 && ho < 20) {
              se.text = '20h30 c??ng ng??y'
            }
            else {
              se.text = '11 am h??m sau';
            }
          }
      });
    }
  }
  getDay(thu)
  {
    switch (thu) {
      case "Monday":
        thu = "Th??? 2"
        break;
      case "Tuesday":
        thu = "Th??? 3"
        break;
      case "Wednesday":
        thu = "Th??? 4"
        break;
      case "Thursday":
        thu = "Th??? 5"
        break;
      case "Friday":
        thu = "Th??? 6"
        break;
      case "Saturday":
        thu = "Th??? 7"
        break;
      default:
        thu = "Ch??? nh???t"
        break;
    }
    return thu;
  }
  next() {
    if (this.checkreview == 0) {
      this.showConfirm();
    }
    this.gf.setParams(null, 'flightcombo');
    this.navCtrl.navigateBack('/tabs/tab1');
  }
  public async showConfirm() {
    this.storage.set("checkreview", 1);
    let alert = await this.alertCtrl.create({
      header: 'B???n th??ch iVIVU.com?',
      message: '????nh gi?? ???ng d???ng tr??n CH Play',
      cssClass: 'cls-reivewapp',
      mode: "ios",
      buttons: [
        {
          text: 'H???y',
          handler: () => {
          }
        },
        {
          text: '????nh gi??',
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
    })
  }
  openWebpage() {
    var se=this;
    this.safariViewController.isAvailable()
  .then((available: boolean) => {
      if (available) {
        this.safariViewController.show({
          url: this.url,
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
  copyClipboard(type) {
    if (type == 1) {
      this.clipboard.copy(this.accountNumber);
    } else if (type == 2) {
      this.clipboard.copy("Ng?????i th??? h?????ng: C??ng ty C??? Ph???n IVIVU.COM");
    } else if (type == 3) {
      this.clipboard.copy(this.code);
    }
    else if (type == 4) {
      this.clipboard.copy(this.priceshow);
    }
    this.presentToastr('???? sao ch??p');
  }
  async presentToastr(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  getbank() {
    switch (this.paymentbank) {
      case "41":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/2.acb.png";
        this.url = 'https://online.acb.com.vn/acbib';
        break;
      case "42":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/1.vietcombank.png";
        this.url = 'https://www.vietcombank.com.vn/IBanking2020';
        break;
      case "43":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/5.dongabank.png";
        this.url = 'https://ebanking.dongabank.com.vn/khcn/';
        break;
      case "44":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/4.techcombank.png";
        this.url = 'https://ib.techcombank.com.vn/servlet/BrowserServlet';
        break;
      case "45":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/3.viettinbank.png";
        this.url = 'https://ebanking.vietinbank.vn/rcas';
        break;
      case "46":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/8.sacombank.png";
        this.url = 'https://www.isacombank.com.vn/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=303&LANGUAGE_ID=003';
        break;
      case "47":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/6.agribank.png";
        this.url = 'https://ibank.agribank.com.vn/ibank';
        break;
      case "48":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/7.bidv.png";
        this.url = 'https://www.bidv.vn:81/iportalweb/iRetail@1';
        break;
      case "49":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/scb-icon.png";
        this.url = 'https://ebanking.scb.com.vn/?module=login';
        break;
      case "50":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/hdb-icon.png";
        this.url = 'https://ebanking.hdbank.vn/ipc/vi/';
        break;
      case "53":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/ocb-logo.png";
        this.url = 'https://omni.ocb.com.vn/frontend-web/app/auth.html#/login';
        break;
      default:
        break;
    }
  }
  addToCalendar() {
    let se = this;
    if (se._platform.is("cordova")) {
      let itemflight = this.objectFlight.FlightBooking;
      se.createCalendar(itemflight, true, true)
    }

  }

  createCalendar(itemflight, isdepart, createOrModify) {
    let se = this;
    let calOptions = se._calendar.getCalendarOptions();

    let strmess = `M?? ?????t combo: ` + se.code + `

T??n kh??ch s???n: ` + this.booking.HotelName + 
    `

T??n ph??ng: ` + this.nameroom + 
        `

Gi??? ra t??u bay: `+ (isdepart ? (moment(itemflight.departFlight.DepartTime).format("HH") + "h" + moment(itemflight.departFlight.DepartTime).format("mm")) : (moment(itemflight.returnFlight.DepartTime).format("HH") + "h" + moment(itemflight.returnFlight.DepartTime).format("mm"))) +
      `	
      
H??nh kh??ch:

`;
    //Ng?????i l???n
    itemflight.adults.forEach((elementA, index) => {
      if (index != 0) {
        strmess += `

`;
      }
      strmess += index + 1 + ". " + elementA.genderdisplay + " " + elementA.hoten;
      //chuy???n ??i
      if (isdepart && elementA.AncillaryJson) {
        let objjson = JSON.parse(elementA.AncillaryJson);
        if (objjson && objjson.length > 0) {
          strmess += " | ";
          objjson.forEach((elementAncillary, indexanci) => {
            strmess += (elementAncillary.Type == "Baggage" ? "H??nh l??" : "Ch??? ng???i") + ": " + (elementAncillary.Type == "Baggage" ? elementAncillary.Value + 'kg' : elementAncillary.Value) + (indexanci != objjson.length - 1 ? " | " : '');
          });
        }
      }
      //chuy???n v???
      if (!isdepart && elementA.AncillaryReturnJson) {
        let objjson = JSON.parse(elementA.AncillaryReturnJson);
        if (objjson && objjson.length > 0) {
          strmess += " | ";
          objjson.forEach((elementAncillary, indexanci) => {
            strmess += (elementAncillary.Type == "Baggage" ? "H??nh l??" : "Ch??? ng???i") + ": " + (elementAncillary.Type == "Baggage" ? elementAncillary.Value + 'kg' : elementAncillary.Value) + (indexanci != objjson.length - 1 ? " | " : '');
          });
        }
      }
    });
    //tr??? em
    itemflight.childs.forEach((elementC, index) => {
      strmess += `

`;
      strmess += (index + 1 + itemflight.adults.length) + ". " + elementC.genderdisplay + " " + elementC.hoten;
      if (isdepart && elementC.ancillaryJson) {
        let objjson = JSON.parse(elementC.ancillaryJson);
        if (objjson && objjson.length > 0) {
          strmess += " | ";
          objjson.forEach((elementAncillary, indexanci) => {
            strmess += (elementAncillary.Type == "Baggage" ? "H??nh l??" : "Ch??? ng???i") + ": " + (elementAncillary.Type == "Baggage" ? elementAncillary.Value + 'kg' : elementAncillary.Value) + (indexanci != objjson.length - 1 ? " | " : '');
          });
        }
      }

      //chuy???n v???
      if (!isdepart && elementC.ancillaryReturnJson) {
        let objjson = JSON.parse(elementC.ancillaryReturnJson);
        if (objjson && objjson.length > 0) {
          strmess += " | ";
          objjson.forEach((elementAncillary, indexanci) => {
            strmess += (elementAncillary.Type == "Baggage" ? "H??nh l??" : "Ch??? ng???i") + ": " + (elementAncillary.Type == "Baggage" ? elementAncillary.Value + 'kg' : elementAncillary.Value) + (indexanci != objjson.length - 1 ? " | " : '');
          });
        }
      }
    });
    strmess += `

`;

    if (itemflight.childs && itemflight.childs.length > 0) {
      strmess += "Qu?? kh??ch nh??? mang theo gi???y t??? tu??? th??n v?? gi???y khai sinh c???a " + itemflight.childs.map((c) => { return c.hoten }).join(', ') + ".";
    } else {
      strmess += "Qu?? kh??ch nh??? mang theo gi???y t??? tu??? th??n."
    }

    calOptions.firstReminderMinutes = 120;
    calOptions.calendarName = "Chuy???n ??i " + (isdepart ? se.bookCombo.ComboDetail.departureName : se.bookCombo.objComboDetail.arrivalName) + "  -  " + (isdepart ? se.bookCombo.objComboDetail.arrivalName : se.bookCombo.ComboDetail.departureName) + ", " + (isdepart ? moment(itemflight.departFlight.DepartTime).format('DD/MM/YYYY') : moment(itemflight.returnFlight.DepartTime).format('DD/MM/YYYY'));
    calOptions.calendarId = 1;
    let event = {
      // title: (isdepart ? se.bookCombo.ComboDetail.departureName : se.bookCombo.objComboDetail.arrivalName) + "  ???  " + (isdepart ? se.bookCombo.objComboDetail.arrivalName : se.bookCombo.ComboDetail.departureName) + " (" + (isdepart ? itemflight.departFlight.FlightNumber : itemflight.returnFlight.FlightNumber) + ")",
      title: se.code+"-"+se.booking.HotelName + " (" + (isdepart ? itemflight.departFlight.FlightNumber : itemflight.returnFlight.FlightNumber) + ")",
      location: (isdepart ? itemflight.departAirport : itemflight.returnAirport),
      message: strmess,
      startDate: (isdepart ? itemflight.departFlight.DepartTime : itemflight.returnFlight.DepartTime),
      endDate: (isdepart ? itemflight.departFlight.LandingTime : itemflight.returnFlight.LandingTime),
      calOptions
    };

    se._calendar.hasReadWritePermission().then((allow) => {
      let sdate = new Date(event.startDate),
        edate = new Date(event.endDate);
      if (allow) {
        if (createOrModify) {//true - t???o m???i
          se.gf.showLoadingwithtimeout();
          se._calendar.createEventWithOptions(event.title, event.location, event.message, sdate, edate, event.calOptions).then(() => {
           
            if (!isdepart) {
              se.navCtrl.navigateBack(['/app/tabs/tab3/']);
              se._calendar.openCalendar(new Date(itemflight.departFlight.DepartTime)).then(() => {
              });
            }
            else{
              let itemflight = this.objectFlight.FlightBooking;
              se.createCalendar(itemflight, false, true)
            } 
             
          });
        } 
      } else {
        se._calendar.requestReadWritePermission().then(() => {

          if (createOrModify) {//true - t???o m???i
            se.gf.showLoadingwithtimeout();
            se._calendar.createEventWithOptions(event.title, event.location, event.message, sdate, edate, event.calOptions).then(() => {
         
                se._calendar.openCalendar(new Date(itemflight.departFlight.DepartTime)).then(() => {

                });
              
            });
          }
        })
      }

    })
  }
}


