import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-admindirectory',
  templateUrl: './admindirectory.component.html',
  styleUrls: ['./admindirectory.component.css']
})
export class AdmindirectoryComponent implements OnInit {
url;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getUrl();
  }
  getUrl() {
    this._route.params.subscribe((params:Params) => this.url = params['category'])
  }
}
