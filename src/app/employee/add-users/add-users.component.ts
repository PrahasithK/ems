import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Employee, EmployeeDataService } from '../employee-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  // id:string="";
  // firstName:string="";
  // lastName:string="";
  // age:string="";
  employee:Employee=<Employee>{
    id:"",
    firstName:"",
    lastName:"",
    age:""
  }

  constructor(
    private empDataService: EmployeeDataService, private route: ActivatedRoute
  ) {}
  editData:any;
  ngOnInit(): void {
    //edit
    console.log(this.route.queryParams)
    this.route.queryParams
      .subscribe((params) => {
        console.log(params);
        
        this.employee=<Employee>{...params}
      });

  }

  submit(emp: Employee){
    if(emp.id === ""){console.log("id is empty"); return; }
    if(emp.firstName === ""){console.log("firstName is empty"); return; }
    if(emp.lastName === ""){console.log("lastName is empty"); return; }
    if(emp.age === ""){console.log("age is empty"); return; }
    const employeeList=this.empDataService.getEmployeeList()
    const match=employeeList.find((e:Employee)=>e.id===emp.id)
    if (match){
      console.log("id already exist")
      return;
    }
    this.empDataService.addEmployee(emp);   
  }
}
