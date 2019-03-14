import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { EmployeeService } from "./../services/employee.service";
import { Employee } from "./../employee";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SkillService } from '../services/skill.service';
import { Observable } from 'rxjs';
import { Skill } from '../skill';
import { MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  skillsList: Skill[] = new Array<Skill>();
  selectedSkills: Skill[] = new Array<Skill>();
  filteredSkills: Observable<Skill[]>;

  multiple = true;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  @ViewChild('skillInput') skillInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  @ViewChild('empForm') formValues;

  employeeForm = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.email, Validators.required]),
    birthday: new FormControl("", Validators.required),
    skills: new FormControl("")
  });

  constructor(private employeeServices: EmployeeService, private skillServices: SkillService) {
  }

  ngOnInit() {
    this.reloadSkills();
  }

  // getErrorMessage() {
  //   return this.employeeForm.controls['email'].hasError('email') ? 'Not a valid email' : '';
  // }

  reloadSkills() {
    this.skillServices.getAllSkills().subscribe(data => {
      this.skillsList = data,
        this.filteredSkills = this.employeeForm.controls['skills'].valueChanges.pipe(
          startWith(null),
          map((skillName: string | null) => skillName ? this._filter(skillName) : data),
        );
    });
  }

  private _filter(value: string): Skill[] {
    let temp = new Array<Skill>();
    let i = 0;
    for (i = 0; i < this.skillsList.length; i++) {
      if (this.skillsList[i].name.toLowerCase().indexOf(value) >= 0) {
        temp.push(this.skillsList[i]);
      }
    }
    return temp;
  }

  add(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;
      if ((value || '').trim()) {
        let skill: Skill = new Skill();
        skill.name = value.trim();
        this.selectedSkills.push(skill);
      }
      // Reset the input value
      if (input) {
        input.value = '';
      }
      this.employeeForm.controls['skills'].setValue(null);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    let skill: Skill = event.option.value;
    this.selectedSkills.push(skill);
    this.skillInput.nativeElement.value = '';
    this.employeeForm.controls['skills'].setValue(null);
  }

  remove(skill: Skill): void {
    const index = this.selectedSkills.indexOf(skill);

    if (index >= 0) {
      this.selectedSkills.splice(index, 1);
    }
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.employeeForm.invalid) {
      return;
    }
    this.save();
    this.employeeForm.clearValidators();
    this.employeeForm.reset();
  }

  save() {
    // if no skill selected an array cannot be created 
    if (this.employeeForm.controls['skills'].value == "") {
      this.employeeForm.controls['skills'].setValue(new Array<Skill>());
    } else {
      this.employeeForm.controls['skills'].setValue(this.selectedSkills);
    }
    console.log(this.selectedSkills);
    this.employeeServices.createEmployee(this.employeeForm.value)
      .subscribe(data => {
          console.log(data),
          this.formValues.resetForm(),
          this.selectedSkills = new Array<Skill>()
      }, error => {
        console.error(error)
      });
  }

  clear(){
    // this.ngOnInit();
    // this.selectedSkills = new Array<Skill>()
    // this.formValues.resetForm();
    // this.employeeForm.di
    // this.employeeForm.reset();
  }
}
