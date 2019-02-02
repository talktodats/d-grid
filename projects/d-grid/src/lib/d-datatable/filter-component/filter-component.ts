/**
 * Created by dattaram on 20/1/19.
 */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../d-datatable.service';

@Component({
   selector: 'filter-com', templateUrl: 'filter-component.html',
  styles: [
    `
      .inputgroup {
        position: relative;
      }

      .inputgroup > label {
        display: inline-block;
        margin-bottom: .5rem;
      }

      .input-control {
        width: 100%;
        padding: .375rem 0;
        line-height: 2;
        border-radius: 0px;
        border: none;
        border-bottom: 1px solid rgba(0,0,0,.42);
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
      }

      .input-control:focus {
        outline: none;
      }

      .input-control-feedback{
        position: absolute;
        bottom: 10px;
        right: 0;
        display: block;
        width: 38px;
        height: 38px;
        line-height: 38px;
        text-align: center;
        pointer-events: none;
      }
    `
  ]
})

export class FilterComponent implements OnInit {
  @Input() column: any;
  searchKey = '';
  constructor(private _dataService: DataService) {

  }
   ngOnInit() {

   }

  getSearchKey(key: string) {
    const resultArray = [];
    this._dataService.getData().filter((item) => {
    if (typeof item[this.column.dataKey] === 'string' && item[this.column.dataKey].toLowerCase().includes(key.toLocaleLowerCase())) {
      return resultArray.push(item);
    }
    });
    this._dataService.gridViewDataBehaviour.next(resultArray);
  }
}
