import { Injectable } from '@angular/core';
import { Environment } from '../models/Environmnet'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EnvironmentsListService {
  environmentsList: Environment[];

  environmentsListUrl: string = 'http://localhost:8088/api/dashboard/environment';


  constructor(private http: HttpClient) { }

   //AJAX GET
   getEnvironments(): Observable<Environment[]>{
    return this.http.get<Environment[]>(this.environmentsListUrl);
  }

}
