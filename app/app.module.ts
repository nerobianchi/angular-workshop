import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShelterTableModule } from "./modules/shelter-table/shelter-table.module";
import { NavigationPaneModule } from "./modules/navigation-pane/navigation-pane.module";
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [BrowserModule, ShelterTableModule,NavigationPaneModule,FormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
