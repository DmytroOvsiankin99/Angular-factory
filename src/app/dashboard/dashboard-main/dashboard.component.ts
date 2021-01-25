import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ChangeDetectorRef,
  ComponentFactoryResolver,
  AfterViewInit,
} from '@angular/core';

import { DashboardOutletDirective } from '../dashboard-outlet.directive';
import { Item } from '../../interfaces/item';
import { dashboardCards } from '../dashboard-cards';
import { DashboardService } from '../../services/dashboard.service';
import { DashboardCardComponent } from '../dashboard-card/dashboard-card.component';
import { MatDialog } from '@angular/material/dialog';
import { DashboardDialogComponent } from '../dashboard-dialog/dashboard-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChildren(DashboardOutletDirective) dashboardOutlet!: QueryList<DashboardOutletDirective>;

  tracks: Array<Item> = [];

  constructor(
    private cd: ChangeDetectorRef,
    private cfr: ComponentFactoryResolver,
    private dashboardService: DashboardService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getTracks()
  }

  ngAfterViewInit() {
    this.loadContents();
  }

  getTracks() {
    if (!localStorage.getItem('dashboardData'))
      this.tracks = this.dashboardService.dashboardDefaultState
    else
      this.tracks = JSON.parse(localStorage.getItem('dashboardData') || '')
  }

  loadContents = () => {
    if (!this.dashboardOutlet || !this.dashboardOutlet.length) {
      return;
    }

    this.dashboardOutlet.forEach(template => {
      this.cd.detectChanges();
      this.loadContent(template, template.item);
    });
    this.cd.detectChanges();
  };

  loadContent = (template: DashboardOutletDirective, item: Item) => {
    if (!item.componentNames) {
      return;
    }
    const viewContainerRef = template.viewContainerRef;
    viewContainerRef.clear();
    for (const el of item.componentNames) {
      const componentFactory = this.cfr.resolveComponentFactory(dashboardCards[el]);
      viewContainerRef.createComponent(componentFactory);
    }
  };

  openDialog(track) {
    const dialogRef = this.dialog.open(DashboardDialogComponent, {
      data: {
        track: track
      },
      width: '60vh',
    });

    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        return
      }
      
      for (const item of this.tracks) {
        if (item.id === res[0].id) {
          this.updateDashboardItem(item, res[1])
        }
      }
    });
  }

  updateDashboardItem(item, res) {
    item.componentNames = JSON.parse(JSON.stringify(res.componentNames))
    this.loadContents()
    localStorage.setItem('dashboardData', JSON.stringify(this.tracks))
  }

}
