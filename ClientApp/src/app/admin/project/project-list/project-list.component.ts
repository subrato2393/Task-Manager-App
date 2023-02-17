import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { DatePipe } from '@angular/common';
import { MasterData } from 'src/app/data/MasterData';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent implements OnInit {

  showDeleteModal:boolean =false;
  deleteProjectId:any;
  projectList:Project[]=[];
  public aProject : Project= new Project();
  public editProject : Project =new Project();
  masterData = MasterData;
 // responsive:boolean = true;

  paging = {
    pageIndex: this.masterData.paging.pageIndex,
    pageSize: this.masterData.paging.pageSize,
    length: 1
  }
  searchText="";

  constructor(private projectService:ProjectService,private datepipe: DatePipe) { 
 
  }

  ngOnInit() {
    this.getAllProjectList();
  };

  handlePageChange(event:any){

  }
  getAllProjectList(){
    this.projectService.getProjectListPagging(this.paging.pageIndex,this.paging.pageSize,this.searchText).subscribe((response)=>{
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
       console.log(error);
    })
    console.log(this.aProject)
  }
  emptyText(){
    this.aProject.projectId=0;
    this.aProject.projectName='';
    this.aProject.teamSize = 0;
    this.aProject.dateOfStart=new Date();
  }

  onEditClick(i:any){
    this.editProject.projectId = this.projectList[i].projectId;
    this.editProject.projectName =this.projectList[i].projectName;
    this.editProject.teamSize =this.projectList[i].teamSize;
   // this.editProject.dateOfStart=this.datepipe.transform(this.projectList[i].dateOfStart, 'yyyy-MM-dd');

  // this.editProject.dateOfStart=this.datepipe.transform(this.projectList[i].dateOfStart, 'yyyy-MM-dd');
    //var date=new Date();
   
  }
  onUpdateclick(){
  this.projectService.updateProject(this.editProject).subscribe((response)=>{
    this.getAllProjectList();
  }
  ,(error)=>{
    console.log(error);
  })
  }
  onDeleteClick(i:any){
  this.showDeleteModal =true;
  this.deleteProjectId = this.projectList[i].projectId;
  }

  onDeleteConfirmClick(){
     this.projectService.deleteProject(this.deleteProjectId).subscribe((response)=>{
      this.getAllProjectList();
     },
     (error)=>
     {
       console.log(error);
     })
  }
}
