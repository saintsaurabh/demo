import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any;

  constructor(private _deviceService: DevicesService) {
   }

  ngOnInit(): void {
    this._deviceService.getProductData()
      .subscribe(res => this.products = res);
  }

}
