import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, CommonModule, MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatCardModule],
  declarations: []
})
export class MaterialModule { }