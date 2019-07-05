import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavMod } from 'src/nav';

import { AppRouting } from './app.routing';
import { AppTag } from './app.tag';

@NgModule({
  declarations: [
    AppTag
  ],
  imports: [
    AppRouting,
    NavMod,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppTag]
})
export class AppModule { }
