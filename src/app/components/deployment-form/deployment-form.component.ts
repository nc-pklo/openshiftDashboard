import { Component, OnInit } from '@angular/core';

import { EnvironmentJenkins } from '../../models/EnvironmentJenkins';

import { EnvironmentJenkinsService } from '../../services/environment-jenkins.service';
 

@Component({
  selector: 'app-deployment-form',  
  templateUrl: './deployment-form.component.html',
  styleUrls: ['./deployment-form.component.css']
})
export class DeploymentFormComponent implements OnInit {
  environmentJenkins : EnvironmentJenkins;

  constructor(private environmentJenkinsService: EnvironmentJenkinsService) { }

  ngOnInit() {
  }

  addEnvironment(dockerEnv, requester, releaseAll, releaseTestUtilities, integrated, visible) {
    if(!dockerEnv || !requester || !releaseAll || !releaseTestUtilities) {
      alert("Please fill environment properties");
    } else {
      console.log(dockerEnv, requester, releaseAll, releaseTestUtilities, integrated, visible);
      this.environmentJenkinsService.deployEnvironment({dockerEnv, requester, releaseAll, releaseTestUtilities, integrated, visible} as EnvironmentJenkins)
      .subscribe(environmentJenkins => {
        console.log(environmentJenkins);
      });
    }

  }


  onSubmit(e) {
    console.log("onSubmit");

    e.preventDefault();
  }


}
