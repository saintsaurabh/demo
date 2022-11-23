import { Component, Input, OnInit } from '@angular/core';
import { AddCartService } from 'src/app/Service/add-cart.service';
import { DevicesService } from 'src/app/Service/devices.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  devices : any;

  constructor(private _devicesService: DevicesService,
    private _addcartService: AddCartService
    ) {}

  ngOnInit(): void {
    this._devicesService.getDeviceData()
      .subscribe(data => {
        this.devices = data;

        this.devices.forEach((dev:any) => {
          Object.assign(dev,{quantity:1,total:dev.price});
        });
      });
  }

  addtocart(item: any) {
    this._addcartService.addtoCart(item);
  }
  
}
