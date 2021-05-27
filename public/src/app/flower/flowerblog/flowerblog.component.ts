import { Component, OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { ModalService } from 'src/app/modal/modal.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-flowerblog',
  templateUrl: './flowerblog.component.html',
  styleUrls: ['./flowerblog.component.css']
})
export class FlowerblogComponent implements OnInit, AfterViewInit {
  oneBlog = {};
  blogs: Array<Object>;
  blogsSlice: Array<Object>;
  counter: number = 0;
  scrollPending: boolean = false;

  start: number = 0;
  page: number = 1;
  nextPage: number = 2;
  prevPage: number = 1;
  idx: number = null;

  @ViewChildren('blogs') loadedBlogs: QueryList<any>;
  ngAfterViewInit() {
    this.loadedBlogs.changes.subscribe(() => this.scrollToIdx());
  }

  constructor(private _http: HttpService,
    private _modal: ModalService,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.reset();
  }
  reset() {
    this.getBlogs();
  }
  getBlogs() {
    this._http.getBlog().subscribe((data) => {
      this.blogs = <Array<Object>>data;
      this._route.params.subscribe((params: Params) => {
        this.setPage(params['page']);
        this.checkIdx(params['idx']);
        this.setBlogsSlice();
      })
    });
  }
  checkIdx(idx) {
    if (idx != null && idx != undefined) {
      this.idx = idx;
      this.scrollPending = true;
    }
  }


  showImage(url) {
    this._modal.showImage(url);
  }
  showOneBlog(blog, Idx) {
    this.oneBlog = blog;
    this.idx = Idx;
    window.scrollTo(0, 0);
  }
  removeOneBlog() {
    this.oneBlog = {};
    this.scrollPending = true;
  }
  setPage(page) {
    if (page != undefined && page != null) {
      //set this page
      this.page = Number(page);
      if (this.page != 1) {
        //set prev
        this.prevPage = this.page - 1;
      }
      //set next page
      this.nextPage = this.page + 1;
      //set prev start
      this.start = 0 + ((this.page - 1) * 6);
      //set counter
      this.counter = this.start;
    }
    this.setBlogsSlice();
  }
  setBlogsSlice() {
    this.blogsSlice = this.blogs.slice(this.start, this.page * 6);
  }
  goPrev() {
    if (this.page === 1) {
      return;
    }
    this.setPage(this.page - 1);
    window.scrollTo(0, 0);
  }

  goNext() {
    this.setPage(this.page + 1);
    window.scrollTo(0, 0);
  }

  scrollToIdx() {
    if (this.idx != null && this.scrollPending === true) {
      if (this.oneBlog['title'] === undefined) {
        document.querySelector(`.bp${this.idx}`).scrollIntoView();
        this.scrollPending = false;
      }
    }
  }
  trackByFn(index, item) {
    return index;
  }
}
