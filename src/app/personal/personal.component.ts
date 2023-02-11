import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
})


export class PersonalComponent {

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.personalForm.value);
  }
  personalForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    pShoneNumber: new FormControl(''),

  });

}
