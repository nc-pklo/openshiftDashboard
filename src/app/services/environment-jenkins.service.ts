import { Injectable } from '@angular/core';

import { EnvironmentJenkins } from '../models/EnvironmentJenkins';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  // headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  headers: new HttpHeaders({ })

}


@Injectable()
export class EnvironmentJenkinsService {
  environmentJenkinsPOSTUrl: string = 'http://localhost:8088/jenkins-request';


  constructor(private http: HttpClient) { }

  deployEnvironment(environmentJenkins: EnvironmentJenkins): Observable<EnvironmentJenkins> {
    return this.http.post<EnvironmentJenkins>(this.environmentJenkinsPOSTUrl, environmentJenkins, httpOptions);

  }
}