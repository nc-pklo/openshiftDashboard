import { Component, OnInit, ViewChild } from '@angular/core';
import { Environment } from '../../models/Environmnet';
import { EnvironmentLinks } from '../../models/EnvironmentLinks';
import { EnvironmentsListService } from '../../services/environments-list.service';
import { EnvironmentsLinksService } from '../../services/environments-links.service';
import { EnvironmentAppsComponent} from '../environment-apps/environment-apps.component'
 

@Component({
  selector: 'app-environments-list',
  templateUrl: './environments-list.component.html',
  styleUrls: ['./environments-list.component.css'],
})


export class EnvironmentsListComponent implements OnInit {

  environmentsList : Environment[] ;
  environmentLinks: EnvironmentLinks;
  // //crosspassing
  public envNameToExport :string;
  @ViewChild(EnvironmentAppsComponent) environmentAppsComponent : EnvironmentAppsComponent; 


  constructor( private environmentsListService: EnvironmentsListService, private environemntsLinksSerrvice : EnvironmentsLinksService
  ) { }

  ngOnInit() {
    this.environmentsListService.getEnvironments()
    .subscribe(data => { 
      this.environmentsList = data;
      //adding 4 properties for toggling views
      for (var i=0; i<this.environmentsList.length ; i++) {
        this.environmentsList[i]["showLinks"]=false;
        this.environmentsList[i]["showApps"]=false;
        this.environmentsList[i]["showEndpts"]=false;
        this.environmentsList[i]["showDBPorts"]=false;
      }
    });
  }

  hideAll(environment:Environment) {
    environment.showLinks=false;
    environment.showApps=false;
    environment.showDBPorts=false;
    environment.showDBPorts=false;
  }

  //LINKS
  produceLinks(environmentName:string){  //provides set of links to environmnet
    // environment.showLinks=true;
    var envLinks = this.environemntsLinksSerrvice.getEnvironmentsLinks();
    envLinks.PSRM = envLinks.PSRM.replace('dock', environmentName);
    envLinks.PSRM2 = envLinks.PSRM2.replace('dock', environmentName);
    envLinks.TP = envLinks.TP.replace('dock', environmentName);
    envLinks.BAW = envLinks.BAW.replace('dock', environmentName);
    envLinks.FHP = envLinks.FHP.replace('dock', environmentName);
    envLinks.OS = envLinks.OS.replace('dock', environmentName);
    this.environmentLinks=envLinks;
  }
  toggleShowLinks(environment:Environment) {
    environment.showLinks=!environment.showLinks;
  }  

  //APPS
  toggleShowApps(environment:Environment) {
    environment.showApps=!environment.showApps;
  }  

  sendEnvNameToExport(envName:string){
    // this.envNameToExport.emit(envName);
    // this.envNameToExport=envName;
    // console.log(envName);
    // this.environmentAppsComponent.getEnvironmentAppsList("dock01") ;
  }
  
  // getEnvironmentApps(envName:string){
  //   console.log("List.ts: " + envName)
  //   this.environmentAppsComponent.getEnvironmentAppsList(envName);
  // }





}
