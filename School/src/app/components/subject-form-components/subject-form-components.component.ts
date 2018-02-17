import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-subject-form-components',
  templateUrl: './subject-form-components.component.html',
  styleUrls: ['./subject-form-components.component.css']
})
export class SubjectFormComponentsComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }
  onSubmit(ss: NgForm) {
    console.log(ss.value);
  }

}
