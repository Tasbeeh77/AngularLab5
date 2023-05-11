import { Component, EventEmitter, Output } from '@angular/core';
import { Department } from 'src/app/Models/deprtment';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-add-depatment-component',
  templateUrl: './add-depatment-component.component.html',
  styleUrls: ['./add-depatment-component.component.css']
})
export class AddDepatmentComponentComponent {
  dept:Department=new Department(0,"",0);
  constructor(public deptSer:DepartmentService){}
  Add(){
      console.log(this.dept);
      
      this.deptSer.AddDepartment(this.dept).subscribe(data=>{
        console.log(data)
      });
  }
}
