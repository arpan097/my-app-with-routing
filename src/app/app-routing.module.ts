import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // {
  //   path : '',
  //   redirectTo :'/logn',
  //   component : LoginComponent
  // },
  {
    path : 'login',
    component : LoginComponent
  },{
    path : 'register',
    component : RegisterComponent
  },{
    path : 'employee-list',
    component : EmployeeListComponent
  },{
    path: 'employee-details',
    component :EmployeeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[
LoginComponent,RegisterComponent,EmployeeListComponent,EmployeeDetailsComponent
]
