import { Component, Input, Output, EventEmitter , ViewChild} from "@angular/core";
import { Shelter } from "../../model/Shelter";
import {ShelterFormComponent} from './shelter-form.component';
import {NgForm} from '@angular/forms';
@Component({
    selector: 'shelter-table',
    moduleId: module.id,
    templateUrl: 'ui/shelter-table.html'
})
export class ShelterTableComponent {

    @Input()
    shelters: Shelter[];

    @Output()
    onShelterSelected = new EventEmitter<Shelter>();

    @ViewChild('shelterForm')
    shelterForm: ShelterFormComponent;

    private selectedShelter: Shelter
    private selectShelter(shelter: Shelter) {
        this.onShelterSelected.emit(shelter);

        this.selectedShelter = shelter;

        this.shelterForm.editShelter(shelter);
    }
}