import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeersComponent } from './beers/beers.component';
import { HttpClientModule } from '@angular/common/http';
import { BeersService } from './beers.service';

@NgModule({
  declarations: [
    AppComponent,
    BeersComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BeersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
