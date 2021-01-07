import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalBaseComponent } from './modal-base/modal-base.component';



@NgModule({
  declarations: [ModalBaseComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ModalBaseComponent], // Share the Modal base component everywhere in the app
})
export class SharedComponentsModule { }
