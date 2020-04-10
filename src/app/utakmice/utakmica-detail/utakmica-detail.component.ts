import { Component, OnInit, Input } from "@angular/core";
import { Utakmica } from "src/app/utakmica.model";
import { UtakmiceService } from "src/app/utakmice.service";
import { Route } from "@angular/compiler/src/core";
import { ActivatedRoute } from "@angular/router";
import { Tim } from "src/app/utakmica.model";


@Component({
  selector: "app-utakmica-detail",
  templateUrl: "./utakmica-detail.component.html",
  styleUrls: ["./utakmica-detail.component.scss"],
})
export class UtakmicaDetailComponent implements OnInit {
  utakmica: Utakmica;
  id: number;
  tekst = "Nazad";
  ajkon = "arrow-back";
  kvote = [
    { naziv: "1", vrednost: "1.45" },
    { naziv: "2", vrednost: "1.95" },
    { naziv: "X", vrednost: "3.45" },
    { naziv: "D. Kecman +/-", vrednost: "1.85" },
    { naziv: "Z. Lovernj +/-", vrednost: "1.95" },
    { naziv: "B. Bogdanovic", vrednost: "1.85" },
  ];

  constructor(
    private utakmicaServis: UtakmiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.params.id;
    this.vratiUtakmicu();
    
    
  }

  vratiUtakmicu() {
    this.utakmicaServis
    .vratiUtakmicu(this.id)
    .subscribe(utakmica => {
      this.utakmica = utakmica;
      console.log(this.utakmica);
    });
  }
}
