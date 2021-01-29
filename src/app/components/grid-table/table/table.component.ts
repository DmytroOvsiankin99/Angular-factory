import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})


export class TableComponent {
  displayedColumns: any = [];
  dataSource: MatTableDataSource<any>;
  isLoading = false;
  columnsHeader: any = [];
  caption = false;
  private paginator: MatPaginator;
  private sort: MatSort;

  @Input() set data(data: any) {
    this.applyDataSource(data);
  }

  @Input() set columns(data: string[]) {
    this.mapColumns(data);
    this.displayedColumns = data;
  }

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.applyDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.applyDataSourceAttributes();
  }

  constructor() { }

  mapColumns(items) {
    items.forEach((el, index) => {
      if (el.caption) {
        this.columnsHeader.unshift(el.caption);
        this.caption = true
      }
      else {
        this.columnsHeader.splice(el.position || index, 0, el.dataField || el);
      };
    });
  }

  applyDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyDataSource(data: any) {
    this.dataSource = new MatTableDataSource(data);
    this.applyDataSourceAttributes();
  }

}
