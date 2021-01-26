import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  form

  // create 3 input and after submit in right up part screen, we must see pop-up with our data(from input)
  
  constructor() { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      subscriber: new FormControl('', [Validators.required]),
    })
  }

  submit(){
    console.log(this.form.value)
  }
}
