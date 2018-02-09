import { Component, OnInit, Input } from '@angular/core';
import { EnvironmentApps } from '../../models/EnvironmentApps';
import { EnvironmentsAppsService } from '../../services/environments-apps.service';
import { EventEmitter } from '@angular/core';



@Component({
  selector: 'app-environment-apps',
  templateUrl: './environment-apps.component.html',
  styleUrls: ['./environment-apps.component.css']
})


export class EnvironmentAppsComponent implements OnInit {

  environmentAppsList : EnvironmentApps[];

  @Input() public environmentName: string; //have to be injected !!!!!!!!!!!!!!!!!!

  constructor(private environmentsAppsService: EnvironmentsAppsService) { }

  ngOnInit() { //nie może być on Init bo najpierw trzeba wstrzyknąć !!!!

    this.getEnvironmentAppsList();
    
    
  }

  getEnvironmentAppsList() {
      console.log("environmentApps.ts: " + this.environmentName);
  
      this.environmentsAppsService.getEnvironmentAppsList(this.environmentName)
      .subscribe(data => {
        this.environmentAppsList = data;
      }) 
    }



  // getEnvironmentAppsList(environmentName:string) {
  //   console.log("environmentApps.ts: " + environmentName);

  //   this.environmentsAppsService.getEnvironmentAppsList(environmentName)
  //   .subscribe(data => {
  //     this.environmentAppsList = data;
  //   }) 
  //   // console.log(this.environmentAppsList);
  // }




}
