import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {
  
  @Input('image') imageURL: string;
  @Input('category') categoryTitle: string;
  @Input('message') categoryMsg: string;

  constructor() { }

  ngOnInit() {
  }

}
