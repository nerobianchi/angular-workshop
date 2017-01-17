import { Component, Input, Output, EventEmitter , ViewChild} from "@angular/core";
import { Shelter } from "../../model/Shelter";
import {ShelterFormComponent} from './shelter-form.component';

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

    private selectShelter(shelter: Shelter) {
        this.onShelterSelected.emit(shelter);

        this.shelterForm.editShelter(shelter);
    }
}