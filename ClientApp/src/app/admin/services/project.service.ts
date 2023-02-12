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
  saveProject(model:any) {
    // now returns an Observable of Config
    return this.http.post('https://localhost:7194/api/Project/save-project',model);
  }

  updateProject(model:any) {
    // now returns an Observable of Config
    return this.http.put('https://localhost:7194/api/Project/update-project',model);
  }

  deleteProject(id:any) {
    // now returns an Observable of Config
    return this.http.delete('https://localhost:7194/api/Project/delete-project?projectId='+id);
  }

}
