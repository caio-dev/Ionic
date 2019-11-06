import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-componente-modal-interno',
  templateUrl: './componente-modal-interno.page.html',
  styleUrls: ['./componente-modal-interno.page.scss'],
})
export class ComponenteModalInternoPage implements OnInit {

  constructor(private navParam : NavParams) { }

  ngOnInit() {
    console.log(this.navParam.get('idade'));
  }

}
