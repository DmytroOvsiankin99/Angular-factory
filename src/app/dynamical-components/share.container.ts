import { Component } from '@angular/core';

import { DashboardCardComponent } from '../dashboard/dashboard-card/dashboard-card.component';

@Component({
  template: `
    <abstract-dynamic-dashboard [name]="name"></abstract-dynamic-dashboard>
  `,
})
export class ShareConteiner extends DashboardCardComponent {
  name;

  constructor() {
    super();
    this.name ='share';
  }
}
