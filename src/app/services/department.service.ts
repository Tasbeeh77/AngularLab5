import { Injectable } from '@angular/core';
import { Department } from '../Models/deprtment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
 baseUrl:string = "https://localhost:7014/api/Departments/" 
  getAll()
  {
    //L data btrg3 observable f 3l4an kda lazm a subscribe 3leh
   return this.http.get<Department[]>(this.baseUrl);
  }
  getDepartmentById(id:number)
  {
    return this.http.get<Department>(this.baseUrl+id)
  }
  ShowDetails(id:number){
    return this.http.get<Department>(this.baseUrl+id)
  }
  AddDepartment(d:Department){
    return this.http.post<Department>(this.baseUrl,d); 
  }
  EditDepartment(d: Department)
  {
    return this.http.put<Department>(this.baseUrl+d.id,d)
  }
  DeleteDepartment(id:number)
  {
    return this.http.delete(this.baseUrl+id);
  }

  constructor(public http:HttpClient){}
}
