import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Farmer } from '../model/Farmer';
import { FarmerSearchAbstractProvider } from '../providers/farmer-search.abstract';
import { SearchParams } from '../model/Farmer/search-params';
import { farmersMock } from '../mocks/farmers.mock';

@Injectable({
  providedIn: 'root',
})
export class FarmersService implements FarmerSearchAbstractProvider {
  private url = '/farmers';
  constructor(private http: HttpClient) {
  }

  searchFarmers(searchParams: SearchParams): Promise<Farmer[]> {
    return new Promise((resolve) => resolve(
      farmersMock.filter(
        n =>  searchParams ? n.name.toLowerCase().indexOf(searchParams.name.toLowerCase()) !== -1 : true
      )));
  }
}
