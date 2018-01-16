import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Employee } from "../model/employee";

@Injectable()
export class EmployeeService {
  constructor(private http: Http) {}

  getEmployees(): Observable<Employee[]>{
    return this.http
      .get("../../../assets/Employees.json")
      .map(response => {
        return response.json() as Employee[];
      });
  }

  getEmployee(id: number): Observable<Employee>{
    return this.http
      .get("../../../assets/Employees.json")
      .map(response => {
        var employee =  response.json() as Employee;

        console.log(id);
        return employee[id - 1] as Employee;
      });
  }
}
