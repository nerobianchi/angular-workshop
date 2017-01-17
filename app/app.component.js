"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Shelter_1 = require("./model/Shelter");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angularrrr';
        this.sheltersAtMain = [new Shelter_1.Shelter(1, 'kadikoy', '02121234567'), new Shelter_1.Shelter(2, 'uskudar', '02167654321')];
    }
    AppComponent.prototype.editShelter = function (shelter) {
        this.selectedShelter = shelter;
        alert('shelter is selected: ' + shelter.name);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'ui/app.html',
        moduleId: module.id
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map