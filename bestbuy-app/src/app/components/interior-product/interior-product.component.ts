import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product.model';
import { ProductCategoriesComponent } from '../product-categories/product-categories.component';

@Component({
  selector: 'app-interior-product',
  standalone: false,
  templateUrl: './interior-product.component.html',
  styleUrls: ['./interior-product.component.scss']
})
export class InteriorProductComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = Number(params['id']);
      this.product = this.productService.mgLookupProduct(productId);
    });
  }
}
