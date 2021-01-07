import { Component } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { ModalBaseComponent } from '../components/modal-base/modal-base.component';
import { ModalContentPage } from '../pages/modal-content/modal-content.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // https://ionicframework.com/blog/how-to-navigate-in-ionic-modals-with-ion-nav/

  constructor(
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) {}

  // https://ionicframework.com/docs/api/modal
  async presentModal() {
    const modal = await this.modalController.create({
      presentingElement: this.routerOutlet.nativeEl,
      component: ModalBaseComponent,
      swipeToClose: true, // Only applies in iOS mode
      componentProps: { // Passing data
        rootPage: ModalContentPage,
      },
    });

    await modal.present();
  }
}
