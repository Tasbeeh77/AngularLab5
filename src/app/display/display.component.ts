import { Component } from '@angular/core';
import { Student } from '../Models/student';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  title="mvc";
  std:Student=new Student();
     name="aly";
     id=3
     imgsrc="assets/tie_logo.gif"
     n=2;
  flag=false;
  
  save(d:string){
    this.std.name=d;
  }
  changename(n:any){
    this.name=n.value;
    //console.log(n.value);
  }
    myfun(){
      alert('hhh')
      this.id++;
      console.log("btn clicked");
      this.flag=!this.flag;
    }
    count():number{
  
        return 10;
    }
}
