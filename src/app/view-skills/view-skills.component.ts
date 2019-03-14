import { Component, OnInit } from '@angular/core';
import { SkillService } from '../services/skill.service';
import { Observable } from 'rxjs';
import { Skill } from '../skill';

@Component({
  selector: 'app-view-skills',
  templateUrl: './view-skills.component.html',
  styleUrls: ['./view-skills.component.css']
})
export class ViewSkillsComponent implements OnInit {

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.reloadSkills();
  }

  skillsList: Skill[];

  reloadSkills() {
    
    this.skillService.getAllSkills().subscribe(data => this.skillsList = data);
    // console.log(this.skillsList);
  }

}
