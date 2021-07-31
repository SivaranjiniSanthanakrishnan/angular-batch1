import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() componentDetails;
  @Output() childToParent: EventEmitter<any> = new EventEmitter();
  constructor() { 
    console.log("Users");
  }

  ngOnInit(): void {
    var childToParent = [{
      name: 'XXX',
      age: 24
    },
    {
      name: 'YYY',
      age: 25
    }]
    this.childToParent.emit(childToParent);
  }
  myEvent(val){
    
  }
}
