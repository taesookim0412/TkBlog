import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { UploadComponent } from './upload.component';
import { UploadService } from './upload.service';
import { ModalModule } from '../modal/modal.module';



@NgModule({
  declarations: [UploadComponent],
  imports: [
    ModalModule,
    MatDialogModule,
    MatButtonModule,
    CommonModule,
  ],
  exports: [UploadComponent],
  providers: [UploadService],
})
export class UploadModule { }
