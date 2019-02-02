/**
 * Created by dattaram on 3/10/18.
 */
import {
  AfterContentInit, Component, ContentChildren, EventEmitter, Input, OnInit, Output,
  QueryList
} from '@angular/core';
import {DColumnComponent} from "./d-column.component";
import {DataService} from "./d-datatable.service";

@Component({
  selector: 'd-datatable',
  templateUrl: 'd-datatable.component.html',
  styleUrls: ['d-datatable.component.css']
})

export class DDatatableComponent implements OnInit, AfterContentInit {

  @Input() gridData: any[];

  @Input() gridTitle: string;

  columnData: any[];

  aaa = 'datta';

  gridViewData: any[];

  @Output() getRowData: EventEmitter<any> = new EventEmitter<any>();

  @ContentChildren(DColumnComponent) columnRef: QueryList<DColumnComponent>;


  constructor(private _dataService: DataService) {
    this.gridData = [];
    this.columnData = [];
  }

  ngOnInit() {
    this._dataService.gridDataBehaviour.subscribe((data: any) => {
     this.gridData = data;
    });

    this._dataService.gridViewDataBehaviour.subscribe((data: any) => {
      this.gridViewData = data;
    });
    this._dataService.columnDataBehaviour.subscribe((data: any) => {
      this.columnData = data;
    });
  }

  ngAfterContentInit() {
    this.createColumnConfig();
  }

  createColumnConfig() {
    this.columnData = this.columnRef.toArray();
    this._dataService.columnData = this.columnData;
  }


  trackByRow(index: any) {
    return index;
  }

  trackByColumn(index: any) {
    return index;
  }

  onRowClick(row: any) {
   this.getRowData.emit(row);
  }

  getChange(ev: any) {
    debugger;
  }


}
