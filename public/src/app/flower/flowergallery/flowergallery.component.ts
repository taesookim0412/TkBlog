import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { ModalService } from 'src/app/modal/modal.service';
declare var $: any;
@Component({
  selector: 'app-flowergallery',
  templateUrl: './flowergallery.component.html',
  styleUrls: ['./flowergallery.component.css']
})
export class FlowergalleryComponent implements OnInit {
  imgs: Array<Object>;
  url: string = "";
  i: number = 0;

  constructor(private _route: ActivatedRoute,
    private _http: HttpService,
    private _modal: ModalService) { }

  ngOnInit() {
    this.reset();
  }
  reset() {
    this._route.params.subscribe((params: Params) => {
      this.url = params['category'];
      this._http.getGallery(this.url).subscribe((data) => {
        this.imgs = <Array<Object>>data;

      })
    });
  }
  showImage(url) {
    this._modal.showImage(url);
  }
}
