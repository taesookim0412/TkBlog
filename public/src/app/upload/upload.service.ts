import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  SERVER_URL: string = "/upload";
  constructor(private _http: HttpClient,
    private _cookieService: CookieService) { }


  upload(data, category, req) {
    let token = this._cookieService.get("isLogged");
    let user = this._cookieService.get("user");
    let headers = new HttpHeaders({
      "token": token,
      "user": user
    });
    let uploadURL = `${this.SERVER_URL}/${category}`;
    if (req === "post") {
      return this._http.post(uploadURL, data, { headers: headers });
    }
    else if (req === "put") {
      return this._http.put(uploadURL, data, { headers: headers });
    }
  }
  deleteGallery(category, id){
    let token = this._cookieService.get("isLogged");
    let user = this._cookieService.get("user");
    let headers = new HttpHeaders({
      "token": token,
      "user": user
    });
    let uploadURL = `${this.SERVER_URL}/${category}`;
    return this._http.post(`${uploadURL}/delete/${id}`, null, { headers: headers });

  }
  changeHome(data) {
    let token = this._cookieService.get("isLogged");
    let user = this._cookieService.get("user");
    let headers = new HttpHeaders({
      "token": token,
      "user": user
    });
    return this._http.post("/upload/changehome", data, { headers: headers });
  }
  getContact(){
    let token = this._cookieService.get("isLogged");
    let user = this._cookieService.get("user");
    let headers = new HttpHeaders({
      "token": token,
      "user": user
    });
    return this._http.get("/upload/contact", {headers: headers});
  }
  getContactById(id){
    let token = this._cookieService.get("isLogged");
    let user = this._cookieService.get("user");
    let headers = new HttpHeaders({
      "token": token,
      "user": user
    });
    return this._http.get("/upload/contact/" + id, {headers: headers});
  }

}