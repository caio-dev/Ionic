import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';

import { IonicModule } from '@ionic/angular';

import { ComponentesNativosCameraPage } from './componentes-nativos-camera.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentesNativosCameraPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [Camera],
  declarations: [ComponentesNativosCameraPage]
})
export class ComponentesNativosCameraPageModule {}
