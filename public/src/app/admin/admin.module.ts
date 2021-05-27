import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { HttpService } from './../http.service';
import { CookieService } from 'ngx-cookie-service';


import { AdminComponent } from './admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindirectoryComponent } from './admindirectory/admindirectory.component';
import { AdminchangehomeComponent } from './adminchangehome/adminchangehome.component';
import { AdminblogformComponent } from './adminblogform/adminblogform.component';
import { AdminblogeditComponent } from './adminblogedit/adminblogedit.component';

import { MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatDialogModule } from '@angular/material';
import { UploadService } from '../upload/upload.service';
import { AdmingalleryComponent } from './admingallery/admingallery.component';
import { AdmincontactComponent } from './admincontact/admincontact.component';
import { AdmincontactoneComponent } from './admincontactone/admincontactone.component';
import { UploadModule } from '../upload/upload.module';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../modal/modal.service';
import { ModalModule } from '../modal/modal.module';

const routes: Routes = [{
  path: "", component: AdminComponent,
  children: [
    { path: "contact/one/", component: AdmincontactoneComponent },
    { path: "contact/one/:id", component: AdmincontactoneComponent },
    { path: "contact/one/:id/:idx", component: AdmincontactoneComponent },
    { path: "contact", component: AdmincontactComponent },
    { path: "contact/:idx", component: AdmincontactComponent },
    { path: ":category", component: AdmindirectoryComponent },
    { path: "blog/new", component: AdminblogformComponent },
    { path: "blog/edit", component: AdminblogeditComponent },
    { path: "change/home", component: AdminchangehomeComponent },
    { path: "gallery/:category", component: AdmingalleryComponent },
  ]
}];

@NgModule({
  declarations: [
    AdminComponent,
    AdminloginComponent,
    AdmincontactComponent, 
    AdmindirectoryComponent,
    AdminchangehomeComponent,
    AdminblogformComponent,
    AdminblogeditComponent,
    AdmingalleryComponent,
    AdmincontactComponent,
    AdmincontactoneComponent,
  ],
  imports: [
    ModalModule,
    MatDialogModule,
    UploadModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    FormsModule,
    HttpClientXsrfModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    [RouterModule]
  ],
  providers: [HttpService, CookieService]
})
export class AdminModule { }
