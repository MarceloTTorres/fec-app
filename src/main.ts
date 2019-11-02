import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


  const applicationServerPublicKey = '<Your Public Key>';

  if ('serviceWorker' in navigator && 'PushManager' in window) {
    console.log('Service Worker and Push is supported');
  
    navigator.serviceWorker.register('sw.js')
    .then(function(swReg) {
      console.log('Service Worker is registered', swReg);
  
//      swRegistration = swReg;
    })
    .catch(function(error) {
      console.error('Service Worker Error', error);
    });
  } else {
    console.warn('Push messaging is not supported');
  //  pushButton.textContent = 'Push Not Supported';
  }

  function initialiseUI() {
    // Set the initial subscription value
//    swRegistration.pushManager.getSubscription()
//    .then(function(subscription) {
//      isSubscribed = !(subscription === null);
 // 
 //     if (isSubscribed) {
        console.log('User IS subscribed.');
   //   } else {
        console.log('User is NOT subscribed.');
  
     // updateBtn();
   // });
  }

  function updateBtn() {
    // if (isSubscribed) {
    //   pushButton.textContent = 'Disable Push Messaging';
    // } else {
    //   pushButton.textContent = 'Enable Push Messaging';
    // }
  
    // pushButton.disabled = false;
  }

  navigator.serviceWorker.register('sw.js')
.then(function(swReg) {
  console.log('Service Worker is registered', swReg);

//  swRegistration = swReg;
  initialiseUI();
})