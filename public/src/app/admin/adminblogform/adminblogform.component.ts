import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { UploadComponent } from 'src/app/upload/upload.component';
import { NgForm } from '@angular/forms';
import { UploadService } from 'src/app/upload/upload.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-adminblogform',
  templateUrl: './adminblogform.component.html',
  styleUrls: ['./adminblogform.component.css']
})
export class AdminblogformComponent implements OnInit, AfterViewInit {
  @Input() blogEditing: boolean = false;
  @Input() blog:Object;
  @Input() editImgs:Array<Object>;
  editImgsMap: Map<number, Object>;
  editImgsIdx: number = 0;
  req: string = "";

  STATE_DISABLED: boolean = false;
  error: string = "";
  imgs: Map<number, Object | File & Blob>;


  @ViewChild(UploadComponent)
  uploadForm: UploadComponent;

  constructor(private _location: Location,
    private _upload: UploadService,
    private _router: Router) { }

  ngOnInit() {
    if (this.blogEditing === false) {
      this.blog = { title: "", preview: "", description: "" };
      this.req = "post";
    }
    else if (this.blogEditing === true) {
      this.editImgsMap = new Map<number, Object>();
      this.editImgs.forEach((obj) => {
        this.editImgsMap.set(this.editImgsIdx, obj);
        this.editImgsIdx++;
        this.req = "put";
      });
    }
  }
  ngAfterViewInit() {
    this.imgs = this.uploadForm.imgs;
  }
  cancel() {
    this._location.back();
  }
  upload(f: NgForm) {
    if (this.blog['title'].length < 10) {
      this.error = "Title must be at least 10 characters long.";
      window.scrollTo(0, 0);
      return;
    }
    if (this.blog['preview'].length < 10) {
      window.scrollTo(0, 0);
      this.error = "Preview must be at least 10 characters long.";
      return;
    }
    if (this.blog['date'] === undefined) {
      window.scrollTo(0, 0);
      this.error = "Must submit a date.";
      return;
    }
    this.STATE_DISABLED = true;

    let formData = new FormData();
    let i: number = 0;
    formData.append("title", this.blog['title']);
    formData.append("preview", this.blog['preview']);
    formData.append("description", this.blog['description']);
    formData.append("date", this.blog['date']);
    this.imgs.forEach((value) => {
      if (value['url'] === undefined) {
        formData.append("file", <File & Blob>value, `${i} ${value['name']}`);
        formData.append("fOrder", "u");
      }
      else {
        formData.append("editedFile", value['url']);
        formData.append("fOrder", "e");
      }
      i++;
    });
    if (this.blogEditing === true) {
      formData.append("id", this.blog['_id']);
    }


    // formData.append("path", "lastpath");
    this._upload.upload(formData, "blog", this.req).subscribe((err) => {
      this._router.navigate(["/admin", "blog"]);
    })
  }
}

