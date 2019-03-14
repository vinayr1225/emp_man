import { Employee } from './employee';

export class Skill{

    skill_id: Number;
    name: String;
    employees: Array<Employee> = new Array<Employee>();
}