import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {User} from "../admin-layout/users/users.service";

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css'],
    inputs: ['data']
})
export class CustomCardComponent implements OnInit {

    @Input()
    data: User

    @Output()
    removeClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

    removeCard() {
        this.removeClicked.emit(this.data);
    }
}
