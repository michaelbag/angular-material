import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: 'Привет {{ name }}!',
  styles: []
})
export class HelloComponent  {
  @Input() name: string;
}
