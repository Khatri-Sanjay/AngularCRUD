import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { StudentListComponent } from './student/student-list/student-list.component';

const routes: Routes = [
  {
    path: 'header', component: HeaderComponent
  },
  {
    path: 'side-bar', component: SideBarComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'student-list', component: StudentListComponent
  },
  {
    path: 'add-student', component: AddStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
