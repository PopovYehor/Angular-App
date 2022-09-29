import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigRates, Count } from 'src/app/interface/interfase';
@Injectable({
  providedIn: 'root'
})
export class CurrencyRateService {

  constructor(private http: HttpClient) { }
  
  key = 'N5RENxgcnWtJnwVfQRDRGYdpej7qkgJE'
  rateUrl: string = `https://api.exchangerate.host/latest?access_key=${this.key}&base=`

  rateNow: Count ={
    first:  0,
    second: 0
  }

  count: Count = {
    first:  1000,
    second: 1
  }

  getRateTo(base: string){
    this.http.get<ConfigRates>(this.rateUrl+base).subscribe(data =>{
      base == 'EUR' ? this.rateNow.first = data.rates.UAH : this.rateNow.second = data.rates.UAH
      })
  }
  
  getSelectRate(base: string, value: string, flag? : boolean){
    this.http.get<ConfigRates>(this.rateUrl+base).subscribe(data =>{
      !flag ? this.count.first =  Number((this.count.second * data.rates[value]).toFixed(2)) 
      : this.count.second = Number((this.count.first * data.rates[value]).toFixed(2))
    })
  }
}
