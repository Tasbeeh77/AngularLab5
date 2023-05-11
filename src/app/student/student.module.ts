import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentCrudComponent } from './student-crud/student-crud.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentListComponent,
    AddStudentComponent,
    StudentCrudComponent,
    StudentDetailsComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[StudentListComponent,StudentCrudComponent,AddStudentComponent,StudentDetailsComponent]
})
export class StudentModule { }
