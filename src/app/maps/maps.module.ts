import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MapsPage } from './maps.page';
import { AgmCoreModule } from '@agm/core';


const routes: Routes = [
  {
    path: '',
    component: MapsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB4dybe_UNx25JD1z9XDmt8tEay27kNCqY'
    })
  ],
  declarations: [MapsPage]
})
export class MapsPageModule {}
