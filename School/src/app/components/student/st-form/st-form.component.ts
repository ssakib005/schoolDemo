import { Department } from './../../../shared/department.model';
import { Component, OnInit } from '@angular/core';
import { StudentService} from '../student.service';
import { NgForm } from '@angular/forms';
import { Sutdent } from './../../../shared/sutdent.model';

@Component({
  selector: 'app-st-form',
  templateUrl: './st-form.component.html',
  styleUrls: ['./st-form.component.css'],
  providers: [StudentService]
})
export class StFormComponent implements OnInit {

  constructor(private stService: StudentService) { }

  departemnts: Department[];

  ngOnInit() {
    this.getDepartment();
  }

  getDepartment() {
    this.stService.getDepartment().subscribe(r => {
      this.departemnts = r;
    });
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    this.stService.postStudent(f.value).subscribe(r => {
      f.reset();
      this.getDepartment();
    });

  }

}
