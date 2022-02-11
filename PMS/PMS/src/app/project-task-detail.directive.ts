import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[taskHost]',
})
export class TaskDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
