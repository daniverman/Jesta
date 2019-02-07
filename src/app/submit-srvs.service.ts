import {Injectable} from '@angular/core';
import {Observable, Subject, Subscription} from 'rxjs/index';


@Injectable({providedIn: 'root'})
export class SubmitData {
  data = {
    from_address: new Subject(),
    from_lat: new Subject(),
    to_lat: new Subject(),
    from_long: new Subject(),
    to_long: new Subject(),
    to_address: new Subject(),
    box_x_cm: new Subject(),
    box_x: new Subject(),
    box_y: new Subject(),
    box_y_cm: new Subject(),
    box_checkbox: new Subject(),
    additional_info: new Subject(),
    price: new Subject()
  };
  data_string = {
    from_address: '',
    from_lat: '',
    to_lat: '',
    from_long: '',
    to_long: '',
    to_address: '',
    box_x_cm: '',
    box_x: '',
    box_y: '',
    box_y_cm: '',
    box_checkbox: '',
    additional_info: '',
    price: '',
  };

  constructor() {

  }


  set_data(key, value) {
    this.data[key].next(value);
    this.data_string[key] = value
  }

  get_data(key): Observable<any> {
    return this.data[key].asObservable()
  }

  get_data_string(key): string {
    return this.data_string[key];
  }
}
