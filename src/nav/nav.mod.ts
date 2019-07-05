import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavHeaderTag } from './header/header.tag';
import { NavFooterTag } from './footer/footer.tag';

const tags = [
  NavFooterTag,
  NavHeaderTag];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ...tags
  ],
  exports: [...tags,
    RouterModule]
})
export class NavMod { }
