import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SubComponentsModule } from '../../sub-components/sub-components.module';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SubComponentsModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
