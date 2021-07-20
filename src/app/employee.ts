export class Employee {
    id! :number;
    name :string;
    email: string;
    jobTitle:string;
    phone:string;
    imageUrl:string;
    employeeCode:string;

    constructor (name :string,email :string,jontitle:string,phone:string,
        imageurl:string,employeeCode:string){
        this.name = name;
        this.email = email;
        this.jobTitle = jontitle;
        this.phone = phone;
        this.imageUrl = imageurl;
        this.employeeCode = employeeCode
    
    }
    add() {
        return this.name+this.email;
       }
    
    }