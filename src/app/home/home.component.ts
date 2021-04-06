import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  products = [

      {
          "id":9090,
          "name":"Item1",
          "price":200,
          "discount":10,
          "type":"fiction",
          "img_url":"https://via.placeholder.com/150"
      },
      {
          "id":9091,
          "name":"Item2",
          "price":250,
          "discount":15,
          "type":"literature",
          "img_url":"https://via.placeholder.com/150"
      },
      {
          "id":9092,
          "name":"Item3",
          "price":320,
          "discount":5,
          "type":"literature",
          "img_url":"https://via.placeholder.com/150"
      },
      {
          "id":9093,
          "name":"Item4",
          "price":290,
          "discount":0,
          "type":"thriller",
          "img_url":"https://via.placeholder.com/150"
      },
      {
          "id":9094,
          "name":"Item5",
          "price":500,
          "discount":25,
          "type":"thriller",
          "img_url":"https://via.placeholder.com/150"
      },
      {
          "id":9095,
          "name":"Item6",
          "price":150,
          "discount":5,
          "type":"literature",
          "img_url":"https://via.placeholder.com/150"
      },
      {
          "id":9096,
          "name":"Item7",
          "price":700,
          "discount":22,
          "type":"literature",
          "img_url":"https://via.placeholder.com/150"
      },
      {
          "id":9097,
          "name":"Item8",
          "price":350,
          "discount":18,
          "type":"fiction",
          "img_url":"https://via.placeholder.com/150"
      }

  ];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(products: any) {
    this.cartService.addToCart(products);
    //window.alert('Your product has been added to the cart! ' + this.cartService.cartcount);
  }

  ngOnInit(): void {}

}
