// Modules ..................
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
// components ................
import { AppComponent } from './app.component';
import { SubjectFormComponentsComponent } from './components/subject-form-components/subject-form-components.component';
import { DepartmentFormComponentsComponent } from './components/department-form-components/department-form-components.component';
import { StudentComponent } from './components/student/student.component';
import { StFormComponent } from './components/student/st-form/st-form.component';
import { StTableComponent } from './components/student/st-table/st-table.component';
// service ....................
import { AppServiceService } from './app-service.service';
import { SubjectFormService } from './components/subject-form-components/subject-form.service';
import { StudentService} from './components/student/student.service';
import { StAdvisingComponent } from './components/student/st-advising/st-advising.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectFormComponentsComponent,
    DepartmentFormComponentsComponent,
    StudentComponent,
    StFormComponent,
    StTableComponent,
    StAdvisingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    AppServiceService,
    SubjectFormService,
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
