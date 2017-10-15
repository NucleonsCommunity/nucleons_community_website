import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PythonIntroductionRoutingModule } from './python-introduction-routing.module';
import { PythonIntroductionComponent } from './python-introduction.component';

@NgModule({
  imports: [
    CommonModule,
    PythonIntroductionRoutingModule
  ],
  declarations: [PythonIntroductionComponent]
})
export class PythonIntroductionModule { }
