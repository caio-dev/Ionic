import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponenteActionsheetPage } from './componente-actionsheet.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteActionsheetPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponenteActionsheetPage]
})
export class ComponenteActionsheetPageModule {}
