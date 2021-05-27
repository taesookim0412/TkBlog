import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatDialogModule, MatMenuModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatIconModule, MatSnackBarModule } from '@angular/material';
import { AgmCoreModule } from "@agm/core";

import { FlowerblogComponent } from './flowerblog/flowerblog.component';
import { FlowerComponent } from './flower.component';
import { FlowerhomeComponent } from './flowerhome/flowerhome.component';
import { HttpService } from '../http.service';

import { HttpClientModule } from '@angular/common/http';
import { FlowergalleryComponent } from './flowergallery/flowergallery.component';
import { FloweraboutComponent } from './flowerabout/flowerabout.component';
import { FlowercontactComponent } from './flowercontact/flowercontact.component';
import { FlowercollectionComponent } from './flowercollection/flowercollection.component';
import { FlowercollectiononeComponent } from './flowercollectionone/flowercollectionone.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlowercontactthankComponent } from './flowercontactthank/flowercontactthank.component';
import { ModalModule } from '../modal/modal.module';

const routes: Routes = [
  {
    path: "", component: FlowerComponent, children: [
      { path: "", component: FlowerhomeComponent },
      { path: "blog", component: FlowerblogComponent },
      { path: "blog/route", component: FlowerblogComponent },
      { path: "blog/:page", component: FlowerblogComponent },
      { path: "blog/:page/:idx", component: FlowerblogComponent },
      { path: "about", component: FloweraboutComponent },
      { path: "collection/archive", component: FlowercollectionComponent },
      { path: "gallery/:category", component: FlowergalleryComponent },
      { path: "contact", component: FlowercontactComponent },
      { path: "contact/thankyou", component: FlowercontactthankComponent },
      { path: "collection/archive/:id", component: FlowercollectiononeComponent },
      { path: "collection/archive/:id/:page", component: FlowercollectiononeComponent },
      { path: "collection/archive/:id/:idx/:idx", component: FlowercollectiononeComponent },
    ]
  }];

@NgModule({
  declarations: [
    FlowerComponent,
    FlowerblogComponent,
    FlowerhomeComponent,
    FlowergalleryComponent,
    FloweraboutComponent,
    FlowercontactComponent,
    FlowercontactthankComponent,
    FlowercollectionComponent,
    FlowercollectiononeComponent,
    FlowercontactthankComponent,
  ],
  imports: [
    ModalModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAcM4kpsmz3DDVu0odIVAZBOV6qoA4Kqj4',
    }),
    MatSnackBarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatMenuModule,
    MatDialogModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule],
  providers: [HttpService]
})
export class FlowerModule { }
