import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-flowerhome',
  templateUrl: './flowerhome.component.html',
  styleUrls: ['./flowerhome.component.css']
})
export class FlowerhomeComponent implements OnInit {
homeImg:string = "";
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.getHome();
  }
  getHome() {
    this._http.getHome().subscribe((data) => this.homeImg = data['url']);
  }
}
