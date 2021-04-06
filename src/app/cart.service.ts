import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  sharedData : number;
  items = [];
  cartcount = 0;
  
  setCartValue = new Subject<any>();
  
  getCartLength() {
    return this.setCartValue.asObservable();
  }
  addToCart(product) {
    this.cartcount = this.items.length + 1;
    this.items.push(product);
    this.setCartValue.next(this.cartcount);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor( private http: HttpClient ) { }
}
