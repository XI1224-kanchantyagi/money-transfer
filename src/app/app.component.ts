import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  transactionDetail: Object;

  amountTransfer(event) {
    this.transactionDetail = event;
  }

}
