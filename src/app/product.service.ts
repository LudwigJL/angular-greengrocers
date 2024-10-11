import { Injectable } from '@angular/core';
import { Item } from './models/item';
import { ITEMS } from './products/data/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private items: Item[] = ITEMS;


  public getAllItems(): Item[] {
    return this.items;
  }

  
}
