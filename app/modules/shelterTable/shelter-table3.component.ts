import {Component, Input} from "@angular/core";
import {Shelter} from "../../model/Shelter";

@Component({
    selector: 'shelter-table3',
    moduleId: module.id,
    templateUrl: 'ui/shelter-table3.html'
})
export class ShelterTable3Component {
    @Input() shelters2: Shelter[];
}