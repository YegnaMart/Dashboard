import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  constructor() { }
  currentPage: number = 1;
  array:any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  selectedSort: number;

  sorts = [
      { id: 1, name: 'Random' },
      { id: 2, name: 'Up' },
      { id: 3, name: 'Down' }
  ];
  
  public onChange(value: any) {
    console.log("changed_value_", value);
  }

  ngOnInit(): void {
  }

}
