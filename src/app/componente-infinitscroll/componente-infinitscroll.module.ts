import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponenteInfinitscrollPage } from './componente-infinitscroll.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteInfinitscrollPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponenteInfinitscrollPage]
})
export class ComponenteInfinitscrollPageModule {}
