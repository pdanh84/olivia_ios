import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {PickupCalendarPage } from '../app/pickup-calendar/pickup-calendar';
import { AppRoutingPreloaderService } from './providers/AppRoutingPreloaderService';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' , data: { preload: true} },
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule', data: { preload: true} },
  //{ path: 'showmore', loadChildren: './tabs/tabs.module#TabsPageModule', },
  { path: 'pickup-calendar/:openfrommain', loadChildren: './pickup-calendar/pickup-calendar.module#PickupCalendarPageModule', },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule', },
  { path: 'loginusername', loadChildren: './loginusername/loginusername.module#LoginusernamePageModule', },
  { path: 'occupancy', loadChildren: './occupancy/occupancy.module#OccupancyPageModule', },
  { path: 'searchhotel', loadChildren: './searchhotel/searchhotel.module#SearchHotelPageModule', },
  { path: 'searchhotelfilter', loadChildren: './search-hotel-filter/search-hotel-filter.module#SearchHotelFilterPageModule', },
  { path: 'searchhotelfilteragain', loadChildren: './search-hotel-filter-again/search-hotel-filter-again.module#SearchHotelFilterAgainPageModule', },
  { path: 'searchhotelfilterandsort', loadChildren: './search-hotel-filter-and-sort/search-hotel-filter-and-sort.module#SearchHotelFilterAndSortPageModule', },
  { path: 'hotellist/:filteragain', loadChildren: './hotel-list/hotel-list.module#HotelListPageModule', },
  { path: 'hotellistmood/:id/:title', loadChildren: './hotel-list-mood/hotel-list-mood.module#HotelListMoodPageModule', },
  { path: 'hoteldetail/:id', loadChildren: './hoteldetail/hoteldetail.module#HotelDetailPageModule', },
  { path: 'hotelroomdetail/:id', loadChildren: './hotelroomdetail/hotelroomdetail.module#HotelRoomDetailPageModule', },
  { path: 'hotelreviews/:id', loadChildren: './hotelreviews/hotelreviews.module#HotelReviewsPageModule', },
  { path: 'hoteldescription/:id', loadChildren: './description/description.module#DescriptionPageModule', },
  { path: 'facilities/:id', loadChildren: './facilities/facilities.module#FacilitiesPageModule', },
  { path: 'policy/:id', loadChildren: './policy/policy.module#PolicyPageModule', },
  //{ path: 'userprofile', loadChildren: './userprofile/userprofile.module#UserProfilePageModule', },
  { path: 'userreviews', loadChildren: './userreviews/userreviews.module#UserReviewsPageModule', },
  { path: 'userreward', loadChildren: './userreward/userreward.module#UserRewardPageModule', },
  { path: 'tripweather/:cityName', loadChildren: './weather/weather.module#WeatherPageModule', },
  { path: 'exchangegift/cityName', loadChildren: './exchangegift/exchangegift.module#ExchangeGiftPageModule', },
  { path: 'cuspoints', loadChildren: './cuspoints/cuspoints.module#CuspointsPageModule', },
  { path: 'mytripbookingdetail', loadChildren: './mytripbookingdetail/mytripbookingdetail.module#MytripBookingDetailPageModule', },
  { path: 'roomcancel', loadChildren: './roomcancel/roomcancel.module#RoomCancelPageModule', },
  { path: 'hotelnotes', loadChildren: './hotelnotes/hotelnotes.module#HotelNotesPageModule', },
  { path: 'hotelexpsnotes', loadChildren: './hotelexpsnotes/hotelexpsnotes.module#HotelExpsNotesPageModule', },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule',},
  { path: 'roomdetailreview', loadChildren: './roomdetailreview/roomdetailreview.module#RoomdetailreviewPageModule', },
  { path: 'roomadddetails', loadChildren: './roomadddetails/roomadddetails.module#RoomadddetailsPageModule', },
  { path: 'roomadddetails-ean', loadChildren: './roomadddetails-ean/roomadddetails-ean.module#RoomadddetailsEanPageModule', },
  { path: 'roompaymentselect', loadChildren: './roompaymentselect/roompaymentselect.module#RoompaymentselectPageModule', },
  { path: 'roompaymentselect-ean', loadChildren: './roompaymentselect-ean/roompaymentselect-ean.module#RoompaymentselectEanPageModule', },
  { path: 'roompaymentbank', loadChildren: './roompaymentbank/roompaymentbank.module#RoompaymentbankPageModule', },
  { path: 'roompaymentdone/:code/:stt', loadChildren: './roompaymentdone/roompaymentdone.module#RoompaymentdonePageModule', },
  { path: 'roompaymentlive/:stt', loadChildren: './roompaymentlive/roompaymentlive.module#RoompaymentlivePageModule', },
  { path: 'roomchoosebank/:stt', loadChildren: './roomchoosebank/roomchoosebank.module#RoomchoosebankPageModule', },
  { path: 'roompaymentdoneean/:code/:stt/:ischeck', loadChildren: './roompaymentdoneean/roompaymentdoneean.module#RoompaymentdoneeanPageModule', },
  { path: 'roompaymentbreakdown/:dur/:roomnumber', loadChildren: './roompaymentbreakdown/roompaymentbreakdown.module#RoompaymentbreakdownPageModule', },
  { path: 'flightcomboreviews', loadChildren: './flightcomboreviews/flightcomboreviews.module#FlightComboReviewsPageModule',},
  { path: 'flightdeparture', loadChildren: './flightdeparture/flightdeparture.module#FlightDeparturePageModule',},
  { path: 'flightcomboadddetails', loadChildren: './flightcomboadddetails/flightcomboadddetails.module#FlightComboAddDetailsPageModule',},
  { path: 'flightcombopaymentdone/:stt', loadChildren: './flightcombopaymentdone/flightcombopaymentdone.module#FlightComboPaymentDonePageModule',},
  { path: 'forgotpassword', loadChildren: './forgotpassword/forgotpassword.module#ForgotPasswordPageModule',},
  { path: 'blog/:id', loadChildren: './blog/blog.module#BlogPageModule', },
  { path: 'usertravelhobby',loadChildren: './usertravelhobby/usertravelhobby.module#UserTravelHobbyPageModule',},
  { path: 'bloglist', loadChildren: './bloglist/bloglist.module#BlogListPageModule', },
  { path: 'topdeallist', loadChildren: './topdeallist/topdeallist.module#TopDealListPageModule', },
  { path: 'hotelreviewsimage', loadChildren: './hotelreviewsimage/hotelreviewsimage.module#HotelreviewsimagePageModule', },
  { path: 'combolist', loadChildren: './combolist/combolist.module#ComboListPageModule' },
  //{ path: 'experiencefilter', loadChildren: './experiencefilter/experiencefilter.module#ExperienceFilterPageModule' },
  //{ path: 'experiencesearch', loadChildren: './experiencesearch/experiencesearch.module#ExperienceSearchPageModule' },
  //{ path: 'experiencedetail', loadChildren: './experiencedetail/experiencedetail.module#ExperienceDetailPageModule' },
  //{ path: 'searchexperienceregion', loadChildren: './searchexperienceregion/searchexperienceregion.module#SearchExperienceRegionPageModule' },
  { path: 'searchblog', loadChildren: './searchblog/searchblog.module#SearchBlogPageModule' },
  { path: 'comboadddetails', loadChildren: './comboadddetails/comboadddetails.module#ComboadddetailsPageModule',},
  { path: 'combopayment', loadChildren: './combopayment/combopayment.module#CombopaymentPageModule' },
  { path: 'combodone/:code', loadChildren: './combodone/combodone.module#CombodonePageModule' },
  { path: 'carcombo', loadChildren: './carcombo/carcombo.module#CarComboPageModule', },
  //{ path: 'experiencedetail', loadChildren: './experiencedetail/experiencedetail.module#ExperienceDetailPageModule' },
  //{ path: 'searchexperienceregion', loadChildren: './searchexperienceregion/searchexperienceregion.module#SearchExperienceRegionPageModule' },
  { path: 'cardeparture', loadChildren: './cardeparture/cardeparture.module#CardeparturePageModule' },
  { path: 'combocarbank', loadChildren: './combocarbank/combocarbank.module#CombocarbankPageModule' },
  { path: 'combocarlive', loadChildren: './combocarlive/combocarlive.module#CombocarlivePageModule' },
  { path: 'loginsms', loadChildren: './loginsms/loginsms.module#LoginsmsPageModule' },
  { path: 'loginsmsverify', loadChildren: './loginsmsverify/loginsmsverify.module#LoginsmsverifyPageModule' },
  { path: 'forgotpass', loadChildren: './forgotpass/forgotpass.module#ForgotpassPageModule' },
  { path: 'forgotpassotp', loadChildren: './forgotpassotp/forgotpassotp.module#ForgotpassotpPageModule' },
  { path: 'forgotpasschange', loadChildren: './forgotpasschange/forgotpasschange.module#ForgotpasschangePageModule' },
  { path: 'insurrancepopover', loadChildren: './insurrancepopover/insurrancepopover.module#InsurrancepopoverPageModule' },
  { path: 'insurrancehistorypopover', loadChildren: './insurrancehistorypopover/insurrancehistorypopover.module#InsurrancehistorypopoverPageModule' },
  { path: 'insurrancedetail', loadChildren: './insurrancedetail/insurrancedetail.module#InsurrancedetailPageModule' },
  { path: 'insurrancedone', loadChildren: './insurrancedone/insurrancedone.module#InsurrancedonePageModule' },
  { path: 'insurrancenote', loadChildren: './insurrancenote/insurrancenote.module#InsurranceNotePageModule' },
  { path: 'combochoosebank', loadChildren: './combochoosebank/combochoosebank.module#CombochoosebankPageModule' },
  { path: 'combodoneprepay/:code/:stt/:ischeck', loadChildren: './combodoneprepay/combodoneprepay.module#CombodoneprepayPageModule' },
  { path: 'confirmotp', loadChildren: './confirmotp/confirmotp.module#ConfirmotpPageModule', },
  { path: 'combocarnew', loadChildren: './combocarnew/combocarnew.module#CombocarnewPageModule' },
  { path: 'combocarchangeplace', loadChildren: './combocarchangeplace/combocarchangeplace.module#CombocarchangeplacePageModule' },
  { path: 'registerverify', loadChildren: './registerverify/registerverify.module#RegisterverifyPageModule' },
  { path: 'popupinfobkg', loadChildren: './popupinfobkg/popupinfobkg.module#PopupinfobkgPageModule' },
  { path: 'adddiscount', loadChildren: './adddiscount/adddiscount.module#AdddiscountPageModule' },
  { path: 'flightcomboupgraderoom', loadChildren: './flightcomboupgraderoom/flightcomboupgraderoom.module#FlightcomboupgraderoomPageModule' },
  { path: 'flightcombopayment', loadChildren: './flightcombopayment/flightcombopayment.module#FlightcombopaymentPageModule' },
  { path: 'cusimgreview', loadChildren: './cusimgreview/cusimgreview.module#CusimgreviewPageModule' },
  { path: 'flightcombodoneprepay/:code/:stt/:ischeck', loadChildren: './flightcombodoneprepay/flightcombodoneprepay.module#FlightcombodoneprepayPageModule' },
  { path: 'flightcombobank', loadChildren: './flightcombobank/flightcombobank.module#FlightcombobankPageModule' },
  { path: 'flightcombolive', loadChildren: './flightcombolive/flightcombolive.module#FlightcombolivePageModule' },
  { path: 'flightcombochosebank', loadChildren: './flightcombochosebank/flightcombochosebank.module#FlightcombochosebankPageModule' },
  { path: 'combocarpaymentbreakdown', loadChildren: './combocarpaymentbreakdown/combocarpaymentbreakdown.module#CombocarpaymentbreakdownPageModule' },
  { path: 'flightcombopaymentbreakdown', loadChildren: './flightcombopaymentbreakdown/flightcombopaymentbreakdown.module#FlightcombopaymentbreakdownPageModule' },
  { path: 'installmentdetail', loadChildren: './installmentdetail/installmentdetail.module#InstallmentdetailPageModule' },
  { path: 'installmentpayment', loadChildren: './installmentpayment/installmentpayment.module#InstallmentpaymentPageModule' },
  { path: 'installmentpaymentdone', loadChildren: './installmentpaymentdone/installmentpaymentdone.module#InstallmentpaymentdonePageModule' },
  { path: 'rules', loadChildren: './rules/rules.module#RulesPageModule' },
  { path: 'foodcombodetail', loadChildren: './foodcombodetail/foodcombodetail.module#FoodcombodetailPageModule' },
  { path: 'foodcombolist', loadChildren: './foodcombolist/foodcombolist.module#FoodcombolistPageModule' },
  { path: 'foodcomboreview', loadChildren: './foodcomboreview/foodcomboreview.module#FoodcomboreviewPageModule' },
  { path: 'foodfilter', loadChildren: './foodfilter/foodfilter.module#FoodfilterPageModule' },
  { path: 'foodpaymentdone/:code/:startdate/:enddate', loadChildren: './foodpaymentdone/foodpaymentdone.module#FoodpaymentdonePageModule' },
  { path: 'foodpaymentselect', loadChildren: './foodpaymentselect/foodpaymentselect.module#FoodpaymentselectPageModule' },
  { path: 'foodadddetail', loadChildren: './foodadddetail/foodadddetail.module#FoodadddetailPageModule' },
  { path: 'foodbill', loadChildren: './foodbill/foodbill.module#FoodbillPageModule' },
  { path: 'foodorder', loadChildren: './foodorder/foodorder.module#FoodorderPageModule' },
  { path: 'foodplaceother', loadChildren: './foodplaceother/foodplaceother.module#FoodplaceotherPageModule' },
  { path: 'foodpaymentchoosebank', loadChildren: './foodpaymentchoosebank/foodpaymentchoosebank.module#FoodpaymentchoosebankPageModule' },
  { path: 'foodpaymentbank', loadChildren: './foodpaymentbank/foodpaymentbank.module#FoodpaymentbankPageModule' },
  { path: 'userprofile', loadChildren: './userprofile/userprofile.module#UserProfilePageModule', },
  { path: 'userchangepassword', loadChildren: './userchangepassword/userchangepassword.module#UserChangePasswordPageModule', },
  { path: 'foodinstallment', loadChildren: './foodinstallment/foodinstallment.module#FoodinstallmentPageModule' },
  { path: 'foodinstallmentdone/:code/:startdate/:enddate', loadChildren: './foodinstallmentdone/foodinstallmentdone.module#FoodinstallmentdonePageModule' },
  { path: 'foodmyorderdetail', loadChildren: './foodmyorderdetail/foodmyorderdetail.module#FoodMyOrderDetailPageModule' },
  { path: 'foodreview', loadChildren: './foodreview/foodreview.module#FoodreviewPageModule' },
  { path: 'foodreviewdetail', loadChildren: './foodreviewdetail/foodreviewdetail.module#FoodreviewdetailPageModule' },
  { path: 'foodpaymentdonepayoo/:code/:startdate/:enddate', loadChildren: './foodpaymentdonepayoo/foodpaymentdonepayoo.module#FoodpaymentdonepayooPageModule' },
  { path: 'foodpaymentpayoo/:code/:stt', loadChildren: './foodpaymentpayoo/foodpaymentpayoo.module#FoodpaymentpayooPageModule' },

  { path: 'fooddinnerdetail', loadChildren: './fooddinnerdetail/fooddinnerdetail.module#FoodDinnerDetailPageModule' },
  { path: 'foodreviewweek', loadChildren: './foodreviewweek/foodreviewweek.module#FoodreviewweekPageModule' },


  { path: 'flightselectpax', loadChildren: './flightselectpax/flightselectpax.module#FlightselectpaxPageModule' },
  { path: 'flightsearchresult', loadChildren: './flightsearchresult/flightsearchresult.module#FlightsearchresultPageModule' },
  { path: 'flightsearchairport', loadChildren: './flightsearchairport/flightsearchairport.module#FlightsearchairportPageModule' },
  { path: 'flightaddservice', loadChildren: './flightaddservice/flightaddservice.module#FlightaddservicePageModule' },
  { path: 'flightaddluggage', loadChildren: './flightaddluggage/flightaddluggage.module#FlightaddluggagePageModule' },
  { path: 'flightaddseat', loadChildren: './flightaddseat/flightaddseat.module#FlightaddseatPageModule' },
  { path: 'flightaddmeal', loadChildren: './flightaddmeal/flightaddmeal.module#FlightaddmealPageModule' },
  { path: 'flightadddetails', loadChildren: './flightadddetails/flightadddetails.module#FlightadddetailsPageModule' },
  { path: 'flightcondition', loadChildren: './flightcondition/flightcondition.module#FlightconditionPageModule' },
  { path: 'flightpaymentselect', loadChildren: './flightpaymentselect/flightpaymentselect.module#FlightPaymentSelectPageModule' },
  { path: 'flightpaymentbank', loadChildren: './flightpaymentbank/flightpaymentbank.module#FlightpaymentbankPageModule' },
  { path: 'flightpaymentchoosebank', loadChildren: './flightpaymentchoosebank/flightpaymentchoosebank.module#FlightpaymentchoosebankPageModule' },
  { path: 'flightpaymentdone/:code/:startdate/:enddate', loadChildren: './flightpaymentdone/flightpaymentdone.module#FlightpaymentdonePageModule' },
  { path: 'flightdetail', loadChildren: './flightdetail/flightdetail.module#FlightdetailPageModule' },
  { path: 'flightpaymentdonepayoo/:code/:startdate/:enddate', loadChildren: './flightpaymentdonepayoo/flightpaymentdonepayoo.module#FlightpaymentdonepayooPageModule' },
  { path: 'flightpaymentpayoo/:code/:stt', loadChildren: './flightpaymentpayoo/flightpaymentpayoo.module#FlightpaymentpayooPageModule' },
  { path: 'flightpaymentatoffice', loadChildren: './flightpaymentatoffice/flightpaymentatoffice.module#FlightpaymentatofficePageModule' },
  { path: 'flightpaymenterror', loadChildren: './flightpaymenterror/flightpaymenterror.module#FlightpaymenterrorPageModule' },
  { path: 'flightpaymentwarning', loadChildren: './flightpaymentwarning/flightpaymentwarning.module#FlightpaymentwarningPageModule' },
  { path: 'flightcombowarning', loadChildren: './flightcombowarning/flightcombowarning.module#FlightcombowarningPageModule' },
  { path: 'flightpaymentdonebank/:code/:startdate/:enddate', loadChildren: './flightpaymentdonebank/flightpaymentdonebank.module#FlightpaymentdonebankPageModule' },
  { path: 'roompaymentbanknew', loadChildren: './roompaymentbanknew/roompaymentbanknew.module#RoompaymentbanknewPageModule' },
  { path: 'roompaymentdonenew/:code/:stt', loadChildren: './roompaymentdonenew/roompaymentdonenew.module#RoompaymentdonenewPageModule' },
  { path: 'combodonebank/:code', loadChildren: './combodonebank/combodonebank.module#CombodonebankPageModule' },
  { path: 'flightcombopaymentdonebank/:stt', loadChildren: './flightcombopaymentdonebank/flightcombopaymentdonebank.module#FlightcombopaymentdonebankPageModule' },
  
  { path: 'homefood', loadChildren: './homefood/homefood.module#HomefoodPageModule' },
  { path: 'flightcombobookingdetail', loadChildren: './flightcombobookingdetail/flightcombobookingdetail.module#FlightcombobookingdetailPageModule' },
  { path: 'flighttopdealdetail', loadChildren: './flighttopdealdetail/flighttopdealdetail.module#FlighttopdealdetailPageModule' },

  { path: 'flightpaymenttimeout/:stt', loadChildren: './flightpaymenttimeout/flightpaymenttimeout.module#FlightpaymenttimeoutPageModule' },
  { path: 'flightcomboaddluggage', loadChildren: './flightcomboaddluggage/flightcomboaddluggage.module#FlightcomboaddluggagePageModule' },
  { path: 'flightcomboinfoluggage', loadChildren: './flightcomboinfoluggage/flightcomboinfoluggage.module#FlightcomboinfoluggagePageModule' },
  { path: 'flightcomboupgraderoom', loadChildren: './flightcomboupgraderoom/flightcomboupgraderoom.module#FlightcomboupgraderoomPageModule' },


  { path: 'combocarpaymentpayoo/:code/:stt', loadChildren: './combocarpaymentpayoo/combocarpaymentpayoo.module#CombocarpaymentpayooPageModule' },
  { path: 'flightcombopaymentpayoo/:code/:stt', loadChildren: './flightcombopaymentpayoo/flightcombopaymentpayoo.module#FlightcombopaymentpayooPageModule' },
  { path: 'roompaymentpayoo/:code/:stt', loadChildren: './roompaymentpayoo/roompaymentpayoo.module#RoompaymentpayooPageModule' },
  { path: 'mytripaymentselect/:stt', loadChildren: './mytripaymentselect/mytripaymentselect.module#MytripaymentselectPageModule' },
  { path: 'mytripaymentflightselect/:stt', loadChildren: './mytripaymentflightselect/mytripaymentflightselect.module#MytripaymentflightselectPageModule' },
  { path: 'mytripaymentflightcombo/:stt', loadChildren: './mytripaymentflightcombo/mytripaymentflightcombo.module#MytripaymentflightcomboPageModule' },
  { path: 'mytripaymentcarcombo/:stt', loadChildren: './mytripaymentcarcombo/mytripaymentcarcombo.module#MytripaymentcarcomboPageModule' },
  { path: 'mytripaymentflightbank', loadChildren: './mytripaymentflightbank/mytripaymentflightbank.module#MytripaymentflightbankPageModule' },
  { path: 'mytripaymentflighdone', loadChildren: './mytripaymentflighdone/mytripaymentflighdone.module#MytripaymentflighdonePageModule' },
  { path: 'mytripaymentflightpayoo/:code/:stt', loadChildren: './mytripaymentflightpayoo/mytripaymentflightpayoo.module#MytripaymentflightpayooPageModule' },
  { path: 'hotellistmoodfilter', loadChildren: './hotellistmoodfilter/hotellistmoodfilter.module#HotellistmoodfilterPageModule' },

  { path: 'mytriphistory', loadChildren: './mytriphistory/mytriphistory.module#MytripHistoryPageModule' },
  { path: 'mytripdetail', loadChildren: './mytripdetail/mytripdetail.module#MytripdetailPageModule' },
  { path: 'mytrippaymentbank', loadChildren: './mytrippaymentbank/mytrippaymentbank.module#MytrippaymentbankPageModule' },
  { path: 'mytripuppayment', loadChildren: './mytripuppayment/mytripuppayment.module#MytripuppaymentPageModule' },
  //add hotel city
  { path: 'hotelcityitemdetail', loadChildren: './hotelcityitemdetail/hotelcityitemdetail.module#HotelCityItemDetailPageModule' },
  { path: 'hotelcityroomupgrade', loadChildren: './hotelcityroomupgrade/hotelcityroomupgrade.module#HotelCityRoomUpgradePageModule' },
  { path: 'flightdcpickaddress', loadChildren: './flightdcpickaddress/flightdcpickaddress.module#FlightdcpickaddressPageModule' },
  { path: 'flightdcpickaddressinput', loadChildren: './flightdcpickaddressinput/flightdcpickaddressinput.module#FlightdcpickaddressinputPageModule' },
  { path: 'flightdcdetail/:isDepart/:isReturn', loadChildren: './flightdcdetail/flightdcdetail.module#FlightdcdetailPageModule' },
  { path: 'cooperateverifyotp', loadChildren: './cooperateverifyotp/cooperateverifyotp.module#CooperateverifyotpPageModule' },
  { path: 'ordersupport', loadChildren: './ordersupport/ordersupport.module#OrdersupportPageModule' },
  { path: 'ordersupportdone', loadChildren: './ordersupportdone/ordersupportdone.module#OrdersupportdonePageModule' },
  { path: 'mytripcathay/:bookingid', loadChildren: './mytripcathay/mytripcathay.module#MytripcathayPageModule' },

  { path: 'companyinfo', loadChildren: './bizTravel/companyinfo/companyinfo.module#CompanyinfoPageModule' },
  { path: 'bookingdetail', loadChildren: './bizTravel/bookingdetail/bookingdetail.module#BookingDetailPageModule' },
  { path: 'bookinghoteldetail', loadChildren: './bizTravel/bookinghoteldetail/bookinghoteldetail.module#BookingHotelDetailPageModule' },
  { path: 'confirmpayment', loadChildren: './bizTravel/confirmpayment/confirmpayment.module#ConfirmPaymentPageModule' },
  { path: 'confirmpaymentdone', loadChildren: './bizTravel/confirmpaymentdone/confirmpaymentdone.module#ConfirmPaymentDonePageModule' },
  { path: 'topup', loadChildren: './bizTravel/topup/topup.module#TopupPageModule' },
  { path: 'paymentdetail', loadChildren: './bizTravel/paymentdetail/paymentdetail.module#PaymentDetailPageModule' },

  { path: 'userlinkprofile', loadChildren: './userlinkprofile/userlinkprofile.module#UserLinkProfilePageModule', },
  { path: 'userprivacypolicy', loadChildren: './userprivacypolicy/userprivacypolicy.module#UserPrivacyPolicyPageModule', },
  { path: 'usercondition', loadChildren: './usercondition/usercondition.module#UserConditionPageModule', },
];
@NgModule({
  imports:
    [
      RouterModule.forRoot(routes, { preloadingStrategy: AppRoutingPreloaderService })
    ],
  exports:
    [
      RouterModule
    ]
})
export class AppRoutingModule { }
