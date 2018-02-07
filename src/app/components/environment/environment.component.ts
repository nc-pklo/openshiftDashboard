import { Component, OnInit } from '@angular/core';
import { Environment } from '../../models/Environmnet'

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css']
})


export class EnvironmentComponent implements OnInit {
  //properties
  environment: Environment;


  constructor() { }

  ngOnInit() {
  }

}
