import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  @Input() editingMap: Map<number, Object>;
  @Input() editingIdx: number;
  @ViewChild('fileInput') fileInput: ElementRef;

  // State
  STATE_SWAP;
  // Maps + Set + Total Index + Removal Points
  imgs: Map<number, Object | File & Blob>;
  pImgs: Map<number, string | ArrayBuffer>;
  imgIdx: number = 0;
  imgRm: Set<number>;


  constructor(
  private _modal: ModalService
  ) { }

  ngOnInit() {
    this.reset();
  }
  reset() {
    this.imgs = new Map();
    this.imgRm = new Set();
    this.pImgs = new Map();
    if (this.editingMap != undefined) {
      this.imgs = this.editingMap;
      while (this.imgIdx < this.editingIdx){
        this.pImgs.set(this.imgIdx, this.editingMap.get(this.imgIdx)['url']);
        this.imgIdx++;
      }
    }
  }
  openFileInput(){
    let event = new MouseEvent('click', {bubbles: true});
    this.fileInput.nativeElement.dispatchEvent(event);
  }

  onChange(event) {
    for (let i = 0; i < event.target.files.length; i++) {
      if (event.target.files[0].type.substring(0, 6) != "image/") {
        continue;
      }
      let fileReader = new FileReader();
      fileReader.readAsDataURL(event.target.files[i]);
      fileReader.onload = () => {
        this.pImgs.set(this.imgIdx, fileReader.result);
        this.imgs.set(this.imgIdx, event.target.files[i]);
        this.imgIdx++;
      }
    }
  }
  remove(Idx) {
    this.STATE_SWAP = "true";
    // Remove form data from that object.
    this.imgRm.add(Idx);
    this.imgs.delete(Idx);
    this.pImgs.delete(Idx);
    this.STATE_SWAP = "false";
  }

  up(Idx, rowIdx) {
    if (rowIdx == 0) return;
    this.STATE_SWAP = "true";
    this.swapUp(Idx);
    this.STATE_SWAP = "false";
  }
  swapUp(Idx) {
    let prevIdx: number = Idx - 1;
    while (this.imgRm.has(prevIdx)) prevIdx--;
    this.swap(Idx, prevIdx);
  }
  swap(Idx, Idx2) {
    let tempVal: (File & Blob) | Object = this.imgs.get(Idx);
    this.imgs.set(Idx, <File & Blob | Object>this.imgs.get(Idx2));
    this.imgs.set(Idx2, tempVal);
    let pTempVal: string | ArrayBuffer = this.pImgs.get(Idx);
    this.pImgs.set(Idx, <string | ArrayBuffer>this.pImgs.get(Idx2));
    this.pImgs.set(Idx2, pTempVal);
  }
  down(Idx, rowIdx) {
    if (rowIdx == this.imgs.size - 1) return;
    this.STATE_SWAP = "true";
    this.swapDown(Idx);
    this.STATE_SWAP = "false";
  }
  swapDown(Idx) {
    let nextIdx: number = Idx + 1;
    while (this.imgRm.has(nextIdx)) nextIdx++;
    this.swap(Idx, nextIdx);
  }
  showImage(url){
    this._modal.showImage(url);
  }
}
