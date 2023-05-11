import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from 'src/app/Models/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  @Output() onStudentAdd:EventEmitter<Student>=new EventEmitter<Student>();
  nstd=new Student();
  Add(){
    this.onStudentAdd.emit(this.nstd);
  }
}
