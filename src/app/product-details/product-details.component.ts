import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {products} from '../products'; 
import {CartService} from '../cart.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;

  constructor(
    private root : ActivatedRoute,
    private cartService : CartService
    ) {}

  ngOnInit() {

    this.root.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }
  
  addToChart(){
    this.cartService.addToChart(this.product);
    window.alert("Product has been successfuly added to cart");
  }

}