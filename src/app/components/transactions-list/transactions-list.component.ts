import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TransactionDataService } from '../../services/transaction-data.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit, OnChanges {
  transactionsList: Array<any> = [];
  oldTransactionsList: Array<any> = [];
  dateSort: string = 'ASC';
  searchElement: string;

  @Input() transactionDetail: any;

  constructor(private transactionDataService: TransactionDataService) { }

  ngOnChanges() {
    this.transactionsList?.forEach((element) => {
      if(element.merchantName === this.transactionDetail.account) {
        element.amount = parseInt(element.amount) + parseInt(this.transactionDetail.amount);
      }
    })
  }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.transactionDataService.getAllTransactionsList().subscribe((res) => {
      res.data.forEach(element => {
        this.transactionsList.push(
          {
            categoryCode: element.categoryCode,
            date: element.dates.valueDate,
            imgPath: element.merchant.name.toLowerCase().split(" ").join("-"),
            merchantName: element.merchant.name,
            merchantType: element.transaction.type,
            amount: element.transaction.amountCurrency.amount*1.22
          }
        );
      });
    }, (error) => {
      console.log(error, "error");
    })
  }

  searchAccount(event) {
    let val = event.toLowerCase();
    this.transactionsList = this.transactionsList.filter((element) => {
      return element.merchantName.toLowerCase().includes(val);
    });
  }

  resetTransactionList() {
    this.init();
  }

  sortingList(event) { 
    switch (event) {
      case 'Date':
        if(this.dateSort === 'ASC') {
          this.transactionsList.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
          this.dateSort = 'DSC'
        } else {
          this.transactionsList.sort((a,b) => (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0));
          this.dateSort = 'ASC'
        }
        break;
      case 'Beneficiary':
        this.transactionsList.sort((a,b) => (a.merchantName > b.merchantName) ? 1 : ((b.merchantName > a.merchantName) ? -1 : 0));
        break;
      case 'Amount':
        this.transactionsList.sort((a,b) => (a.amount > b.amount) ? 1 : ((b.amount > a.amount) ? -1 : 0));
        break;
      default:
        break;
    }
  }
}
