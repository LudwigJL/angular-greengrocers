import { Component, inject } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  productService = inject(ProductService)

  items: Item[] = this.productService.getAllItems()
}
