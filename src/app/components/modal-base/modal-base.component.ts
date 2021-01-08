import { Component, Input, OnInit } from '@angular/core';
import { Developer } from './../../models/developper.models';

@Component({
  selector: 'app-modal-base',
  templateUrl: './modal-base.component.html',
  styleUrls: ['./modal-base.component.scss'],
})
export class ModalBaseComponent implements OnInit {

  rootPage: any;
  @Input() dev: Developer;
  devs: Developer[]; // no need to add input
  
  constructor() { }

  ngOnInit() {
  }

}
