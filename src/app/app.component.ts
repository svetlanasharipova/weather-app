import { Observable } from 'rxjs/Observable';
import { Hotel } from './hotels';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public selectedHotel: Hotel;
}

