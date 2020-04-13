import { Component, OnInit, Input } from "@angular/core";
import { Tiket } from "src/app/tiket.model";
import { DatePipe } from "@angular/common";
import { ModalController } from "@ionic/angular";
import { TiketModalComponent } from '../tiket-modal/tiket-modal.component';

@Component({
  selector: "app-tiket-element",
  templateUrl: "./tiket-element.component.html",
  styleUrls: ["./tiket-element.component.scss"],
})
export class TiketElementComponent implements OnInit {
  @Input() tiket: Tiket;
  @Input() redniBroj: number;
  
  constructor(
    public datePipe: DatePipe,
    public modalController: ModalController
  ) {}

  ngOnInit() {}

  async prikaziModal() {
    const modal = await this.modalController.create({
      component: TiketModalComponent,
      componentProps: {
        'tiket' : this.tiket
      }
    });
    return await modal.present();
  }
}
