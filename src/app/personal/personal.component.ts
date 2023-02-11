import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResumeBuilderService } from '../resume-builder-services/resume-builder.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
})


export class PersonalComponent {
  constructor(private resumeBuilderService: ResumeBuilderService) {

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.personalForm.value);
  }
  personalForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    image: new FormControl(''),
    aboutMeTextArea: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),

  });


  public callchangeDisplay() {
    this.resumeBuilderService.changeDisplay('experience')
    console.log("button called")
  }
}
