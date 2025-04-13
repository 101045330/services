import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product.model';
@Component({
  selector: 'app-product-categories',
  standalone: false,
  templateUrl: './product-categories.component.html',
  styleUrl: './product-categories.component.scss'
})
export class ProductCategoriesComponent {
  category: string = 'TVs';
  products: Product[] = [];
  constructor(private route: ActivatedRoute, private productService: ProductService) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.products = this.productService.mgGetProductsByCategory(this.category);
    });
  }
}
