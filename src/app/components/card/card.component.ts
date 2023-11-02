import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoData } from 'src/app/interface/todo-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  @Input() cardData: TodoData = {
    userId: 0,
    id: 0,
    title: '',
    completed: false
  };
  
  editItem: string = '';
  item !: TodoData;

  @Output() newItemEvent = new EventEmitter<object>();
  @Output() completeItemEvent = new EventEmitter<object>();
  
  // 表單檢查
  todoForm: FormGroup;


  constructor(private fb:FormBuilder) 
  {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // console.log('cardData',this.cardData);
  }

  display: boolean = false;

  showEditDialog() {
    // ngModel
    this.editItem = JSON.parse(JSON.stringify(this.cardData.title));
    this.item = JSON.parse(JSON.stringify(this.cardData));

    // reactive form
    this.todoForm.get('title')?.setValue(this.editItem);

    this.display = true;
  }

  editData () {
    
    console.log('this.todoForm.value',this.todoForm.value);
    if(this.todoForm.valid) {
      const newObj = {
        id: this.cardData.id,
        title: this.todoForm.value.title // reactive form
      } 
      this.newItemEvent.emit(newObj);
      this.display = false;
    }
  }

  compelteTask (value: object) {
    console.log(value);
    this.completeItemEvent.emit(value);
  }

}
