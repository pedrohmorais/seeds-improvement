import { Injectable } from '@angular/core';
import { Farmer } from '../../model/Farmer';
import { FarmerSearchAbstractProvider } from '../../providers/farmer-search.abstract';
import { SearchParams } from '../../model/Farmer/search-params';
import { farmersMock } from '../farmers.mock';

@Injectable({
  providedIn: 'root',
})
export class FarmerSearchAbstractProviderMock implements FarmerSearchAbstractProvider {
  constructor() {
  }

  searchFarmers(searchParams: SearchParams): Promise<Farmer[]> {
    const checkFarmerBySearchParams = (farmer: Farmer): boolean => {
      if (!searchParams) {
        return true;
      }
      if (
        farmer
        && (
          farmer.name.toLowerCase().indexOf(searchParams.name.toLowerCase()) !== -1
          || (
            farmer.document.documentNumber
            && farmer.name.indexOf(searchParams.id) !== -1
          )
        )
      ) {
        return true;
      }

      return false;
    };

    return new Promise(resolve =>
      resolve(
        farmersMock.filter(farmer => checkFarmerBySearchParams(farmer))
      )
    );
  }
}
