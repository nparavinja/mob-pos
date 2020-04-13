import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Korisnik } from "../korisnik.model";


@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _isLoggedIn = false;
  korisnik: Korisnik;

  get isLoggedIn() {
    return this._isLoggedIn;
  }

  constructor(private http: HttpClient) {}

  registerUser(email: string, password: string) {}
  prijaviSe(u: string, p: string) {
    return this.http
      .post<Korisnik>(`http://localhost/test-laravel/public/korisnici`, {
        username: u,
        password: p,
      })
      .pipe(
        tap((response) => {
          console.log(response);
          const user = new Korisnik(
            response.id,
            response.ime,
            response.iznosNaRacunu,
            response.mejl,
            response.username,
            "pass",
            response.tiketi
          );
          this.login();
          console.log(user);
          this.korisnik = user;
        })
      );
  }

  login() {
    this._isLoggedIn = true;
  }

  logout() {
    this._isLoggedIn = false;
  }
}
