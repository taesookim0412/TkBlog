import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flowerabout',
  templateUrl: './flowerabout.component.html',
  styleUrls: ['./flowerabout.component.css']
})
export class FloweraboutComponent implements OnInit {
lat: number = 34.061583598391685;
lng: number = -118.30093145370483;
  constructor() { }

  ngOnInit() {
  }

}
