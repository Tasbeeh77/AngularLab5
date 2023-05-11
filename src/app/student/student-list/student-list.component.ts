import { Component } from '@angular/core';
import { Student } from 'src/app/Models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  detailsFlag=false;
  students:Student[]=[
    new Student(1,"ahmed",20),
    new Student(2,"mohamed",22),
    new Student(3,"mahmoud",23),
    new Student(4,"sara",25),
  ];
  dstd=new Student();
  ShowDetails(id:number){
    for (let index = 0; index < this.students.length; index++) {
      if(this.students[index].id==id)
      {
        this.dstd=this.students[index];
        this.detailsFlag=true;
        break;
      }
    }
  }
  AddStudent(s:Student){
    this.students.push(s)
  }
}
