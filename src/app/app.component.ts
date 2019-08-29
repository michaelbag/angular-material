import { Component } from '@angular/core';
import { MainMenuComponent } from './main-menu/main-menu.component'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
