import { Component, OnInit, Input } from '@angular/core';
import { EnvironmentEndpts } from '../../models/EnvironmentEndpts';
import { EnvironmentsEndptsService } from '../../services/environments-endpts.service';

@Component({
  selector: 'app-environment-endpts',
  templateUrl: './environment-endpts.component.html',
  styleUrls: ['./environment-endpts.component.css']
})
export class EnvironmentEndptsComponent implements OnInit {
  environmentEndptsList : EnvironmentEndpts[];
  @Input() public environmentName: string; // is injected

  constructor(private environmentsEndptsService : EnvironmentsEndptsService) { }

  ngOnInit( ) {
    this.getEnvironmntsEndptsService()
  }

  getEnvironmntsEndptsService() {
    this.environmentsEndptsService.getEnvironmentEndptsList( this.environmentName )
    .subscribe(data => {
      this.environmentEndptsList = data;
    })
  }

}


