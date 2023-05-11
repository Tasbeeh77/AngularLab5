import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddCourseComponent } from "./add-course/add-course.component";
import { CourseDetailsComponent } from "./course-details/course-details.component";
import { CourseEditComponent } from "./course-edit/course-edit.component";
import { CourseListComponent } from "./course-list/course-list.component";

const routes:Routes=[
    {path:'',component:CourseListComponent},
    {path:'courses/add',component:AddCourseComponent},
    {path:'courses/update/:id',component:CourseEditComponent},
    {path:'courses/details/:id',component:CourseDetailsComponent},
]

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
  })

export class CourseRoutingModule{

}