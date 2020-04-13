import { Par } from "./par.model";

export class Tiket {
  
  /**
   *
   */
  constructor(
    private _id: number,
    private _datumIVremeOdigravanja: Date,
    private _uplacenIznos: number,
    private _ukupnaKvota: number,
    private _ukupanDobitak: number,
    private _status: boolean,
    private _aktivan: boolean,
    private _parovi: Par[]
  ) {}

  public get ukupanDobitak(): number {
    return this._ukupanDobitak;
  }
  public set ukupanDobitak(value: number) {
    this._ukupanDobitak = value;
  }
  public get ukupnaKvota(): number {
    return this._ukupnaKvota;
  }
  public set ukupnaKvota(value: number) {
    this._ukupnaKvota = value;
  }
  public get uplacenIznos(): number {
    return this._uplacenIznos;
  }
  public set uplacenIznos(value: number) {
    this._uplacenIznos = value;
  }
  public get datumIVremeOdigravanja(): Date {
    return this._datumIVremeOdigravanja;
  }
  public set datumIVremeOdigravanja(value: Date) {
    this._datumIVremeOdigravanja = value;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  public get aktivan(): boolean {
    return this._aktivan;
  }
  public set aktivan(value: boolean) {
    this._aktivan = value;
  }
  public get status(): boolean {
    return this._status;
  }
  public set status(value: boolean) {
    this._status = value;
  }
  public get parovi(): Par[] {
    return this._parovi;
  }
  public set parovi(value: Par[]) {
    this._parovi = value;
  }
}
