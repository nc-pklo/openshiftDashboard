import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { EnvironmentsListComponent } from './components/environments-list/environments-list.component';
import { DeploymentComponent } from './components/deployment/deployment.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



const routes : Routes = [
  {path: '', component: HomeComponent },
  {path: 'environments', component: EnvironmentsListComponent },
  {path: 'deployment', component: DeploymentComponent },
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}