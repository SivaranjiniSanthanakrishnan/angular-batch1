import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-baatch1';


  clickButton(val){
    alert(val)
  }

  myEvent(val){
    console.log(val)
  }
  course="Angular";
  isDisabled=true;

  enableText(){
    this.isDisabled = false;
  }

  show=true;
  color='green'

  colorSwitch=''

  data=[
    {
      name:'xxx',
      age:'23'
    },
    {
      name:'yyy',
      age:'24'
    }
  ]
  career=""
  careers=""
  careerss="Interpolation careerss"
  ismodelDisabled=false;
  
  disable(val){
    this.ismodelDisabled=true;
    this.careers=val;
  }

  submitData(values){
    console.log('Form Values');
    console.log(values)
  }
  yellowcolour="yellow"
  changeColour(){
    this.yellowcolour="blue";
  }
  err = false;
  redcolour="red";
  greencolour="green"
  toggle(){
    this.err=!this.err
  }

  pipeName = "sIvA rAnjini";
  pipeDate = Date.now();
  pipeNumber = 100;
}
