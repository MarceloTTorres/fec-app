import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBXMf8dgy10qMNkLbIQytT-3uwrJaBHDlY',
      authDomain: 'appfec-1dff8.firebaseapp.com',
      databaseURL: 'https://appfec-1dff8.firebaseio.com',
      projectId: 'appfec-1dff8',
      storageBucket: 'appfec-1dff8.appspot.com',
      messagingSenderId: '501446564569',
      appId: '1:501446564569:web:7e55cf94cce97858'
    }),
    AngularFireDatabaseModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    ServiceService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}