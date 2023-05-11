import { Injectable } from '@angular/core';
import { Course } from '../Models/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseUrl:string = "https://localhost:7014/api/Courses/" 
  getAll()
  {
    return this.http.get<Course[]>(this.baseUrl);
  }
  getCourseById(id:number)
  {
    return this.http.get<Course>(this.baseUrl+id)
  }
  ShowDetails(id:number){
    return this.http.get<Course>(this.baseUrl+id) 
  }
  AddCourse(c:Course){
    return this.http.post<Course>(this.baseUrl,c); 
  }
  EditCourse(c: Course)
  {
    return this.http.put<Course>(this.baseUrl+c.id,c)
  }
  DeleteCourse(id:number)
  {
    return this.http.delete(this.baseUrl+id);
  }
  constructor(public http:HttpClient){}
}
