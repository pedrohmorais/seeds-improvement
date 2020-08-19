import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmersComponent } from './pages/farmers/farmers.component';

const routes: Routes = [
  {
    path: '',
    component: FarmersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmersRoutingModule { }
