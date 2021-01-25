import { Injectable } from '@angular/core';

import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  dashboardDefaultState : Array<Item> = [
    {
      componentNames: ['setting','share'],
      id: 1,
      wdith: 1,
      height: 1,
      x: 1,
      y: 4
    },
    {
      componentNames: ['setting'],
      id: 2,
      wdith: 2,
      height: 1,
      x: 2,
      y: 4
    },
    {
      componentNames: ['setting'],
      id: 3,
      wdith: 2,
      height: 1,
      x: 3,
      y: 4
    },
  ];

  dashboardDialogList  = [
    {componentName : 'setting', forWidth: 1, completed: false, disabled: false},
    {componentName : 'share', forWidth: 2, completed: false, disabled: false},
  ]
  
}
