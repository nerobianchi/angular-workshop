/**
 * Created by erdem on 16/01/17.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var shelter_table3_component_1 = require("./shelter-table3.component");
var ShelterTable3Module = (function () {
    function ShelterTable3Module() {
    }
    return ShelterTable3Module;
}());
ShelterTable3Module = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [shelter_table3_component_1.ShelterTable3Component],
        exports: [shelter_table3_component_1.ShelterTable3Component]
    })
], ShelterTable3Module);
exports.ShelterTable3Module = ShelterTable3Module;
//# sourceMappingURL=shelter-table3.module.js.map