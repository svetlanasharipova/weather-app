import { Hotel, HOTELS$ } from './../../hotels';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public hotels$: Observable<Hotel[]>;

  @Output()
  public hotelChanged: EventEmitter<Hotel> = new EventEmitter();

  public selectedHotel: Hotel;
  public selectedType = 'hotel';

  public hotelTypes: string[] = ['Hotel', 'Fishing', 'Tours', 'Weather'];

  constructor() {
  }

  ngOnInit() {

    this.hotels$ = HOTELS$;
    HOTELS$.subscribe(hotels => {
      this.selectedHotel = hotels.find(x => x.type === this.selectedType);
      this.hotelChanged.emit(this.selectedHotel);
    });
  }

  hotelClicked(h: Hotel): void {
    this.selectedHotel = h;
    this.hotelChanged.emit(this.selectedHotel);
  }
}
