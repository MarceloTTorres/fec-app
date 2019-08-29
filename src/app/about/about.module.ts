import { AboutPage } from './about.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SecondPage } from './../modals/second/second.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutPage
      }
    ])
  ],
  declarations: [AboutPage, SecondPage],
  entryComponents: [SecondPage]
})
export class AboutPageModule {}
