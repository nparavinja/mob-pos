import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "utakmice", pathMatch: "full" },
  
  {
    path: "utakmice",
    loadChildren: () =>
      import("./utakmice/utakmice.module").then(m => m.UtakmicePageModule)
  },
  {
    path: "livescore",
    loadChildren: () =>
      import("./livescore/livescore.module").then(m => m.LivescorePageModule)
  },
  {
    path: 'moj-profil',
    loadChildren: () => import('./moj-profil/moj-profil.module').then( m => m.MojProfilPageModule)
  },
  {
    path: 'moj-tiket',
    loadChildren: () => import('./moj-tiket/moj-tiket.module').then( m => m.MojTiketPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
