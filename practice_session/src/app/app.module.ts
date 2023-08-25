import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntryComponent } from './entry-component/entry-component.component';
import { CustomDirDirective } from './custom-dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    EntryComponent,
    CustomDirDirective
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ], 
  //  entryComponents:[],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
