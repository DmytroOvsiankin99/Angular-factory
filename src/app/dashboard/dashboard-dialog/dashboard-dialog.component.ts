import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dashboard-dialog.component.html',
  styleUrls: ['./dashboard-dialog.component.scss']
})

export class DashboardDialogComponent implements OnInit {
  list: Array<any> = []

  constructor(
    private dashboardService: DashboardService,
    public dialogRef: MatDialogRef<DashboardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.list = JSON.parse(JSON.stringify(this.dashboardService.dashboardDialogList))
    this.filterList()
  }

  filterList() {
    this.data.track.componentNames.map(el => {
      this.list.map(listItem => {
        if (listItem.componentName === el) {
          listItem.completed = true
          return;
        }
      })
    })
  }

  onApplyClick(): void {
    const newArr : Array<any> = [{id : this.data.track.id}, {componentNames : []}] 
    const test = this.list.filter(el => el.completed === true).map(se=> {
      newArr[1].componentNames.push(se.componentName)
    })
    this.dialogRef.close(newArr)
  }

  onCloseClick() {
    this.dialogRef.close()
  }
}