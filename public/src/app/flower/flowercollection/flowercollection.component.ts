import {Component, OnInit} from '@angular/core';
import {HttpService} from 'src/app/http.service';

@Component({
  selector: 'app-flowercollection',
  templateUrl: './flowercollection.component.html',
  styleUrls: ['./flowercollection.component.css']
})
export class FlowercollectionComponent implements OnInit {
  data: Array<object>;

  constructor(private _http: HttpService) {
  }

  ngOnInit() {
    this.reset();
  }

  reset() {
    this._http.getGallery('archive').subscribe((data) => this.data = <Array<object>>data );
  };
}
