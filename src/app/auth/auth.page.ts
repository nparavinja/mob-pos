import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth.service";
import { NgForm } from "@angular/forms";
import { timer } from "rxjs";
import { Korisnik } from "../korisnik.model";
import { Router } from '@angular/router';

@Component({
  selector: "app-auth",
  templateUrl: "./auth.page.html",
  styleUrls: ["./auth.page.scss"],
})
export class AuthPage implements OnInit {
  isLogin = true;
  isLoading = false;
  error: string = null;
  prikaziGresku = false;

  constructor(private authService: AuthService, private router:Router) {}

  ngOnInit() {}

  toggleLogin() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(f: NgForm) {
    //console.log(f);
    if (!f.valid) {
      return;
    }

    this.isLoading = true;
    if (this.isLogin) {
      // send req to login
      const username = f.value.username;
      const password = f.value.password;
      //console.log(username, password);

      this.authService.prijaviSe(username, password).subscribe(
        (response) => {
         // console.log(response);
          this.isLoading = false;
          this.router.navigate(['./moj-profil']);
        },
        (error) => {
          console.log(error);
          if (error.error.data != null) {
            this.error = "Mejl i/ili password ne postoje u bazi.";
          } else {
            this.error = "Neuspesno prijavljivanje.";
          }

          this.isLoading = false;
          //emit 0 after 5 second then complete, since no second argument is supplied
          const source = timer(4000);
          this.prikaziGresku = true;
          //output: 0
          const subscribe = source.subscribe((val) => {
           // console.log(val);
            this.prikaziGresku = false;
          });
        }
      );
    } else {
      // send req to register
    }

    f.reset();
  }
}
