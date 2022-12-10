import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
