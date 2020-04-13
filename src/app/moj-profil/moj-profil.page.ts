import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { Korisnik } from "../korisnik.model";

@Component({
  selector: "app-moj-profil",
  templateUrl: "./moj-profil.page.html",
  styleUrls: ["./moj-profil.page.scss"],
})
export class MojProfilPage implements OnInit, OnDestroy {
  
  isAuthenticated = false;
  korisnik: Korisnik;

  constructor(private authService: AuthService) {
   
  }

  ngOnInit() {
    this.korisnik = this.authService.korisnik;
    console.log(this.korisnik);
  }

  ngOnDestroy() {
    
  }
}
