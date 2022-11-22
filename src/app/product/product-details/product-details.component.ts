import { Component, Input, OnInit } from '@angular/core';
import { DevicesService } from 'src/app/devices.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  devices : any;
  @Input() isNokia = false;

  constructor(private _devicesService: DevicesService) {
    this._devicesService.getDeviceData()
      .subscribe(data => this.devices = data);
   }

  ngOnInit(): void {
  }
  
}
