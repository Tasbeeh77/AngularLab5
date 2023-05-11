import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorComponent } from './error/error.component';

const routes:Routes=[

    {path:'home',component:HomeComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'contactus',component:ContactusComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path: 'departments', loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule)},
    { path: 'courses', loadChildren: () => import('./course/course.module').then(m => m.CourseModule) },
    {path:'**',component:ErrorComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
