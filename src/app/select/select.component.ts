import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  constructor() { }
  @Input() defaulSelectItem: string = ''
  @Output() getValues = new EventEmitter<string>()
  SelectOption = [
    {name: 'UAH'},
    {name: 'USD'},
    {name: 'EUR'}
  ]
  
  ngOnInit(): void {
  }
  getValue(value: string) {
    this.getValues.emit(value);
  }
}
