import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { CountModule } from './count/count.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeroesModule, CountModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
