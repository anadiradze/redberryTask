import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonalComponent } from './personal/personal.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'personal',
    component: PersonalComponent,
  },
  {
    path: 'experience',
    component: ExperienceComponent,
  },
  {
    path: 'education',
    component: EducationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
