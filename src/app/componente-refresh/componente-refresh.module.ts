import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponenteRefreshPage } from './componente-refresh.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteRefreshPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponenteRefreshPage]
})
export class ComponenteRefreshPageModule {}
