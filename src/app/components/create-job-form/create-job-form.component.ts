import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-create-job-form',
  templateUrl: './create-job-form.component.html',
  styleUrls: ['./create-job-form.component.scss']
})
export class CreateJobFormComponent implements OnInit {

 newJobListing: FormGroup;

  constructor(public dialogRef: MatDialogRef<CreateJobFormComponent>,
    private fb: FormBuilder) { 
  }

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit(): void {

    this.newJobListing = this.fb.group({
      jobTitle : ['', [Validators.minLength(4),goodNameValidator(), Validators.required]],
      jobDescription : '',
      hiringCompany : '',
      hiringManager : [''],
      contactPhone : [''],
      estimatedSalary : [''],
    jobLocation : this.fb.group({
      street: '',
      city: '',
      state: '',
      zip: ''
    })
  })

  }

}



export function goodNameValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

      const value = control.value;

      if (!value) {
          return null;
      }

      const isClown = /clown/.test(value);

      const hasNumeric = /[0-9]+/.test(value);

      const passwordValid = !isClown && !hasNumeric;

      return !passwordValid ? {passwordStrength:true}: null;
  }
}