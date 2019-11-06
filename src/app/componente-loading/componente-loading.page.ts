import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-componente-loading',
  templateUrl: './componente-loading.page.html',
  styleUrls: ['./componente-loading.page.scss'],
})
export class ComponenteLoadingPage implements OnInit {

  constructor(private loadingCtrl : LoadingController) { }

  ngOnInit() {
  }

  async exibeLoading(){
    let loading = await this.loadingCtrl.create({
      message : 'processando...',
      duration : 3000
    });

    return await loading.present();
  }

  async exibeLoadingLines(){
    let loading = await this.loadingCtrl.create({
      spinner   : 'lines',
      message  : 'Processando...',
      duration : 3000
    });

    return await loading.present();
  }

  async exibeLoadingBubbles(){
    let loading = await this.loadingCtrl.create({
      spinner  : 'bubbles',
      message  : 'Processando...',
      duration : 3000
    });

    return await loading.present();
  }

}
