import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  ullName: string = "";
  public employees!: Employee[];
  public deleteEmployee!: Employee;
  public editEmployee! :Employee;

  constructor( private employeeService :AppService) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  username = true;
  editableInputText(id:number){
    for( let employee of this.employees ){
      console.log(employee.id)
      if(employee.id === id){
       // console.log(user.id)
       // console.log(id)
        this.username = false;
      }
    }
   
  }

  public getAllEmployee(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
 public onDeleteEmployee(userId :number): void {
    this.employeeService.deleteEmployee(userId).subscribe(
      (response: void) => {
        console.log(response);
        this.getAllEmployee();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onUpdateEmloyee(employee: Employee): void {
    this.employeeService.updateEmployee(employee).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getAllEmployee();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  showAlertt(msg:String){
    alert(msg)
  }

  public onOpenModal(employee: Employee): void {
    // this.alertt("xhkj")
    const container1 = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
      this.editEmployee = employee;
      button.setAttribute('data-target', '#updateEmployeeModal');
    container1?.appendChild(button);
    button.click();
  }
}
