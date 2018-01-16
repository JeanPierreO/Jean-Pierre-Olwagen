import { Component } from "@angular/core";


import { EmployeeService } from "../../services/employee.service";
import { Employee } from "../../model/employee";
import "rxjs/add/operator/switchMap";
import { ParamMap,ActivatedRoute,Router,Params  } from "@angular/router";
import { } from "@angular/router/src/shared";

@Component({
  selector: "app-employee-detail",
  templateUrl: "./employee-detail.component.html",
  styleUrls: ["./employee-detail.component.css"]
})

export class EmployeeDetailComponent {
  employee: Employee;
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router:Router,
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.employeeService.getEmployee(params['id']).subscribe(response => {
          console.log(response);
        this.employee = response as Employee;
        console.log(this.employee);
      });
    });
  }


  back() {
    this.router.navigate(['employee-grid']);
  }
}
