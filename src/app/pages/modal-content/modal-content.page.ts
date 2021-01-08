import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.page.html',
  styleUrls: ['./modal-content.page.scss'],
})
export class ModalContentPage implements OnInit {
  level = 0;
  arrayId = 0;
  siteId: number;
  nextPage = ModalContentPage;

  array=[
    {
      id:1,
      name: 'Paul',
      sites: [
        {
          id: 1,
          name: 'fts',
          deploy: '01/01/2020',
          client : {
            id:1,
            name: 'Ludovic'
          }
        },
        {
          id: 2,
          name: 'kraak',
          deploy: '25/02/2020',
          client : {
            id:2,
            name: 'Camille'
          }
    
        }
    
      ]
    },
    {
      id:2,
      name: 'Mathieu',
      sites: [
        {
          id: 3,
          name: 'Yummy',
          deploy: '01/01/2020',
          client : {
            id:3,
            name: 'Mat'
          }
        },
        {
          id: 4,
          name: 'D',
          deploy: '25/02/2020',
          client : {
            id:4,
            name: 'Paul'
          }
    
        }
    
      ]
    }
  ]

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  close() {
    this.modalController.dismiss();
  }


}
