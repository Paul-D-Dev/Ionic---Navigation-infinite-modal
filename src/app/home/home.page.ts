import { developpers } from './../mock-data/developpers';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalBaseComponent } from '../components/modal-base/modal-base.component';
import { ModalContentPage } from '../pages/modal-content/modal-content.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  developpersArray = []
  // https://ionicframework.com/blog/how-to-navigate-in-ionic-modals-with-ion-nav/

  constructor(
    private modalController: ModalController,
  ) {}

  ngOnInit() {
    this.developpersArray = developpers;
  }

  // https://ionicframework.com/docs/api/modal
  async presentModal(id: number) {
    const modal = await this.modalController.create({
      component: ModalBaseComponent,
      swipeToClose: true, // Only applies in iOS mode
      componentProps: { // Passing data
        rootPage: ModalContentPage,
        dev: this.developpersArray[id], // Receive data with Input
        devs: this.developpersArray
      },
      
    });

    await modal.present();
  }
}
