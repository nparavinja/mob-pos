import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "auth", pathMatch: "full" },

  {
    path: "utakmice",
    loadChildren: () =>
      import("./utakmice/utakmice.module").then((m) => m.UtakmicePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: "moj-profil",
    loadChildren: () =>
      import("./moj-profil/moj-profil.module").then(
        (m) => m.MojProfilPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "moj-tiket",
    loadChildren: () =>
      import("./moj-tiket/moj-tiket.module").then((m) => m.MojTiketPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./auth/auth.module").then((m) => m.AuthPageModule),
  },
  { path: "**", 
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
