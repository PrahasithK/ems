import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUsersComponent } from './add-users/add-users.component';
import { EmpListComponent } from './emp-list/emp-list.component';

const routes: Routes = [
  {
    
      path:'',
      component:EmpListComponent
    
  },
  {
    path:'add-users',
    component:AddUsersComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
