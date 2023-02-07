import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { SelectorComponent } from "./selector.component";

@NgModule({
  declarations: [SelectorComponent],
  imports: [
    CommonModule,
    MatSelectModule
  ],
  exports: [SelectorComponent]
})
export class SelectModule { }
