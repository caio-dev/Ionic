import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-refresh',
  templateUrl: './componente-refresh.page.html',
  styleUrls: ['./componente-refresh.page.scss'],
})
export class ComponenteRefreshPage implements OnInit {

  message: string = "Deslize para baixo para atualizar!";
  constructor() { }

  ngOnInit() {
  }

  atualizarMensagem(event : any){
    setTimeout(()=>{
      this.message = 'Parabéns, a página foi atualizada!';
      event.target.complete();
    }, 2000);
  }
}
