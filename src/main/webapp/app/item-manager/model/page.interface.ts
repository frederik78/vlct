import {Item} from './item.interface';
export interface Page {
  content: Item[];
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
  size: number;
}
