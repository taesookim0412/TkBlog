import { Injectable } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class MaterialboxService {

  constructor() { }
  initMaterialBox(){
    $(document).ready(function(){
      $('.materialboxed').materialbox();
    });
  }
}
