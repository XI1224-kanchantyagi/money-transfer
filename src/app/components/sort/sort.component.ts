import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  sortingTable: Array<string> = ['Date','Beneficiary','Amount'];

  @Output() sortedElement = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

  sortData(event) {
    this.sortedElement.emit(event);
  }

}
