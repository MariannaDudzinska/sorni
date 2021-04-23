import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsComponent } from './pages/cons/cons.component';
import { RpgComponent } from './pages/rpg/rpg.component';
import { WordWallComponent } from './pages/word-wall/word-wall.component';
import { AboutComponent } from './pages/about/about.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsComponent,
    RpgComponent,
    WordWallComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'cons', component: ConsComponent },
      { path: 'rpg', component: RpgComponent },
      { path: 'word-walls', component: WordWallComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
