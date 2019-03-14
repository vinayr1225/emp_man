import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var SkillService = /** @class */ (function () {
    function SkillService(http) {
        this.http = http;
        this.baseURL = 'http://localhost:8080/api/skills';
    }
    SkillService.prototype.createSkill = function (skill) {
        return this.http.post(this.baseURL + '/create', skill);
    };
    SkillService.prototype.getAllSkills = function () {
        return this.http.get(this.baseURL);
    };
    SkillService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], SkillService);
    return SkillService;
}());
export { SkillService };
//# sourceMappingURL=skill.service.js.map