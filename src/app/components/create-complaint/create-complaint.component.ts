import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-complaint',
  templateUrl: './create-complaint.component.html',
  styleUrls: ['./create-complaint.component.scss'],
})
export class CreateComplaintComponent implements OnInit {
  slideConfig : {


  };

  numbers : number[] =[1,2,3,4]

  constructor(private modalController: ModalController) { }

  ngOnInit() {}
  dismiss(){
    console.log("frhge5oghdriothjo");
  this.modalController.dismiss();
  }

}
