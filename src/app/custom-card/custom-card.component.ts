import { Component, OnInit, Input } from '@angular/core';
import {User} from "../app.component";

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css'],
    inputs: ['data']
})
export class CustomCardComponent implements OnInit {

    @Input()
    data: User

  constructor() { }

  ngOnInit() {
  }

}