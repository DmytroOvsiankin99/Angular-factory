import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef , EventEmitter, Output, Inject} from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DashboardComponent } from 'src/app/dashboard/dashboard-main/dashboard.component';
import { SettingNotificationComponent } from '../setting-notification/setting-notification.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @ViewChild ('containerNotifications', {read: ViewContainerRef}) containerNotifications!: ViewContainerRef

  form: FormGroup

  constructor(@Inject(DashboardComponent) private parent: DashboardComponent,
    private componentFactoryResolver: ComponentFactoryResolver) {
    this.form = new FormGroup({
      name: new FormControl(''),
      address: new FormControl(''),
      remote: new FormControl('yes'),
    })
  }

  ngOnInit(): void {  
  }

  submit() {
    this.parent.create(this.form.value)
  }
}
