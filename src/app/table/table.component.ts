import { Component, OnInit } from '@angular/core';

export interface Transaction {
  name: string;
  ngoAddress: string;
  amount: number;
  transactionId?: string;
}

const ELEMENT_DATA: Transaction[] = [
  { transactionId: '1', name: 'Sakshi', amount: 1.0079, ngoAddress: '0x123456789' },
  { transactionId: '2', name: 'Sonu', amount: 4.0026, ngoAddress: '0x987654321' },
  { transactionId: '3', name: 'Sakshi', amount: 6.941, ngoAddress: '0x6789054321' },
  { transactionId: '4', name: 'Priya', amount: 9.0122, ngoAddress: '0x987654321' },
  { transactionId: '5', name: 'Deepika', amount: 10.811, ngoAddress: '0x123456789' },
  { transactionId: '6', name: 'Harshit', amount: 12.0107, ngoAddress: '0x6789054590' },
  { transactionId: '7', name: 'Sonu', amount: 14.0067, ngoAddress: '0x6789054321' },
  { transactionId: '8', name: 'Monu', amount: 15.9994, ngoAddress: '0x6785325321' },
  { transactionId: '9', name: 'Tinku', amount: 18.9984, ngoAddress: '0x6783532321' },
  { transactionId: '10', name: 'Rahul', amount: 20.1797, ngoAddress: '0x6753054321' },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['transactionId', 'name', 'amount', 'ngoAddress'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
