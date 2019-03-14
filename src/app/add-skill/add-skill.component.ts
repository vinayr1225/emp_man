import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { SkillService } from '../services/skill.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  constructor(private skillServices: SkillService) { }

  ngOnInit() {
  }

  skillForm = new FormGroup({
    name: new FormControl(""),
    
  });

  save() {
    this.skillServices.createSkill(this.skillForm.value).subscribe(data => console.log(data), error => console.error(error));
    // this.employee = new Employee();
  }

  onSubmit() {
    console.log(this.skillForm.value);
    // this.submitted = true;
    this.save();
  }

}
