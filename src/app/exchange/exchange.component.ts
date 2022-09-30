import { Component, OnInit, ViewChild} from '@angular/core';
import { CurrencyRateService } from '../services/rate/currency-rate.service';
import { Count, Selected } from '../interface/interfase';
import { SelectComponent } from '../select/select.component';
@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  
  constructor(public Rate : CurrencyRateService, public Select: SelectComponent) { }

  SelectItems: Selected = {
    first: 'UAH',
    second: 'USD'
  }
  
  ngOnInit(): void {
    this.Rate.getSelectRate(this.SelectItems.first, this.SelectItems.second, true)
  }

  setRate(item: string, valueCount: string, valueGetSelect: string, selectItem: string, rate: boolean, flag? : boolean){
    rate ? this.Rate.count[item as keyof Count] = Number(valueCount) 
    : this.SelectItems[item as keyof Selected] = valueCount
    this.Rate.getSelectRate(valueGetSelect, this.SelectItems[selectItem as keyof Selected],flag)
  }

  getInputValue(value: string, flag?: boolean): void{
    if (String(Number(value)) == "NaN" || value == '') value = '0';
    !flag ? this.setRate('first', value, this.SelectItems.first, 'second', true, true)
    : this.setRate('second', value, this.SelectItems.second, 'first', true)
  }

  getValueSelect(value: string, flag?: boolean): void {
    !flag ? this.setRate('first', value, value, 'second', false, true) 
    : this.setRate('second', value, value, 'first', false)
  } 
  
}
