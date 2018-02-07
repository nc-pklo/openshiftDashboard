import { Component, OnInit } from '@angular/core';
import { Environment } from '../../models/Environmnet';
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
  // environmentLinks: 
  // hideLinks? : true ;


  constructor( private environmentsListService: EnvironmentsListService, private environemntsLinksSerrvice : EnvironmentsLinksService
  ) { }

  ngOnInit() {
    this.environmentsListService.getEnvironments()
    .subscribe(data => { 
      this.environmentsList = data;

      //adding 4 properties for toggling views
      for (var i=0; i<this.environmentsList.length ; i++) {
        this.environmentsList[i]["showLinks"]=true;
        this.environmentsList[i]["showApps"]=true;
        this.environmentsList[i]["showEndpts"]=true;
        this.environmentsList[i]["showDBPorts"]=true;
      }
      console.log(this.environmentsList);
    });
  }

  //LINKS
  showLinks(environmentName:string){  //provides set of links to environmnet
    var environmentLinks = this.environemntsLinksSerrvice.getEnvironmentsLinks();
    environmentLinks.PSRM = environmentLinks.PSRM.replace('dock', environmentName);
    environmentLinks.PSRM2 = environmentLinks.PSRM2.replace('dock', environmentName);
    environmentLinks.TP = environmentLinks.TP.replace('dock', environmentName);
    environmentLinks.BAW = environmentLinks.BAW.replace('dock', environmentName);
    environmentLinks.FHP = environmentLinks.FHP.replace('dock', environmentName);
    console.log(environmentLinks);
    return environmentLinks;
  }

  toggleShowLinks(environment:Environment) {
    environment.showLinks=!environment.showLinks;
  }  



}
