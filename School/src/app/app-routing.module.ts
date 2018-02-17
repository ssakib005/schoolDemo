import { NgModule } from '@angular/core';
import { StTableComponent } from './components/student/st-table/st-table.component';
import { StFormComponent } from './components/student/st-form/st-form.component';
import { StAdvisingComponent } from './components/student/st-advising/st-advising.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'student-form', component: StFormComponent},
  {path: 'student-list', component: StTableComponent},
  {path: 'student-advising', component: StAdvisingComponent},
  {path: '', redirectTo: '/student-form', pathMatch: 'full'},
  {path: '**', redirectTo: '/student-form', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
