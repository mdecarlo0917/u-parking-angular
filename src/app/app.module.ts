import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PassListComponent } from './passes/pass-list.component';
import { VehicleListComponent } from './vehicles/vehicle-list.component';
import { VehicleDetailComponent } from './vehicles/vehicle-detail.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    PassListComponent,
    VehicleListComponent,
    VehicleDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
