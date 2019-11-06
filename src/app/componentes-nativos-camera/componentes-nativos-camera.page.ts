import { Camera, CameraOptions} from '@ionic-native/camera/ngx';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-componentes-nativos-camera',
  templateUrl: './componentes-nativos-camera.page.html',
  styleUrls: ['./componentes-nativos-camera.page.scss'],
})
export class ComponentesNativosCameraPage implements OnInit {

  foto : any;
  constructor(private camera : Camera) { }

  ngOnInit() {
  }


// configurações da foto
  tirarFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

// metodo responsável por chamar a foto
    this.camera.getPicture(options).then((imageData) => {      
      let base64Image = 'data:image/jpeg;base64,' + imageData;

      this.foto = base64Image;
    },(err)=>{
      alert('Não foi possível capturar a foto.');
      alert(err);
    });
  }
}
