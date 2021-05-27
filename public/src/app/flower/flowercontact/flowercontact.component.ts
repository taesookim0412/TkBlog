import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { HttpService } from 'src/app/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flowercontact',
  templateUrl: './flowercontact.component.html',
  styleUrls: ['./flowercontact.component.css']
})
export class FlowercontactComponent implements OnInit {
STATE_DISABLED: boolean = false;
today: Date;
required: String = "You must enter a value";

contactForm =  new FormGroup({
  date: new FormControl('', [Validators.required]),
  firstName: new FormControl('', [Validators.required]),
  lastName: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required, Validators.email]),
  phone: new FormControl('', [Validators.required]),
  red: new FormControl(false),
  green: new FormControl(false),
  blue: new FormControl(false),
  comments: new FormControl(''),
})
contactFormC = this.contactForm['controls'];




  constructor(private _http: HttpService,
    private _router: Router) { }

  ngOnInit() {
    this.today = new Date();
  }
  getEmailErrors(){
    return this.contactFormC['email'].hasError('required') ? "You must enter a value" :
    this.contactFormC['email'].hasError('email') ? "Not a valid email" : '';
  }
  contact(){
    if (this.contactForm.invalid === true){
      return;
    }
    else{
      this.STATE_DISABLED = true;
      this._http.postContact(this.contactForm.value).subscribe(() => this._router.navigate(['/', 'contact', 'thankyou']));
    }
  }


}
