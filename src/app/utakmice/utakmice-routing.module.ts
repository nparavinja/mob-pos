import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UtakmicePage } from "./utakmice.page";
import { UtakmicaDetailComponent } from "./utakmica-detail/utakmica-detail.component";

const routes: Routes = [
  {
    path: "",
    component: UtakmicePage,
  },
  {
    path: ":id",
    component: UtakmicaDetailComponent,
  },
  {
    path: "**",
    component: UtakmicePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtakmicePageRoutingModule {}
