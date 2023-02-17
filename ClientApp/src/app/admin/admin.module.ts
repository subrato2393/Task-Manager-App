import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { ContactComponent } from '../admin/contact/contact.component';
import { AboutComponent } from '../admin/about/about.component';
import { AdminRoutingModule } from './admin-routing.module';
import {ProjectListComponent} from '../admin/project/project-list/project-list.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    DashboardComponent,
    ContactComponent,
    ProjectListComponent,
    AboutComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    NgxPaginationModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
