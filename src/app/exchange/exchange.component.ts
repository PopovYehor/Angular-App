import { Component, OnInit} from '@angular/core';
import { CurrencyRateService } from './../currency-rate.service';
import { Selected } from '../interface/interfase';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  
  constructor(public Rate : CurrencyRateService) { }
  
  SelectOption = [
    {name: 'USD'},
    {name: 'UAH'},
    {name: 'EUR'}
  ]
  SelectItem: Selected = {
    first: 'UAH',
    second: 'USD'
  }

  getInputValue(value: string, flag?: boolean): void{
    if (value == '0' || String(Number(value)) == "NaN" || value == '') value = '0';
    if(!flag){
      this.Rate.first = Number(value)
      this.Rate.getSelectRate(this.SelectItem.first, this.SelectItem.second)
    }
    else{
      this.Rate.second = Number(value)
      this.Rate.getSelectRate(this.SelectItem.second, this.SelectItem.first, true)
    }
  }
  
  ngOnInit(): void {
    this.Rate.getSelectRate(this.SelectItem.first, this.SelectItem.second)
  }
  
  getValueSelect(value: string, flag?: boolean): void {
    if (!flag){
      this.SelectItem.first = value
      this.Rate.getSelectRate(value, this.SelectItem.second)
    }else{
      this.SelectItem.second = value
      this.Rate.getSelectRate(value, this.SelectItem.first, true)
    }
  } 
  
}
