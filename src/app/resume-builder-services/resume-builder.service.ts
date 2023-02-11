import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResumeBuilderService {
  public display:string = ""
  
  constructor() {}

  public changeDisplay(element: string) {
    this.display = element;
    console.log(this.display, "this.display in SERVICE")
    console.log(element,"element in SERVICE ")
  }
}
