import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-componente-toast',
  templateUrl: './componente-toast.page.html',
  styleUrls: ['./componente-toast.page.scss'],
})
export class ComponenteToastPage implements OnInit {

  constructor(private toastCtrl : ToastController) { }

  ngOnInit() {
  }

  async showToast(){
    let toast = await this.toastCtrl.create({
      message  : 'Enviada via toast',
      duration : 3000
    });

    toast.present();
  }

  
//  async showToastPosition(position : string){
//    let toast = await this.toastCtrl.create({
//      message  : 'Enviada via toast',
//      duration : 3000,
//      position : position
//    });

//    toast.present();
//}

  async showToastButton(){
    let toast = await this.toastCtrl.create({
      message         : 'Enviada via toast',
      showCloseButton : true,
      position        : 'top',
      closeButtonText : 'Fechar'
    });
  
    toast.present();
  }
}
