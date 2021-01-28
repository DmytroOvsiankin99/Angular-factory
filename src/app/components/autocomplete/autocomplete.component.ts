import {  Component,    ElementRef,    OnInit, ViewChild, } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  @ViewChild('inputRef') input : ElementRef;
  autocompleteChanges: string = '';
  list: any = [];
  data = [];

  constructor() { }

  ngOnInit(): void {
  }

  addItemEvent(item) {
    this.input.nativeElement.value = '';
    this.input.nativeElement.focus();
    this.list.push(item);
    this.list = this.list.filter((el, index, list) =>
      index === list.findIndex((t) => (
      t.city === el.city
      ))
    );
    this.autocompleteChanges = ''
  };

  removeItem(item) {
    this.list.forEach((el, index) => {
      if (el.id === item.id) {
        this.list.splice(index, 1);
      };
    });
  }

}