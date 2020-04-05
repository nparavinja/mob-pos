export class Utakmica {
  private _id: number;
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  private _datumIVremeOdigravanja: Date;
  public get datumIVremeOdigravanja(): Date {
    return this._datumIVremeOdigravanja;
  }
  public set datumIVremeOdigravanja(value: Date) {
    this._datumIVremeOdigravanja = value;
  }
  private _timDomacin: Tim;
  public get timDomacin(): Tim {
    return this._timDomacin;
  }
  public set timDomacin(value: Tim) {
    this._timDomacin = value;
  }
  private _timGost: Tim;
  public get timGost(): Tim {
    return this._timGost;
  }
  public set timGost(value: Tim) {
    this._timGost = value;
  }
  private _statistika: Statistika;
  public get statistika(): Statistika {
    return this._statistika;
  }
  public set statistika(value: Statistika) {
    this._statistika = value;
  }
  private _uToku: boolean;
  public get uToku(): boolean {
    return this._uToku;
  }
  public set uToku(value: boolean) {
    this._uToku = value;
  }

  /**
   *
   */
  constructor() {}
}

export interface Tim {
  naziv: string;
  slika: string;
  igraci: string[];
}

export interface Statistika {
  brojPoenaDomacin: number;
  brojPoenaGost: number;
  pobednik : Tim;
}
