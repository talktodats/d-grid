/**
 * Created by dattaram on 9/10/18.
 */
import {Component, Input, OnInit} from '@angular/core';

@Component({
 selector: 'd-row',
  template: `
    <div class="d-table-row">
      <div class="d-table-col" *ngFor="let column of columnData"  [attr.data-label]="column.label">
        {{row[column.dataKey]}}
      </div>
    </div>
  `
})

export class DRowComponent implements OnInit {

  @Input() columnData: any;

  @Input() row: any;
  constructor() {
  }

  ngOnInit() {
  }
}
