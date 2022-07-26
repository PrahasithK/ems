import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmpListComponent } from './emp-list/emp-list.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { EmployeeDataService } from './employee-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUsersComponent } from './edit-users/edit-users.component';



@NgModule({
  declarations: [
    EmpListComponent,
    AddUsersComponent,
    EditUsersComponent,
   
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    EmployeeDataService
  ]
})
export class EmployeeModule { }
