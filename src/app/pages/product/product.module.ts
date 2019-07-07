import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { AppRoutingModule } from '../../app-routing.module';
import { SubComponentsModule } from '../../sub-components/sub-components.module';

@NgModule({
  declarations: [
    ProductComponent,
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SubComponentsModule,
  ],
  exports: [
    ProductComponent,
  ]
})
export class ProductModule { }
