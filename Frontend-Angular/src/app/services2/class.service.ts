import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Class } from '../common2/class1';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private baseURL = "http://localhost:9095/api/classes"

  constructor(private httpClient: HttpClient) { }


  getClassList(): Observable<Class[]>{
    return this.httpClient.get<Class[]>(`${this.baseURL}`);
  }

  createClass(class1: Class): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, class1);
  }
  getClassById(id: number): Observable<Class>{
  return this.httpClient.get<Class>(`${this.baseURL}/${id}`);
  }

  updateClass(id: number, class1: Class): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, class1);
  }
  deleteClass(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}