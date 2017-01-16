/**
 * Created by erdem on 16/01/17.
 */
import {Component, Input} from "@angular/core";
import {Shelter} from "./model/Shelter";

@Component({
    selector: 'shelter-table2',
    moduleId: module.id,
    templateUrl: 'ui/shelter-table2.html'
})
export class ShelterTable2Component {
    @Input() shelters2: Shelter[];
}