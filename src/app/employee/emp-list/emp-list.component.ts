import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee, EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  //a
  // id:string="";
  // firstName:string="";
  // lastName:string="";
  // age:string="";
  // _router: any;
  
  constructor(
    private empDataService: EmployeeDataService,
    private router:Router
  ) { }

  empList: Employee[] = <Employee[]>[{
   
  }];
  ngOnInit(): void {
    this.empList = this.empDataService.getEmployeeList();
  }
  edit(employee:Employee){
    //edit
    // localStorage.setItem("empLists", JSON.stringify(values));
    // console.log(values.id);
    // let editData=JSON.parse(JSON.stringify(localStorage.getItem("empLists")));
    // for (const [key, value] of Object.entries(editData)) {
  
    //   console.log(`${key}: ${value}`);
    // }
    // console.log(editData.get("id"));
    
    // this.id=values.id;
    // this.firstName=values.firstName;
    // this.lastName=values.lastName;
    // this.age=values.age;
    // console.log(empLists);
    console.log(employee)
    
    this.router.navigate(['/employee/add-users'],{queryParams:employee})

  }
 
   
}
