import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeDataService } from '../employee-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  data1: any;
  employee: Employee = <Employee>{
    id: "",
    firstName: "",
    lastName: "",
    age: ""
  }
  oldEmployeeId: string = "";
  idExists: boolean = false;
  SuccessMsg:boolean=false;

  constructor(private empDataService: EmployeeDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {


    console.log(this.route.queryParams)
    this.route.queryParams
      .subscribe((params) => {
        console.log(params);

        this.employee = <Employee>{ ...params }
        this.oldEmployeeId = params['id']
      });
  }
  submit(emp: Employee) {
    this.idExists = false;
    this.SuccessMsg=false;
    if (emp.id === "") { console.log("id is empty"); return; }
    if (emp.firstName === "") { console.log("firstName is empty"); return; }
    if (emp.lastName === "") { console.log("lastName is empty"); return; }
    if (emp.age === "") { console.log("age is empty"); return; }
    const employeeList = this.empDataService.getEmployeeList()
    const checkId = employeeList.findIndex((e: Employee) => e.id === emp.id)
    if (checkId !== -1) {
      console.log("id already exist")
      this.idExists = true;
      return
    }else{
      this.SuccessMsg=true;
    }
    const match1 = employeeList.findIndex((e: Employee) => e.id === this.oldEmployeeId)
    console.log(match1);
    console.log(employeeList);
   
    employeeList.splice(match1, 1);
    employeeList.push(this.employee);
    localStorage.setItem("empList", JSON.stringify(employeeList))
    
  }
}

function index(index: any, arg1: number) {
  throw new Error('Function not implemented.');
}

