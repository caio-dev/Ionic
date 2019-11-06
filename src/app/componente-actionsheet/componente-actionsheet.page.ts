import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-componente-actionsheet',
  templateUrl: './componente-actionsheet.page.html',
  styleUrls: ['./componente-actionsheet.page.scss'],
})
export class ComponenteActionsheetPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

   async abrirActionSheet(){
    let actionSheet = await this.actionSheetCtrl.create({
      header: 'Fotos',
      buttons : [
        {
          text :  'Compartilhar',
          icon :  'share',
        },
        {
        text :  'Excluir',
        role :  'destructive',
        icon :  'trash',
        handler : ()=> {
          alert('Tem certeza que deseja Excluir?')
          }
        },
      {
        text :  'Cancelar',
        role :  'cancel',
        icon :  'close',
        }]
    });

    await actionSheet.present();


  }
}
