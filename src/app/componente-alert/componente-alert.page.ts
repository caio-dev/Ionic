import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-componente-alert',
  templateUrl: './componente-alert.page.html',
  styleUrls: ['./componente-alert.page.scss'],
})
export class ComponenteAlertPage implements OnInit {

  constructor(private alertCtrl : AlertController) { }

  ngOnInit() {
  }

  async abrirAlertSimples(){
    let alertSimples = await this.alertCtrl.create({
      header    : 'Header do alert',
      subHeader : 'Sub-Header',
      message   : 'este é um alert simples!',
      buttons   : ['Ok'],
    });

    await alertSimples.present();
  }


  async abrirAlertComposto(){
    let alertComposto = await this.alertCtrl.create({
      header  : 'Alert Composto',
      message : 'alert com multiplos botões',
      buttons : ['Compartilhar', 'Salvar', 'Excluir'],
    });

    await alertComposto.present();
  }

  async abrirAlertConfirma(){
    let alertConfirma = await this.alertCtrl.create({
      header  : 'Confirmação',
      message : 'Deseja confirmar?',
      buttons : [
        {
          text     : 'Cancelar',
          role     : 'Cancel',
          cssClass : 'secondary',
          handler : ()=>{
            console.log('Pedido cancelado')
          }
        },
        {
          text : 'Pagar',
          handler : ()=>{
            console.log('Pago com sucesso!')
          }
        }
      ]
      
    });

    await alertConfirma.present();
  }

  async abrirPrompt(){
    let alertPrompt = await this.alertCtrl.create({
      header    : 'Acesso restito',
      inputs : [
        {
          name : 'Login',
          type : 'text',
          placeholder : 'Informe seu Login: ',
        },
        {
          name : 'Senha',
          type : 'password',
          placeholder : 'Informe sua senha',
        }
      ],
      buttons : [
        {
          text : 'Novo',
          cssClass : 'secondary',
          handler : ()=>
            console.log('Abrir tela de novo usuário')
        },
        {
          text : 'Entrar',
          handler : ()=>
            console.log('Olá usuário, seja bem-vindo!')
        }
      ]
    });

    await alertPrompt.present();      
  }

  async abrirRadio(){
    let alertPromptRadio = await this.alertCtrl.create({
      header : 'Radio',
      inputs : [
      {
        name  : 'radio 1',
        type  : 'radio',
        label : 'radio 1',
        value : 'value 1',
        checked : true
      },
      {
        name  : 'radio 2',
        type  : 'radio',
        label : 'radio 2',
        value : 'value 2',
      },
      {
        name  : 'radio 3',
        type  : 'radio',
        label : 'radio 3',
        value : 'value 3',
      },
      {
        name  : 'radio 4',
        type  : 'radio',
        label : 'radio 4',
        value : 'value 4',
      },
      ],
      buttons : [
        {
          text : 'Cancelar',
          role : 'cancel'
        },
        {
          text : 'Confirmar'
        }
      ]
    })

    await alertPromptRadio.present();      
  }

  async abrirCheckBox(){
    let alertCheckbox = await this.alertCtrl.create({
      header : 'CheckBox',
      inputs : [
      {
        name  : 'checkbox 1',
        type  : 'checkbox',
        label : 'CheckBox 1',
        value : 'value 1',
        checked : true
      },
      {
        name  : 'checkbox 2',
        type  : 'checkbox',
        label : 'CheckBox 2',
        value : 'value 2',
      },
      {
        name  : 'checkbox 3',
        type  : 'checkbox',
        label : 'CheckBox 3',
        value : 'value 3',
      },
    ],
    buttons : [
      {
        text : 'Cancelar',
        role : 'cancel',
        handler : ()=> {
          console.log('Cancelado')
        }
      },
      {
        text : 'Confirmar',
        handler : (data)=> {
          console.log('Confirmado', data)
        }
        
      }
    ]
  })

  await alertCheckbox.present();      
  }
}
