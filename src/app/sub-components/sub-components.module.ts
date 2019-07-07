import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ViewAllProductsComponent,
    ProductCategoryComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    ProductDetailComponent,
    ViewAllProductsComponent,
    ProductCategoryComponent
  ]
})
export class SubComponentsModule { }
