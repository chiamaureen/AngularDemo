import { Component, Input, OnInit } from '@angular/core';
import { TodoData } from 'src/app/interface/todo-data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardData: {
    userId: number,
    id: number,
    title: string,
    body: string
  } = {
      userId: 0,
      id: 0,
      title: '',
      body: ''
  };

  constructor() { }

  ngOnInit(): void {
    // console.log('cardData',this.cardData);
  }

}
