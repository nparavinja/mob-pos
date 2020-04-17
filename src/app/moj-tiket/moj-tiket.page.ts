import { Component, OnInit, OnDestroy } from '@angular/core';
import { Par } from '../par.model';
import { Subscription } from 'rxjs';
import { ParService } from '../utakmice/par.service';

@Component({
  selector: 'app-moj-tiket',
  templateUrl: './moj-tiket.page.html',
  styleUrls: ['./moj-tiket.page.scss'],
})
export class MojTiketPage implements OnInit, OnDestroy {

  parovi: Par[];
  subscriptionPar: Subscription;

  constructor(private parServis: ParService) { 
    this.parovi = [];
  }

  obrisiPar(par:Par) {
    //this.parovi.find(p => )
    this.parovi = this.parovi.filter(p => p.kvota.id !== par.kvota.id)
  }

  ngOnInit() {
    this.subscriptionPar = this.parServis.observablePar.subscribe(par => {
      console.log("par u mom tiketu");
      console.log(par);
      this.parovi.push(par);
    }); 

    
  }

  ngOnDestroy() {

  }

}
