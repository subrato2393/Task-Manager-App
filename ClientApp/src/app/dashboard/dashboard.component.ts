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
  Projects:any;
  Years: number[] = [];
  ProjectBreafing:any[]=[];
  TeamMembersSummary:any[] = [];
  ActiveIndex: number = 0;
  today=new Date();
  TeamMembers:any[] = [];

  constructor() { 
 
  }



  ngOnInit() {
    this.Designation = 'Team Leader';
    this.Username = 'Scott Smith';
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 0.2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;

    this.Projects=[
      {Name : "Project A"},
      {Name : "Project B"},
      {Name : "Project C"},
      {Name : "Project D"},
  ];

  for (let i=2019;i>2000;i--){
    this.Years.push(i);
  };

  this.ProjectBreafing=[
    {Title:"Project Cost", Cost:2113507},
    {Title:"Current Expenditure", Cost:96788},
    {Title:"Available Funds", Cost:52536}
  ];

  this.TeamMembersSummary=[
    {Region:"East", TeamMemberCount:20, TemporaryUnAvailableMember:4},
    {Region:"South", TeamMemberCount:15, TemporaryUnAvailableMember:8},
    {Region:"West", TeamMemberCount:17, TemporaryUnAvailableMember:1},
    {Region:"North", TeamMemberCount:15, TemporaryUnAvailableMember:6}
  ];

  this.Clients=["ABC Infotech Ltd.","DEF Software Solutions","GHI Industries","ITIL"];

this.TeamMembers =[
  {
    Region:"East",Members:
    [
        {Id:"1",Name:"Ford",Status:"Available"},
        {Id:"2",Name:"Miller",Status:"Not Available"},
        {Id:"3",Name:"Jones",Status:"Busy"},
        {Id:"4",Name:"James",Status:"Busy"}
    ],
  },
  {
    Region:"South",Members:
    [
        {Id:"1",Name:"Jon",Status:"Available"},
        {Id:"2",Name:"Abraham",Status:"Available"},
        {Id:"3",Name:"Jones",Status:"Busy"},
        {Id:"4",Name:"Deva",Status:"Busy"}
    ],
  },
  {
    Region:"West",Members:
    [
        {Id:"1",Name:"Pen",Status:"Available"},
        {Id:"2",Name:"Miller",Status:"Available"},
        {Id:"3",Name:"Jones",Status:"Busy"},
        {Id:"4",Name:"O Neill",Status:"Busy"}
    ],
  },
  {
    Region:"North",Members:
    [
        {Id:"1",Name:"Ford",Status:"Available"},
        {Id:"2",Name:"Super",Status:"Available"},
        {Id:"3",Name:"Really",Status:"Busy"},
        {Id:"4",Name:"James",Status:"Busy"}
    ]
  }
]
  };

  onButtonClick(event:any){
  console.log(event.target.innerHTML)
  if(event.target.innerHTML== "Project A"){
    this.ProjectBreafing=[
      {Title:"Project Cost", Cost:"$9999"},
      {Title:"Current Expenditure", Cost:"$3333"},
      {Title:"Available Funds", Cost:"$521112536"}
    ];
  }
  else if(event.target.innerHTML== "Project B"){
    this.ProjectBreafing=[
      {Title:"Project Cost", Cost:"$444"},
      {Title:"Current Expenditure", Cost:"$111111"},
      {Title:"Available Funds", Cost:"$0000"}
    ];
  }
 
  }
  toggle(i:any){
    this.ActiveIndex = i;
    console.log(i+"---")
  }
}
