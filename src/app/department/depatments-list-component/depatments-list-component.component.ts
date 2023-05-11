import { Department } from 'src/app/Models/deprtment';
import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-depatments-list-component',
  templateUrl: './depatments-list-component.component.html',
  styleUrls: ['./depatments-list-component.component.css']
})

export class DepatmentsListComponentComponent implements OnInit {
  constructor(public deptService: DepartmentService) {
  }
  
  ngOnInit(): void {
    this.deptService.getAll().subscribe(data=>{
      this.Departments=data;
      console.log(data) 

    })
  }
  delete(id:number)
  {
    alert("Are you sure?");
    this.deptService.DeleteDepartment(id).subscribe(data=>{
      console.log("Deleted Successfully");
      window.location.reload();
    });
  }
  
  Departments: Department[] = [];
}