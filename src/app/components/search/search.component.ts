import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchword: string;

  @Output() searchingElement = new EventEmitter<String>();
  @Output() restoreList = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

  searchItem() {
    this.searchingElement.emit(this.searchword);
  }

  restore() {
    this.searchword = "";
    this.restoreList.emit();
  }

}
