import { Address } from '../Address';

export interface Farmer {
  id: string;
  document: Document;
  name: string;
  address: Address;
}
