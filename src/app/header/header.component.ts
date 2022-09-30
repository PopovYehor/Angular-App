import { CurrencyRateService } from '../services/rate/currency-rate.service';
import { Component, OnInit } from '@angular/core';
import { forkJoin} from 'rxjs';
import { IRequestRate } from '../interface/interfase';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public Rate: CurrencyRateService) {}
  
  ngOnInit(): void {
    forkJoin<IRequestRate>({
      USD: this.Rate.getRateTo('USD'),
      EUR: this.Rate.getRateTo('EUR')
    })
  }
}
