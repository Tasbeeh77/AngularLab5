import {RouterModule,Routes} from '@angular/router';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { NgModule } from '@angular/core';
import { AddDepatmentComponentComponent } from './add-depatment-component/add-depatment-component.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DepatmentsListComponentComponent } from './depatments-list-component/depatments-list-component.component';

const routes:Routes=[
  {path:'',component:DepatmentsListComponentComponent},
  {path:'departments/add',component:AddDepatmentComponentComponent},
  {path:'departments/update/:id',component:DepartmentEditComponent},
  {path:'departments/details/:id',component:DepartmentDetailsComponent},
]

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
  })

export class DepartmentRoutingModule{

}