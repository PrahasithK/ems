import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Employee, EmployeeDataService } from '../employee-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  employee: Employee = <Employee>{
    id: "",
    firstName: "",
    lastName: "",
    age: ""
  }

  constructor(
    private empDataService: EmployeeDataService, private router: Router
  ) { }
  ngOnInit(): void {

  }

  submit(emp: Employee) {
    if (emp.id === "") { console.log("id is empty"); return; }
    if (emp.firstName === "") { console.log("firstName is empty"); return; }
    if (emp.lastName === "") { console.log("lastName is empty"); return; }
    if (emp.age === "") { console.log("age is empty"); return; }
    this.empDataService.addEmployee(emp);
    this.router.navigate(['/employee'])
  }
}
