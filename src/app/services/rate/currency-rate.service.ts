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

  toUSD: number = 0
  toEUR: number = 0

  count: Count = {
    first:  1000,
    second: 1
  }
  first: number = 1000
  second: number = 1
  getRateTo(base: string){
    this.http.get<ConfigRates>(this.rateUrl+base).subscribe(data =>{
      base == 'USD' ? this.toUSD = data.rates.UAH : this.toEUR = data.rates.UAH
      })
  }
  
  getSelectRate(base: string, value: string, flag? : boolean){
    this.http.get<ConfigRates>(this.rateUrl+base).subscribe(data =>{
      !flag ? this.count.first =  Number((this.count.second * data.rates[value]).toFixed(2)) 
      : this.count.second = Number((this.count.first * data.rates[value]).toFixed(2))
    })
  }
}
