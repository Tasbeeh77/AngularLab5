import { Component } from '@angular/core';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  crs:Course=new Course();
  constructor(public crsSer:CourseService){}
  Add(){
    console.log(this.crs);
    
    this.crsSer.AddCourse(this.crs).subscribe(data=>{
      console.log(data)
    });
}
}
