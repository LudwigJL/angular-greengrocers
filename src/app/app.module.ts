import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './products/list/list.component';
import { AddComponent } from './products/add/add.component';
import { CartComponent } from './products/cart/cart.component';
import { RemoveComponent } from './products/remove/remove.component';
import { TotalComponent } from './products/total/total.component';

@NgModule({
  declarations: [AppComponent, ListComponent, AddComponent, CartComponent, RemoveComponent, TotalComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
