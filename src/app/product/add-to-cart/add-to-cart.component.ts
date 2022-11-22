import { Component, OnInit } from '@angular/core';
import { AddCartService } from 'src/app/add-cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;

  constructor(private _addcartService: AddCartService) { }

  ngOnInit(): void {
    this._addcartService.getProducts()
      .subscribe(res => {
        this.products = res;
        this.grandTotal = this._addcartService.getTotalPrice();})
  }

  removeItem(item: any) {
    this._addcartService.removeCartItem(item);
  }

  emptycart() {
    this._addcartService.removeAllCart();
  }

}
