import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { ViewStudentComponent } from './student/view-student/view-student.component';

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
  },
  {
    path: 'view-student', component: ViewStudentComponent
  },
  {
    path: 'edit-student/:id', component: EditStudentComponent
  },
  {
    path: 'view-student/:id', component: ViewStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
