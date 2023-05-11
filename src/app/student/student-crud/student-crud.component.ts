import { Component } from '@angular/core';
import { Student } from 'src/app/Models/student';

@Component({
  selector: 'app-student-crud',
  templateUrl: './student-crud.component.html',
  styleUrls: ['./student-crud.component.css']
})
export class StudentCrudComponent {
  detailsFlag=false;
  addFlag=false;
  nstudent=new Student();
  studentDetails=new Student();
Save(){
  this.students.push(new Student(this.nstudent.id,this.nstudent.name,this.nstudent.age));
  this.addFlag=false;
}
ShowDetails(id:number){
  for (let i = 0; i < this.students.length; i++) {
    if(this.students[i].id==id){
      this.studentDetails=this.students[i];
      this.detailsFlag=true;
      break;
    }

  }
}
  degree=50;
  students:Student[]=[
    new Student(1,"ahmed",20),
    new Student(2,"mohamed",22),
    new Student(3,"mahmoud",23),
    new Student(4,"sara",25),
  ];
}
