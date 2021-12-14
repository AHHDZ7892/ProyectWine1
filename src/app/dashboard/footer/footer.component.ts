import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  mapa: Mapboxgl.Map;
  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    (Mapboxgl as any).accessToken = environment.mapboxKey;

    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox', // container ID
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-97.39152618925509, 18.461518573915427], // starting position [lng, lat]
      zoom: 15 // starting zoom

  });

    this.crearMarcador(-97.39152618925509, 18.461518573915427);
}
  // tslint:disable-next-line:typedef
  crearMarcador(lng: number, lat: number){

  const marker = new Mapboxgl.Marker({
    draggable: true
  }).setLngLat([lng, lat])
    .addTo(this.mapa);

  marker.on('drag', () => {
    console.log(marker.getLngLat());
  });
  }

}
