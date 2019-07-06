import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedMod } from 'src/app/shared.mod';

import { NavFindTag } from './find/find.tag';
import { NavHeaderTag } from './header/header.tag';
import { NavFooterTag } from './footer/footer.tag';

const tags = [
  NavFindTag,
  NavFooterTag,
  NavHeaderTag];

@NgModule({
  imports: [
    SharedMod,
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
