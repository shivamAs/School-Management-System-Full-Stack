import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../common/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL = "http://localhost:9095/api/students"

  constructor(private httpClient: HttpClient) { }


  getStudentList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}`);
  }

  createStudent(student: Student): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, student);
  }
  getStudentById(id: number): Observable<Student>{
  return this.httpClient.get<Student>(`${this.baseURL}/${id}`);
  }

  updateStudent(id: number, student: Student): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, student);
  }
  deleteStudent(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}