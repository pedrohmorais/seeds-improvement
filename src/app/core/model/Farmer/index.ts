import { Address } from '../Address';
import { Document } from '../Document';

export interface Farmer {
  id: string;
  document: Document;
  name: string;
  address: Address;
}
