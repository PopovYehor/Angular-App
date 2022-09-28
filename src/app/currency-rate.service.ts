import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CurrencyRateService {

  constructor(private http: HttpClient) { }
  
  key = 'N5RENxgcnWtJnwVfQRDRGYdpej7qkgJE'
  rateUrl: string = `https://api.exchangerate.host/latest?access_key=${this.key}&base=`

  toUSD: number = 0
  toEUR: number = 0

  first: number = 1000
  second: number = 0

  getRateTo(base: string){
    return fetch(this.rateUrl+base).then(res=>res.json()).then(res=>{
      base == 'USD' ? this.toUSD = res.rates.UAH : this.toEUR = res.rates.UAH
    })
  }
  getSelectRate(base: string, value: string, flag? : boolean){
    return fetch(this.rateUrl+base).then(res=>res.json()).then(res=>{
      !flag ? this.second =  Number((this.first * res.rates[value]).toFixed(2)) : this.first = Number((this.second * res.rates[value]).toFixed(2))
    })
  }
}
