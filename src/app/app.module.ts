import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularSplitModule } from 'angular-split';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { ExampleoneComponent } from './exampleone/exampleone.component';
// services
import { DeviceService } from './services/device.service';

@NgModule({
  declarations: [
    AppComponent,
    ExampleoneComponent
  ],
  imports: [
    AngularSplitModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
