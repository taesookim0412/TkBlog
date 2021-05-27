import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [ModalComponent],
  providers: [ModalService],
  exports: [],
})
export class ModalModule { }
