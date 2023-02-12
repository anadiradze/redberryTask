import { Component } from '@angular/core';
import { ResumeBuilderService } from '../resume-builder-services/resume-builder.service';

interface Education {}
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  constructor(private resumeBuilderService: ResumeBuilderService) {}

  public callchangeDisplay() {
    this.resumeBuilderService.changeDisplay('experience');
    console.log('button called');
  }

  //add experience many times
  educations: Education[] = [];

  addEducation() {
    this.educations.push({});
  }
}
