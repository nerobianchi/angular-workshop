import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ShelterTable2Component} from "./shelter-table2.component";
import {ShelterTable3Module} from "./modules/shelterTable/shelter-table3.module";

@NgModule({
  imports:      [ BrowserModule,ShelterTable3Module ],
  declarations: [ AppComponent,ShelterTable2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
