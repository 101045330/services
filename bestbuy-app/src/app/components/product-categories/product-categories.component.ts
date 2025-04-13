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
  category: string = '';
  products: Product[] = [];
  constructor(private route: ActivatedRoute, private productService: ProductService) {}
}
