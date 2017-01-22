import { Component} from '@angular/core';
import {Shelter} from "../../model/Shelter";
import {NgForm} from '@angular/forms';

@Component({
    selector:'shelter-form',
    moduleId: module.id,
    templateUrl:'ui/shelter-form.html'
})
export class ShelterFormComponent{

    private shelter: Shelter = new Shelter(null,null,null);

    public editShelter(shelter: Shelter){
        
        this.shelter = shelter;
    }
}