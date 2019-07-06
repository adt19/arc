import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '', pathMatch: 'full', redirectTo: 'news'
}, {
  path: 'news',
  loadChildren: 'src/news#NewsMod'
}, {
  path: '**', pathMatch: 'full', redirectTo: 'news'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRouting {}
