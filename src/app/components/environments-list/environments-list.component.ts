import { Component, OnInit } from '@angular/core';
import { Environment } from '../../models/Environmnet';
import { EnvironmentLinks } from '../../models/EnvironmentLinks';
import { EnvironmentsListService } from '../../services/environments-list.service';
import { EnvironmentsLinksService } from '../../services/environments-links.service';

@Component({
  selector: 'app-environments-list',
  templateUrl: './environments-list.component.html',
  styleUrls: ['./environments-list.component.css']
})



export class EnvironmentsListComponent implements OnInit {

  //parameters
  environmentsList : Environment[] ;
  environmentLinks: EnvironmentLinks;



  constructor( private environmentsListService: EnvironmentsListService, private environemntsLinksSerrvice : EnvironmentsLinksService
  ) { }

  ngOnInit() {
    this.environmentsListService.getEnvironments()
    .subscribe(data => { 
      this.environmentsList = data;

      //adding 4 properties for toggling views
      for (var i=0; i<this.environmentsList.length ; i++) {
        this.environmentsList[i]["showLinks"]=false;
        this.environmentsList[i]["showApps"]=true;
        this.environmentsList[i]["showEndpts"]=true;
        this.environmentsList[i]["showDBPorts"]=true;
      }
      console.log(this.environmentsList);
    });
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
    this.environmentLinks=envLinks;
  }

  toggleShowLinks(environment:Environment) {
    environment.showLinks=!environment.showLinks;
  }  



}
