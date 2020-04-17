import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { Par } from "../par.model";

@Injectable({
  providedIn: "root",
})
export class ParService {
  subjectPar = new ReplaySubject<Par>(2);
  // iz komponenti kojima trebaju informacije o parovima obsPar.subscribe(), sa importom servisa
  observablePar = this.subjectPar.asObservable();
  private parovi: Par[];

  constructor() {
    this.parovi = [];
  }

  // ovo pozivam iz komponente utakmice-detail
  // odigrao sam kvotu, saljem informaciju o tome u servis,
  // a subscriber u komponenti moj-tiket je obavesten u tome i dodaje par(kvota,utakmica) u listu
  dodajPar(par: Par) {
    for (let index = 0; index < this.parovi.length; index++) {
      if (this.parovi[index].kvota.id === par.kvota.id) {
        // odigrana kvota vec postoji u parovima
        return false;
      }
    }
    this.parovi.push(par);
    this.subjectPar.next(par);
    return true;
  }
}
