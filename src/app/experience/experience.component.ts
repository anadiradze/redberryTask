import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ResumeBuilderService } from '../resume-builder-services/resume-builder.service';

interface Experience {}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})

export class ExperienceComponent {
  //inject service
  constructor(private resumeBuilderService: ResumeBuilderService) {}

  // redirect to next page
  public callchangeDisplayNext() {
    this.resumeBuilderService.changeDisplay('education');
    console.log('button called');
  }
  // redirect to previous page
  public callchangeDisplayBack() {
    this.resumeBuilderService.changeDisplay('personal');
    console.log('button called');
  }
  //add experience many times
 
  experiences: Experience[] = [];

  addExperience() {
    this.experiences.push({});
  
}





}
