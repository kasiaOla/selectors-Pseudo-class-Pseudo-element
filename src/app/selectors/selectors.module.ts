import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PseudoClassComponent } from './pseudo-class/pseudo-class.component';
import { PseudoElementComponent } from './pseudo-element/pseudo-element.component';



@NgModule({
  declarations: [PseudoClassComponent, PseudoElementComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    PseudoClassComponent,
    PseudoElementComponent
  ]
})
export class SelectorsModule { }
