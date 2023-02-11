import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonalComponent } from './personal/personal.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ShowResumeComponent } from './show-resume/show-resume.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { FormsModule } from '@angular/forms';
import { DateInputComponent } from './shared/date-input/date-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonalComponent,
    ExperienceComponent,
    EducationComponent,
    ShowResumeComponent,
    ResumeBuilderComponent,
    DateInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
