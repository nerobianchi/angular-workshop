/**
* Created by erdem on 16/01/17.
*/
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ShelterTableComponent} from "./shelter-table.component";
import {ShelterFormComponent} from "./shelter-form.component";
import {PhoneCompleterPipe} from "./pipes/phone-completer.pipe";
import { FormsModule } from '@angular/forms';

@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[ShelterTableComponent,PhoneCompleterPipe,ShelterFormComponent],
    exports:[ShelterTableComponent,ShelterFormComponent]
})
export class ShelterTableModule{
}