import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/upload/upload.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-admincontact',
  templateUrl: './admincontact.component.html',
  styleUrls: ['./admincontact.component.css']
})
export class AdmincontactComponent implements OnInit {
  contacts: Array<Object>;
  contactsSlice: Array<Object>;

  start: number = 0;
  page: number = 1;
  nextPage: number = 2;
  prevPage: number = 1;
  constructor(private _upload: UploadService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.reset();

  }
  reset() {
    this.getContacts();
  }
  getContacts() {
    this._upload.getContact().subscribe((data) => {
      this.contacts = <Array<Object>>data;
      this._route.params.subscribe((params: Params) => {
        let idx = params['idx'];
        this.setContacts(idx);
        this.slicer();
      });
    });
  }
  slicer() {
    this.contactsSlice = this.contacts.slice(this.start, this.page * 10); //10
  }
  setContacts(idx) {
    if (idx != null && idx != undefined) {
      this.page = Number(idx);
      if (this.page != 1) {
        this.prevPage = this.page - 1;
      }
      this.nextPage = this.page + 1;
      this.start = 0 + ((this.page - 1) * 10); //10
    }
  }
  goPrev(){
    if (this.page === 1){
      return;
    }
    this.setContacts(this.page - 1);
    this.slicer();
    window.scrollTo(0, 0);
  }
  goNext(){
    this.setContacts(this.page + 1);
    this.slicer();
    window.scrollTo(0, 0);
  }
}