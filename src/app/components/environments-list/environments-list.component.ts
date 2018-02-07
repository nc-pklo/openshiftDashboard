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
  hideLinks? : true ;






  constructor( private environmentsListService: EnvironmentsListService, private environemntsLinksSerrvice : EnvironmentsLinksService
  ) { }

  ngOnInit() {
    this.environmentsListService.getEnvironments()
    .subscribe(data => { 
      // console.log(data);
      this.environmentsList = data 
    });
  }

  //provides set of links to environmnet
  showLinks(environmentName:string){
    var environmentLinks = this.environemntsLinksSerrvice.getEnvironmentsLinks();
    environmentLinks.PSRM = environmentLinks.PSRM.replace('dock', environmentName);
    environmentLinks.PSRM2 = environmentLinks.PSRM2.replace('dock', environmentName);
    environmentLinks.TP = environmentLinks.TP.replace('dock', environmentName);
    environmentLinks.BAW = environmentLinks.BAW.replace('dock', environmentName);
    environmentLinks.FHP = environmentLinks.FHP.replace('dock', environmentName);
    console.log(environmentLinks);

    environmentLinks["isHidden"]="false";

    console.log(environmentLinks);
    return environmentLinks;
  }




}
