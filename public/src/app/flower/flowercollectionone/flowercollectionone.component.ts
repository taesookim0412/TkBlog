import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { EventEmitter } from '@angular/core';
import { MatMenuTrigger, MatSnackBar } from '@angular/material';
import { ModalService } from 'src/app/modal/modal.service';

@Component({
  selector: 'app-flowercollectionone',
  templateUrl: './flowercollectionone.component.html',
  styleUrls: ['./flowercollectionone.component.css']
})
export class FlowercollectiononeComponent implements OnInit {
  @Input() blogEntry = {};
  @Input() STATE_CHILD: string = "false";
  @Output() goBack = new EventEmitter();
  @Input() page: number = 1;
  @Input() idx: number = 0;
  id: number;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  url: string = "";


  constructor(private _route: ActivatedRoute,
    private _http: HttpService,
    private _snackbar: MatSnackBar,
    private _modal: ModalService) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      let page = params['page'];
      let idx = params['idx'];
      let id = params['id'];
      if (page != null && page != undefined) {
        this.page = page;
      }
      if (idx != null && idx != undefined) {
        this.idx = idx;
      }
      if (id != undefined && id != null) {
        this.id = id;
        this._http.getBlogEntry(id).subscribe((data) => {
          this.blogEntry = data;
        });
      }
      else if (this.blogEntry['_id'] != undefined)
      this.id = this.blogEntry['_id'];
      let url: string = window.location.href;
      let uIdx = url.indexOf("/blog");
      if (uIdx === -1)
      uIdx = url.indexOf("/collection");
      this.url = `${url.slice(0, uIdx)}/collection/archive/${this.id}/${this.page}/${this.idx}`;
    });

  }
  backToBlogs() {
    this.goBack.emit(null);
  }
  copyToClipboard() {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.url;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.trigger.closeMenu();
    this.openSnackBar();
  }
  openSnackBar() {
    this._snackbar.open("Copied to clipboard!", null, { duration: 2000 });
  }
  showImage(url) {
    this._modal.showImage(url);
  }
}
