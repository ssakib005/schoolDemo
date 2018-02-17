import { AppServiceService } from './../../app-service.service';
import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from './../student/student.service';

@Component({
  selector: 'app-department-form-components',
  templateUrl: './department-form-components.component.html',
  styleUrls: ['./department-form-components.component.css']
})
export class DepartmentFormComponentsComponent implements OnInit {

  constructor(private MyService: StudentService) { }

  ngOnInit() {
  }
  ClearText(df: NgForm) {
    df.reset();
  }
  // tslint:disable-next-line:member-ordering
  onSubmit(df: NgForm) {
    console.log(df.value);
    this.MyService.postDepartment(df.value).subscribe(r => {
      df.reset();
    });
  }


}
