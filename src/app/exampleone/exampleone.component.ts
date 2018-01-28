import { Component, OnInit, ViewChild, HostListener, ElementRef} from '@angular/core';

import { examples } from './../listExamples';

@Component({
  selector: 'app-exampleone',
  templateUrl: './exampleone.component.html',
  styleUrls: ['./exampleone.component.css']
})
export class ExampleoneComponent implements OnInit {
  data: IExampleData;
  direction = 'horizontal';
  divWidth: any;
  mobilesize = false;
  @ViewChild('PageDiv') pageDiv: ElementRef;
  @ViewChild('firstpage') firstpage: ElementRef;
  @ViewChild('secondpage') secondpage: ElementRef;
  @HostListener('window:resize') onResize() {
    // guard against resize before view is rendered
    if (this.pageDiv) {
      this.divWidth = this.pageDiv.nativeElement.clientWidth;
    }
    if (!this.divWidth) { return; }
    console.log('page width: ' + this.divWidth);
    if (this.divWidth < 800) {
      if (!this.mobilesize) {
        this.secondpage.nativeElement.style.flex = '0 0 calc(0% - 0px)';
        this.firstpage.nativeElement.style.flex = '0 0 calc(100% - 11px)';
        this.mobilesize = true;
      }
    } else {
      if (this.mobilesize){
        this.secondpage.nativeElement.style.flex = '0 0 calc(50% - 5.500px)';
        this.firstpage.nativeElement.style.flex = '0 0 calc(50% - 5.500px)';
        this.mobilesize = false;
      }
    }
  }
  constructor() { console.clear(); }

  ngOnInit() {
  }

}
