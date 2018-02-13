import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EnvironmentComponent } from './components/environment/environment.component';



import { HttpClientModule } from '@angular/common/http';
import { EnvironmentsListComponent } from './components/environments-list/environments-list.component';
import { EnvironmentsListService } from './services/environments-list.service';
import { EnvironmentsLinksService } from './services/environments-links.service';
import { EnvironmentsAppsService } from './services/environments-apps.service';
import { EnvironmentAppsComponent } from './components/environment-apps/environment-apps.component';
import { EnvironmentsEndptsService } from './services/environments-endpts.service';
import { EnvironmentEndptsComponent } from './components/environment-endpts/environment-endpts.component';
import { EnvironmentJenkinsService } from './services/environment-jenkins.service';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DeploymentComponent } from './components/deployment/deployment.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DeploymentFormComponent } from './components/deployment-form/deployment-form.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EnvironmentComponent,
    EnvironmentsListComponent,
    EnvironmentAppsComponent,
    EnvironmentEndptsComponent,
    HomeComponent,
    DeploymentComponent,
    NotFoundComponent,
    DeploymentFormComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EnvironmentsListService, EnvironmentsLinksService, EnvironmentsAppsService, EnvironmentsEndptsService, EnvironmentJenkinsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
