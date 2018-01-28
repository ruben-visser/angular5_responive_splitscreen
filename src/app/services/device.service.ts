import { Injectable } from '@angular/core';

@Injectable()
export class DeviceService {
  Height: any;
  Width: any;

  constructor() {
    this.Height = (window.screen.height);
    this.Width = (window.screen.width) ;
  }

  Update(){
    this.Height = (window.screen.height);
    this.Width = (window.screen.width) ;
  }
}
