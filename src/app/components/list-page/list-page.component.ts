import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PostData } from '../../interface/post-data';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})

export class ListPageComponent implements OnInit {
  
  // postList: [] = [];
  // postList: any[] = []; // 正確指定型別為 any[]
  postList: PostData[] = [];

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getApiData().subscribe(data => this.postList = data.slice(0,50));
  }

}
