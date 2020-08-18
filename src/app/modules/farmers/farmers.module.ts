import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCardComponent } from './components/search-card/search-card.component';
import { FarmersComponent } from './pages/farmers/farmers.component';
import { FarmersRoutingModule } from './farmers-routing.module';

@NgModule({
  declarations: [
    SearchCardComponent,
    FarmersComponent,
  ],
  imports: [
    CommonModule,
    FarmersRoutingModule,
  ]
})
export class FarmersModule { }
