import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  visibleVar: boolean = false
  theme = '1'
  currentClass =
    [
      { text: 'White Theme', value: '1' },
      { text: 'Black Theme', value: '2' },
      { text: 'Grey Theme', value: '3' },
    ]

  constructor() { }

  ngOnInit(): void {
  }

  visible() {
    this.visibleVar = true
  }

}
