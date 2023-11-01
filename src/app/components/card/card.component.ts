import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoData } from 'src/app/interface/todo-data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  // 可以設定預設值
  @Input() cardData: TodoData = {
    userId: 0,
    id: 0,
    title: '',
    completed: false
  };

  // 外部一定要傳遞一個值不然會出錯、不能設定預設值
  // @Input()
  // cardData!: TodoData;
  
  editItem: string = '';

  @Output() newItemEvent = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
    // console.log('cardData',this.cardData);
  }

  display: boolean = false;

  showEditDialog() {
    this.editItem = JSON.parse(JSON.stringify(this.cardData.title));
    this.display = true;
  }

  editData (value: string) {
    const newObj = {
      id: this.cardData.id,
      title: value
    } 
    this.newItemEvent.emit(newObj);
    this.display = false;
  }

}
