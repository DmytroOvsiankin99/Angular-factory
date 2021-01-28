import { Component, OnInit } from '@angular/core';
import { GridTableService } from 'src/app/services/grid-table.service';

@Component({
  selector: 'app-grid-table',
  templateUrl: './grid-table.component.html',
  styleUrls: ['./grid-table.component.scss']
})
export class GridTableComponent implements OnInit {
  data: any = []
  settings: any = []

  constructor(private gridTableService: GridTableService) { }

  ngOnInit(): void {
    this.gridTableService.getSerrings().subscribe(el => this.settings = el)
    this.gridTableService.getDataGrid().subscribe(el => this.data = el)
    this.parseData()
  }

  parseData() {
    console.log(this.data, this.settings)
    this.data.forEach(el => {

    })
  }

}
