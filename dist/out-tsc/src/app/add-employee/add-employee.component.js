import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { EmployeeService } from "./../services/employee.service";
import { Employee } from "./../employee";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SkillService } from '../services/skill.service';
import { MatAutocomplete } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { map, startWith } from 'rxjs/operators';
var AddEmployeeComponent = /** @class */ (function () {
    function AddEmployeeComponent(employeeServices, skillServices) {
        var _this = this;
        this.employeeServices = employeeServices;
        this.skillServices = skillServices;
        this.employee = new Employee();
        this.submitted = false;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.selectedSkills = new Array();
        this.employeeForm = new FormGroup({
            name: new FormControl("", Validators.required),
            email: new FormControl("", [Validators.email, Validators.required]),
            birthday: new FormControl("", Validators.required),
            skills: new FormControl(" ")
        });
        this.filteredSkills = this.employeeForm.controls['skills'].valueChanges.pipe(startWith(null), map(function (skillName) { return skillName ? _this._filter(skillName) : new Array(); }));
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
        this.reloadSkills();
    };
    AddEmployeeComponent.prototype.getErrorMessage = function () {
        return this.employeeForm.controls['email'].hasError('email') ? 'Not a valid email' : '';
    };
    AddEmployeeComponent.prototype.newEmployee = function () {
        this.employee = new Employee();
        this.submitted = false;
    };
    AddEmployeeComponent.prototype.save = function () {
        //if no skill selected an array cannot be created 
        if (this.employeeForm.controls['skills'].value == "") {
            this.employeeForm.controls['skills'].setValue(new Array());
        }
        this.employeeServices.createEmployee(this.employeeForm.value).subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
    };
    AddEmployeeComponent.prototype.onSubmit = function () {
        // stop here if form is invalid
        if (this.employeeForm.invalid) {
            return;
        }
        this.save();
        this.employeeForm.markAsUntouched();
        this.employeeForm.reset();
    };
    AddEmployeeComponent.prototype.reloadSkills = function () {
        var _this = this;
        this.skillServices.getAllSkills().subscribe(function (data) { return _this.skillsList = data; });
    };
    AddEmployeeComponent.prototype.add = function (event) {
        // Add fruit only when MatAutocomplete is not open
        // To make sure this does not conflict with OptionSelected Event
        if (!this.matAutocomplete.isOpen) {
            var input = event.input;
            var value = event.value;
            if ((value || '').trim()) {
                this.selectedSkills.push(value.trim());
            }
            // Reset the input value
            if (input) {
                input.value = '';
            }
            this.employeeForm.controls['skills'].setValue(null);
        }
    };
    AddEmployeeComponent.prototype.remove = function (fruit) {
        var index = this.selectedSkills.indexOf(fruit);
        if (index >= 0) {
            this.selectedSkills.splice(index, 1);
        }
    };
    AddEmployeeComponent.prototype.selected = function (event) {
        this.selectedSkills.push(event.option.viewValue);
        this.skillInput.nativeElement.value = '';
        this.employeeForm['skills'].setValue(null);
    };
    AddEmployeeComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.skillsList['name'].filter(function (skillName) { return skillName.toLowerCase().indexOf(filterValue) === 0; });
    };
    tslib_1.__decorate([
        ViewChild('skillInput'),
        tslib_1.__metadata("design:type", ElementRef)
    ], AddEmployeeComponent.prototype, "skillInput", void 0);
    tslib_1.__decorate([
        ViewChild('auto'),
        tslib_1.__metadata("design:type", MatAutocomplete)
    ], AddEmployeeComponent.prototype, "matAutocomplete", void 0);
    AddEmployeeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-employee',
            templateUrl: './add-employee.component.html',
            styleUrls: ['./add-employee.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [EmployeeService, SkillService])
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());
export { AddEmployeeComponent };
//# sourceMappingURL=add-employee.component.js.map