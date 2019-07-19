import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../services/common.service';



@Component({
  selector: 'app-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.scss']
})
export class DesignsComponent implements OnInit {
  designJson = [
    {
      name: 'ape-gorilla.png',
      path: 'assets/images/ape-gorilla.png'
    },
    {
      name: 'blue-wolf.png',
      path: 'assets/images/blue-wolf.png'
    },
    {
      name: 'champion.png',
      path: 'assets/images/champion.png'
    },
    {
      name: 'dabbing-unicorn.png',
      path: 'assets/images/dabbing-unicorn.png'
    },
    {
      name: 'hacker.png',
      path: 'assets/images/hacker.png'
    },
    {
      name: 'mask-kaneki.png',
      path: 'assets/images/mask-kaneki.png'
    },
    {
      name: 'pubg.png',
      path: 'assets/images/pubg.png'
    },
    {
      name: 'wolf.png',
      path: 'assets/images/wolf.png'
    }
  ];

  @Output()
  changeDesignNameEvent = new EventEmitter();

  constructor(private service: CommonService) { }

  ngOnInit() {
  }

  getDesignName(designName: string) {
    this.service.setDesignName(designName);
    this.changeDesignNameEvent.emit(designName);
    console.log(designName);
  }

}
