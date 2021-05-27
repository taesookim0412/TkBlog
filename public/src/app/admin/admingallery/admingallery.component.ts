import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { UploadComponent } from 'src/app/upload/upload.component';
import { NgForm } from '@angular/forms';
import { UploadService } from 'src/app/upload/upload.service';
import { HttpService } from 'src/app/http.service';
import { ModalService } from 'src/app/modal/modal.service';

@Component({
  selector: 'app-admingallery',
  templateUrl: './admingallery.component.html',
  styleUrls: ['./admingallery.component.css']
})
export class AdmingalleryComponent implements OnInit, AfterViewInit {
STATE_DISABLED: boolean = false;
url:string = "";
error:string = "";
imgs: Map<number, File & Blob>;
data = {};

    @ViewChild(UploadComponent)
    uploadForm: UploadComponent;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _location: Location,
    private _upload: UploadService,
    private _http: HttpService,
    private _modal: ModalService) { }
    
    ngAfterViewInit(){
      this.imgs = <Map<number, File & Blob>>this.uploadForm.imgs;
    }

  ngOnInit() {
    this.reset();
  }
  reset(){
    this._route.params.subscribe((params:Params) => { this.url = params['category'];
    this.getData();  
  });
  }
  getData(){
    this._http.getGallery(this.url).subscribe((data) => this.data = data);
  }
  cancel(){
    this._location.back();
  }
  upload(f:NgForm){
    this.STATE_DISABLED = true;
    let formData = new FormData();
    this.imgs.forEach((val) => formData.append("file", val, val['name']));
    this._upload.upload(formData, this.url, "post").subscribe(() => this._router.navigate(["/admin", "gallery"]));
  }
  delete(id){
    this._upload.deleteGallery(this.url, id).subscribe(()=> this.getData());
  }
  showImage(url){
    this._modal.showImage(url);
  }
}
