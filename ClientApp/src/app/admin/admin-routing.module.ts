import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { ContactComponent } from '../admin/contact/contact.component';
import { AboutComponent } from '../admin/about/about.component';

const routes: Routes = [
  { 
    path:  '',
    redirectTo:'dashboard',
    pathMatch: 'full', 
  },
  { 
    path:  'dashboard',
    component:  DashboardComponent
  },
  { 
    path:  'contact', 
    component:  ContactComponent
  },
  { 
    path:  'about', 
    component:  AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
