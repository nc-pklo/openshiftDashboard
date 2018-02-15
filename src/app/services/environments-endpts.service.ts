import { Injectable } from '@angular/core';
import { EnvironmentEndpts } from '../models/EnvironmentEndpts'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class EnvironmentsEndptsService {

  // environmentEndptsList: EnvironmentEndpts[]; <-- To delete also in other

  environmentEndptsListUrl : string = '';
  genericEnvironmentEndptsListUrl = 'http://localhost:8088/api/dashboard/environment/dock/public-endpoint';
  
  constructor(private http: HttpClient) { }
  
  //AJAX GET
  getEnvironmentEndptsList( environmentName : string ): Observable<EnvironmentEndpts[]> {
    
    this.environmentEndptsListUrl = this.genericEnvironmentEndptsListUrl.replace('dock', environmentName);
    return this.http.get<EnvironmentEndpts[]>(this.environmentEndptsListUrl);
  }

}
 