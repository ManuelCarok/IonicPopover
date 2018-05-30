import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

import { PopoverComponent } from '../../components/popover/popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {}

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverComponent, { option: [
      {item: 'item 1'},
      {item: 'item 2'},
      {item: 'item 3'},
      {item: 'item 4'},
      {item: 'item 5'}
    ]});
    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss(data => {
      console.log(data);
    });
  }

}
