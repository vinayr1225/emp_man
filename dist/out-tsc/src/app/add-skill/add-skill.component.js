import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { SkillService } from '../services/skill.service';
var AddSkillComponent = /** @class */ (function () {
    function AddSkillComponent(skillServices) {
        this.skillServices = skillServices;
        this.skillForm = new FormGroup({
            name: new FormControl(""),
        });
    }
    AddSkillComponent.prototype.ngOnInit = function () {
    };
    AddSkillComponent.prototype.save = function () {
        this.skillServices.createSkill(this.skillForm.value).subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        // this.employee = new Employee();
    };
    AddSkillComponent.prototype.onSubmit = function () {
        console.log(this.skillForm.value);
        // this.submitted = true;
        this.save();
    };
    AddSkillComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-skill',
            templateUrl: './add-skill.component.html',
            styleUrls: ['./add-skill.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [SkillService])
    ], AddSkillComponent);
    return AddSkillComponent;
}());
export { AddSkillComponent };
//# sourceMappingURL=add-skill.component.js.map