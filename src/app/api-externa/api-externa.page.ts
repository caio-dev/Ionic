import { CepService } from './../cep.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-externa',
  templateUrl: './api-externa.page.html',
  styleUrls: ['./api-externa.page.scss'],
})
export class ApiExternaPage implements OnInit {

  consulta : string;
  result : any;
  constructor(private CepService : CepService) { }

  ngOnInit() {
  }

  get() {
    alert('get');
  }

  post() {
    alert('post');
  }

  put() {
    alert('put');
  }

  delete() {
    alert('delete');
  }


  cep(){
    //chama a tela de aguarde
    this.CepService.obterEndereco(50030130)
    .then((response)=>{
      this.result = JSON.stringify(response);
      //fecha tela e aguarde
    })
    .catch((response)=>{
      this.result = JSON.stringify(response);
    });
    }
  }