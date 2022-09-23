import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { JobsAPI } from './services/jobs-api';
import { CardComponent } from './components/card/card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FilterBySectorPipe, FilterExamplePipe, FilterByIndustryExamplePipe } from './pipes/filter-example.pipe';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateJobFormComponent } from './components/create-job-form/create-job-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { forbiddenNameValidator } from './forrbidden-name.directive';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SearchBarComponent,
    FilterExamplePipe,
    FilterByIndustryExamplePipe,
    FilterBySectorPipe,
    CreateJobFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    JobsAPI,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
