import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { CustomDirDirective } from './custom-dir.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //dynamically load the components entry components
  // @ViewChild(CustomDirDirective,{static:true})
  // childref:CustomDirDirective;
  // components:[entryComponent,AppComponent];
  // constructor(public facres:ComponentFactoryResolver){}
  // loadcomponents(id){
  //   this.childref.viewRef.clear();
  //   const resolvedfac=this.facres.resolveComponentFactory(this.components[id]);
  //    const compref = this.childref.viewRef.createComponent(resolvedfac);
  //   //  compref.instance=id
  //   console.log(compref)
  // }
}
// @Component({
//   selector: 'entry',
//   template:""
// })
// export class entryComponent {
// }
