import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-experience-child',
  templateUrl: './experience-child.component.html',
  styleUrls: ['./experience-child.component.css']
})
  //create formGroup and Formcontrols

export class ExperienceChildComponent {
  experienceForm = new FormGroup({
    position: new FormControl(''),
    employer: new FormControl(''),
    description: new FormControl(''),
    start_date: new FormControl(''),
    end_date: new FormControl(''),
  });
}
