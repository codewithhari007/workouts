import { Directive, ElementRef, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomDir]'
})
export class CustomDirDirective {
  @Input('appCustomDir')CustomDirDirective;
 
  

  //structuran directive
  rendered=false;
  @Input('appCustomDir') set host(value){
    if(value && !this.rendered){
      this.viewRef.createEmbeddedView(this.templateref);
      this.rendered=true;
    }else if(!value && this.rendered){
      this.viewRef.clear();
      this.rendered=false;
    }
  }

  constructor( public viewRef:ViewContainerRef,
    public elementref:ElementRef,
    public templateref:TemplateRef<any>) { 
  }

  @HostListener('mouseenter')function (){
    // this.elementref.nativeElement.color=this.CustomDirDirective;
    this.elementref.nativeElement.color="blue";
  }
  @HostListener('mouseleave')mouse2(){
    this.elementref.nativeElement.color="red";
  }

}
