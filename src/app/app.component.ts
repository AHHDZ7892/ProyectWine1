import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import * as Mapboxgl from 'mapbox-gl';
// import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent implements  OnInit {

  export class AppComponent {
    title = 'UvaNegra';
  // mapa: Mapboxgl.Map;
  // tslint:disable-next-line:typedef
//   ngOnInit() {
//   (Mapboxgl as any).accessToken = environment.mapboxKey;

//   this.mapa = new Mapboxgl.Map({
//     container: 'mapa-mapbox', // container ID
//     style: 'mapbox://styles/mapbox/streets-v11',
//     center: [-97.39280295362273, 18.45294494900445], // starting position [lng, lat]
//     zoom: 16.6 // starting zoom

// });

//   this.crearMarcador(-97.39681017382665,  18.448080177904682);
// }
//   // tslint:disable-next-line:typedef
//   crearMarcador(lng: number, lat: number){

//   const marker = new Mapboxgl.Marker({
//     draggable: true
//   }).setLngLat([lng, lat])
//     .addTo(this.mapa);

//   marker.on('drag', () => {
//     console.log(marker.getLngLat());
//   });
//   }

    // respuesta: any;
    // readonly VAPID_PUBLIC_KEY = "";

    // constructor(
    //   private swPush: SwPush,
    //   private rest: RestService
    // ){}
}
