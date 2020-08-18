import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FarmerSearchAbstractProvider } from 'src/app/core/providers/farmer-search.abstract';

@Component({
  selector: 'farmer-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent {

  @Input() farmerSearchAbstractProvider: FarmerSearchAbstractProvider;
  @Output() showHide: EventEmitter<boolean> = new EventEmitter();
  @Output() partnerSelectedEvent: EventEmitter<boolean> = new EventEmitter();

  onPartnerSelected(): void {
    this.partnerSelectedEvent.emit();
  }
}
