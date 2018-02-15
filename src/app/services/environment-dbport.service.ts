import { Injectable } from '@angular/core';
import { EnvironmentDbport } from '../models/EnvironmentDbport'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class EnvironmentDbportService {

  // environmentDbport : EnvironmentDbport;

  environmentDbportUrl : string = '';
  genericEnvironmentDbportUrl = 'http://localhost:8088/api/dashboard/environment/dock/opened-port';

  constructor(private http: HttpClient) { }

  //AJAX GET
  getEnvironmentDbport( environmentName : string ): Observable<EnvironmentDbport[]>{
    this.environmentDbportUrl = this.genericEnvironmentDbportUrl.replace('dock', environmentName);
    return this.http.get<EnvironmentDbport[]>(this.environmentDbportUrl);
  }

}

