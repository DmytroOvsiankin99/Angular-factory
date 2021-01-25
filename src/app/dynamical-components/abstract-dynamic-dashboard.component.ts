import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'abstract-dynamic-dashboard',
  templateUrl: './abstract-dynamic-dashboard.component.html',
  styleUrls: ['./abstract-dynamic-dashboard.component.scss'],
})
export class AbstractDynamicContainer implements OnInit {
  @Input() name;

  constructor() {}

  ngOnInit() {}
}
