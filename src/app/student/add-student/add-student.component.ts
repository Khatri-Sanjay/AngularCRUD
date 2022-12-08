import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  formDetails: FormGroup = new FormGroup({})
  submitted: boolean = false;
  isSubmitting: boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  get form(): { [key: string]: AbstractControl } {
    return this.formDetails.controls;
  }

  onSubmit(){

  }

  dateCreated(event: any){
    event.toJSON().split('T')[0];
  }

}
