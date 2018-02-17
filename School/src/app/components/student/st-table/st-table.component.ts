import { Component, OnInit } from '@angular/core';
import { StudentService } from './../student.service';
import { Http } from '@angular/http';
import { Sutdent} from './../../../shared/sutdent.model';
import { Routes, ActivatedRoute, NavigationExtras, RouterLink } from '@angular/router';
import { StFormComponent } from '../st-form/st-form.component';


@Component({
  selector: 'app-st-table',
  templateUrl: './st-table.component.html',
  styleUrls: ['./st-table.component.css'],
  providers: [StudentService]
})
export class StTableComponent implements OnInit {

  studentsList: Sutdent[];
  constructor(

    private stService: StudentService,
    private route: Routes,
    private router: ActivatedRoute,
    private nav: NavigationExtras,
    private routerLink: RouterLink
  ) { }

  ngOnInit() {
    this.getStudents();
  }
  getStudents() {
    this.stService.getStudents().subscribe(r => {
      console.log(r);
      this.studentsList = r;
    });
  }
  deleteStudent(id) {
    if (confirm('Are you sure....!!!')) {
      this.stService.deleteStudents(id).subscribe(r => {
        this.getStudents();
      });
    }
  }

  getStudentById(id) {
    this.route = [
      {path: 'student-update', component: StFormComponent, data: {Id: id}}
    ];
  }
}
