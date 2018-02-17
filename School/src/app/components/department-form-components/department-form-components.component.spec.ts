import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentFormComponentsComponent } from './department-form-components.component';

describe('DepartmentFormComponentsComponent', () => {
  let component: DepartmentFormComponentsComponent;
  let fixture: ComponentFixture<DepartmentFormComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentFormComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentFormComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
