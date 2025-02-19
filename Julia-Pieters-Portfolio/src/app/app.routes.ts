import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { Project1Component} from './pages/project1/project1.component';
import {Project2Component} from './pages/project2/project2.component';
import {Project3Component} from './pages/project3/project3.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'project1',component:Project1Component},
  { path: 'project2',component:Project2Component},
  { path: 'project3',component:Project3Component}
];
