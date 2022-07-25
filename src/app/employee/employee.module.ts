import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmpListComponent } from './emp-list/emp-list.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { EmployeeDataService } from './employee-data.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmpListComponent,
    AddUsersComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    EmployeeDataService
  ]
})
export class EmployeeModule { }
