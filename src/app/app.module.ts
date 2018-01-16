import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/Employee/employee.component';
import { EmployeeDetailComponent } from './components/EmployeeDetail/employee-detail.component';
import { AppRoutingModule } from './routing.module';
import { EmployeeService } from './services/employee.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './components/Navigation/nav.component';
import { EmployeeListComponent } from './components/EmployeeList/EmployeeList.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    NavigationComponent,
    EmployeeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],


})
export class AppModule { }
