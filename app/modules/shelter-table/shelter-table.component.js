"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var shelter_form_component_1 = require("./shelter-form.component");
var ShelterTableComponent = (function () {
    function ShelterTableComponent() {
        this.onShelterSelected = new core_1.EventEmitter();
    }
    ShelterTableComponent.prototype.selectShelter = function (shelter) {
        this.onShelterSelected.emit(shelter);
        this.shelterForm.editShelter(shelter);
    };
    return ShelterTableComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ShelterTableComponent.prototype, "shelters", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ShelterTableComponent.prototype, "onShelterSelected", void 0);
__decorate([
    core_1.ViewChild('shelterForm'),
    __metadata("design:type", shelter_form_component_1.ShelterFormComponent)
], ShelterTableComponent.prototype, "shelterForm", void 0);
ShelterTableComponent = __decorate([
    core_1.Component({
        selector: 'shelter-table',
        moduleId: module.id,
        templateUrl: 'ui/shelter-table.html'
    })
], ShelterTableComponent);
exports.ShelterTableComponent = ShelterTableComponent;
//# sourceMappingURL=shelter-table.component.js.map