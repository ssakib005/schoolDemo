import { Department } from './../../shared/department.model';
import { Injectable } from '@angular/core';
import { Sutdent} from './../../shared/sutdent.model';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';

@Injectable()
export class StudentService {

  constructor(private _http: Http) { }

  student: Sutdent[] = [];
  department: Department[] = [];

  getStudents() {
    return this._http.get('http://localhost:62170/api/students').map(r => r.json());
  }
  getDepartment() {
    return this._http.get('http://localhost:62170/api/departments').map(r => r.json());
  }
  deleteStudents(id) {
    return this._http.delete('http://localhost:62170/api/students/' + id).map(r => r.json());
  }
  private _getHeaders(): Headers {
    const header = new Headers({
      'Content-Type': 'application/json'
    });
    return header;
 }
 public postDepartment(data) {
    const options = new RequestOptions({
       headers: this._getHeaders()
    });
    return this._http.post('http://localhost:62170/api/departments', JSON.stringify(data), options).map(res => res.json());
 }
 public postStudent(data) {
  const options = new RequestOptions({
     headers: this._getHeaders()
  });
  return this._http.post('http://localhost:62170/api/students', JSON.stringify(data), options).map(res => res.json());
}
}
