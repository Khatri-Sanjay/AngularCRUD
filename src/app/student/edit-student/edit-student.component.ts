import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {

  formDetails: FormGroup = new FormGroup({});
  studentDetails: any;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.activatedRoute.params.subscribe((res: any) => {
      console.log("current route details: ", res);
      this.getStudentDetailsByStudentId(res?.id);
    });
  }

  get form(): { [key: string]: AbstractControl } {
    return this.formDetails.controls;
  }

  initForm(){
    this.formDetails = this.formBuilder.group({
      name: [undefined, Validators.compose([Validators.required, Validators.minLength(4)])],
      email: [undefined, Validators.compose([Validators.required,Validators.minLength(4)])],
      dateOfBirth : [undefined, Validators.compose([Validators.required,Validators.minLength(4)])],
      contact: [undefined, Validators.compose([Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10)])],
      address : [undefined, Validators.compose([Validators.required,Validators.minLength(4)])]
    });
  }

  getStudentDetailsByStudentId(userId: number) {
    this.studentService.getStudentDetailsByStudentId(userId).subscribe({
      next: (response: any) => {
        this.studentDetails = response;
        this.formDetails.patchValue(response);
      }
    });
  }

  onEditDetails() {
    this.studentService.editStudentDetailsByStudentId(this.studentDetails.id, this.formDetails.value).subscribe(
      {
        next : (value) => {
          this.onGoBack();
        },
      }
    );
  }

  onGoBack() {
    this.location.back();
  }


}
