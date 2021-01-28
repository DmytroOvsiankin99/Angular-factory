import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AutocompleteService } from 'src/app/services/autocomplete.service';

@Component({
  selector: 'app-autocompelete-data',
  templateUrl: './autocompelete-data.component.html',
  styleUrls: ['./autocompelete-data.component.scss']
})
export class AutocompeleteDataComponent implements OnInit, OnChanges {
  @Input() str!: string;
  @Output()  addItemEvent = new EventEmitter();
  data: any = [];
  currentData: any = [];
  list: Array<any> = [];


  constructor(private autocompleteService: AutocompleteService) { }

  ngOnChanges() {
    this.mapData();
  }

  ngOnInit() {
    this.autocompleteService.getData().subscribe(data => {
      this.data = data;
    });

    this.data.forEach(el => {
      el.strForComplete = el.city.split('');
    });
  }

  mapData() {
    this.currentData = [];
    const str = { lenght: this.str.length, text: this.str.toLowerCase() };
    this.data.forEach(el => {
      const currentWord = el.strForComplete.slice(0, str.lenght).join('').toLowerCase();
      if (str.text === currentWord) {
        this.currentData.push(el);
      };
    });
  }

  addItem(item){
    this.addItemEvent.emit(item);
  }

}
