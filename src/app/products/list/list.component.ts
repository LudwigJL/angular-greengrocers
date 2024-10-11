import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  productService = inject(ProductService)
  @Output('newItem')newItem = new EventEmitter<Item>();
  
  items: Item[] = this.productService.getAllItems()

  addItem(item: Item) {
    this.newItem.emit(item);
  };

  
}


