import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from "@angular/material";
import { MatGridListModule, MatListModule, MatAutocompleteModule, MatChipsModule, MatIconModule } from '@angular/material';
var modules = [
    Material.MatFormFieldModule,
    Material.MatToolbarModule,
    Material.MatInputModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatSelectModule,
    Material.MatTableModule,
    Material.MatTabsModule,
    MatGridListModule,
    MatListModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib_1.__decorate([
        NgModule({
            declarations: [],
            imports: [
                CommonModule
            ].concat(modules),
            exports: modules.slice()
        })
    ], MaterialModule);
    return MaterialModule;
}());
export { MaterialModule };
//# sourceMappingURL=material.module.js.map