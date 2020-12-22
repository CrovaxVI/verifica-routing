import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchStellareComponent } from './search-stellare/search-stellare.component';
import { StellareComponent } from './stellare/stellare.component';

const routes: Routes = [
  {path:'search-stellare',component:SearchStellareComponent},
  {path:'item:/id',component:StellareComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
