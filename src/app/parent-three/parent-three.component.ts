import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildThreeComponent } from '../child-three/child-three.component';

@Component({
  selector: 'app-parent-three',
  templateUrl: './parent-three.component.html',
  styleUrls: ['./parent-three.component.css']
})
export class ParentThreeComponent implements OnInit {

  message = "hello World"

  @ViewChild(ChildThreeComponent, {static: false}) child;

    ngAfterViewInit(){
        this.message = this.child.message;
    }










  constructor() { }

  ngOnInit() {
  }

}
