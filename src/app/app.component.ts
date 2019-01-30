import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from "../../projects/d-grid/src/lib/d-datatable/d-datatable.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gridData = [
    {
      "countryName": "Martinique",
      "countryCode": "MQ",
      "countryCode2": "MTQ",
      "countryFlag": "MQ.png",
      "capital": "",
      "currencyCode": "EUR",
      "currencyName": "Euro",
      "currencySymbol": "€",
      "capitalLatitude": null,
      "capitalLongitude": null,
      "isoNumeric": 474
    },
    {
      "countryName": "AAAAAAAA",
      "countryCode": "MQ",
      "countryCode2": "MTQ",
      "countryFlag": "MQ.png",
      "capital": "",
      "currencyCode": "EUR",
      "currencyName": "Euro",
      "currencySymbol": "€",
      "capitalLatitude": null,
      "capitalLongitude": null,
      "isoNumeric": 474
    }
  ];
  constructor(private _http: HttpClient, private _dataService: DataService) {
    this._dataService.setDataByUrl('assets/data/country.json', 'get', 'response.data');
  }

  addData() {
    /*    this._dataService.pushObjectIntoGrid(  {
     "countryName": "Martinique",
     "countryCode": "MQ",
     "countryCode2": "MTQ",
     "countryFlag": "MQ.png",
     "capital": "",
     "currencyCode": "EUR",
     "currencyName": "Euro",
     "currencySymbol": "€",
     "capitalLatitude": null,
     "capitalLongitude": null,
     "isoNumeric": 474
     });*/

    this._dataService.margeDataIntoGrid(this.gridData);
  }

  addColumn(){
    let column = {
      label: 'test',
      dataKey: 'isoNumeric',
      hidden: false
    };
    this._dataService.addColumn(column);
  }

  addColumn1(){
    let colData = [
      {
        label: 'test',
        dataKey: 'isoNumeric',
        hidden: false
      },
      {
        label: 'test1',
        dataKey: 'isoNumeric',
        hidden: false
      }
    ];
    this._dataService.changeColumnStructure(colData);

  }
}
