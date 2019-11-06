import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-checkbox',
  templateUrl: './componente-checkbox.page.html',
  styleUrls: ['./componente-checkbox.page.scss'],
})
export class ComponenteCheckboxPage implements OnInit {
  meses : any[] = [
    {nomeDoMes: "janeiro",    valor: 1,   marcado: false},
    {nomeDoMes: "fevereiro",  valor: 2,   marcado: false},
    {nomeDoMes: "março",      valor: 3,   marcado: false},
    {nomeDoMes: "abril",      valor: 4,   marcado: false},
    {nomeDoMes: "maio",       valor: 5,   marcado: false},
    {nomeDoMes: "junho",      valor: 6,   marcado: false},
    {nomeDoMes: "julho",      valor: 7,   marcado: false},
    {nomeDoMes: "agosto",     valor: 8,   marcado: false},
    {nomeDoMes: "setembro",   valor: 9,   marcado: false},
    {nomeDoMes: "outubro",    valor: 10,  marcado: true},
    {nomeDoMes: "novembro",   valor: 11,  marcado: false},
    {nomeDoMes: "dezembro",   valor: 12,  marcado: false},
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.meses);
  }

}
