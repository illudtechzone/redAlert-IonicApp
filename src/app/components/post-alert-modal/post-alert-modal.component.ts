import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { RedAlertAggregateResourceService } from '../../shared/gateway-api/services/red-alert-aggregate-resource.service';
import { PostDTO } from '../../shared/gateway-api/models/post-dto';
import { CurrentUserService } from 'src/app/security/current-user.service';
import { UserDTO } from 'src/app/shared/gateway-api/models';
@Component({
  selector: 'app-post-alert-modal',
  templateUrl: './post-alert-modal.component.html',
  styleUrls: ['./post-alert-modal.component.scss'],
})
export class PostAlertModalComponent implements OnInit {

  @Input() alert: String;
  lat: Number;
  lng: Number;
  zoom: Number = 15;
  color: String;
  base64Image: string;
  postDto: PostDTO = {};
  user: UserDTO={};
  // tslint:disable-next-line:max-line-length
  constructor(private modalController: ModalController, private geolocation: Geolocation, private camera: Camera,private redAlertAggregator: RedAlertAggregateResourceService, private currentUserService: CurrentUserService) { }

  ngOnInit() {
    this.color = (this.alert === 'Red') ? 'danger' : 'warning';
    this.getLocation();

    this.postDto.alertLevel= (this.alert === 'Red') ? 'RED' : 'ORANGE';
    this.currentUserService.getCurrentUser(false).then((user)=>
    {
      this.user=user;
    });
    this.postDto.userId=this.user.email;
  }

  getLocation() {
    this.geolocation.getCurrentPosition().then((response) => {
      this.lat = response.coords.latitude;
      this.lng = response.coords.longitude;


    }).catch((error) => {
      console.log('Error getting location');
    });
  }

  closeModal() {
    this.modalController.dismiss();
  }

  takePhoto()
  {
    const  options: CameraOptions= {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
     console.log(this.base64Image);
    }, (err) => {
     // Handle error
    });
  }
  clickAlert(){
    console.log("Alert CLicked");
    this.redAlertAggregator.CreatePostUsingPOST(this.postDto).subscribe(
      x => console.log('Observer got a next value: ' + x),
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    );
  }

}
