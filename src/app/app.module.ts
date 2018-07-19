import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SlideshowModule} from 'ng-simple-slideshow';
import { RouterModule, Routes } from "@angular/router";

import { NgMaterialModule } from "./ngMaterial.module";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GreaterThanDatePipe } from './pipes/greater-than-date.pipe';
import { StaffComponent } from "./staff/staff.component";
import { ScheduleComponent } from "./schedule/schedule.component";
import { RosterComponent } from "./roster/roster.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { HeaderComponent } from "./header/header.component";
import { PlayerCardComponent } from "./components/playerCard/player-card.component";
import { IsActiveFilterPipe } from "./isActive.filter";

const appRoutes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full" },
  { path: 'home',      component: HomeComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'roster', component: RosterComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    GreaterThanDatePipe,
    StaffComponent,
    ScheduleComponent,
    RosterComponent,
    AboutusComponent,
    HeaderComponent,
    PlayerCardComponent,
    IsActiveFilterPipe
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
