import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-componentes-nativos-text-to-speech',
  templateUrl: './componentes-nativos-text-to-speech.page.html',
  styleUrls: ['./componentes-nativos-text-to-speech.page.scss'],
})
export class ComponentesNativosTextToSpeechPage implements OnInit {

  textoASerFalado : string = '';

  constructor(private tts : TextToSpeech) { }

  ngOnInit() {
  }

  falar(){
    this.tts.speak({
      text: this.textoASerFalado,
      locale: 'pt-BR',
      rate: 0.75
    })
    .then(() => {
      alert('Captura de audio com sucesso!');
    })
    .catch((erro : any )=>{
      alert(erro);
    })
  }

}
