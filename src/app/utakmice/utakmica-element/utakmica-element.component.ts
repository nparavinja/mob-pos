import { Component, OnInit, Input } from "@angular/core";
import { Utakmica } from "src/app/utakmica.model";
import { DatePipe } from "@angular/common";
import { UtakmiceService } from "src/app/utakmice.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-utakmica-element",
  templateUrl: "./utakmica-element.component.html",
  styleUrls: ["./utakmica-element.component.scss"],
})
export class UtakmicaElementComponent implements OnInit {
  @Input() utakmica: Utakmica;
  idUtakmice: number;

  constructor(
    public datePipe: DatePipe,
    private utakmiceServis: UtakmiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    
  }

  vratiUtakmicu() {
    
  }

  vratiKecKvotu() {
    return this.utakmica.kvote.find(k => k.nazivKvote === '1').vrednostKvote;
  }
  vratiDvojkuKvotu() {
    return this.utakmica.kvote.find(k => k.nazivKvote === '2').vrednostKvote;
  }

  
}
