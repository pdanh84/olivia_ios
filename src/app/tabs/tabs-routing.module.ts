import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
//import {HotelListPage} from '../hotel-list/hotel-list';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:
      [
        {
          path: 'tab1',
          children:
            [
              {
                path: '',
                loadChildren: '../tab1/tab1.module#Tab1PageModule',
                data: { preload: true}
              }
            ]
        },
        {
          path: 'tab3',
          children:
            [
              {
                path: '',
                loadChildren: '../tab3/tab3.module#Tab3PageModule'
              },
            ]
        },
        { path: 'combolist', loadChildren: '../combolist/combolist.module#ComboListPageModule', },
        {
          path: 'tab2',
          children:
            [
              {
                path: '',
                loadChildren: '../tab2/tab2.module#Tab2PageModule'
              }
            ]
        },
        {
            path: 'tab4',
            children:
              [
                {
                  path: '',
                  loadChildren: '../tab4/tab4.module#Tab4PageModule'
                }
              ]
          },
          {
            path: 'tab5',
            children:
              [
                {
                  path: '',
                  loadChildren: '../tab5/tab5.module#Tab5PageModule'
                },
              ]
          },
          
        {
          path: '',
          redirectTo: '/tabs/tab1',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  },
  {
    path: '/showmore',
    redirectTo: '/tabs/tab5',
    pathMatch: 'full'
  }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class TabsPageRoutingModule {}