import { Injectable } from "@angular/core";
import { Utakmica } from "./utakmica.model";

@Injectable({
  providedIn: "root",
})
export class UtakmiceService {
  utakmice: Utakmica[] = [];
  
  

  constructor() {
    let u1 = new Utakmica();
    u1.id = 1;
    u1.datumIVremeOdigravanja = new Date("07/04/2020");
    u1.uToku = false;
    u1.timDomacin = {
      naziv: "Partizan",
      slika:
        "https://upload.wikimedia.org/wikipedia/sr/thumb/4/47/FK_Partizan_logo.png/330px-FK_Partizan_logo.png",
      igraci: ["D. Kecman", "J. Veseli", "A. Maric"],
    };
    u1.timGost = {
      naziv: "Crvena Zvezda",
      slika:
        "https://1.bp.blogspot.com/-3JZHx134Jg4/XZm9lsiPABI/AAAAAAAAW6U/ID_uA5-9lN4IhpNcCeJKfgtwu33tO9CPACLcBGAsYHQ/s1600/1562870783-picsay.png",
      igraci: ["i1", "i2", "i3"],
    };
    u1.statistika = {
      brojPoenaDomacin: 0,
      brojPoenaGost: 0,
      pobednik: null,
    };

    this.utakmice.push(u1);

    let u2 = new Utakmica();
    u2.id = 2;
    u2.datumIVremeOdigravanja = new Date("07/04/2020");
    u2.uToku = false;
    u2.timDomacin = {
      naziv: "Sacramento Kings",
      slika:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/SacramentoKings.svg/1200px-SacramentoKings.svg.png",
      igraci: ["i1", "i2", "i3", "i4", "i5"],
    };
    u2.timGost = {
      naziv: "Denver Nuggets",
      slika:
        "https://cdn.bleacherreport.net/images/team_logos/328x328/denver_nuggets.png",
      igraci: ["i1", "i2", "i3", "i4", "i5"],
    };
    u2.statistika = {
      brojPoenaDomacin: 0,
      brojPoenaGost: 0,
      pobednik: null,
    };

    this.utakmice.push(u2);
    let u3 = new Utakmica();
    u3.id = 3;
    u3.datumIVremeOdigravanja = new Date("07/04/2020");
    u3.uToku = false;
    u3.timDomacin = {
      naziv: "Panatinaikos",
      slika:
        "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Panathinaikos_F.C._logo.svg/1200px-Panathinaikos_F.C._logo.svg.png",
      igraci: ["i1", "i2", "i3", "i4", "i5"],
    };
    u3.timGost = {
      naziv: "Olimpijakos",
      slika:
        "https://upload.wikimedia.org/wikipedia/sr/thumb/d/d7/Olympiacos_F.C.svg/848px-Olympiacos_F.C.svg.png",
      igraci: ["i1", "i2", "i3", "i4", "i5"],
    };
    u3.statistika = {
      brojPoenaDomacin: 0,
      brojPoenaGost: 0,
      pobednik: null,
    };

    this.utakmice.push(u3);
    let u4 = new Utakmica();
    u4.id = 4;
    u4.datumIVremeOdigravanja = new Date("07/04/2020");
    u4.uToku = false;
    u4.timDomacin = {
      naziv: "CSKA",
      slika:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/PBC_CSKA_Moscow_logo.svg/1200px-PBC_CSKA_Moscow_logo.svg.png",
      igraci: ["i1", "i2", "i3", "i4", "i5"],
    };
    u4.timGost = {
      naziv: "Makabi",
      slika:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Maccabi_Tel_Aviv_BC_logo.svg/1200px-Maccabi_Tel_Aviv_BC_logo.svg.png",
      igraci: ["i1", "i2", "i3", "i4", "i5"],
    };
    u4.statistika = {
      brojPoenaDomacin: 0,
      brojPoenaGost: 0,
      pobednik: null,
    };

    this.utakmice.push(u4);
  }

  vratiUtakmicu(id: number) {
    // console.log(this.utakmice);
    let u : Utakmica;
    for (let i = 0; i < this.utakmice.length; i++) {
      if (this.utakmice[i].id === id) {
        u = this.utakmice[i];
        break;
      }
    }
   return u;
  }

  vratiUtakmice() {
    return this.utakmice;
  }
}
