import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-searchbar',
  templateUrl: './componente-searchbar.page.html',
  styleUrls: ['./componente-searchbar.page.scss'],
})
export class ComponenteSearchbarPage implements OnInit {

  nome : string = "";
  pessoas : any;
  pessoasFiltradas : any;

  constructor() {

 //   this.pessoas = [
 //     { id: 1,  idade: 10,   nome: "João"},
 //     { id: 2,  idade: 18,   nome: "Maria"},
 //     { id: 3,  idade: 26,   nome: "Caio"},
 //     { id: 4,  idade: 30,   nome: "Luis"},
 //     { id: 5,  idade: 40,   nome: "Ana"},
 //     { id: 6,  idade: 95,   nome: "Thiago"},
 //     { id: 7,  idade: 5,    nome: "Amélia"},
 //     { id: 8,  idade: 32,   nome: "Silvana"},
 //     { id: 9,  idade: 16,   nome: "Lucia"},
 //     { id: 10, idade: 58,   nome: "Marcelo"}
 //   ];

//    this.pessoasFiltradas = this.pessoas;
 }

  ngOnInit() {
  }

}
