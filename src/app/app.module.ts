import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EnvironmentComponent } from './components/environment/environment.component';



import { HttpClientModule } from '@angular/common/http';
import { EnvironmentsListComponent } from './components/environments-list/environments-list.component';
import { EnvironmentsListService } from './services/environments-list.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EnvironmentComponent,
    EnvironmentsListComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EnvironmentsListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
