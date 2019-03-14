import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.baseURL = 'http://localhost:8080/api/employees';
    }
    EmployeeService.prototype.createEmployee = function (emp) {
        // console.log(emp);
        return this.http.post(this.baseURL + '/create', emp);
    };
    EmployeeService.prototype.getEmployeeById = function (id) {
        return this.http.get(this.baseURL + '/' + id);
    };
    EmployeeService.prototype.getAllEmployees = function () {
        return this.http.get(this.baseURL);
    };
    EmployeeService.prototype.updateEmployee = function (id, emp) {
        return this.http.put(this.baseURL + '/' + id, emp);
    };
    EmployeeService.prototype.deleteEmployeeById = function (id) {
        return this.http.delete(this.baseURL + '/' + id);
    };
    EmployeeService.prototype.deleteAllEmployees = function () {
        return this.http.delete(this.baseURL + '/delete');
    };
    EmployeeService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], EmployeeService);
    return EmployeeService;
}());
export { EmployeeService };
//# sourceMappingURL=employee.service.js.map