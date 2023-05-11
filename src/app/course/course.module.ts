import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { FormsModule } from '@angular/forms';
import { CourseRoutingModule } from './course-routing-module';



@NgModule({
  declarations: [
    AddCourseComponent,
    CourseEditComponent,
    CourseDetailsComponent,
    CourseListComponent
  ],
  imports: [
    CommonModule, FormsModule, CourseRoutingModule
  ]
})
export class CourseModule { }
