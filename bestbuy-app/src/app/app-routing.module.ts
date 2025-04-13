import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { InteriorProductComponent } from './components/interior-product/interior-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, //ok
  { path: 'all-products', component: AllProductsComponent }, //ok
  { path: 'product-categories/:category', component: ProductCategoriesComponent }, //??
  { path: 'interior-product/:id', component: InteriorProductComponent },//ok
  { path: '**', redirectTo: '' } // Redirect to home for any unknown route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }