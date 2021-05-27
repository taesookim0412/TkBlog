import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-adminblogedit',
  templateUrl: './adminblogedit.component.html',
  styleUrls: ['./adminblogedit.component.css']
})
export class AdminblogeditComponent implements OnInit {
  constructor(private _http: HttpService) { }
  blogs = {};
  blog = {};
  blogImgs = {};
  
  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this._http.getBlog().subscribe((data) => this.blogs = data);
  }
  selectPost(blog) {
    this.blog = blog;
    this.blogImgs = blog['imgs'];
  }
}
