import { FormsModule } from '@angular/forms';

import { Component } from '@angular/core';
import { Employee } from '../../model/employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavigationComponent {
    
    isClicked:boolean;
    view: string;

    constructor(private employeeService:EmployeeService,private router:Router){
     
    } 

 

  clicked(view:string){
    this.isClicked = !this.isClicked;
    console.log("clicked!");

    this.view = view;

    this.switchRouter(view);
  }

  switchRouter(view:string){
      this.router.navigate(['',view]);
  }

}

