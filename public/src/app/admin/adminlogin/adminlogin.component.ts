import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../http.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  @Input() isLogged;
  @Output() updateParent = new EventEmitter();
  user:string = "demo";
  pass:string = "demo";
  errors;
  constructor(private _http: HttpService,
    private _cookieservice: CookieService) { }

  ngOnInit() {
    let url = window.location.href;
    console.log(url);
  }

  login(f: NgForm) {
    let user = f['value']['user'];
    let pass = f['value']['pass'];
    if (user.length < 3) {
      this.errors = "Username length must be longer than 3 characters.";
      return;
    }
    else if (pass.length < 3) {
      this.errors = "Password length must be longer than 3 characters.";
      return;
    }
    this._http.getAccounts(user, pass).subscribe(data => {
      if (data["message"] === "Error") {
        this.errors = "Username does not exist.";
        return;
      }
      else if (data["message"] === "Failed") {
        this.errors = "Password is incorrect.";
        return;
      }
      else if (data["message"] === "Success") {
        this.errors = "";
        this.makeCookie(data["token"], f['value']['user']);
      }
    })
  };
  makeCookie(token, user) {
    //Deploy: Set to secure;
    // this._cookieservice.set("isLogged", token, 1, "/", "tskblogsample.club", false, "Lax");
    // this._cookieservice.set("user", user, 1, "/", "tskblogsample.club", false, "Lax");
    this._cookieservice.set("isLogged", token, 1, "/");
    this._cookieservice.set("user", user, 1, "/");



    this.isLogged = true;
    this.updateParent.emit(null);
  }
}
