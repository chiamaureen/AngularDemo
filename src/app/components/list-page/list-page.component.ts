import { Component, OnInit } from '@angular/core';
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
    this.dataService.getApiData().subscribe(data => this.todoList = data.slice(0,50));
  }

}
