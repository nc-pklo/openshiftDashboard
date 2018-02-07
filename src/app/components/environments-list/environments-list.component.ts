import { Component, OnInit } from '@angular/core';
import { Environment } from '../../models/Environmnet';
import { EnvironmentsListService } from '../../services/environments-list.service';

@Component({
  selector: 'app-environments-list',
  templateUrl: './environments-list.component.html',
  styleUrls: ['./environments-list.component.css']
})
export class EnvironmentsListComponent implements OnInit {

  //parameters
  environmentsList : Environment[] ;

  constructor( private environmentsListService: EnvironmentsListService ) { }

  ngOnInit() {

    this.environmentsListService.getEnvironments()
    .subscribe(data => { 
      console.log(data);
      this.environmentsList = data 
    });

    console.log(this.environmentsList);

  }

}
