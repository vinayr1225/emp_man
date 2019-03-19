import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { EmployeeService } from "./../services/employee.service";
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SkillService } from '../services/skill.service';
import { Skill } from '../skill';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService, public dialog: MatDialog) { }

  employees: Observable<Employee[]>;
  employee: Employee = new Employee();
  displayedColumns: string[] = ['name', 'email', 'birthday', 'skills', '***'];

  ngOnInit() {
    this.get();
  }

  get() {
    this.employees = this.employeeService.getAllEmployees();
  }

  delete(employee: Employee) {
    
    return this.employeeService.deleteEmployeeById(employee.id).subscribe(
      data => {
        // this.employees.splice(employees.indexOf(data.),1)
        console.log("deleted" + data);        
      },
      error => {
        console.log(error);
      },
      
      
    );
    
  }

  openUpdateDialog(employee: Employee) {
    const dialogRef = this.dialog.open(UpdateEmployeeDialogComponent, {
      width: '1000px',
      data: employee
    });



    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);

    //   this.employee.id = employee.id;
    //   this.employee.name = result.name;
    //   this.employee.email = result.email;
    //   this.employee.birthday = result.birthday;
    //   if (result.skills == "") {
    //     this.employee.skills = employee.skills;
    //   } else {
    //     // this.employee.skills = selectedSkills;
    //   }

    //   console.log(this.employee);
    // });
  }


}

@Component({
  selector: 'update-employee-dialog-component',
  templateUrl: 'update-employee-dialog-component.html',
  styleUrls: ['./update-employee-dialog-component.css']
})
export class UpdateEmployeeDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<UpdateEmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee, private employeeServices: EmployeeService,
    private skillServices: SkillService) {
    this.reloadSkills();
  }

  employeeForm = new FormGroup({
    name: new FormControl(this.data.name),
    email: new FormControl(this.data.email, Validators.email),
    birthday: new FormControl(this.data.birthday.toString()),
    skills: new FormControl("")
  });

  skillsList: Skill[] = new Array<Skill>();
  selectedSkills: Skill[] = this.data.skills;
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

  onNoClick(): void {
    this.dialogRef.close();
  }

  reloadSkills() {
    this.skillServices.getAllSkills().subscribe(data => {
      this.skillsList = data;
      data.forEach(skill => {
        this.selectedSkills.forEach(selectedSkill => {
          if (skill.skill_id == selectedSkill.skill_id) {
            this.skillsList.splice(this.skillsList.indexOf(skill), 1);
          }
        });
      });
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
    this.skillsList.splice(this.skillsList.indexOf(skill), 1);
    this.skillInput.nativeElement.value = '';
    this.employeeForm.controls['skills'].setValue(null);
  }

  remove(skill: Skill): void {
    const index = this.selectedSkills.indexOf(skill);
    if (index >= 0) {
      this.selectedSkills.splice(index, 1);
      this.skillsList.push(skill);
    }
  }

  // selected(event: MatAutocompleteSelectedEvent): void {
  //   let skill: Skill = new Skill();
  //   skill.name = event.option.viewValue.trim();
  //   this.selectedSkills.push(skill);
  //   this.skillInput.nativeElement.value = '';
  //   this.employeeForm.controls['skills'].setValue(null);
  //   console.log(this.selectedSkills);
  // }



  onSubmit() {
    // stop here if form is invalid
    if (this.employeeForm.invalid) {
      return;
    }
    this.update();
    this.employeeForm.clearValidators();
    this.employeeForm.reset();
    this.onNoClick();
  }

  update() {    
      console.log(this.employeeForm.controls['skills'].value);
      this.employeeForm.controls['skills'].setValue(this.selectedSkills);
      console.log(this.employeeForm.controls['skills'].value);
    // }
    this.employeeServices.updateEmployee(this.data.id, this.employeeForm.value)
      .subscribe(data => {
        console.log(data),
          this.formValues.resetForm(),
          this.selectedSkills = new Array<Skill>()
      }, error => {
        console.error(error)
      });

  }

















}