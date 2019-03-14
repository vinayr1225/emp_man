import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { EmployeeService } from "./services/employee.service";
import { SkillService } from "./services/skill.service";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "./material/material.module";
import { AddSkillComponent } from './add-skill/add-skill.component';
import { ViewSkillsComponent } from './view-skills/view-skills.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                AddEmployeeComponent,
                ViewEmployeesComponent,
                AddSkillComponent,
                ViewSkillsComponent,
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                BrowserAnimationsModule,
                HttpClientModule,
                FormsModule,
                ReactiveFormsModule,
                MaterialModule,
            ],
            providers: [
                EmployeeService,
                SkillService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map