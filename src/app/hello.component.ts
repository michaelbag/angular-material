import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h3>Привет {{name}}!</h3>`,
  styles: []
})
export class HelloComponent  {
  @Input() name: string;
}
