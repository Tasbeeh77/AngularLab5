import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit{
  crsId=1;
  crs:Course|null=null;
  constructor(public crsService:CourseService,private ac:ActivatedRoute){}
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
  sub:Subscription|null=null;
  ngOnInit(): void {
    this.sub = this.ac.params.subscribe(data=>{
        this.crsService.getCourseById(data['id']).subscribe(d=>{
        this.crs=d;
      });
    });
  }
}
