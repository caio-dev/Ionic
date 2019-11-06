import { ComponenteModalInternoPage } from './../componente-modal-interno/componente-modal-interno.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponenteModalPage } from './componente-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponenteModalPage, ComponenteModalInternoPage],
  entryComponents: [ComponenteModalInternoPage],
})
export class ComponenteModalPageModule {}
