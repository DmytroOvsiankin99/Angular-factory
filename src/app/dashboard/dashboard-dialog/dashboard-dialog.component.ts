import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dashboard-dialog.component.html',
  styleUrls: ['./dashboard-dialog.component.scss']
})

export class DashboardDialogComponent implements OnInit {
  selected: string = this.data.track.componentName || ''
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
    const width = this.data.track.width
    this.list.map(el => {
      if(el.forWidth !== width){
        el.disabled = true
      }
    })
  }

  onApplyClick(): void {
    const newObj = {selected: this.selected,  id:  this.data.track.id}
    this.dialogRef.close(newObj)
  }

  onCloseClick() {
    this.dialogRef.close()
  }
}