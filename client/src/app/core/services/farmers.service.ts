import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Farmer } from '../model/Farmer';
import { FarmerSearchAbstractProvider } from '../providers/farmer-search.abstract';
import { SearchParams } from '../model/Farmer/search-params';

@Injectable({
  providedIn: 'root',
})
export class FarmersService implements FarmerSearchAbstractProvider {
  private url = 'http://localhost:3000/api/farmers';
  constructor(private http: HttpClient) {
  }

  searchFarmers(searchParams: SearchParams): Promise<Farmer[]> {
    const params =  searchParams ? {
      id: searchParams.id,
      name: searchParams.name,
    } : null;
    return this.http
      .get<Farmer[]>(`${this.url}`, { params })
      .toPromise();
  }
}
