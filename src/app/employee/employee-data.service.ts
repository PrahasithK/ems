import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor() { }

  addEmployee(employee: Employee) {
    const empList = this.getEmployeeList() || [];

    empList.push(employee);
    
    console.log("emplist:", empList);
    localStorage.setItem("empList", JSON.stringify(empList))
  }

  getEmployeeList() {
    try{
      return JSON.parse(localStorage.getItem("empList") || "[]")
    }
    catch(e){
      console.error("Couldn't fetch Employee List.", e);
    }
  }
 
}
