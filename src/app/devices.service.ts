import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from './product/product';
import { Products } from './home/products'


@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(private http: HttpClient) { }

  private _deviceUrl: string = "/assets/data/devices.json";
  private _productUrl: string = "/assets/data/product.json";

  getDeviceData(): Observable<Device[]> {
    return this.http.get<Device[]>(this._deviceUrl);
  }

  getProductData(): Observable<Products[]> {
    return this.http.get<Products[]>(this._productUrl)
  }
}
