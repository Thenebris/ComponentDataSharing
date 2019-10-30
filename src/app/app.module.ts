import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentOneComponent } from './parent-one/parent-one.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ParentTwoComponent } from './parent-two/parent-two.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ParentThreeComponent } from './parent-three/parent-three.component';
import { ChildThreeComponent } from './child-three/child-three.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentOneComponent,
    ChildOneComponent,
    ParentTwoComponent,
    ChildTwoComponent,
    ParentThreeComponent,
    ChildThreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
