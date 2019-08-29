import { ListPage } from './../list/list.page';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: SearchComponent
      }
    ])
  ],
  declarations: [SearchComponent, ListPage],
  entryComponents: [ListPage]
})
export class SearchPageModule {}
