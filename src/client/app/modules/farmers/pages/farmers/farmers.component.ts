import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { FarmersService } from 'src/client/app/core/services/farmers.service';
import { Farmer } from 'src/client/app/core/model/Farmer';
import { FarmerSearchAbstractProvider } from 'src/client/app/core/providers/farmer-search.abstract';
import { SearchParams } from 'src/client/app/core/model/Farmer/search-params';

@Component({
  selector: 'farmer-farmers',
  templateUrl: './farmers.component.html',
  styleUrls: ['./farmers.component.scss']
})
export class FarmersComponent implements OnInit {

  farmer: Farmer;
  farmerSearch: FarmerSearchAbstractProvider;
  farmerSelected = false;
  searchForm: FormGroup;
  searchParams: SearchParams;

  constructor(
    private farmersService: FarmersService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.farmerSearch = this.farmersService;
    this.searchForm = this.formBuilder.group({
      search: this.formBuilder.control(''),
    });
    this.searchForm.controls.search.valueChanges.pipe(
      debounceTime(500),
    ).subscribe(change => {
      this.setSearchParams(change);
    });
  }

  setSearchParams(search: string): void {
    this.searchParams = {
      id: search,
      name: search,
    };
  }

  onSelectFarmer(ev: boolean): void {
    this.farmerSelected = ev;
  }
}
