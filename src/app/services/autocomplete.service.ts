import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutocompleteService {
  getData() : Observable<any> {
      return of(this.data);
  };

  data: any = [
    { 'id': '1', 'city': 'Kharkiv' },
    { 'id': '2', 'city': 'Kharkiv' },
    { 'id': '3', 'city': 'Kyiv' },
    { 'id': '4', 'city': 'kDonetsk' },
    { 'id': '5', 'city': 'kA' },
    { 'id': '6', 'city': 'Ks' },
    { 'id': '7', 'city': 'kl' }
  ];


}