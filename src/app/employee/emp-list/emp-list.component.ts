import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee, EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor(
    private empDataService: EmployeeDataService,
    private router: Router
  ) { }

  empList: Employee[] = <Employee[]>[{

  }];
  ngOnInit(): void {
    this.empList = this.empDataService.getEmployeeList();
  }


  edit(employee: Employee) {
    this.router.navigate(['/edit-users'], { queryParams: employee })
  }

  delete(employee: Employee) {
    const match1 = this.empList.findIndex((emp: Employee) => emp.id === employee.id)

    this.empList.splice(match1, 1);
    localStorage.setItem("empList", JSON.stringify(this.empList))
  }
}
