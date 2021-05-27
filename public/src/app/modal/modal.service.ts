import { Injectable } from '@angular/core';
import { MatDialog} from '@angular/material';
import { ModalComponent } from './modal.component';
import { Overlay } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog,
    private _overlay: Overlay) { }
  showImage(dUrl:String) {
    this.dialog.open(ModalComponent, {
      maxHeight: '93vh',
      maxWidth: '100vw',
      panelClass: "custom-modalbox",
      scrollStrategy: this._overlay.scrollStrategies.noop(),
      data: {
        url: dUrl
      }
    });
  }
}
