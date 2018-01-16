import { FormsModule } from '@angular/forms';

import { Component } from '@angular/core';
import { Employee } from '../../model/employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';



@Component({
  selector: 'app-employee-view',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
    employees: Array<Employee>;
    

    constructor(private employeeService:EmployeeService,private router:Router){
      this.employeeService.getEmployees().subscribe( response => {
        this.employees = response as Employee[];
        console.log(this.employees);
      });
     
    } 

    employeeDetail(id:string){
      let link = ['/employee', id];
      this.router.navigate(link);
  }


}