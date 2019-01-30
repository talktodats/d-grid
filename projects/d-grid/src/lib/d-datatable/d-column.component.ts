/**
 * Created by dattaram on 9/10/18.
 */

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'd-column',
  template:``
})

export class DColumnComponent implements OnInit {

  @Input() label: string;
  @Input() dataKey: string;
  @Input() hidden: boolean;
  constructor() {
    this.hidden = false;
  }

  ngOnInit() {
  }
}
