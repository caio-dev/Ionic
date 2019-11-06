import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  paginas: any[] = [
    {titulo: "Home", icone: "home", url: "/home"},
    {titulo: "Listagem", icone: "list", url: "/list"},
    {titulo: "Estruturas", icone: "apps", url: "/botoes"},
    {titulo: "Componentes", icone: "cube", url: "/componentes"},
    {titulo: "API Externa", icone: 'locate', url: "/api-externa"},
    {titulo: "Animações", icone: 'hand', url: "/animacoes"},
    {titulo: "Nativos", icone: 'logo-android', url: "/componentes-nativos"}
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
