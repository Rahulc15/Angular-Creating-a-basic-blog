import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AboutComponent } from './about/about.component';

@NgModule({
   declarations: [
      AppComponent,
      FooterComponent,
      NavBarComponent,
      ArticleListComponent,
      AboutComponent
   ],
   imports: [
	 BrowserModule,
	 AppRoutingModule
	],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
