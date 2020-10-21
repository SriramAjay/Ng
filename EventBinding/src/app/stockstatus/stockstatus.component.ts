import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-stockstatus',
  templateUrl: './stockstatus.component.html',
  styleUrls: ['./stockstatus.component.sass']
})
export class StockstatusComponent implements OnInit {

  @Input() stock: number;
  @Input() productId: number;
  color = ''; 
  updatedstockvalue:number;
  @Output() ChangeStockValue = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  stockValueChanged(){
    this.ChangeStockValue.emit({ id: this.productId, updatdstockvalue: this.updatedstockvalue });
    this.updatedstockvalue=null;
  }
  ngOnChanges() {
    if (this.stock > 10) {
        this.color = 'green';
    } else {
        this.color = 'red';
    }
}
}
