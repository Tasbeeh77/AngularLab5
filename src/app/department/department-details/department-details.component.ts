import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Department } from 'src/app/Models/deprtment';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit,OnDestroy{
  deptId=1;
  dept:Department|null=null;
  constructor(public deptService:DepartmentService,private ac:ActivatedRoute){}
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
  sub:Subscription|null=null;
  ngOnInit(): void {
    this.sub = this.ac.params.subscribe(data=>{
        this.deptService.getDepartmentById(data['id']).subscribe(d=>{
        this.dept=d;
      });
    });
  }
}
