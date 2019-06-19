import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
// import {ComplaintDTO}from '../../api/models/'
@Component({
  selector: 'app-create-complaint',
  templateUrl: './create-complaint.component.html',
  styleUrls: ['./create-complaint.component.scss'],
})
export class CreateComplaintComponent implements OnInit {
  slideConfig = {
    spaceBetween:3,
    centeredSlides:true,
    slidesPerView: 1.2,
  };
  pepperoni : any;
  // complaintDto : ComplaintDTO;
  numbers : number[] =[1,2,3,4]

  constructor(private modalController: ModalController) { }
  ngOnInit() {}
  dismiss(){
    console.log("frhge5oghdriothjo");
  this.modalController.dismiss();
  }

}
