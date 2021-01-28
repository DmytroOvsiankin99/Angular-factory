import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-notification',
  templateUrl: './setting-notification.component.html',
  styleUrls: ['./setting-notification.component.scss']
})
export class SettingNotificationComponent implements OnInit {
  @Input() value 

  constructor() { }

  ngOnInit(): void {
  }

}
