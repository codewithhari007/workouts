import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() name:string ;
  @Output() senddata: EventEmitter<any> =new EventEmitter<any>()


  constructor(

  ){

  }

  senddatatoparent(){
    this.senddata.emit('testing the flow')
  }
}
