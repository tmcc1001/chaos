import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import {GalleriaModule} from "primeng/galleria";

@NgModule({
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatChipsModule,
    GalleriaModule,
    MatIconModule,
    MatTabsModule
  ],
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatChipsModule,
    GalleriaModule,
    MatIconModule,
    MatTabsModule
  ]
})
export class NgMaterialModule { }
