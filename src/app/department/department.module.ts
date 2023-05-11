import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepatmentsListComponentComponent } from './depatments-list-component/depatments-list-component.component';
import { AddDepatmentComponentComponent } from './add-depatment-component/add-depatment-component.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { FormsModule } from '@angular/forms';
import { DepartmentRoutingModule } from './department-routing-module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DepatmentsListComponentComponent,
    AddDepatmentComponentComponent,
    DepartmentDetailsComponent,
    DepartmentEditComponent
  ],
  imports: [
    CommonModule, FormsModule, DepartmentRoutingModule,HttpClientModule
  ],
  exports:[
    DepatmentsListComponentComponent,
    AddDepatmentComponentComponent,
    DepartmentDetailsComponent,
    DepartmentEditComponent
  ]
})
export class DepartmentModule { }
