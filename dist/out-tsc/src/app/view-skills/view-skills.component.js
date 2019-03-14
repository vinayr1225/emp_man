import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SkillService } from '../services/skill.service';
var ViewSkillsComponent = /** @class */ (function () {
    function ViewSkillsComponent(skillService) {
        this.skillService = skillService;
    }
    ViewSkillsComponent.prototype.ngOnInit = function () {
        this.reloadSkills();
    };
    ViewSkillsComponent.prototype.reloadSkills = function () {
        this.skillsList = this.skillService.getAllSkills();
    };
    ViewSkillsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-view-skills',
            templateUrl: './view-skills.component.html',
            styleUrls: ['./view-skills.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [SkillService])
    ], ViewSkillsComponent);
    return ViewSkillsComponent;
}());
export { ViewSkillsComponent };
//# sourceMappingURL=view-skills.component.js.map