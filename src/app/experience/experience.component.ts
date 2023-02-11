import { Component } from '@angular/core';
import { ResumeBuilderService } from '../resume-builder-services/resume-builder.service';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  constructor(private resumeBuilderService: ResumeBuilderService) {}

  public callchangeDisplayNext() {
    this.resumeBuilderService.changeDisplay('education')
    console.log("button called")
  }
  public callchangeDisplayBack() {
    this.resumeBuilderService.changeDisplay('personal')
    console.log("button called")
  }
}
