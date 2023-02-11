import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent implements OnInit {

  projectList:Project[]=[];
  public aProject : any=
  {
    projectId:0,
    projectName:'',
    dateOfStart:new Date(),
    teamSize:0
  };
 

  constructor(private projectService:ProjectService) { 
 
  }

  ngOnInit() {
    this.getAllProjectList();
  };

  getAllProjectList(){
    this.projectService.getProjectList().subscribe((response)=>{
      this.projectList=response;
      console.log("project list");
      console.log(this.projectList);
    })
  }
  deleteItem(project:any){

  }
  onSaveclick(){
    this.projectService.saveProject(this.aProject).subscribe((response)=>{
       // this.aProject =response;
        this.getAllProjectList();
        this.emptyText();
    },
    (error)=>
    {

    })
    console.log(this.aProject)
  }

  emptyText(){
    this.aProject.projectId=0;
    this.aProject.projectName='';
    this.aProject.teamSize = 0;
    this.aProject.dateOfStart=new Date();
  }
}
