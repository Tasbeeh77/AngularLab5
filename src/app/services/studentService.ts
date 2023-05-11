import { Injectable } from '@angular/core';
import { Department } from '../Models/deprtment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  detailsFlag=false;
  private Department:Department[]=[
    new Department(1,"PD",50),
    new Department(2,"AI",15),
    new Department(3,"SA",25),
    new Department(4,"OS",40),
  ];
  dept=new Department();
  getAll()
  {
    return this.Department;
  }
  getDepartmentById(id:number):Department|null
  {
    for (let i = 0; i < this.Department.length; i++) {
      if(this.Department[i].id==id)
        return this.Department[i];
    }
    return null;
  }
  ShowDetails(id:number){
    for (let i = 0; i < this.Department.length; i++) {
      if(this.Department[i].id==id)
      {
        this.dept=this.Department[i];
        this.detailsFlag=true;
        break;
      }
    }
  }
  AddDepartment(d:Department){
    this.Department.push(d)
  }
  EditDepartment(d: Department)
  {
    for (let i = 0; i < this.Department.length; i++) {
      if(this.Department[i].id==d.id)
      {
        this.Department[i].Name = d.Name;
        this.Department[i].Capacity = d.Capacity;
        break;
      }
    }
  }
  DeleteDepartment(id:number)
  {
    for (let i = 0; i < this.Department.length; i++) {
      if(this.Department[i].id == id)
      {
        this.Department.splice(i,1)
        break;
      }
    }
  }
}
