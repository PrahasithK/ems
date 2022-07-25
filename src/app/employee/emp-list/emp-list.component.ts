import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee, EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  _router: any;
  
  constructor(
    private empDataService: EmployeeDataService,
    private router:Router
  ) { }

  empList: Employee[] = <Employee[]>[{
   
  }];
  ngOnInit(): void {
    this.empList = this.empDataService.getEmployeeList();
  }
  edit(values:Employee){
    //edit
   

    localStorage.setItem("empLists", JSON.stringify(values));
    console.log(values);
    // console.log(empLists);
    
    this.router.navigate(['/employee/add-users'])

  }
 
   
}
