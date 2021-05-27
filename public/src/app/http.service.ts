import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }
  getAccounts(user, pass) {
    return this._http.post("/account", {user: user, pass: pass} );
  }
  getBlog() {
    return this._http.get("/api/blog");
  }
  getBlogEntry(id) {
    return this._http.get("/api/blog/" + id);
  }
  getHome(){
    return this._http.get("/api/home");
  }
  getGallery(url){
    return this._http.get("/api/" + url);
  }
  postContact(data){
    return this._http.post("/api/contact", data);
  }
}
