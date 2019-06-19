import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { CreateComplaintComponent } from 'src/app/components/create-complaint/create-complaint.component';

@Component({
  selector: 'app-cshome',
  templateUrl: './cshome.page.html',
  styleUrls: ['./cshome.page.scss'],
})
export class CshomePage implements OnInit {


  numbers : Number[]=[1,2,3,4,5];
  currentSubPage : string = 'home';
  @ViewChild('slides') slides: IonSlides;

  slideConfig = {
    spaceBetween:3,
    centeredSlides:true,
    slidesPerView: 1.2,
  };
  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
 
 async presentModal(){
    const modal = await this.modalController.create({
      component: CreateComplaintComponent,
    });
   await modal.present();
  }
  
}
