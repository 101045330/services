import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  // Define properties for the component
  tvs: Product[] = [];
  computers: Product[] = [];
  appliances: Product[] = [];


   
  constructor(private productService: ProductService) {
    // Constructor logic here
  }

  ngOnInit() {
    // Initialization logic here
    this.tvs = this.productService.mgGetProductsByCategory('TVs');
    this.computers = this.productService.mgGetProductsByCategory('Computers');
    this.appliances = this.productService.mgGetProductsByCategory('Appliances');

    //log to test
      // console.log(this.tvs);
      // console.log(this.computers);
      // console.log(this.appliances);
  }

  ngOnDestroy() {
    // Cleanup logic here
    this.tvs = [];
    this.computers = [];
    this.appliances = [];
  }

}
