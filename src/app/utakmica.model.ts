export class Utakmica {
  /**
   *
   */
  constructor(
    private _id: number,
    private _datumIVremeOdigravanja: Date,
    private _timDomacin: Tim,
    private _timGost: Tim,
    private _statistika: Statistika,
    private _uToku: boolean
  ) {}

  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }

  get datumIVremeOdigravanja(): Date {
    return this._datumIVremeOdigravanja;
  }

  set datumIVremeOdigravanja(value: Date) {
    this._datumIVremeOdigravanja = value;
  }

  get timDomacin(): Tim {
    return this._timDomacin;
  }

  set timDomacin(value: Tim) {
    this._timDomacin = value;
  }

  get timGost(): Tim {
    return this._timGost;
  }

  set timGost(value: Tim) {
    this._timGost = value;
  }

  get statistika(): Statistika {
    return this._statistika;
  }

  set statistika(value: Statistika) {
    this._statistika = value;
  }

  /**
   *
   */
}

export interface Tim {
  naziv: string;
  logo: string;
  players: Igrac[];
}

export interface Statistika {
  brojPoenaDomacin: number;
  brojPoenaGost: number;
  pobednik: Tim;
}

export interface Igrac {
  id: number;
  ime: string;
  slika: string;
  pozicija: string;
  broj: number;
  team_id: number;
}
