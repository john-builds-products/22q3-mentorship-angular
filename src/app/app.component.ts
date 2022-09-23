import { Call } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { JobsAPI } from './services/jobs-api';
import {Observable} from "rxjs";
import { MatDialog } from '@angular/material/dialog';
import { CreateJobFormComponent } from './components/create-job-form/create-job-form.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})

export class AppComponent implements OnInit {

  jobList: any;
  searchText: any;
  searchText2: any;
  searchText3: any;


  constructor(
    private jobsAPI: JobsAPI,
    private  dialogRef : MatDialog
    ) { 
  }

  openDialog(){
    this.dialogRef.open(CreateJobFormComponent);
  }

  ngOnInit() {
    this.jobsAPI.getJobs().subscribe(data => {
        this.jobList = data;
    });
  }

}
