import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import {UserServiceService} from './user-service.service'
import {FormsModule, FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'angular-baatch1';
  dataFromService = {}
  dataFromAPI = {}

   constructor(private userService : UserServiceService, 
    private vcr : ViewContainerRef,
    private cfr: ComponentFactoryResolver) {
    this.dataFromService = userService.getData();

     userService.getUsers().subscribe(data => {
      this.dataFromAPI = data;
    })
  }

  clickButton (val){
    alert(val);
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

  parentToChild = [{
    name: 'XXX',
    age: 24
  },
  {
    name: 'YYY',
    age: 25
  }]

  childToParentData = []

  childToParent(data) {
    this.childToParentData = data;
  }

  async loadComponnent() {
    this.vcr.clear();
    const {TransactionComponent} = await import('./super-admin/transaction/transaction.component')
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(TransactionComponent)
    )
  }

  submitTemplateForm(data) {
    console.log(data)
  }

  reactiveForm= new FormGroup({
    nameReactive : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    emailReactive : new FormControl('', [Validators.required, Validators.email]),
    passwordReactive : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
  })

  get nameReactive() {return this.nameReactive.get('nameReactive')}
  get emailReactive() {return this.emailReactive.get('emailReactive')}
  get passwordReactive() {return this.passwordReactive.get('passwordReactive')}

  submitReactiveForm(data) {
    console.log(data)
  }
}
