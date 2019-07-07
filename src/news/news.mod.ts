import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CtLzmgMod } from '@chakray/tags';
import { SharedMod } from 'src/app/shared.mod';

import { NewsItemTag } from './item/item.tag';
import { NewsBaseTag as BaseTag } from './base/base.tag';

const routes: Routes = [{
  path: '',
  component: BaseTag
}];

const tags = [
  NewsItemTag,
  BaseTag];

@NgModule({
  imports: [
    SharedMod,
    CtLzmgMod,
    CommonModule,
    RouterModule.forChild(routes)],
  declarations: [tags]
})
export class NewsMod { }
