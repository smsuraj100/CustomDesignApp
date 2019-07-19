import { Component } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-desgin-app';
  designName: string;
  constructor(private service: CommonService) { }

  changeDesignName(designName) {
    // this.designName = this.service.getDesignName();
    this.designName = designName;
    console.log('App: ', this.designName);
  }
}
