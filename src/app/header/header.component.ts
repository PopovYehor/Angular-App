import { CurrencyRateService } from '../services/rate/currency-rate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public Rate: CurrencyRateService) { }

  ngOnInit(): void {
    Promise<number>.all([this.Rate.getRateTo('USD'), this.Rate.getRateTo('EUR')])
  }
}
