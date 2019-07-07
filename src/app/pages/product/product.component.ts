import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  itemIndex = 0;
  isHidden = false;
  display = 'none';
  items = ['item 1', 'item 2', 'item 3'];
  qty: number = 1;

  constructor() { }

  ngOnInit() {
  }

  getItem(index: number) {
    this.toggleStyle();
    return this.itemIndex = index;
  }

  toggleStyle() {
    this.isHidden = !this.isHidden;
    this.display = this.isHidden ? 'block' : 'none';
  }

  onIncreaseQty() {
    if (this.qty < 100) {
      this.qty ++;
    }
    console.log('triggered inc');
  }

  onDecreaseQty() {
    if (this.qty != 1) {
      this.qty --;
    }
    console.log('triggered dec');
  }

}
