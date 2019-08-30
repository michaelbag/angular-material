import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Material {{
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
// }}

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MaterialModule],
  declarations: [AppComponent, HelloComponent, MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
