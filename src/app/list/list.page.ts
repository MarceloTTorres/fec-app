import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}

// próxima implementação do API de geolocalização

// import { Component, OnInit } from '@angular/core';

// import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { LoadingController } from '@ionic/angular';

// declare const google;

// @Component({
//   selector: 'app-list',
//   templateUrl: 'list.page.html',
//   styleUrls: ['list.page.scss']
// })
// export class ListPage implements OnInit {
//   mapRef = null;

//   constructor(
//     private geolocation: Geolocation,
//     private loadingCtrl: LoadingController
//   ) {

//   }

//   ngOnInit() {
//     this.loadMap();
//   }

//   async loadMap() {
//     const loading = await this.loadingCtrl.create();
//     loading.present();
//     const myLatLng = await this.getLocation();
//     const mapEle: HTMLElement = document.getElementById('map');
//     this.mapRef = new google.maps.Map(mapEle, {
//       center: myLatLng,
//       zoom: 12
//     });
//     google.maps.event
//     .addListenerOnce(this.mapRef, 'idle', () => {
//       loading.dismiss();
//       this.addMaker(myLatLng.lat, myLatLng.lng);
//     }, 100000 );
//   }

//   private addMaker(lat: number, lng: number) {
//     const marker = new google.maps.Marker({
//       position: { lat, lng },
//       map: this.mapRef,
//       title: 'Hello World!'
//     });
//   }

//   private async getLocation() {
//     const rta = await this.geolocation.getCurrentPosition();
//     return {
//       lat: rta.coords.latitude,
//       lng: rta.coords.longitude
//     };
//   }

// }
