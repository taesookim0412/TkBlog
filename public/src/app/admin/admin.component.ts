import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements OnInit {
  cookie:Boolean;
  constructor(private _cookieservice: CookieService,
    private _router: Router,
    private _location: Location) {
     }

  ngOnInit() {
    this.checkCookie();
  }
  getCookie() {
    return this._cookieservice.check('isLogged') || this._cookieservice.check('user');
  }
  checkCookie() {
    let cookieStatus = this.getCookie();
    if (cookieStatus === false) {
      this.cookie = false;
      this._router.navigate(["/admin"]);
    }
    {
      if (cookieStatus === true) {
        this.cookie = true;
        if (this._location.path() === "/admin"){
          this._router.navigate(["/admin", "directory"]);
        }
      }
    }
  }
  goHome() {
    this._router.navigate(["/admin", "directory"]);
  }
  goBack() {
    if(this._location.path() != "/admin/directory") {
      this._location.back();
    }
  }
}
