import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Department } from 'src/app/Models/deprtment';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent {
  dept:Department=new Department();
  constructor(public deptSer:DepartmentService){}
  Edit(){
    this.deptSer.EditDepartment(this.dept).subscribe(data=>{
      console.log(data);
    })}
}
