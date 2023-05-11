import { Component } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
  title="hello WEBAPI & angular";
  bdate=new Date(1990,1,20);  
}
