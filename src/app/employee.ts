import { Skill } from './skill';

export class Employee {
    id: number;
    name: String;
    email: String;
    birthday: Date;
    skills: Array<Skill> = new Array<Skill>();
}