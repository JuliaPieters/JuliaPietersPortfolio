import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { OtsWebsiteComponent} from './pages/ots-website/ots-website.component';
import {MinorIUXDComponent} from './pages/minor-IUXD/minor-IUXD.component';
import {RijkswaterstaatComponent} from './pages/rijkswaterstaat/rijkswaterstaat.component';
import {AnxietyAllyComponent} from  './pages/anxiety-ally/anxiety-ally.component'
import {DePontesComponent} from './pages/de-pontes/de-pontes.component';
import {KeesClosedComponent} from './pages/kees-closed/kees-closed.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'ots-website',component:OtsWebsiteComponent},
  { path: 'minor-IUXD',component:MinorIUXDComponent},
  { path: 'rijkswaterstaat',component:RijkswaterstaatComponent},
  { path: 'anxiety-ally', component:AnxietyAllyComponent},
  { path: 'pontes', component:DePontesComponent},
  { path: 'kees-closed', component:KeesClosedComponent},
];
