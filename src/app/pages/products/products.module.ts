import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { SubComponentsModule } from '../../sub-components/sub-components.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SubComponentsModule
  ],
  exports: [
    ProductsComponent,
  ]
})
export class ProductsModule { }
