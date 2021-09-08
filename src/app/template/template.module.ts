import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavoriteColorComponent } from './favorite-color/favorite-color.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [FavoriteColorComponent],
  exports: [FavoriteColorComponent]
})
export class TemplateModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/