import {  Injectable } from '@angular/core';

import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  dashboardDefaultState: Array<Item> = [
    {
      componentName: '',
      id: 1,
      width: 1,
      height: 1,
      x: 1,
      y: 1
    }, 
    {
      componentName: '',
      id: 2,
      width: 2,
      height: 2,
      x: 2,
      y: 1
    },
    {
      componentName: '',
      id: 3,
      width: 1,
      height: 1,
      x: 4,
      y: 1
    }
  ];

  dashboardDialogList = [
    { componentName: 'setting', forWidth: 1, completed: false, disabled: false },
    { componentName: 'basicline', forWidth: 2, completed: false, disabled: false },
  ]

}
