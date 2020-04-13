export class Kvota {
 
  
 
  
  
  /**
   *
   */
  constructor(
    private _id: number,
    private _nazivKvote: string,
    private _vrednostKvote: number
  ) {}

  public get id() {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  public get nazivKvote() {
      return this._nazivKvote;
  }
  public set nazivKvote(value: string) {
    this._nazivKvote = value;
  }
  public get vrednostKvote(): number {
    return this._vrednostKvote;
  }
  public set vrednostKvote(value: number) {
    this._vrednostKvote = value;
  }
  
}
