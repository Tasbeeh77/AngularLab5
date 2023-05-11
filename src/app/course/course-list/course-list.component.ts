import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  constructor(public deptService:CourseService) {
  }
 Courses:Course[] = [];
 ngOnInit(): void {
  this.deptService.getAll().subscribe(data=>{
    this.Courses=data;
    console.log(data) 

  })
}
delete(id:number)
{
  alert("Are you sure?");
  this.deptService.DeleteCourse(id).subscribe(data=>{
    console.log("Deleted Successfully");
    window.location.reload();
  });
}
}