import { Component, OnInit } from "@angular/core";
import { UtakmiceService } from "../utakmice.service";
import { Utakmica } from "../utakmica.model";
import { DatePipe } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: "app-utakmice",
  templateUrl: "./utakmice.page.html",
  styleUrls: ["./utakmice.page.scss"],
  providers: [DatePipe],
})
export class UtakmicePage implements OnInit {
  utakmice: Utakmica[] = [];

  constructor(
    private utakmiceServis: UtakmiceService,
    public datePipe: DatePipe,
    private router: Router
  ) {}

  ngOnInit() {
    console.log("utakmica-page : ngOnInit");
    this.vratiUtakmice();
    
  }

  vratiUtakmice() {
    this.utakmiceServis.vratiUtakmice().subscribe( utakmice => {
      console.log(utakmice);
      this.utakmice = utakmice;
    });
  }

  izaberiUtakmicu(utakmica: Utakmica) {
    console.log("Izabrao utakmicu: " + utakmica.id);
    this.router.navigate(["utakmice", utakmica.id]);
  }

}
