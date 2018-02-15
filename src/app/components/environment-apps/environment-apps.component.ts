import { Component, OnInit, Input } from '@angular/core';
import { EnvironmentApps } from '../../models/EnvironmentApps';
import { EnvironmentsAppsService } from '../../services/environments-apps.service';

@Component({
  selector: 'app-environment-apps',
  templateUrl: './environment-apps.component.html',
  styleUrls: ['./environment-apps.component.css']
})

export class EnvironmentAppsComponent implements OnInit {
  environmentAppsList : EnvironmentApps[];
  @Input() public environmentName: string; //is injected

  constructor(private environmentsAppsService: EnvironmentsAppsService) { }

  ngOnInit() { //nie może być on Init bo najpierw trzeba wstrzyknąć !!!!
    this.getEnvironmentAppsList();
  }

  getEnvironmentAppsList() {
      this.environmentsAppsService.getEnvironmentAppsList(this.environmentName)
      .subscribe(data => {
        this.environmentAppsList = data;
      }) 
    }

}
