import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from './product/product';


@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(private http: HttpClient) { }

  private _url: string = "/assets/data/devices.json";

  getDeviceData(): Observable<Device[]> {
    return this.http.get<Device[]>(this._url);
  }
}
