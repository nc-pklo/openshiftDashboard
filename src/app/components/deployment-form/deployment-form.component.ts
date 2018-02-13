import { Component, OnInit } from '@angular/core';

import { NgModel } from '@angular/forms';

import { EnvironmentJenkins } from '../../models/EnvironmentJenkins';

import { EnvironmentJenkinsService } from '../../services/environment-jenkins.service';


@Component({
  selector: 'app-deployment-form',
  templateUrl: './deployment-form.component.html',
  styleUrls: ['./deployment-form.component.css']
})
export class DeploymentFormComponent implements OnInit {
  environmentJenkins: EnvironmentJenkins = {
    dockerEnv: '',
    requester: '',
    releaseAll: null,
    releaseTestUtilities: null,
    requestDate: null,
    provisionDate: null,
    provisionState: null,
    integrated: null,
    visible: null
  };

  constructor(private environmentJenkinsService: EnvironmentJenkinsService) { }

  ngOnInit() {
  }


  onSubmit(e) {
    console.log(this.environmentJenkins);
    console.log("123");
    e.preventDefault();
    this.environmentJenkinsService.deployEnvironment(this.environmentJenkins as EnvironmentJenkins)
      .subscribe(environmentJenkins => {
        console.log(environmentJenkins);
      });
  }


}
