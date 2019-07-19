import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  designName: string;

  constructor() { }

  getDesignName() {
    console.log('get:', this.designName);
    return this.designName;
  }

  setDesignName(designName: string) {
    console.log('set:', designName);
    this.designName = designName;
  }
}
