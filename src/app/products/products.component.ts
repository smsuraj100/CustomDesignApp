import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnChanges {

  @Input()
  designName: string;

  constructor(private service: CommonService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('Products: ', this.designName);
  }

}
