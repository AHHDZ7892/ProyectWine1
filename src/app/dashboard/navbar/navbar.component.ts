import { Component, OnInit } from '@angular/core';
import { OneSignalService } from 'onesignal-ngx';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  ngOnInit(): void {
  }
  constructor(private os: OneSignalService) {
    this.os.init({
       appId: 'd0fce3e0-adb4-4612-8a29-98496822b549',
      // appId: '0b60545e-3f4f-48ea-a37e-e436573e93f1',
    });
  }

  /*npm install workbox-cli --save-dev*/
  // tslint:disable-next-line:typedef
  onHandleTag(tag: any) {
    console.log('Gracias por suscribirte a UvaNegra');
    this.os.sendTag('tech', tag).then(() => {
      console.log('Sent tag: ' + tag);
    });
  }
}
