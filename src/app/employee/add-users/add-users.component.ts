import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Employee, EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  constructor(
    private empDataService: EmployeeDataService
  ) {}
  editData:any;
  ngOnInit(): void {
    //edit
    console.log(JSON.parse(localStorage.getItem("empLists")|| ""));
    
    this.editData=JSON.stringify(localStorage.getItem("empLists")|| "");
    
  
  }

  submit(emp: Employee){
    if(emp.id === ""){console.log("id is empty"); return; }
    if(emp.firstName === ""){console.log("firstName is empty"); return; }
    if(emp.lastName === ""){console.log("lastName is empty"); return; }
    if(emp.age === ""){console.log("age is empty"); return; }
    this.empDataService.addEmployee(emp);   
  }
}
