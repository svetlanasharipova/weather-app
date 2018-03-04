import { Component, OnInit, Input } from '@angular/core';
import { Social } from '../../hotels';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  @Input()
  public socialinfo: Social;
  constructor() { }

  ngOnInit() {
  }

}
