import { Tiket } from "./tiket.model";

export class Korisnik {
  /**
   *
   */
  constructor(
    private _id: number,
    private _ime: string,
    private _iznosNaRacunu: number,
    private _mejl: string,
    private _username: string,
    private _password: string,
    private _tiketi: Tiket[]
  ) {}

  public get tiketi(): Tiket[] {
    return this._tiketi;
  }
  public set tiketi(value: Tiket[]) {
    this._tiketi = value;
  }
  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }
  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }
  public get mejl(): string {
    return this._mejl;
  }
  public set mejl(value: string) {
    this._mejl = value;
  }
  public get iznosNaRacunu(): number {
    return this._iznosNaRacunu;
  }
  public set iznosNaRacunu(value: number) {
    this._iznosNaRacunu = value;
  }
  public get ime(): string {
    return this._ime;
  }
  public set ime(value: string) {
    this._ime = value;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
}
