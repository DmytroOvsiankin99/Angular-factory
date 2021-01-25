import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  // create 3 input and after submit in right up part screen, we must see pop-up with our data(from input)
  checkoutForm = this.fb.group({
    name: '',
    address: '',
    subscriber: true,
  });
  constructor(
    private fb: FormBuilder,
    private formGroup: FormGroup) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.checkoutForm.value)
  }
}
