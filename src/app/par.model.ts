import { Utakmica } from "./utakmica.model";
import { Kvota } from "./kvota.model";

export class Par {
  /**
   *
   */
  constructor(private _utakmica: Utakmica, private _kvota: Kvota) {}

  public get utakmica() {
    return this._utakmica;
  }
  public get kvota() {
    return this._kvota;
  }

  public set kvota(value) {
      this._kvota = value;
  }

  public set utakmica(value) {
      this._utakmica = value;
  }
}
