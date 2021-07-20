import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fullName: string = "";
  public users!: Employee[];
  public deleteUser!: Employee;
  public editUser! :Employee;
  constructor(private employeeService: AppService,private router : Router) { }

  ngOnInit(): void {
    //this.getAllEmployee();
  }

  username = true;
  editableInputText(id:number){
    for( let user of this.users ){
      console.log(user.id)
      if(user.id === id){
       // console.log(user.id)
       // console.log(id)
        this.username = false;
      }
    }
   
  }

  public getAllEmployee(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.users = response;
        console.log(this.users);
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onAddEmployee(addForm: NgForm): void {
    this.employeeService.addEmployee(addForm.value).subscribe(
      (response: Employee) => {
        console.log(response);
      
        this.router.navigate(['/employee-list']);
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

 

  

  // public onAddEmloyee(): void {
  //   let name = (document.getElementById("name") as HTMLInputElement).value;
  //   let email = (document.getElementById("email") as HTMLInputElement).value;
  //   let jobtitle = (document.getElementById("jobtitle") as HTMLInputElement).value;
  //   let phone = (document.getElementById("phone") as HTMLInputElement).value;
  //   let imageurl = (document.getElementById("imageurl") as HTMLInputElement).value;
  //   let empcode = (document.getElementById("empcode") as HTMLInputElement).value;
  //   let reg = new Register(name, email, jobtitle, phone, imageurl, empcode);
  //   this.employeeService.addEmployee(reg).subscribe(
  //     (response: Register) => {
  //       console.log(response);
  //       // this.getEmployees();

  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);

  //     }
  //   );
  // }

  // onClick() {
  //   let name = (document.getElementById("name") as HTMLInputElement).value;
  //   let email = (document.getElementById("email") as HTMLInputElement).value;
  //   let jobtitle = (document.getElementById("jobtitle") as HTMLInputElement).value;
  //   let phone = (document.getElementById("phone") as HTMLInputElement).value;
  //   let imageurl = (document.getElementById("imageurl") as HTMLInputElement).value;
  //   let empcode = (document.getElementById("empcode") as HTMLInputElement).value;
  //   let reg = new Register(name, email, jobtitle, phone, imageurl, empcode);
  //   console.log(reg);

  // }


}
