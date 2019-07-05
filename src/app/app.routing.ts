import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: './news#NewsMod'
}];

@NgModule({
  imports: [RouterModule.forRoot([])],
  declarations: []
})
export class AppRouting {}
