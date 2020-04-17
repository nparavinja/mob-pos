import { Component, OnInit, Input } from "@angular/core";
import { Utakmica } from "src/app/utakmica.model";
import { UtakmiceService } from "src/app/utakmice.service";
import { Route } from "@angular/compiler/src/core";
import { ActivatedRoute } from "@angular/router";
import { Tim } from "src/app/utakmica.model";
import { Kvota } from 'src/app/kvota.model';
import { ReplaySubject } from 'rxjs';
import { Par } from 'src/app/par.model';
import { ParService } from '../par.service';


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
  

  
  

  constructor(
    private utakmicaServis: UtakmiceService,
    private route: ActivatedRoute,
    private parServis: ParService
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

  odigrajKvotu(kvota:Kvota) {
    console.log("odigrao kvotu:" + kvota.nazivKvote + "  " +  kvota.vrednostKvote);
    let p:Par = new Par(this.utakmica, kvota);
    console.log("par:");
    console.log(p);
    
    let uspeh: boolean = this.parServis.dodajPar(p);
    console.log(uspeh);
    
  }
}
