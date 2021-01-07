import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedComponentsModule } from './../components/shared-components.module';
import { ModalContentPageModule } from './../pages/modal-content/modal-content.module';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedComponentsModule,
    ModalContentPageModule // Import module because it's will be a real content and we'll use the page directly
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
