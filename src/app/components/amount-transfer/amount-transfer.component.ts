import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TransactionDataService } from '../../services/transaction-data.service';

@Component({
  selector: 'app-amount-transfer',
  templateUrl: './amount-transfer.component.html',
  styleUrls: ['./amount-transfer.component.scss']
})
export class AmountTransferComponent implements OnInit {
  transactionForm: FormGroup;
  accountsList: Array<any> = [];
  totalAmount: number;

  @Output() amountTransfer = new EventEmitter(); 

  constructor(
    private fb: FormBuilder, 
    private transactionDataService: TransactionDataService) { }

  ngOnInit(): void {
    this.transactionForm = this.fb.group({
      toAccount: new FormControl('', Validators.required),
      transferAmount: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]/)]),
    });
    this.transactionDataService.getAllTransactionsList().subscribe((res) => {
      res.data.forEach(element => {
        this.accountsList.push(element.merchant.name);
      });
    }, (error) => {
      console.log("error", error);
    });
    this.transactionDataService.amount.subscribe((res) => {
      this.totalAmount = res;
    }, (error) => {
      console.log("error", error);
    });
  }

  moneyTransfer() {
    const data = {
      account: this.transactionForm.controls.toAccount.value,
      amount: this.transactionForm.controls.transferAmount.value
    };
    const validAmount = this.totalAmount - parseInt(data.amount);
    if(validAmount < 500) {
      alert(`You can't transfer the money in ${data.account} account due to insufficent balance in Free Checking account`);
      return
    } else {
      if(confirm("Are you sure, you want to transfer $" + data.amount + " in your account " + data.account)) {
        this.amountTransfer.emit(data);
        this.totalAmount = this.totalAmount - parseInt(data.amount);
        this.transactionForm.reset();
        this.transactionForm.controls.toAccount.setValue('');
      }
    }
  }
}
