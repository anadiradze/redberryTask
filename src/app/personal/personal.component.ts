import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    aboutMeTextArea: new FormControl(''),
    email: new FormControl('', Validators.required),
    pShoneNumber: new FormControl('', Validators.required),

  });

}
