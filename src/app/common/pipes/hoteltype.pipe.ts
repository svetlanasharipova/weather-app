import { Hotel } from './../../hotels';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoteltype'
})
export class HoteltypePipe implements PipeTransform {

  transform(hotels: Hotel[], hoteltype: string): Hotel[] {
    if (!hoteltype) {
     hoteltype = 'hotel';
    }
    return hotels.filter((h: Hotel) =>
      h.type.toLowerCase() === hoteltype.toLowerCase());
  }
}
