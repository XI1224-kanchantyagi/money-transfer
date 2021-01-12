import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionDataService {
  amount: BehaviorSubject<number>;

  constructor(private http: HttpClient) { 
    this.amount = new BehaviorSubject<number>(5824.76);
  }

  getAllTransactionsList() {
    const url = '../../assets/transactions.json';
    return this.http.get<any>(url, { responseType: 'json' });
  }

}
