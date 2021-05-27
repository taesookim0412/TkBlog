import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UploadService } from 'src/app/upload/upload.service';

@Component({
  selector: 'app-admincontactone',
  templateUrl: './admincontactone.component.html',
  styleUrls: ['./admincontactone.component.css']
})
export class AdmincontactoneComponent implements OnInit {
contact = {};
idx: number = 1;
  constructor(private _route: ActivatedRoute,
    private _upload: UploadService) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params) => {
      this._upload.getContactById(params['id']).subscribe(data => this.contact = data);
      let idx = params['idx'];
      if (idx != undefined && idx != null){
        idx = Number(idx);
        if (idx > 0){
          this.idx = idx;
        }
      }
    })
  }

}
