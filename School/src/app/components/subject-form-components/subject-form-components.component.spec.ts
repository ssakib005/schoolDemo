import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectFormComponentsComponent } from './subject-form-components.component';

describe('SubjectFormComponentsComponent', () => {
  let component: SubjectFormComponentsComponent;
  let fixture: ComponentFixture<SubjectFormComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectFormComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectFormComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
