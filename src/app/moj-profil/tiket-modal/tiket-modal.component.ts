import { Component, OnInit, Input } from "@angular/core";
import { Tiket } from "src/app/tiket.model";
import { ModalController } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: "app-tiket-modal",
  templateUrl: "./tiket-modal.component.html",
  styleUrls: ["./tiket-modal.component.scss"],
})
export class TiketModalComponent implements OnInit {
  
  @Input()tiket: Tiket;
  
  constructor(private modalCtrl: ModalController, public datePipe:DatePipe) {}

  ngOnInit() {}

  izadji() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
