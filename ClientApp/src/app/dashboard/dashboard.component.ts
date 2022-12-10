import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Designation: any;
  Username: any;
  NoOfTeamMembers: any;
  TotalCostOfAllProjects: any;
  PendingTasks: any;
  UpComingProjects: any;
  ProjectCost: any;
  CurrentExpenditure: any;
  AvailableFunds: any;

  Clients: any;
  Projects: any;
  Years: number[] = [];
  TeamMembersSummary = [];
  TeamMembers = [];

  constructor() { 
 
  }



  ngOnInit() {
    this.Designation = 'Team Leader';
    this.Username = 'Scott Smith';
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
  }
}
