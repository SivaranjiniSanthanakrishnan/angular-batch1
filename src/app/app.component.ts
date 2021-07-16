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

}
