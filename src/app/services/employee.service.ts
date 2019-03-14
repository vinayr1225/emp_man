import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = 'http://localhost:8080/api/employees';

  constructor(private http: HttpClient) {

  }

  createEmployee(emp: Object): Observable<Object>{
    // console.log(emp);
    return this.http.post(this.baseURL + '/create', emp);
  }

  getEmployeeById(id: number): Observable<Object>{
    return this.http.get(this.baseURL+ '/' +id);
  }

  getAllEmployees(): Observable<any>{
    return this.http.get(this.baseURL);
  }

  updateEmployee(id: number, emp: Object): Observable<any>{
    return this.http.post(this.baseURL + '/' + id, emp);    
  }

  deleteEmployeeById(id:number): Observable<any>{
    return this.http.delete(this.baseURL+ '/' + id);
  }

  deleteAllEmployees(){
    return this.http.delete(this.baseURL+'/delete');
  }


}
