import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() { }
  @Input() values: number = 0
  
  @Output() getValues = new EventEmitter<string>()
  
  ngOnInit(): void {
  }
  getValue(value: string) {
    this.getValues.emit(value);
  }
}
