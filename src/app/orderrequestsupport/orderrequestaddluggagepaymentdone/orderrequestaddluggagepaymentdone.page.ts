import { SearchHotel, ValueGlobal } from './../../providers/book-service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import * as moment from 'moment';
import { NavController, ModalController, Platform,AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { flightService } from '../../providers/flightService';
import { ActivityService, GlobalFunction } from '../../providers/globalfunction';
import { FlightquickbackPage } from '../../flightquickback/flightquickback.page';
import { CustomAnimations } from '../../providers/CustomAnimations';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';
import { LaunchReview } from '@ionic-native/launch-review/ngx';
@Component({
  selector: 'app-orderrequestaddluggagepaymentdone',
  templateUrl: './orderrequestaddluggagepaymentdone.page.html',
  styleUrls: ['./orderrequestaddluggagepaymentdone.page.scss'],
})
export class OrderRequestAddluggagePaymentDonePage implements OnInit {
  code = ""; startdate; enddate; _email = ""; stt; total; text; isDinner
  bookingCode: any;
  bookingFlight: any;
  pacificVNA: string = "";
  pacificVNAReturn: string = "";
  listDiChung: any = "";
  checkInDisplayDC: string;
  checkOutDisplayDC: string;
  checkreview;
  itemAddLuggage: any;
  arrlugdepart = [];
  arrlugreturn = [];
  departCode: string;
  returnCode: string;
  itemLuggageDifferent: any = [];
  diffcode: any;
  constructor(private activatedRoute: ActivatedRoute, public _flightService: flightService,
    private navCtrl: NavController, public searchhotel: SearchHotel, public storage: Storage, private zone: NgZone,
    public valueGlobal: ValueGlobal,
    public gf: GlobalFunction,
    private modalCtrl: ModalController,
    private fb: Facebook,
    private _calendar: Calendar,
    private _platform: Platform, public alertCtrl: AlertController, private launchReview: LaunchReview,
    public activityService: ActivityService) {
      this.storage.get('checkreview').then(checkreview => {
        if (checkreview == 0) {
          this.checkreview = 0;
        } else {
          this.checkreview = checkreview;
        }
      })
      console.log(this.activityService.objRequestAddLuggage);
    this.total = this.activityService.objRequestAddLuggage.totalPriceDisplay;
    this.itemAddLuggage = this.activityService.objRequestAddLuggage;
    if(this.activityService.objRequestAddLuggage.bookingCode){
      this.bookingCode = this.activityService.objRequestAddLuggage.bookingCode;
    }
    this.zone.run(()=> {
      if(this.itemAddLuggage && this.itemAddLuggage.objectDepartLuggage && this.itemAddLuggage.objectDepartLuggage.items && this.itemAddLuggage.objectDepartLuggage.items.length >0){
        this.arrlugdepart = this.itemAddLuggage.objectDepartLuggage.items;
        this.departCode = this.activityService.objPaymentMytrip.trip.itemdepart.departCode + ' - ' + this.activityService.objPaymentMytrip.trip.itemdepart.arrivalCode;
      }
  
      if(this.itemAddLuggage && this.itemAddLuggage.objectReturnLuggage && this.itemAddLuggage.objectReturnLuggage.items && this.itemAddLuggage.objectReturnLuggage.items.length >0){
        this.arrlugreturn = this.itemAddLuggage.objectReturnLuggage.items;
        this.returnCode = this.activityService.objPaymentMytrip.trip.itemreturn.departCode + ' - ' + this.activityService.objPaymentMytrip.trip.itemreturn.arrivalCode;
      }

      if(this.itemAddLuggage && this.itemAddLuggage.objectReturnLuggage && this.itemAddLuggage.objectReturnLuggage.items && this.itemAddLuggage.objectReturnLuggage.items.length >0
        && this.itemAddLuggage.objectDepartLuggage && this.itemAddLuggage.objectDepartLuggage.items && this.itemAddLuggage.objectDepartLuggage.items.length >0
        ){
          this.itemLuggageDifferent = this.activityService.objRequestAddLuggage.objectReturnLuggage.items.filter((itemr) => {return !this.activityService.objRequestAddLuggage.objectDepartLuggage.items.some(itemd => (itemd.lastName + ' ' + itemd.firstName.replace('MSTR','').replace('MISS','').replace('MR','').replace('MRS','').replace('MS','').trim()) == (itemr.lastName + ' ' + itemr.firstName.replace('MSTR','').replace('MISS','').replace('MR','').replace('MRS','').replace('MS','').trim()))});
          this.diffcode = this.activityService.objPaymentMytrip.trip.itemreturn.departCode + ' - ' + this.activityService.objPaymentMytrip.trip.itemreturn.arrivalCode;
      }
    
    })
    

  }


  ngOnInit() {

  }

  async ionViewWillEnter() {
    
  }

  next() {
    
    this._flightService.itemTabFlightActive.emit(true);
    this.valueGlobal.backValue = 'homeflight';
    this._flightService.itemMenuFlightClick.emit(2);
    this.navCtrl.navigateBack('app/tabs/tab1');
  }

  async showBooking() {
    var se = this;
    se._flightService.itemTabFlightActive.emit(true);
    se._flightService.itemMenuFlightClick.emit(2);
    se._flightService.bookingCodePayment = this.bookingCode;
    se._flightService.bookingSuccess = true;
    se.valueGlobal.backValue = "flightmytrip";
    se.navCtrl.navigateBack('/app/tabs/tab1');
  }

  async showQuickBack() {
    const modal: HTMLIonModalElement =
      await this.modalCtrl.create({
        component: FlightquickbackPage,
        componentProps: {
          aParameter: true,
        },
        showBackdrop: true,
        backdropDismiss: true,
        enterAnimation: CustomAnimations.iosCustomEnterAnimation,
        leaveAnimation: CustomAnimations.iosCustomLeaveAnimation,
        cssClass: "modal-flight-quick-back",
      });
    modal.present();
  }
}
