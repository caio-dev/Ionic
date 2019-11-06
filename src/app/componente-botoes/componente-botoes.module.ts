import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponenteBotoesPage } from './componente-botoes.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteBotoesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponenteBotoesPage]
})
export class ComponenteBotoesPageModule {}
