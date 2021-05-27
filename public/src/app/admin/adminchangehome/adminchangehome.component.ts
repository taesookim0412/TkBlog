import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { UploadService } from 'src/app/upload/upload.service';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-adminchangehome',
  templateUrl: './adminchangehome.component.html',
  styleUrls: ['./adminchangehome.component.css']
})
export class AdminchangehomeComponent implements OnInit {
  STATE_DISABLED: boolean = false;
  oldHome: string = "";
  img: File & Blob = null;
  pImg: string | ArrayBuffer = null;
  error: string = "";

  constructor(private _location: Location,
    private _upload: UploadService,
    private _router: Router,
    private _http: HttpService) { }

  ngOnInit() {
    this.reset();
    this.getHome();
  }

  reset() {
  }
  onChange(event) {
    let img = event.target.files[0];
    if (img.type.substring(0, 6) === "image/") {
      this.img = event.target.files[0];
      let fileReader = new FileReader();
      fileReader.readAsDataURL(this.img);
      fileReader.onload = () => this.pImg = fileReader.result;
    }
  }
  cancel() {
    this._location.back();
  }
  changeHome(f: NgForm) {
    if (this.img === null) {
      this.error = "Must submit an image!";
      window.scrollTo(0, 0);
      return;
    }
    else {
      this.STATE_DISABLED = true;
      let formData = new FormData();
      formData.append("file", this.img, this.img['name']);
      this._upload.changeHome(formData).subscribe(() => this._router.navigate(['/admin', 'directory']));
    }
  }
  getHome() {
    this._http.getHome().subscribe((data) => this.oldHome = data['url']);
  }
}
