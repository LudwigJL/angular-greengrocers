import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { RemoveComponent } from './remove/remove.component';
import { TotalComponent } from './total/total.component';
import { CartComponent } from './cart/cart.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AddComponent,
    
    RemoveComponent,
    TotalComponent,
    CartComponent,
    ItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
