import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmersModule } from './modules/farmers/farmers.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'farmers',
    pathMatch: 'full'
  },
  {
    path: 'farmers',
    loadChildren: () => FarmersModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
