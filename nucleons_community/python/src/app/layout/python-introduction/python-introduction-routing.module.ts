import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PythonIntroductionComponent } from './python-introduction.component';

const routes: Routes = [
  {
    path: '',
    component: PythonIntroductionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PythonIntroductionRoutingModule { }
