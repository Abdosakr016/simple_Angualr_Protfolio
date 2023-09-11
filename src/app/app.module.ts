import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    SkillComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
