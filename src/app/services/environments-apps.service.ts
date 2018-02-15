import { Injectable } from '@angular/core';
import { EnvironmentApps } from '../models/EnvironmentApps'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class EnvironmentsAppsService {

  // environmentAppsList: EnvironmentApps[];

 
  environmentAppsListUrl : string = '';
  genericEnvironmentAppsListUrl = 'http://localhost:8088/api/dashboard/environment/dock/application';
  
  constructor(private http: HttpClient) { }
  
  //AJAX GET
  getEnvironmentAppsList( environmentName : string ): Observable<EnvironmentApps[]> {
    
    this.environmentAppsListUrl = this.genericEnvironmentAppsListUrl.replace('dock', environmentName);
    return this.http.get<EnvironmentApps[]>(this.environmentAppsListUrl);
  }

}