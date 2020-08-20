import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FarmerSearchAbstractProvider } from 'src/app/core/providers/farmer-search.abstract';
import { Farmer } from 'src/app/core/model/Farmer';
import { SearchParams } from 'src/app/core/model/Farmer/search-params';

@Component({
  selector: 'farmer-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent implements OnInit, OnChanges {

  @Input() farmerSearchAbstractProvider: FarmerSearchAbstractProvider;
  @Input() searchParams: SearchParams;
  @Output() partnerSelectedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  farmer: Farmer;
  farmerForm: FormGroup;
  editing = false;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getFarmers();
    this.setDetailForm();
    this.setEditing(this.editing);
  }

  setDetailForm(): void {
    if (!this.hasFarmers()) {
      return;
    }
    const {
      name,
      address: {
        address,
        country,
        state,
        street,
      },
      document: {
        documentNumber,
        documentType,
      }
    } = this.farmer;

    this.farmerForm = this.formBuilder.group({
      name: this.formBuilder.control(name),
      documentNumber: this.formBuilder.control(documentNumber),
      documentType: this.formBuilder.control(documentType),
      addressAddress: this.formBuilder.control(address),
      addressCountry: this.formBuilder.control(country),
      addressState: this.formBuilder.control(state),
      addressStreet: this.formBuilder.control(street),
    });
    this.setEditing(false);
  }

  setEditing(isEditing: boolean): void {
    this.editing = isEditing;
    if (!this.farmerForm) {
      return;
    }
    if (this.editing) {
      this.farmerForm.enable();
    }
    else {
      this.farmerForm.disable();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes
      && changes.searchParams
      && changes.searchParams.currentValue !== changes.searchParams.previousValue
    ) {
      this.getFarmers();
    }
  }

  onPartnerSelected(): void {
    this.setEditing(true);
    this.partnerSelectedEvent.emit(this.editing);
  }

  hasFarmers(): boolean {
    return !!this.farmer;
  }

  getFarmers(): void {
    this.farmerSearchAbstractProvider.searchFarmers(this.searchParams).then(farmers => {
      this.farmer = farmers && farmers[0] ? farmers[0] : null;
      this.setDetailForm();
    });
  }
}
