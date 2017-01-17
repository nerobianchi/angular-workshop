"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
* Created by erdem on 16/01/17.
*/
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var shelter_table_component_1 = require("./shelter-table.component");
var shelter_form_component_1 = require("./shelter-form.component");
var phone_completer_pipe_1 = require("./pipes/phone-completer.pipe");
var forms_1 = require("@angular/forms");
var ShelterTableModule = (function () {
    function ShelterTableModule() {
    }
    return ShelterTableModule;
}());
ShelterTableModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: [shelter_table_component_1.ShelterTableComponent, phone_completer_pipe_1.PhoneCompleterPipe, shelter_form_component_1.ShelterFormComponent],
        exports: [shelter_table_component_1.ShelterTableComponent, shelter_form_component_1.ShelterFormComponent]
    })
], ShelterTableModule);
exports.ShelterTableModule = ShelterTableModule;
//# sourceMappingURL=shelter-table.module.js.map