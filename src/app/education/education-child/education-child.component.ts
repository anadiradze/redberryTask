import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-education-child',
  templateUrl: './education-child.component.html',
  styleUrls: ['./education-child.component.css']
})
export class EducationChildComponent {
  educationForm = new FormGroup({
    education: new FormControl(''),
    degree: new FormControl(''),
    description: new FormControl(''),
    start_date: new FormControl(''),
    end_date: new FormControl(''),
})
}