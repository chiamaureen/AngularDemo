import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { TodoData } from '../../interface/todo-data';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})

export class ListPageComponent implements OnInit {
  
  // todoList: [] = [];
  // todoList: any[] = []; // 正確指定型別為 any[]
  todoList: TodoData[] = [];


  constructor(private dataService:DataService) { 
  }

  ngOnInit(): void {
    this.dataService.getApiData().subscribe(data => this.todoList = data.slice(0, 15));
  }

  onCardDataChanged(updatedData: any) {
    console.log('Card data changed:', updatedData);
    const index = this.todoList.findIndex(x => x.id === updatedData.id);
    if (index != -1) this.todoList[index].title = updatedData.title;
  }

}
