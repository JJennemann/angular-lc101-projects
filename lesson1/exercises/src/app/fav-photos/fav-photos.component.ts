import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://tmssl.akamaized.net/images/foto/galerie/thierry-henry-1417524348-3352.jpg?lm=1483605830';
  image2 = 'https://i2-prod.mirror.co.uk/incoming/article29353111.ece/ALTERNATES/n615/0_Arsenal-FC-v-Everton-FC-Premier-League.jpg';
  image3 = '';

  constructor() { }

  ngOnInit() {
  }

}