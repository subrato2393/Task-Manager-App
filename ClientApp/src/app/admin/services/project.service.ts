import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) 
  { }

  getProjectList() {
    // now returns an Observable of Config
    return this.http.get<Project[]>('https://localhost:7194/api/Project/get-allproject-list');
  }
}
