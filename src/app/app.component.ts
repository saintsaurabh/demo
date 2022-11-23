import { Component, OnInit } from '@angular/core';
import { AddCartService } from './Service/add-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo-project';

  public totalItem : number = 0;

  constructor(private _addcartService: AddCartService) {}

  ngOnInit(): void {
    this._addcartService.getProducts()
      .subscribe(res => this.totalItem = res.length);
  }

}
