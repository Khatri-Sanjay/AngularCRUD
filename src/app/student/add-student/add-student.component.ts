import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/model/student.model';
import { StudentService } from 'src/app/service/student.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  formDetails: FormGroup = new FormGroup({})
  submitted: boolean = false;
  isSubmitting: boolean = false;
  student = new Student();


  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private studentService: StudentService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  get form(): { [key: string]: AbstractControl } {
    return this.formDetails.controls;
  }

  onSubmit(formDetails: any){
    console.log("Submit bhayo")
    this.submitted=true;

    if(this.formDetails.invalid){
      return;
    }

    console.log("The value after submit the form", this.formDetails.value);

    this.student.name = formDetails.name;
    this.student.email = formDetails.email;
    this.student.contact = formDetails.contact;
    this.student.dateOfBirth = formDetails.dateOfBirth;
    this.student.address = formDetails.address;

    if(this.formDetails.valid){
      this.addStudent(this.student)
    }

    console.log("Form submit succesfully")
    this.formDetails.reset();
    // this.location.back();
    this.router.navigate(['/student-list'])

  }

  addStudent(student: any){
    this.studentService.onAddStudent(student).subscribe(
      (response:any)=>{
        this.isSubmitting=true;
      
        // this.router.navigate(['auth/login'])
        console.log("Data insert success");
      },
      (error:any)=>{
        // this.isSubmitting=false;
        console.error("Error to insert data");
      }
    );
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

  onGoback(){
    this.router.navigate(['/student-list']);
  }

}
