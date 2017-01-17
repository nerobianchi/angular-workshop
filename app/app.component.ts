import { Component } from '@angular/core';
import { Shelter } from "./model/Shelter";


@Component({
    selector: 'my-app',
    templateUrl: 'ui/app.html',
    moduleId: module.id
})
export class AppComponent {
    name = 'Angularrrr';

    private sheltersAtMain: Shelter[] = [new Shelter(1, 'kadikoy', '02121234567'), new Shelter(2, 'uskudar', '02167654321')];
    private selectedShelter: Shelter;

    private editShelter(shelter: Shelter) {
        this.selectedShelter = shelter;
        
        alert('shelter is selected: ' + shelter.name);
    }
}
