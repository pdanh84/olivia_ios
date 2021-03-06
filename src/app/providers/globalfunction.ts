import { Injectable, EventEmitter } from '@angular/core';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import { Platform, AlertController, ToastController, NavController, LoadingController } from '@ionic/angular';
import { C } from '../providers/constants';
import * as $ from 'jquery';
import * as request from 'requestretry';
import { Storage } from '@ionic/storage';
import { ValueGlobal,SearchHotel } from './book-service';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { File as IonicFileService, FileEntry, IFile } from '@ionic-native/file/ngx';
import { NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { foodService } from './foodService';
import * as moment from 'moment';
import { flightService } from './flightService';
import * as clone from 'clone';

import jwt_decode from 'jwt-decode';
import { FCM } from '@ionic-native/fcm/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';

@Injectable({
    providedIn: 'root'  // <- ADD THIS
})
export class GlobalFunction{
  private listCarParams : any;
  private listObjcars : any;
    private DepartureParams :any;
    private showpickupdatefromdetail = false;
    private HotelRoomDetail: any;
    private exchangeGiftParams: any;
    private mytripBookingDetailParams: any;
    private roomInfoParams: any;
    private hotelNotesParams: any;
    private hotelExpsNotesParams: any;
    private showOccupancyFromRequestcombo: boolean = false;
    private hotelListMoodParams:any;
    private listFlightParams:any;
    private flightComboParams:any;
    private hotellistmoodselectedParams:any;
    private seemoreblogParams: any;
    private resetBlogTripsParams: any;
  notifiBookingCodeParams: any;
  userAvatarParams: any;
  tripFeedBackParams: any;
  selectedTab3Params: any;
  notifiSwitchObjParams: any;
  experiencesearchParams: any;
  experienceItemParams: any;
  experienceFilter_regionIdParams: any;
  experiencesearchTagsIdParams: any;
  listDistanceNearByParams: any;
  listSearch_ExperienceDetailParams: any;
  experienceFilter_regionCodeParams: any;
  listsearchblogParams: any;
  blogidParams: any;
  itemslugParams: any;
  searchblogtextParams: any;
  experienceLocationParams: any;
  insurrenceDetailParams: any;
  insurranceClaimedParams: any;
  insurrenceHistoryParams: any;
  objinfofly: any;
  isOnline: any;
  public reload = true;
  loader: Promise<HTMLIonLoadingElement>;
  private allowCheckHoldTicket: boolean = true;
  intervalHoldTicket: NodeJS.Timeout;

    constructor(public platform: Platform,public fba: FirebaseAnalytics, public alertCtrl: AlertController,public toastCtrl: ToastController,
      public storage: Storage,
      public navCtrl: NavController,
      public valueGlobal: ValueGlobal,
      public appVersion: AppVersion,
      private ionicFileService: IonicFileService,
      public _foodService: foodService,
      public loadCtrl: LoadingController,
      public _flightService: flightService,
      private fb: Facebook,
      private fcm: FCM,private searchhotel: SearchHotel){

    }
    
    public googleAnalytion(viewName,action,options ){
        if(C.ENV == "prod" || C.ENV == "release"){
            this.platform.ready().then(() => {
              if(action != "screen_view"){
                this.fba.logEvent(action, { 'hitType': 'event', 'eventCategory': viewName , 'eventLabel': options})
                .then((res: any) => {console.log(res);})
                .catch((error: any) => console.error(error));
              }else{
                //this.fba.logEvent(action, { 'hitType': 'event', 'firebase_screen_class': viewName , 'firebase_screen_name': viewName})
                //.then((res: any) => {console.log(res);})
                //.catch((error: any) => console.error(error));
                this.fba.setCurrentScreen(viewName);
              }
              
        })
      }
    }
    
    public googleAnalytionCustom(action,params, type? ){
      if(C.ENV == "prod" || C.ENV == "release"){
          this.platform.ready().then(() => {
              this.fba.logEvent(action, params)
              .then((res: any) => {console.log(res);})
              .catch((error: any) => console.error(error));
      })
    }
  }

    /**
     * H??m show c???nh b??o chung
     * @param header header c???a warning
     * @param msg n???i dung warning
     * @param textButtonOK text hi???n th??? button ok
     */
    public async showWarning(header,msg,textButtonOK){
      //if(!this.alertCtrl){
        let alert = await this.toastCtrl.create({
        //   header: header,
        //   message: msg,
        //   buttons: [{
        //     text: textButtonOK,
        //     role: 'OK',
        //     handler: () => {
        //     }
        //   }
        // ]
        message: msg,
        position: "top",
        header: header,
        duration: 3000
      });
      alert.present();
      //}
    }

    public setParams(params,type) {
      if(type == 'departure'){
        this.DepartureParams = params;
      }
      if(type == 'showpickupdatefromdetail'){
        this.showpickupdatefromdetail = params;
      }
      if(type=='hotelroomdetail'){
        this.HotelRoomDetail = params;
      }
      if(type=='exchangegift'){
        this.exchangeGiftParams = params;
      }
      if(type=='mytripbookingdetail'){
        this.mytripBookingDetailParams = params;
      }
      if(type=='roomInfo'){
        this.roomInfoParams = params;
      }
      if(type=='hotelnotes'){
        this.hotelNotesParams = params;
      }
      if(type=='hotelexpsnotes'){
        this.hotelExpsNotesParams = params;
      }
      if(type=='requestcombo'){
        this.showOccupancyFromRequestcombo = params;
      }
      if(type=='hotellistmood'){
        this.hotelListMoodParams = params;
      }
      if(type=='hotellistmoodselected'){
        this.hotellistmoodselectedParams = params;
      }
      if(type=='listflight'){
        this.listFlightParams = params;
      }
      if(type=='flightcombo'){
        this.flightComboParams = params;
      }
      if(type=='seemoreblog'){
        this.seemoreblogParams = params;
      }
      if(type=='resetBlogTrips'){
        this.resetBlogTripsParams = params;
      }
      if(type=='notifiBookingCode'){
        this.notifiBookingCodeParams = params;
      }
      if(type =='userAvatar'){
        this.userAvatarParams = params;
      }
      if(type == 'tripFeedBack'){
        this.tripFeedBackParams = params;
      }
      if(type == 'selectedTab3'){
        this.selectedTab3Params = params;
      }
      if(type =='notifiSwitchObj'){
        this.notifiSwitchObjParams = params;
      }
      if(type=='experiencesearch'){
        this.experiencesearchParams = params;
    }
    if(type=='experienceItem'){
        this.experienceItemParams = params;
    }
    if(type=='experienceFilter_regionId'){
        this.experienceFilter_regionIdParams = params;
    }
    if(type=='experienceFilter_regionCode'){
      this.experienceFilter_regionCodeParams = params;
    }
    if(type=='experiencesearchTagsId'){
        this.experiencesearchTagsIdParams = params;
    }
    if(type=='listDistanceNearBy'){
        this.listDistanceNearByParams = params;
    }
    if(type=='listSearch_ExperienceDetail'){
        this.listSearch_ExperienceDetailParams = params;
    }
    if(type=='listsearchblog'){
      this.listsearchblogParams = params;
    }
    if(type=='blogid'){
      this.blogidParams = params;
    }
    if(type=='itemslug'){
      this.itemslugParams = params;
    }
    if(type=='searchblogtext'){
      this.searchblogtextParams = params;
    }
    if(type=='searchblogmodaltext'){
      this.searchblogtextParams = params;
    }
    if(type == 'experienceLocation'){
      this.experienceLocationParams = params;
    }
    if (type == 'listcar') {
      this.listCarParams = params;
  }
  if (type == 'carscombo') {
      this.listObjcars = params;
  }
   
        if(type=='insurrenceDetail'){
            this.insurrenceDetailParams = params;
        }
        if(type=='insurranceClaimed'){
            this.insurranceClaimedParams = params;
        }
        if(type=='insurrenceHistory'){
            this.insurrenceHistoryParams = params;
        }
        if(type=='objinfofly'){
          this.objinfofly = params;
      }
    }
  
    public getParams(type) {
      if(type == 'departure'){
        return this.DepartureParams;
      }
      if(type == 'showpickupdatefromdetail'){
        return this.showpickupdatefromdetail;
      }
      if(type=='hotelroomdetail'){
        return this.HotelRoomDetail;
      }
      if(type=='exchangegift'){
        return this.exchangeGiftParams;
      }
      if(type=='mytripbookingdetail'){
        return this.mytripBookingDetailParams;
      }
      if(type=='roomInfo'){
        return this.roomInfoParams;
      }
      if(type=='hotelnotes'){
        return this.hotelNotesParams;
      }
      if(type=='hotelexpsnotes'){
        return this.hotelExpsNotesParams;
      }
      if(type=='requestcombo'){
        return this.showOccupancyFromRequestcombo;
      }
      if(type=='hotellistmood'){
        return this.hotelListMoodParams;
      }
      if(type=='hotellistmoodselected'){
        return this.hotellistmoodselectedParams;
      }
      if(type=='listflight'){
        return this.listFlightParams;
      }
      if(type=='flightcombo'){
        return this.flightComboParams;
      }
      if(type=='seemoreblog'){
        return this.seemoreblogParams;
      }
      if(type=='resetBlogTrips'){
        return this.resetBlogTripsParams;
      }
      if(type=='notifiBookingCode'){
        return this.notifiBookingCodeParams;
      }
      if(type =='userAvatar'){
        return this.userAvatarParams;
      }
      if(type == 'tripFeedBack'){
        return this.tripFeedBackParams;
      }
      if(type == 'selectedTab3'){
        return this.selectedTab3Params;
      }
      if(type =='notifiSwitchObj'){
        return this.notifiSwitchObjParams;
      }
      if(type=='experiencesearch'){
        return this.experiencesearchParams;
      }
      if(type=='experienceItem'){
        return this.experienceItemParams;
      }
      if(type=='experienceFilter_regionId'){
        return this.experienceFilter_regionIdParams;
      }
      if(type=='experienceFilter_regionCode'){
        return this.experienceFilter_regionCodeParams;
      }
      if(type=='experiencesearchTagsId'){
        return this.experiencesearchTagsIdParams;
      }
      if(type=='listDistanceNearBy'){
        return this.listDistanceNearByParams;
      }
      if(type=='listSearch_ExperienceDetail'){
        return this.listSearch_ExperienceDetailParams;
      }
      if(type=='listsearchblog'){
        return this.listsearchblogParams;
      }
      if(type=='blogid'){
        return this.blogidParams;
      }
      if(type=='itemslug'){
        return this.itemslugParams;
      }
      if(type=='searchblogtext'){
        return this.searchblogtextParams;
      }
      if(type=='searchblogmodaltext'){
        return this.searchblogtextParams;
      }
      if(type == 'experienceLocation'){
        return this.experienceLocationParams;
      }
      if (type == 'listcar') {
      return this.listCarParams;
      }
      if (type == 'carscombo') {
          return this.listObjcars;
      }
      if(type=='insurrenceDetail'){
        return this.insurrenceDetailParams;
      }
      if(type=='insurranceClaimed'){
        return this.insurranceClaimedParams;
      }
      if(type=='insurrenceHistory'){
        return this.insurrenceHistoryParams;
      }
      if(type=='objinfofly'){
        return this.objinfofly;
      }
    }
    //l???y h??nh th???c thanh to??n
    public getbank(method) {
      var textbank, bankName, bankBranch, accountNumber,urlimgbank,url;
      switch (method) {
        case 41:
          textbank = "ACBbank";
          bankName = "Ng??n h??ng TMCP ?? Ch??u (ACB)";
          bankBranch = "Chi nh??nh Tp. H??? Ch?? Minh";
          accountNumber = "190862589";
          urlimgbank = "https://res.ivivu.com/payment/img/banklogo/2.acb.png";
          url = 'https://online.acb.com.vn/acbib';
          break;
        case 42:
          textbank = "Vietcombank";
          bankName = "Ng??n TMCP Ngo???i Th????ng Vi???t Nam (VCB)";
          bankBranch = "Chi nh??nh Tp. H??? Ch?? Minh";
          accountNumber = "007 1000 895 230";
          urlimgbank = "https://res.ivivu.com/payment/img/banklogo/1.vietcombank.png";
          url = 'https://www.vietcombank.com.vn/IBanking2020';
          break;
        case 45:
          textbank = "Vietinbank";
          bankName = "Ng??n h??ng TMCP C??ng th????ng Vi???t Nam VietinBank";
          bankBranch = "Chi Nh??nh 03, Tp.HCM";
          accountNumber = "1110 0014 2852";
          urlimgbank = "https://res.ivivu.com/payment/img/banklogo/3.viettinbank.png";
          url = 'https://ebanking.vietinbank.vn/rcas';
          break;
        case 44:
          textbank = "Techcombank";
          bankName = "NH TMCP K??? Th????ng Vi???t Nam (Techcombank)";
          bankBranch = "Chi nh??nh Tr???n Quang Di???u, Tp.HCM";
          accountNumber = "19128840912016";
          urlimgbank = "https://res.ivivu.com/payment/img/banklogo/4.techcombank.png";
          url = 'https://ib.techcombank.com.vn/servlet/BrowserServlet';
          break;
        case 43:
          textbank = "Dongabank";
          bankName = "NH TMCP ????ng ?? (DongABank)";
          bankBranch = "Chi nh??nh L?? V??n S???, Tp.HCM";
          accountNumber = "0139 9166 0002";
          urlimgbank = "https://res.ivivu.com/payment/img/banklogo/5.dongabank.png";
          url = 'https://ebanking.dongabank.com.vn/khcn/';
          break;
        case 47:
          textbank = "Agribank";
          bankName = "Ng??n h??ng Agribank";
          bankBranch = "Chi Nh??nh 03, Tp.HCM";
          accountNumber = "160 2201 361 086";
          urlimgbank = "https://res.ivivu.com/payment/img/banklogo/6.agribank.png";
          url = 'https://ibank.agribank.com.vn/ibank';
          break;
        case 48:
          textbank = "BIDV";
          bankName = "NH TM CP ?????u T?? v?? Ph??t Tri???n Vi???t Nam (BIDV)";
          bankBranch = "Chi Nh??nh 02, Tp.HCM";
          accountNumber = "130 1000 147 4890";
          urlimgbank = "https://res.ivivu.com/payment/img/banklogo/7.bidv.png";
          url = 'https://www.bidv.vn:81/iportalweb/iRetail@1';
          break;
        case 46:
          textbank = "Sacombank";
          bankName = "Ng??n H??ng TMCP S??i G??n Th????ng T??n (Sacombank)";
          bankBranch = "Chi nh??nh Cao Th???ng, Tp.HCM";
          accountNumber = "060 0952 73354";
          urlimgbank = "https://res.ivivu.com/payment/img/banklogo/8.sacombank.png";
          url = 'https://www.isacombank.com.vn/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=303&LANGUAGE_ID=003';
          break;
        case 50:
          textbank = "HDBank";
          bankName = "Ng??n h??ng HDBANK";
          bankBranch = "Chi nh??nh S??i g??n";
          accountNumber = "052704070018649";
          urlimgbank = "https://res.ivivu.com/payment/img/banklogo/hdb-icon.png";
          url = 'https://ebanking.hdbank.vn/ipc/vi/';
          break;
        case 49:
          textbank = "SCB";
          bankName = "Ng??n H??ng S??i G??n (SCB)";
          bankBranch = "Chi nh??nh Ph?? ????ng";
          accountNumber = "023 0109 7937 00001";
          urlimgbank = "https://res.ivivu.com/payment/img/banklogo/scb-icon.png";
          url = 'https://ebanking.scb.com.vn/?module=login';
          break;
        case 53:
          textbank = "OCB";
          bankName = "Ng??n h??ng Ph????ng ????ng (OCB)";
          bankBranch = "Ch??? L???n, TP.HCM";
          accountNumber = "001 7101 6190 02045";
          urlimgbank = "https://res.ivivu.com/payment/img/banklogo/ocb-logo.png";
          url = 'https://omni.ocb.com.vn/frontend-web/app/auth.html#/login';
          break;
        default:
          textbank = "ACBbank";
          bankName = "Ng??n h??ng TMCP ?? Ch??u (ACB)";
          bankBranch = "Chi nh??nh Tp. H??? Ch?? Minh";
          accountNumber = "190862589";
          urlimgbank = "https://res.ivivu.com/payment/img/banklogo/2.acb.png";
          url = 'https://online.acb.com.vn/acbib';
        break;
      }
      return { textbank: textbank, bankName: bankName,bankBranch: bankBranch, accountNumber: accountNumber,urlimgbank:urlimgbank,url:url }
    }
    public getDayOfWeek(date) {
      let d = moment(date).format('dddd');
       let dayname ='', daynameshort ='';
       switch (d) {
         case "Monday":
           dayname = "Th??? 2";
           daynameshort="T2";
           break;
         case "Tuesday":
           dayname = "Th??? 3";
           daynameshort="T3";
           break;
         case "Wednesday":
           dayname = "Th??? 4";
           daynameshort="T4";
           break;
         case "Thursday":
           dayname = "Th??? 5";
           daynameshort="T5";
           break;
         case "Friday":
           dayname = "Th??? 6";
           daynameshort="T6";
           break;
         case "Saturday":
           dayname = "Th??? 7";
           daynameshort="T7";
           break;
         default:
           dayname = "Ch??? nh???t";
           daynameshort="CN";
           break;
       }
     return { dayname: dayname,daynameshort: daynameshort  }
   }

    public checkExistsIndex(array,idx){
      return array.find((item) => {
         return item == idx;
      })
    }

    checkExistsItemInArray(arrays: any, item: any, type: any) {
      var res = false;
      if(type){
        if (type == 'trip') {
          res = arrays.some(r => r.id == item.id);
        }
        if (type == 'order') {
          res = arrays.some(r => r.booking_id == item.booking_id);
        }
        if(type == 'experiencesearch' || 'blog'){
          res = arrays.some(r => r.id == item.id);
        }
        if(type=='filtername'){
          res = arrays.some(r => r == item);
        }
        
        if(type == 'cathay'){
          res = arrays.some(r => r.insurance_code == item.insurance_code);
        }
      }
      else{
        res = arrays.some(r => r.id == item.id);
      }
      
      return res;
    }

    public removeItemInArrayByName(array,item){
      array.forEach( (arrayItem, index) => {
        if(arrayItem.name == item.name) array.splice(index,1);
      });
    }
  
    public removeItem(array,itemcheck){
      array.forEach( (item, index) => {
        if(item == itemcheck) array.splice(index,1);
      });
   }

   public removeItemInArray(array,item){
    array.forEach( (arrayItem, index) => {
      if(arrayItem.id == item.id) array.splice(index,1);
    });
 }

   public async showToastWarning(msg){
    let alert = await this.toastCtrl.create(({
      message: msg,
      duration: 3000,
      position: "top"
    }))
    alert.present();
  }

  public async showMessageWarning(msg){
    let alert = await this.alertCtrl.create(({
      message: msg,
    }))
    alert.present();
  }

  public setActivatedTab(tabIndex){
    var objTab = document.querySelectorAll('ion-tab-bar');
    if(objTab && objTab.length >0){
      var tab = objTab[objTab.length-1];
      if(tab){
        setTimeout(() => {
          //$(tab.children.item( (tabIndex-1)*2 )).addClass('tab-selected');
          //$(tab.children.item( (tabIndex-1)*2 )).attr('aria-selected','true');
          $(tab.children.item( (tabIndex-1)*2 )).attr('aria-selected','true').siblings().attr('aria-selected','false');
        }, 500);
          
      }
    }
   }

   /**
    * ?????y token + memberid l??u xu???ng db
    * @param devicetoken key token c???a device
    * @param authentoken key id member user
    */
   pushTokenAndMemberID(authentoken, devicetoken, appversion){
    var se = this;
    console.log(devicetoken);
    if (authentoken) {
        var text = "Bearer " + authentoken;
        var options = {
        method: 'POST',
        url: C.urls.baseUrl.urlMobile +'/mobile/OliviaApis/PushTokenOfUser',
        timeout: 10000, maxAttempts: 5, retryDelay: 2000,
        headers:
        {
            'cache-control': 'no-cache',
            'content-type': 'application/json-patch+json',
            authorization: text
        },
        body: { tokenId: devicetoken, appVersion: appversion.replace(/\./g, '') },
        json: true
      };
      request(options, function (error, response, body) {
          if (error) {
              error.page = "login";
              error.func = "pushTokenAndMemberID";
              error.param = JSON.stringify(options);
              C.writeErrorLog(error,response);
          }else if(body){
              var obj = JSON.parse(body);
             
          }
      })
    }
  }

  DeleteTokenOfUser(deviceToken, userToken, appversion) {
    var se = this;
    if (userToken) {
        var text = "Bearer " + userToken;
        var options = {
            method: 'POST',
            url: C.urls.baseUrl.urlMobile + '/mobile/OliviaApis/DeleteNotificationTokenOfUser',
            timeout: 10000,
            maxAttempts: 5,
            retryDelay: 2000,
            headers: {
                'cache-control': 'no-cache',
                'content-type': 'application/json-patch+json',
                authorization: text
            },
            body: {
                tokenId: deviceToken,
                appVersion: appversion ? appversion.replace(/\./g, '') : ''
            },
            json: true
        };
        request(options, function (error, response, body) {
            if (error) {
                error.page = "logout";
                error.func = "DeleteNotificationTokenOfUser";
                error.param = JSON.stringify(options);
                C.writeErrorLog(error,response);
            }
        })
    }
}

public getAppVersion() {
  this.appVersion.getVersionNumber().then(version => {
      return version.replace(/\./g, '');
  })
}

  /**
  * H??m g???i api chung
  * @param methodFunc ph????ng th???c GET/POST
  * @param strUrl Chu???i api
  * @param headerObj object header n???u c??
  * @param bodyObj object body n???u c??
  * @param pageName T??n page g???i api
  * @param funcName T??n fucntion g???i api
  */
  async RequestApi(methodFunc, strUrl, headerObj, bodyObj, pageName, funcName): Promise<any> {
    var se = this; 
    return new Promise(
        (resolve, reject) => {
          var options;
          if(headerObj && bodyObj ){
            options = {
              method: methodFunc,
              url: strUrl,
              headers: headerObj,
              body: bodyObj,
              json: true,
              timeout: 180000,
              maxAttempts: 5,
              retryDelay: 2000
            }
          }
          
          if(headerObj && !bodyObj){
            options = {
              method: methodFunc,
              url: strUrl,
              timeout: 180000,
              maxAttempts: 5,
              retryDelay: 2000,
              headers: headerObj
            }
          }

          if(!headerObj && !bodyObj){
            options = {
              method: methodFunc,
              url: strUrl,
              timeout: 180000,
              maxAttempts: 5,
              retryDelay: 2000,
            }
          }

            request(options, function (error, response, body) {
                if (response.statusCode != 200) {
                  if(headerObj && headerObj.authorization && response.statusCode == 401){//Token h???t h???n
                    //se.showConfirm("Phi??n ????ng nh???p h???t h???n. Xin vui l??ng ????ng nh???p l???i ????? s??? d???ng ch???c n??ng n??y.");
                      se.storage.get('jti').then((memberid) => {
                        se.storage.get('deviceToken').then((devicetoken) => {
                          se.refreshToken(memberid, devicetoken).then((token) =>{
                            let text = "Bearer " + token;
                            let headers =
                                {
                                    'cache-control': 'no-cache',
                                    'content-type': 'application/json',
                                    authorization: text
                                }
                
                            setTimeout(()=>{
                              se.RequestApi(methodFunc, strUrl, headers, bodyObj, pageName, funcName);
                            },300)
                          });
          
                        })
                      })
                  }else{
                      var objError = {
                          page: pageName,
                          func: funcName,
                          message: response.statusMessage,
                          content: response.body,
                          type: "warning",
                          param: JSON.stringify(options)
                      };
                      C.writeErrorLog(objError,response);
                  }
                }
                if (error) {
                    error.page = pageName;
                    error.func = funcName;
                    error.param = JSON.stringify(options);
                    C.writeErrorLog(objError,response);
                }
                if (response && response.statusCode == 200) {
                  if(body && body.data){
                    resolve(body);
                  } 
                  else if(body && body.tags || body.length >=0 || body.listRegion || body.childRegions || body.subRegions || body.post || body.status == 0 || (body.arrivals && body.arrivals.length >=0) || (body.departs && body.departs.length >=0)){
                      resolve(body);
                  }
                  else if(body && body.msg){
                    resolve(body.msg);
                  }
                  else if(body && body.success){
                    resolve(body.success);
                  }
                  else if(body && body.response){
                    resolve(body.response);
                  }
                  else if(body && body.constructor == Object){
                    resolve(body);
                  }
                  else{
                      resolve(JSON.parse(body));
                  }
                }else{
                  resolve([]);
                }

            })
        }
    )
  }

  async checkAcceptBizCredit(methodFunc, strUrl, headerObj, bodyObj, pageName, funcName): Promise<any> {
      var se = this;
      return new Promise(
        (resolve, reject) => {
          var options;
          if(headerObj && bodyObj ){
            options = {
              method: methodFunc,
              url: strUrl,
              headers: headerObj,
              body: bodyObj,
              json: true,
              timeout: 180000,
              maxAttempts: 5,
              retryDelay: 2000
            }
          }
          
          if(headerObj && !bodyObj){
            options = {
              method: methodFunc,
              url: strUrl,
              timeout: 180000,
              maxAttempts: 5,
              retryDelay: 2000,
              headers: headerObj
            }
          }

          if(!headerObj && !bodyObj){
            options = {
              method: methodFunc,
              url: strUrl,
              timeout: 180000,
              maxAttempts: 5,
              retryDelay: 2000,
            }
          }

            request(options, function (error, response, body) {
                if (response.statusCode != 200) {
                  if(headerObj && headerObj.authorization && response.statusCode == 401){//Token h???t h???n
                    //se.showConfirm("Phi??n ????ng nh???p h???t h???n. Xin vui l??ng ????ng nh???p l???i ????? s??? d???ng ch???c n??ng n??y.");
                  }else{
                      var objError = {
                          page: pageName,
                          func: funcName,
                          message: response.statusMessage,
                          content: response.body,
                          type: "warning",
                          param: JSON.stringify(options)
                      };
                      C.writeErrorLog(objError,response);
                  }
                }
                if (error) {
                    error.page = pageName;
                    error.func = funcName;
                    error.param = JSON.stringify(options);
                    C.writeErrorLog(objError,response);
                }
                if (response && response.statusCode == 200) {
                  if(body){
                    resolve(body);
                  } 
                }else{
                  resolve([]);
                }

            })
        }
    )
  
  }

  hideStatusBar(){
    var se = this;
    let el = document.getElementsByClassName('div-statusbar-float');
      el[0].classList.remove('float-statusbar-enabled');
      el[0].classList.add('float-statusbar-disabled');
  }
//T???o booking food
public CreateBooking(objbook): Promise<any>{
  return new Promise((resolve, reject) => {
    var options = {
      'method': 'POST',
      'url': C.urls.baseUrl.urlFood+'/api/FOBooking/CreateBooking',
      'headers': {
        'Content-Type': 'application/json',
        'token': '584f470f-7a45-4793-a136-0084fadea81c'
      },
      body: JSON.stringify(objbook)
    
    };
    request(options, function (error, response) { 
      if (error) throw new Error(error);
      resolve(response.body);
    });
  })
  
}
 //G???i y??u c???u food
 public sendRequest(objbook): Promise<any>{
  return new Promise((resolve, reject) => {
    var options = {
      'method': 'POST',
      'url': C.urls.baseUrl.urlERPFood+'api/erp/Email/getEmail_Request',
      'headers': {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objbook)
    
    };
    request(options, function (error, response) { 
      if (error) throw new Error(error);
      resolve(response.body);
    });
  })
  
}
public Updatefoodpaytype(bookingCode,paymentMethod): Promise<any>{
  return new Promise((resolve, reject) => {
    var options = {
      'method': 'GET',
      'url': C.urls.baseUrl.urlContracting+'/update-food-paytype?token=3b760e5dcf038878925b5613c32615ea3&bookingCode='+bookingCode+'&paymentMethod='+paymentMethod+'',
      'headers': {
      }
    };
    request(options, function (error, response) { 
      if (error) throw new Error(error);
      resolve(true);
    });
    
  })
  
  
}

async checkAllowPayment(bookingCode): Promise<any>{
  let url =C.urls.baseUrl.urlFlight+"/gate/apiv1/checkAllowPayment/"+bookingCode;
  return new Promise((resolve, reject) => {
    var options = {
      'method': 'GET',
      'url': url,
      'headers': {
      }
    };
   request(options, function (error, response) { 
      if (error) throw new Error(error);
      resolve(JSON.parse(response.body));
    });
  })
}
   //Li??n k???t payoo
   public CreatePayoo(url): Promise<any>{
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'POST',
        'url': url,
        'headers': {
        }
      };
      request(options, function (error, response) { 
        if (error) throw new Error(error);
        //console.log(JSON.parse(response.body));
        resolve(JSON.parse(response.body));
      });
    })
  }
    //Check payoo
public Checkpayment(url): Promise<any>{
  return new Promise((resolve, reject) => {
    var options = {
      'method': 'GET',
      'url': url,
      'headers': {
        'Cookie': 'ASP.NET_SessionId=1zuyjhynxivxfmups4llel5v',
        "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
        'Content-Type': 'application/json; charset=utf-8'
      }
    };
    request(options, function (error, response) { 
      if (error) throw new Error(error);
      resolve(response.body);
    });
  })
} 

public CheckpaymentFood(url): Promise<any>{
  return new Promise((resolve, reject) => {
    var options = {
      'method': 'GET',
      'url': url,
      'headers': {
      }
    };
    request(options, function (error, response) { 
      if (error) throw new Error(error);
      resolve(response.body);
    });
  })
} 

//GeTokensOfMember
public GeTokensOfMember(jti): Promise<any>{
{
  return new Promise((resolve, reject) => {
    var options = {
      'method': 'POST',
      'url': C.urls.baseUrl.urlMobile+'/api/Dashboard/GeTokensOfMember?memberid='+jti+'',
      'headers': {
        'apikey': 'sx25k7TABO6W4ULFjfxoJJaLjQr0wUGxYCph1TQiTBM',
        'apisecret': 'wZH8vCalp5-ZsUzJiP1IP6V2beWUm0ej8G_25gzg2xg'
      }
    };
    request(options, function (error, response) { 
      if (error) throw new Error(error);
      resolve(response.body);
    });
  })
 
}
}
//check h???n thanh to??n
public CheckPaymentDate(booking): Promise<any>{
  let url=C.urls.baseUrl.urlContracting+'/booking-crm?bookingcode='+booking+'';
  return new Promise((resolve, reject) => {
    var options = {
      'method': 'GET',
      'url': url,
      'headers': {
      }
    };
    request(options, function (error, response) { 
      if (error) throw new Error(error);
      //response.body=JSON.parse(response.body);
      resolve(response.body);
    });
  })
}
async showAlertCancelPayment(){
  var se = this;
  let alert = await this.alertCtrl.create({
    message: 'Giao d???ch ???? ???????c h???y. Qu?? kh??ch vui l??ng quay l???i trang t??m ki???m!',
    cssClass: "cls-alert-cancelpayment",
    backdropDismiss: false,
    buttons: [
    {
      text: 'OK',
      role: 'OK',
      handler: () => {
        se.goToSearchFlight();
        alert.dismiss();
      }
    }
  ]
});
alert.present();
}

async showAlertErrorMessage(){
  var se = this;
  let alert = await this.alertCtrl.create({
    message: 'R???t ti???c ???? c?? l???i x???y ra. Qu?? kh??ch vui l??ng quay l???i trang t??m ki???m!',
    cssClass: "cls-alert-cancelpayment",
    backdropDismiss: false,
    buttons: [
    {
      text: 'OK',
      role: 'OK',
      handler: () => {
        se.goToSearchFlight();
        alert.dismiss();
      }
    }
  ]
});
alert.present();
}

async showAlertMessage(msg,title){
  var se = this;
  let alert = await this.alertCtrl.create({
    header: title,
    message: msg,
    cssClass: "cls-alert-message",
    backdropDismiss: false,
    buttons: [
    {
      text: 'OK',
      role: 'OK',
      handler: () => {
        alert.dismiss();
      }
    }
  ]
});
alert.present();
}
async showAlertMessageOnly(msg){
  var se = this;
  let alert = await this.alertCtrl.create({
    header: '',
    message: msg,
    cssClass: "cls-alert-message",
    backdropDismiss: false,
    buttons: [
    {
      text: 'OK',
      role: 'OK',
      handler: () => {
        alert.dismiss();
      }
    }
  ]
});
alert.present();
}

  public getNetworkStatus() {
    return this.isOnline;
  }
  public setNetworkStatus(value) {
      this.isOnline = value;
  }

  public async showConfirm(msg){
    let alert = await this.alertCtrl.create({
      message: msg,
      cssClass: 'cls-global-confirm',
      buttons: [
      {
        text: '????? sau',
        handler: () => {
          this.storage.remove('auth_token');
          this.storage.remove('email');
          this.storage.remove('username');
          this.storage.remove('jti');
          this.storage.remove('userInfoData');
          this.storage.remove('userRewardData');
          this.storage.remove('point');
          this.storage.remove('blogtripdefault');
          this.storage.remove('infocus');
          this.navCtrl.navigateBack('/');
        }
      },
      {
        text: '????ng nh???p',
        role: 'OK',
        handler: () => {
          this.storage.remove('auth_token');
          this.storage.remove('email');
          this.storage.remove('username');
          this.storage.remove('jti');
          this.storage.remove('userInfoData');
          this.storage.remove('userRewardData');
          this.storage.remove('point');
          this.storage.remove('blogtripdefault');
          //this.valueGlobal.logingoback = "MainPage";
          this.navCtrl.navigateForward('/login');
        }
        }
      ]
    });
    alert.present();
  }

  public clearActivatedTab() {
    var objTab = document.querySelectorAll('ion-tab-bar');
    if (objTab && objTab.length > 0) {
        objTab.forEach(element => {
            if (element) {
                //clear current activcetab
                for(let i= 1; i <=5; i++){
                    $(element.children.item((i - 1) * 2)).attr('aria-selected', 'false');
                }
            }
        });
    }
}

  // public hiddenHeader(){
  //   let headerelement = document.getElementsByTagName('ion-header');
  //   if(headerelement && headerelement.length >0){
  //     setTimeout(()=>{
  //       headerelement[0].classList.add('float-statusbar-disabled');
  //     },150)
  //   }
  // }
  public showHeader(){
    let headerelement = document.getElementsByTagName('ion-header');
    if(headerelement && headerelement.length >0){
      setTimeout(()=>{
        headerelement[0].classList.remove('float-statusbar-disabled');
      },150)
    }
  }
  //Li??n k???t url
  public CreateUrl(url): Promise<any>{
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'POST',
        'url': url,
        'headers': {
          'Cookie': 'ASP.NET_SessionId=1zuyjhynxivxfmups4llel5v'
        }
      };
      request(options, function (error, response) { 
        if (error) throw new Error(error);
        resolve(response.body);
      });
    })
  }
   //check ph??ng Internal
   public checkroomInternal(HotelId,RoomId,CheckInDate,CheckOutDate,roomnumber)
   {
     return new Promise((resolve, reject) => {
       var options = {
         method: 'GET',
         url: C.urls.baseUrl.urlContracting + '/api/toolsapi/CheckAllotment',
         qs:
         {
           token: '3b760e5dcf038878925b5613c32615ea3',
           hotelcode: HotelId,
           roomcode: RoomId,
           checkin: CheckInDate,
           checkout: CheckOutDate,
           totalroom: roomnumber
         },
         headers:
           {}
       };
       request(options, function (error, response, body) {
         if (response.statusCode != 200) {
           var objError = {
             page: "globalfunction",
             func: "checkroomInternal",
             message: response.statusMessage,
             content: response.body,
             type: "warning",
             param: JSON.stringify(options)
           };
           C.writeErrorLog(objError, response);
         }
         if (error) {
           error.page = "globalfunction";
           error.func = "checkroomInternal";
           error.param = JSON.stringify(options);
           C.writeErrorLog(error, response);
           throw new Error(error)
         };
         var rs = JSON.parse(body);
         resolve(rs.Msg);
       });
     })
   }
   //check ph??ng EAN
   checkroomEAN(bookingCode){
     return new Promise((resolve, reject) => {
       var options = {
         'method': 'GET',
         'url': C.urls.baseUrl.urlContracting+'/api/toolsapi/PrecheckRoomAvailableEAN?token=3b760e5dcf038878925b5613c32615ea3&bookingCode='+bookingCode+'',
         'headers': {
         }
       };
       request(options, function (error, response) {
         if (error) throw new Error(error);
         var rs = JSON.parse(response.body);
         resolve(rs.error);
       });
     });
    
   }
   //C??c h??nh th???c thanh to??n
   funcpaymentMethod(paymentMethod): string {

     switch (paymentMethod) {
       case "visa":
         paymentMethod = "0"
         break;
       case "payoo_store":
         paymentMethod = "3"
         break;
       case "payoo_qr":
         paymentMethod = "0"
         break;
       case "momo":
         paymentMethod = "10"
         break;
     }
     return paymentMethod;
   }
    //th??m ph???n ??i chung
    public getDirection(Origin_Placeid,Destination_Placeid,Time,IsDeparture): Promise<any>{
      {
        return new Promise((resolve, reject) => {
          var IsInternational;
          if (this._flightService.itemFlightCache.dataBooking.fromPlace.internal==0||this._flightService.itemFlightCache.dataBooking.toPlace.internal==0) {
            IsInternational=true;
          }else{
            IsInternational=false;
          }
          var options = {
            method: 'GET',
            url: C.urls.baseUrl.urlMobile + '/api/Dashboard/GetDirection?Origin_Placeid=' + Origin_Placeid + '&Destination_Placeid=' + Destination_Placeid + '&Time=' + Time + '&IsDeparture='+IsDeparture+ '&IsInternational='+IsInternational,
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers:
            {
            }
          };
          request(options, function (error, response, body) {
            if (error) {
              error.page = "hotellike";
              error.func = "getblog";
              error.param = JSON.stringify(options);
              C.writeErrorLog(error, response);
              throw new Error(error)
            }
            var body = JSON.parse(body);
            resolve(body);
          });
        })
       
      }
    }
    public GetListProduct(bookingTime, startPlace, endPlace, slot, productType, provider, sort,routeName): Promise<any>{
      {
        return new Promise((resolve, reject) => {
          var options = {
            method: 'GET',
            url: C.urls.baseUrl.urlMobile + '/api/Dashboard/GetListProducts?reservationNo='+this._flightService.itemFlightCache.dataBooking.reservationNo+'&routeName='+routeName+'&bookingTime=' + bookingTime + '&startPlace=' + startPlace + '&endPlace=' + endPlace + '&slot=' + slot + '&productType=' + productType + '&provider=' + provider + '&sort=' + sort,
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers:
            {
            }
          };
          request(options, function (error, response, body) {
            if (error) {
              error.page = "hotellike";
              error.func = "getblog";
              error.param = JSON.stringify(options);
              C.writeErrorLog(error, response);
              throw new Error(error)
            }
            var Product = JSON.parse(body);
            resolve(Product);
          });
        })
       
      }
    }
    round(number, precision) {
      var factor = Math.pow(10, precision);
      var tempNumber = number * factor;
      var roundedTempNumber = Math.round(tempNumber);
      return roundedTempNumber / factor;
    }
    numberToCurrency(number: number, thousands: string) {
      var includefee = false
      if (number == undefined)
          return 'undefined';
      let fee = 0;
      if (includefee) {
          fee = 20000;
      }
      var parts = this.round(number + fee, 0).toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousands);
      return parts.join(thousands);
  }
  checkUnicodeCharactor(input) {
        if(input.indexOf('??') != -1 || input.indexOf('??') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 || input.indexOf('??') != -1 || input.indexOf('??') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 || input.indexOf('??') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 
        || input.indexOf('??') != -1 || input.indexOf('??') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 || input.indexOf('??') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1
        || input.indexOf('??') != -1 || input.indexOf('??') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 || input.indexOf('??') != -1
        || input.indexOf('??') != -1 || input.indexOf('??') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 || input.indexOf('??') != -1 || input.indexOf('??') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 || input.indexOf('??') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1
        || input.indexOf('??') != -1 || input.indexOf('??') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 || input.indexOf('??') != -1 || input.indexOf('??') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1
        || input.indexOf('???') != -1 || input.indexOf('??') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1 || input.indexOf('???') != -1
        || input.indexOf('??') != -1 
        || input.indexOf('\u0300') != -1 || input.indexOf('\u0301') != -1 || input.indexOf('\u0303') != -1 || input.indexOf('\u0309') != -1 || input.indexOf('\u0323') != -1
        || input.indexOf('\u02C6') != -1 || input.indexOf('\u0306') != -1 || input.indexOf('\u031B') != -1
        )
        {
          return false;
        }
      
    return true;
  }

  convertUnicodeCharactor(input) {
    for(var i=0; i< input.length; i++) {
      input = input.replace('??','a').replace('??','A');
      input = input.replace('??','a').replace('??','A');
      input = input.replace('???','a').replace('???','A');
      input = input.replace('???','a').replace('???','A');
      input = input.replace('??','a').replace('??','A');
      input = input.replace('??','a').replace('??','A');
      input = input.replace('???','a').replace('???','A');
      input = input.replace('???','a').replace('???','A');
      input = input.replace('???','a').replace('???','A');
      input = input.replace('???','a').replace('???','A');
      input = input.replace('???','a').replace('???','A');
      input = input.replace('??','a').replace('??','A');
      input = input.replace('???','a').replace('???','A');
      input = input.replace('???','a').replace('???','A');
      input = input.replace('???','a').replace('???','A');
      input = input.replace('???','a').replace('???','A');
      input = input.replace('???','a').replace('???','A');

      input = input.replace('??','e').replace('??','E');
      input = input.replace('??','e').replace('??','E');
      input = input.replace('???','e').replace('???','E');
      input = input.replace('???','e').replace('???','E');
      input = input.replace('???','e').replace('???','E');
      input = input.replace('??','e').replace('??','E');
      input = input.replace('???','e').replace('???','E');
      input = input.replace('???','e').replace('???','E');
      input = input.replace('???','e').replace('???','E');
      input = input.replace('???','e').replace('???','E');
      input = input.replace('???','e').replace('???','E');

      input = input.replace('??','i').replace('??','I');
      input = input.replace('??','i').replace('??','I');
      input = input.replace('???','i').replace('???','I');
      input = input.replace('???','i').replace('???','I');
      input = input.replace('??','i').replace('??','I');

      input = input.replace('??','o').replace('??','O');
      input = input.replace('??','o').replace('??','O');
      input = input.replace('???','o').replace('???','O');
      input = input.replace('???','o').replace('???','O');
      input = input.replace('??','o').replace('??','O');
      input = input.replace('??','o').replace('??','O');
      input = input.replace('???','o').replace('???','O');
      input = input.replace('???','o').replace('???','O');
      input = input.replace('???','o').replace('???','O');
      input = input.replace('???','o').replace('???','O');
      input = input.replace('???','o').replace('???','O');
      input = input.replace('??','o').replace('??','O');
      input = input.replace('???','o').replace('???','O');
      input = input.replace('???','o').replace('???','O');
      input = input.replace('???','o').replace('???','O');
      input = input.replace('???','o').replace('???','O');
      input = input.replace('???','o').replace('???','O');

      input = input.replace('??','u').replace('??','U');
      input = input.replace('??','u').replace('??','U');
      input = input.replace('???','u').replace('???','U');
      input = input.replace('???','u').replace('???','U');
      input = input.replace('??','u').replace('??','U');
      input = input.replace('??','u').replace('??','U');
      input = input.replace('???','u').replace('???','U');
      input = input.replace('???','u').replace('???','U');
      input = input.replace('???','u').replace('???','U');
      input = input.replace('???','u').replace('???','U');
      input = input.replace('???','u').replace('???','U');

      input = input.replace('???','y').replace('???','Y');
      input = input.replace('??','y').replace('??','Y');
      input = input.replace('???','y').replace('???','Y');
      input = input.replace('???','y').replace('???','Y');
      input = input.replace('???','y').replace('???','Y');

      input = input.replace('??','d').replace('??','D');
      input = input.replace('\u0300','o');
      input = input.replace('\u0301','o');
      input = input.replace('\u0303','o');
      input = input.replace('\u0309','o');
      input = input.replace('\u0323','o');

      input = input.replace('\u02C6','o');
      input = input.replace('\u0323','o');
      input = input.replace('\u031B','o');
    }
   
    
  return input;
}

  async getMultipleFiles(filePaths: string[]): Promise<File[]> {
    // Get FileEntry array from the array of image paths
    const fileEntryPromises: Promise<FileEntry>[] = filePaths.map(filePath => {
      return this.ionicFileService.resolveLocalFilesystemUrl(filePath);
    }) as Promise<FileEntry>[];

    const fileEntries: FileEntry[] = await Promise.all(fileEntryPromises);

    // Get a File array from the FileEntry array. NOTE that while this looks like a regular File, it does
    // not have any actual data in it. Only after we use a FileReader will the File object contain the actual
    // file data
    const CordovaFilePromises: Promise<IFile>[] = fileEntries.map(fileEntry => {
      return this.convertFileEntryToCordovaFile(fileEntry);
    });

    const cordovaFiles: IFile[] = await Promise.all(CordovaFilePromises);

    // Use FileReader on each File object to read the actual file data into the file object
    const filePromises: Promise<File>[] = cordovaFiles.map(cordovaFile => {
      return this.convertCordovaFileToJavascriptFile(cordovaFile)
    });

    // When this resolves, it will return a list of File objects, just as if you had used the regular web
    // file input. These can then be appended to FormData and uploaded.
    return await Promise.all(filePromises);
  }

  async getSingleFile(filePath: string): Promise<File> {
    // Get FileEntry from image path
    const fileEntry: FileEntry = await this.ionicFileService.resolveLocalFilesystemUrl(filePath) as FileEntry;

    // Get File from FileEntry. Again note that this file does not contain the actual file data yet.
    const cordovaFile: IFile = await this.convertFileEntryToCordovaFile(fileEntry);

    // Use FileReader on each object to populate it with the true file contents.
    return this.convertCordovaFileToJavascriptFile(cordovaFile);
  }

  private convertFileEntryToCordovaFile(fileEntry: FileEntry): Promise<IFile> {
    return new Promise<IFile>((resolve, reject) => {
      fileEntry.file(resolve, reject);
    })
  }

  private convertCordovaFileToJavascriptFile(cordovaFile: IFile): Promise<File> {
    return new Promise<File>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.error) {
          reject(reader.error);
        } else {
          const blob: any = new Blob([reader.result], { type: cordovaFile.type });
          blob.lastModifiedDate = new Date();
          blob.name = cordovaFile.name;
          resolve(blob as File);
        }
      };
      reader.readAsArrayBuffer(cordovaFile);
    });

  }

  
    /**
   * Chuy???n k?? t??? font VNi vd: ?? - a ...
   */
  convertFontVNI(obj){
    if(obj.indexOf('??') != -1 || obj.indexOf('??') != -1){
      obj = obj.replace(/\??/g,'d').replace(/\??/g,'D');
    }
    if(obj.indexOf('??') != -1 || obj.indexOf('??') != -1){
      obj = obj.replace(/\??/g,'a').replace(/\??/g,'A');
    }
    if(obj.indexOf('??') != -1 || obj.indexOf('??') != -1){
      obj = obj.replace(/\??/g,'a').replace(/\??/g,'A');
    }
    if(obj.indexOf('??') != -1 || obj.indexOf('??') != -1){
      obj = obj.replace(/\??/g,'a').replace(/\??/g,'A');
    }
    if(obj.indexOf('??') != -1 || obj.indexOf('??') != -1){
      obj = obj.replace(/\??/g,'a').replace(/\??/g,'A');
    }
    if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
      obj = obj.replace(/\???/g,'a').replace(/\???/g,'A');
    }
    if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
      obj = obj.replace(/\???/g,'a').replace(/\???/g,'A');
    }
    if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
      obj = obj.replace(/\???/g,'a').replace(/\???/g,'A');
    }
    if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
      obj = obj.replace(/\???/g,'a').replace(/\???/g,'A');
    }
    if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
      obj = obj.replace(/\???/g,'a').replace(/\???/g,'A');
    }
    if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
      obj = obj.replace(/\???/g,'a').replace(/\???/g,'A');
    }
    if(obj.indexOf('??') != -1 || obj.indexOf('??') != -1){
        obj = obj.replace(/\??/g,'a').replace(/\??/g,'A');
      }
      if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
        obj = obj.replace(/\???/g,'a').replace(/\???/g,'A');
      }
      if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
        obj = obj.replace(/\???/g,'a').replace(/\???/g,'A');
      }
      if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
        obj = obj.replace(/\???/g,'a').replace(/\???/g,'A');
      }
      if(obj.indexOf('??') != -1 || obj.indexOf('??') != -1){
        obj = obj.replace(/\??/g,'a').replace(/\??/g,'A');
      }
      if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
        obj = obj.replace(/\???/g,'a').replace(/\???/g,'A');
      }
      if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
        obj = obj.replace(/\???/g,'a').replace(/\???/g,'A');
      }

    if(obj.indexOf('??') != -1 || obj.indexOf('??') != -1){
            obj = obj.replace(/\??/g,'e').replace(/\??/g,'E');
          }
          if(obj.indexOf('??') != -1 || obj.indexOf('??') != -1){
            obj = obj.replace(/\??/g,'e').replace(/\??/g,'E');
          }
          if(obj.indexOf('??') != -1 || obj.indexOf('??') != -1){
            obj = obj.replace(/\??/g,'e').replace(/\??/g,'E');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'e').replace(/\???/g,'E');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'e').replace(/\???/g,'E');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'e').replace(/\???/g,'E');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'e').replace(/\???/g,'E');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'e').replace(/\???/g,'E');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'e').replace(/\???/g,'E');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'e').replace(/\???/g,'E');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'e').replace(/\???/g,'E');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'e').replace(/\???/g,'E');
          }
      
          if(obj.indexOf('??') != -1 || obj.indexOf('??') != -1){
            obj = obj.replace(/\??/g,'o').replace(/\??/g,'O');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'o').replace(/\???/g,'O');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'o').replace(/\???/g,'O');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'o').replace(/\???/g,'O');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'o').replace(/\???/g,'O');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'o').replace(/\???/g,'O');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'o').replace(/\???/g,'O');
          }
          if(obj.indexOf('??') != -1 || obj.indexOf('??') != -1){
            obj = obj.replace(/\??/g,'o').replace(/\??/g,'O');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'o').replace(/\???/g,'O');
          }
          if(obj.indexOf('??') != -1 || obj.indexOf('??') != -1){
            obj = obj.replace(/\??/g,'o').replace(/\??/g,'O');
          }
          if(obj.indexOf('??') != -1 || obj.indexOf('??') != -1){
            obj = obj.replace(/\??/g,'o').replace(/\??/g,'O');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'o').replace(/\???/g,'O');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'o').replace(/\???/g,'O');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'o').replace(/\???/g,'O');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'o').replace(/\???/g,'O');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'o').replace(/\???/g,'O');
          }
      
          if(obj.indexOf('??') != -1 || obj.indexOf('??') != -1){
            obj = obj.replace(/\??/g,'u').replace(/\??/g,'U');
          }
          if(obj.indexOf('??') != -1 || obj.indexOf('??') != -1){
            obj = obj.replace(/\??/g,'u').replace(/\??/g,'U');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'u').replace(/\???/g,'U');
          }
          if(obj.indexOf('??') != -1 || obj.indexOf('??') != -1){
            obj = obj.replace(/\??/g,'u').replace(/\??/g,'U');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'u').replace(/\???/g,'U');
          }
          if(obj.indexOf('??') != -1 || obj.indexOf('??') != -1){
            obj = obj.replace(/\??/g,'u').replace(/\??/g,'U');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'u').replace(/\???/g,'U');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'u').replace(/\???/g,'U');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'u').replace(/\???/g,'U');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'u').replace(/\???/g,'U');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'u').replace(/\???/g,'U');
          }
      
          if(obj.indexOf('??') != -1 || obj.indexOf('??') != -1){
            obj = obj.replace(/\??/g,'i').replace(/\??/g,'I');
          }
          if(obj.indexOf('??') != -1 || obj.indexOf('??') != -1){
            obj = obj.replace(/\??/g,'i').replace(/\??/g,'I');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'i').replace(/\???/g,'I');
          }
          if(obj.indexOf('??') != -1 || obj.indexOf('??') != -1){
            obj = obj.replace(/\??/g,'i').replace(/\??/g,'I');
          }
          if(obj.indexOf('???') != -1 || obj.indexOf('???') != -1){
            obj = obj.replace(/\???/g,'i').replace(/\???/g,'I');
          }
    

    return obj;
  }

  /**
   * H??m set hi???u ???ng chuy???n page
   * @param nativePageTransitions provider injection
   * @param direction h?????ng chuy???n page vd: 'left', 'right'
   */
  public setNativeSlide(nativePageTransitions, direction){
    let options: NativeTransitionOptions = {
      direction: direction,
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 0
     }
  
    nativePageTransitions.fade(options);
  }


  public createTransactionCombo(HotelCode,FlightCode,DepartATCode,ReturnATCode): Promise<any>{
    return new Promise((resolve, reject) => {
      var options_1 = {
        method: 'POST',
        url: C.urls.baseUrl.urlContracting + '/api/ToolsAPI/CreateTransactionIDCombo',
        headers:
        {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        form:
        {
          HotelCode: HotelCode,
          FlightCode: FlightCode,
          DepartATCode: DepartATCode,
          ReturnATCode:ReturnATCode,
        }
      };
      request(options_1, function (error, response1, body) {
        if (response1.Error) {
          var error1 = {
            page: "flightcomboadddetails",
            func: "CreateTransactionIDCombo",
            message: response1.Error,
            content: response1.body,
            type: "warning",
            param: JSON.stringify(options_1)
          };
          C.writeErrorLog(error1, response1);
          resolve(false);
        } else {
          resolve(true);
        }
      })
    })
    
  }
//hold combo vmb
public holdflight(flyBookingCode,iddepart,idreturn): Promise<any>{
  return new Promise((resolve, reject) => {
  var options_2 = {
    'method': 'GET',
    'url': C.urls.baseUrl.urlMobile + '/get-pnr-flight?reservationNo=' + flyBookingCode + '&cacheDepartId=' + iddepart + '&cacheReturnId=' + idreturn + '',
    'headers': {
    }
  };
  request(options_2, function (error2, response2) {
    if (error2) throw new Error(error2);
    var obj = JSON.parse(response2.body);
    var depcode = "";
    var retcode = "";
    if (obj.length > 0) {
      var objAll = obj.filter((item) => { return item.name == "All" });
      var objDepart = obj.filter((item) => { return item.name == "Depart" });
      var objReturn = obj.filter((item) => { return item.name == "Return" });
      //Gi??? v?? ???????c c??? 2 chi???u
      if (objAll && objAll.length > 0) {
        depcode = objAll[0].value;
        retcode = objAll[0].value;
      }
      //Gi??? v?? ???????c chi???u ??i
      if (objDepart && objDepart.length > 0) {
        depcode = objDepart[0].value;
      }
      //Gi??? v?? ???????c chi???u ??i
      if (objReturn && objReturn.length > 0) {
        retcode = objReturn[0].value;
      }
    }
    var objfly={depcode:depcode,retcode:retcode};
    resolve(objfly);
  });
  })
  
}
  convertNumberToString(input){
    let output =  input.toLocaleString().replace(/\,/g,'').replace(/\./g,'').toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g,'.');
    return output;
  }

  convertStringToNumber(input){
    let output =  input ? input.toLocaleString().replace(/\,/g,'').replace(/\./g,'').replace(/\:/g,'')*1 : 0;
    return output;
  }

  convertNumberToDouble(input){
    let ip = input ? input.toLocaleString().replace(/\,/g,'').replace(/\./g,'').replace(/\:/g,'')*1 : 0;
    let output =  Number(ip);
    return output;
  }

  convertNumberToFloat(input){
    let ip:any = input ? input.toLocaleString().replace(/\,/g,'').replace(/\./g,'').replace(/\:/g,'')*1 : 0;
    return ip;
  }

  checkItemInCurrentPeriod(item):Promise<any>{
    var se = this;
    var curdate = moment(new Date());
    return new Promise((resolve, reject) => {
      this.getCurrentPeriod().then((period)=>{
        //Kh??c giai ??o???n menu ho???c ng??y ?????t qua ng??y th??? 7 th?? x??a cache gi??? h??ng
        if( (moment(item.focomboPeriod.startDate).format('YYYY-MM-DD') != moment(period.periodStartDateNextWeek).format('YYYY-MM-DD') && moment(item.focomboPeriod.startDate).diff(moment(period.periodStartDate), 'minutes') != 0 &&  moment(item.focomboPeriod.endDate).diff(moment(period.periodEndDate), 'minutes') != 0)
        || curdate.diff(moment(item.focomboPeriod.endDate)) >=0){
          resolve(false);
        }else{
          resolve(true);
        }
      })
    })
  }

  checkData(data): Promise<any>{
    return new Promise((resolve, reject) => {
      var i =0;
      data.forEach(element => {
        this.checkItemInCurrentPeriod(element).then((check)=>{
          if(!check){
            this.removeItemInArray(data, element);
          }
          if(i == data.length-1){
            resolve(data);
          }
          i++;
        })
       
        
      })

      
    })
  }

  getCurrentPeriod(): Promise<any>{
    return new Promise((resolve, reject)=>{
      if(!this._foodService.periodStartDate && !this._foodService.periodEndDate){
        let newdate = moment(new Date()).format('YYYY-MM-DD');
        let url = C.urls.baseUrl.urlFood +"/api/FODetail/GetDetailByCategoryId?id=16&date="+newdate;
         this.RequestApi("GET", url, {}, {}, "HomeFood", "LoadCategoryHome").then((data)=>{
          if(data && data.focomboPeriod){
            this._foodService.periodStartDate = moment(data.focomboPeriod.startDate).add(-7,'days').format('YYYY-MM-DD');
            this._foodService.periodEndDate = moment(data.focomboPeriod.endDate).add(-7,'days').format('YYYY-MM-DD');
            this._foodService.periodStartDateNextWeek = moment(data.focomboPeriod.startDate).format('YYYY-MM-DD');
            this._foodService.periodEndDateNextWeek = moment(data.focomboPeriod.endDate).format('YYYY-MM-DD');
            resolve({ periodStartDate: moment(data.focomboPeriod.startDate).add(-7,'days').format('YYYY-MM-DD'), periodEndDate: moment(data.focomboPeriod.endDate).add(-7,'days').format('YYYY-MM-DD'), periodStartDateNextWeek: moment(data.focomboPeriod.startDate).format('YYYY-MM-DD'), periodEndDateNextWeek: moment(data.focomboPeriod.endDate).format('YYYY-MM-DD') });
          }else{
            let d = moment(new Date()).format('dddd');
            let fd = moment(new Date()).format('YYYY-MM-DD');
            let ed = moment(new Date()).add(4, 'days').format('YYYY-MM-DD');
            switch (d) {
              case "Tuesday":
                fd = moment(new Date()).add(-1, 'days').format('YYYY-MM-DD');
                ed = moment(new Date()).add(3, 'days').format('YYYY-MM-DD');
                break;
              case "Wednesday":
                fd = moment(new Date()).add(-2, 'days').format('YYYY-MM-DD');
                ed = moment(new Date()).add(2, 'days').format('YYYY-MM-DD');
                break;
              case "Thursday":
                fd = moment(new Date()).add(-3, 'days').format('YYYY-MM-DD');
                ed = moment(new Date()).add(1, 'days').format('YYYY-MM-DD');
                break;
              case "Friday":
                fd = moment(new Date()).add(-4, 'days').format('YYYY-MM-DD');
                ed = moment(new Date()).add(0, 'days').format('YYYY-MM-DD');
                break;
              case "Saturday":
                fd = moment(new Date()).add(-5, 'days').format('YYYY-MM-DD');
                ed = moment(new Date()).add(-1, 'days').format('YYYY-MM-DD');
                break;
              case "Sunday":
                fd = moment(new Date()).add(-6, 'days').format('YYYY-MM-DD');
                ed = moment(new Date()).add(-2, 'days').format('YYYY-MM-DD');
                break;
            }
              this._foodService.periodStartDate = fd;
              this._foodService.periodEndDate = ed;
              this._foodService.periodStartDateNextWeek = moment(fd).add(7, 'days').format('YYYY-MM-DD');
              this._foodService.periodEndDateNextWeek = moment(ed).add(7, 'days').format('YYYY-MM-DD');
            resolve({periodStartDate: fd, periodEndDate: ed, periodStartDateNextWeek: moment(fd).add(7,'days').format('YYYY-MM-DD'), periodEndDateNextWeek: moment(ed).add(7,'days').format('YYYY-MM-DD')})
          }
         })
      }else{
        resolve ({ periodStartDate: this._foodService.periodStartDate, periodEndDate: this._foodService.periodEndDate, periodStartDateNextWeek: moment(this._foodService.periodStartDateNextWeek), periodEndDateNextWeek: moment(this._foodService.periodEndDateNextWeek) });
      }
    })
    
   
  }

  setCacheCart(){
    this.storage.get("listItemsCart").then((data)=>{
      if(data){
        this.storage.remove("listItemsCart").then(()=>{
          this.storage.set("listItemsCart", this._foodService.listItemsCart);
        })
      }else{
        this.storage.set("listItemsCart", this._foodService.listItemsCart);
      }
    })
  }

  async showLoadingwithtimeout(){
    this.loader = this.loadCtrl.create({
       message: "",
       duration: 3000
     });
 
     (await this.loader).present();
   }

  async showLoading(){
   this.loader = this.loadCtrl.create({
      message: ""
    });

    (await this.loader).present();
  }

  async showLoadingWithMsg(msg){
    this.loader = this.loadCtrl.create({
       message: msg
     });
 
     (await this.loader).present();
   }

  async hideLoading(){
    if(this.loader){
      (await (this.loader)).dismiss();
    }
     
   }

   async showLoadingMessage(msg){
    this.loader = this.loadCtrl.create({
       message: msg
     });
 
     (await this.loader).present();
   }
 
   async hideLoadingMessage(){
      (await (this.loader)).dismiss();
    }

    /**
     * pdanh 82-02-2022: ?????i lu???ng do api build-link ???? g???i lu??n h??m gi??? v?? n??n kh??ng d??ng h??m n??y ????? check gi??? VMB n???a
     * @param data 
     * @param paymentMethod 
     * @param bankId 
     * @param BanksTranfer 
     * @returns 
     */
    updatePaymentMethod(data, paymentMethod, bankId, BanksTranfer):Promise<any>{
      let param = {
      "paymentMethod": paymentMethod,
      "userToken": "",
      "bankId": bankId,
      "bankTransfer": BanksTranfer
    };
    return new Promise((resolve, reject) => {
      // var options = {
      //   method: 'POST',
      //   url: C.urls.baseUrl.urlFlight + "gate/apiv1/PaymentSave/"+data.reservationId,
      //   timeout: 180000, maxAttempts: 5, retryDelay: 20000,
      //   headers: {
      //     "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
      //     'Content-Type': 'application/json; charset=utf-8',
      //   },
      //   body: JSON.stringify(param)
      // };
      // request(options, function (error, response, body) {
      //   if (error) {
      //     error.page = "globalfunction";
      //     error.func = "updatePaymentMethod";
      //     error.param = JSON.stringify(options);
      //   }
      //   if (response.statusCode == 200) {
      //     let result = JSON.parse(body);
      //     if(!result.error){
      //       resolve(result);
      //     }else{
      //       resolve(false);
      //     }
      //   }
      // })
      resolve({isHoldSuccess: true});
    })
  }
  //thanh to??n l???i
  updatePaymentMethodNew(bookingCode, paymentMethod, bankId, BanksTranfer):Promise<any>{
  //   let param = {
  //   "paymentMethod": paymentMethod,
  //   "userToken": "",
  //   "bankId": bankId,
  //   "bankTransfer": BanksTranfer
  // };
   return new Promise((resolve, reject) => {
  //   var options = {
  //     method: 'POST',
  //     url: C.urls.baseUrl.urlFlight + "gate/apiv1/PaymentSave/"+bookingCode,
  //     timeout: 180000, maxAttempts: 5, retryDelay: 20000,
  //     headers: {
  //       "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
  //       'Content-Type': 'application/json; charset=utf-8',
  //     },
  //     body: JSON.stringify(param)
  //   };
  //   request(options, function (error, response, body) {
  //     if (error) {
  //       error.page = "globalfunction";
  //       error.func = "updatePaymentMethod";
  //       error.param = JSON.stringify(options);
  //     }
  //     if (response.statusCode == 200) {
  //       let result = JSON.parse(body);
  //       if(!result.error){
  //         resolve(result);
  //       }else{
  //         resolve(false);
  //       }
  //     }
  //   })
    resolve({isHoldSuccess: true});
   })
  
}
  checkHoldTicket(data){
    var se = this, res = false;
    let url = C.urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/"+data.pnr.resNo;
    return new Promise((resolve, reject) => {
      //se.intervalHoldTicket = setInterval(() => {
        
        se.callCheckHoldTicket(url, data).then((check) => {
          if (!check && se.allowCheckHoldTicket) {
              res = false;
              setTimeout(() => {
                se.checkHoldTicket(data);
              }, 3000);
          }else{
            resolve(check);
          }
        })
      
      //}, 1000 * 3);

      setTimeout(() => {
        //clearInterval(se.intervalHoldTicket);
        se.allowCheckHoldTicket = false;
        // se.callCheckHoldTicket(url, data).then((check) => {
        //   resolve(check);
        // })
      }, 1000 * 15);
    })
   
  }

  getSummaryBooking(data) : Promise<any>{
    var se = this;
    return new Promise((resolve, reject) => {
      var options = {
        method: 'GET',
        url: C.urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/"+data.pnr.resNo,
        timeout: 180000, maxAttempts: 5, retryDelay: 20000,
        headers: {
          "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
          'Content-Type': 'application/json; charset=utf-8',
        },
      };
      request(options, function (error, response, body) {
        if (error) {
          error.page = "flightpaymentselect";
          error.func = "getSummaryBooking";
          error.param = JSON.stringify(options);
        }
        if (response.statusCode == 200) {
          let result = JSON.parse(body);
          resolve(result);
        }
      })
    })
  }
  
//gi??? v?? combo vmb
holdTicketCombo(flyBookingCode,iddepart,idreturn): Promise<any>{
  var se = this;
  return new Promise((resolve, reject) => {
    var options = {
      method: 'GET',
      url: C.urls.baseUrl.urlFlight + "gate/apiv1/HoldPnr?reservationNo="+flyBookingCode+"&token=3b760e5dcf038878925b5613c32615ea3&cacheDepartId="+iddepart+"&cacheReturnId="+ idreturn,//GET /gate/apiv1/HoldPnr
      timeout: 180000, maxAttempts: 5, retryDelay: 20000,
      headers: {
        "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
        'Content-Type': 'application/json; charset=utf-8',
      },
    };
    request(options, function (error, response, body) {
      if (error) {
        error.page = "globalfunction";
        error.func = "holdTicket";
        error.param = JSON.stringify(options);
      }
      if (response.statusCode == 200) {
        var obj = JSON.parse(response.body);
        var depcode = "";
        var retcode = "";
        if (obj.length > 0) {
          var objAll = obj.filter((item) => { return item.name == "All" });
          var objDepart = obj.filter((item) => { return item.name == "Depart" });
          var objReturn = obj.filter((item) => { return item.name == "Return" });
          //Gi??? v?? ???????c c??? 2 chi???u
          if (objAll && objAll.length > 0) {
            depcode = objAll[0].value;
            retcode = objAll[0].value;
          }
          //Gi??? v?? ???????c chi???u ??i
          if (objDepart && objDepart.length > 0) {
            depcode = objDepart[0].value;
          }
          //Gi??? v?? ???????c chi???u ??i
          if (objReturn && objReturn.length > 0) {
            retcode = objReturn[0].value;
          }
        }
        var objfly={depcode:depcode,retcode:retcode};
        resolve(objfly);
      }
    })
  })
 
}
  callCheckHoldTicket(url, data){
    var res = false;
    return new Promise((resolve, reject) => {
      var options = {
        method: 'GET',
        url: C.urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/"+data.pnr.resNo,
        timeout: 180000, maxAttempts: 5, retryDelay: 20000,
        headers: {
          "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
          'Content-Type': 'application/json; charset=utf-8',
        },
      };
      request(options, function (error, response, body) {
        if (error) {
          error.page = "globalfunction";
          error.func = "updatePaymentMethod";
          error.param = JSON.stringify(options);
        }
        if (response.statusCode == 200) {
          let result = JSON.parse(body);
          if(data.ischeckpayment == 0)//tr??? sau
          {
              if(result.isRoundTrip){//kh??? h???i
                if(result.departFlight.atBookingCode != null && result.departFlight.atBookingCode != "T__" && result.returnFlight.atBookingCode != null && result.returnFlight.atBookingCode != "T__"){
                  resolve(true);
                }else{
                  resolve(false);
                }
              }else{
                if(result.departFlight.atBookingCode != null && result.departFlight.atBookingCode != "T__"){
                  resolve(true);
                }else{
                  resolve(false);
                }
              }
          }else{//tr??? tr?????c
  
            if(result.isRoundTrip){//kh??? h???i
              //C?? m?? gi??? ch??? v?? tr???ng th??i ???? xu???t v?? c??? 2 chi???u th?? tr??? v??? true - ho??n th??nh
              if(result.departFlight.atBookingCode != null && result.departFlight.atBookingCode != "T__" && result.returnFlight.atBookingCode != null && result.returnFlight.atBookingCode != "T__"
              && result.departFlight.status == 4 && result.returnFlight.status == 4){
                resolve(true);
              }else{
                resolve(false);
              }
            }else{//C?? m?? gi??? ch??? v?? tr???ng th??i ???? xu???t v?? th?? tr??? v??? true - ho??n th??nh
              if(result.departFlight.atBookingCode != null && result.departFlight.atBookingCode != "T__" && result.departFlight.status == 4){
                resolve(true);
              }else{
                resolve(false);
              }
            }
          }
        }
      })
     
      
    })
  }

  holdTicket(data){
    var se = this;
    var options = {
      method: 'GET',
      url: C.urls.baseUrl.urlFlight + "gate/apiv1/HoldPnr?reservationNo="+data.pnr.resNo+"&token=3b760e5dcf038878925b5613c32615ea3&cacheDepartId="+data.departFlight.id+"&cacheReturnId="+ (data.returnFlight ? data.returnFlight.id : ""),//GET /gate/apiv1/HoldPnr
      timeout: 180000, maxAttempts: 5, retryDelay: 20000,
      headers: {
        "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
        'Content-Type': 'application/json; charset=utf-8',
      },
    };
    request(options, function (error, response, body) {
      if (error) {
        error.page = "globalfunction";
        error.func = "holdTicket";
        error.param = JSON.stringify(options);
      }
      if (response.statusCode == 200) {
        console.log('hold ticket success!')
        //g???i api t???o transaction r???t xu???ng crm
        se.createFlightTransaction(data);
      }
    })
  }

  issueTicket(data){
    var se = this;
    var options = {
      method: 'GET',
      url: C.urls.baseUrl.urlFlight + "gate/apiv1/IssueTicket?reservationNo="+data.pnr.resNo+"&token=3b760e5dcf038878925b5613c32651dus",
      timeout: 180000, maxAttempts: 5, retryDelay: 20000,
      headers: {
        "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
        'Content-Type': 'application/json; charset=utf-8',
      },
    };
    request(options, function (error, response, body) {
      if (error) {
        error.page = "globalfunction";
        error.func = "issueTicket";
        error.param = JSON.stringify(options);
      }
      if (response.statusCode == 200) {
          //g???i api t???o transaction r???t xu???ng crm
          se.createFlightTransaction(data);
      }
    })
  }

  createFlightTransaction(data){
    var options = {
      method: 'GET',
      url: C.urls.baseUrl.urlFlight + "gate/apiv1/EndTranaction?resNo="+(data.pnr.bookingCode ? data.pnr.bookingCode :data.pnr.resNo)+"&sercureKey=3b760e5dcf038878925b5613c32651dus",
      timeout: 180000, maxAttempts: 5, retryDelay: 20000,
      headers: {
        "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
        'Content-Type': 'application/json; charset=utf-8',
      },
    };
    request(options, function (error, response, body) {
      let objError = {
        page: "globalfunction",
        func: "createFlightTransaction",
        message: response.statusMessage,
        content: response.body,
        type: "warning",
        param: JSON.stringify(options)
      };
      if (error) {
        error.page = "globalfunction";
        error.func = "createFlightTransaction";
        error.param = JSON.stringify(options);
        C.writeErrorLog(objError,response);
      }
      if (response.statusCode == 200) {
         console.log('success');
      }
    })
  }

  createFlightTransactionCombo(resNo){
    var options = {
      method: 'GET',
      url: C.urls.baseUrl.urlFlight + "gate/apiv1/EndTranaction?resNo="+resNo+"&sercureKey=3b760e5dcf038878925b5613c32651dus",
      timeout: 180000, maxAttempts: 5, retryDelay: 20000,
      headers: {
        "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
        'Content-Type': 'application/json; charset=utf-8',
      },
    };
    request(options, function (error, response, body) {
      let objError = {
        page: "globalfunction",
        func: "createFlightTransaction",
        message: response.statusMessage,
        content: response.body,
        type: "warning",
        param: JSON.stringify(options)
      };
      if (error) {
        error.page = "globalfunction";
        error.func = "createFlightTransaction";
        error.param = JSON.stringify(options);
        C.writeErrorLog(objError,response);
      }
      if (response.statusCode == 200) {
         console.log('success');
      }
    })
  }

  checkTicketAvaiable(data) : Promise<any>{
    var se = this;
    return new Promise((resolve, reject) => {
      var options = {
        method: 'GET',
        url: C.urls.baseUrl.urlFlight + "gate/apiv1/CheckAvailable?resid="+data.reservationId,
        timeout: 180000, maxAttempts: 5, retryDelay: 20000,
        headers: {
          "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
          'Content-Type': 'application/json; charset=utf-8',
        },
      };
      request(options, function (error, response, body) {
        let objError = {
          page: "globalfunction",
          func: "checkTicketAvaiable",
          message: response.statusMessage,
          content: response.body,
          type: "warning",
          param: JSON.stringify(options)
        };
        if (error) {
          error.page = "globalfunction";
          error.func = "checkTicketAvaiable";
          error.param = JSON.stringify(options);
          C.writeErrorLog(objError,response);
        }
        if (response.statusCode == 200) {
          resolve(body);
        }else{
          resolve(false)
        }
      })
    })
    
  }

  async showAlertOutOfTicket(itemFlight, type){
    var se = this;
    let msg ='';
    if(itemFlight.errorHoldTicket == 1){
        msg = 'Chuy???n bay '+itemFlight.departFlight.airlineCode + ' t??? ' + itemFlight.departCity + ' ??i ' + itemFlight.returnCity + ' v??o ' + itemFlight.checkInDisplay + ' l??c ' + moment(itemFlight.departFlight.departTime).format('HH:mm') + ' ??? ' + moment(itemFlight.departFlight.landingTime).format('HH:mm') + ' ???? h???t v??. Vui l??ng ch???n chuy???n bay kh??c.';
    }
    else if(itemFlight.errorHoldTicket == 2){
        msg = 'Chuy???n bay '+itemFlight.returnFlight.airlineCode + ' t??? ' + itemFlight.returnCity + ' ??i ' + itemFlight.departCity + ' v??o ' + itemFlight.checkOutDisplay + ' l??c ' + moment(itemFlight.returnFlight.departTime).format('HH:mm') + ' ??? ' + moment(itemFlight.returnFlight.landingTime).format('HH:mm') + ' ???? h???t v??. Vui l??ng ch???n chuy???n bay kh??c.';
    }
    else{
        msg = 'C??c chuy???n bay ???? ch???n kh??ng gi??? ???????c v??. Vui l??ng ch???n chuy???n bay kh??c!';
    }
    //let msg = 'Chuy???n bay '+itemFlight.departFlight.airlineCode + ' t??? ' + itemFlight.departCity + ' ??i ' + itemFlight.returnCity + ' v??o ' + itemFlight.checkInDisplay + ' l??c ' + moment(itemFlight.departFlight.departTime).format('HH:mm') + ' ??? ' + moment(itemFlight.departFlight.landingTime).format('HH:mm') + ' ???? h???t v??. Vui l??ng ch???n chuy???n bay kh??c.';
    let alert = await se.alertCtrl.create({
      message: msg,
      header: type == 1 ? 'R???t ti???c, v?? m??y bay ???? h???t' : 'R???t ti???c, v?? kh??ng gi??? ???????c',
      cssClass: "cls-alert-refreshPrice",
      backdropDismiss: false,
      buttons: [
      {
        text: 'OK',
        role: 'OK',
        handler: () => {
          se.goToSearchFlight();
        }
      }
    ]
  });
  alert.present();
  }

  async showAlertOutOfTicketFromMytrip(itemFlight, type){
    var se = this;
    let msg ='';
    if(itemFlight.errorHoldTicket == 1){
        msg = 'Chuy???n bay '+itemFlight.departFlight.airlineCode + ' t??? ' + itemFlight.departCity + ' ??i ' + itemFlight.returnCity + ' v??o ' + itemFlight.checkInDisplay + ' l??c ' + moment(itemFlight.departFlight.departTime).format('HH:mm') + ' ??? ' + moment(itemFlight.departFlight.landingTime).format('HH:mm') + ' ???? h???t v??. Vui l??ng ch???n chuy???n bay kh??c.';
    }
    else if(itemFlight.errorHoldTicket == 2){
        msg = 'Chuy???n bay '+itemFlight.returnFlight.airlineCode + ' t??? ' + itemFlight.returnCity + ' ??i ' + itemFlight.departCity + ' v??o ' + itemFlight.checkOutDisplay + ' l??c ' + moment(itemFlight.returnFlight.departTime).format('HH:mm') + ' ??? ' + moment(itemFlight.returnFlight.landingTime).format('HH:mm') + ' ???? h???t v??. Vui l??ng ch???n chuy???n bay kh??c.';
    }
    else{
        msg = 'C??c chuy???n bay ???? ch???n kh??ng gi??? ???????c v??. Vui l??ng ch???n chuy???n bay kh??c!';
    }
    //let msg = 'Chuy???n bay '+itemFlight.departFlight.airlineCode + ' t??? ' + itemFlight.departCity + ' ??i ' + itemFlight.returnCity + ' v??o ' + itemFlight.checkInDisplay + ' l??c ' + moment(itemFlight.departFlight.departTime).format('HH:mm') + ' ??? ' + moment(itemFlight.departFlight.landingTime).format('HH:mm') + ' ???? h???t v??. Vui l??ng ch???n chuy???n bay kh??c.';
    let alert = await se.alertCtrl.create({
      message: msg,
      header: type == 1 ? 'R???t ti???c, v?? m??y bay ???? h???t' : 'R???t ti???c, v?? kh??ng gi??? ???????c',
      cssClass: "cls-alert-refreshPrice",
      backdropDismiss: false,
      buttons: [
      {
        text: 'OK',
        role: 'OK',
        handler: () => {
          se._flightService.itemTabFlightActive.emit(true);
          se.valueGlobal.backValue = "homeflight";
          se._flightService.itemMenuFlightClick.emit(2);
          se.navCtrl.navigateBack('/tabs/tab1');
        }
      }
    ]
  });
  alert.present();
  }

  async showAlertPaymentFail(){
    var se = this;
    let msg = '???? c?? l???i x???y ra. Vui l??ng th??? l???i sau!';
    let alert = await this.alertCtrl.create({
      message: msg,
      header: 'R???t ti???c, thanh to??n kh??ng th??nh c??ng',
      cssClass: "cls-alert-refreshPrice",
      backdropDismiss: false,
      buttons: [
      {
        text: 'OK',
        role: 'OK',
        handler: () => {
          this._flightService.itemTabFlightActive.emit(true);
          this.valueGlobal.backValue = 'homeflight';
          this._flightService.itemMenuFlightClick.emit(2);
          this.navCtrl.navigateBack('/tabs/tab1');
        }
      }
    ]
  });
  alert.present();
  }

  goToSearchFlight(){
    this._flightService.itemFlightCache.step = 2;
    this._flightService.itemChangeTicketFlight.emit(1);
    this.navCtrl.navigateBack('/flightsearchresult');
  }

  deepClone<T>(value): T{
    return clone<T>(value);
  }

 findDuplicateElements<T, V>(array: T[], property: string, value: V): T[] {
    let foundElements: T[] = [];
    for(var i: number = 0, len: number = array.length; i < len; i++) {
        if(array[i][property] === value) {
            foundElements.push(array[i]);
        }
    }
    return foundElements;
}

refreshToken(mmemberid, devicetoken): Promise<any> {
  var se = this;
  return new Promise((resolve, reject) => {
    if(devicetoken){
      se.loginwithdevicetoken(mmemberid, devicetoken).then((token)=>{
        resolve(token);
      });
    }else{
      se.fcm.getToken().then((newtoken)=>{
        se.loginwithdevicetoken(mmemberid, newtoken).then((token)=>{
          resolve(token);
        });
      })
    }
    
  })
      
}

  loginwithdevicetoken(memberid,token): Promise<any>{
      var se = this;
      return new Promise((resolve, reject) => {
      var options = {
        method: 'POST',
        url: C.urls.baseUrl.urlMobile + '/api/Account/Login',
        timeout: 10000, maxAttempts: 5, retryDelay: 2000,
        headers:
        {
          'cache-control': 'no-cache',
          'content-type': 'application/json'
        },
        body:
        {
          emailOrPhone: "",
          password: "",
          rememberMe: true,
          memberId: memberid,
          deviceToken: token
        },
        json: true
      };
  
      request(options, function (error, response, body) {
        if (error) {
          error.page = "loginusername";
          error.func = "logintk";
          error.param = JSON.stringify(options);
          C.writeErrorLog(error,response);
        };
       
        if (response.statusCode != 200) {
          var objError = {
            page: "globalfunction",
            func: "refreshToken",
            message: response.statusMessage,
            content: response.body,
            type: "warning",
            param: JSON.stringify(options)
          };
          C.writeErrorLog(objError,response);
        }
        if (error) {
          error.page = "globalFunction";
          error.func = "refreshToken";
          error.param = JSON.stringify(options);
          C.writeErrorLog(error,response);
        } else {
           // var result=JSON.parse(body);
        if (body && body.auth_token) {
          var decoded = jwt_decode(body.auth_token);
            if (decoded) {
              se.storage.remove('auth_token').then(()=>{
                se.storage.set("auth_token", body.auth_token);
              })
  
            }
            resolve(body.auth_token);
          }
        }
      })
    })
  }

  getNationList(){
    return [ 
      {name: 'Vi???t Nam', code: 'VN'}, 
      {name: 'Afghanistan', code: 'AF'}, 
      {name: '??land Islands', code: 'AX'}, 
      {name: 'Albania', code: 'AL'}, 
      {name: 'Algeria', code: 'DZ'}, 
      {name: 'American Samoa', code: 'AS'}, 
      {name: 'AndorrA', code: 'AD'}, 
      {name: 'Angola', code: 'AO'}, 
      {name: 'Anguilla', code: 'AI'}, 
      {name: 'Antarctica', code: 'AQ'}, 
      {name: 'Antigua and Barbuda', code: 'AG'}, 
      {name: 'Argentina', code: 'AR'}, 
      {name: 'Armenia', code: 'AM'}, 
      {name: 'Aruba', code: 'AW'}, 
      {name: 'Australia', code: 'AU'}, 
      {name: 'Austria', code: 'AT'}, 
      {name: 'Azerbaijan', code: 'AZ'}, 
      {name: 'Bahamas', code: 'BS'}, 
      {name: 'Bahrain', code: 'BH'}, 
      {name: 'Bangladesh', code: 'BD'}, 
      {name: 'Barbados', code: 'BB'}, 
      {name: 'Belarus', code: 'BY'}, 
      {name: 'Belgium', code: 'BE'}, 
      {name: 'Belize', code: 'BZ'}, 
      {name: 'Benin', code: 'BJ'}, 
      {name: 'Bermuda', code: 'BM'}, 
      {name: 'Bhutan', code: 'BT'}, 
      {name: 'Bolivia', code: 'BO'}, 
      {name: 'Bosnia and Herzegovina', code: 'BA'}, 
      {name: 'Botswana', code: 'BW'}, 
      {name: 'Bouvet Island', code: 'BV'}, 
      {name: 'Brazil', code: 'BR'}, 
      {name: 'British Indian Ocean Territory', code: 'IO'}, 
      {name: 'Brunei Darussalam', code: 'BN'}, 
      {name: 'Bulgaria', code: 'BG'}, 
      {name: 'Burkina Faso', code: 'BF'}, 
      {name: 'Burundi', code: 'BI'}, 
      {name: 'Cambodia', code: 'KH'}, 
      {name: 'Cameroon', code: 'CM'}, 
      {name: 'Canada', code: 'CA'}, 
      {name: 'Cape Verde', code: 'CV'}, 
      {name: 'Cayman Islands', code: 'KY'}, 
      {name: 'Central African Republic', code: 'CF'}, 
      {name: 'Chad', code: 'TD'}, 
      {name: 'Chile', code: 'CL'}, 
      {name: 'China', code: 'CN'}, 
      {name: 'Christmas Island', code: 'CX'}, 
      {name: 'Cocos (Keeling) Islands', code: 'CC'}, 
      {name: 'Colombia', code: 'CO'}, 
      {name: 'Comoros', code: 'KM'}, 
      {name: 'Congo', code: 'CG'}, 
      {name: 'Congo, The Democratic Republic of the', code: 'CD'}, 
      {name: 'Cook Islands', code: 'CK'}, 
      {name: 'Costa Rica', code: 'CR'}, 
      {name: 'Cote D\'Ivoire', code: 'CI'}, 
      {name: 'Croatia', code: 'HR'}, 
      {name: 'Cuba', code: 'CU'}, 
      {name: 'Cyprus', code: 'CY'}, 
      {name: 'Czech Republic', code: 'CZ'}, 
      {name: 'Denmark', code: 'DK'}, 
      {name: 'Djibouti', code: 'DJ'}, 
      {name: 'Dominica', code: 'DM'}, 
      {name: 'Dominican Republic', code: 'DO'}, 
      {name: 'Ecuador', code: 'EC'}, 
      {name: 'Egypt', code: 'EG'}, 
      {name: 'El Salvador', code: 'SV'}, 
      {name: 'Equatorial Guinea', code: 'GQ'}, 
      {name: 'Eritrea', code: 'ER'}, 
      {name: 'Estonia', code: 'EE'}, 
      {name: 'Ethiopia', code: 'ET'}, 
      {name: 'Falkland Islands (Malvinas)', code: 'FK'}, 
      {name: 'Faroe Islands', code: 'FO'}, 
      {name: 'Fiji', code: 'FJ'}, 
      {name: 'Finland', code: 'FI'}, 
      {name: 'France', code: 'FR'}, 
      {name: 'French Guiana', code: 'GF'}, 
      {name: 'French Polynesia', code: 'PF'}, 
      {name: 'French Southern Territories', code: 'TF'}, 
      {name: 'Gabon', code: 'GA'}, 
      {name: 'Gambia', code: 'GM'}, 
      {name: 'Georgia', code: 'GE'}, 
      {name: 'Germany', code: 'DE'}, 
      {name: 'Ghana', code: 'GH'}, 
      {name: 'Gibraltar', code: 'GI'}, 
      {name: 'Greece', code: 'GR'}, 
      {name: 'Greenland', code: 'GL'}, 
      {name: 'Grenada', code: 'GD'}, 
      {name: 'Guadeloupe', code: 'GP'}, 
      {name: 'Guam', code: 'GU'}, 
      {name: 'Guatemala', code: 'GT'}, 
      {name: 'Guernsey', code: 'GG'}, 
      {name: 'Guinea', code: 'GN'}, 
      {name: 'Guinea-Bissau', code: 'GW'}, 
      {name: 'Guyana', code: 'GY'}, 
      {name: 'Haiti', code: 'HT'}, 
      {name: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
      {name: 'Holy See (Vatican City State)', code: 'VA'}, 
      {name: 'Honduras', code: 'HN'}, 
      {name: 'Hong Kong', code: 'HK'}, 
      {name: 'Hungary', code: 'HU'}, 
      {name: 'Iceland', code: 'IS'}, 
      {name: 'India', code: 'IN'}, 
      {name: 'Indonesia', code: 'ID'}, 
      {name: 'Iran, Islamic Republic Of', code: 'IR'}, 
      {name: 'Iraq', code: 'IQ'}, 
      {name: 'Ireland', code: 'IE'}, 
      {name: 'Isle of Man', code: 'IM'}, 
      {name: 'Israel', code: 'IL'}, 
      {name: 'Italy', code: 'IT'}, 
      {name: 'Jamaica', code: 'JM'}, 
      {name: 'Japan', code: 'JP'}, 
      {name: 'Jersey', code: 'JE'}, 
      {name: 'Jordan', code: 'JO'}, 
      {name: 'Kazakhstan', code: 'KZ'}, 
      {name: 'Kenya', code: 'KE'}, 
      {name: 'Kiribati', code: 'KI'}, 
      {name: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
      {name: 'Korea, Republic of', code: 'KR'}, 
      {name: 'Kuwait', code: 'KW'}, 
      {name: 'Kyrgyzstan', code: 'KG'}, 
      {name: 'Lao People\'S Democratic Republic', code: 'LA'}, 
      {name: 'Latvia', code: 'LV'}, 
      {name: 'Lebanon', code: 'LB'}, 
      {name: 'Lesotho', code: 'LS'}, 
      {name: 'Liberia', code: 'LR'}, 
      {name: 'Libyan Arab Jamahiriya', code: 'LY'}, 
      {name: 'Liechtenstein', code: 'LI'}, 
      {name: 'Lithuania', code: 'LT'}, 
      {name: 'Luxembourg', code: 'LU'}, 
      {name: 'Macao', code: 'MO'}, 
      {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
      {name: 'Madagascar', code: 'MG'}, 
      {name: 'Malawi', code: 'MW'}, 
      {name: 'Malaysia', code: 'MY'}, 
      {name: 'Maldives', code: 'MV'}, 
      {name: 'Mali', code: 'ML'}, 
      {name: 'Malta', code: 'MT'}, 
      {name: 'Marshall Islands', code: 'MH'}, 
      {name: 'Martinique', code: 'MQ'}, 
      {name: 'Mauritania', code: 'MR'}, 
      {name: 'Mauritius', code: 'MU'}, 
      {name: 'Mayotte', code: 'YT'}, 
      {name: 'Mexico', code: 'MX'}, 
      {name: 'Micronesia, Federated States of', code: 'FM'}, 
      {name: 'Moldova, Republic of', code: 'MD'}, 
      {name: 'Monaco', code: 'MC'}, 
      {name: 'Mongolia', code: 'MN'}, 
      {name: 'Montserrat', code: 'MS'}, 
      {name: 'Morocco', code: 'MA'}, 
      {name: 'Mozambique', code: 'MZ'}, 
      {name: 'Myanmar', code: 'MM'}, 
      {name: 'Namibia', code: 'NA'}, 
      {name: 'Nauru', code: 'NR'}, 
      {name: 'Nepal', code: 'NP'}, 
      {name: 'Netherlands', code: 'NL'}, 
      {name: 'Netherlands Antilles', code: 'AN'}, 
      {name: 'New Caledonia', code: 'NC'}, 
      {name: 'New Zealand', code: 'NZ'}, 
      {name: 'Nicaragua', code: 'NI'}, 
      {name: 'Niger', code: 'NE'}, 
      {name: 'Nigeria', code: 'NG'}, 
      {name: 'Niue', code: 'NU'}, 
      {name: 'Norfolk Island', code: 'NF'}, 
      {name: 'Northern Mariana Islands', code: 'MP'}, 
      {name: 'Norway', code: 'NO'}, 
      {name: 'Oman', code: 'OM'}, 
      {name: 'Pakistan', code: 'PK'}, 
      {name: 'Palau', code: 'PW'}, 
      {name: 'Palestinian Territory, Occupied', code: 'PS'}, 
      {name: 'Panama', code: 'PA'}, 
      {name: 'Papua New Guinea', code: 'PG'}, 
      {name: 'Paraguay', code: 'PY'}, 
      {name: 'Peru', code: 'PE'}, 
      {name: 'Philippines', code: 'PH'}, 
      {name: 'Pitcairn', code: 'PN'}, 
      {name: 'Poland', code: 'PL'}, 
      {name: 'Portugal', code: 'PT'}, 
      {name: 'Puerto Rico', code: 'PR'}, 
      {name: 'Qatar', code: 'QA'}, 
      {name: 'Reunion', code: 'RE'}, 
      {name: 'Romania', code: 'RO'}, 
      {name: 'Russian Federation', code: 'RU'}, 
      {name: 'RWANDA', code: 'RW'}, 
      {name: 'Saint Helena', code: 'SH'}, 
      {name: 'Saint Kitts and Nevis', code: 'KN'}, 
      {name: 'Saint Lucia', code: 'LC'}, 
      {name: 'Saint Pierre and Miquelon', code: 'PM'}, 
      {name: 'Saint Vincent and the Grenadines', code: 'VC'}, 
      {name: 'Samoa', code: 'WS'}, 
      {name: 'San Marino', code: 'SM'}, 
      {name: 'Sao Tome and Principe', code: 'ST'}, 
      {name: 'Saudi Arabia', code: 'SA'}, 
      {name: 'Senegal', code: 'SN'}, 
      {name: 'Serbia and Montenegro', code: 'CS'}, 
      {name: 'Seychelles', code: 'SC'}, 
      {name: 'Sierra Leone', code: 'SL'}, 
      {name: 'Singapore', code: 'SG'}, 
      {name: 'Slovakia', code: 'SK'}, 
      {name: 'Slovenia', code: 'SI'}, 
      {name: 'Solomon Islands', code: 'SB'}, 
      {name: 'Somalia', code: 'SO'}, 
      {name: 'South Africa', code: 'ZA'}, 
      {name: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
      {name: 'Spain', code: 'ES'}, 
      {name: 'Sri Lanka', code: 'LK'}, 
      {name: 'Sudan', code: 'SD'}, 
      {name: 'Suriname', code: 'SR'}, 
      {name: 'Svalbard and Jan Mayen', code: 'SJ'}, 
      {name: 'Swaziland', code: 'SZ'}, 
      {name: 'Sweden', code: 'SE'}, 
      {name: 'Switzerland', code: 'CH'}, 
      {name: 'Syrian Arab Republic', code: 'SY'}, 
      {name: 'Taiwan, Province of China', code: 'TW'}, 
      {name: 'Tajikistan', code: 'TJ'}, 
      {name: 'Tanzania, United Republic of', code: 'TZ'}, 
      {name: 'Thailand', code: 'TH'}, 
      {name: 'Timor-Leste', code: 'TL'}, 
      {name: 'Togo', code: 'TG'}, 
      {name: 'Tokelau', code: 'TK'}, 
      {name: 'Tonga', code: 'TO'}, 
      {name: 'Trinidad and Tobago', code: 'TT'}, 
      {name: 'Tunisia', code: 'TN'}, 
      {name: 'Turkey', code: 'TR'}, 
      {name: 'Turkmenistan', code: 'TM'}, 
      {name: 'Turks and Caicos Islands', code: 'TC'}, 
      {name: 'Tuvalu', code: 'TV'}, 
      {name: 'Uganda', code: 'UG'}, 
      {name: 'Ukraine', code: 'UA'}, 
      {name: 'United Arab Emirates', code: 'AE'}, 
      {name: 'United Kingdom', code: 'GB'}, 
      {name: 'United States', code: 'US'}, 
      {name: 'United States Minor Outlying Islands', code: 'UM'}, 
      {name: 'Uruguay', code: 'UY'}, 
      {name: 'Uzbekistan', code: 'UZ'}, 
      {name: 'Vanuatu', code: 'VU'}, 
      {name: 'Venezuela', code: 'VE'}, 
      
      {name: 'Virgin Islands, British', code: 'VG'}, 
      {name: 'Virgin Islands, U.S.', code: 'VI'}, 
      {name: 'Wallis and Futuna', code: 'WF'}, 
      {name: 'Western Sahara', code: 'EH'}, 
      {name: 'Yemen', code: 'YE'}, 
      {name: 'Zambia', code: 'ZM'}, 
      {name: 'Zimbabwe', code: 'ZW'} 
    ]
  }

  getListSubName(){
    return [
      {id: 1, value: ['Nguy???n','nguy???n'], rawValue: ['Nguyen', 'nguyen'], mapSuggestValue: ['nguen', 'ngyen','ngen','nhuyen','nhuen','nhyen','ng','nh','nguyem', 'nguyenx','nguyeen','nguyeenx']}, 
      {id: 2, value: ['Tr???n','tr???n'], rawValue: ['Tran', 'tran'], mapSuggestValue: ['tr', 'tra', 'tan', 'ta', 'tn', 'tranf']}, 
      {id: 3, value: ['L??','l??'], rawValue: ['Le', 'le'], mapSuggestValue: ['l???', 'l???', 'l???', 'l???', 'l???']}, 
      {id: 4, value: ['Ph???m','ph???m'], rawValue: ['Pham', 'pham'], mapSuggestValue: ['ph','pam','phm','phamj']}, 
      {id: 5, value: ['Ho??ng','ho??ng'], rawValue: ['Hoang', 'hoang'], mapSuggestValue: ['ho','hoa','hoan','hoam','hoag','hang','hoamg','hamg','hoangf']}, 
      {id: 6, value: ['Hu???nh','hu???nh'], rawValue: ['Huynh', 'huynh'],mapSuggestValue: ['hu','huy','huyn','hynh','hunh','huyng','hunh','huynhf'] }, 
      {id: 7, value: ['Phan','phan'], rawValue: ['Phan', 'phan'], mapSuggestValue: ['ph','pan','phn','pham','pam']}, 
      {id: 8, value: ['V??', 'v??'], rawValue: ['Vu', 'vu'], mapSuggestValue: ['v??','v???','v???','v??','vux']}, 
      {id: 9, value: ['V??','v??'], rawValue: ['Vo','vo'], mapSuggestValue: ['v???','v??','v???','v??','vox']}, 
      {id: 10, value: ['?????ng', '?????ng'], rawValue: ['Dang', 'dang'], mapSuggestValue: ['da', 'dan', 'dawng','dawngj','ddawng','ddawngj']}, 
      {id: 11, value: ['B??i','b??i'], rawValue: ['Bui', 'bui'], mapSuggestValue: ['bu','bui','b???i','b??i','b???i','b??i','buif']}, 
      {id: 12, value: ['?????', '?????'], rawValue: ['Do','do'], mapSuggestValue: ['ddoox', 'ddoo','dd???', '??o???', 'd???', '????']},
      {id: 13, value: ['H???', 'h???'], rawValue: ['Ho', 'ho'], mapSuggestValue: ['h???', 'h???', 'h???', 'h???', 'hoof', 'hoo']}, 
      {id: 14, value: ['Ng??', 'ng??'], rawValue: ['Ngo', 'ngo'], mapSuggestValue: ['nho', 'ngoo', 'ng???', 'ng???', 'ng???', 'ng???', 'ng???']}, 
      {id: 15, value: ['D????ng', 'd????ng'], rawValue: ['Duong', 'duong'], mapSuggestValue: ['du', 'duo', 'duon', 'dung', 'dong', 'du??ng', 'd??ong', 'duwong', 'duwowng', 'duowng']},
      {id: 16, value: ['L??', 'l??'], rawValue: ['Ly', 'ly'], mapSuggestValue: ['l???', 'l???', 'l???', 'l???', 'lys']},
      {id: 17, value: ['L??', 'l??'], rawValue: ['Lo','lo'], mapSuggestValue: ['l??', 'l???', 'l???', 'l??', 'lof']}, 
      {id: 18, value: ['L?????ng', 'l?????ng'], rawValue: ['Luong', 'luong'], mapSuggestValue: ['lu', 'luo', 'luon', 'long', 'luw??ngf', 'luowngf', 'l?????n','l????gf']}, 
      {id: 19, value: ['Qu??ng', 'qu??ng'], rawValue: ['Quang', 'quang'], mapSuggestValue: ['quangf', 'quanfg', 'quan', 'q??ng', 'qangf']}, 
      {id: 20, value: ['T??ng', 't??ng'], rawValue: ['Tong','tong'], mapSuggestValue: ['t??n', 'tng', 'tongf', 'tonfg', 't??ng', 't???ng','t???ng', 't??ng']},
      {id: 21, value: ['C??', 'c??'], rawValue: ['Ca','ca'], mapSuggestValue: ['c??', 'c???', 'c???', 'c??', 'caf']}, 
      {id: 22, value: ['L???o', 'l???o'], rawValue: ['Loo','loo'], mapSuggestValue: ['l???', 'l??xo', 'loox', 'l???o']}, 
      {id: 23, value: ['M??', 'm??'], rawValue: ['Me','me'], mapSuggestValue: ['m??', 'm???', 'm???', 'm???', 'mef']}, 
      {id: 24, value: ['L??', 'l??'], rawValue: ['Lu', 'lu'], mapSuggestValue: ['l???', 'l???', 'l??', 'l??', 'luf', 'l???']},
      {id: 25, value: ['L???m', 'l???m'], rawValue: ['Lem', 'lem'], mapSuggestValue: ['l???m', 'l???m', 'l???m', 'l???m', 'l??m', 'l??fm', 'leemf']}, 
      {id: 26, value: ['Ng???n', 'ng???n'], rawValue: ['Ngan','ngan'], mapSuggestValue: ['ng???n', 'ng???n', 'ng???n', 'ng???n', 'ng??nf', 'ngaanf', 'nganaf']}, 
      {id: 27, value: ['N??ng', 'n??ng'], rawValue: ['Nong', 'nong'], mapSuggestValue: ['n??', 'n??n', 'noong']}, 
      {id: 28, value: ['B???c', 'b???c'], rawValue: ['Bac','bac'], mapSuggestValue: ['b??c', 'b??c', 'bacj']},
      {id: 29, value: ['B???', 'b???'], rawValue: ['Be','be'], mapSuggestValue: ['b???', 'b???', 'b???', 'b???', 'bee', 'be???', 'bees']}, 
      {id: 30, value: ['Bua', 'bua'], rawValue: ['Bua', 'bua'], mapSuggestValue: ['bu', 'b??a', 'b??a', 'b???a', 'b???a', 'b??a']}, 
      {id: 31, value: ['Bun', 'bun'], rawValue: ['Bun', 'bun'], mapSuggestValue: ['b??n', 'b??n', 'b???n', 'b???n', 'b??n', 'bum']}, 
      {id: 32, value: ['C??', 'c??'], rawValue: ['Ca', 'ca'], mapSuggestValue: ['c??', 'c???', 'c???', 'c??', 'caf']},
      {id: 33, value: ['C???m', 'c???m'], rawValue: ['Cam', 'cam'], mapSuggestValue: ['c???', 'c???n', 'c???m', 'c???m', 'c???m', 'c???m', 'ca??m', 'caamf', 'c??mf']}, 
      {id: 34, value: ['Ch???u', 'ch???u'], rawValue: ['Chau', 'chau'], mapSuggestValue: ['ch???', 'ch???u', 'cha???u', 'chaaur', 'ch???u', 'ch???u', 'ch???u', 'ch???u']}, 
      {id: 35, value: ['Chi??u', 'chi??u'], rawValue: ['Chieu', 'chieu'], mapSuggestValue: ['chieu', 'chi??', 'cheeu', 'chieeu', 'ch??u']}, 
      {id: 36, value: ['????o', '????o'], rawValue: ['Deo', 'deo'], mapSuggestValue: ['??eo', '????o', '?????o', '?????o', '?????o', 'ddeof', 'dd??o']},
      {id: 37, value: ['??i??u', '??i??u'], rawValue: ['Dieu', 'dieu'], mapSuggestValue: ['??i??', '??ieu', 'di??u', 'ddi??u', 'ddieeu']}, 
      {id: 38, value: ['Kh???m', 'kh???m'], rawValue: ['Kham', 'kham'], mapSuggestValue: ['kh???', 'kh???n', 'kh???m', 'k???m', 'khamwr', 'kh??nr']}, 
      {id: 39, value: ['Leo', 'leo'], rawValue: ['Leo','leo'], mapSuggestValue: ['le', 'lo', 'lao', 'lro', 'l??o']}, 
      {id: 40, value: ['L???m', 'l???m'], rawValue: ['Lem','lem'], mapSuggestValue: ['l???n', 'l???', 'l??m', 'l???m', 'l???m', 'l???m', 'l???m', 'leemf', 'l??mf', 'l??m', 'l??nf']},
  
      {id: 41, value: ['L??', 'l??'], rawValue: ['Lo', 'lo'], mapSuggestValue: ['loo', 'l???', 'l???', 'l???', 'l???']},
      {id: 42, value: ['La', 'la'], rawValue: ['La','la'], mapSuggestValue: ['l??', 'l???', 'l???', 'l??']}, 
      {id: 43, value: ['L???c', 'l???c'], rawValue: ['Loc', 'loc'], mapSuggestValue: ['l???', 'l???c', 'lo???c', 'loocj']}, 
      {id: 44, value: ['L???', 'l???'], rawValue: ['Lu', 'lu'], mapSuggestValue: ['l???', 'l???', 'lu', 'l???', 'luw', 'luwj', 'l???u']},
      {id: 45, value: ['L???', 'l???'], rawValue: ['Lu','lu'], mapSuggestValue: ['l???', 'l???', 'lu', 'l??', 'luf', 'luwf', 'l???u']}, 
  
      //L?????ng, Mang, M??, Nam, N??ng, Ng???n, Ngu, Nho, Nh???t, Panh, Pha, Phia, Qu??ng, S???m, T???, T??y, Tao, T???o, T??ng, Vang, V??, Sa (hay Xa), Xin
      {id: 46, value: ['L?????ng','l?????ng'], rawValue: ['Luong', 'luong'], mapSuggestValue: ['l????g', 'l????n', 'l????ngf','l???ng','luwowngf','l?????ng']}, 
      {id: 47, value: ['Mang','mang'], rawValue: ['Mang', 'mang'], mapSuggestValue: ['ma', 'man', 'mag', 'mng']}, 
      {id: 48, value: ['M??', 'm??'], rawValue: ['Me','me'], mapSuggestValue: ['mef', 'm???', 'm???', 'm??','m???']},
      {id: 49, value: ['Nam', 'nam'], rawValue: ['Nam', 'nam'], mapSuggestValue: ['na', 'nm', 'nan', 'mam']}, 
      {id: 50, value: ['Ngu', 'ngu'], rawValue: ['Ngu', 'ngu'], mapSuggestValue: ['nu', 'mgu','nhu']}, 
      {id: 51, value: ['Nho', 'nho'], rawValue: ['Nho','nho'], mapSuggestValue: ['no', 'mho']}, 
      {id: 52, value: ['Nh???t', 'nh???t'], rawValue: ['Nhot', 'nhot'], mapSuggestValue: ['nh???', 'nht', 'nhoj', 'nhotj', 'nhojt', 'mhot','Mh???t', 'ng???t']},
      {id: 53, value: ['Panh', 'panh'], rawValue: ['Panh', 'panh'], mapSuggestValue: ['pan', 'panh', 'pamh', 'pang', 'phanh']}, 
      {id: 54, value: ['Pha', 'pha'], rawValue: ['Pha', 'pha'], mapSuggestValue: ['pa', 'ph']}, 
      {id: 55, value: ['Phia', 'phia'], rawValue:  ['Phia', 'phia'], mapSuggestValue: ['phi', 'pia', 'ph']}, 
      {id: 56, value: ['Qu??ng', 'qu??ng'], rawValue: ['Quang', 'quang'], mapSuggestValue: ['qu', 'qua', 'quan', 'quanfg', 'quangf', 'quanh', 'qang','quan', 'quamg']},
      {id: 57, value: ['S???m', 's???m'], rawValue: ['Sam','sam'], mapSuggestValue: ['sa', 'sm', 'saamf', 'sama', 'san']}, 
      {id: 58, value: ['T???', 't???'], rawValue: ['Tu', 'tu'], mapSuggestValue: ['tuj', 't??', 't??', 't???', 't??']}, 
      {id: 59, value: ['T??y','t??y'], rawValue: ['Tay','tay'], mapSuggestValue: ['t??', 't???', 'tayf', 't??i', 't??y','??y', 'y??y','r??y']}, 
      {id: 60, value: ['Tao', 'tao'], rawValue:  ['Tao', 'tao'],mapSuggestValue: ['ta', 'to', 'ta0', 't??o', 't??o', 't???o', 't??o'] },
      {id: 61, value: ['T???o', 't???o'], rawValue: ['Tao', 'tao'], mapSuggestValue: ['t???0', 'taoj', 'tajo', 't???']}, 
      {id: 62, value: ['T??ng', 't??ng'], rawValue: ['Tong', 'tong'], mapSuggestValue: ['t??n', 'tng', 'tonfg', 'tongf', 't??ng', 't???ng', 't???ng', 't??ng', 't??mg', 'tonhf', 't??nh']}, 
      {id: 63, value: ['Vang', 'vang'], rawValue: ['Vang', 'vang'], mapSuggestValue: ['van', 'vng', 'vamg', 'vanh']}, 
      {id: 64, value: ['V??', 'v??'], rawValue: ['Vi', 'vi'], mapSuggestValue: ['v??', 'v???', 'v???', 'v??', 'v???', 'vyf', 'vif']},
      {id: 65, value: ['Sa', 'sa'], rawValue: ['Sa', 'sa'], mapSuggestValue: ['sas', 's??', 's???', 's??', 's??', 's???']}, 
      {id: 66, value: ['Xa', 'xa'], rawValue: ['Xa', 'xa'], mapSuggestValue: ['xax', 'x??', 'x???', 'x??', 'x??', 'x???']}, 
      {id: 67, value: ['Xin', 'xin'], rawValue: ['Xin', 'xin'], mapSuggestValue: ['xim', 'xi', 'x???n', 'x??n', 'x??n', 'x???n', 'sin']}, 
      
      {id: 68, value: ['H??', 'h??'], rawValue: ['Ha', 'ha'], mapSuggestValue: ['ga', 'h???', 'h??', 'h???', 'h??', 'haf','h???', 'h???']},
      {id: 69, value: ['An', 'an'], rawValue: ['An', 'an'], mapSuggestValue: ['am', '??n', '??n', '??n', '???n']},
      {id: 70, value: ['Anh', 'anh'], rawValue: ['Anh', 'anh'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 71, value: ['Ao', 'ao'], rawValue: ['Ao', 'ao'], mapSuggestValue: ['a0', '??o', '??o', '??o', '???o', '??o', '??o']},
      {id: 72, value: ['??nh', '??nh'], rawValue: ['Anh', 'anh'], mapSuggestValue: ['??nh', '??nh', '???nh', '???nh', '??mh', 'asnh', 'anhs']},
      {id: 73, value: ['??n', '??n'], rawValue: ['An', 'an'], mapSuggestValue: ['??n', '??m', '???n', '???n', '???n', '???n', '???n', 'aan', 'aam']},
      {id: 74, value: ['??u D????ng', '??u d????ng'], rawValue: ['Au Duong', 'au duong'], mapSuggestValue: ['aau duwowng', '??u r????ng', '??u gi????ng', '??u z????ng', 'au d????ng', '??u d????nh', '??u du??ng', '??u d??ong']},
      {id: 75, value: ['???u', '???u'], rawValue: ['Au', 'au'], mapSuggestValue: ['???u', '????', '???u', '???u', '???u', '???u', 'a??u', 'aaus']},
      {id: 76, value: ['B??', 'b??'], rawValue: ['Ba', 'ba'], mapSuggestValue: ['ba', 'b??', 'b???', 'b??', 'b???', 'bas']},
      {id: 77, value: ['B???c', 'b???c'], rawValue: ['Bac', 'bac'], mapSuggestValue: ['b??c', 'b??c', 'bacj', 'b??c', 'b???c', 'b???c', 'b???c']},
      {id: 78, value: ['B???ch', 'b???ch'], rawValue: ['Bach', 'bach'], mapSuggestValue: ['bacg', 'b??ch', 'bajch', 'bachj']},
      {id: 79, value: ['B??n', 'b??n'], rawValue: ['Ban', 'ban'], mapSuggestValue: ['b??m', 'b??', 'b???n', 'b??n', 'b???n', 'b??n', 'banf', 'bafn']},
      {id: 80, value: ['B??ng', 'b??ng'], rawValue: ['Bang', 'bang'], mapSuggestValue: ['bamgf', 'b??ng', 'b???ng', 'b??ng', 'b???ng', 'b??nh', 'bangf', 'bafng', 'b??mg']},
      {id: 81, value: ['B??nh', 'b??nh'], rawValue: ['Banh', 'banh'], mapSuggestValue: ['bamh', 'b??nh', 'b???nh', 'b??nh', 'b???nh', 'b??ng', 'banhf', 'bafnh', 'b??mh']},
      {id: 82, value: ['B???o', 'b???o'], rawValue: ['Bao', 'bao'], mapSuggestValue: ['b???0', 'b???', 'baro', 'b??o', 'b??o', 'b???o', 'b??o', 'b???o', 'b???o']},
  
      {id: 83, value: ['B???', 'b???'], rawValue: ['Be', 'be'], mapSuggestValue: ['be', 'b??', 'b???', 'b???', 'b???', 'b???', 'b??o', 'b???o', 'b???o']},
      {id: 84, value: ['B??', 'b??'], rawValue: ['Bi', 'bi'], mapSuggestValue: ['b', 'b??', 'b??', 'b???', 'b???']},
      {id: 85, value: ['Bi???n', 'bi???n'], rawValue: ['Bien', 'bien'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 86, value: ['B??nh', 'b??nh'], rawValue: ['Binh', 'binh'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 87, value: ['B???', 'b???'], rawValue: ['Bo', 'bo'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 88, value: ['Bung', 'bung'], rawValue: ['Bung', 'bung'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 89, value: ['Chri??ng', 'chri??ng'], rawValue: ['Chrieng', 'chrieng'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 90, value: ['Ca', 'ca'], rawValue: ['Ca', 'ca'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 91, value: ['C??i', 'c??i'], rawValue: ['Cai', 'cai'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 92, value: ['Cai', 'cai'], rawValue: ['Cai', 'cai'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 93, value: ['Cam', 'cam'], rawValue: ['Cam', 'cam'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 94, value: ['C???nh', 'c???nh'], rawValue: ['Canh', 'canh'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 95, value: ['Cao', 'cao'], rawValue: ['Cao', 'cao'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 96, value: ['C??p', 'c??p'], rawValue: ['Cap', 'cap'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 97, value: ['C??t', 'c??t'], rawValue: ['Cat', 'cat'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 98, value: ['C???m', 'c???m'], rawValue: ['Cam', 'cam'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 99, value: ['C???n', 'c???n'], rawValue: ['Can', 'can'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 100, value: ['Ch???', 'ch???'], rawValue: ['Che', 'che'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},

      {id: 101, value: ['Chi??m', 'chi??m'], rawValue: ['Chiem', 'chiem'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 102, value: ['Chu', 'chu'], rawValue: ['Chu', 'chu'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 103, value: ['Ch??u', 'ch??u'], rawValue: ['Chau', 'chau'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 104, value: ['Chung', 'chung'], rawValue: ['Chung', 'chung'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 105, value: ['Ch??ng', 'ch??ng'], rawValue: ['Chung', 'chung'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 106, value: ['Ch????ng', 'ch????ng'], rawValue: ['Chuong', 'chuong'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 107, value: ['Ch???', 'ch???'], rawValue: ['Chu', 'chu'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 108, value: ['C???', 'c???'], rawValue: ['Co', 'co'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 109, value: ['C???', 'c???'], rawValue: ['Co', 'co'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 110, value: ['C??ng', 'c??ng'], rawValue: ['Cong', 'cong'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 111, value: ['C???ng', 'c???ng'], rawValue: ['Cong', 'cong'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 112, value: ['Cung', 'cung'], rawValue: ['Cung', 'cung'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 113, value: ['C??', 'c??'], rawValue: ['Cu', 'cu'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 114, value: ['C???', 'c???'], rawValue: ['Cu', 'cu'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 115, value: ['D??', 'd??'], rawValue: ['Da', 'da'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 116, value: ['DAnh', 'danh'], rawValue: ['DAnh', 'danh'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 117, value: ['Di??m', 'di??m'], rawValue: ['Diem', 'diem'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 118, value: ['Di???p', 'di???p'], rawValue: ['Diep', 'diep'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 119, value: ['Do??n', 'do??n'], rawValue: ['Doan', 'doan'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 120, value: ['Duy', 'duy'], rawValue: ['Duy', 'duy'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 121, value: ['D??', 'd??'], rawValue: ['Du', 'du'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 122, value: ['????i', '????i'], rawValue: ['Dai', 'dai'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 123, value: ['??i???u', '??i???u'], rawValue: ['Dieu', 'dieu'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 124, value: ['??an', '??an'], rawValue: ['Dan', 'dan'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 125, value: ['????m', '????m'], rawValue: ['Dam', 'dam'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 126, value: ['????o', '????o'], rawValue: ['Dao', 'dao'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 127, value: ['?????u', '?????u'], rawValue: ['Dau', 'dau'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      
      {id: 128, value: ['?????u', '?????u'], rawValue: ['Dau', 'dau'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 129, value: ['????o', '????o'], rawValue: ['Deo', 'deo'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 130, value: ['??i???n', '??i???n'], rawValue: ['Dien', 'dien'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 131, value: ['??inh', '??inh'], rawValue: ['Dinh', 'dinh'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 132, value: ['??i??u', '??i??u'], rawValue: ['Dieu', 'dieu'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 133, value: ['??o??n', '??o??n'], rawValue: ['Doan', 'doan'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 134, value: ['??o???n', '??o???n'], rawValue: ['Doan', 'doan'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 135, value: ['????n', '????n'], rawValue: ['Don', 'don'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 136, value: ['?????ng', '?????ng'], rawValue: ['Dong', 'dong'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 137, value: ['?????', '?????'], rawValue: ['Do', 'do'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 138, value: ['?????ng', '?????ng'], rawValue: ['Dong', 'dong'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 139, value: ['?????ng', '?????ng'], rawValue: ['Dong', 'dong'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 140, value: ['?????i', '?????i'], rawValue: ['Doi', 'doi'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 141, value: ['??????ng', '??????ng'], rawValue: ['Duong', 'duong'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 142, value: ['???????ng', '???????ng'], rawValue: ['Duong', 'duong'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 143, value: ['?????c', '?????c'], rawValue: ['Duc', 'duc'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 144, value: ['????ng', '????ng'], rawValue: ['Dang', 'dang'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']}, 
      {id: 145, value: ['Gi???', 'gi???'], rawValue: ['Gia', 'gia'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 146, value: ['Giao', 'giao'], rawValue: ['Giao', 'giao'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 147, value: ['Giang', 'giang'], rawValue: ['Giang', 'giang'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 147, value: ['Gi??ng', 'gi??ng'], rawValue: ['Giang', 'giang'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 149, value: ['Gi??p', 'gi??p'], rawValue: ['Giap', 'giap'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 150, value: ["H'", "h'"], rawValue: ["H'", "h'"], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 151, value: ["H'ma", "h'ma"], rawValue: ["H'ma", "h'ma"], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 152, value: ["H'nia", "h'nia"], rawValue: ["H'nia", "h'nia"], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 153, value: ['H???u', 'h???u'], rawValue: ['Hau', 'hau'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 154, value: ['H??', 'h??'], rawValue: ['Ha', 'ha'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 155, value: ['H???', 'h???'], rawValue: ['Ha', 'ha'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 156, value: ['H??n', 'h??n'], rawValue: ['Han', 'han'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 157, value: ['H??n', 'h??n'], rawValue: ['Han', 'han'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 158, value: ['H???', 'h???'], rawValue: ['He', 'he'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 159, value: ['Hi', 'hi'], rawValue: ['Hi', 'hi'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 160, value: ['H??nh', 'h??nh'], rawValue: ['Hinh', 'hinh'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 161, value: ['Hoa', 'hoa'], rawValue: ['Hoa', 'hoa'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 162, value: ['H???ng', 'h???ng'], rawValue: ['Hong', 'hong'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 163, value: ['H??ng', 'h??ng'], rawValue: ['Hung', 'hung'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 164, value: ['H???a', 'h???a'], rawValue: ['Hua', 'hua'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 165, value: ['H?????ng', 'h?????ng'], rawValue: ['Huong', 'huong'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 166, value: ['K??ng', 'k??ng'], rawValue: ['Kong', 'kong'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 167, value: ['Ki???u', 'ki???u'], rawValue: ['Kieu', 'kieu'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 168, value: ['Kha', 'kha'], rawValue: ['Kha', 'kha'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 169, value: ['Kh??', 'kh??'], rawValue: ['Kha', 'kha'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 170, value: ['Kh????ng', 'kh????ng'], rawValue: ['Khuong', 'khuong'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 171, value: ['Kh??u', 'kh??u'], rawValue: ['Khau', 'khau'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 172, value: ['Khi???u', 'khi???u'], rawValue: ['Khieu', 'khieu'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 173, value: ['Khoa', 'khoa'], rawValue: ['Khoa', 'khoa'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 174, value: ['Kh???ng', 'kh???ng'], rawValue: ['Khong', 'khong'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 175, value: ['Khu', 'khu'], rawValue: ['Khu', 'khu'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 176, value: ['Khu???t', 'khuat'], rawValue: ['Khuat', 'khuat'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 177, value: ['Kh??c', 'kh??c'], rawValue: ['Khuc', 'khuc'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 178, value: ['Ki???u', 'ki???u'], rawValue: ['Kieu', 'kieu'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 179, value: ['Kim', 'kim'], rawValue: ['Kim', 'kim'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 180, value: ['Khai', 'khai'], rawValue: ['Khai', 'khai'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 181, value: ['Lyly', 'lyly'], rawValue: ['Lyly', 'lyly'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 182, value: ['La', 'la'], rawValue: ['La', 'la'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 183, value: ['L??', 'l??'], rawValue: ['La', 'la'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 184, value: ['L??nh', 'l??nh'], rawValue: ['Lanh', 'lanh'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 185, value: ['L???c', 'l???c'], rawValue: ['Lac', 'lac'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 186, value: ['L???i', 'l???i'], rawValue: ['Lai', 'lai'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 187, value: ['L??ng', 'l??ng'], rawValue: ['Lang', 'lang'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 188, value: ['L??m', 'l??m'], rawValue: ['Lam', 'lam'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 189, value: ['L??ng', 'l??ng'], rawValue: ['Leng', 'leng'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 190, value: ['L???u', 'l???u'], rawValue: ['Leu', 'leu'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 191, value: ['Li??n', 'li??n'], rawValue: ['Lien', 'lien'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 192, value: ['Li??u', 'li??u'], rawValue: ['Lieu', 'lieu'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 193, value: ['Li???u', 'li???u'], rawValue: ['Lieu', 'lieu'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 194, value: ['L??', 'l??'], rawValue: ['Lo', 'lo'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 195, value: ['L??', 'l??'], rawValue: ['Lo', 'lo'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 196, value: ['L???', 'l???'], rawValue: ['Lo', 'lo'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 197, value: ['L???', 'L???'], rawValue: ['Lo', 'lo'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 198, value: ['Luy???n', 'Luy???n'], rawValue: ['Luyen', 'luyen'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 199, value: ['L???c', 'l???c'], rawValue: ['Luc', 'luc'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 200, value: ['L??', 'l??'], rawValue: ['Lu', 'lu'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 201, value: ['L???', 'l???'], rawValue: ['Lu', 'lu'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 202, value: ['L????ng', 'l????ng'], rawValue: ['Luong', 'luong'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 203, value: ['L??u', 'l??u'], rawValue: ['Luu', 'luu'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 204, value: ['L??', 'l??'], rawValue: ['Ly', 'ly'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 205, value: ['M??a', 'm??a'], rawValue: ['Mua', 'mua'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 206, value: ['Ma', 'ma'], rawValue: ['Ma', 'ma'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 207, value: ['Mai', 'mai'], rawValue: ['Mai', 'mai'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 208, value: ['Mang', 'mang'], rawValue: ['Mang', 'mang'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 209, value: ['M??', 'm??'], rawValue: ['Ma', 'ma'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 210, value: ['M???c', 'm???c'], rawValue: ['Mac', 'mac'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 211, value: ['M???ch', 'm???ch'], rawValue: ['Mach', 'mach'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 212, value: ['M???nh', 'm???nh'], rawValue: ['Manh', 'manh'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 213, value: ['M??u', 'm??u'], rawValue: ['Mau', 'mau'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 214, value: ['M???u', 'm???u'], rawValue: ['Mau', 'mau'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 215, value: ['M??u', 'm??u'], rawValue: ['Mau', 'mau'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 216, value: ['M???n', 'm???n'], rawValue: ['Man', 'man'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 217, value: ['M???c', 'm???c'], rawValue: ['Moc', 'moc'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 218, value: ['M???c', 'm???c'], rawValue: ['Muc', 'muc'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 219, value: ['Nhan', 'nhan'], rawValue: ['Nhan', 'nhan'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 220, value: ['Ninh', 'ninh'], rawValue: ['Ninh', 'ninh'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 221, value: ['Nh??m', 'nh??m'], rawValue: ['Nham', 'nham'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 222, value: ['Ng??n', 'ng??n'], rawValue: ['Ngan', 'ngan'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 223, value: ['Nghi??m', 'nghi??m'], rawValue: ['Nghiem', 'nghiem'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 224, value: ['Ngh???', 'ngh???'], rawValue: ['Nghi', 'nghi'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 225, value: ['Ng???', 'ng???'], rawValue: ['Ngo', 'ngo'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 226, value: ['Ng???c', 'ng???c'], rawValue: ['Ngoc', 'ngoc'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 227, value: ['Ng??', 'ng??'], rawValue: ['Ngu', 'ngu'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 228, value: ['Ng???y', 'ng???y'], rawValue: ['Nguy', 'nguy'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 229, value: ['Nh???', 'nh???'], rawValue: ['Nhu', 'nhu'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 230, value: ['N??ng', 'n??ng'], rawValue: ['Nong', 'nong'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 231, value: ['Ong', 'ong'], rawValue: ['Ong', 'ong'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 232, value: ['??ng', '??ng'], rawValue: ['Ong', 'ong'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 233, value: ['Phi', 'phi'], rawValue: ['Phi', 'phi'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 234, value: ['Ph??', 'ph??'], rawValue: ['Phi', 'phi'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 235, value: ['Ph??', 'ph??'], rawValue: ['Pho', 'pho'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 236, value: ['Ph??', 'ph??'], rawValue: ['Phu', 'phu'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 237, value: ['Ph??', 'ph??'], rawValue: ['Phu', 'phu'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 238, value: ['Ph??ng', 'ph??ng'], rawValue: ['Phung', 'phung'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 239, value: ['Ph????ng', 'ph????ng'], rawValue: ['Phuong', 'phuong'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 240, value: ['Qu???n', 'qu???n'], rawValue: ['Quan', 'quan'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 241, value: ['Qu??ng', 'qu??ng'], rawValue: ['Quang', 'quang'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 242, value: ['Qu??ch', 'qu??ch'], rawValue: ['Quach', 'quach'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 243, value: ['S??i', 's??i'], rawValue: ['Sai', 'sai'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 244, value: ['S???m', 's???m'], rawValue: ['Sam', 'sam'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 245, value: ['S??n', 's??n'], rawValue: ['Son', 'son'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 246, value: ['S???', 's???'], rawValue: ['Su', 'su'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 247, value: ['S??ng', 's??ng'], rawValue: ['Sung', 'sung'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 248, value: ['T??n', 't??n'], rawValue: ['Tan', 'tan'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 249, value: ['T??o', 't??o'], rawValue: ['Tao', 'tao'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 250, value: ['T???', 't???'], rawValue: ['Ta', 'ta'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 251, value: ['T??ng', 't??ng'], rawValue: ['Tang', 'tang'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 252, value: ['T???n', 't???n'], rawValue: ['Tan', 'tan'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 253, value: ['T???', 't???'], rawValue: ['Te', 'te'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 254, value: ['Thang', 'thang'], rawValue: ['Thang', 'thang'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 255, value: ['Th??i', 'th??i'], rawValue: ['Thai', 'thai'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 256, value: ['Th??nh', 'th??nh'], rawValue: ['Thanh', 'thanh'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 257, value: ['Th??o', 'th??o'], rawValue: ['Thao', 'thao'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 258, value: ['Thach', 'th???ch'], rawValue: ['Thach', 'thach'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 259, value: ['Th??n', 'th??n'], rawValue: ['Than', 'than'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 260, value: ['Th???m', 'th???m'], rawValue: ['Tham', 'tham'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 261, value: ['Th???p', 'th???p'], rawValue: ['Thap', 'thap'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 262, value: ['Th???', 'th???'], rawValue: ['The', 'the'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 263, value: ['Thi', 'thi'], rawValue: ['Thi', 'thi'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 264, value: ['Thi???u', 'thi???u'], rawValue: ['Thieu', 'thieu'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 265, value: ['Th???nh', 'th???nh'], rawValue: ['Thinh', 'thinh'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 266, value: ['Thoa', 'thoa'], rawValue: ['Thoa', 'thoa'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 267, value: ['Th??i', 'th??i'], rawValue: ['Thoi', 'thoi'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 268, value: ['Th???c', 'th???c'], rawValue: ['Thuc', 'thuc'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 269, value: ['Ti??u', 'ti??u'], rawValue: ['Tieu', 'tieu'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 270, value: ['Ti???p', 'ti???p'], rawValue: ['Tiep', 'tiep'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 271, value: ['Tinh', 'tinh'], rawValue: ['Tinh', 'tinh'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 272, value: ['T??ng', 't??ng'], rawValue: ['Tong', 'tong'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 273, value: ['T??', 't??'], rawValue: ['To', 'to'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 274, value: ['T??n', 't??n'], rawValue: ['Ton', 'ton'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 275, value: ['T??n Th???t', 't??n th???t'], rawValue: ['Ton That', 'ton that'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 276, value: ['T??ng', 't??ng'], rawValue: ['Tong', 'tong'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 277, value: ['T???ng', 't???ng'], rawValue: ['Tong', 'tong'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 278, value: ['Trang', 'trang'], rawValue: ['Trang', 'trang'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 279, value: ['Tr??c', 'tr??c'], rawValue: ['Trac', 'trac'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 280, value: ['Tr??', 'tr??'], rawValue: ['Tra', 'tra'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 281, value: ['Tri', 'Tri'], rawValue: ['Tri', 'Tri'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 282, value: ['Tri???u', 'tri???u'], rawValue: ['Trieu', 'trieu'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 283, value: ['Tr??nh', 'tr??nh'], rawValue: ['Trinh', 'trinh'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 284, value: ['Tr???nh', 'tr???nh'], rawValue: ['Trinh', 'trinh'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 285, value: ['Tr??ng', 'tr??ng'], rawValue: ['Trung', 'trung'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 286, value: ['Tr????ng', 'tr????ng'], rawValue: ['Truong', 'truong'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 287, value: ['Tu???n', 'tu???n'], rawValue: ['Tuan', 'tuan'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 288, value: ['T???', 't???'], rawValue: ['Tu', 'tu'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 289, value: ['Ty', 'ty'], rawValue: ['Ty', 'ty'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 290, value: ['U??ng', 'u??ng'], rawValue: ['Uong', 'uong'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 291, value: ['Ung', 'ung'], rawValue: ['Ung', 'ung'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 292, value: ['??ng', '??ng'], rawValue: ['Ung', 'ung'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 293, value: ['???ng', '???ng'], rawValue: ['Ung', 'ung'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 294, value: ['V???n', 'v???n'], rawValue: ['Van', 'van'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 295, value: ['V??n', 'v??n'], rawValue: ['Van', 'van'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 296, value: ['Vi', 'vi'], rawValue: ['Vi', 'vi'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 297, value: ['Vi??m', 'vi??m'], rawValue: ['Viem', 'viem'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 298, value: ['Vi??n', 'vi??n'], rawValue: ['Vien', 'vien'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 299, value: ['V????ng', 'v????ng'], rawValue: ['Vuong', 'vuong'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 300, value: ['V??u', 'v??u'], rawValue: ['Vuu', 'vuu'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 301, value: ['Xa', 'xa'], rawValue: ['Xa', 'xa'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 302, value: ['Xung', 'xung'], rawValue: ['Xung', 'xung'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      {id: 303, value: ['Y??n', 'y??n'], rawValue: ['Yen', 'yen'], mapSuggestValue: ['amh', '??nh', '??nh', '???nh', 'ang', '??n', '??nh', '??ng']},
      
      // An
      ]
  }

  checkEmailInvalidFormat(input){
    let strcheck = input;
            if(input.indexOf('@') != -1){
              strcheck = input.split('@')[1];
            }
    let arr = ['mail.com', 'gail.com', 'gmil.com', 'gmal.com', 'gmai.com', 'gmail.con', 'ggmail.com', 'gmmail.com', 'gm??il.com', 'gmaail.com', 'gmaiil.com', 'gmaill.com','ail.com','gil.com','gma.com','il.com','gi.com','gm.com',
    'ahoo.com', 'yhoo.com','yaoo.com', 'yaho.com', 'yah.com','yahoo.con','yah??.com','yo.com','ya.com','ya.com','oo.com',
    'ahoo.com.vn', 'yhoo.com.vn','yaoo.com.vn', 'yaho.com.vn', 'yah.com.vn','yahoo.con.vn','yah??.com.vn','yo.com.vn','ya.com.vn','ya.com.vn','oo.com.vn',
    'otmail.com','htmail.com', 'homail.com','hotail.com','hotmil.com','hotmal.com','hotmai.com','hotnail.com', 'hotmail.con','hmail.com','mail.com','hail.com','hoil.com','hotl.com','hotm.com','hot.com','ho.com','tmail.com',
    'cloud.com','iloud.com','icoud.com','iclud.com','iclod.com','iclou.com','icloud.con','loud.com','icoud.com','icld.com','iclo.com','oud.com','iud.com','icd.com','icl.com','ic.com','cl.com','lo.com','ou.com','ud.com']
    return arr.indexOf(strcheck) != -1;
  }

  checkPhoneInValidFormat(input){
    let arrBeginNumber = ['086', '096', '097', '098', '032', '033', '034', '035', '036', '037', '038', '039', //viettel
                          '088', '091', '094', '083', '084', '085', '081', '082', //vinaphone
                          '092', '056', '058', //vietnammobile
                          '089', '090', '093', '070', '079', '077', '076', '078', //mobilephonephone
                          '099', '059', //gmobile
                          '087',
                          '071', '072', '073', '074', '075', //add them
                          '030', '031',
                          '020', '021', '022', '023', '024', '025', '026', '027', '028', '029'
                          ];
    //let beginnum = input.substring(0, 3);
    //return arrBeginNumber.indexOf(beginnum) == -1;
    if(input && input*1 && input.length ==10 && input.startsWith('0'))
    {
        return false;
    }
    else if(input && input*1 && input.length ==11 && input.startsWith('84'))
    {
        return false;
    }
    else {
      return true;
    }
  }

  updatePaymentMethodForCombo(bookingCode, paymentType){
    var options = {
      'method': 'POST',
      'url': C.urls.baseUrl.urlContracting + '/api/toolsapi/UpdatePaymentMethod?HotelCode=' + bookingCode + '&paymentMethod=' + paymentType + '',
      'headers': {
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
    })
  }
  getCathayByKey(key: string) : Promise<any>{
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'url':C.urls.baseUrl.urlMobile+"/api/dashboard/GetCathayByKey?key=" + key,
        'headers': {
        }
      };
      request(options, function (error, response) { 
        if (error) throw new Error(error);
        resolve(response.body);
      });
    })
  }

  setCacheSearchHotelInfo(objSearch){
    this.storage.get('cacheSearchHotelInfo').then((data) => {
      if(data){
          this.storage.remove('cacheSearchHotelInfo').then(()=>{
            this.storage.set('cacheSearchHotelInfo', objSearch);
          })
      }else{
        this.storage.set('cacheSearchHotelInfo', objSearch);
      }
    })
  }
  // l??u cache search
  setCacheSearch(objSearch,stt): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage.get('arrHistory').then((data) => {
        var co=0;
        var objkey=objSearch.id+"_"+objSearch.CheckInDate+"_"+objSearch.CheckOutDate+"_"+objSearch.adult+"_"+objSearch.child;
        if(data ){
          for (let i = 0; i < data.length; i++) {
            const element = data[i];
            if (objkey==element.objkey) {
              // data.splice(i, 1);
              co=1;
            }
          }
        }
        if(co==0){
          this.searchhotel.objRecent=objSearch;

          if( !objSearch.imageUrl){
            if(objSearch.isType==0 ){
              this.getHoteldetail(objSearch.id).then((obj) => {
                if(obj){
                  objSearch.imageUrl=obj;
                }
                if(data && data.length>2){
                  data.splice(0, 1);
                  objSearch.objkey=objkey;
                  data.push(objSearch) 
                  this.storage.set('arrHistory', data);
                  
                }else{
                  if(!data){
                    data=[];
                  }
                  objSearch.objkey=objkey;
                  data.push(objSearch);
                  this.storage.set('arrHistory', data);
                }
              })
            }else{
              this.storage.get('listtopregions').then(dataregion => {
                if(dataregion){
                  var el = dataregion.filter(item => item.regionId==objSearch.id);
                  if(el && el.length >0){
                    if(el[0].image){
                      objSearch.imageUrl= (el[0].image.toLocaleString().trim().indexOf("http") == -1) ? 'https:' +el[0].image: el[0].image;
                    }
                  }else{
                    objSearch.imageUrl='https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage-110x110.jpg'
                  }
                  if(data && data.length>2){
                    data.splice(0, 1);
                    objSearch.objkey=objkey;
                    data.push(objSearch) 
                    this.storage.set('arrHistory', data);
                  }else{
                    if(!data){
                      data=[];
                    }
                    objSearch.objkey=objkey;
                    data.push(objSearch);
                    this.storage.set('arrHistory', data);
                  }
                }
                
              })
            }
          }else{
            if(data && data.length>2){
              data.splice(0, 1);
              objSearch.objkey=objkey;
              data.push(objSearch) 
              this.storage.set('arrHistory', data);
            }else{
              if(!data){
                data=[];
              }
              objSearch.objkey=objkey;
              data.push(objSearch);
              this.storage.set('arrHistory', data);
            }
          }
        }
       
       
        resolve(true);
      })
     
    })
   
  }
  getHoteldetail(id): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = C.urls.baseUrl.urlPost + "/mhoteldetail/" +id;
        var se = this;
        var options = {
          method: 'POST',
          url: url,
          timeout: 180000, maxAttempts: 5, retryDelay: 2000,
        };
        request(options, function (error, response, body) {
          if (response.statusCode != 200) {
            var objError = {
              page: "hoteldetail",
              func: "loaddata",
              message: response.statusMessage,
              content: response.body,
              type: "warning",
              param: JSON.stringify(options)
            };
            C.writeErrorLog(objError, response);
          }
          if (error) {
            error.page = "hoteldetail";
            error.func = "loaddata";
            error.param = JSON.stringify(options);
            C.writeErrorLog(objError, response);
          }
          if (response.statusCode == 200) {
            let jsondata = JSON.parse(body);
            if(jsondata.Avatar){
              jsondata.Avatar = (jsondata.Avatar.toLocaleString().trim().indexOf("http") == -1) ? 'https:' + jsondata.Avatar : jsondata.Avatar;
            }
            resolve(jsondata.Avatar);
          }
          
        })
     
    })
   
  }
  checkLogout(): Promise<any> {
    var se=this;
    return new Promise((resolve, reject) => {
      se.storage.get('jti').then((memberid) => {
        if(memberid){
          var options = {
            method: 'GET',
            url: C.urls.baseUrl.urlMobile + '/api/Dashboard/CheckUserActive?memberId='+memberid,
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers:
            {
             
            }
          };
          request(options, function (error, response, body) {
            if (error) {
              error.page = "roomdetailreview";
              error.func = "GetUserInfo";
              error.param = JSON.stringify(options);
              C.writeErrorLog(error, response);
            } else {
              if (body) {
                var data = JSON.parse(body);
                if (data.status==1) {
                  resolve(true);
                }else if(data.status==-1){
                  resolve(false);
                }
              }
    
            }
          });
        }
      
       
    })
    })
   
  }

  getIsoDate(cin, cout){
    let _darr:any = moment(cin).format('YYYY-MM-DD hh:mm:ss').split(' '),
    _darrday =  _darr[0].split('-'),
    _darrhour =  _darr[1].split(':');
    let _darr_return:any = moment(cout).format('YYYY-MM-DD hh:mm:ss').split(' '),
    _darrday_return =  _darr_return[0].split('-'),
    _darrhour_return =  _darr_return[1].split(':');
    let _d =new Date(Date.UTC(_darrday[0], _darrday[1] -1, _darrday[2], _darrhour[0], _darrhour[1], _darrhour[2])), final = (_d.getTime() + Math.abs((_d.getTimezoneOffset()))*2 );
    let _dReturn = new Date(Date.UTC(_darrday_return[0], _darrday_return[1] -1, _darrday_return[2], _darrhour_return[0], _darrhour_return[1], _darrhour_return[2])), final_return = (_dReturn.getTime() + Math.abs((_dReturn.getTimezoneOffset()))*2);
    let _isoDate = new Date(final).toISOString().replace('Z','');
    let _isoDate_return = new Date(final_return).toISOString().replace('Z','');
    return { cin: _isoDate, cout: _isoDate_return};
  }

  getCinIsoDate(cin){
    let _darr:any = moment(cin).format('YYYY-MM-DD hh:mm:ss').split(' '),
    _darrday =  _darr[0].split('-'),
    _darrhour =  _darr[1].split(':');
    let _d =new Date(Date.UTC(_darrday[0], _darrday[1] -1, _darrday[2], _darrhour[0], _darrhour[1], _darrhour[2])), final = (_d.getTime() + Math.abs((_d.getTimezoneOffset()))*2 );
    let _isoDate = new Date(final).toISOString().replace('Z','');
    return _isoDate;
  }

  checkAllotmentSeri(hotelId, roomId, cin, cout, roomNumber, supplier, token) :Promise<any> {
    return new Promise((resolve, reject) => {
      var options = {
        method: 'GET',
        url: C.urls.baseUrl.urlContracting + '/api/toolsapi/CheckAllotment',
        qs:
        {
          token: '3b760e5dcf038878925b5613c32615ea3',
          hotelcode: hotelId,
          roomcode: roomId,
          checkin: cin,
          checkout: cout,
          totalroom: roomNumber,
          supplier: supplier,
          bookingRequestXml: token
        },
        headers:
          {}
      };
      request(options, function (error, response, body) {
        if (response.statusCode != 200) {
          var objError = {
            page: "hoteldetail",
            func: "book",
            message: response.statusMessage,
            content: response.body,
            type: "warning",
            param: JSON.stringify(options)
          };
          C.writeErrorLog(objError, response);
        }
        if (error) {
          error.page = "hoteldetail";
          error.func = "book";
          error.param = JSON.stringify(options);
          C.writeErrorLog(error, response);
          throw new Error(error)
        };
        var rs = JSON.parse(body);
        resolve(rs.Msg == "AL");
      });
    })
    
  }

  removeString(input){
    input = input.replace('MASTER','').replace('MSTR','').replace('MISS','').replace('MR','').replace('MRS','').replace('MS','');
    input = input.replace('master','').replace('mstr','').replace('miss','').replace('mr','').replace('mrs','').replace('ms','');
    input = input.replace('Master','').replace('Mstr','').replace('Miss','').replace('Mr','').replace('Mrs','').replace('Ms','');
    return input.toLowerCase().trim();
  }
}


export class ActivityService {
  currentArticle = new EventEmitter();
  
  public bank: any;
  public child: any;
  public insurranceBookingId:any;
  objClaimed: any;
  tab3Loaded: any;
  listExperienceSearch: any[];
  listTopDeal:any = [];
  HotelSearchReqContract: any;
  firstloadhotelist: any;
  objFlightComboUpgrade: any;
  objBankInStallment: any;
  installmentPaymentSuccess: boolean=false;
  installmentPaymentErrorCode: string;
  objPaymentMytrip: any;
  objCathayMytrip: any;
  objFlightComboPaymentBreakDown: any;
  objCarComboPaymentBreakDown: any;
  installmentPriceStr: string;
  backValue: string;
  objRequestAddLuggage: { bookingCode: any; totalPrice: number; totalPriceDisplay: any; departWeight: any; returnWeight: any; objectDepartLuggage: any; objectReturnLuggage: any; };
  //abortSearch: boolean;
}