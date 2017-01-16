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
/**
 * Created by erdem on 16/01/17.
 */
var core_1 = require("@angular/core");
var ShelterTable2Component = (function () {
    function ShelterTable2Component() {
    }
    return ShelterTable2Component;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ShelterTable2Component.prototype, "shelters2", void 0);
ShelterTable2Component = __decorate([
    core_1.Component({
        selector: 'shelter-table2',
        moduleId: module.id,
        templateUrl: 'ui/shelter-table2.html'
    })
], ShelterTable2Component);
exports.ShelterTable2Component = ShelterTable2Component;
//# sourceMappingURL=shelter-table2.component.js.map