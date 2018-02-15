import { Component, OnInit, Input } from '@angular/core';
import { EnvironmentDbport } from '../../models/EnvironmentDbport';
import { EnvironmentDbportService } from '../../services/environment-dbport.service';

@Component({
  selector: 'app-environment-dbport',
  templateUrl: './environment-dbport.component.html',
  styleUrls: ['./environment-dbport.component.css']
})
export class EnvironmentDbportComponent implements OnInit {
  environmentDbport : EnvironmentDbport[];
  @Input() public environmentName : string;

  constructor(private environmentDbportService : EnvironmentDbportService) { }

  ngOnInit() {
    this.getEnvironmentDbportService()
  }

  getEnvironmentDbportService() {
    this.environmentDbportService.getEnvironmentDbport( this.environmentName )
    .subscribe(data => {
      this.environmentDbport = data;
    })
  }

}

 