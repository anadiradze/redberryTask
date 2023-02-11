import { Component, DoCheck } from '@angular/core';
import { ResumeBuilderService } from '../resume-builder-services/resume-builder.service';

@Component({
  selector: 'app-resume-builder',
  templateUrl: './resume-builder.component.html',
  styleUrls: ['./resume-builder.component.css']
})
export class ResumeBuilderComponent implements DoCheck {
  public display: string =""

  constructor(private resumeBuilderService: ResumeBuilderService) {
  }


// note for me 
  showhowdisplayworks(){
    console.log("this.display in resume-builder component",this.display)
    
}
ngDoCheck(): void {
  this.display = this.resumeBuilderService.display
  console.log("this.display in resume-builder component",this.display)

}
}
