import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {


message:string = "The Value has been passed from child to parent!";

@Output() messageEvent = new EventEmitter<string>();

sendMessage(){
  this.messageEvent.emit(this.message)
}











constructor() { }

  ngOnInit() {
  }

}
