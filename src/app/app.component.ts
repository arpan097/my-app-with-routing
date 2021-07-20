import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-demo';
  public editEmployee! :Employee;


  shoeAlert(msg : String){
    alert(msg)
  }

  public onOpenModal(employee: Employee): void {
    this.shoeAlert("Arkhlrk");
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
