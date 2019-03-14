import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EmployeeService } from "./../services/employee.service";
var ViewEmployeesComponent = /** @class */ (function () {
    function ViewEmployeesComponent(employeeService) {
        this.employeeService = employeeService;
        this.displayedColumns = ['name', 'email', 'birthday', 'skills'];
    }
    ViewEmployeesComponent.prototype.ngOnInit = function () {
        this.get();
    };
    ViewEmployeesComponent.prototype.get = function () {
        this.employees = this.employeeService.getAllEmployees();
    };
    ViewEmployeesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-view-employees',
            templateUrl: './view-employees.component.html',
            styleUrls: ['./view-employees.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [EmployeeService])
    ], ViewEmployeesComponent);
    return ViewEmployeesComponent;
}());
export { ViewEmployeesComponent };
//# sourceMappingURL=view-employees.component.js.map