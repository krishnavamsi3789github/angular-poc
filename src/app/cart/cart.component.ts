import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  public items  = [];
  constructor( private cartService: CartService ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    console.log(this.items);
     //this.items = this.cartService.getItems();
  }

}
