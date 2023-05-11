import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent{
  crs:Course=new Course();
  constructor(public crsSer:CourseService,private ac:ActivatedRoute){}
  Edit(){
    this.crsSer.EditCourse(this.crs).subscribe(data=>{
      console.log(data);
    })}
}
