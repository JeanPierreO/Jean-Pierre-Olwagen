import { CanActivate, RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

import { EmployeeDetailComponent } from './components/EmployeeDetail/employee-detail.component';
import { EmployeeComponent } from './components/Employee/employee.component';
import { EmployeeListComponent } from './components/EmployeeList/EmployeeList.component';

export const routes: Routes = [
    {path: '', redirectTo: 'employees', pathMatch: "full" },
    {path: 'employee-grid', component: EmployeeComponent},
    {path: 'employee-list', component: EmployeeListComponent},
    {path: 'employee/:id', component: EmployeeDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
