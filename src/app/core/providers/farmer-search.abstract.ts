import { Farmer } from '../model/Farmer';
import { SearchParams } from '../model/Farmer/search-params';

export declare abstract class FarmerSearchAbstractProvider {
  abstract searchFarmers(params: SearchParams): Promise<Farmer[]>;
}
