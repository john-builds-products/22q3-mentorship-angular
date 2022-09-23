import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class JobsAPI {
  constructor(private http: HttpClient) { 
  }

  configUrl = 'http://localhost:3000';

  getJobs() {
    return this.http.get(this.configUrl + '/jobs');
  }

}
