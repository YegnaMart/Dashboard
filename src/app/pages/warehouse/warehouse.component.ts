import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  constructor(private httpService : HttpService) { }
  currentPage: number = 1;
  array:any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  selectedSort: number;
  warehouses = [];

  warehouseImages = [
    "../../../assets/params/images/imgs/warehouses/1.png",
    "../../../assets/params/images/imgs/warehouses/2.png",
    "../../../assets/params/images/imgs/warehouses/3.png"
  ]

  getImage(index){
    return this.warehouseImages[index % 3]
  }

  sorts = [
      { id: 1, name: 'Random' },
      { id: 2, name: 'Up' },
      { id: 3, name: 'Down' }
  ];
  
  public onChange(value: any) {
    // console.log("changed_value_", value);
  }

  ngOnInit(): void {
    this.httpService.getWarehouses().subscribe((resp:any) => {

      this.warehouses = resp.warehouses;
    })
  }

}
