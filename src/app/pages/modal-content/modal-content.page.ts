import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ModalBaseComponent } from '../../components/modal-base/modal-base.component';
import { Developer, Site } from './../../models/developper.models';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.page.html',
  styleUrls: ['./modal-content.page.scss'],
})
export class ModalContentPage implements OnInit {
  level = 0;
  site: Site;
  nextPage = ModalContentPage;
  dev: Developer;
  developpersArray: Developer[];



  constructor(private modalController: ModalController, private navParams: NavParams) {}

  ngOnInit() {}

  close() {
    this.modalController.dismiss();
  }

  // Open new modal in the current modal
  async subModal(id: number) {
    const modal = await this.modalController.create({
      component: ModalBaseComponent,
      swipeToClose: true,
      // Props in the Modal Base
      componentProps: {
        rootPage: ModalContentPage,
        dev: this.developpersArray[id],
        devs: this.developpersArray
      },
    });

    await modal.present();
  }


}
