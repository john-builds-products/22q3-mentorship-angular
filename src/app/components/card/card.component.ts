import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data: any;
  JSON;
  objectKeys = Object.keys;

  constructor() { 
    this.JSON = JSON;
  }

  ngOnInit(): void {
    console.log(this.data)

  }

}
